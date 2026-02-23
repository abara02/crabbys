const WP_GRAPHQL_URL = 'https://olivedrab-loris-573312.hostingersite.com/graphql';

export interface DailySpecialData {
    imageUrl: string;
    dateText: string;
}

export async function getDailySpecials(): Promise<DailySpecialData | null> {
    let currentQuery = `
        query GetDailySpecials {
            specials(first: 1) {
                nodes {
                    dailySpecials_Fields {
                        dailySpecials {
                            node {
                                sourceUrl
                            }
                        }
                        daily_specials {
                            node {
                                sourceUrl
                            }
                        }
                        dateSpecials
                        date_specials
                    }
                }
            }
        }
    `;

    const fetchWithQuery = async (q: string) => {
        const response = await fetch(WP_GRAPHQL_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: q }),
        });
        return await response.json();
    };

    try {
        let result = await fetchWithQuery(currentQuery);

        // Resilience: Strip missing fields if WordPress has a different schema
        let attempts = 0;
        while (result.errors && attempts < 10) {
            const errorMsg = result.errors[0].message;
            const match = errorMsg.match(/[Ff]ield ["']([^"']+)["']/);
            const fieldToStrip = match ? match[1] : null;

            if (fieldToStrip) {
                // Robust stripping: Find the field and its selection set if it has one
                const fieldIndex = currentQuery.indexOf(fieldToStrip);
                if (fieldIndex !== -1) {
                    let endPos = fieldIndex + fieldToStrip.length;
                    // Check if followed by a selection set { ... }
                    const nextCharMatch = currentQuery.slice(endPos).match(/^\s*\{/);
                    if (nextCharMatch) {
                        // Find matching closing brace
                        let braceCount = 0;
                        let foundStart = false;
                        for (let i = endPos; i < currentQuery.length; i++) {
                            if (currentQuery[i] === '{') {
                                braceCount++;
                                foundStart = true;
                            } else if (currentQuery[i] === '}') {
                                braceCount--;
                            }
                            if (foundStart && braceCount === 0) {
                                endPos = i + 1;
                                break;
                            }
                        }
                    }
                    currentQuery = currentQuery.slice(0, fieldIndex) + currentQuery.slice(endPos);
                }

                // Cleanup: Remove any parent fields that now have empty braces { }
                let cleaned = true;
                while (cleaned) {
                    const prev = currentQuery;
                    currentQuery = currentQuery.replace(/[\w_]+\s*\{\s*\}/g, '');
                    cleaned = prev !== currentQuery;
                }

                result = await fetchWithQuery(currentQuery);
                attempts++;
            } else {
                break;
            }
        }

        if (result.errors) {
            console.error('❌ GraphQL Errors for Specials:', JSON.stringify(result.errors, null, 2));
            throw new Error(result.errors[0].message);
        }

        const node = result?.data?.specials?.nodes?.[0];
        if (!node) return null;

        // Extract data with multiple potential field name versions
        const fields = node.dailySpecials_Fields || node.daily_specials_fields || {};

        // Image extraction
        const dailySpecialsField = fields.dailySpecials || fields.daily_specials;
        const imageUrl = dailySpecialsField?.node?.sourceUrl || '';

        // Date extraction
        const dateText = fields.dateSpecials || fields.date_specials || '';

        return {
            imageUrl,
            dateText
        };
    } catch (error) {
        console.error('Error fetching specials from WordPress:', error);
        return null;
    }
}

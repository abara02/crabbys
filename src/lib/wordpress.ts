const WP_GRAPHQL_URL = 'https://olivedrab-loris-573312.hostingersite.com/graphql';

export interface DailySpecialData {
    imageUrl: string;
    dateText: string;
}

export interface SeasonalSpecialData {
    imageUrl: string;
    label: string;
}

export async function getDailySpecials(): Promise<DailySpecialData | null> {
    const query = `
        query GetDailySpecials {
            specials(first: 1) {
                nodes {
                    dailySpecials {
                        dailySpecials {
                            node {
                                sourceUrl
                            }
                        }
                        dayOfSpecials
                    }
                }
            }
        }
    `;

    try {
        const response = await fetch(WP_GRAPHQL_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
        });

        const result = await response.json();

        if (result.errors) {
            console.error('❌ GraphQL Errors for Specials:', JSON.stringify(result.errors, null, 2));
            return null;
        }

        const node = result?.data?.specials?.nodes?.[0];
        if (!node) return null;

        const fields = node.dailySpecials || {};

        // Image extraction
        const imageUrl = fields.dailySpecials?.node?.sourceUrl || '';

        // Date extraction
        const rawDate = fields.dayOfSpecials || '';
        const dateText = rawDate
            ? new Date(rawDate).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            })
            : '';

        return {
            imageUrl,
            dateText,
        };
    } catch (error) {
        console.error('Error fetching specials from WordPress:', error);
        return null;
    }
}

export async function getSeasonalSpecials(): Promise<SeasonalSpecialData | null> {
    const query = `
        query GetSeasonalSpecials {
            seasonalSpecials(first: 1) {
                nodes {
                    seasonalSpecials {
                        seasonalSpecialsImage {
                            node {
                                sourceUrl
                            }
                        }
                        seasonalSpecialsLabel
                    }
                }
            }
        }
    `;

    try {
        const response = await fetch(WP_GRAPHQL_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query }),
        });

        const result = await response.json();

        if (result.errors) {
            console.error('❌ GraphQL Errors for Seasonal Specials:', JSON.stringify(result.errors, null, 2));
            return null;
        }

        const node = result?.data?.seasonalSpecials?.nodes?.[0];
        if (!node) return null;

        const fields = node.seasonalSpecials || {};
        const imageUrl = fields.seasonalSpecialsImage?.node?.sourceUrl || '';
        const label = fields.seasonalSpecialsLabel || '';

        return { imageUrl, label };
    } catch (error) {
        console.error('Error fetching seasonal specials from WordPress:', error);
        return null;
    }
}

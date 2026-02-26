const WP_GRAPHQL_URL = 'https://olivedrab-loris-573312.hostingersite.com/graphql';

export interface DailySpecialData {
    imageUrl: string;
    dateText: string;
}

export interface SeasonalSpecialData {
    imageUrl: string;
    label: string;
    endDate?: string;
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

export async function getSeasonalSpecials(): Promise<SeasonalSpecialData[]> {
    const query = `
        query GetSeasonalSpecials {
            seasonalSpecials(first: 10) {
                nodes {
                    seasonalSpecials {
                        menuTitle
                        addSeasonSpecials {
                            node {
                                sourceUrl
                            }
                        }
                        endDate
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
            return [];
        }

        const nodes = result?.data?.seasonalSpecials?.nodes || [];
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const specials: SeasonalSpecialData[] = nodes
            .map((node: any) => {
                const fields = node.seasonalSpecials || {};

                // Expiration Logic
                if (fields.endDate) {
                    const expirationDate = new Date(fields.endDate);
                    if (today > expirationDate) {
                        return null;
                    }
                }

                const imageUrl = fields.addSeasonSpecials?.node?.sourceUrl || '';
                const label = fields.menuTitle || '';

                if (!imageUrl) return null;

                return { imageUrl, label };
            })
            .filter((special: any): special is SeasonalSpecialData => special !== null);

        return specials;
    } catch (error) {
        console.error('Error fetching seasonal specials from WordPress:', error);
        return [];
    }
}

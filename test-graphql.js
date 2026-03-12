async function testQuery() {
    const url = 'https://olivedrab-loris-573312.hostingersite.com/graphql';

    try {
        const query = `
        query { 
            happenings(first: 5) { 
                nodes { 
                    title
                    post_happenings {
                        upload_happenings { node { sourceUrl } }
                        uploadHappenings { node { sourceUrl } }
                    }
                } 
            } 
        }`;
        
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query })
        });
        
        const data = await response.json();
        console.log("Happenings test data:", JSON.stringify(data, null, 2));
    } catch (e) {
        console.error(e);
    }
}
testQuery();

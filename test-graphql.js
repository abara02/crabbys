async function testQuery() {
    const url = 'https://olivedrab-loris-573312.hostingersite.com/graphql';

    try {
        console.log("Attempt 2: Checking what is inside the 'happenings' field group");
        // We know 'happenings' exists on type 'Happening'. Let's find out what's inside it.
        const query = `
        query { 
            happenings(first: 5) { 
                nodes { 
                    title
                    happenings {
                        uploadImage { node { sourceUrl } }
                        image { node { sourceUrl } }
                        picture { node { sourceUrl } }
                        photo { node { sourceUrl } }
                        upload_image { node { sourceUrl } }
                        file { node { sourceUrl } }
                        mediaItemUrl
                        sourceUrl
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
        console.log(JSON.stringify(data, null, 2));

    } catch (e) {
        console.error("Test failed:", e);
    }
}
testQuery();

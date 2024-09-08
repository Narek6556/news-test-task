function createUrl({ query, page }) {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
    const apiKey = process.env.EXPO_PUBLIC_API_KEY;

    return `${apiUrl}/search?page=${page}&show-fields=thumbnail&q=${query}&api-key=${apiKey}`;
}

function constructIndvidualArticle(id) {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
    const apiKey = process.env.EXPO_PUBLIC_API_KEY;

    return `${apiUrl}/${id}?show-fields=thumbnail,body&api-key=${apiKey}`;
}

async function fetchNewsWithQuery({ page, query }) {
    try {
        const response = await fetch(createUrl({ page: page, query: query }));

        const responseJson = await response.json();

        console.log(
            "[REQUEST]: ",
            createUrl({ page: page, query: query }),
            responseJson
        );

        return responseJson.response.results;
    } catch (err) {
        console.log("[API ERROR]", err);
    }

    return null;
}

async function fetchNewsById(id) {
    try {
        const response = await fetch(constructIndvidualArticle(id));
        const responseJson = await response.json();

        console.log("[REQUEST]: ", constructIndvidualArticle(id), responseJson);
        console.log(JSON.stringify(responseJson.response.content));

        return responseJson.response.content;
    } catch (err) {
        console.log("[API ERROR]", err);
    }

    return null;
}

export const NewsApi = {
    fetchNewsWithQuery,
    fetchNewsById,
};

function createUrl({ query, page }) {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
    const apiKey = process.env.EXPO_PUBLIC_API_KEY;

    return `${apiUrl}/search?page=${page}&show-fields=thumbnail&q=${query}&api-key=${apiKey}`;
}

async function fetchNews({ pageParam }) {
    try {
        const response = await fetch(createUrl({ page: pageParam }));

        const responseJson = await response.json();

        return responseJson.response.results;
    } catch (err) {
        console.log("[API ERROR]", err);
    }

    return null;
}

async function fetchNewsWithQuery({ page, query }) {
    // const { pageParam, queryKey } = params;
    // const [key, searhQuery] = queryKey;

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

export const NewsApi = {
    fetchNews,
    fetchNewsWithQuery,
};

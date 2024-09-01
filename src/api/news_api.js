async function fetchNews({ pageParam }) {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
    const apiKey = process.env.EXPO_PUBLIC_API_KEY;

    try {
        const response = await fetch(
            `${apiUrl}/search?page=${pageParam}&api-key=${apiKey}`
        );

        const responseJson = await response.json();

        return responseJson.response.results;
    } catch (err) {
        console.log("[API ERROR]", err);
    }

    return null;
}

export const NewsApi = {
    fetchNews,
};

import { useEffect, useState } from "react";
import { NewsApi } from "../../../core/api/news_api";

export default function useArticle(id) {
    const [article, setArticle] = useState();
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState();

    function getArticleById() {
        (async () => {
            setLoading(true);

            try {
                const article = await NewsApi.fetchNewsById(id);
                console.log(article);
                setArticle(article);
            } catch (err) {
                console.log(err);
                setError(err);
            }

            setLoading(false);
        })();
    }

    useEffect(getArticleById, []);

    return {
        article,
        isLoading,
        isError,
    };
}

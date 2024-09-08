import { useEffect, useRef } from "react";

import { NewsApi } from "../core/api/news_api";

import NewsActions from "../state/actions/news_actions";
import { useNewsContext } from "../state/context/news_context";

export function useNews() {
    const page = useRef(1);
    const { newsState, newsDispatch } = useNewsContext();
    const dispatch = newsDispatch;

    const {
        getNews,
        replaceWithNewPage,
        getNextNews,
        concatWithNewPage,
        getNewsError,
        getNextNewsError,
    } = NewsActions;

    function getInitialNews() {
        (async () => {
            dispatch(getNews());

            try {
                const news = await NewsApi.fetchNewsWithQuery({
                    page: page.current,
                    query: "",
                });

                dispatch(replaceWithNewPage(news));
            } catch (err) {
                dispatch(getNewsError());
            }
        })();
    }

    async function fetchNextPage() {
        dispatch(getNextNews());
        page.current += 1;

        try {
            const news = await NewsApi.fetchNewsWithQuery({
                page: page.current,
                query: newsState.query,
            });

            dispatch(concatWithNewPage(news));
        } catch (err) {
            dispatch(getNextNewsError(err));
        }
    }

    useEffect(getInitialNews, []);

    return {
        newsState,
        fetchNextPage,
    };
}

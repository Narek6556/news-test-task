import { useState, useRef, useMemo } from "react";
import debounce from "../helpers/debounce";
import { NewsApi } from "../core/api/news_api";
import NewsActions from "../state/actions/news_actions";
import { useNewsContext } from "../state/context/news_context";

export function useSearch() {
    const { newsDispatch } = useNewsContext();
    const [searchQuery, setSearchQuery] = useState("");
    const page = useRef(1);

    const searchFieldDebounce = useMemo(
        () =>
            debounce({
                cb: fetchNewsWithQuery,
                wait: 800,
            }),
        []
    );
    const { getNews, replaceWithNewPage, getNewsError } = NewsActions;

    async function fetchNewsWithQuery(searchQuery) {
        console.log("Fetch was invoked: ");
        page.current = 1;
        newsDispatch(getNews());

        try {
            const news = await NewsApi.fetchNewsWithQuery({
                page: page.current,
                query: searchQuery,
            });

            newsDispatch(replaceWithNewPage(news, searchQuery));
        } catch (err) {
            newsDispatch(getNewsError(err));
        }
    }

    return {
        searchFieldDebounce,
        searchQuery,
        setSearchQuery,
    };
}

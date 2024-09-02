import { useState, useEffect } from "react";

import { useInfiniteQuery } from "@tanstack/react-query";

import { NewsApi } from "../api/news_api";

export const useNews = () => {
    const [news, setNews] = useState([]);

    const { data, error, status, fetchNextPage } = useInfiniteQuery({
        queryKey: ["news"],
        queryFn: NewsApi.fetchNews,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            if (lastPage.length === 0) return null;

            return allPages.length + 1;
        },
    });

    useEffect(() => {
        if (data != null && data.pages != null) {
            if (news.length > 0) {
                setNews([...news, ...data.pages[data.pages.length - 1]]);
            } else {
                setNews([...data.pages[data.pages.length - 1]]);
            }
            
        }
    }, [data?.pages.length]);

    return {
        news: news,
        error,
        status,
        fetchNextPage,
    };
};

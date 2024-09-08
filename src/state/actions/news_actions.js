import { NewsActionTypes } from "../reducers/news_reducer";

const getNews = () => {
    return {
        type: NewsActionTypes.get_news,
    };
};

const replaceWithNewPage = (news, query = "") => {
    return {
        type: NewsActionTypes.replace_with_new_page,
        payload: {
            news: news,
            query,
        },
    };
};

const getNewsError = (err) => {
    return {
        type: NewsActionTypes.get_news_error,
        payload: err,
    };
};

const getNextNews = () => {
    return {
        type: NewsActionTypes.get_next_news,
    };
};

const concatWithNewPage = (news) => {
    return {
        type: NewsActionTypes.concat_new_page,
        payload: news,
    };
};

const getNextNewsError = (err) => {
    return {
        type: NewsActionTypes.get_next_news_error,
        payload: err,
    };
};

export default NewsActions = {
    getNews,
    replaceWithNewPage,
    getNextNews,
    concatWithNewPage,
    getNewsError,
    getNextNewsError,
};

export const NewsActionTypes = {
    concat_new_page: "CONCAT_NEW_PAGE",
    replace_with_new_page: "REPLACE_WITH_NEW_PAGE",
    get_next_news: "GET_NEXT_NEWS",
    get_next_news_error: "GET_NEXT_NEWS_ERROR",
    get_news: "GET_NEWS",
    get_news_error: "GET_NEWS_ERROR",
};

export const initialState = {
    isLoading: false,
    isLoadingNext: false,
    news: [],
    error: null,
    nextError: false,
    query: "",
};

export default function newsReducer(state = initialState, action) {
    switch (action.type) {
        case NewsActionTypes.get_news:
            return {
                ...state,
                isLoading: true,
            };
        case NewsActionTypes.replace_with_new_page:
            return {
                ...state,
                news: [...action.payload.news],
                query: action.payload.query,
                isLoading: false,
            };
        case NewsActionTypes.get_news_error:
            return {
                ...state,
                news: [],
                isLoading: false,
                error: action.payload,
            };
        case NewsActionTypes.get_next_news:
            return {
                ...state,
                isLoadingNext: true,
            };
        case NewsActionTypes.concat_new_page:
            return {
                ...state,
                news: [...state.news, ...action.payload],
                isLoadingNext: false,
            };
        case NewsActionTypes.get_next_news_error:
            return {
                ...state,
                news: [],
                isLoadingNext: false,
                nextError: action.payload,
            };
        default:
            return state.news;
    }
}

import { createContext, useContext } from "react";

const NewsContext = createContext();

export function useNewsContext() {
    return useContext(NewsContext);
}

export default NewsContext;

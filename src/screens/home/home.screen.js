import { useReducer } from "react";
import { View, StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import NewsList from "./components/news_list";
import SearchBar from "./components/search_bar";
import newsReducer, { initialState } from "../../state/reducers/news_reducer";
import NewsContext from "../../state/context/news_context";

export default function HomeScreen() {
    const [newsState, newsDispatch] = useReducer(newsReducer, initialState);

    const providerState = {
        newsState,
        newsDispatch,
    };

    return (
        <NewsContext.Provider value={providerState}>
            <SafeAreaView style={styles.container} edges={["top"]}>
                <View style={styles.searchBarContainer}>
                    <SearchBar />
                </View>
                <NewsList />
            </SafeAreaView>
        </NewsContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchBarContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    newsListContianer: {
        // height: "100%",
    },
});

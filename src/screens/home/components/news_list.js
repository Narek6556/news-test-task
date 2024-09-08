import {
    FlatList,
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
} from "react-native";

import { useNews } from "../../../hooks/use_news";
import NewsItem from "./news_item";

export default function NewsList({ navigation }) {
    const { newsState, fetchNextPage } = useNews();

    const { isLoading, isLoadingNext, error, nextError, news } = newsState;

    const newsList = news;

    const onEndReached = () => {
        if (isLoadingNext) return;
        fetchNextPage();
    };

    const _renderNewsItem = ({ item }) => {
        return <NewsItem newsItem={item} />;
    };

    const _renderFooter = () => {
        if (isLoadingNext) return <ActivityIndicator />;
        return <View />;
    };

    if (isLoading)
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size={"large"} />
            </View>
        );

    if (error) return <Text>{"Error"}</Text>;

    return (
        <View style={{ flex: 1 }}>
            {newsList.length > 0 && (
                <FlatList
                    data={newsList}
                    initialNumToRender={10}
                    renderItem={_renderNewsItem}
                    onEndReached={onEndReached}
                    keyExtractor={(item) => item.id}
                    onEndReachedThreshold={0.3}
                    showsVerticalScrollIndicator={false}
                    extraData={isLoading}
                    ListFooterComponent={_renderFooter}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

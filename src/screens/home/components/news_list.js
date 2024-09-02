import { FlatList, View, Text, StyleSheet } from "react-native";

import { useNews } from "../../../hooks/use_news";

export default function NewsList({ navigation }) {
    const { news, error, status, fetchNextPage } = useNews();

    const onEndReached = () => {
        console.log("Reached End");
        fetchNextPage();
    };

    const _renderNewsItem = ({ item }) => {
        return <Text style={styles.item}>{item.webTitle}</Text>;
    };

    const onDetailsPress = () => {
        navigation.push(ScreenNames.article_details);
    };

    return (
        <View>
            {news != null && (
                <FlatList
                    data={news}
                    renderItem={_renderNewsItem}
                    onEndReached={onEndReached}
                    keyExtractor={(item) => item.id}
                    onEndReachedThreshold={0.5}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
});

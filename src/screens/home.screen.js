import { Pressable, Text, View, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenNames from "../constants/screen_names";
import { useNews } from "../hooks/use_news";

export default function HomeScreen({ navigation }) {
    const { news, error, status, fetchNextPage } = useNews();

    const onDetailsPress = async () => {
        navigation.push(ScreenNames.article_details);
    };

    const onEndReached = () => {
        console.log("Reached End");
        fetchNextPage();
    };

    return (
        <SafeAreaView style={styles.container} edges={[]}>
            <View>
                {news != null && (
                    <FlatList
                        data={news}
                        renderItem={({ item }) => (
                            <Text style={styles.item}>{item.webTitle}</Text>
                        )}
                        onEndReached={onEndReached}
                        keyExtractor={(item) => item.id}
                        onEndReachedThreshold={0.5}
                    />
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
});

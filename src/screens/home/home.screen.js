import { View, StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import NewsList from "./components/news_list";

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container} edges={[]}>
            <View>
                <NewsList />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
    },
});

import {
    View,
    Text,
    Image,
    StyleSheet,
    ActivityIndicator,
    ScrollView,
    useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useArticle from "./hooks/use_article";
// import { article } from "../../core/mock/article";
import Animated from "react-native-reanimated";
import RenderHTML from "react-native-render-html";

export default function ArticleDetailsScreen({ route }) {
    const { id } = route.params;
    const { isLoading, isError, article } = useArticle(id);
    const { width } = useWindowDimensions();

    // console.log(article);

    return (
        <SafeAreaView edges={["top"]}>
            <View>
                {isLoading && (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size={"large"} />
                    </View>
                )}
                {article && (
                    <ScrollView>
                        <Image
                            source={{ uri: article.fields.thumbnail }}
                            style={styles.image}
                        />
                        <Text style={styles.title}>{article.webTitle}</Text>
                        <Text style={styles.date}>
                            {article.webPublicationDate}
                        </Text>
                        <View style={styles.body}>
                            <RenderHTML
                                source={{ html: article.fields.body }}
                                contentWidth={width}
                            />
                        </View>
                    </ScrollView>
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200,
        backgroundColor: "red",
        marginBottom: 12,
    },
    title: {
        fontSize: 21,
        fontWeight: "700",
        padding: 10,
    },
    date: {
        fontSize: 15,
        fontWeight: "400",
        padding: 5,
        color: "grey",
    },
    body: {
        padding: 10,
    },
    loadingContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    },
});

import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ScreenNames from "../../../constants/screen_names";
import Animated from "react-native-reanimated";

export default function NewsItem({ newsItem }) {
    const { webPublicationDate, webTitle, fields, id } = newsItem;
    const navigation = useNavigation();

    function onDetailsPress() {
        navigation.navigate(ScreenNames.article_details, {
            id,
        });
    }

    return (
        <Pressable onPress={onDetailsPress}>
            <View style={[styles.container, styles.shadowStyles]}>
                <View style={styles.row}>
                    <View
                        style={[
                            styles.column,
                            styles.image,
                            { alignItems: "center", justifyContent: "center" },
                        ]}
                    >
                        {fields && fields.thumbnail && (
                            <Image
                                source={{
                                    uri: fields.thumbnail,
                                }}
                                style={styles.image}
                            />
                        )}
                    </View>
                    <View style={styles.column}>
                        <Text
                            style={styles.title}
                            numberOfLines={2}
                            ellipsizeMode="tail"
                        >
                            {webTitle}
                        </Text>
                        <Text style={styles.date}>{webPublicationDate}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 12,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        height: 80,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    column: {
        flexDirection: "column",
        justifyContent: "space-between",
    },
    image: {
        width: 80,
        height: 50,
    },
    title: {
        width: 230,
        fontSize: 15,
        fontWeight: "600",
    },
    date: {
        fontSize: 12,
        color: "grey",
    },
    shadowStyles: {
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
});

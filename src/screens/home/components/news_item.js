import { View, StyleSheet, Image, Text } from "react-native";

export default function NewsItem({ newsItem }) {
    const { webPublicationDate, webTitle, fields } = newsItem;

    // console.log("SRC: ", fields.thumbnail);

    return (
        <View style={[styles.container, styles.shadowStyles]}>
            <View style={styles.row}>
                <View style={[styles.column, styles.image]}>
                    <Image
                        source={{
                            uri: "http://media.guim.co.uk/c66852bfdbebb7c12cf66b9b98ccc3fd55fafabf/0_13_640_384/500.jpg",
                        }}
                    />
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
        // backgroundColor: "gray",
        width: 80,
        height: 40,
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

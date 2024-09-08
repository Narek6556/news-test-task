import { TextInput, StyleSheet, View } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import { useSearch } from "../../../hooks/use_search";

export default function SearchBar() {
    const { searchQuery, setSearchQuery, searchFieldDebounce } = useSearch();

    return (
        <View style={[styles.container, styles.shadowStyles]}>
            <EvilIcons name="search" size={25} />
            <TextInput
                style={styles.searchField}
                value={searchQuery}
                onChangeText={(value) => {
                    searchFieldDebounce(value);
                    setSearchQuery(value);
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 8,
        paddingVertical: 8,
        backgroundColor: "white",
        flexDirection: "row",
        borderRadius: 10,
    },
    searchField: {
        fontSize: 20,
        paddingHorizontal: 6,
        width: "100%",
        // paddingVertical: 4,
    },
    shadowStyles: {
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
});

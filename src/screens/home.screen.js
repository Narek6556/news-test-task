import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { navigate } from "../../node_modules/@react-navigation/routers/src/CommonActions";
import ArticleDetailsScreen from "./article_details.screen";
import ScreenNames from "../constants/screen_names";

export default function HomeScreen({ navigation }) {
    
    const onDetailsPress = () => {
        navigation.push(ScreenNames.article_details);
    };

    return (
        <SafeAreaView>
            <View>
                <Pressable onPress={onDetailsPress}>
                    <Text>{"Hello"}</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/home.screen";
import ArticleDetailsScreen from "../screens/article_details.screen";
import ScreenNames from "../constants/screen_names";

const Stack = createNativeStackNavigator();

export default function HomeNavigation() {
    return (
        <Stack.Navigator initialRouteName={ScreenNames.home}>
            <Stack.Screen
                name={ScreenNames.home}
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name={ScreenNames.article_details}
                component={ArticleDetailsScreen}
                options={{ title: "ArticleDetailsScreen" }}
            />
        </Stack.Navigator>
    );
}

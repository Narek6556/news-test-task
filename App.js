import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "./src/navigation/home_screen.navigation";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTabNavigator = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName={ScreenNames.home}>
                <BottomTabNavigator.Screen
                    name={ScreenNames.home}
                    component={HomeNavigation}
                    options={{ headerShown: false }}
                />
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

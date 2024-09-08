import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import ScreenNames from "../constants/screen_names";
import HomeNavigation from "./home_screen.navigation";

const BottomTabNavigator = createBottomTabNavigator();

export default function NavigationWrapper() {
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator
                initialRouteName={ScreenNames.home_stack}
            >
                <BottomTabNavigator.Screen
                    name={ScreenNames.home_stack}
                    component={HomeNavigation}
                    options={{
                        headerShown: false,
                        // tabBarStyle: { display: "none" },
                    }}
                />
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    );
}

import { StatusBar } from "expo-status-bar";
import React from "react";
import HomeScreen from "./Screens/HomeScreen";
import InfoScreenOne from "./Screens/infoScreenOne";
import InfoScreenTwo from "./Screens/infoScreenTwo";
import InfoScreenThree from "./Screens/infoScreenThree";

import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="IntroOne"
          options={{ headerShown: false }}
          component={InfoScreenOne}
        />
        <Stack.Screen
          name="IntroTwo"
          options={{ headerShown: false }}
          component={InfoScreenTwo}
        />
        <Stack.Screen
          name="IntroThree"
          options={{ headerShown: false }}
          component={InfoScreenThree}
        />
      </Stack.Navigator>
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

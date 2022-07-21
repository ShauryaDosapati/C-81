import React from "react";
import { createTabNavigator } from "@react-navigation/Tab";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";

const Tab = createTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name="Home" component={TabNavigator} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
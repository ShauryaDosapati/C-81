import React from 'react';
import {CreateDrawerNavigator} from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from '../screens/Profile';

const Drawer =CreateDrawerNavigator();

const DrawerNavigator =()=>{
    return(
        <Drawer.Navigator screenOptions ={{headerShown:false}}>

            <Drawer.Screen name="Home" component={TabNavigator}/>
            <Drawer.Screen name="Profile" component={TabNavigator}/>

        </Drawer.Navigator>
        
    )
}
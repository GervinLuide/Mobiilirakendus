import React, {useEffect} from "react";
import {SafeAreaView, Image} from "react-native";
import Splash from "./src/screens/auth/Splash/index";
import Signup from "./src/screens/auth/Signup/index";
import Signin from "./src/screens/auth/Signin/index";
import {GoogleSignin} from "@react-native-google-signin/google-signin";
import {colors} from "./src/utils/colors";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Home from "./src/screens/app/Home";
import Favorites from "./src/screens/app/Favorites";
import Profile from "./src/screens/app/Profile";




import Config from "react-native-config";
import { NavigationContainer, StackActions } from "@react-navigation/native";

import { SafeAreaProvider } from "react-native-safe-area-context";


const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();


const Tabs = () => {
  return (
    <Tab.Navigator
     screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let icon;

        if (route.name === "Home") {
          icon = focused
          ? require("./src/assets/tabs/clarity_home-solid.png")
          : require("./src/assets/tabs/clarity_home-solid-2.png");
        } else if (route.name === "Favorites") {
          icon = focused
          ? require("./src/assets/tabs/marker1-2.png")
          : require("./src/assets/tabs/marker1.png");
        } else if (route.name === "Profile") {
          icon = focused
          ? require("./src/assets/tabs/bi_person-fill.png")
          : require("./src/assets/tabs/bi_person.png");
        }

        //you can return any component that you like here!
        return <Image style={{width: 24, height: 24}} source={icon}/>;
     },
     headerShown: false,
     tabBarShowLabel: false,
     tabBarStyle: {borderTopColor: colors.lightGray}
    })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const App = () => {


  const isSignedIn = true;

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: Config.WEB_CLIENT_ID,
      offlineAccess: true,
      iosClientId: Config.IOS_CLIENT_ID,
    })
  }, [])

  const theme = {
    colors: {
      background: colors.white,
    },
  };





  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          {
            isSignedIn ? (
              <>
                <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
              </>
            ) : (
             <>
              <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
              <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
              <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}}/>
             </>
            )
          }
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App
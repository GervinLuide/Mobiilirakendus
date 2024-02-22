import React, {useEffect} from "react";
import {SafeAreaView} from "react-native";
import Splash from "./src/screens/auth/Splash/index";
import Signup from "./src/screens/auth/Signup/index";
import Signin from "./src/screens/auth/Signin/index";
import {GoogleSignin} from "@react-native-google-signin/google-signin";
import {colors} from "./src/utils/colors";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Config from "react-native-config";
import { NavigationContainer, StackActions } from "@react-navigation/native";

import { SafeAreaProvider } from "react-native-safe-area-context";


const Stack = createNativeStackNavigator();

const App = () => {
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
          <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
          <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
          <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App
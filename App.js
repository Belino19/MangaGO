import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
import Favorite from "./src/screens/Favorite";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Login1 from "./src/screens/Login1";
import MangaDetails from "./src/screens/MangaDetails";
import Search from "./src/screens/Search";
import Signup from "./src/screens/Signup";

const DrawerNavigation = createDrawerNavigator({
  Favorite: Favorite,
  Home: Home,
  Login: Login,
  Login1: Login1,
  MangaDetails: MangaDetails,
  Search: Search,
  Signup: Signup
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Favorite: Favorite,
    Home: Home,
    Login: Login,
    Login1: Login1,
    MangaDetails: MangaDetails,
    Search: Search,
    Signup: Signup
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "abeezee-regular": require("./src/assets/fonts/abeezee-regular.ttf"),
      "aclonica-regular": require("./src/assets/fonts/aclonica-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;

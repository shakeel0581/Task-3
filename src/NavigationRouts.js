import 'react-native-gesture-handler';
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import SplashScreen from "./AppScreen/SplashScreen";
import AuthScreens from "./AuthScreen";
import Dashboard from "./AppScreen/DrawerContent";
import DrawerContent from "./AppScreen/DrawerContent";

const Drawer = createDrawerNavigator();

export default function App() {
  const [splash, setSplash] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
        setSplash(false);
    }, 5000);
  }, []);

  if(splash){
      return(
          <SplashScreen />
      );
  }

    return(
        <NavigationContainer>
            <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
                <Drawer.Screen name="AuthStack" component={AuthScreens} />
                <Drawer.Screen name="Dashboard" component={Dashboard} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};
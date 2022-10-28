import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Category from "./pages/Category"
import Meals from "./pages/Meals"
import Detail from './pages/Detail/Detail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen
          name="CategoryScreen"
          component={Category}
          options={{ headerTintColor: "#61764B", headerTitleAlign: "center", title: "Categories" }}
        />
        <Stack.Screen
          name="MealsScreen"
          component={Meals}
          options={{ headerTintColor: "#61764B", headerTitleAlign: "center", title: "Meals" }}
        />
        <Stack.Screen
          name="DetailScreen"
          component={Detail}
          options={{ headerTintColor: "#61764B", headerTitleAlign: "center", title: "Detail" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

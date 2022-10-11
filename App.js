import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import FavouriteScreen from "./screens/FavouriteScreen";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import MealsDetailScreen from "./screens/MealsDetailScreen";
import { CATEGORIES } from "./data/dummy-data";
import FavouriteContextProvider from "./store/context/favourites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavouriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                title: "All Categories",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverView"
              component={MealsOverViewScreen}
              // options={({ route, navigation }) => {
              //   const catId = route.params.categoryId;
              //   const catTitle = CATEGORIES.find((category) => category.id === catId).title;
              //   return {
              //     title: catTitle,
              //   };
              //   //Alternatively we can setOptions in the MealsOverView Screen
              // }}
            />
            <Stack.Screen
              name="MealsDetailScreen"
              component={MealsDetailScreen}
              options={{
                title: "How to make a meal",
              }}
              //options={{
              // Adding Header components, use when there is no direct interaction with screen
              //headerRight: () => {
              // return <Button title="NEXT" />;
              //},
              //}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouriteContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

import { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavouriteContext } from "../store/context/favourites-context";

function FavouriteScreen() {
  const favouriteMealsCtx = useContext(FavouriteContext);

  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealsCtx.ids.includes(meal.id)
  );

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no Favourite Meals yet</Text>
      </View>
    );
  }

  return <MealsList items={favouriteMeals} />;
}

export default FavouriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
  },
});

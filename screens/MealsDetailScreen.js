<<<<<<< HEAD
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
=======
import { View, Text, Image, StyleSheet } from "react-native";
>>>>>>> 4eec5c5b471f79168f20f80f25b5b27f8742fc04
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import { MEALS } from "../data/dummy-data";
import List from "../components/MealDetail/List";
<<<<<<< HEAD
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavouriteContext } from "../store/context/favourites-context";

function MealsDetailScreen({ route, navigation }) {
  const favouriteMealCtx = useContext(FavouriteContext);

=======

function MealsDetailScreen({ route }) {
>>>>>>> 4eec5c5b471f79168f20f80f25b5b27f8742fc04
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

<<<<<<< HEAD
  const mealIsFavourite = favouriteMealCtx.ids.includes(mealId);

  function changeFavouriteStatusHandler() {
    // fn defined here can do many things e.g switch btn pages, send https reqs. etc
    //console.log("pressed");
    if (mealIsFavourite) {
      favouriteMealCtx.removeFavourite(mealId);
    } else {
      favouriteMealCtx.addFavourite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavourite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavouriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavouriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
=======
  return (
    <View>
>>>>>>> 4eec5c5b471f79168f20f80f25b5b27f8742fc04
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
<<<<<<< HEAD
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
=======
      <Subtitle>Ingredients</Subtitle>
      <List data={selectedMeal.ingredients} />
      <Subtitle>Steps</Subtitle>
      <List data={selectedMeal.ingredients} />
    </View>
>>>>>>> 4eec5c5b471f79168f20f80f25b5b27f8742fc04
  );
}

export default MealsDetailScreen;

const styles = StyleSheet.create({
<<<<<<< HEAD
  rootContainer: {
    marginBottom: 32,
  },
=======
>>>>>>> 4eec5c5b471f79168f20f80f25b5b27f8742fc04
  image: {
    height: 350,
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
<<<<<<< HEAD
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
=======
>>>>>>> 4eec5c5b471f79168f20f80f25b5b27f8742fc04
});

<<<<<<< HEAD
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";
=======
import { View, StyleSheet, FlatList, Pressable } from "react-native";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";
>>>>>>> 4eec5c5b471f79168f20f80f25b5b27f8742fc04

import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealsOverViewScreen({ route, navigation }) {
<<<<<<< HEAD
  //to extract data and display it on the screen, use route and pull out params
=======
  //to extract data and display it on the screen, use roue and pull out params
>>>>>>> 4eec5c5b471f79168f20f80f25b5b27f8742fc04
  //pass as little data as possible via route. think of it as a URL. Read Docs on React-native
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((category) => category.id === catId).title;
<<<<<<< HEAD

    navigation.setOptions({
      title: catTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
=======

    navigation.setOptions({
      title: catTitle,
    });
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: itemData.item.duration,
      affordability: itemData.item.affordability,
      complexity: itemData.item.complexity,
    };

    return (
      <MealItem {...mealItemProps} />

      // <MealItem title={itemData.item.title} same syntax for imageUrl,durability etc />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
>>>>>>> 4eec5c5b471f79168f20f80f25b5b27f8742fc04
}

export default MealsOverViewScreen;

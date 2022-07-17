import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealsOverViewScreen({ route, navigation }) {
  //to extract data and display it on the screen, use roue and pull out params
  //pass as little data as possible via route. think of it as a URL. Read Docs on React-native
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((category) => category.id === catId).title;

    navigation.setOptions({
      title: catTitle,
    });
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
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
}

export default MealsOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

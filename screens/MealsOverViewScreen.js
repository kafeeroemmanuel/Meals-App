import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealsOverViewScreen({ route, navigation }) {
  //to extract data and display it on the screen, use route and pull out params
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

  return <MealsList items={displayedMeals} />;
}

export default MealsOverViewScreen;

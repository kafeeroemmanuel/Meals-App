import MealItem from "./MealItem";
import { View, StyleSheet, FlatList } from "react-native";

function MealsList({ items }) {
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
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import { View, StyleSheet } from "react-native";
import DefaultText from "../components/DefaultText";

const CategoryMealsScreen = props => {
  const filteredMealsState = useSelector(state => state.meals.filteredMeals);

  const catId = props.navigation.getParam("categoryId");

  const displayMeals = filteredMealsState.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>NO MATCHES FOUND. Check your filters.</DefaultText>
      </View>
    );
  }

  return <MealList displayMeals={displayMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CategoryMealsScreen;

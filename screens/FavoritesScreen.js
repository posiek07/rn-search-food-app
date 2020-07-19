import React from "react";
import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { useSelector } from "react-redux";
import { View, StyleSheet } from "react-native";
import DefaultText from "../components/DefaultText";

const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favMeals);

  return favMeals.length === 0 || !favMeals ? (
    <View style={styles.content}>
      <DefaultText>No favourite meals found. Add some !</DefaultText>
    </View>
  ) : (
    <MealList displayMeals={favMeals} navigation={props.navigation} />
  );
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: "Your pick",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;

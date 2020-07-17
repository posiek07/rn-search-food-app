import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import { Platform } from "react-native";
import Colors from "../constants/Colors";
import FavoritesScreen from "../screens/FavoritesScreen";
import React from "react";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Meal Categories",
      },
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailsScreen,
  },
  {
    // initialRouteName: "Categories",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : null,
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    },
  }
);

const tabScreenConfig = {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={23}
              color={tabInfo.tintColor}
            />
          );
        },
        tabBarColor: Colors.primary,
      },
    },
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarLabel: "Favorites!",
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="ios-star" size={23} color={tabInfo.tintColor} />
          );
        },
        tabBarColor: Colors.accent,
      },
    },
  },
  BottomNavigator =
    Platform.OS === "android"
      ? createMaterialBottomTabNavigator(tabScreenConfig, {
          activeColor: "white",
          shifting: true,
        })
      : createBottomTabNavigator(tabScreenConfig, {
          tabBarOptions: {
            activeTintColor: Colors.accent,
          },
        });

export default createAppContainer(BottomNavigator);

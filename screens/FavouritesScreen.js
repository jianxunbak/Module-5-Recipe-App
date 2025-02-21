import React, { useCallback, useContext } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { favoriteContext } from "../Context/FavouritesContext";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { recipeContext } from "../Context/RecipeContext";
import FavoriteStyle from "../styles/FavoriteStyles";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function FavouritesScreenTemp() {
  const { favorites, setFavorites, toggleFavorite } =
    useContext(favoriteContext);
  const { allRecipes, getAllRecipes } = useContext(recipeContext);
  const { navigate } = useNavigation();
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      getAllRecipes();
    }, [])
  );

  const favoriteItems = allRecipes.filter((item) =>
    favorites.includes(item.id)
  );

  const handleNavigate = (item) => {
    navigate("Recipes", {
      screen: "Recipe card",
      params: { returnTo: "fav", selectedRecipe: item },
    });
  };

  return (
    <SafeAreaView style={FavoriteStyle.SafeAreaView}>
      <ScrollView style={FavoriteStyle.scrollView}>
        <View style={FavoriteStyle.titleContainer}>
          <Text style={FavoriteStyle.MainTitle}>Favourites List</Text>
        </View>

        {favoriteItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              handleNavigate(item);
            }}
          >
            <View style={FavoriteStyle.MainContainer}>
              <View style={FavoriteStyle.leftContainer}>
                <View style={FavoriteStyle.titleContainer}>
                  <Text style={FavoriteStyle.title}>
                    {item.title.toUpperCase()}
                  </Text>
                  <Text style={FavoriteStyle.description}>
                    {item.description}
                  </Text>
                </View>
                <View style={FavoriteStyle.bottomContainer}>
                  <Text style={FavoriteStyle.cusine}>- {item.cuisine}</Text>
                  <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
                    {favorites.includes(item.id) ? (
                      <FontAwesome
                        name="heart"
                        size={25}
                        color={"purple"}
                      ></FontAwesome>
                    ) : (
                      <FontAwesome
                        name="heart-o"
                        size={25}
                        color={"purple"}
                      ></FontAwesome>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
              <Image
                source={{ uri: item.imgSrc }}
                style={FavoriteStyle.image}
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

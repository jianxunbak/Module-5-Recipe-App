import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { Button } from "react-native-paper";
//import { styles } from "../styles/styles";
import recipeApi from "../api/recipeApi";

export default function FavouritesScreenTemp() {

  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const getRecipe = async () => {
    try {
      const response = await recipeApi.get("/recipe");
      setItems(response.data);
    } catch (error) {
      console.error("Error getting recipes:", error);
    }
  };

  useEffect(() => {
    getRecipe();
  }, []);
  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id)
        : [...prevFavorites, id]
    );
  };
  const favoriteItems = items.filter((item) => favorites.includes(item.id));


  return (
    <ScrollView style={styles.scrollContainer}>
      <View>
      <View>
            <Text style={[styles.header2, {marginTop:10}]}>Dummy Recipe List</Text>
      </View>
      <View>
            <Text style={[styles.header, {marginBottom:10}]}>(See Favourites List At Page Bottom)</Text>
      </View>
      {items.map((item, index) => (
      <View key={index}>
          <View>
            <Image source={{ uri: item.imgSrc }} style={[styles.image, {marginTop: 30}]}
                />
          </View>
          <View>
            <Text style={[styles.header, {marginTop: 10}]}>{item.title}</Text>
          </View>
          <View>
            <Text style={[styles.desc, {marginTop:10}, {marginBottom:10}]}>{item.description}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <View>
                <Button style={[styles.button_blue, { marginRight: 10 }]}> <Text style={styles.buttontxtblue}>Learn More</Text></Button>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <Button mode="outlined"  style={styles.button_red} onPress={() => toggleFavorite(item.id)}>
                  <Text style={styles.buttontxtwhite}> {favorites.includes(item.id) ? "Unfavorite" : "Favorite"}</Text>
                </Button>
              </View>
            </TouchableOpacity>
          </View>
      </View>))}
      </View >

      
      
      <View>
            <Text style={[styles.header2, {marginTop:10}, {marginBottom:10}]}>Favourites List</Text>
      </View>


      <View>
      {favoriteItems.map((item, index) => (
      <View key={index}>
          <View>
            <Image source={{ uri: item.imgSrc }} style={[styles.image, {marginTop: 30}]}
                />
          </View>
          <View>
            <Text style={[styles.header, {marginTop: 10}]}>{item.title}</Text>
          </View>
          <View>
            <Text style={[styles.desc, {marginTop:10}, {marginBottom:10}]}>{item.description}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
              <View>
                <Button style={[styles.button_blue, { marginRight: 10 }]}> <Text style={styles.buttontxtblue}>Learn More</Text></Button>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <Button mode="outlined"  style={styles.button_red} onPress={() => toggleFavorite(item.id)}>
                  <Text style={styles.buttontxtwhite}> {favorites.includes(item.id) ? "Unfavorite" : "Favorite"}</Text>
                </Button>
              </View>
            </TouchableOpacity>
          </View>
      </View>))}
      </View >







      <View
        style={[
          styles.container,
          {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "row",
          },
        ]}
      >
        {/* <View style={{ flex: 1, backgroundColor: "red" }} />
        <View style={{ flex: 1, backgroundColor: "darkorange" }} />
        <View style={{ flex: 1, backgroundColor: "green" }} /> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button_red: {
    borderRadius: 10,
    borderColor: 'red', // Red border color
    borderWidth: 1,
    
    
    // Border thickness
  },
  button_blue: {
    borderRadius: 10,
    backgroundColor: '#007BFF', // Red border color
    borderWidth: 1, // Border thickness
  },
  scrollContainer: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: 100, // Set width of the image
    height: 100, // Set height of the image
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
  },
  header2: {
    fontSize: 40,
  },
  desc: {
    fontSize: 15,
  },
  buttontxtwhite: {
    fontSize: 15,
    color: 'red'
  },
  buttontxtblue: {
    fontSize: 15,
    color: 'white'
  },
});

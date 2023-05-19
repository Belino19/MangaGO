import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

function MaterialCard122(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.mangaTitle}>Manga Title</Text>
          <Text style={styles.genre}>Genre</Text>
          <Text style={styles.chapter69}>Chapter 69</Text>
        </View>
        <Image
          source={require("../assets/images/wallpapersden.com_nazuna-nanakusa-hd-call-of-the-night_3840x2160.jpg")}
          style={styles.cardItemImagePlace}
        ></Image>
      </View>
      <View style={styles.actionBody}>
        <TouchableOpacity
          onPress={() => console.log("Navigate to MangaDetails")}
          style={styles.actionButton1}
        >
          <Text style={styles.details}>DETAILS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton2}>
          <Text style={styles.addToFavorite}>ADD TO FAVORITE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "rgba(238,251,221,1)",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 135
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1
  },
  mangaTitle: {
    fontSize: 24,
    color: "rgba(65,117,5,1)",
    paddingBottom: 12
  },
  genre: {
    fontSize: 14,
    color: "rgba(65,117,5,1)",
    lineHeight: 16,
    opacity: 0.5
  },
  chapter69: {
    top: 91,
    left: 16,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(65,117,5,1)",
    height: 20,
    width: 115
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    height: 120,
    width: 120,
    margin: 16,
    borderRadius: 14
  },
  actionBody: {
    padding: 8,
    flexDirection: "row",
    alignSelf: "flex-start",
    width: 220,
    height: 45
  },
  actionButton1: {
    padding: 8,
    height: 40,
    width: 60
  },
  details: {
    fontSize: 14,
    color: "rgba(65,117,5,1)",
    opacity: 0.9,
    alignSelf: "center"
  },
  actionButton2: {
    padding: 8,
    height: 36
  },
  addToFavorite: {
    fontSize: 14,
    color: "rgba(65,117,5,1)",
    opacity: 0.9
  }
});

export default MaterialCard122;

import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  Text
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function MangaItem2(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <View style={styles.imageStack}>
        <ImageBackground
          source={require("../assets/images/wallpapersden.com_nazuna-nanakusa-hd-call-of-the-night_3840x21603.jpg")}
          resizeMode="cover"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <View style={styles.mangaTitleRow}>
            <Text style={styles.mangaTitle}>Manga Title</Text>
            <Icon name="heart-outlined" style={styles.icon}></Icon>
          </View>
        </ImageBackground>
        <TouchableOpacity
          onPress={() => console.log("Navigate to MangaDetails")}
          style={styles.button}
        ></TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(141,200,75,1)",
    borderRadius: 5
  },
  image: {
    width: 100,
    height: 130,
    position: "absolute",
    borderRadius: 5,
    left: 2,
    top: 3,
    flexDirection: "row",
    overflow: "hidden"
  },
  image_imageStyle: {},
  mangaTitle: {
    fontFamily: "roboto-regular",
    color: "rgba(238,251,221,1)",
    height: 26,
    width: 77,
    textAlign: "center",
    fontSize: 12,
    lineHeight: 38
  },
  icon: {
    color: "rgba(238,251,221,1)",
    fontSize: 14,
    height: 15,
    width: 14,
    marginLeft: 7,
    marginTop: 11
  },
  mangaTitleRow: {
    height: 26,
    flexDirection: "row",
    flex: 1,
    marginRight: 2,
    marginTop: 103
  },
  button: {
    top: 0,
    left: 0,
    width: 105,
    height: 135,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  imageStack: {
    width: 105,
    height: 135
  }
});

export default MangaItem2;

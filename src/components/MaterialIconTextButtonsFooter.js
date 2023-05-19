import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialIconTextButtonsFooter(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={() => console.log("Navigate to Home")}
        style={styles.button3}
      >
        <View style={styles.group}>
          <MaterialCommunityIconsIcon
            name="home"
            style={styles.icon1}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.home}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("Navigate to Search")}
        style={styles.activeButtonWrapper}
      >
        <MaterialCommunityIconsIcon
          name="magnify"
          style={styles.activeIcon}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.search}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWrapper2}>
        <MaterialCommunityIconsIcon
          name="heart-multiple-outline"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.favorites}>Favorites</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexDirection: "row"
  },
  button3: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center",
    backgroundColor: "rgba(238,251,221,1)"
  },
  group: {
    width: 37,
    height: 44,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center"
  },
  icon1: {
    backgroundColor: "transparent",
    color: "rgba(65,117,5,1)",
    fontSize: 24,
    opacity: 0.8,
    alignSelf: "center"
  },
  home: {
    fontSize: 12,
    color: "rgba(65,117,5,1)",
    backgroundColor: "transparent",
    paddingTop: 4,
    alignSelf: "center"
  },
  activeButtonWrapper: {
    flex: 1,
    paddingTop: 6,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center",
    backgroundColor: "rgba(238,251,221,1)"
  },
  activeIcon: {
    backgroundColor: "transparent",
    color: "rgba(65,117,5,1)",
    fontSize: 24,
    opacity: 0.8
  },
  search: {
    fontSize: 12,
    color: "rgba(65,117,5,1)",
    backgroundColor: "transparent",
    paddingTop: 4,
    alignSelf: "center",
    height: 18
  },
  buttonWrapper2: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center",
    backgroundColor: "rgba(238,251,221,1)"
  },
  icon2: {
    backgroundColor: "transparent",
    color: "rgba(65,117,5,1)",
    fontSize: 24,
    opacity: 0.8
  },
  favorites: {
    fontSize: 12,
    color: "rgba(65,117,5,1)",
    backgroundColor: "transparent",
    paddingTop: 4,
    height: 18
  }
});

export default MaterialIconTextButtonsFooter;

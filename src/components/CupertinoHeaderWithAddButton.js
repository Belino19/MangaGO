import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { Center } from "@builderx/utils";

function CupertinoHeaderWithAddButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={() => console.log("Navigate to Go Back")}
        style={styles.button2}
      >
        <TouchableOpacity style={styles.leftIconButton}>
          <IoniconsIcon
            name="ios-arrow-back"
            style={styles.leftIcon}
          ></IoniconsIcon>
          <Text style={styles.leftText}>Back</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.group}>
        <View style={styles.buttonStack}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.addToFavorite}>Add</Text>
          </TouchableOpacity>
          <EntypoIcon name="heart-outlined" style={styles.icon}></EntypoIcon>
        </View>
      </View>
      <Center horizontal>
        <Image
          source={require("../assets/images/Screenshot_2023-05-19_0026161.png")}
          resizeMode="cover"
          style={styles.image}
        ></Image>
      </Center>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "rgba(65,117,5,1)",
    paddingRight: 8,
    paddingLeft: 8
  },
  button2: {
    justifyContent: "center",
    width: 109
  },
  leftIconButton: {
    flexDirection: "row"
  },
  leftIcon: {
    color: "rgba(238,251,221,1)",
    fontSize: 32
  },
  leftText: {
    alignSelf: "center",
    fontSize: 17,
    paddingLeft: 5,
    color: "rgba(238,251,221,1)",
    fontFamily: "roboto-regular"
  },
  group: {
    top: 0,
    left: 288,
    width: 87,
    height: 44,
    position: "absolute"
  },
  button: {
    top: 0,
    left: 0,
    width: 86,
    height: 44,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  addToFavorite: {
    fontFamily: "roboto-regular",
    color: "rgba(184,233,134,1)",
    height: 21,
    width: 41,
    fontSize: 16,
    textAlign: "center",
    marginTop: 11,
    marginLeft: 13
  },
  icon: {
    position: "absolute",
    color: "rgba(184,233,134,1)",
    fontSize: 24,
    left: 54,
    top: 9
  },
  buttonStack: {
    width: 86,
    height: 44,
    marginLeft: 1
  },
  image: {
    top: 0,
    width: 103,
    height: 44,
    position: "absolute"
  }
});

export default CupertinoHeaderWithAddButton;

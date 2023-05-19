import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";
import UsernameLabel from "../components/UsernameLabel";
import PasswordLabel from "../components/PasswordLabel";
import MaterialCheckbox from "../components/MaterialCheckbox";
import MaterialButtonPink from "../components/MaterialButtonPink";

function Signup(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <ImageBackground
          source={require("../assets/images/Ruka_Sarashina2.jpg")}
          resizeMode="cover"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <UsernameLabel
            iconStyleName="account"
            textInput="Username"
            iconStyle="email"
            textInput="Email Address"
            style={styles.materialIconTextbox2}
          ></UsernameLabel>
        </ImageBackground>
        <PasswordLabel
          inputStyle="Password"
          style={styles.usernameLabel}
        ></PasswordLabel>
        <UsernameLabel style={styles.materialIconTextbox1}></UsernameLabel>
        <MaterialCheckbox style={styles.materialCheckbox}></MaterialCheckbox>
        <MaterialButtonPink
          style={styles.materialButtonPink}
        ></MaterialButtonPink>
        <Text style={styles.mangaGo}>Manga-Go!</Text>
        <Text style={styles.text}>Sign-up</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Login")}
          style={styles.button}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Home")}
            style={styles.button}
          >
            <Text style={styles.signUp2}>Sign-up</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <PasswordLabel
          inputStyle="Password"
          inputStyle="Verify Password"
          style={styles.usernameLabel1}
        ></PasswordLabel>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(184,233,134,1)",
    borderWidth: 1,
    borderColor: "#000000"
  },
  image: {
    top: 0,
    left: 0,
    width: 486,
    height: 812,
    position: "absolute"
  },
  image_imageStyle: {
    opacity: 0.25
  },
  materialIconTextbox2: {
    height: 43,
    width: 307,
    backgroundColor: "rgba(255,255,255,0.75)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.15,
    shadowRadius: 0,
    marginTop: 325,
    marginLeft: 90
  },
  usernameLabel: {
    height: 43,
    width: 307,
    position: "absolute",
    left: 88,
    top: 444,
    backgroundColor: "rgba(255,255,255,0.75)",
    borderRadius: 1,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.15,
    shadowRadius: 0
  },
  materialIconTextbox1: {
    height: 43,
    width: 307,
    position: "absolute",
    left: 88,
    top: 383,
    backgroundColor: "rgba(255,255,255,0.75)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.15,
    shadowRadius: 0
  },
  materialCheckbox: {
    height: 40,
    width: 118,
    position: "absolute",
    left: 131,
    top: 560
  },
  materialButtonPink: {
    height: 36,
    width: 116,
    position: "absolute",
    left: 245,
    top: 561
  },
  mangaGo: {
    top: 188,
    position: "absolute",
    fontFamily: "aclonica-regular",
    color: "rgba(65,117,5,1)",
    fontSize: 50,
    left: 92
  },
  text: {
    top: 255,
    position: "absolute",
    fontFamily: "abeezee-regular",
    color: "rgba(65,117,5,1)",
    fontSize: 30,
    left: 193
  },
  button: {
    width: 130,
    height: 44,
    backgroundColor: "rgba(65,117,5,1)",
    borderRadius: 50
  },
  signUp2: {
    fontFamily: "roboto-regular",
    color: "rgba(184,233,134,1)",
    height: 14,
    width: 57,
    textAlign: "center",
    fontSize: 16,
    marginTop: 15,
    marginLeft: 36
  },
  usernameLabel1: {
    height: 43,
    width: 307,
    position: "absolute",
    left: 88,
    top: 508,
    backgroundColor: "rgba(255,255,255,0.75)",
    borderRadius: 1,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.15,
    shadowRadius: 0
  },
  imageStack: {
    width: 486,
    height: 812,
    marginTop: -1,
    marginLeft: -56
  }
});

export default Signup;

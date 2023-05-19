import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text
} from "react-native";
import PasswordLabel from "../components/PasswordLabel";
import UsernameLabel from "../components/UsernameLabel";

function Login(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <ImageBackground
          source={require("../assets/images/Ruka_Sarashina2.jpg")}
          resizeMode="cover"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <TouchableOpacity style={styles.button3}></TouchableOpacity>
        </ImageBackground>
        <PasswordLabel
          inputStyle="Password"
          style={styles.usernameLabel}
        ></PasswordLabel>
        <UsernameLabel style={styles.materialIconTextbox1}></UsernameLabel>
        <Text style={styles.mangaGo}>Manga-Go!</Text>
        <Text style={styles.text}>Log-in</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Home")}
          style={styles.button}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Home")}
            style={styles.button}
          >
            <Text style={styles.text2}>Login</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Signup")}
          style={styles.button4}
        >
          <View style={styles.signupStack}>
            <Text style={styles.signup}>Signup</Text>
            <TouchableOpacity style={styles.button2}></TouchableOpacity>
          </View>
        </TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
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
  button3: {
    width: 230,
    height: 23,
    backgroundColor: "rgba(230,230, 230,0)",
    marginTop: 534,
    marginLeft: 127
  },
  usernameLabel: {
    height: 43,
    width: 307,
    position: "absolute",
    left: 90,
    top: 458,
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
    left: 89,
    top: 392,
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
  mangaGo: {
    top: 192,
    position: "absolute",
    fontFamily: "aclonica-regular",
    color: "rgba(65,117,5,1)",
    fontSize: 50,
    left: 92
  },
  text: {
    top: 290,
    position: "absolute",
    fontFamily: "abeezee-regular",
    color: "rgba(65,117,5,1)",
    fontSize: 30,
    left: 200
  },
  button: {
    width: 130,
    height: 44,
    backgroundColor: "rgba(65,117,5,1)",
    borderRadius: 50
  },
  text2: {
    fontFamily: "roboto-regular",
    color: "rgba(184,233,134,1)",
    height: 14,
    width: 57,
    textAlign: "center",
    fontSize: 16,
    marginTop: 15,
    marginLeft: 36
  },
  button4: {
    top: 636,
    left: 200,
    width: 84,
    height: 33,
    position: "absolute"
  },
  signup: {
    top: 1,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(65,117,5,1)",
    height: 33,
    width: 84,
    textAlign: "center",
    left: 0,
    textDecorationLine: "underline"
  },
  button2: {
    top: 0,
    left: 0,
    width: 84,
    height: 33,
    position: "absolute",
    backgroundColor: "rgba(230,230, 230,0)"
  },
  signupStack: {
    width: 84,
    height: 34
  },
  forgotPassword: {
    top: 535,
    left: 128,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(65,117,5,1)",
    height: 23,
    width: 230,
    textAlign: "center",
    textDecorationLine: "underline"
  },
  imageStack: {
    width: 486,
    height: 812,
    marginLeft: -56
  }
});

export default Login;

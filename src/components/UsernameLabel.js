import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function UsernameLabel(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name={props.iconStyle || "account"} style={styles.iconStyle}></Icon>
      <TextInput
        placeholder={props.textInput || "Username"}
        placeholderTextColor="rgba(65,117,5,1)"
        style={styles.textInput}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: ",1,0.65,0.75)",
    flexDirection: "row",
    alignItems: "center"
  },
  iconStyle: {
    color: "rgba(65,117,5,1)",
    fontSize: 24,
    paddingLeft: 8
  },
  textInput: {
    top: 0,
    left: 49,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(65,117,5,1)",
    height: 43,
    width: 326,
    fontSize: 16
  }
});

export default UsernameLabel;

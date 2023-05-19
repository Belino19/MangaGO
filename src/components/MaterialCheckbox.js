import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialCheckbox(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon
        name={
          props.checked ? "checkbox-marked" : "checkbox-marked-circle-outline"
        }
        style={styles.checkIcon}
      ></Icon>
      <Text style={styles.iAgreeToThe2}>I agree to the</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "transparent"
  },
  checkIcon: {
    color: "rgba(65,117,5,1)",
    fontSize: 20,
    lineHeight: 28,
    padding: 0,
    alignSelf: "flex-start"
  },
  iAgreeToThe2: {
    top: 12,
    left: 31,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(65,117,5,1)",
    height: 17
  }
});

export default MaterialCheckbox;

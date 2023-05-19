import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function PasswordLabel(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name="key" style={styles.iconStyle}></Icon>
      <TextInput
        placeholder={props.inputStyle || "Password"}
        placeholderTextColor="rgba(65,117,5,1)"
        style={styles.inputStyle}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    alignItems: "center"
  },
  iconStyle: {
    color: "rgba(65,117,5,1)",
    fontSize: 24,
    paddingLeft: 8
  },
  inputStyle: {
    color: "#000",
    marginLeft: 16,
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    paddingTop: 14,
    paddingBottom: 8
  }
});

export default PasswordLabel;

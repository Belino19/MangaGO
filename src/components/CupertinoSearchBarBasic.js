import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function CupertinoSearchBarBasic(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.inputBox}>
        <Icon name="magnify" style={styles.inputLeftIcon}></Icon>
        <TextInput
          placeholder="Search"
          placeholderTextColor="rgba(238,251,221,1)"
          style={styles.inputStyle}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(184,233,134,0)",
    padding: 8
  },
  inputBox: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(65,117,5,1)",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  inputLeftIcon: {
    color: "rgba(238,251,221,1)",
    fontSize: 20,
    alignSelf: "center",
    paddingLeft: 5,
    paddingRight: 5
  },
  inputStyle: {
    height: 32,
    alignSelf: "flex-start",
    fontSize: 15,
    lineHeight: 15,
    color: "rgba(184,233,134,1)",
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.1)",
    paddingLeft: 18
  }
});

export default CupertinoSearchBarBasic;

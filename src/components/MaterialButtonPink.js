import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonPink(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.termsCondition}>Terms &amp; Condition</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  termsCondition: {
    color: "rgba(65,117,5,1)",
    fontSize: 14,
    textDecorationLine: "underline"
  }
});

export default MaterialButtonPink;

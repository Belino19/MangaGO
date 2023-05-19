import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function CupertinoSegmentWithTwoTabs(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.textWrapper}>
        <TouchableOpacity style={styles.segmentTextWrapperLeft}>
          <Text style={styles.newest}>Newest</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.segmentTextWrapperRight}>
          <Text style={styles.trending}>Trending</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  textWrapper: {
    height: 29,
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: "row"
  },
  segmentTextWrapperLeft: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(65,117,5,1)",
    padding: 6,
    borderWidth: 1,
    borderColor: "rgba(65,117,5,1)",
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5
  },
  newest: {
    fontSize: 13,
    color: "rgba(238,251,221,1)"
  },
  segmentTextWrapperRight: {
    flex: 1,
    alignItems: "center",
    padding: 6,
    borderWidth: 1,
    borderColor: "rgba(65,117,5,1)",
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: "rgba(238,251,221,1)"
  },
  trending: {
    fontSize: 13,
    color: "rgba(65,117,5,1)"
  }
});

export default CupertinoSegmentWithTwoTabs;

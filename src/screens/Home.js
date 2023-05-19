import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import MaterialCard122 from "../components/MaterialCard122";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";

function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollAreaStack}>
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          ></ScrollView>
        </View>
        <View style={styles.scrollArea2}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea2_contentContainerStyle}
          >
            <MaterialCard122 style={styles.materialCard122}></MaterialCard122>
            <MaterialCard122 style={styles.materialCard1222}></MaterialCard122>
            <MaterialCard122 style={styles.materialCard1223}></MaterialCard122>
            <MaterialCard122 style={styles.materialCard1224}></MaterialCard122>
          </ScrollView>
        </View>
      </View>
      <MaterialIconTextButtonsFooter
        style={styles.materialIconTextButtonsFooter}
      ></MaterialIconTextButtonsFooter>
      <Text style={styles.recentUpdates}>Recent Updates</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(184,233,134,1)"
  },
  scrollArea: {
    top: 0,
    left: 0,
    width: 375,
    height: 618,
    position: "absolute",
    backgroundColor: "rgba(230, 230, 230,1)",
    opacity: 0
  },
  scrollArea_contentContainerStyle: {
    height: 618,
    width: 375
  },
  scrollArea2: {
    top: 0,
    left: 21,
    width: 333,
    height: 633,
    position: "absolute"
  },
  scrollArea2_contentContainerStyle: {
    height: 801,
    width: 333
  },
  materialCard122: {
    height: 187,
    width: 337
  },
  materialCard1222: {
    height: 186,
    width: 337,
    marginTop: 20
  },
  materialCard1223: {
    height: 184,
    width: 337,
    marginTop: 21
  },
  materialCard1224: {
    height: 184,
    width: 337,
    marginTop: 19
  },
  scrollAreaStack: {
    width: 375,
    height: 633,
    marginTop: 94
  },
  materialIconTextButtonsFooter: {
    height: 85,
    width: 375
  },
  recentUpdates: {
    fontFamily: "roboto-regular",
    color: "rgba(65,117,5,1)",
    height: 41,
    width: 151,
    fontSize: 20,
    marginTop: -759,
    marginLeft: 8
  }
});

export default Home;

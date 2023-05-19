import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import MangaItem2 from "../components/MangaItem2";

function Favorite(props) {
  return (
    <View style={styles.container}>
      <MaterialIconTextButtonsFooter
        style={styles.materialIconTextButtonsFooter}
      ></MaterialIconTextButtonsFooter>
      <View style={styles.scrollArea1}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea1_contentContainerStyle}
        >
          <View style={styles.mangaItem1RowRow}>
            <View style={styles.mangaItem1Row}>
              <MangaItem2 style={styles.mangaItem1}></MangaItem2>
              <MangaItem2 style={styles.mangaItem3}></MangaItem2>
            </View>
            <View style={styles.mangaItem1RowFiller}>
              <MangaItem2 style={styles.mangaItem2}></MangaItem2>
            </View>
          </View>
          <View style={styles.mangaItem5Row}>
            <MangaItem2 style={styles.mangaItem5}></MangaItem2>
            <MangaItem2 style={styles.mangaItem6}></MangaItem2>
            <MangaItem2 style={styles.mangaItem4}></MangaItem2>
          </View>
          <View style={styles.mangaItem11Row}>
            <MangaItem2 style={styles.mangaItem11}></MangaItem2>
            <MangaItem2 style={styles.mangaItem12}></MangaItem2>
            <MangaItem2 style={styles.mangaItem10}></MangaItem2>
          </View>
          <View style={styles.mangaItem8Row}>
            <MangaItem2 style={styles.mangaItem8}></MangaItem2>
            <MangaItem2 style={styles.mangaItem7}></MangaItem2>
            <MangaItem2 style={styles.mangaItem9}></MangaItem2>
          </View>
          <View style={styles.mangaItem14Row}>
            <MangaItem2 style={styles.mangaItem14}></MangaItem2>
            <MangaItem2 style={styles.mangaItem13}></MangaItem2>
            <MangaItem2 style={styles.mangaItem15}></MangaItem2>
          </View>
          <View style={styles.mangaItem17Row}>
            <MangaItem2 style={styles.mangaItem17}></MangaItem2>
            <MangaItem2 style={styles.mangaItem18}></MangaItem2>
            <MangaItem2 style={styles.mangaItem16}></MangaItem2>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(184,233,134,1)"
  },
  materialIconTextButtonsFooter: {
    width: 375,
    height: 85,
    marginTop: 727
  },
  scrollArea1: {
    width: 319,
    height: 595,
    marginTop: -680,
    marginLeft: 28
  },
  scrollArea1_contentContainerStyle: {
    height: 819,
    width: 319
  },
  mangaItem1: {
    width: 105,
    height: 135
  },
  mangaItem3: {
    width: 105,
    height: 135,
    marginLeft: 109
  },
  mangaItem1Row: {
    height: 135,
    flexDirection: "row"
  },
  mangaItem2: {
    width: 105,
    height: 135
  },
  mangaItem1RowFiller: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  mangaItem1RowRow: {
    height: 135,
    flexDirection: "row"
  },
  mangaItem5: {
    width: 105,
    height: 135
  },
  mangaItem6: {
    width: 105,
    height: 135,
    marginLeft: 2
  },
  mangaItem4: {
    width: 105,
    height: 135,
    marginLeft: 2
  },
  mangaItem5Row: {
    height: 135,
    flexDirection: "row",
    marginTop: 2
  },
  mangaItem11: {
    width: 105,
    height: 135
  },
  mangaItem12: {
    width: 105,
    height: 135,
    marginLeft: 2
  },
  mangaItem10: {
    width: 105,
    height: 135,
    marginLeft: 2
  },
  mangaItem11Row: {
    height: 135,
    flexDirection: "row",
    marginTop: 2
  },
  mangaItem8: {
    width: 105,
    height: 135
  },
  mangaItem7: {
    width: 105,
    height: 135,
    marginLeft: 2
  },
  mangaItem9: {
    width: 105,
    height: 135,
    marginLeft: 2
  },
  mangaItem8Row: {
    height: 135,
    flexDirection: "row",
    marginTop: 1
  },
  mangaItem14: {
    width: 105,
    height: 135
  },
  mangaItem13: {
    width: 105,
    height: 135,
    marginLeft: 2
  },
  mangaItem15: {
    width: 105,
    height: 135,
    marginLeft: 2
  },
  mangaItem14Row: {
    height: 135,
    flexDirection: "row",
    marginTop: 2
  },
  mangaItem17: {
    width: 105,
    height: 135
  },
  mangaItem18: {
    width: 105,
    height: 135,
    marginLeft: 2
  },
  mangaItem16: {
    width: 105,
    height: 135,
    marginLeft: 2
  },
  mangaItem17Row: {
    height: 135,
    flexDirection: "row",
    marginTop: 2
  }
});

export default Favorite;

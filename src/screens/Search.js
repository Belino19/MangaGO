import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import CupertinoSearchBarBasic from "../components/CupertinoSearchBarBasic";
import CupertinoSegmentWithTwoTabs from "../components/CupertinoSegmentWithTwoTabs";
import MangaItem2 from "../components/MangaItem2";

function Search(props) {
  return (
    <View style={styles.container}>
      <MaterialIconTextButtonsFooter
        style={styles.materialIconTextButtonsFooter}
      ></MaterialIconTextButtonsFooter>
      <View style={styles.cupertinoSearchBarBasicStackStack}>
        <View style={styles.cupertinoSearchBarBasicStack}>
          <CupertinoSearchBarBasic
            style={styles.cupertinoSearchBarBasic}
          ></CupertinoSearchBarBasic>
          <CupertinoSegmentWithTwoTabs
            style={styles.cupertinoSegmentWithTwoTabs}
          ></CupertinoSegmentWithTwoTabs>
        </View>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.mangaItem22RowRow}>
              <View style={styles.mangaItem22Row}>
                <MangaItem2 style={styles.mangaItem22}></MangaItem2>
                <MangaItem2 style={styles.mangaItem24}></MangaItem2>
              </View>
              <View style={styles.mangaItem22RowFiller}>
                <MangaItem2 style={styles.mangaItem23}></MangaItem2>
              </View>
            </View>
            <View style={styles.mangaItem26Row}>
              <MangaItem2 style={styles.mangaItem26}></MangaItem2>
              <MangaItem2 style={styles.mangaItem27}></MangaItem2>
              <MangaItem2 style={styles.mangaItem25}></MangaItem2>
            </View>
            <View style={styles.mangaItem32Row}>
              <MangaItem2 style={styles.mangaItem32}></MangaItem2>
              <MangaItem2 style={styles.mangaItem33}></MangaItem2>
              <MangaItem2 style={styles.mangaItem31}></MangaItem2>
            </View>
            <View style={styles.mangaItem29Row}>
              <MangaItem2 style={styles.mangaItem29}></MangaItem2>
              <MangaItem2 style={styles.mangaItem28}></MangaItem2>
              <MangaItem2 style={styles.mangaItem30}></MangaItem2>
            </View>
            <View style={styles.mangaItem35Row}>
              <MangaItem2 style={styles.mangaItem35}></MangaItem2>
              <MangaItem2 style={styles.mangaItem34}></MangaItem2>
              <MangaItem2 style={styles.mangaItem36}></MangaItem2>
            </View>
            <View style={styles.mangaItem38Row}>
              <MangaItem2 style={styles.mangaItem38}></MangaItem2>
              <MangaItem2 style={styles.mangaItem39}></MangaItem2>
              <MangaItem2 style={styles.mangaItem37}></MangaItem2>
            </View>
          </ScrollView>
        </View>
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
  cupertinoSearchBarBasic: {
    height: 44,
    width: 375,
    position: "absolute",
    left: 0,
    top: 0
  },
  cupertinoSegmentWithTwoTabs: {
    height: 56,
    width: 375,
    position: "absolute",
    left: 0,
    top: 34
  },
  cupertinoSearchBarBasicStack: {
    top: 0,
    left: 0,
    width: 375,
    height: 90,
    position: "absolute"
  },
  scrollArea: {
    top: 86,
    left: 28,
    width: 319,
    height: 595,
    position: "absolute"
  },
  scrollArea_contentContainerStyle: {
    height: 819,
    width: 319
  },
  mangaItem22: {
    width: 105,
    height: 135
  },
  mangaItem24: {
    width: 105,
    height: 135,
    marginLeft: 109
  },
  mangaItem22Row: {
    height: 135,
    flexDirection: "row"
  },
  mangaItem23: {
    width: 105,
    height: 135
  },
  mangaItem22RowFiller: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  mangaItem22RowRow: {
    height: 135,
    flexDirection: "row"
  },
  mangaItem26: {
    width: 105,
    height: 135
  },
  mangaItem27: {
    width: 105,
    height: 135,
    marginLeft: 2
  },
  mangaItem25: {
    width: 105,
    height: 135,
    marginLeft: 2
  },
  mangaItem26Row: {
    height: 135,
    flexDirection: "row",
    marginTop: 2
  },
  mangaItem32: {
    width: 105,
    height: 135
  },
  mangaItem33: {
    width: 105,
    height: 135,
    marginLeft: 2
  },
  mangaItem31: {
    width: 105,
    height: 135,
    marginLeft: 2
  },
  mangaItem32Row: {
    height: 135,
    flexDirection: "row",
    marginTop: 2
  },
  mangaItem29: {
    width: 105,
    height: 135
  },
  mangaItem28: {
    width: 105,
    height: 135,
    marginLeft: 2
  },
  mangaItem30: {
    width: 105,
    height: 135,
    marginLeft: 2
  },
  mangaItem29Row: {
    height: 135,
    flexDirection: "row",
    marginTop: 1
  },
  mangaItem35: {
    width: 105,
    height: 135
  },
  mangaItem34: {
    width: 105,
    height: 135,
    marginLeft: 2
  },
  mangaItem36: {
    width: 105,
    height: 135,
    marginLeft: 2
  },
  mangaItem35Row: {
    height: 135,
    flexDirection: "row",
    marginTop: 2
  },
  mangaItem38: {
    width: 105,
    height: 135
  },
  mangaItem39: {
    width: 105,
    height: 135,
    marginLeft: 2
  },
  mangaItem37: {
    width: 105,
    height: 135,
    marginLeft: 2
  },
  mangaItem38Row: {
    height: 135,
    flexDirection: "row",
    marginTop: 2
  },
  cupertinoSearchBarBasicStackStack: {
    width: 375,
    height: 681,
    marginTop: -766
  }
});

export default Search;

import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import CupertinoHeaderWithAddButton from "../components/CupertinoHeaderWithAddButton";

function MangaDetails(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialIconTextButtonsFooterStack}>
        <MaterialIconTextButtonsFooter
          style={styles.materialIconTextButtonsFooter}
        ></MaterialIconTextButtonsFooter>
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <CupertinoHeaderWithAddButton
              style={styles.cupertinoHeaderWithAddButton}
            ></CupertinoHeaderWithAddButton>
            <View style={styles.scrollArea2}>
              <ScrollView
                horizontal={false}
                contentContainerStyle={styles.scrollArea2_contentContainerStyle}
              >
                <View style={styles.scrollArea2Stack}>
                  <View style={styles.scrollArea2}>
                    <ScrollView
                      contentContainerStyle={
                        styles.scrollArea2_contentContainerStyle
                      }
                    >
                      <View style={styles.group2}>
                        <Text style={styles.mangaTitle}>Manga Title</Text>
                        <Text style={styles.genre}>Genre</Text>
                        <Text style={styles.loremIpsum}>
                          In publishing and graphic design, Lorem ipsum is a
                          placeholder text commonly used to demonstrate the
                          visual form of a document or a typeface without
                          relying on meaningful content. Lorem ipsum may be used
                          as a placeholder before final copy is available.
                        </Text>
                      </View>
                    </ScrollView>
                  </View>
                  <Image
                    source={require("../assets/images/wallpapersden.com_nazuna-nanakusa-hd-call-of-the-night_3840x21602.jpg")}
                    resizeMode="cover"
                    style={styles.image}
                  ></Image>
                </View>
              </ScrollView>
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
    position: "absolute",
    top: 681,
    width: 375,
    height: 85,
    left: 0
  },
  scrollArea: {
    top: 0,
    left: 0,
    width: 375,
    height: 682,
    position: "absolute",
    backgroundColor: "rgba(238,251,221,0.66)"
  },
  scrollArea_contentContainerStyle: {
    height: 682,
    width: 375
  },
  cupertinoHeaderWithAddButton: {
    width: 375,
    height: 44
  },
  scrollArea2: {
    top: 0,
    left: 0,
    width: 375,
    height: 638,
    position: "absolute",
    backgroundColor: "rgba(230, 230, 230,1)",
    opacity: 0
  },
  scrollArea2_contentContainerStyle: {
    height: 638,
    width: 375
  },
  group2: {
    width: 348,
    height: 230,
    marginTop: 361,
    marginLeft: 18
  },
  mangaTitle: {
    fontFamily: "roboto-regular",
    color: "rgba(65,117,5,1)",
    height: 32,
    width: 348,
    fontSize: 24
  },
  genre: {
    fontFamily: "roboto-regular",
    color: "rgba(65,117,5,1)",
    height: 27,
    width: 348,
    fontSize: 16
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(65,117,5,1)",
    height: 92,
    width: 348,
    textAlign: "justify",
    marginTop: 24
  },
  image: {
    top: 59,
    left: 52,
    width: 281,
    height: 281,
    position: "absolute",
    borderRadius: 10
  },
  scrollArea2Stack: {
    width: 375,
    height: 638,
    marginTop: -26,
    marginLeft: -18
  },
  materialIconTextButtonsFooterStack: {
    width: 375,
    height: 766,
    marginTop: 46
  }
});

export default MangaDetails;

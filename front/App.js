import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  View,
} from "react-native";
import background from "./media/background.png";
import logo from "./media/deraat-logo.png";
import buttons from "./components/buttonGroup/buttons";
import RealmSync from "./controller/fetchData";
export default function App() {
  RealmSync();
  const onPress = (id) => {
    console.log(id);
    buttons.map((element) => {
      if (element.id === id) {
        if (element.options) {
          console.log(element.options);
        }
      }
    });
  };

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />
      {/* <Image source={background} style={styles.backgroundImage} /> */}
      <Image source={logo} style={styles.logo} />
      {buttons.map((element) => {
        return (
          <TouchableOpacity
            key={element.id}
            onPress={() => onPress(element.id)}
            style={styles.button}
          >
            <Text style={styles.text}>{element.buttonName}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#49A046",
    alignItems: "center",
    justifyContent: "center",
  },
  // backgroundImage: {
  //   flex: 1,
  //   resizeMode: "cover",
  //   // width: null,
  //   // height: null,
  // },
  logo: {
    position: "absolute",
    top: "3%",
    left: 0,
    width: "100%",
    height: "16%",
  },

  button: {
    position: "relative",
    top: "5%",
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,

    padding: 10,
  },
  text: {
    color: "grey",
    fontWeight: "bold",
  },
});

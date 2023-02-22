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

export default function App() {
  const onPress = (id) => {
    console.log(id);
  };

  const buttons = [
    {
      buttonName: "Documents",
      id: "documents",
      options: [
        { Title: "Max 10 keys", id: "max10Keys", number: 10 },
        { Title: "Max 50 keys", id: "max50Keys", number: 50 },
        { Title: "Max 100 keys", id: "max100Keys", number: 100 },
        { Title: "Max 200 keys", id: "max200Keys", number: 200 },
        { Title: "Max 500 keys", id: "max500Keys", number: 500 },
      ],
    },
    { buttonName: "Data", id: "data" },
    { buttonName: "Money", id: "money" },
    { buttonName: "Jewelry", id: "jewelry" },
    {
      buttonName: "Guns",
      id: "guns",
      options: [
        { Title: "Max 1 gun", id: "max1Gun", number: 1 },
        { Title: "Max 5 guns", id: "max5Guns", number: 5 },
        { Title: "Max 10 guns", id: "max10Guns", number: 10 },
        { Title: "Max 20 guns", id: "max20Guns", number: 20 },
      ],
    },
    { buttonName: "Keys", id: "keys" },
    { buttonName: "I do not know", id: "iDoNotKnow" },
  ];

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />
      {/* <Image source={background} style={styles.backgroundImage} /> */}
      <Image source={logo} style={styles.logo} />
      {buttons.map((element) => {
        return (
          <TouchableOpacity
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

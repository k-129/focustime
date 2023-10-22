import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { fontSizes, spacing } from "../utils/sizes";
import { colors } from "../utils/colors";

export const Greetings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.innerContainer2}>
          <View style={styles.innerContainer3}>
            <Image
              source={require("../../assets/logo.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
      <Text style={styles.title}>Hello Erik!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
  },
  innerContainer: {
    marginTop: spacing.md,
    borderWidth: 6,
    borderColor: colors.white,
    transform: [{ rotate: "-13deg" }],
    borderTopLeftRadius: 50,
    borderTopRightRadius: 68,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 68,
    backgroundColor: "#036bfc",
  },
  innerContainer2: {
    borderWidth: 6,
    borderColor: colors.white,
    transform: [{ rotate: "20deg" }],
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: colors.darkBlue,
  },
  innerContainer3: {
    borderWidth: 6,
    borderColor: colors.white,
    transform: [{ rotate: "40deg" }],
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: colors.progressBar,
  },
  image: {
    width: 250,
    height: 250,
    transform: [{ rotate: "-47deg" }],
  },
  title: {
    paddingTop: spacing.xxl,
    fontSize: fontSizes.xxl,
    color: colors.white,
  },
});

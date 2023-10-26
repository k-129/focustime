import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { fontSizes, spacing, fontWeight } from "../utils/sizes";
import { colors } from "../utils/colors";
import {
  useFonts,
  MontserratSubrayada_400Regular,
  MontserratSubrayada_700Bold
} from "@expo-google-fonts/montserrat-subrayada";

export const Greetings = () => {
  const [fontsLoaded] = useFonts({
    MontserratSubrayada_400Regular,
    MontserratSubrayada_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
        <Text style={styles.title}>Hello Time Master!</Text>
      </View>
    </TouchableWithoutFeedback>
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
    width: 230,
    height: 230,
    transform: [{ rotate: "-47deg" }],
  },
  title: {
    fontFamily: "MontserratSubrayada_700Bold",
    fontWeight: fontWeight.lg,
    paddingTop: spacing.xxl + spacing.lg,
    fontSize: fontSizes.xl,
    color: colors.white,
  },
});

import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";
import { useFonts, Teko_400Regular, Teko_300Light } from "@expo-google-fonts/teko";

export const FocusHistory = ({ history }) => {
  const [fontsLoaded] = useFonts({
    Teko_400Regular,
    Teko_300Light
  });

  if (!fontsLoaded) {
    return null;
  }

  if (!history || !history.length) {
    return (
      <Text style={styles.titleOut}>We<Text style={{letterSpacing: spacing.sm}}>&#xFEFF;&#xFEFF;</Text> haven't<Text style={{letterSpacing: spacing.sm}}>&#xFEFF;&#xFEFF;</Text> focused <Text style={{letterSpacing: spacing.sm}}>&#xFEFF;&#xFEFF;</Text>on<Text style={{letterSpacing: spacing.sm}}>&#xFEFF;&#xFEFF;</Text>anything <Text style={{letterSpacing: spacing.sm}}>&#xFEFF;&#xFEFF;</Text>yet</Text>
    );
  }
  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.titleIn}>Things we focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,
  },
  titleIn: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: "bold",
  },
  titleOut: {
    fontFamily: "Teko_300Light",
    color: colors.white,
    fontSize: fontSizes.lg,
    marginLeft: spacing.md,
    paddingTop: spacing.md,
    letterSpacing: 1,

  },
});

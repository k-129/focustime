import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) {
    return (
      <Text style={styles.titleOut}>We haven't focused on anything yet</Text>
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
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: "bold",
    marginLeft: spacing.md,
    paddingTop: spacing.md,
  },
});

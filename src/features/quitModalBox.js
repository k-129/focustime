import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

export const QuitModalBox = ({
  quitModalVisible,
  closeQuitModal,
  setCurrentSubject,
}) => {
  const onQuit = () => {
    closeQuitModal();
    setCurrentSubject();
  };
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={quitModalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          closeQuitModal();
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Are you sure you want to leave?
            </Text>
            <Pressable
              style={[styles.button, styles.buttonFocus]}
              onPress={closeQuitModal}>
              <Text style={styles.textStyle}>Focus!</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonQuit]}
              onPress={onQuit}>
              <Text style={styles.textStyle}>Quit</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: 300,
    height: 200,
    backgroundColor: colors.white,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: 120,
    borderRadius: 20,
    marginBottom: spacing.sm,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonFocus: {
    backgroundColor: "#2196F3",
  },
  buttonQuit: {
    backgroundColor: "#FF0000",
  },
  textStyle: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: fontSizes.md,
    padding: 10,
  },
  modalText: {
    fontSize: fontSizes.md,
    marginBottom: spacing.md,
    textAlign: "center",
    paddingBottom: spacing.sm,
  },
});

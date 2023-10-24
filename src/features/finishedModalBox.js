import React from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";
import { Ionicons } from "@expo/vector-icons";
export const FinishedModalBox = ({
  modalVisible,
  closeModal,
  clearSubject,
}) => {
  const onQuit = () => {
    closeModal();
    clearSubject();
  };

  const backHome = (
    <View>
      <Ionicons name="md-home" size={23} color="white" />
    </View>
  );
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          closeModal();
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              🎉 Congratulations! Take a rest! 🎉
            </Text>
            <Pressable
              style={[styles.button, styles.buttonQuit]}
              onPress={onQuit}>
              {backHome}
            </Pressable>
            <Text style={styles.modalText}>Or </Text>
            <Pressable
              style={[styles.button, styles.buttonContinue]}
              onPress={closeModal}>
              <Text style={styles.textStyle}>Continue</Text>
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
    height: 40,
    borderRadius: 20,
    marginBottom: spacing.sm,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonQuit: {
    backgroundColor: colors.darkBlue,
  },
  buttonContinue: {
    backgroundColor: "#000",
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
    marginTop: spacing.sm,
  },
});

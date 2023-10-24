import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { useKeepAwake } from "expo-keep-awake";
import { colors } from "./src/utils/colors";
import { Focus } from "./src/features/focus";
import { FocusHistory } from "./src/features/FocusHistory";
import { Greetings } from "./src/components/Greetings";
import { FocusTimer } from "./src/components/FocusTimer";

export default function App() {
  useKeepAwake();

  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const openQuitModal = () => {
    setModalVisible(true);
  };
  const openFinishedModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const clearCurrentSubject = () => {
    setCurrentSubject(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      {currentSubject ? (
        <FocusTimer
          currentSubject={currentSubject}
          setCurrentSubject={setCurrentSubject}
          history={history}
          setHistory={setHistory}
          modalVisible={modalVisible}
          openQuitModal={openQuitModal}
          openFinishedModal={openFinishedModal}
          closeModal={closeModal}
          clearCurrentSubject={clearCurrentSubject}
        />
      ) : (
        <>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "position" : "height"}>
            <Greetings />
            <Focus addSubject={setCurrentSubject} />
          </KeyboardAvoidingView>
          <FocusHistory history={history} />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});

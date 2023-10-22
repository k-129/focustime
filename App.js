import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useKeepAwake } from "expo-keep-awake";
import { colors } from "./src/utils/colors";
import { Focus } from "./src/features/focus";
import { Timer } from "./src/features/timer";
import { FocusHistory } from "./src/features/FocusHistory";
import { Greetings } from "./src/components/Greetings";

export default function App() {
  useKeepAwake();

  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {currentSubject ? (
            <Timer
              focusSubject={currentSubject}
              onTimerEnd={(subject) => {
                setHistory([...history, subject]);
              }}
              clearSubject={() => setCurrentSubject(null)}
            />
          ) : (
            <>
              <Greetings />
              <Focus addSubject={setCurrentSubject} />
            </>
          )}
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <FocusHistory history={history} />
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

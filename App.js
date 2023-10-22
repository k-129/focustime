import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import { useKeepAwake } from "expo-keep-awake";
import { colors } from "./src/utils/colors";
import { Focus } from "./src/features/focus";
import { Timer } from "./src/features/timer";
import { FocusHistory } from "./src/features/FocusHistory";
import { Greetings } from './src/components/Greetings'

export default function App() {
  useKeepAwake();

  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      
      {!currentSubject ? (
        <>
          <Greetings />
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {
            setHistory([...history, subject]);
          }}
          clearSubject={() => setCurrentSubject(null)}
        />
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

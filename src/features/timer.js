import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration } from "react-native";
import { ProgressBar } from "react-native-paper";
import { Countdown } from "../components/Countdown";
import { RoundedButton } from "../components/RoundedButton";
import { Timing } from "./Timing";
import { fontSizes, spacing } from "../utils/sizes";
import { colors } from "../utils/colors";
import { Ionicons } from "@expo/vector-icons";

const ONE_SECON_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECON_IN_MS,
  1 * ONE_SECON_IN_MS,
  1 * ONE_SECON_IN_MS,
  1 * ONE_SECON_IN_MS,
  1 * ONE_SECON_IN_MS,
];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(10);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  const handleIncreaseMinute = () => {
    setMinutes(minutes + 1);
  };
  const handleDecreaseMinute = () => {
    setMinutes(minutes - 1);
  };

  const lessTime = (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 3,
        paddingTop: spacing.sm,
      }}>
      <Ionicons name="md-remove" size={fontSizes.xl} color="white" />
    </View>
  );

  const moreTime = (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 4,
        paddingTop: spacing.sm,
      }}>
      <Ionicons name="md-add" size={fontSizes.xl} color="white" />
    </View>
  );

  const startTime = (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: spacing.sm,
        paddingTop: spacing.sm,
      }}>
      <Ionicons name="caret-forward-outline" size={80} color="white" />
    </View>
  );

  const pauseTime = (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: spacing.sm,
        paddingLeft: spacing.sm,
      }}>
      <Ionicons name="md-pause" size={80} color="white" />
    </View>
  );

  const backHome = (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 5,
      }}>
      <Ionicons name="md-home" size={23} color="white" />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}>Focusing On</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          progress={progress}
          color={colors.progressBar}
          style={{ height: spacing.sm }}
        />
      </View>

      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>

      <View style={styles.buttonWrapper}>
        {minutes > 1 ? (
          <RoundedButton
            size={70}
            title={lessTime}
            onPress={handleDecreaseMinute}
          />
        ) : (
          <RoundedButton size={70} title={lessTime} onPress={() => {}} />
        )}

        {!isStarted && (
          <RoundedButton
            style={styles.mainButton}
            title={startTime}
            onPress={() => setIsStarted(true)}
          />
        )}
        {isStarted && (
          <RoundedButton
            style={styles.mainButton}
            title={pauseTime}
            onPress={() => setIsStarted(false)}
          />
        )}

        <RoundedButton
          size={70}
          title={moreTime}
          onPress={handleIncreaseMinute}
        />
      </View>

      <View style={styles.clearSubjectWrapper}>
        <RoundedButton size={50} title={backHome} onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.57,
    alignItems: "center",
    justifyContent: "center",
  },
  timingWrapper: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: spacing.xl,
    paddingBottom: spacing.sm,
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: spacing.md,
    justifyContent: "center",
    alignItems: "center",
  },
  clearSubjectWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: fontSizes.lg,
  },
  task: {
    color: colors.white,
    textAlign: "center",
    fontSize: fontSizes.md,
  },
  mainButton: {
    marginLeft: spacing.xxl,
    marginRight: spacing.xxl,
  },
});

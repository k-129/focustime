import React, { useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { Timing } from './Timing';
import { fontSizes, spacing } from '../utils/sizes';
import { colors } from '../utils/colors';


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
  const [progress, setProgress ] = useState(1);
  const [minutes, setMinutes] = useState(10);
  
  const onEnd = (reset) =>{
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  }

  const handleIncreaseMinute = () => {
    setMinutes(minutes + 1);
  };
  const handleDecreaseMinute = () => {
       setMinutes(minutes - 1);

  };
  


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
      <View style={{paddingTop: spacing.sm}}>
        <ProgressBar 
        progress={progress}
        color={colors.progressBar}
        style={{height: spacing.sm}}
        
        />
      </View>

      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes}/>
      </View>

      <View style={styles.buttonWrapper}>
        {minutes > 1 ?(
      <RoundedButton size={70} title='-' onPress={handleDecreaseMinute}/>)
      :(
        <RoundedButton size={70} title='-' onPress={()=>{}}/>
      )
        }

        {!isStarted && (
          <RoundedButton style={styles.mainButton} title="start" onPress={() => setIsStarted(true)} />
        )}
        {isStarted && (
          <RoundedButton style={styles.mainButton} title="pause" onPress={() => setIsStarted(false)} />
        )}

        <RoundedButton size={70} title='+' onPress={handleIncreaseMinute}/>

      </View>

      <View style={styles.clearSubjectWrapper}>
        <RoundedButton size={50} title= 'Back' onPress={clearSubject} />
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  timingWrapper:{
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: spacing.xl,
    paddingBottom: spacing.sm

  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: spacing.md,
    justifyContent: 'center',
    alignItems: 'center'
  },
  clearSubjectWrapper:{
    flexDirection: 'row',
    justifyContent: 'center'
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: fontSizes.lg
  },
  task: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSizes.md
  },
  mainButton:{
    marginLeft: spacing.xxl,
    marginRight: spacing.xxl,
  }
});

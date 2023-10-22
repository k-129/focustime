import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import {spacing, fontSizes} from '../utils/sizes'
import { Ionicons } from "@expo/vector-icons";


export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  const moreTime = (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 3,
        paddingTop: spacing.sm,
      }}>
      <Ionicons name="md-add" size={fontSizes.lg} color="white" />
    </View>
  );
  
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
        <View style={styles.button}>
        <RoundedButton
          title={moreTime}
          size={50}
          onPress={() => addSubject(subject)}
        />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    padding: spacing.md,
    justifyContent: 'top',
    flexDirection: 'row',
  },
});

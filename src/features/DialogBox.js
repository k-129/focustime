import React from "react";
import { View } from "react-native";
import {
  Button,
  Dialog,
  Portal,
  Text,
  PaperProvider,
} from "react-native-paper";

export const DialogBox = ({ visible, onDismiss }) => {
  return (
    <PaperProvider>
      <View>
        <Portal>
          <Dialog visible={visible} onDismiss={onDismiss}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">This is a simple dialog</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={onDismiss}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </PaperProvider>
  );
};

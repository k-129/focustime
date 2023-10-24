import React, { useState } from "react";
import { Timer } from "../features/timer";
import { QuitModalBox } from "../features/quitModalBox";
import { FinishedModalBox } from "../features/finishedModalBox";

export const FocusTimer = ({ currentSubject, setCurrentSubject, setHistory, history }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [quitModalVisible, setQuitModalVisible] = useState(false);

  return (
    <>
      <Timer
        focusSubject={currentSubject}
        onTimerEnd={(subject) => {
          setHistory([...history, subject]);
        }}
        openQuitModal={() => setQuitModalVisible(true)}
        closeModal={() => setModalVisible(false)}
        openFinishedModal={() => setModalVisible(true)}
      />
      <QuitModalBox
        quitModalVisible={quitModalVisible}
        closeQuitModal={() => setQuitModalVisible(false)}
        setCurrentSubject={() => setCurrentSubject(null)}
      />
      <FinishedModalBox
        modalVisible={modalVisible}
        closeModal={() => setModalVisible(false)}
        clearSubject={() => setCurrentSubject(null)}
      />
    </>
  );
};

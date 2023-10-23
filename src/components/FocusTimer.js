import React, { useState } from "react";
import { Timer } from "../features/timer";
import { ModalBox } from "../features/ModalBox";

export const FocusTimer = ({ currentSubject }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [history, setHistory] = useState([]);

  return (
    <>
      <Timer
        focusSubject={currentSubject}
        onTimerEnd={(subject) => {
          setHistory([...history, subject]);
        }}
        openModal={() => setModalVisible(true)}
        clearSubject={() => currentSubject(null)}
      />
      <ModalBox
        modalVisible={modalVisible}
        closeModal={() => setModalVisible(false)}
      />
    </>
  );
};

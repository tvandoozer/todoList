import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Checkbox from "expo-checkbox";

const TaskItem = (props) => {
  const [isComplete, setComplete] = useState(false);

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.checkboxContainer}>
          <Checkbox
            value={isComplete}
            onValueChange={setComplete}
            style={styles.checkbox}
          />
        </View>
        <Text style={isComplete ? styles.textCompleted : styles.itemText}>
          {props.text}
          <Text style={styles.completeStatus}>{isComplete ? "👍" : ""}</Text>
        </Text>
      </View>
      <TouchableOpacity onPress={props.delete} style={styles.delete}>
        <Text>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  checkboxContainer: {
    marginRight: 15,
  },
  checkbox: {
    width: 24,
    height: 24,
  },
  itemText: {
    maxWidth: "80%",
    opacity: 1.0,
  },
  textCompleted: {
    maxWidth: "80%",
    opacity: 0.5,
  },
  completeStatus: {
    position: "relative",
    left: 10,
    bottom: 3,
    opacity: 1.0,
  },
  delete: {
    width: 20,
    height: 20,
  },
});

export default TaskItem;

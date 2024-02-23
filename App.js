import React, { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Keyboard,
} from "react-native";
import TaskItem from "./components/TaskItem";

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskList([...taskList, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    let listCopy = [...taskList];
    listCopy.splice(index, 1);
    setTaskList(listCopy);
  };

  return (
    <View style={styles.container}>
      {/* Add New Item */}
      <Text style={styles.newItem}>New Item</Text>
      <View style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={"Add a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text>Add</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Todo List</Text>

        <View style={styles.items}>
          {taskList.map((item, index) => {
            return (
              <TaskItem
                key={index}
                text={item}
                delete={() => deleteTask(index)}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E4E2",
  },
  tasksWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  newItem: {
    paddingTop: 20,
    paddingHorizontal: 20,
    fontSize: 20,
  },
  writeTaskWrapper: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    gap: "0.5rem",
    paddingHorizontal: 20,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 5,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addWrapper: {
    height: 30,
    backgroundColor: "#FFF",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
});

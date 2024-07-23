import { FlatList, View } from "react-native";
import { Header } from "../../components/Header";
import { InputCreateTask } from "../../components/InputCreateTask";
import { styles } from "./styles";
import { Tag } from "../../components/Tag";
import { colors } from "../../theme/colors";
import uuid from "react-native-uuid";
import { TaskItem } from "../../components/TaskItem";
import { TaskProps } from "../../@types/task";
import { EmptyTask } from "../../components/EmptyTask";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useMemo, useState } from "react";

const TASKS_KEY = "tasks";
export function Home() {
  const [valueInput, setValueInput] = useState("");
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const createdCount = tasks.length;
  const completedCount = tasks.filter((task) => task.isCompleted).length;

  async function handleCreateTask() {
    if (!valueInput) {
      return;
    }
    try {
      const data: TaskProps = {
        id: uuid.v4() as string,
        name: valueInput,
        isCompleted: false,
      };
      const values = await AsyncStorage.getItem(TASKS_KEY);
      const prevTasks = values ? JSON.parse(values) : [];
      await AsyncStorage.setItem(
        TASKS_KEY,
        JSON.stringify([...prevTasks, data])
      );
      setValueInput("");
      setTasks((prevTasks) => [...prevTasks, data]);
    } catch (error) {
      console.error(error);
    }
  }

  async function getTasks() {
    try {
      const values = await AsyncStorage.getItem(TASKS_KEY);
      if (!values) {
        return;
      }
      const jsonValue = JSON.parse(values);
      setTasks(jsonValue);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleUpdateTask(taskId: string) {
    try {
      const updateTasks: TaskProps[] = tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isCompleted: !task.isCompleted };
        } else {
          return task;
        }
      });

      await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(updateTasks));
      setTasks(updateTasks);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleRemoveTask(taskId: string) {
    try {
      const removeTasks: TaskProps[] = tasks.filter(
        (task) => task.id !== taskId
      );
      await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(removeTasks));
      setTasks(removeTasks);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <View style={styles.wrapper}>
      <Header />
      <View style={styles.container}>
        <View style={styles.containerInput}>
          <InputCreateTask
            value={valueInput}
            setValue={setValueInput}
            handleCreateTask={handleCreateTask}
          />
        </View>
        <View style={styles.containerTags}>
          <Tag name="Criadas" color={colors.blue} quantity={createdCount} />
          <Tag
            name="Concluídas"
            color={colors.purple}
            quantity={completedCount}
          />
        </View>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <TaskItem
                task={item}
                onPress={handleUpdateTask}
                onRemoveTask={handleRemoveTask}
              />
            );
          }}
          ListEmptyComponent={<EmptyTask />}
        />
      </View>
    </View>
  );
}

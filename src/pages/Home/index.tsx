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
import { useEffect, useState } from "react";
import { getStorageTasks, setStorageTask } from "../../libs/asyncStorage";
import { removeTask } from "../../utils/removeTasks";
import { updateTask } from "../../utils/updateTasks";

export function Home() {
  const [valueInput, setValueInput] = useState("");
  const [tasks, setTasks] = useState<TaskProps[] | []>([]);

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
      const response = await getStorageTasks();
      await setStorageTask([...response, data]);
      setValueInput("");
      setTasks((prevTasks) => [...prevTasks, data]);
    } catch (error) {
      console.error(error);
    }
  }

  async function getTasks() {
    try {
      const response = await getStorageTasks();
      setTasks(response);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleUpdateTask(taskId: string) {
    try {
      const updatedTasks = updateTask(tasks, taskId);

      await setStorageTask(updatedTasks);
      setTasks(updatedTasks);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleRemoveTask(taskId: string) {
    try {
      const newTasks = removeTask(tasks, taskId);
      await setStorageTask(newTasks);
      setTasks(newTasks);
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

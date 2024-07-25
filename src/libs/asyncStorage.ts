import AsyncStorage from "@react-native-async-storage/async-storage";
import { TaskProps } from "../@types/task";
const TASKS_KEY = "tasks";

export async function getStorageTasks(){
  const values = await AsyncStorage.getItem(TASKS_KEY);
  const response = values ? JSON.parse(values) as TaskProps[]: [];
  return response;
}

export async function setStorageTask(task: TaskProps[]){
  await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(task));
}
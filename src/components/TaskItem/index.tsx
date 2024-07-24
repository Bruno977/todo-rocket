import { Text, TouchableOpacity, View } from "react-native";
import { TaskProps } from "../../@types/task";
import { styles } from "./styles";
import { colors } from "../../theme/colors";
import Trash from "../../assets/trash.svg";
import Check from "../../assets/check.svg";

interface TaskItemProps {
  task: TaskProps;
  onPress: (taskId: string) => void;
  onRemoveTask: (taskId: string) => void;
}

export const TASK_ITEM_CREATED_TEST_ID = "createdTask";
export const TASK_ITEM_COMPLETED_TEST_ID = "completedTask";
export const BUTTON_COMPLETE_TASK_TEST_ID = "buttonCompleteTask";
export const BUTTON_REMOVE_TASK_TEST_ID = "buttonRemoveTask";

export function TaskItem({ task, onPress, onRemoveTask }: TaskItemProps) {
  return (
    <View
      style={[
        {
          borderColor: task.isCompleted ? colors.gray500 : colors.gray400,
        },
        styles.container,
      ]}
    >
      <TouchableOpacity
        onPress={() => onPress(task.id)}
        testID={BUTTON_COMPLETE_TASK_TEST_ID}
      >
        {task.isCompleted ? (
          <View style={styles.check} testID={TASK_ITEM_COMPLETED_TEST_ID}>
            <Check />
          </View>
        ) : (
          <View style={styles.rounded} testID={TASK_ITEM_CREATED_TEST_ID} />
        )}
      </TouchableOpacity>

      <Text style={[styles.name, task.isCompleted && styles.completed]}>
        {task.name}
      </Text>
      <TouchableOpacity
        onPress={() => onRemoveTask(task.id)}
        testID={BUTTON_REMOVE_TASK_TEST_ID}
      >
        <View>
          <Trash />
        </View>
      </TouchableOpacity>
    </View>
  );
}

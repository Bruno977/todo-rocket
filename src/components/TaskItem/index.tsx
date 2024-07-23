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
      <TouchableOpacity onPress={() => onPress(task.id)}>
        {task.isCompleted ? (
          <View style={styles.check}>
            <Check />
          </View>
        ) : (
          <View style={styles.rounded} />
        )}
      </TouchableOpacity>

      <Text style={[styles.name, task.isCompleted && styles.completed]}>
        {task.name}
      </Text>
      <TouchableOpacity onPress={() => onRemoveTask(task.id)}>
        <View>
          <Trash />
        </View>
      </TouchableOpacity>
    </View>
  );
}

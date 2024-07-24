import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "./styles";
import { colors } from "../../theme/colors";
import Plus from "../../assets/plus.svg";

interface InputCreateTaskProps {
  value: string;
  setValue: (value: string) => void;
  handleCreateTask: () => void;
}

export function InputCreateTask({
  value,
  setValue,
  handleCreateTask,
}: InputCreateTaskProps) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Adicione uma nova tarefa"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChangeText={(value) => setValue(value)}
        value={value}
        style={[
          { borderColor: isFocus ? colors.purpleDark : colors.gray700 },
          styles.input,
        ]}
        placeholderTextColor={colors.gray300}
      />
      <TouchableOpacity style={styles.button} onPress={handleCreateTask}>
        <View style={styles.img}>
          <Plus />
        </View>
      </TouchableOpacity>
    </View>
  );
}

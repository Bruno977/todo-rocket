import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { colors } from "../../theme/colors";
import Plus from "../../assets/plus.svg";

interface InputCreateTaskProps {
  value: string;
  setValue: (value: string) => void;
  handleCreateTask: () => void;
}

export const INPUT_TEST_ID = "inputTestId";
export const BUTTON_TEST_ID = "buttonTestId";

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
        testID={INPUT_TEST_ID}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleCreateTask}
        testID={BUTTON_TEST_ID}
      >
        <View style={styles.img}>
          <Plus />
        </View>
      </TouchableOpacity>
    </View>
  );
}

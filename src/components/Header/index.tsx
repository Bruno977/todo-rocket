import { View } from "react-native";
import { styles } from "./styles";
import Logo from "../../assets/logo.svg";

export function Header() {
  return (
    <View style={styles.header}>
      <Logo width={110} height={32} />
    </View>
  );
}

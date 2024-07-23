import { Text, View } from "react-native";
import { styles } from "./styles";

interface TagProps{
  name: string;
  quantity: number;
  color: string;
}

export function Tag({name, quantity = 0, color}: TagProps){
  return(
    <View style={styles.container}>
      <Text style={[{color: color},styles.name]}>{name}</Text>
      <Text style={styles.quantity}>{quantity}</Text>
    </View>
  )
}
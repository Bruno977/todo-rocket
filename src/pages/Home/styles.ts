import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  wrapper:{
    backgroundColor: colors.gray600,
    flex:1,
  },
  container:{
    paddingHorizontal: 24
  },
  containerInput:{
    marginTop: -26
  },
  containerTags:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
    marginBottom: 20
  }
})
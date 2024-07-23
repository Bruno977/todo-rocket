import { StyleSheet } from "react-native";
import { FONT } from "../../config/fonts";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8
  },
  name:{
    fontFamily: FONT.INTER_BOLD,
    fontSize: 14
  },
  quantity:{
    minWidth: 25,
    height: 19,
    borderRadius: 999,
    backgroundColor: colors.gray400,
    color: colors.gray200,
    textAlign: "center",
    fontFamily: FONT.INTER_BOLD,
    fontSize: 12
  }
})
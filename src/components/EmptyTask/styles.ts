import { StyleSheet } from "react-native";
import { FONT } from "../../config/fonts";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container:{
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 48,
    borderTopWidth:1,
    borderStyle: "solid",
    borderColor: colors.gray400
  },
  title:{
    fontSize: 14,
    fontFamily: FONT.INTER_BOLD,
    lineHeight: 19.6,
    color: colors.gray300,
    marginTop: 16

  },
  subtitle: {
    fontSize: 14,
    fontFamily: FONT.INTER_REGULAR,
    lineHeight: 19.6,
    color: colors.gray300
  },
})
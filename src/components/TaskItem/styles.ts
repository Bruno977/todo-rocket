import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { FONT } from "../../config/fonts";

export const styles = StyleSheet.create({
  container:{
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
    backgroundColor: colors.gray500,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 8
  },
  rounded:{
    width: 17.45,
    height: 17.45,
    borderRadius: 999,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: colors.blue
  },
  check:{
    width: 17.45,
    height: 17.45,
    borderRadius: 999,
    backgroundColor: colors.purpleDark,
    alignItems: "center",
    justifyContent: "center"
  },
  name:{
    color: colors.gray100,
    fontFamily: FONT.INTER_REGULAR,
    fontSize: 14,
    flex: 1,
    lineHeight: 22.4
  },
  completed:{
    textDecorationLine:"line-through",
    color: colors.gray300
  }
})
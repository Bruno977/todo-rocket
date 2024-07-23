import { Platform, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { FONT } from "../../config/fonts";

export const styles = StyleSheet.create({
  container:{
    flexDirection: "row",
    gap: 4,
  },
  input: {
    height: 52,
    backgroundColor: colors.gray500,
    color: colors.gray100,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderWidth: 1,
    borderStyle: "solid",
    fontSize: 16,
    flex: 1,
    fontFamily: FONT.INTER_REGULAR
  },
  button:{
    height: 52,
    width: 52,
    borderRadius: 8,
    backgroundColor: colors.blueDark,
    justifyContent: "center",
    alignContent: "center",
  },
  img:{
    marginHorizontal: "auto",
  }
});
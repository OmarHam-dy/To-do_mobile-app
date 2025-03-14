import { StyleSheet, TouchableOpacity } from "react-native";
import { View } from "react-native";

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});

export default function Btn({ bgColor, moreStyles, onPress, children }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btn,
        moreStyles,
        {
          backgroundColor: bgColor,
        },
      ]}
    >
      <View>{children}</View>
    </TouchableOpacity>
  );
}

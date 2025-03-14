import { Text } from "react-native";

export default function Header() {
  return (
    <Text
      style={{
        width: "100%",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: "#0077b6",
        paddingVertical: 20,
        color: "#fff",
      }}
    >
      To-Do List
    </Text>
  );
}

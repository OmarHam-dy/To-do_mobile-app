import { Text, View } from "react-native";
import Btn from "./Btn";

export default function Item({ item, onDeleteItem, onMarkCompleted }) {
  return (
    <View
      style={{
        backgroundColor: "#f6f6f6",
        marginBottom: 20,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: item.completed ? "#0ead69" : "#0077b6",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text>{item.title}</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 10,
        }}
      >
        {!item.completed && (
          <Btn bgColor={"#0ead69"} onPress={() => onMarkCompleted(item.id)}>
            <Text style={{ textAlign: "center" }}>✔</Text>
          </Btn>
        )}
        <Btn bgColor={"#d90429"} onPress={() => onDeleteItem(item.id)}>
          <Text style={{ textAlign: "center" }}>✖</Text>
        </Btn>
      </View>
    </View>
  );
}

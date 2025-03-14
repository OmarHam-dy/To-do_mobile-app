import { StatusBar } from "expo-status-bar";
import { FlatList, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Item from "./Item";

export default function ItemsList({ items, onDeleteItem, onMarkCompleted }) {
  return (
    <SafeAreaProvider
      style={{ width: "100%", paddingHorizontal: 10, paddingVertical: 20 }}
    >
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: StatusBar.currentHeight || 0,
        }}
      >
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <Item
              item={item}
              onDeleteItem={onDeleteItem}
              onMarkCompleted={onMarkCompleted}
            />
          )}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <Text style={{ textAlign: "center" }}>No items yet!</Text>
          }
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

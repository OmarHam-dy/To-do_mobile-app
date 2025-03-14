import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
import AddForm from "./components/AddForm";
// import { StatusBar } from "expo-status-bar";

export default function App() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    console.log(item);

    setItems((items) => [...items, item]);
  }

  function deleteItem(id) {
    setItems((items) => items.filter((item) => item.id != id));
  }

  function markCompleted(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: true } : item
      )
    );
  }

  return (
    <>
      <View style={styles.container}>
        <Header />
        <AddForm onAddItem={addItem} />
        <ItemsList
          items={items}
          onDeleteItem={deleteItem}
          onMarkCompleted={markCompleted}
        />
        {/* <StatusBar style="auto" /> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
});

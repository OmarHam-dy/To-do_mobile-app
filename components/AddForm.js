import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Btn from "./Btn";

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    addingVertical: 20,
    borderBottomStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#eee",
  },

  input: {
    width: "65%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#00b4d8",
    borderRadius: 7,
    padding: 10,
    marginRight: 10,
  },
  formContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default function AddForm({ onAddItem }) {
  const [title, setTitle] = useState("");

  function handleAddItem(item) {
    if (title.trim() === "") return;
    onAddItem(item);
    setTitle("");
  }
  return (
    <View style={[styles.formContainer, styles.sectionContainer]}>
      <TextInput
        placeholder="write your item here..."
        style={styles.input}
        onChangeText={(newTitle) => setTitle(newTitle)}
        defaultValue={title}
      />
      <Btn
        bgColor={"#00b4d8"}
        moreStyles={{ flex: 1 }}
        onPress={() =>
          handleAddItem({ id: Date.now(), title: title, completed: false })
        }
      >
        <Text style={{ color: "#fff" }}>Add Itme</Text>
      </Btn>
    </View>
  );
}

import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

export function Home() {
  return (
    <>
      <Text>Home</Text>
      <TextInput style={styles.inputText}></TextInput>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Button</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  inputText: {
    width: "50%",
    height: 40,
    backgroundColor: "#F8F890",
    marginTop: 10,
    color: "#6B6B53",
    fontSize: 18,
    borderRadius: 10,
    padding: 5,

    elevation: 20,
    shadowColor: "#999919",
  },
  button: {
    width: "35%",
    height: 35,
    backgroundColor: "#FED45B",
    marginTop: 5,
    color: "#6B6B53",
    fontSize: 18,
    borderRadius: 10,
    padding: 5,

    elevation: 20,
    shadowColor: "#796019",
  },
  buttonText: {
    color: "#6B6B53",
    fontSize: 18,
    alignSelf: "center",
  },
});

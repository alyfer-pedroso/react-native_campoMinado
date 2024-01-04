import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import Flag from "./Flag";

export default (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.flagContainer}>
        <TouchableOpacity onPress={props.onFlagPress} style={styles.flagButton}>
          <Flag bigger />
        </TouchableOpacity>
        <Text style={styles.flagsLeft}>= {props.flagsLeft}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={props.onNewGame}>
        <Text style={styles.buttonLabel}>Novo Jogo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#09aaf3",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  flagContainer: {
    flexDirection: "row",
  },
  flagButton: {
    marginTop: 10,
    minWidth: 30,
  },
  flagsLeft: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 5,
    marginLeft: 20,
  },
  button: {
    backgroundColor: "lightblue",
    padding: 5,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  buttonLabel: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 10,
  },
  header: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "600",
  },
  textInp: {
    height: 40,
    marginTop: 25,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  inputError: {
    borderColor: "red",
  },
  error: {
    color: "red",
  },
  pgLink: {
    textDecorationLine: "underline",
    color: "#0000EE",
    marginBottom: 10,
  },
});

export default styles;

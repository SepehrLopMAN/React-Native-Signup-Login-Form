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
  pwdContainer: {
    position: "relative",
  },
  visibilityIcon: {
    position: "absolute",
    right: 10,
    top: 32,
    height: 25,
    width: 25,
    padding: 0,
  },
});

export default styles;

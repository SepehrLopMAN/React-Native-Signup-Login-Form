import { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";

export default function App() {
  [username, setUsername] = useState("");
  [usernameError, setUsernameError] = useState(false);
  [password, setPassword] = useState("");
  [passowrdError, setPassowrdError] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={[styles.textInp, usernameError ? styles.inputError : {}]}
        placeholder="Username / Email"
        value={username}
        onChangeText={(val) => {
          setUsername(val);
          setUsernameError(false);
        }}
      />
      {usernameError && (
        <Text style={styles.error}> Username/Email required! </Text>
      )}
      <TextInput
        style={[
          styles.textInp,
          passowrdError ? styles.inputError : {},
          !passowrdError ? { marginBottom: 20 } : {},
        ]}
        placeholder="Password"
        value={password}
        onChangeText={(val) => {
          setPassword(val);
          setPassowrdError(false);
        }}
        secureTextEntry
      />
      {passowrdError && (
        <Text style={[styles.error, { marginBottom: 20 }]}>
          {" "}
          Password required!{" "}
        </Text>
      )}
      <Button
        title="Submit"
        onPress={() => {
          if (password.trim() === "") setPassowrdError(true);
          if (username.trim() === "") setUsernameError(true);
        }}
      />
    </SafeAreaView>
  );
}

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
});

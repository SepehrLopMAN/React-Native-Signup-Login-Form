import { useEffect, useState } from "react";
import {
  Button,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../utils/styles";
import { useIsFocused } from "@react-navigation/native";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [password, setPassword] = useState("");
  const [passowrdError, setPassowrdError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setUsernameError(false);
      setPassowrdError(false);
    }
  }, [isFocused]);

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
      <View style={styles.pwdContainer}>
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
          secureTextEntry={!showPassword}
        />

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.visibilityIcon}
          onPress={() => setShowPassword((val) => !val)}
        >
          <Image
            style={{
              width: 25,
              height: 25,
            }}
            source={
              showPassword
                ? require("../assets/img/eye-view.png")
                : require("../assets/img/eye-hide.png")
            }
          />
        </TouchableOpacity>
      </View>
      {passowrdError && (
        <Text style={[styles.error, { marginBottom: 20 }]}>
          Password required!
        </Text>
      )}
      <Text style={styles.pgLink} onPress={() => navigation.navigate("Signup")}>
        Create an account
      </Text>
      <Button
        title="Submit"
        onPress={() => {
          if (username.trim() === "") setUsernameError(true);
          if (password === "") setPassowrdError(true);
        }}
      />
    </SafeAreaView>
  );
}

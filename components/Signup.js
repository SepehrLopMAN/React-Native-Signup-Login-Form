import React, { useReducer } from "react";
import { SafeAreaView, Text, TextInput, Button, Picker } from "react-native";
import styles from "../utils/styles";

const signupReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_ERROR":
      return {
        ...state,
        errors: { ...state.errors, [action.field]: action.message },
      };
    default:
      return state;
  }
};

export default function Signup({ navigation }) {
  const initialState = {
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: {
      name: null,
      surname: null,
      email: null,
      password: null,
      confirmPassword: null,
    },
  };

  const [state, dispatch] = useReducer(signupReducer, initialState);

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const signupHandler = () => {
    if (!state.name.trim()) {
      dispatch({
        type: "SET_ERROR",
        field: "name",
        message: "Name is required",
      });
    }

    if (!state.surname.trim()) {
      dispatch({
        type: "SET_ERROR",
        field: "surname",
        message: "Surname is required",
      });
    }

    emailAddrHandler();

    passwordHanlder();

    if (state.password !== state.confirmPassword) {
      dispatch({
        type: "SET_ERROR",
        field: "confirmPassword",
        message: "Passwords do not match",
      });
    }

    // TODO, PRCEEDING WITH SIGNUP
  };

  const emailAddrHandler = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!state.email.trim() || !emailRegex.test(state.email.trim())) {
      dispatch({
        type: "SET_ERROR",
        field: "email",
        message: "Invalid email address",
      });
      return true;
    }
  };

  const passwordHanlder = () => {
    if (!passwordRegex.test(state.password)) {
      dispatch({
        type: "SET_ERROR",
        field: "password",
        message:
          "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character",
      });
      dispatch({
        type: "SET_ERROR",
        field: "confirmPassword",
        message: " ",
      });
      return true;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Signup</Text>
      <TextInput
        style={[styles.textInp, state.errors.name ? styles.inputError : {}]}
        placeholder="Name"
        value={state.name}
        onChangeText={(value) => {
          dispatch({ type: "SET_FIELD", field: "name", value });
          dispatch({ type: "SET_ERROR", field: "name", value: null });
        }}
      />

      {state.errors.name && (
        <Text style={styles.error}>{state.errors.name}</Text>
      )}

      <TextInput
        style={[styles.textInp, state.errors.surname ? styles.inputError : {}]}
        placeholder="Surname"
        value={state.surname}
        onChangeText={(value) => {
          dispatch({ type: "SET_FIELD", field: "surname", value });
          dispatch({ type: "SET_ERROR", field: "surname", value: null });
        }}
      />

      {state.errors.surname && (
        <Text style={styles.error}>{state.errors.surname}</Text>
      )}

      <TextInput
        style={[styles.textInp, state.errors.email ? styles.inputError : {}]}
        placeholder="Email"
        value={state.email}
        onChangeText={(value) => {
          dispatch({ type: "SET_FIELD", field: "email", value });
          if (!emailAddrHandler())
            dispatch({ type: "SET_ERROR", field: "email", value: null });
        }}
      />

      {state.errors.email && (
        <Text style={styles.error}>{state.errors.email}</Text>
      )}

      <TextInput
        style={[styles.textInp, state.errors.password ? styles.inputError : {}]}
        placeholder="Password"
        value={state.password}
        secureTextEntry={true}
        onChangeText={(value) => {
          dispatch({ type: "SET_FIELD", field: "password", value });
          if (!passwordHanlder()) {
            dispatch({ type: "SET_ERROR", field: "password", value: null });
            if (state.errors.confirmPassword === " ")
              dispatch({
                type: "SET_ERROR",
                field: "confirmPassword",
                value: null,
              });
          }
        }}
      />

      {state.errors.password && (
        <Text style={styles.error}>{state.errors.password}</Text>
      )}

      <TextInput
        style={[
          styles.textInp,
          state.errors.confirmPassword ? styles.inputError : {},
          !state.errors.confirmPassword ? { marginBottom: 20 } : {},
        ]}
        placeholder="Repeat Password"
        value={state.confirmPassword}
        secureTextEntry={true}
        onChangeText={(value) => {
          dispatch({ type: "SET_FIELD", field: "confirmPassword", value });
          dispatch({
            type: "SET_ERROR",
            field: "confirmPassword",
            value: null,
          });
        }}
      />

      {state.errors.confirmPassword && (
        <Text style={[styles.error, { marginBottom: 20 }]}>
          {state.errors.confirmPassword}
        </Text>
      )}

      <Text style={styles.pgLink} onPress={() => navigation.navigate("Login")}>
        Already have an account?
      </Text>

      <Button title="Sign Up" onPress={signupHandler} />
    </SafeAreaView>
  );
}

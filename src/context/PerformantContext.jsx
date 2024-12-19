import { useCallback, useReducer } from "react";
import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext();
const UserContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER": {
      return { ...state, name: "chethan" };
    }
    default:
      return { ...state };
  }
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      return { ...state, isLoggedIn: true };
    }
    case "LOGOUT": {
      return { ...state, isLoggedIn: false };
    }
    default:
      return { ...state };
  }
};

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, {
    isLoggedIn: true,
  });
  const [userState, userDispatch] = useReducer(userReducer, { name: "raja" });

  const setLoggedIn = useCallback(() => {
    authDispatch({ type: "LOGIN" });
  }, []);

  const setUsers = useCallback(() => {
    userDispatch({ type: "ADD_USER" });
  }, []);

  const authData = useMemo(
    () => ({
      setLoggedIn,
      isLoggedIn: authState.isLoggedIn,
    }),
    [authState.isLoggedIn]
  );

  const userData = useMemo(
    () => ({ setUsers, user: userState.name }),
    [userState.name]
  );

  return (
    <AuthContext.Provider value={authData}>
      <UserContext.Provider value={userData}>{children}</UserContext.Provider>
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export const useUserData = () => useContext(UserContext);

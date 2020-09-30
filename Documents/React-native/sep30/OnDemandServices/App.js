import 'react-native-gesture-handler';
import * as React from 'react';
import { useState, useEffect } from "react";
import { View, Text, StatusBar, SafeAreaView, StyleSheet,LogBox } from "react-native";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./src/redux";
////export const NetworkContext = React.createContext({ isConnected: true });
import * as NetInfo from "@react-native-community/netinfo"
import { ReduxNetworkProvider } from 'react-native-offline';
import { Router } from './src/routes';
const store = createStore(RootReducer, applyMiddleware(thunk));
// console.disableYellowBox = true;
// console.reportErrorsAsExceptions = false;
// LogBox.ignoreLogs()
// LogBox.ignoreAllLogs()
export default function App() {

  return (
   
 
    <Provider store={store}>
    <ReduxNetworkProvider>
      <Router />
    </ReduxNetworkProvider>
  </Provider>
   
  );
}


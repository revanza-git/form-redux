import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import configureStore from "../Store";
import FormPage from "../Containers/FormContainer";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <FormPage />
  </Provider>
);

export default App;

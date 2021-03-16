import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/styles.css";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./store";
import { Provider } from "react-redux";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import TodoApp from "./containers";
import Loading from "./components/Loading";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const { persistor, store } = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={<Loading />} persistor={persistor}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<TodoApp />} />
					<Route path="sign-in" element={<SignIn />} />
					<Route path="sign-up" element={<SignUp />} />
				</Routes>
			</BrowserRouter>
		</PersistGate>
	</Provider>,
	document.getElementById("root")
);

import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthContextProvider from "./context/auth/authState";

function App() {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<div className="container">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
					</Switch>
				</div>
			</AuthContextProvider>
		</BrowserRouter>
	);
}

export default App;

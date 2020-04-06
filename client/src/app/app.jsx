import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginContainer from "./pages/login/login-container";
import MainContainer from "./pages/main/main-container";
import SignupContainer from "./pages/signup/signup-container";

const App = () => {
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route exact path="/" component={MainContainer} />
					<Route path="/login" component={LoginContainer} />
					<Route path="/signup" component={SignupContainer} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;

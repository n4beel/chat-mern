import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/main";
import Signup from "./pages/signup";
import Login from "./pages/login";

const App = () => {
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route exact path="/" component={Main} />
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;

import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/UI/Layout";
import Dashboard from "./components/pages/Dashboard";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Layout>
          <Route path="/" exact>
            <Redirect to="/Dashboard" />
          </Route>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
        </Layout>
      </Switch>
    </>
  );
}

export default App;

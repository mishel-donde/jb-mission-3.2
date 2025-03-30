import { BrowserRouter } from "react-router-dom";
import Layout from "../layout/layout/Layout";
import List from "../../components/pages/list/List";
import "./App.css";

export default function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
        {}
        <List />
      </BrowserRouter>
    </div>
  );
}

import { data } from "./data/data";
import ListHOC from "./components/ListHOC"
import './App.css';

export default function App() {
  return <ListHOC list={data} />;
}



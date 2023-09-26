import "./App.css";
import CardDisplay from "./components/Card/CardDisplay";
import Form from "./components/Form/Form";
import { useState } from "react";
import BasicTable from "./components/Table/Table";

function App() {
  const [data, setData] = useState([]);

  return (
    <div>
      <Form fetchData={setData} />
      <CardDisplay data={data} />
      <BasicTable data={data} />
    </div>
  );
}

export default App;

import "./App.css";
import CardDisplay from "./components/Card/CardDisplay";
import Form from "./components/Form/Form";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  return (
    <div>
      <Form fetchData={setData} />
      <CardDisplay data={data} />
    </div>
  );
}

export default App;

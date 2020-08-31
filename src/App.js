import React from "react";
import "./styles.css";
import AsyncSelect from "react-select/async";
import makeAnimated from "react-select/animated";
import { components } from "react-select";

const getData = async (input, input1) => {
  console.log("getting datra");
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  let data = await response.json();
  console.log(data);
  return data.map((datum) => ({ label: datum.title, value: datum }));
};

const loadData = (inputValue) => {
  if (inputValue.length > 2) {
    return new Promise((resolve) => {
      resolve(getData(inputValue, null));
    });
  }
};

export default function App() {
  return (
    <div className="App">
      <AsyncSelect
        components={{
          ...makeAnimated(),
          SingleValue: (props) => <components.SingleValue {...props} />
        }}
        loadOptions={loadData}
      />
    </div>
  );
}

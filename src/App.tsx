import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Toogle } from "./Components/Toogle";
import { Form } from "./Components/Form";
import { DynamicTable } from "./Components/DynamicTable";

export type appValues = {
  basic: boolean;
  extended: boolean;
};

function App() {
  type values = {
    salary: number;
    time: number;
    food?: number;
    transport?: number;
  };

  const [valueForm, setFormValues] = useState<values>({
    salary: 0,
    time: 0,
    food: 0,
    transport: 0,
  });

  const [value, setValues] = useState<appValues>({
    basic: true,
    extended: false,
  });

  const handleChange = (): void => {
    // console.log(value);
    value.basic
      ? setValues({ basic: false, extended: true })
      : setValues({ basic: true, extended: false });
  };

  const handleChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(" hello");
    setFormValues({ ...valueForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(valueForm);
    setFormValues({ salary: 0, time: 0, food: 0, transport: 0 });
  };

  return (
    <div className="App">
      <h1>Your Time Money Exchange Rate Calculator</h1>{" "}
      <Toogle handleChange={handleChange} />
      <Form
        handleChangeForm={handleChangeForm}
        handleSubmit={handleSubmit}
        appMode={value}
      />
      <DynamicTable hours={valueForm.time} salary={valueForm.salary} />
    </div>
  );
}

export default App;

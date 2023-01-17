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

  const [submitValue, setSumbitValue] = useState(false);

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
    setFormValues({ ...valueForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSumbitValue(true);    
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
      {submitValue ? (
        <div>
        <DynamicTable
          hours={valueForm.time}
          salary={valueForm.salary}
          food={valueForm.food}
          transport={valueForm.transport}
        />
        <button type="button">Click Me</button>
      </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;

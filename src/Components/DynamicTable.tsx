import { type } from "os";
import { FC, useEffect } from "react";
//import TableData from "./TableData";
import { hleExchangeRate } from "../Utils/exchangeRate";

interface TableProps {
  hours: number;
  salary: number;
  food?: number;
  transport?: number;
}

export const DynamicTable: FC<TableProps> = ({ hours, salary,food,transport }) => {



  const hleRate:number = hleExchangeRate(hours, salary, transport, food);

  // get table row data
  const tdData = (first: number, second: number, third: number, fourth: number) => {

    return (
      <>
        <tr>
          <td>{ first}</td>
          <td>{first * hleRate}</td>
        </tr>
        <tr>
          <td>{second}</td>
          <td>{second * hleRate}</td>
        </tr>
        <tr>
          <td>{third}</td>
          <td>{third * hleRate}</td>
        </tr>
        <tr>
          <td>{fourth}</td>
          <td>{fourth * hleRate}</td>
        </tr>
      </>
    );
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Money</th>
          <th>Time Needed</th>
        </tr>
      </thead>
      <tbody>{tdData(5,10,20,50)}</tbody>
    </table>
  );
};

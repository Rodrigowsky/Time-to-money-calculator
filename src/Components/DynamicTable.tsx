import { FC, useEffect } from "react";
//import TableData from "./TableData";

interface TableProps {
  hours: number;
  salary: number;
}

export const DynamicTable: FC<TableProps> = ({ hours, salary }) => {


  const hleExhangeRate = (hoursWorked: number, SalaryIn: number) => {
    let resultRate = (hoursWorked * 4) / SalaryIn;
    return resultRate;
  };

  const hleRate = hleExhangeRate(hours, salary);




  // get table row data
  const tdData = () => {
    console.log(hleRate)
    return (
      <>
      <tr>
        <td>5</td>
        <td>{(5 * hleRate).toFixed(1)}</td>
      </tr>
       <tr>
       <td>10</td>
       <td>{(10 * hleRate).toFixed(1)}</td>
     </tr>
       <tr>
       <td>20</td>
       <td>{(20 * hleRate).toFixed(1)}</td>
     </tr>
       <tr>
       <td>50</td>
       <td>{(50 * hleRate).toFixed(1)}</td>
     </tr>
     </>
    );
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Money</th>
          <th>Time Needed</th>
        </tr>
      </thead>
      <tbody>{tdData()}</tbody>
    </table>
  );
};

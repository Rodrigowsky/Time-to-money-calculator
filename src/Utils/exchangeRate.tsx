export const hleExchangeRate = (hoursWorked: number, SalaryIn: number, food?:number, transport?:number):number => {
  let resultRate = (hoursWorked * 4) / SalaryIn;

  return Math.round( resultRate * 1000 + Number.EPSILON ) / 1000
;
};
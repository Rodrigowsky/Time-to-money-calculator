//Element Selector

const mainForm = document.querySelector(".form-main");
const salaryInput = document.querySelector("#salary");
const hoursInput = document.querySelector("#hours");
const body = document.querySelector("body");

//Calculate

const hleExhangeRate = (hoursWorked, SalaryIn) => {
  let resultRate = (hoursWorked * 4) / SalaryIn;
  return resultRate;
};

//Element Creation

const tableCreation = function (
  value1,
  value2,
  value3,
  value4,
  value5,
  value6,
  value7
) {
  const hleRate = hleExhangeRate(hoursInput.value, salaryInput.value);

  //Table Barebones

  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");

  table.appendChild(thead);
  table.appendChild(tbody);

  body.appendChild(table);

  //First Row Heading

  let row_1 = document.createElement("tr");
  let heading_1 = document.createElement("th");
  heading_1.innerHTML = "Amount";
  let heading_2 = document.createElement("th");
  heading_2.innerHTML = "Hours Needed";

  row_1.appendChild(heading_1);
  row_1.appendChild(heading_2);

  thead.appendChild(row_1);

  //Data Rows(loop)
  //5 10 20 30 50 75 100
  for (let i = 0; i < arguments.length; i++) {
    let row_2 = document.createElement("tr");
    let row_2_data_1 = document.createElement("td");
    console.log("hello", arguments);
    const data = arguments[i];
    row_2_data_1.innerHTML = data;

    let row_2_data_2 = document.createElement("td");
    row_2_data_2.innerHTML = Number(data * hleRate).toFixed(1);

    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);

    tbody.appendChild(row_2);

    mainForm.style.display = "none";

    const custom_style={
      width: "400px",
      height: "300px",
      position: "absolute",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      margin: "auto"
    }
    
    Object.assign(table.style, custom_style);
    
  }
};

//Event Listeners

mainForm.addEventListener("submit", (e) => {
  e.preventDefault();

  tableCreation(5, 10, 20, 30, 50, 75, 100);
  

});

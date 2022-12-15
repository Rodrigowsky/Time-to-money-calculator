//state
let changedToMinutes = false;

//Element Selector

const mainForm = document.querySelector(".form-main");
const salaryInput = document.querySelector("#salary");
const hoursInput = document.querySelector("#hours");
const body = document.querySelector(".container");
const tableContainer = document.querySelector(".table_c");
const statePage = "basic"

//Calculate

const hleExhangeRate = (hoursWorked, SalaryIn) => {1
  let resultRate = (hoursWorked * 4) / SalaryIn;
  return resultRate;
};

//Verify State

const verifyState = () => {
  const dataPoints = document.querySelectorAll(".hours");
  const unitTitle = document.querySelector(".unit_title");
  const unitTitleBtn = document.querySelector(".unit_title_button");
  if (changedToMinutes === false) {
    for (const data of dataPoints) {
      data.innerHTML = data.innerHTML * 60;
    }
    unitTitle.innerHTML = "Minutes Needed";
    unitTitleBtn.innerHTML = "Change To Hours";
    changedToMinutes = true;
  } else {
    for (const data of dataPoints) {
      data.innerHTML = data.innerHTML / 60;
    }
    unitTitle.innerHTML = "Hours Needed";
    unitTitleBtn.innerHTML = "Change To Minutes";
    changedToMinutes = false;
  }
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

  table.classList.add("statePage");

  table.appendChild(thead);
  table.appendChild(tbody);

  tableContainer.appendChild(table);

  //First Row Heading

  let row_1 = document.createElement("tr");

  let heading_1 = document.createElement("th");
  heading_1.innerHTML = "Money Amount";
  heading_1.classList.add("cell_border");
  let heading_2 = document.createElement("th");
  heading_2.innerHTML = "Hours Needed";
  heading_2.classList.add("cell_border", "unit_title");

  row_1.appendChild(heading_1);
  row_1.appendChild(heading_2);

  thead.appendChild(row_1);

  //Data Rows(loop)
  //5 10 20 30 50 75 100
  for (let i = 0; i < arguments.length; i++) {
    let row_2 = document.createElement("tr");

    let row_2_data_1 = document.createElement("td");
    row_2_data_1.classList.add("cell_border");
    const data = arguments[i];
    row_2_data_1.innerHTML = data;

    let row_2_data_2 = document.createElement("td");
    row_2_data_2.innerHTML = Number(data * hleRate).toFixed(1);
    row_2_data_2.classList.add("hours");

    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);

    tbody.appendChild(row_2);
  }

  mainForm.style.display = "none";

  //CSS inject style

  // const custom_style = {
  //   width: "400px",
  //   height: "300px",
  //   borderRadius: "6px",
  //   marginTop: "70px"
  // //   position: absolute,
  // // top: 0,
  // // bottom: 0,
  // // left: 0,
  // // right: 0,
  // // margin: auto,
  // };

  table.classList.add("custom_style");

  //Object.assign(table.style, custom_style);
 

};

//Table Extended

const tableCreationExtended = function (
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

  table.classList.add("statePage");

  table.appendChild(thead);
  table.appendChild(tbody);

  tableContainer.appendChild(table);

  //First Row Heading

  let row_1 = document.createElement("tr");

  let heading_1 = document.createElement("th");
  heading_1.innerHTML = "Service";
  heading_1.classList.add("cell_border");
  let heading_2 = document.createElement("th");
  heading_2.innerHTML = "Price";
  heading_2.classList.add("cell_border", "unit_title");
  let heading_3 = document.createElement("th");
  heading_3.innerHTML = "Hours Needed";
  heading_3.classList.add("cell_border", "unit_title");

  row_1.appendChild(heading_1);
  row_1.appendChild(heading_2);
  row_1.appendChild(heading_3);

  thead.appendChild(row_1);

  //Data Rows(loop)
  //5 10 20 30 50 75 100
  for (let i = 0; i < arguments.length; i++) {
    let row_2 = document.createElement("tr");
    let row_2_data_1 = document.createElement("td");
    row_2_data_1.classList.add("cell_border");
    row_2_data_1.innerHTML = arguments[i].name;

    let row_2_data_2 = document.createElement("td");
    const data = arguments[i].price;
    row_2_data_2.innerHTML = data;

    let row_2_data_3 = document.createElement("td");
    row_2_data_3.innerHTML = Number(data * hleRate).toFixed(1);
    row_2_data_3.classList.add("hours");

    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);

    tbody.appendChild(row_2);
  }

  mainForm.style.display = "none";

  table.classList.add("custom_style");


  
};

//Btns Elements Creation

const btnCreation = (parentElement) => {
  const btnContainer = document.createElement("div");
  const backButton = document.createElement("button");
  const printBtn = document.createElement("button");
  const changeToMinutesHoursBtn = document.createElement("button");
  const tableElement = document.querySelectorAll('.statePage')

  console.log(tableElement)

  parentElement.appendChild(btnContainer);
  btnContainer.classList.add("btnContainer");

  backButton.innerHTML = "Go Back";
  printBtn.innerHTML = "Save To Print";
  changeToMinutesHoursBtn.innerHTML = "Change To Minutes";

  btnContainer.appendChild(backButton);
  btnContainer.appendChild(printBtn);
  btnContainer.appendChild(changeToMinutesHoursBtn);

  backButton.classList.add("btn");
  printBtn.classList.add("btn");
  changeToMinutesHoursBtn.classList.add("btn", "unit_title_button");

  //Event Listener For Buttons

  backButton.addEventListener("click", () => {
    tableElement[0].remove();
    tableElement[1].remove();
    btnContainer.remove();
    mainForm.style.display = "flex";
  });

  printBtn.addEventListener("click", downloadPDFWithjsPDF);

  changeToMinutesHoursBtn.addEventListener("click", () => {
    verifyState();
  });

  //CSS for Btns
  const custom_style = {
    width: "400px",
    paddingTop: "25px",
  };

  const backBtnStyle = {
    marginRight: "20px",
    padding: "5px",
  };
  const printBtnStyle = {
    marginLeft: "20px",
    padding: "5px",
  };

  const changeToMinutesHoursBtnBtnStyle = {
    marginLeft: "20px",
    padding: "5px",
  };

  Object.assign(backButton.style, backBtnStyle);
  Object.assign(printBtn.style, printBtnStyle);
  Object.assign(changeToMinutesHoursBtn.style, changeToMinutesHoursBtnBtnStyle);
  Object.assign(btnContainer.style, custom_style);
};

//Event Listeners
//Startup


mainForm.addEventListener("submit", (e) => {
  e.preventDefault();
  tableCreation(5, 10, 20, 30, 50, 75, 100);
  tableCreationExtended(
    { name: "Spotify", price: 10 },
    { name: "Amazon Prime", price: 20 },
    { name: "Netflix", price: 75 },
    { name: "M40", price: 89.99 },
    { name: "HBO", price: 89.99 },
    { name: "Disney Plus", price: 89.99 },
    { name: "Apple TV", price: 89.99 }
  );
  btnCreation(body);
  console.log("helo")
});

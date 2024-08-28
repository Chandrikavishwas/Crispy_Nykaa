import { getdata, url } from "./utility.js";

// for check number valid or not
let number = document.getElementById("number");
let pop = document.getElementById("s_register_number_required");
document.getElementById("number").onkeyup = () => {
  let x = number.value.length;
  if (x === 0) {
    pop.innerText = "REQUIERD";
  } else if (x === 10) {
    pop.style.display = "none";
  } else {
    pop.style.display = "block";
    pop.innerText = "ENTER A VALID MOBILE NUMBER";
  }
};
let dataArr;
getdata(`${url}`).then((res) => {
  console.log(res);
  dataArr = res;
});

// for check number register or not in json
document.getElementById("s_register_proceed").onclick = async () => {
  let x = number.value.length;

  // Check if the input length is exactly 10 characters
  if (x === 10) {
    // Save the number to localStorage
    localStorage.setItem("number", document.querySelector("#number").value);

    let flag = false;

    // Ensure that dataArr is defined and populated
    if (dataArr && dataArr.length > 0) {
      dataArr.map((el) => {
        if (el.number === document.querySelector("#number").value) {
          flag = true;
        }
      });
    }

    // Redirect based on whether the number exists in dataArr
    if (flag) {
      console.log("match");
      location.href = "./login.html";
    } else {
      console.log("not match");
      location.href = "./register.html";
    }
  } else {
    // Display an alert if the input is not valid
    document.getElementById("alertBox").style.display = "block";
    document.getElementById("alert_title").innerText =
      "ENTER A VALID MOBILE NUMBER";
    document.getElementById("alert_des").innerText = "";
  }
};

// Close alert box on clicking the close button
document.getElementById("close_alert").onclick = () => {
  document.getElementById("alertBox").style.display = "none";
};

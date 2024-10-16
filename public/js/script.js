let form = document.getElementById("form");
let address = document.getElementById("address");
let locationf = document.getElementById("location");
let forecastf = document.getElementById("forecast");
let errorf = document.getElementById("error");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // handle auto reload
  console.log(address.value);
  whetherFunction();
  // = address.value=''; after show whether
  form.reset();
});

// let whetherFunction = async () => {
//   try {
//     const response = await fetch(`127.0.0.1:27017/proj-1`);
//     const data = await response.json();
// console.log(data);
// if (data.error) {
//   errorf.innerHTML = `error: ${data.error}`;
//   locationf.innerHTML = "";
//   forecastf.innerHTML = "";
//   console.log("error");
// } else {
//   locationf.innerText = `location is: ${data.location}`;
//   forecastf.innerHTML = `forecast is: ${data.forecast}`;
//   errorf.innerHTML = "";
//   console.log("done");
// }
//     console.log("done");
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

let whetherFunction = async () => {
  try {
    const response = await fetch(
      `http://localhost:3000/whether?address=${address.value}`
    ); 
    const data = await response.json();
    console.log(data);
    if (data.error) {
      errorf.innerHTML = `error: ${data.error}`;
      locationf.innerHTML = "";
      forecastf.innerHTML = "";
      console.log("error");
    } else {
      locationf.innerText = `location is: ${data.location}`;
      forecastf.innerHTML = `forecast is: ${data.forecast}`;
      errorf.innerHTML = "";
      console.log("done");
    }
  } catch (err) {
    console.log(err);
  }
};

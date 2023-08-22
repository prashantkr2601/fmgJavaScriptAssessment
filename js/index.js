// 1st Assignment
// Assessment 1. Write a simple Validation in Javascript for - email, phone and name

function inputValidation(validatedRegex, inputValue, selectedId) {
  if (
    validatedRegex.test(inputValue) &&
    inputValue !== "" &&
    inputValue.trim().length > 0 &&
    inputValue.trim().length < 30 &&
    inputValue !== null &&
    inputValue !== undefined &&
    inputValue
  ) {
    document.getElementById(selectedId).style.border = "3px solid green";
    return true;
  } else {
    document.getElementById(selectedId).style.border = "3px solid red";
    return false;
  }
}

function nameValidation(nameValue, selectedId) {
  let nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
  return inputValidation(nameRegex, nameValue, selectedId);
}

function emailValidation(emailValue, selectedId) {
  let emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return inputValidation(emailRegex, emailValue, selectedId);
}

function phoneValidation(phoneValue, selectedId) {
  let phoneRegex = /^(\+91-|\+91|0)?(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
  return inputValidation(phoneRegex, phoneValue, selectedId);
}

function handleFormValues(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  let nameValidationResult = nameValidation(name, "name");
  let emailValidationResult = emailValidation(email, "email");
  let phoneValidationResult = phoneValidation(phone, "phone");

  if (nameValidationResult && emailValidationResult && phoneValidationResult) {
    document.getElementById("errorMsg").style.display = "none";
    let div = document.createElement("div");
    let classes = ["card", "p-3", "shadow", "border-3"];
    div.classList.add(...classes);
    div.innerHTML = `
      <h3 class="text-center fw-bold user">User Data</h3>
      <p class="mb-1"><span class="fw-bold">Name: </span>${name}</p>
      <p class="mb-1"><span class="fw-bold">Email:</span> ${email}</p>
      <p class="mb-1"><span class="fw-bold">Phone:</span> ${phone}</p>
      `;
    document.getElementById("output").style.display = "block";
    document.getElementById("output").appendChild(div);
  } else {
    document.getElementById("errorMsg").style.display = "block";
  }
}
document.getElementById("form").addEventListener("submit", handleFormValues);

// Second Asseeement
//  Assessment 2. Create a simple HTML Table with a search bar - that filters table row contents on the fly.

const carData = [
  {
    id: 1,
    name: "BMW",
    model: "X5",
    year: 2015,
    color: "Black",
    price: 50000,
    origin: "Germany",
    description:
      "BMW X5 is a mid-size luxury SUV produced by BMW. The first generation of the X5, with the chassis code E53, made its debut in 1999.",
  },
  {
    id: 2,
    name: "Mercedes",
    model: "GLC",
    year: 2016,
    color: "White",
    price: 60000,
    origin: "Germany",
    description:
      "The Mercedes-Benz GLC-Class (X253/C253) is a compact luxury Crossover SUV introduced in 2015 for the 2016 model year that replaces the former Mercedes-Benz GLK-Class.",
  },
  {
    id: 3,
    name: "Audi",
    model: "Q7",
    year: 2017,
    color: "Black",
    price: 70000,
    origin: "Germany",
    description:
      "The Audi Q7 is a full-size luxury crossover SUV of the German manufacturer Audi, unveiled in September 2005 at the Frankfurt Motor Show.",
  },
  {
    id: 4,
    name: "Lexus",
    model: "RX",
    year: 2018,
    color: "White",
    price: 80000,
    origin: "Japan",
    description:
      "The Lexus RX (Japanese: レクサス・RX, Rekusasu RX) is a mid-size luxury crossover SUV sold since 1998 by Lexus, the luxury division of Toyota.",
  },
  {
    id: 5,
    name: "Toyota",
    model: "RAV4",
    year: 2019,
    color: "Black",
    price: 90000,
    origin: "Japan",
    description:
      "The Toyota RAV4 (Japanese: トヨタ RAV4 (ラヴフォー), Toyota Ravufō) is a compact crossover SUV (sport utility vehicle) produced by the Japanese automobile manufacturer Toyota.",
  },
  {
    id: 6,
    name: "Honda",
    model: "CR-V",
    year: 2020,
    color: "White",
    price: 100000,
    origin: "Japan",
    description:
      "The Honda CR-V is a compact crossover SUV manufactured by Honda since 1995 and introduced in the North American market in 1997. It uses the Honda Civic platform with an SUV body design. ",
  },
  {
    id: 7,
    name: "Ford",
    model: "Explorer",
    year: 2021,
    color: "Black",
    price: 110000,
    origin: "USA",
    description:
      "The Ford Explorer is a range of SUVs manufactured by Ford Motor Company since the 1991 model year. The first four-door SUV produced by Ford, the Explorer was introduced as a replacement for the two-door Bronco II.",
  },
  {
    id: 8,
    name: "Jeep",
    model: "Grand Cherokee",
    year: 2022,
    color: "White",
    price: 120000,
    origin: "USA",
    description:
      "The Jeep Grand Cherokee is a range of mid-size SUVs produced by the American manufacturer Jeep. While some other SUVs were manufactured with body-on-frame construction, the Jeep Grand Cherokee has always used a unibody chassis.",
  },
  {
    id: 9,
    name: "Chevrolet",
    model: "Tahoe",
    year: 2023,
    color: "Black",
    price: 130000,
    origin: "USA",
    description:
      "The Chevrolet Tahoe (and its badge engineered GMC Yukon counterpart) is a full-size SUV from General Motors. Chevrolet and GMC sold two different-sized SUVs under their Blazer/Jimmy model names through the early 1990s.",
  },
  {
    id: 10,
    name: "Cadillac",
    model: "Escalade",
    year: 2024,
    color: "White",
    price: 140000,
    origin: "USA",
    description:
      "The Cadillac Escalade is a full-size luxury SUV engineered and manufactured by General Motors. It was Cadillac's first major entry into the SUV market. ",
  },
  {
    id: 11,
    name: "Land Rover",
    model: "Range Rover",
    year: 2025,
    color: "Black",
    price: 150000,
    origin: "UK",
    description:
      "The Land Rover Range Rover (generally known simply as a Range Rover) is a full-sized luxury sport utility vehicle (SUV) from Land Rover, a marque of Jaguar Land Rover. ",
  },
  {
    id: 12,
    name: "Volvo",
    model: "XC90",
    year: 2026,
    color: "White",
    price: 160000,
    origin: "Sweden",
    description:
      "The Volvo XC90 is a mid-size luxury crossover SUV manufactured and marketed by Volvo Cars since 2002 and now in its second generation. ",
  },
  {
    id: 13,
    name: "Porsche",
    model: "Cayenne",
    year: 2027,
    color: "Black",
    price: 170000,
    origin: "Germany",
    description:
      "The Porsche Cayenne is a mid-size luxury crossover sport utility vehicle produced by the German manufacturer Porsche since 2002, with",
  },
  {
    id: 14,
    name: "Maserati",
    model: "Levante",
    year: 2028,
    color: "White",
    price: 180000,
    origin: "Italy",
    description:
      "The Maserati Levante (Tipo M161) is a mid-size luxury crossover SUV based on the Kubang concept car that debuted at the 2011 Frankfurt Auto Show, and built by Maserati at the Mirafiori factory in Turin, Italy starting in 2016.",
  },
  {
    id: 15,
    name: "Bentley",
    model: "Bentayga",
    year: 2029,
    color: "Black",
    price: 190000,
    origin: "UK",
    description:
      "The Bentley Bentayga is a mid-size, front-engine, all-wheel drive, five-door luxury crossover marketed by Bentley, beginning with model year 2016. ",
  },
  {
    id: 16,
    name: "Rolls-Royce",
    model: "Cullinan",
    year: 2030,
    color: "White",
    price: 200000,
    origin: "UK",
    description:
      "The Rolls-Royce Cullinan is a full-sized luxury sport utility vehicle (SUV) produced by Rolls-Royce Motor Cars. The Cullinan is the first SUV to be launched by the Rolls-Royce marque, and is also the brand's first all-wheel drive vehicle. ",
  },
  {
    id: 17,
    name: "Lamborghini",
    model: "Urus",
    year: 2031,
    color: "Black",
    price: 210000,
    origin: "Italy",
    description:
      "The Lamborghini Urus is an SUV manufactured by Italian automobile manufacturer Lamborghini. It was unveiled on 4 December 2017 and was put on the market for the 2018 model year. ",
  },
  {
    id: 18,
    name: "Aston Martin",
    model: "DBX",
    year: 2032,
    color: "White",
    price: 220000,
    origin: "UK",
    description:
      "The Aston Martin DBX is a mid-size, front-engine, all-wheel drive luxury crossover produced by British luxury car manufacturer Aston Martin. The car was unveiled on 20 November 2019 in Beijing, China. ",
  },
  {
    id: 19,
    name: "Ferrari",
    model: "Purosangue",
    year: 2033,
    color: "Black",
    price: 230000,
    origin: "Italy",
    description:
      "The Ferrari Purosangue (Italian for thoroughbred) is an upcoming front mid-engine, all-wheel-drive, five-door luxury crossover SUV produced by the Italian automobile manufacturer Ferrari. ",
  },
  {
    id: 20,
    name: "Bugatti",
    model: "Chiron",
    year: 2034,
    color: "White",
    price: 240000,
    origin: "France",
    description:
      "The Bugatti Chiron is a mid-engine two-seater sports car developed and manufactured in Molsheim, France by French automobile manufacturer Bugatti Automobiles S.A.S.. The successor to the Bugatti Veyron, the Chiron was first shown at the Geneva Motor Show on 1 March 2016. ",
  },
];

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key.toUpperCase());
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  let tbody = table.createTBody();
  for (let element of data) {
    let row = tbody.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

window.onload = function () {
  let table = document.getElementById("table");
  let data = Object.keys(carData[0]);
  generateTableHead(table, data);
  generateTable(table, carData);
};

function handleSearch(event) {
  event.preventDefault();
  let searchValue = document.getElementById("carSearch").value;
  let searchResult = carData.filter((data) => {
    for (let key in data) {
      if (
        data[key].toString().toLowerCase().includes(searchValue.toLowerCase())
      ) {
        return data;
      }
    }
  });

  let table = document.getElementById("table");
  table.innerHTML = "";
  let data = Object.keys(carData[0]);
  generateTableHead(table, data);
  if (searchResult.length > 0) {
    generateTable(table, searchResult);
  } else {
    let row = table.insertRow();
    let cell = row.insertCell();
    cell.setAttribute("colspan", "8");
    cell.setAttribute("rowspan", "4");
    let rowClasses = ["text-center", "fs-3", "fw-bold", "text-danger", "py-3"];
    cell.classList.add(...rowClasses);
    let text = document.createTextNode("No Data Found");
    cell.appendChild(text);
  }
}

document.getElementById("carSearch").addEventListener("keyup", handleSearch);

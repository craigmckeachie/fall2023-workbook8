//GET ALL
fetch("http://localhost:3000/users")
  .then((response) => response.json())
  .then((users) => {
    console.log(users);
  });

//GET ALL AWAIT
async function getUsers() {
  const response = await fetch("http://localhost:3000/users");
  const users = await response.json();
  return users;
}

async function initialize() {
  const users = await getUsers();
  console.log(users);
}

initialize();


const newUser = {
  "name": "Craig Flayer",
  "username": "cflayer",
  "email": "cflayer.biz",
  "address": {
    "street": "Moxy Trail",
    "suite": "Suite 280",
    "city": "Howbout",
    "zipcode": "58804-1099",
    "geo": {
      "lat": "24.8918",
      "lng": "21.8984"
    }
  },
  "phone": "210.067.6132",
  "website": "flayergroup.io",
  "company": {
    "name": "Flayer Group",
    "catchPhrase": "Configurable multimedia task-force",
    "bs": "generate enterprise e-tailers"
  }
}

//POST
fetch("http://localhost:3000/users", { 
    method: "POST",
    headers: "",
    body:  
    })
  .then((response) => response.json())
  .then((users) => {
    console.log(users);
  });

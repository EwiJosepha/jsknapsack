let rice = document.getElementById("rice");
let salt = document.getElementById("salt");
let milk = document.getElementById("milk");
let oil = document.getElementById("oil");
let garri = document.getElementById("garri");
let beans = document.getElementById("beans");
let tomatoes = document.getElementById("tomatoes");
let grandnut = document.getElementById("grandnut");
let cheese = document.getElementById("cheese");
let butter = document.getElementById("butter");
let parfumRice = document.getElementById("parfum-rice");
let mayor = document.getElementById("oilmayor");
let cotton = document.getElementById("cotton");
let fish = document.getElementById("fish");
let meat = document.getElementById("meat");
let onoin = document.getElementById("onoin");
let egusi = document.getElementById("egusi");
let maise = document.getElementById("maise");
let sugar = document.getElementById("sugar");
let spaghetti = document.getElementById("spaghetti");
let btn = document.getElementById("btn");
let display = document.getElementById("output");
let output = document.createElement("p");

// display.append(output)
// function input () {
//   const inputfield= document.getElementById("input-field").value

//   console.log(inputfield)
// }

// let selectIterms = document.getElementById("selectIterms");


let provision = [
  {
    Item: "Salt",
    Weight: 10,
    value: 3500,
  },
  {
    Item: "butter",
    Weight: 5,
    value: 3500,
  },
  {
    Item: "rice",
    Weight: 25,
    value: 32000,
  },
  {
    Item: "sugar",
    Weight: 3,
    value: 3500,
  },
  {
    Item: "oil",
    Weight: 5,
    value: 7500,
  },
  {
    Item: "oil-Mayor",
    Weight: 5,
    value: 8500,
  },
  {
    Item: "cotton",
    Weight: 50,
    value: 50000,
  },
  {
    Item: "milk",
    Weight: 6,
    value: 10000,
  },
  {
    Item: "Egusi",
    Weight: 5,
    value: 30000,
  },
  {
    Item: "Beans",
    Weight: 15,
    value: 22000,
  },
  {
    Item: "Tomatoes",
    Weight: 7,
    value: 18000,
  },
  {
    Item: "fish",
    Weight: 13,
    value: 45000,
  },
  {
    Item: "Meat",
    Weight: 8,
    value: 30500,
  },
  {
    Item: "maise",
    Weight: 6,
    value: 5000,
  },
  {
    Item: "spaghetti",
    Weight: 4,
    value: 2000,
  },
  {
    Item: "Purfum-Rice",
    Weight: 17,
    value: 35000,
  },
  {
    Item: "cheese",
    Weight: 8,
    value: 8000,
  },
  {
    Item: "onoin",
    Weight: 4,
    value: 5000,
  },
  {
    Item: "garri",
    Weight: 17,
    value: 5000,
  },
  {
    Item: "Grandnut",
    Weight: 9,
    value: 15000,
  },
];

const done = document.getElementById("done");

function input() {
  const input = document.getElementById("input-field").value;
  if (input === "") {
    selectIterms = [];
    console.log("enter a max weight");
    display.innerHTML = "enter max weight first";
  } 
}

// btn.addEventListener('click', input)


done.addEventListener('click', ()=>{
  input()
})

const knapsackIterms = [];
let addedWieght = 0;
let arrForitemSelected = []


// selectIterms.innerHTML = provision.map((item) => `<option ${item.Weight} ${item.Item} ${item.Weight}Kg ${item.value}</option>`)
// console.log(provision.map)

selectIterms.innerHTML = provision.map(
  (item) =>
    `<option value=${item.Item}>${item.Item} ${item.Weight}Kg ${item.value}frs </option>`
);

let selectedWeigth = document.getElementById("selectedWeigth")

// add an event function to the select field to update addedweight and the items selected

selectIterms.addEventListener("change", (event) => {

  let itemName = event.target.value
// now we find in our provision where items name === the item seected
 let itemSelected = provision.find((item)=> item.Item === itemName)

 // update our knapsack iterms with the newly selected
 knapsackIterms.push(itemSelected)

 // here we update the addedweight by the wieght of item we selected
addedWieght = addedWieght + itemSelected.Weight

// display the added weigth
selectedWeigth.innerText = addedWieght
let itemSelected2 = `<p>${itemSelected.Item} ${itemSelected.Weight}kg ${itemSelected.value}</p>
`
arrForitemSelected.push(itemSelected2)

display.innerHTML = arrForitemSelected

// document.getElementById("knapsackitems").innerHTML = knapsackIterms.map((itemSelected)=> {
//   return `<p>${itemSelected.Item} ${itemSelected.Weight}kg ${itemSelected.value}</p>
//   
// });

console.log("added items", knapsackIterms) 

console.log(" selectect weight", event.target.value);

})








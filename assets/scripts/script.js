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

let selectIterms = document.getElementById("selectIterms");

// btn.addEventListener('click', input)

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
  } else {
    display.innerHTML = displayer();
    console.log(selectIterms);
  }
}

// done.addEventListener('click', ()=>{
//   input()
//     displayer()

// })

const knapsackIterms = [];
let addedWieght = 0;

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




  console.log("added items", knapsackIterms);
  console.log(" selectect weight", event.target.value);
});

/*

butter.addEventListener("click", ()=>{
 
  selectedIterms.push(provision[0])
  addedWieght = addedWieght + 4
  butter = 4 + "kg"
  output.innerHTML = butter
  output.style.backgroundColor = "blue"
  output.style.fontSize = "25px"
  console.log(butter)
})

egusi.addEventListener("click", ()=>{
  egusi = 5
  console.log(egusi)
})

cheese.addEventListener("click", ()=>{
  cheese = 8
  console.log(cheese)
})

tomatoes.addEventListener("click", ()=>{
  tomatoes = 7  
  console.log(tomatoes)
})

rice.addEventListener("click", ()=>{
  output.innerHTML = (`${provision[0].item}`)
  output.innerHTML = (`${provision[0].weigth}`)
  output.innerHTML = (`${provision[0].item} <br> ${provision[0].weigth} <br> ${provision[0].value} `)
   
  // rice = 25  
  // console.log(rice)
})

beans.addEventListener("click", ()=>{
  beans = 5  
  console.log(beans)
})

garri.addEventListener("click", ()=>{
  garri = 7  
  console.log(garri)
})

oil.addEventListener("click", ()=>{
  oil = 5  
  console.log(oil)
})

mayor.addEventListener("click", ()=>{
  mayor = 8  
  console.log(mayor)
})

grandnut.addEventListener("click", ()=>{
  grandnut = 9  
  console.log(grandnut)
})

cotton.addEventListener("click", ()=>{
  cotton = 50  
  console.log(cotton)
})
meat.addEventListener("click", ()=>{
  meat = 8  
  console.log(meat)
})
fish.addEventListener("click", ()=>{
  fish = 13  
  console.log(fish)
})
sugar.addEventListener("click", ()=>{
  sugar = 3  
  console.log(sugar)
})
onoin.addEventListener("click", ()=>{
  onoin = 4  
  console.log(onoin)
})

milk.addEventListener("click", ()=>{
  milk = 4  
  console.log(milk)
})

spaghetti.addEventListener("click", ()=>{
  spaghetti = 4  
  console.log(spaghetti)
})

parfumRice.addEventListener("click", ()=>{
  parfumRice = 5  
  console.log(parfumRice)
})

maise.addEventListener("click", ()=>{
  maise = 6  
  console.log(maise)
})

salt.addEventListener("click", ()=>{
  salt = 10  
  console.log(salt)
})

*/

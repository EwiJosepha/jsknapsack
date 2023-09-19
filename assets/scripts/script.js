let rice= document.getElementById('rice')
let salt= document.getElementById('salt')
let milk= document.getElementById('milk')
let oil= document.getElementById('oil')
let garri= document.getElementById('garri')
let beans= document.getElementById('beans')
let tomatoes= document.getElementById('tomatoes')
let grandnut= document.getElementById('grandnut')
let cheese= document.getElementById('cheese')
let butter= document.getElementById('butter')
let parfumRice= document.getElementById('parfum-rice')
let mayor= document.getElementById('oilmayor')
let cotton= document.getElementById('cotton')
let fish= document.getElementById('fish')
let meat= document.getElementById('meat')
let onoin = document.getElementById('onoin')
let egusi= document.getElementById('egusi')
let maise= document.getElementById('maise')
let sugar= document.getElementById('sugar')
let spaghetti= document.getElementById('spaghetti')
let btn= document.getElementById('btn')
let display= document.getElementById('output')
let output = document.createElement('p')

// display.append(output)
// function input () {
//   const inputfield= document.getElementById("input-field").value

//   console.log(inputfield)
// }

let selectIterms = document.getElementById("selectIterms")

// btn.addEventListener('click', input)

let provision = [  
  {
  Item: "Salt",
  Weight: 10,
  value: 3500
  },
  {
    Item: "butter",
    Weight: 15,
    value: 3500
    }
]

const selectedIterms = []
const addedWieght = 0

selectIterms.innerHTML = provision.map((item) => `<option value=${item.Weight}>${item.Item} ${item.Weight}Kg ${item.value}frs </option>`)


selectIterms.addEventListener("change", (event)=> console.log("item value: ", event.target.value))




























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
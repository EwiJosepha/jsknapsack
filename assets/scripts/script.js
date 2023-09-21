const display = document.getElementById('output')
// display.append(output)
// function input () {
//   const inputfield= document.getElementById("input-field").value

//   console.log(inputfield)
// }

// let selectIterms = document.getElementById("selectIterms");

const provision = [
  {
    Item: 'Salt',
    Weight: 10,
    value: 3500
  },
  {
    Item: 'butter',
    Weight: 5,
    value: 3500
  },
  {
    Item: 'rice',
    Weight: 25,
    value: 32000
  },
  {
    Item: 'sugar',
    Weight: 3,
    value: 3500
  },
  {
    Item: 'oil',
    Weight: 5,
    value: 7500
  },
  {
    Item: 'oil-Mayor',
    Weight: 5,
    value: 8500
  },
  {
    Item: 'cotton',
    Weight: 50,
    value: 50000
  },
  {
    Item: 'milk',
    Weight: 6,
    value: 10000
  },
  {
    Item: 'Egusi',
    Weight: 5,
    value: 30000
  },
  {
    Item: 'Beans',
    Weight: 15,
    value: 22000
  },
  {
    Item: 'Tomatoes',
    Weight: 7,
    value: 18000
  },
  {
    Item: 'fish',
    Weight: 13,
    value: 45000
  },
  {
    Item: 'Meat',
    Weight: 8,
    value: 30500
  },
  {
    Item: 'maise',
    Weight: 6,
    value: 5000
  },
  {
    Item: 'spaghetti',
    Weight: 4,
    value: 2000
  },
  {
    Item: 'Purfum-Rice',
    Weight: 17,
    value: 35000
  },
  {
    Item: 'cheese',
    Weight: 8,
    value: 8000
  },
  {
    Item: 'onoin',
    Weight: 4,
    value: 5000
  },
  {
    Item: 'garri',
    Weight: 17,
    value: 5000
  },
  {
    Item: 'Grandnut',
    Weight: 9,
    value: 15000
  }
]

const done = document.getElementById('done')
const flex = document.querySelector('.flex')
const finish = document.getElementById('btncomplete')
const div = document.createElement('div')
const p = document.createElement('p')

flex.append(div)
flex.append(p)

// finish.addEventListener("click", () => {
//   inputt();
//
// });

const displayWeight = document.getElementById('weightdisplay')
function inputt () {
  const input = document.getElementById('input-field').value
  if (input === '') {
    console.log('enter a max weight')
    display.innerHTML = 'enter max weight first'
    return
  }

  finish.addEventListener('click', function updating () {
    if (addedWieght > input) {
      finish.style.backgroundColor = 'red'
      div.innerHTML = `<div><p>Error Knapsack cannot contain items please enter weight greater or equal to your maximum weight</p><div>`
      div.style.backgroundColor = 'red'
      div.style.width = '100%'
      div.style.padding = '20px'
      div.style.paddingBottom = '20px'
      div.style.fontSize = '25px'
      div.style.fontFamily = 'sans-serif'
      div.style.height = '300px'
      div.style.border = '2px solid #fff'
      div.style.backgroundColor = '#ff0000'
    } else if (input > addedWieght) {
      finish.style.backgroundColor = 'green'
      p.innerHTML =
        'THIS IS THE CAPACITY OF YOUR KNAPSACK' + ' ' + addedWieght + 'kg'
      p.style.color = 'green'
      p.style.fontSize = '25px'
      p.style.fontFamily = '25px'
      p.style.paddingBottom = '20px'
    } else {
      finish.style.backgroundColor = 'green'
      p.innerHTML =
        'THIS IS THE CAPACITY OF YOUR KNAPSACK' + ' ' + addedWieght + 'kg'
      p.style.color = 'green'
      p.style.fontSize = '25px'
      p.style.fontFamily = '25px'
      p.style.paddingBottom = '20px'
    }
  })

  displayWeight.innerHTML = 'THIS IS YOUR MAX-WEIGHT' + ' ' + input + 'Kg'
}

// btn.addEventListener('click', input)

done.addEventListener('click', () => {
  inputt()
  //   arrForitemSelected = []
})

const knapsackIterms = []
let addedWieght = 0
const arrForitemSelected = []

// selectIterms.innerHTML = provision.map((item) => `<option ${item.Weight} ${item.Item} ${item.Weight}Kg ${item.value}</option>`)
// console.log(provision.map)
const selectIterms =document.getElementById('selectIterms')
selectIterms.innerHTML = provision.map(
  (item) =>
    `<option value=${item.Item}>${item.Item} ${item.Weight}Kg ${item.value}frs </option>`
)

const selectedWeigth = document.getElementById('selectedWeigth')
selectIterms.addEventListener('change', (event) => {

  const itemName = event.target.value

  // now we find in our provision where items name === the item seected
  const itemSelected = provision.find((item) => item.Item === itemName)

  // update our knapsack iterms with the newly selected
  knapsackIterms.push(itemSelected)

  // here we update the addedweight by the wieght of item we selected

  addedWieght = addedWieght + itemSelected.Weight

  // display the added weigth
  selectedWeigth.innerText = addedWieght
  const itemSelected2 = `<p>${itemSelected.Item} ${itemSelected.Weight}kg ${itemSelected.value}</p>`
  arrForitemSelected.push(itemSelected2)
  display.innerHTML = arrForitemSelected

  // document.getElementById("knapsackitems").innerHTML = knapsackIterms.map((itemSelected)=> {
  //   return `<p>${itemSelected.Item} ${itemSelected.Weight}kg ${itemSelected.value}</p>
  //
  // });

  console.log('added items', knapsackIterms)
  console.log('selectect weight', event.target.value)
})

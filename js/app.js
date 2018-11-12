
'use strict'
// find element in HTML & match using an Id 
let elBody = document.getElementById('myBody')
let Table= document.getElementById('Cookies-Table')
let elform = document.getElementById('cookiesForm')

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am','1pm', '2pm','3pm','4pm','5pm','6pm','7pm',]
let cookies = []

// Declare a var & assign it the value of an array that will contain all our store hours 

let cookiesStore = function (location, min, max, cusNum){
  this.location = location
  this.max = max
  this.min = min
  this.cusNum = cusNum
  this.newStoreArray = []
}

cookiesStore.prototype.average = function(){
  let randomNumCookies = Math.ceil(Math.random() * (this.max - this.min) + this.min)
  //console.log(randomNumCookies)
  return (randomNumCookies*this.cusNum)
}

// instantiating a new instance 
let Silverspring = new cookiesStore('Silverspring',5, 20, 3)
let Hyattsville = new cookiesStore ('Hyattsville', 35, 150, 15)
let Greenbelt = new cookiesStore ('Greenbelt', 22, 120, 12)

// Push new instance to Cookies array
cookies.push(Silverspring, Hyattsville, Greenbelt)

// Creating a Table in our HTML
let elHeader = document.createElement('tr')
Table.appendChild(elHeader)
let elTh = document.createElement('th')
elHeader.appendChild(elTh)
elTh.innerText = 'Stores'

// loop through our hr array & display each hr as table header
for (let i =0; i <hours.length; i++){
  let elTh = document.createElement('th')
  elHeader.appendChild(elTh)
  elTh.innerText = hours[i]
}

// create a new row and append it to our table 
cookiesStore.prototype.newCookiesStore = function(){
  let row = document.createElement('tr')
  Table.appendChild(row)
  let newTh = document.createElement('th')
  row.appendChild(newTh)
  newTh.innerText = this.location 
  let counter=0
  for (let j =0; j< hours.length; j++ ){
    let resultPerDay = this.average()
    counter +=resultPerDay
    let elTd = document.createElement('td')
    row.appendChild(elTd)
    elTd.innerText = resultPerDay
    this.newStoreArray.push(resultPerDay) 
  }

  let totalPerDay = document.createElement('td')
  row.appendChild(totalPerDay)
  totalPerDay.innerText= counter
}

let total = document.createElement('th')
elHeader.appendChild(total)
total.innerText = 'Total/Day'


for (let i =0; i <cookies.length; i++){
  cookies[i].newCookiesStore()
//console.log(this.newCookiesStore) 
}

let totalFooter = function(){
  let newRow = document.createElement('tr')
  Table.appendChild(newRow)
  let tPday = document.createElement('th')
  newRow.appendChild(tPday)
  tPday.innerText = 'Total/Hr'

  for (let i=0; i<hours.length; i++){
    let counter = 0
    for(let j = 0; j<cookies.length; j++){
      counter+= cookies[j].newStoreArray[i]
    }
    let newTd=document.createElement('td')
    newRow.appendChild(newTd)
    newTd.innerText=counter
  }
}
totalFooter()

//total.innerText = 'Total'
//access our inputs on our form in HTML through dot notation with JS
let elNameOfStore = elform.nameOfStore
let elMinCustomers = elform.minNum
let elMaxCustomers = elform.maxNum
let elCusNum = elform.cusNum

// Creating an Event Listner for submit event & create a new instance to our constructor function

elform.addEventListener('submit', function(event){
  event.preventDefault()
  Table.removeChild(Table.lastChild)
  let newStore = new cookiesStore(elNameOfStore.value, parseInt(elMinCustomers.value), parseInt (elMaxCustomers.value), parseInt(elCusNum.value) )
  cookies.push(newStore)
  
  // invoke our new Store
  newStore.newCookiesStore()
  totalFooter()
})


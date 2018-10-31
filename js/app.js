'use strict'
 // find element in HTML & match using an Id 
    let elBody = document.getElementById('myBody')
    let Table= document.getElementById('Cookies-Table')
    let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am','1pm', '2pm','3pm','4pm','5pm','6pm','7pm']
    let cookies = []

    // Declare a var & assign it the value of an array that will contain all our store hours 

    let cookiesStore = function (location, min, max, cusNum){
    this.location = location
    this.max = max
    this.min = min
    this.cusNum = cusNum
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


  for (let i =0; i <hours.length; i++){
    let elTh = document.createElement('th')
    elHeader.appendChild(elTh)
    elTh.innerText = hours[i]
  }


  let cookiesStore.prototype.result = function(){
    // create a new row and append it to our table 
    for (let i =0; i <cookies.length; i++){
      let row = document.createElement('tr')
      Table.appendChild(row)
      //let elTh = document.createElement('th')
      //elRow.appendChild(elTh)
       row.innerText = cookies[i].location 
      for (let j =0; j< hours.length; j++ ){
        let elTd = document.createElement('td')
        row.appendChild(elTd)
        let averagePrint=  elTd.innerText = cookies[i].average()
        console.log(averagePrint) 
      }
    }

  }
    

  let total_header=document.createElement('tr')
  Table.appendChild(total_header)
  let total = document.createElement('th')
  total_header.appendChild(total)
  total.innerText = 'Total'

  // display Cookies Store in h2

  let elCookiesTitle = document.createElement('h2')
  elBody.appendChild(elCookiesTitle)
  elCookiesTitle.innerText = Silverspring.location

  // store information into HTML
  let elList = document.createElement('ul')
  elBody.appendChild(elList)





  
'use strict'

let elBody = document.getElementById('myBody')
let elBody1= document.getElementById('myBody1')
let elBody2= document.getElementById("myBody2")




let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am','1pm', '2pm','3pm','4pm','5pm','6pm','7pm']
let cookies = []

// this the location of cookies store in Silver-Spring

let Silverspring= {
location:'Silverspring',
minNumCus: 20,
maxNumCus: 100,
cookiesPerCus:5,
cookiesPerHour: function() {
  let randomNumCookies = Math.ceil(Math.random() * (this.maxNumCus-this.minNumCus) + this.minNumCus)
  //console.log(this.cookiesPerHour.randomNumCookies)
  return randomNumCookies * this.cookiesPerCus
  alert(cookiesPerHour())
}
}


//display store-1 name in h2
let elSilverspring = document.createElement('h3')
elBody.appendChild(elSilverspring)
elSilverspring.innerText = Silverspring.location

//display store information into html
// let elList = document.createElement('ul')
// elBody.appendChild(elList)



for (let i =0; i<hours.length; i++){
  console.log(hours[i],'Total # of Cookies/hr in the location of', Silverspring.location, Silverspring.cookiesPerHour())
  let elListItem = document.createElement('ul')
  elBody.appendChild(elListItem)
  elListItem.innerText = hours[i] + ': ' + Silverspring.cookiesPerHour() 
}

// this the location of cookies store in Hyattsville 


let Hyattsville= {
  location:'hyattsville',
  minNumCus: 35,
  maxNumCus: 150,
  cookiesPerCus:15,
  cookiesPerHour: function() {
    let randomNumCookies = Math.ceil(Math.random() * (this.maxNumCus-this.minNumCus) + this.minNumCus)
    //console.log(this.cookiesPerHour.randomNumCookies)
    return randomNumCookies * this.cookiesPerCus
    alert(cookiesPerHour())
  }
  }
  
  
  //display store-1 name in h2
  let elHyattsville = document.createElement('h3')
  elBody1.appendChild(elHyattsville)
  elHyattsville.innerText = Hyattsville.location
  
  //display store information into html
  // let elList = document.createElement('ul')
  // elBody.appendChild(elList)
  
  
  
  for (let i =0; i<hours.length; i++){
    console.log(hours[i],'Total # of Cookies/hr in the location of', Hyattsville.location, Hyattsville.cookiesPerHour())
    let elListItem = document.createElement('ul')
    elBody1.appendChild(elListItem)
    elListItem.innerText = hours[i] + ': ' + Hyattsville.cookiesPerHour() 
  }

  // Store 3 in Greenbelt

  let Greenbelt= {
    location:'greenbelt',
    minNumCus: 22,
    maxNumCus: 120,
    cookiesPerCus:12,
    cookiesPerHour: function() {
      let randomNumCookies = Math.ceil(Math.random() * (this.maxNumCus-this.minNumCus) + this.minNumCus)
      //console.log(this.cookiesPerHour.randomNumCookies)
      return randomNumCookies * this.cookiesPerCus
      alert(cookiesPerHour())
    }
    }
    
    
    //display store-1 name in h2
    let elGreenbelt = document.createElement('h3')
    elBody2.appendChild(elGreenbelt)
    elGreenbelt.innerText = Greenbelt.location
    
    //display store information into html
    // let elList = document.createElement('ul')
    // elBody.appendChild(elList)
    
    
    
    for (let i =0; i<hours.length; i++){
      console.log(hours[i],'Total # of Cookies/hr in the location of', Greenbelt.location, Greenbelt.cookiesPerHour())
      let elListItem = document.createElement('ul')
      elBody2.appendChild(elListItem)
      elListItem.innerText = hours[i] + ': ' + Greenbelt.cookiesPerHour() 
    }
  
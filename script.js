let numForm = document.querySelector("#num")
let modeForm = document.querySelector("#mode")
let checkBtn = document.querySelector("#check-button")

let num = null
let mode = null
let isprime


checkBtn.addEventListener('click',eventHandler)

function eventHandler(){
    num = numForm.value
    mode = modeForm.value 
    
    primeCheck()
}


function primeCheck(){
    let j = 2
    while(j<Math.sqrt(num)){
        crossMultiple(j)
        j++
    }
}

function crossMultiple(x){
    for(let i=x; i<=n; i+=x){
        if((i==x)) setPrime(i)
        else if(!(i==2)){
            setNotPrime(i)
        } 
    }


}


function setNotPrime(np){

}

function setPrime(p){

}
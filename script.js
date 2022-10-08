let numForm = document.querySelector("#num")
let modeForm = document.querySelector("#mode")
let checkBtn = document.querySelector("#check-button")

let num = null
let mode = null



checkBtn.addEventListener('click',eventHandler)

function eventHandler(){
    num = numForm.value
    mode = modeForm.value 
    
    primeCheck()
   
}


function primeCheck(){
    let j = 2
    //Math.sqrt(num)
    while(j<num){
        crossMultiple(j)
        j++
    }
}

function crossMultiple(x){
    for(let i=x; i<=num; i+=x){
        if(!notPrimes.includes(x) && (i==x)) setPrime(i)
        else if(!(i==2)){
            setNotPrime(i)
        } 
    }


}

primes=[]
notPrimes = []
function setNotPrime(np){
    notPrimes.push(np)
    setColor(np,false)
}

function setPrime(p){
    primes.push(p)
    setColor(p,true)
}

function setColor(x,pr){
    if(pr){
        cell = document.querySelector(`[data-num="${x}"]`)
        cell.style.backgroundColor="green"
    }
    else{
        cell = document.querySelector(`[data-num="${x}"]`)
        console.log(cell.innerText)
        cell.style.backgroundColor="red"
    }

}



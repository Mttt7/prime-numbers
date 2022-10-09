const numForm = document.querySelector("#num")
const modeForm = document.querySelector("#mode")
const checkBtn = document.querySelector("#check-button")
const simulation = document.querySelector(".simulation-wrapper")
const resetBtn = document.querySelector(".reset")
const displayArea = document.querySelector(".result")


let num = null
let mode = null
let animation=false

simulation.style.display ="none"

reset()

checkBtn.addEventListener('click',proceed)
resetBtn.addEventListener('click',reset)



function isproper(n){
    let prop = true
    if(n>4999 || n<2) prop=false
    if (!(Number.isInteger(n))) prop=false
    console.log(prop)
    return prop
}
    
function invalidNum(){
    displayArea.textContent = "Invalid number! choose a number >2 and <4999"
    displayArea.style.backgroundColor = "rgba(37, 37, 205, 0.744)"
}
function proceed(){

    num = null
    mode = null
    const cells=document.querySelectorAll(".cell")
    cells.forEach((c)=>{
        simulation.removeChild(c)
    })
    simulation.style.display ="none"
    primes=[]
    notPrimes=[]


    
    num = Number(numForm.value)
    if(!(isproper(num))){
        invalidNum()
        return
        
    }
    mode = modeForm.checked 
    console.log(mode)
    
    if(mode) simulation.style.display ="grid"
    
    drawGrid()
    primeCheck()
    displayResult()
    
}

function displayResult(){
    if(primes.includes(num)){
        displayArea.textContent = `${num} is prime number`
        displayArea.style.backgroundColor = "#27AE60"
    }
    else if(notPrimes.includes(num)){
        displayArea.textContent = `${num} is NOT prime number`
        displayArea.style.backgroundColor = "#ee352a"
        
    }
}

function reset(){
    numForm.value=''
   
    num = null
    mode = null
    const cells=document.querySelectorAll(".cell")
    cells.forEach((c)=>{
        simulation.removeChild(c)
    })
    simulation.style.display ="none"
    primes=[]
    notPrimes=[]
    displayArea.textContent = "choose a number >2"
    displayArea.style.backgroundColor = "rgba(37, 37, 205, 0.744)"
    

}

function drawGrid(){
  
    const cell = document.createElement('div')
    cell.classList.add('cell')
    cell.setAttribute("data-num","1")
    let rows = Math.ceil(num/10)
    simulation.style.gridTemplateColumns=`repeat(10,32px)`
    simulation.style.gridTemplateRows = `repeat(${rows},32px)`

    for(let i = 1; i<=num; i++){
        const clonedCell=cell.cloneNode(false)
        console.log(i)
        clonedCell.textContent=`${i}`
        clonedCell.setAttribute("data-num",`${i}`)
        simulation.appendChild(clonedCell)
    }
    
    
    console.log(mode)
    

    
       
    
}


function primeCheck(){
    
    let j = 2
    //Math.sqrt(num)
    while(j<=num){
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
        
        cell.style.backgroundColor="#27AE60"
        
    }
    else{
        cell = document.querySelector(`[data-num="${x}"]`)
        cell.style.backgroundColor="#ee352a"
    }

}



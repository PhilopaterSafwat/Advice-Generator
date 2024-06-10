let quote = document.querySelector('p')
let span = document.querySelector('span')
let dice = document.querySelector('.dice')


qoutes();
async function qoutes(){
    const response = await fetch("https://api.quotable.io/random")
    const data = await response.json() 
    const id = data.length;
    const content = data.content;
    span.innerHTML = `#${id}`
    quote.innerHTML = `“ ${content} ”`
}

dice.addEventListener('click',()=>{
    qoutes();
})
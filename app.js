const ulEl = document.querySelector('ul');  // grabed our ul elemnet using querySelector
const liEl = document.createElement('li'); //created li elements using createElement
console.log(ulEl)
ulEl.textContent = "list items"
ulEl.appendChild(liEl); //added li elemene to ul element using append child method

// const mainEl = document.querySelector('main');
// console.log(mainEl)
// const divEl =  document.createElement('div');
// mainEl.appendChild(divEl)


const mainEl = document.querySelector('main') 
console.log(mainEl)
const fragment = document.createDocumentFragment();
Array.from('mainEl').forEach(function(divs) {                 //Mind blown! multiple divs added using createDocumentFrangment method
    let divEl = document.createElement('div');
    divEl.setAttribute('class','container');
    fragment.appendChild(divEl)
});

mainEl.appendChild(fragment)


const markupEl = document.querySelector('.markup') 
console.log(markupEl)
const frag = document.createDocumentFragment();
Array.from('markup').forEach(function(divs) {                 //Mind blown! multiple divs added using createDocumentFrangment method
    let divEl = document.createElement('div');
    divEl.setAttribute('class','container');
    fragment.appendChild(divEl)
});

markupEl.appendChild(fragment)

const styleEl = document.querySelector('.style');
const divEl = document.createElement('div');
divEl.setAttribute('class', 'style-div');
styleEl.appendChild(divEl);
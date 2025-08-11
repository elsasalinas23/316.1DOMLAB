//cPart one 
let mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
mainEl.classList.add('flex-ctr');

// Part Two 

let topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var( --top-menu-bg)';
topMenuEl.classList.add('flex-around');



// Part Three 
// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];
//Iterate over the entire menuLinks array and for each "link" object:

for (let link of menuLinks) {
    //  // Create an <a> element.
    let menuButton = document.createElement('a');
     //  // On the new element, add an href attribute with its value set to the href property of the "link" object.
     menuButton.setAttribute("href", link.href);
    //  // Set the new element's content to the value of the text property of the "link" object.
     menuButton.textContent = link.text;
    // console.log(menuButton);
    //  // Append the new element to the topMenuEl element.
    topMenuEl.appendChild(menuButton);

}
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

//////////////////////////////////////////////////////////////////////////////
//DOM PART TWO


// // CREATING THE SUBMENU  
//Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
let subMenuEl = document.getElementById(' <nav id="sub-menu">');

//Set the height subMenuEl element to be "100%".
subMenuEl.style.height = '100%';

//Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = '--sub-menu-bg';

//Add the class of flex-around to the subMenuEl element.//
subMenuEl.classList.add('flex-around');

// // 








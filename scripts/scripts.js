//cPart one 
const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
mainEl.classList.add('flex-ctr');

// Part Two 

const topMenuEl = document.getElementById('top-menu');
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
// loop and set const for a 
menuLinks.forEach(("link")) => {
    const a = document.createElement("a");
    //set where it points to
    a.setAttribute("href", menuLinks.href);
    //set the words that hsow up on the button
    a.textContent = menuLinks.text.toUpperCase(); 
    // put <a> inside top menu bar
    topMenuEl.appendChild(a);

}
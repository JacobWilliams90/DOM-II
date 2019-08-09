let a = document.querySelector('.intro')
let b = document.querySelector('.main-navigation')
let c = document.querySelector('footer');
let d = document.querySelector('.intro img');
let e = document.querySelector('.content-destination img');
let f = document.querySelector('.content-section');
let g = document.querySelector('.inverse-content');
let h = document.querySelector('.content-section img');
let i = document.querySelector('.inverse-content img');
let j = document.querySelectorAll('.text-content');
let k = document.querySelectorAll('.btn')
let l = document.querySelectorAll('.destination')
let m = document.querySelector('.content-destination')
let n = document.querySelectorAll('a')



function once(selection, type, cb){
    selection.addEventListener(type, function(event) {
        event.target.removeEventListener(event.type, arguments.callee);
        return cb(event);
    });
}

function color() {
    this.style.backgroundColor = 'orange';
    this.style.borderRadius = '2rem'
    this.style.padding = '2%'
}

function color2(){
    this.style.backgroundColor = 'yellow';
    this.style.borderRadius = '2rem'
    this.style.padding = '2%'
}

function disappear() {
    this.style.display = 'none';
}

function imgFlip() {
    this.src = 'img/destination.jpg'
    this.style.display = 'block'
    this.style.margin = '0 auto'
    this.style.borderRadius = '14rem';
};

function imgFlip2(){
    this.src = 'img/fun-bus.jpg'
    this.style.display = 'block'
    this.style.width = '90%'
    this.style.margin = '0 auto'
}

function instructions(){
    alert ('Use your mousewheel to scroll up and down the page, Can you find them all? Also try clicking in some places... Double clicking in others.')
}

function padding() {
    this.style.padding = '1rem';
    this.style.borderRadius = '14rem';
}

function textPad(){
    this.style.padding = '2%'
}

function bgcolor(event) { 
    event.stopPropagation()
    event.currentTarget.style.backgroundColor = 'yellow'
    event.currentTarget.style.color = 'red'
  }


a.addEventListener('wheel', color);
b.addEventListener('dblclick', disappear);
c.addEventListener('wheel', disappear);
d.addEventListener('mouseover', imgFlip);
e.addEventListener('mouseover', imgFlip2);
f.addEventListener('wheel', color2)
g.addEventListener('wheel', color)
h.addEventListener('wheel', padding)
i.addEventListener('wheel', padding)
once(b, 'mouseover', instructions)
m.addEventListener('wheel', color2)

for (let i = 0; i < j.length; i++){
    j[i].addEventListener('mouseover', textPad)
}

for (let i = 0; i < k.length; i++){
    k[i].addEventListener('click', bgcolor)
}

for (let i = 0; i < l.length; i++){
    l[i].addEventListener('click', color)
    l[i].addEventListener('click', textPad)
}

for (let i = 0; i < n.length; i++){
    n[i].addEventListener('click', (event) => {
        event.preventDefault();
    });
}

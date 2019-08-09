let a = document.querySelector('body')
let b = document.querySelector('.main-navigation')
let c = document.querySelector('footer');
let d = document.querySelector('.intro img');
// let e = document.querySelector('footer');
// let f = document.querySelector('footer');
// let g = document.querySelector('footer');
// let h = document.querySelector('footer');
// let i = document.querySelector('footer');
// let j = document.querySelector('footer');



function color() {
    this.style.backgroundColor = 'orange';
}

function disappear() {
    this.style.display = 'none';
}

function imgFlip() {
    if (this.src = 'img/fun-bus.jpg'){
    this.setAttribute('src', 'img/destination.jpg');
    this.style.paddingLeft = '10rem';
    }
    else if (this.src = 'img/destination.jpg') {
        this.setAttribute('src', 'img/fun-bus.jpg');
    }
}



a.addEventListener('wheel', color);
b.addEventListener('dblclick', disappear);
c.addEventListener('mouseover', disappear);
d.addEventListener('mouseover', imgFlip);

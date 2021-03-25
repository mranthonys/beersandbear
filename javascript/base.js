

// function toggleMenu() {

//     var x = document.getElementById("myMenu");
//         if (x.style.display = "none") {
//             x.style.display = "block";
//         } else {
//             x.style.display = "none";
//         }

// }

// function toggleMenu(myMenu) {
//     var x = document.getElementById("myMenu");
//     console.log(x.style.display)
//     if (x.style.display !== 'none') {
//         x.style.display = 'none';
//     } else {
//         x.style.display = '';
//     }

// }

const mainNav = document.querySelector('.main-nav')

// function toggeMenu()
//     document.getElementById.toggle('myMenu')
// function toggleMenu() 
function toggleMainNav(){
    
    var x = document.getElementById("myMenu");
    console.log(x.style.display)
    
    x.classList.toggle('hidden');
        
    mainNav.classList.toggle('active')
}

mainNav.addEventListener('click', toggleMainNav);


// myMenu.addEventListener('click', toggleMenu);



function changeImage (target, img1, img2) {

    if (document.getElementById(target).src == img1)
    {

        document.getElementById(target).src = img2;

    }

    else{

        document.getElementById(target).src = img1;

    }

}

// function changeImage (target, img1, img2) {

//     if (document.getElementById(target).src == img1)
//     {

//         document.getElementById(target).src = img2;

//     }

//     else{

//         document.getElementById(target).src = img1;

//     }

// }
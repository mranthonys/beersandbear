

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

const skills = [

{
    name: 'Javascript',
    featured: 'OnClick, Arrays and ClickandChange',
    experience: '5 Months',
    img: 'https://image.flaticon.com/icons/png/128/919/919828.png'
}, 

{
    name: 'CSS',
    featured: 'Flexbox, Media Queries and :Nth-Chlid',
    experience: '5 months',
    img: 'https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://www.highlander.co.uk/wp-content/uploads/2020/09/CSS3Logo-100x100.jpg'
},

{
    name: 'HTML',
    featured: 'Proper Communication with JS',
    experience: '5 months',
    img: 'https://www.dev-metal.com/wp-content/uploads/2014/04/html5-1-100x100.jpg'
},

{
    name: 'Git/Github',
    featured: 'Basic proffesional Knowledge of Git',
    experience: '5 months',
    img: 'https://img.icons8.com/ios-filled/2x/github.png'
}

];

const main = document.querySelector('main')
let html = '';

for ( let i = 0; i < skills.length; i++ ) {
    let skill = skills[i];
    html += `
        <p>${skill.name}</p>
        <p>${skill.featured}</p>
        <p>${skill.experience}</p>
        <img src="${skill.img}">
    `;
}

main.insertAdjacentHTML('beforeend', html);
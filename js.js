const input = document.getElementById('input');
const grid = document.getElementsByClassName('grid')

[0];
const clear = document.querySelector('.clear')

clear.addEventListener('click', function() {
    input.value = ''
})

window.addEventListener('load', dayNight)
window.addEventListener('load', function() {
    input.value = 'cats'
    loadImg()
    input.value = ''
})

input.addEventListener('keydown', function(event) {
    if(event.key === 'Enter')
    loadImg();
})

loadImg()
function loadImg() {
removeImages()

const url = 'https://api.unsplash.com/search/photos?query='+input.value+'&per_page=9k;]&client_id=Sh47gtmRcHVkaVd1zX6IpPKPl-1t5hevCvHXdZvfcxY'

fetch(url)
.then(response => {
    if(response.ok)
        return response.json();
        else
        alert(response.status)
})
.then(data =>{
    const imageNodes = [];
    for(let i = 0; i < data.results.length; i++ ){
        imageNodes[i] = document.createElement('div')
        imageNodes[i].className = 'img'
        imageNodes[i].style.backgroundImage = 'url('+data.results[i].urls.regular+')'
        imageNodes[i].addEventListener('dblclick', function() {
            window.open(data.results[i].links.download, '_blank')
        })
        grid.appendChild(imageNodes[i]);
    }
document.getElementsByClassName('img').on


function slidesPlugin() {
    const slides = document.querySelectorAll('.img')

for (const slide of slides) {
    slide.addEventListener('click', () => {
       clearActiveClasses()
        
        
  slide.classList.add('active')
            
        
         
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
slide.classList.remove('active')
    })
}
document.querySelector('.grid').addEventListener('click', (event) => {
    if (event.target.className === 'grid') {
        clearActiveClasses()
        
    }
    
})

}



slidesPlugin()
})
}

function removeImages() {
    grid.innerHTML = '';
}

function dayNight() {
    const date = new Date();
    const hour = date.getHours();

    if(hour >= 7 &&  hour <= 19) {
        document.body.style.backgroundColor = 'whitesmoke';
        document.body.style.color = 'black'; 
        input.style.backgroundColor = 'white'
        document.querySelector('footer').style.backgroundColor = 'white'
    }
    else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'orange';  
    }}


console.log("Ну, вроде все пункты выполены. Из дополнительного увеличение картинок при клике. И если я правильно понял, то автофокус стоит на поиске, при открытие страницы.");
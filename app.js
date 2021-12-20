const form = document.querySelector('form');
const topText = document.querySelector('#toptext');
const imgURL = document.querySelector('#imgurl');
const botText = document.querySelector('#bottext');
const memeHolder = document.querySelector('#memeHolder');


form.addEventListener('submit', function(event){
    event.preventDefault();
    
    makeMeme(imgURL.value, topText.value, botText.value);
    
})

function makeMeme(imgURL, topText, botText) {
    const container = document.createElement('div');
    const img = document.createElement('img');
    const top = document.createElement('div');
    const bot = document.createElement('div');
    const imgHover = document.createElement('div');

    // img properties
    img.setAttribute('src',imgURL);
    img.classList.add('img');

    // top & bot text properties
    top.innerText = topText;
    top.classList.add('memetext','top');

    bot.innerText = botText;
    bot.classList.add('memetext','bot');

    // container div properties
    container.classList.add('container','overlay');
    imgHover.classList.add('imgHover');
    imgHover.innerText = 'X';
    

    // append img, toptext, bottext to the container div
    container.append(img, top, bot, imgHover);

    
    memeHolder.prepend(container);
}

// reset button clears the form
const reset = document.querySelector('#reset');
reset.addEventListener('click',function(){
    imgURL.value = "";
    topText.value = "";
    botText.value = ""; 
});

memeHolder.addEventListener('click',function(event){
    const memeDiv = event.target;
    if (memeDiv.parentElement != document.querySelector('body')){
        memeDiv.parentElement.remove();
    }
});

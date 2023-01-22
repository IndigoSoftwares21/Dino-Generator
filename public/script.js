console.log('script.js loaded');
let spinner = document.getElementById('spinner');
document.getElementById('genButton').addEventListener('click', ()=>{
    spinner.style.display='flex';
    getDinoName();

    document.getElementById('dinoName').style.visibility = 'hidden';
    getDinoImage(loadComplete);
})

async function getDinoName()
{
    const response = await fetch('/dino');
    const data = await response.json();

    let dinoname = data[0].join(' ');
    document.getElementById('dinoName').style.visibility = 'initial';
    document.getElementById('dinoName').textContent = dinoname;

    console.log(dinoname);
}

async function getDinoImage(callback)
{
    document.getElementById('dinoImage').style.visibility = 'hidden'

    let i = Math.floor(Math.random() * 20);
    const response = await fetch('/dinoimage');
    const data = await response.json();

    let dinoimage = data.value[i].thumbnailUrl;

    console.log(dinoimage);
    
    document.getElementById('dinoImage').src = dinoimage;
    
    
    callback();
}

function loadComplete() {
    //alert('Image Loaded!');
    spinner.style.display = 'none';

    document.getElementById('dinoImage').style.visibility = 'initial';
}
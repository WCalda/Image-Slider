document.getElementById('theme-btn').addEventListener('click', (btn) =>{
    let text = btn.target.textContent === "Dark Mode";
    document.documentElement.classList.toggle("darkmode");
    btn.target.textContent = text ? "Light Mode" : "Dark Mode";
})

let activeImage = 0;

document.getElementById('img-changer').addEventListener('click', (  ) =>{
    let src = "src";
    let srcpath = "/assets/"
    let imgstock = [
        'Birds in Flowers Romantic Seamless Pattern Vector Background.jpg',
        'bucegi-mountains-1641852.jpg',
        'cat-and-kittens-1641561.jpg',
        'happy-doggy-1642001.jpg',
        'landscape-waterfall-1641818.jpg',
        'new-dawn-1641926.jpg',
        'river-of-the-world-1642010.jpg',
        'annie-at-home-1641997.jpg',
        'a-puppy-1642002.jpg'
    ]

    activeImage = activeImage + 1 < imgstock.length ? activeImage + 1 : 0;
    
    console.log(activeImage);
    document.getElementById('images').setAttribute(src, `${srcpath}${imgstock[activeImage]}`);
})
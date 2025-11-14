let scroll = document.querySelector("#scroll");
let para = document.querySelectorAll(".para");
function updateCards(){
    para.forEach((cards)=>{
        let center = window.innerWidth / 2;
        let rect = cards.getBoundingClientRect();
        let cardCenter = rect.left + rect.width / 2;
        let distance = Math.abs(center - cardCenter);
        let scale = Math.max(0.8,1 - distance/1000); 
        let opacity = Math.max(0.4,1 - distance/1000);
        cards.style.transform = `scale(${scale})`;
        cards.style.opacity = opacity;
    });
}
updateCards();
scroll.addEventListener("scroll", updateCards);
// let image = document.querySelector("#image");
// let screenW = window.innerWidth;
// let screenH = window.innerHeight;
// image.style.width = screenW;
// image.style.height = screenH;
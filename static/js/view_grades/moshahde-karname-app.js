
var style = document.createElement('style');
style.innerHTML = "@font-face { font-family: 'iranyekan'; src: url('src/4_5940377599334157489.ttf') format('truetype');}";
document.head.appendChild(style);


const togle = document.querySelector('.part1-icon').addEventListener('click' , () => {

    document.querySelector('.part1').classList.toggle('active')

})
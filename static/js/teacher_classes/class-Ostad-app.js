
var style = document.createElement('style');
style.innerHTML = "@font-face { font-family: 'iranyekan'; src: url('src/4_5940377599334157489.ttf') format('truetype');}";
document.head.appendChild(style);


const btn = document.querySelector('.buttonn').addEventListener('click' , ()=>{

    document.querySelector('.section-2').classList.add('active')
    document.querySelector('.form').classList.add('active')

})
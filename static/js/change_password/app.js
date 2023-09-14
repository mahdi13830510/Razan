


// -------------------------------------------------------------------common app--------------------------------------------------------------

var style = document.createElement('style');
style.innerHTML = "@font-face { font-family: 'iranyekan'; src: url('/4_5940377599334157489.ttf') format('truetype');}";
document.head.appendChild(style);


const list = document.querySelectorAll('.list');

for(let i=0 ; i<list.length ; i++)
{
    list[i].addEventListener('click' , () => {

        for(let j=0;j<list.length ; j++)
        {
            if(j==i)
            {
                list[j].className = 'list active'
            }
            else
            {
                list[j].className = 'list'
            }
        }

    })
}


const menu = document.querySelector('.menu-icon').addEventListener('click' , () => {

    document.querySelector('.menu').classList.toggle('active')
    document.querySelector('.main-side').classList.toggle('active')
    if(document.querySelector('.menu').className === 'menu active')
    {
        document.querySelector('.main-side').className = 'main-side active'
    }
    else
    {
        document.querySelector('.main-side').className = 'main-side'
    }
})


const list1 = document.querySelectorAll('.list1');

for(let i=0 ; i<list1.length ; i++)
{
    list1[i].addEventListener('click' , () => {

        for(let j=0;j<list1.length ; j++)
        {
            if(j==i)
            {
                list1[j].className = 'list1 active'
            }
            else
            {
                list1[j].className = 'list1'
            }
        }


    })
}


const li_width = document.querySelectorAll('.menu1 ul li')


for(const e of li_width)
{
    const width = 100 / li_width.length
    e.style.width = `${width}%`
} 
// -------------------------------------------------------------------end of common app-------------------------------------------------------------- 


let request = false;

if(request)
{
    document.querySelector('.down-side').style.filter = 'blur(0px)'
    document.querySelector('.down-side').style.pointerEvents = 'painted'
}
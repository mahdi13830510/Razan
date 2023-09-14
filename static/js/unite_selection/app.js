



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


// فرض می کنم تی ارز را از بک اند می گیرم
// تی ارز یک لیست از آبجکت زیر می باشد 
// let object = {
//     codeDars:1,
//     namDars: "d",
//     namOstad: "ja",
//     codeDars: 2, 
//     zarfiatClass:40,
//     zarfiiatpor: 25 
// }
//--------------------------------------------------


const trs = document.querySelectorAll('.tr');



const inputs = document.querySelectorAll('.input');

inputs.forEach((e)=>{
    e.addEventListener('click' , (e)=>{

        if(e.target.checked)
        {
           t1(e.target.value)
        }
        else
        {
           t2(e.target.value)
        }
    })
})


function t1 (i) 
{

    const tr =document.createElement('tr')

    tr.value = i;

    for(let j=0;j<5;j++)
    {
        const th = document.createElement('th');

        th.innerHTML = trs[i].children[j].textContent;
        tr.appendChild(th);
    }

    document.querySelector('.tabelBody').append(tr);
}

function t2(i)
{
    for(let j=0;j<inputs.length;j++)
    {
        if(document.querySelector('.tabelBody').children[j].value === i)
        {
            document.querySelector('.tabelBody').children[j].remove();
        }
    }
}



function search() {
    
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabelBody");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("th")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }

  }

 


  function sortTable(v) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tabelBody");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 0; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TH")[v.value];
        y = rows[i + 1].getElementsByTagName("TH")[v.value];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }




// sending data to backend 


const info_for_send = {} 


const sendingData = async function () {

    await fetch('url' , {
       method: 'POST',
       body: info_for_send,
       headers: {
         'Content-Type': 'application/json'
       }
     })

}

const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click' ,sendingData)


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

//getting data from backend for myChart

const label1 =[120, 190, 300, 500, 200, 30]
const label2 =[65, 59, 80, 81, 56, 55, 40]



//  گرفتن اطلاعات برای چارت ها 
const fetchForTabels = async () =>{
  
  return  await (await (fetch('url'))).json();
  }



  

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [1,2,3], 
    datasets: [{
      label: 'حضور غیاب',
      data: label1,
      backgroundColor: ['#fff'],
      borderWidth: 0
    }]
  },
  options: {
    responsive: true ,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


const ctx1 = document.getElementById('myChart1');

new Chart(ctx1, {
    type: 'line',
    data:  {
        labels: [1,2,3],
        datasets: [{
          label: 'My First Dataset',
          data: label2,
          fill: false,
          borderColor: '#fff',
          tension: 0.1
        }]
      },
    options: {
      responsive: true ,
    }
  });



  // fetching user info 


  
  const fetchUserInfo = async () =>{
    return await (await fetch('url')).json(); 
  }

  // const userinfo = fetchUserInfo();   // گرفتن اطلاعات کاربر

let userinfo = 
{
  name:'آرمان',
  lastname:'سجادی',
  id:14015361923,
  nimsal:'نیمسال دوم',
  ipaddres:'192.168.1.1'
}

document.getElementById('name').textContent = userinfo.name
document.getElementById('name1').textContent = userinfo.name
document.getElementById('lastname').textContent = userinfo.lastname
document.getElementById('id').textContent = userinfo.id
document.getElementById('nimsal').textContent = userinfo.nimsal
document.getElementById('ipaddres').textContent = userinfo.ipaddres
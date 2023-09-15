


var style = document.createElement('style');
style.innerHTML = "@font-face { font-family: 'iranyekan'; src: url('src/4_5940377599334157489.ttf') format('truetype');}";
document.head.appendChild(style);


function showFileName() {
    var input = document.querySelector('.fileInput');
    var fileName = document.querySelector('.fileName');
    fileName.innerHTML = input.files[0].name;
  }

  function showFileName1() {
    var input = document.querySelector('#fileInput1');
    var fileName = document.querySelector('.fileName1');
    fileName.innerHTML = input.files[0].name;
  }

  function showFileName2() {
    var input = document.querySelector('#fileInput2');
    var fileName = document.querySelector('.fileName2');
    fileName.innerHTML = input.files[0].name;
  }

  function showFileName3() {
    var input = document.querySelector('#fileInput3');
    var fileName = document.querySelector('.fileName3');
    fileName.innerHTML = input.files[0].name;
  }

  function showFileName4() {
    var input = document.querySelector('#fileInput4');
    var fileName = document.querySelector('.fileName4');
    fileName.innerHTML = input.files[0].name;
  }


  // ----------------------------------------------------


  const btn = document.querySelector('.submit-btn');

  const inputs = document.querySelectorAll('.payin form input')

  

//  if(inputs[0].)

  btn.addEventListener('click' , (e) =>
  {
    e.preventDefault();

    let flag = true;

    for(let i=0;i<inputs.length;i++)
    {
      if(inputs[i].value === '')
      flag = false;
    }

    if(flag)
    {
      matching();
      document.querySelector('.form').classList.add('active')
      document.querySelector('.sub-cantainer').classList.add('active')
    }
    else
    {
      document.querySelector('.popOut').classList.add('active')
      setTimeout(() => {
        document.querySelector('.popOut').classList.remove('active')
    }, 7000)
    }
  })

const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');

btn1.addEventListener('click' , ()=>
{
//sendign data to backend
})

btn2.addEventListener('click' , ()=>
{
  document.querySelector('.form').classList.remove('active')
  document.querySelector('.sub-cantainer').classList.remove('active')
})

function matching()
{
  document.getElementById('name').textContent = `${inputs[0].value} ${inputs[1].value}`;
  document.getElementById('Id').textContent = inputs[2].value;
  document.getElementById('fatherName').textContent = inputs[3].value;
  document.getElementById('motherName').textContent = inputs[4].value;
  document.getElementById('futherNum').textContent = inputs[5].value;
  document.getElementById('emerNum').textContent = inputs[6].value;
  document.getElementById('PhonNum').textContent = inputs[7].value;
  document.getElementById('address').textContent = inputs[8].value;
  document.getElementById('futherId').textContent = inputs[9].value;
  document.getElementById('motherId').textContent = inputs[10].value;
  document.getElementById('futherJob').textContent = inputs[11].value;
}


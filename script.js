var clicked = false;
function toggle1(){
  var a = document.getElementById('b1');
  var b = document.getElementById('b2');
  var cost_1 = document.getElementById('cost_1');
  var cost_2 = document.getElementById('cost_2');
  var ym = document.getElementsByClassName('ym')
    a.className = 'b1_2';
    b.className = 'b2_2';
    ym[0].innerHTML = "/month";
    ym[1].innerHTML = "/month";
    cost_1.innerHTML = "$29";
    cost_2.innerHTML = "$49";
}

function toggle2(){
  var a = document.getElementById('b1');
  var b = document.getElementById('b2');
  var cost_1 = document.getElementById('cost_1');
  var cost_2 = document.getElementById('cost_2');
  var ym = document.getElementsByClassName('ym')

    a.className = 'b1_1';
    b.className = 'b2_1';
    ym[0].innerHTML = "/year";
    ym[1].innerHTML = "/year";
    cost_1.innerHTML = "$299";
    cost_2.innerHTML = "$499";
}

function copyText(id) 
{
 var text = document.getElementById(id).innerText;
 var elem = document.createElement("textarea");
 document.body.appendChild(elem);
 elem.value = text;
 elem.select();
 document.execCommand("copy");
 document.body.removeChild(elem);
}

  var inc = 0, inb = 0; 
  function mod() { inb = inc = 0 } function age() { var n = document.getElementById("age_e").value, e = n + " là tuổi clgt???"; if (0 == document.getElementById("age_e").value.length || isNaN(n)) if (0 == document.getElementById("age_e").value.length) document.getElementById("age_a").innerHTML = "Chưa nhập gì hết."; else { switch (inc) { case 0: document.getElementById("age_a").innerHTML = e; break; case 1: document.getElementById("age_a").innerHTML = "Đây là lần thứ 2 rồi nhưng bạn vẫn nhập sai."; break; case 2: document.getElementById("age_a").innerHTML = "Thật ra bạn chỉ bấm cái nút này cho vui thôi phải không?" }inc++ } else 0 == inb ? (document.getElementById("age_a").innerHTML = "Bạn đã " + n + " tuổi rồi.", inc = 0) : document.getElementById("age_a").innerHTML = "Bạn đã nhấn cái nút này " + inb + " lần, tuổi của bạn vẫn là " + n, inb++; if (3 < inc) for (var t = 0; t <= inc; t++)document.getElementById("age_a").innerHTML = " đừng có nhấn nữa".repeat(t); 6 == inc && (document.getElementById("age_a").innerHTML = "nhấn thêm lần nữa xem?"), 7 == inc && (document.getElementById("age_a").innerHTML = "chắc chưa?", document.getElementById("nut_adawdawdawdawdawd").innerHTML = "chắc."), 7 < inc && (window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ") }

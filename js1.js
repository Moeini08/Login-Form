
function btn_login() {
  var user=document.getElementById('username');
  var email=document.getElementById('email');
  var pass=document.getElementById('password');

  if(user.value ==''){
    alert('لطفا نام کاربری را وارد کنید .');
    user.focus();
    user.style.backgroundColor='red';
    return false;
  }

  var email = email.value;
  var pattern = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
  var regexResult = pattern.test(email);
  if (!regexResult) {
    alert("ایمیل وارد شده معتبر نمی باشد");
    email.style.backgroundColor='pink';
    return false;
  }

  if (pass.value.length < 8) {
    alert("پسورد حداقل باید 8 کاراکتر داشته باشد");
    pass.style.backgroundColor='blue';
    return false;
  }

  else
  alert("ثبت نام شما با موفقیت انجام شد :)");
  window.open("SIGN In.html");
  return true;
}



// function btn_login(){ 
//   var username=document.getElementById("username").value; 
//   var email=document.getElementById("email").value; 
//   var password=document.getElementById("password").value; 
   
//   var part1=/[^a-zA-Z""]/; 
//   var part2= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
//   var part3=/^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@/#$%^&]{6,16}$/; 
   
//   if(!part1.test(username) && part2.test(email) && part3.test(password))
//   { 
//   window.open("SIGN IN.html"); 
//   } 
   
//   if(part1.test(username))
//   { 
//   document.getElementById("username").style.borderColor="red"; 
//   document.getElementById("username").style.borderWidth="3px"; 
//   }
//   else{ 
//   document.getElementById("username").style.borderColor="#ced4da"; 
//   document.getElementById("username").style.borderWidth="1px"; 
//   }
// }
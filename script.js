var user=document.getElementById('user Id');
var pwd=document.getElementById('loginPassword');
var usermsg=document.getElementById('loginuseridmsg');
var pwdmsg=document.getElementById('loginpwdmsg');


function validateLoginPage(callback)
{

if(user.value=='admin'&& pwd.value==12345)
{
    usermsg.innerText=" valid username"
    pwdmsg.innerText="password is valid"
    callback();
}
else{
    alert("invalid login credentials")
    
}}

function mainpage()
{
     window.location.href ="mainPage.html"
    //  window.open("/todo.html");
   

}
// GotoTodPage()
// {
//     window.location.href ="http://127.0.0.1:5500/todo.html"
    
// }





    



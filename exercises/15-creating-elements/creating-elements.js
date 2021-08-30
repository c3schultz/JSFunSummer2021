//let clean = DOMPurify.sanitize( dirty , {USE_PROFILES: {html: true}} );
const btn = document.createElement('button');
btn.textContent = "Submit";
document.querySelector('body').appendChild(btn);


const email = document.querySelector('#email');
email.addEventListener("input", event => {
  let userEmail=event.target.value;

  let user = {
  email: 'example@site.com'
  };


  btn.addEventListener("click", event => {
    btn.disabled = 'disabled';
  if (btn.disabled === true){
    event.preventDefault();
    alert("You're all set!");
  } else if(userEmail !== user){
    event.preventDefault();
    alert("You need to enter your e-mail");
  }
});
});



  




  


 

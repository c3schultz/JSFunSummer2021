/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
  // Put your answers in here
  let newRole = document.querySelector('.alert.alert-danger');
  console.log(newRole);
  newRole.setAttribute("role", "alert");

  let changeLink = document.querySelector('[data-newlink]');
  console.log(changeLink);
  changeLink.setAttribute("href", "https://developer.mozilla.org/en-US/docs/Web/JavaScript");
  
  const textChange = document.querySelector('[class="alert alert-success"]');
  console.log(textChange);
  textChange.textContent="I am victorious";

  const newBgColor = document.querySelector('.alert.alert-info');
  console.log(newBgColor);
  newBgColor.style.backgroundColor='red';

  const newTextColor = document.querySelector('[data-textChange]');
  console.log(newTextColor);
  newTextColor.setAttribute('style','color:green');

  const hideObj = document.querySelector('[data-hide]');
  console.log(hideObj);
  hideObj.setAttribute('style', 'display:none');

  const showObj = document.querySelector('[class="mb-0"]');
  console.log(showObj);
  showObj.style.backgroundColor='blue';

  const buttonCondition = document.querySelector('[type="button"]');
  console.log(buttonCondition);
  const btnText = document.querySelector('[class="btn btn-primary ml-1 m4-1"]');
  if (buttonCondition === btnText){
    buttonCondition.textContent="&check blue";
  } else {
    console.log("nope");
  }


  
})();

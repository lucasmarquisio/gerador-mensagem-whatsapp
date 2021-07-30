const phone_number = document.querySelector('#phone_number')
const text_message = document.querySelector('#text_message')
const genered_link = document.querySelector('#genered_link')
const button_copy = document.querySelector('#button_copy')
function getPhoneAndText(){
  genered_link.value = `https://api.whatsapp.com/send?phone=${phone_number.value}&text=${encodeURIComponent(text_message.value)}`
  console.log(phone_number)
}




button_copy.addEventListener('click', ()=>{

  /* Get the text field */
  let copyText = document.getElementById("genered_link");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
  /* Copy the text inside the text field */
  document.execCommand("copy");
  
  /* Alert the copied text */
  

  

})  
let submitBtn = document.getElementById('submitBtn')
submitBtn.addEventListener('click', userSubmitedForm)
let submitTextHolder = document.getElementById('submitTextHolder')


let formEl = document.getElementById('contactMe')

function userSubmitedForm(e){
    e.preventDefault()
    console.log('remove')
  formEl.remove()
  let submitResponse = document.createElement('h1')
  submitResponse.innerText = "Thank you for your Submission I look forward to working with you! Feel free to connect with my on Facebook or Linkedin"
  submitResponse.style.marginTop = "20px"
  submitResponse.style.fontFamily = "var(--bs-body-font-family"
  submitTextHolder.appendChild(submitResponse)

}
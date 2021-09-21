let submitBtn = document.getElementById('submitBtn')
submitBtn.addEventListener('click', userSubmitedForm)
let formContainer = document.getElementById('formContainer')


let formEl = document.getElementById('contactMe')

function userSubmitedForm(e){
    e.preventDefault()
    console.log('remove')
  formEl.remove()
  let submitResponse = document.createElement('h1')
  submitResponse.innerText = "Thank you for your Submission I look forward to working with you!"
  formContainer.appendChild(submitResponse)

}
const btn = document.querySelector('button')
const inputs = document.querySelector('form')
btn.addEventListener('click', () => {

    const name = (inputs.elements["name"].value).trim()
    const email = (inputs.elements["email"].value).trim()
    const msg = (inputs.elements["message"].value.trim())
    const Subject= (inputs.elements["subject"].value).trim()
    if (!name.length > 0 || !email.length > 0 || !msg.length > 0 || !subject.length > 0) {
        alert("All fields are mandatory")
        return
    }
    Email.send({
       // Host: ".............",
        //Username: "...............",
        //Password: "..............",
        SecureToken :"cbc21437-379c-473a-8ab1-32588d40aadc",
        To: "kozhindumba@gmail.com",
        From: inputs.elements["email"].value,
        Subject: "Contact Us Query By the Customer",
        Body: msg + "<br>" + name + "<br>" + subject
    }).then(msg => alert("The email successfully sent"))
})

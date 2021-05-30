let submitButton = document.getElementById('submitButton')

function sendMail(params) {
    var tempParams =  {
        from_name: document.getElementById('fromName').value,
        to_name: document.getElementById('toName').value,
        message: document.getElementById('msg').value,
    };

    emailjs.send('gmail' ,'template_a80ilkm' , tempParams )
    .then(function (res) {
        console.log("success" , res.status) , 
        console.log('failed...' , error)
    })
}

// submitButton.addEventListener('click' , sendMail)
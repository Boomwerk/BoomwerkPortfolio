let submit = document.querySelector("#submit");
let response = document.querySelector(".response");


submit.addEventListener("click", function(e){
    e.preventDefault();

    grecaptcha.ready(function() {
        grecaptcha.execute('6LfCHzAeAAAAAIl4ZuaxBBy88krR3MKbRkT3R3Pe', {action: 'submit'}).then(function(token) {
            let name = document.querySelector("#name");
            let email = document.querySelector("#email");
            let text = document.querySelector("#text");

            if( (name.value != "" && name.value.length != 0 && name.value.length < 30) && (email.value != "" && email.value.length != 0 && email.value.length < 100) && (text.value != "" && text.value.length != 0 && text.value.length < 255)){
                

                let json =   {
                    "token" : token,
                    "name" : name.value,
                    "email" : email.value,
                    "text" : text.value,
                }

                fetch("https://boomwerk.alwaysdata.net/test/php/mail.php",{
                    method:"POST",
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify(json)
                    
                }).then( (res) =>  {

                    console.log(res);
                    return res.json();
                    
                    
                }).then((data) =>  {
                    
                    if(data.error){

                        console.log(data.error);
                        response.style.background = "#c90101";
                        response.innerText = data.error;

                    }else if(data.success){

                        name.value = "";
                        email.value = "";
                        text.value = "";

                        response.style.background = "#3EDC2E";
                        response.innerText = data.success;
                        
                    }
                }).catch( (e) => {
                    console.log(e);
                })


                

                
            }else{
                response.style.background = "#c90101";
                response.innerText = "Erreur : veuillez remplir les champs ! ";
            }
        })
    })
})
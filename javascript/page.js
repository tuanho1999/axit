$(function(){
    var $regisForm = $("#trialForm");
    if($regisForm.length){
        $regisForm.validate({
            rules:{
                username:{
                    required: true
                },
                email:{
                    required: true
                },
                password:{
                    required: true
                },
            },
                messages:{
                    username:{
                        required: 'Please fill username!'
                    },
                    email:{
                        required:"Please fill email!",
                        email:'Please enter valid email!'
                    },
                    password:{
                        required:"Please fill password!"
                    }   
                },
              

        })
    }
});

$("#startBtn").click(function(){
    var Obj ={
        nameinfo : $('#usernames').val(),
        emailinfo : $('#email').val(),
        passwordinfo : $('#password').val()
    }
localStorage.setItem("ClientInfor", JSON.stringify(Obj))
});

$("#sendBtn").click(function(){
    var Objs ={
        name : $('#contactInputName').val(),
        email : $('#contactInputEmail').val(),
        subject : $('#contactInputSubject').val(),
        message : $('#contactInputMess').val()
    }
localStorage.setItem("ClientMess", JSON.stringify(Objs))
});

$(function(){
    var $messForm = $("#messageForm");
    if($messForm.length){
        $messForm.validate({
            rules:{
                name:{
                    required: true
                },
                emails:{
                    required: true
                },
                subject:{
                    required: true
                },
                mess:{
                    required: true
                }
            },
                messages:{
                    name:{
                        required: 'Please fill username!'
                    },
                    emails:{
                        required:"Please fill email!",
                        email:'Please enter valid email!'
                    },
                    subject:{
                        required:"Please fill subject!"
                    },
                    mess:{
                        required:"Please fill message!"
                    }    
                },
              

        })
    }
});

$("#downBtn").click(function(){
    alert("Sign up for your trial!")
});

$("#downloadBtn").click(function(){
    alert("Sign up for your trial!")
});

$("#downLoad").click(function(){
    alert("Sign up for your trial!")
});

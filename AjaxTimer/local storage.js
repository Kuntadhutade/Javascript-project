$(document).ready(function(){
   $("#showbtn").on("click",function(){                                 //add class swing-top-fwd
    $("#text").show().addClass("swing-top-fwd");
   });
})


$("#hidebtn").on("click",function(){
    $("#text").hide();
   });



$("#showhidebtn").on("click",function(){
    $("#text").toggle().css("color","red");
 });


 $("#showhidebtn").on("click",function(){                                  //remove class  swing-top-fwd
    $("#text").toggle().removeClass("swing-top-fwd");
 });



               //  local storage and session storage


$(document).ready(function(){
   var user = localStorage.getItem("username");
   if(user){
      $("#message").html("<span style='color:red'>welcome</span>"+user);
      console.log("#text").html()
   }
   
   $("#hidebtn").on("click",function(){
      $("#text").hide();
      localStorage.removeClass("username");
   })


   $("#showbtn").on("click",function(){
      $("#text").show().addClass("swing-top-fwd");
      localStorage.setItem("username","abc@gmail.com");
      sessionStorage.setItem("username","abc@gmail.com");
   })



   $("#showhidebtn").on("click",function(){
      $("#text").toggle().removeClass("swing-top-fwd");
   })


});

// var text ="welcome user"
// var spech =new SpeechSynthesisUtterance(text);
// window.speechSynthesis.speak(spech)




                    //setTimeout()


setTimeout(() => {
getAlert();
}, 5000);
                 
 function getAlert() {
      alert("hello called");
}
                 





                     // setInterval


setInterval(()=>{
   var today =new Date();
   document.getElementById("message").innerHTML = today;
},1000)

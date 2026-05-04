function Submit(){
    console.log("Submit Button Clicked");

    const fn = document.getElementById("fullName").value;
    console.log(fn);


    document.getElementById("myData").innerText =fn;
     document.getElementById("fullName").value ="";


       document.getElementById("myData2").innerText =fn;
     document.getElementById("email").value ="";

        document.getElementById("myData3").innerText =fn;
     document.getElementById("password").value ="";

        document.getElementById("myData4").innerText =fn;
     document.getElementById("city").value ="";

        document.getElementById("myData5").innerText =fn;
     document.getElementById("feedback").value ="";




    document.getElementById("dataCard").classList.add("divShow");
     document.getElementById("dataCard").classList.remove("divHide");
    
    
}
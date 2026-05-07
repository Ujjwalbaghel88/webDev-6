function Submit(){
   //  console.log("Submit Button Clicked");

    const fn = document.getElementById("fullName").value;
    console.log(fn);


    document.getElementById("myData").innerText =fn;
     document.getElementById("fullName").value ="";






// 2nd
     
    const pn = document.getElementById("city").value;
    console.log(pn);

       document.getElementById("myData2").innerText =pn;
     document.getElementById("city").value =""; 

   //   3rd 
     
    const gn = document.getElementById("email").value;
    console.log(gn);

        document.getElementById("myData3").innerText =gn;
     document.getElementById("email").value ="";

   //   4th 

   
    const hn = document.getElementById("password").value;
    console.log(hn);
        document.getElementById("myData4").innerText =hn;
     document.getElementById("password").value ="";

   //   5th 

   
    const tn = document.getElementById("feedback").value;
    console.log(tn);
        document.getElementById("myData5").innerText =tn;
     document.getElementById("feedback").value ="";




    document.getElementById("dataCard").classList.add("divShow");
     document.getElementById("dataCard").classList.remove("divHide");
    
    
}
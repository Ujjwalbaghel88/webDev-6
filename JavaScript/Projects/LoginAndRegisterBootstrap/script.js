function Login(){
    const em =document.getElementById("loginEmail").value;
    console.log(em);
    
    document.getElementById("loginEmail").value="";
  
    

    const ps=document.getElementById("loginPassword").value;
      console.log(ps);
    document.getElementById("loginPassword").value="";


}

function Register(){
    const ns = document.getElementById("registerName").value;
    console.log(ns);

    const em = document.getElementById("registerEmail").value;
    console.log(em,);

    const ps = document.getElementById("registerPassword").value;
    console.log(ps);
    
    const ps1 = document.getElementById("registerConfirmPassword").value;
    console.log(ps1);
    
    
    document.getElementById("registerName").value="";
    document.getElementById("registerEmail").value="";
    document.getElementById("registerPassword").value="";
    document.getElementById("registerConfirmPassword").value="";
    
}
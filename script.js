document.addEventListener("DOMContentLoaded",()=>
{
    const from=document.querySelector(".log_in");
    from.addEventListener("submit",async (e) =>{
        e.preventDefault();

        const username = document.getElementById("User_name").value;
        const password = document.getElementById("pass_word").value;

        try{
            //fetch from json
            const response=await fetch("data.json");
            const data=await response.json();

            //credentials
            if (username==data.username && password==data.password){
                window.location.href="../img/1p.html";//redirect if match
            }else{
                alert("Invalid Username or password !");
            }   
        }
        catch(error){
            console.error("Error loading data",error);
        }
    });
}); 
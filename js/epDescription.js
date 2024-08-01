const buttonOpenEPDescription = document.getElementById("openEPD")
const buttonCloseEPDescription = document.getElementById("closeEPD")

buttonCloseEPDescription.addEventListener("click", function(){
    buttonOpenEPDescription.classList.remove("open");
    buttonOpenEPDescription.classList.add("closed");

    buttonCloseEPDescription.classList.remove("open");
    buttonCloseEPDescription.classList.add("closed");
    
    
    document.getElementById("eu-des-1").classList.add("closed");
    document.getElementById("eu-des-2").classList.add("closed");
})
buttonOpenEPDescription.addEventListener("click", function(){
    buttonOpenEPDescription.classList.remove("closed");
    buttonOpenEPDescription.classList.add("open");

    buttonCloseEPDescription.classList.remove("closed");
    buttonCloseEPDescription.classList.add("open");


    document.getElementById("eu-des-1").classList.remove("closed");
    document.getElementById("eu-des-2").classList.remove("closed");
})
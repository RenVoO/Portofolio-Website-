const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");
    
    burger.addEventListener("click", () => {
        navLists.classList.toogle("nav-active");
    });
};



navSlide();


window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")){
        form.reset;
    }


};
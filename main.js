const d = document, $menu = d.getElementById("button-menu"), $nav = d.querySelector(".nav"), $close = d.querySelector(".close-menu")
$text = d.querySelector(".cont-text-about"), $about = d.querySelector(".content-about"),
$service = d.querySelector(".content-services-main"), $contact = d.querySelector(".content-contact");
$menu.addEventListener("click", (e) =>{
    $nav.classList.toggle("menu-act")
})

$close.addEventListener("click", (e) => {
    $nav.classList.remove("menu-act")
})

const Change = (enters, observador) => {

    enters.forEach(element => {
        console.log(enters);
        if(element.isIntersecting){
            element.target.classList.add("visible")
        }else{
            element.target.classList.remove("visible")
        }

        
    });

}

const observador = new IntersectionObserver(Change, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5,   
});



observador.observe($about)
observador.observe($service)
observador.observe($contact)
const d = document;

export default function openMenu(btn, check){
    
    const $btnMenu = d.getElementById(btn),
          $check = d.getElementById(check),
          $nav = d.querySelector("nav");

    d.addEventListener("change", (e)=>{
            if(e.target === $btnMenu || e.target === $check){
                if($nav.style.transform !== "translateX(0%)"){
                    $nav.style.transform = "translateX(0%)";
                }
                else if($nav.style.transform === "translateX(0%)"){
                    $nav.style.transform = "translateX(-100%)";
                }
            }
    });

    //Media Query
    
    const mq = matchMedia("(max-width:768px)");
    const changeSize = (ml)=>{
        ml.matches? $nav.style.transform = "translateX(-100%)": $nav.style.transform = "translateX(0%)";
    }
    mq.addListener(changeSize);
}
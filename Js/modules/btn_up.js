const d = document,
      w = window;

export default function scrollUp(btn){
    const $btn = d.querySelector(btn);
    
    w.addEventListener("scroll", (e)=>{
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
        if(scrollTop > 300){
            $btn.classList.remove("hidden");
        }else{
            $btn.classList.add("hidden");
        }
    });

    d.addEventListener("click", (e)=>{
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior: "smooth",
                top: 0
            });
        }
    });
}
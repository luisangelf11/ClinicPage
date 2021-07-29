const d = document,
      ls = localStorage;

export default function darkTheme(btn, classDark){
    const $btnTheme = d.querySelector(btn),
          $selectors = d.querySelectorAll("[data-dark]");
    let sun = "☀️",
        moon = "🌙";  

    const darkMode =()=>{
        $selectors.forEach(el=> el.classList.add(classDark));
        $btnTheme.textContent = sun;
        ls.setItem("theme", "dark");
    }
    
    const lightMode=()=>{
        $selectors.forEach(el=> el.classList.remove(classDark));
        $btnTheme.textContent = moon;
        ls.setItem("theme", "light");
    }
    
    d.addEventListener("click", (e)=>{
        if(e.target.matches(btn)){
            if($btnTheme.textContent === moon){
                darkMode();
            }else if($btnTheme.textContent === sun){
                lightMode();
            }
        }
    });

    d.addEventListener("DOMContentLoaded", (e)=>{
        if(ls.getItem("theme") === null) ls.setItem("theme", "light");
        if(ls.getItem("theme") === "dark") darkMode();
        if(ls.getItem("theme") === "light") lightMode();
    });
}
const d = document,
      w = window;

export default function callWhatsapp(id){
    const $btn = d.getElementById(id);
    d.addEventListener("click", (e)=>{
        if(e.target === $btn){
            w.open("https://api.whatsapp.com/send?phone=8292693768");
        }
    });
}
var url = "https://github.com/Erivelon/Prova-2.git"
var icon = document.querySelector(`#icon-ea`)


function openInNewTab(url){
    if(confirm('Deseja ir a página do projeto?')) {
        
     const win = window.open(url, `_blank`)
    win.focus()   

      }

}

icon.addEventListener(`click`, ()=>{
    openInNewTab(url)


})














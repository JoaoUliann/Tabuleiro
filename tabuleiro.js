let peao = document.getElementById("peao"); 

function movePeca(){
    peao.style.transform = "translateY(-185px)"
}

peao.addEventListener("click",movePeca);
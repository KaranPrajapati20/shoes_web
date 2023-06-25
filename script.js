let text = document.querySelector(".sec-text");
const textLoad = () =>{
    setTimeout(() => {
        text.textContent="Confidently";
    }, 0);

    setTimeout(() => {
        text.textContent="Fearless";
    }, 4000);

    setTimeout(() => {
        text.textContent="Comfordenly";
    }, 8000);
}


textLoad();
setInterval(textLoad, 12000);
let inp = document.querySelector('input')
let label = document.querySelector('label')

inp.onfocus = () => {
    inp.style.border = "5px solid lime"
}

inp.onblur = () => {
    if(+inp.value){
        inp.style.border = "5px solid red"
        label.style.color = "red"
        label.innerHTML = "Не пиши цифры"
    }else{
        label.style.color = "lime"
    }
}
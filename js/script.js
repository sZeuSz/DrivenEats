let eat_value;
let eat_name;
let drink_value;

function calc(){
    eat_value = document.querySelector('input[name="prato"]:checked') === null;
    drink_value = document.querySelector('input[name="bebida"]:checked') === null;
    dessert_value = document.querySelector('input[name="sobremesa"]:checked') === null;

    if(!eat_value & !drink_value & !dessert_value){
        let text = document.querySelector(".texto");
        text.innerHTML = "Fechar pedido";
        text.style.backgroundColor = "#32B72F";
        eat_value = document.querySelector('input[name="prato"]:checked').value;
        drink_value = document.querySelector('input[name="bebida"]:checked').value;
        dessert_value = document.querySelector('input[name="sobremesa"]:checked').value;

        return 1;

    }
    else{

        return null;
    }
}

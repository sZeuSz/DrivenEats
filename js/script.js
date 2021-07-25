let eat_value;
let eat_name;
let drink_value;
let drink_name;
let dessert_value;
let dessert_name;
let total;

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
function fazerPedido(){

    if(calc() !== null){
        const transparecer = document.querySelector(".transparente");
        transparecer.classList.add("trans");
        const mostrar_confirmacao = document.querySelector(".confirmacao-pedido");
        mostrar_confirmacao.classList.remove("su-miu");
        
        eat_name = document.querySelector(".radio:checked ~ .prato p")
        document.querySelector(".nome-preco-um").innerHTML = eat_name.innerHTML + "\n<p>" + eat_value.toString().replace(".", ",") + "</p>";
        drink_name = document.querySelector(".radio:checked ~ .bebida p")
        document.querySelector(".nome-preco-dois").innerHTML = drink_name.innerHTML + "\n<p>" + drink_value.toString().replace(".", ",") + "</p>";
        dessert_name = document.querySelector(".radio:checked ~ .sobremesa p")
        document.querySelector(".nome-preco-tres").innerHTML = dessert_name.innerHTML + "\n<p>" + dessert_value.toString().replace(".", ",") + "</p>";

        // conversão
        eat_value = Number(eat_value);
        drink_value = Number(drink_value);
        dessert_value = Number(dessert_value);
        total = (eat_value + drink_value + dessert_value).toFixed(2);

        document.querySelector(".preco-total").innerHTML = "<p>TOTAL</p>" + "<p>" + total.toString().replace(".", ",") + "</p>"
    }
    
}

function encaminhar(){
    let nome = prompt("Insira o seu nome:");
    let endereco = prompt("Insira seu endereço:");
    let mensagem_padrão = "Olá, gostaria de fazer o pedido:\n- Prato: " + eat_name.innerHTML +"\n- Bebida: " + drink_name.innerHTML + "\n- Sobremesa: " + dessert_name.innerHTML + "\nTotal: R$ " + total + "\n\nNome: " + nome +"\nEndereço: " + endereco;

    window.location.href = "https://wa.me/5592994484328?text=" + encodeURIComponent(mensagem_padrão);
}

function cancelar(){
    const mostrar_confirmacao = document.querySelector(".confirmacao-pedido");
    mostrar_confirmacao.classList.toggle("su-miu");

    const transparecer = document.querySelector(".transparente");
    transparecer.classList.toggle("trans");
}
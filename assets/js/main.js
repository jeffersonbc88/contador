document.addEventListener('selectstart', cancelarSelecaoTexto);
document.addEventListener('mousedown', cancelarSelecaoTexto);

function cancelarSelecaoTexto(event) {
    const excecoes = ['SELECT', 'OPTION'];
    if (!excecoes.includes(event.target.tagName)) {
        event.preventDefault();
    }
}

function adicionaUm() {
    const contador = document.querySelector(".numero");
    const valor = parseInt(contador.innerHTML);
    const novoValor = valor + 1;
    contador.innerHTML = novoValor;
}

function removeUm() {
    const contador = document.querySelector(".numero");
    const valor = parseInt(contador.innerHTML);

    if (valor >= 1) {
        const novoValor = valor - 1;
        contador.innerHTML = novoValor;
    };
}

function adicionaCinco() {
    const contador = document.querySelector(".numero");
    const valor = parseInt(contador.innerHTML);
    const novoValor = valor + 5;
    contador.innerHTML = novoValor;
}

function zera() {
    const contador = document.querySelector(".numero");
    const valor = parseInt(contador.innerHTML);
    if (valor === 0) return; 

    const resposta = confirm("Este comando resetará o contador. Deseja prosseguir?");

    if (resposta) {
        const contador = document.querySelector(".numero");
        contador.innerHTML = 0;
    }
}

document.addEventListener('click', e => {
    if (e.target.classList.contains("add-um")) {
        return adicionaUm();
    }
    if (e.target.classList.contains("remove-um")) {
        return removeUm();
    }
    if (e.target.classList.contains("add-cinco")) {
        return adicionaCinco();
    }
    if (e.target.classList.contains("reseta")) {
        return zera();
    }
})

document.addEventListener("keydown", e => {
    if (e.code === "Space" || e.code === "NumpadEnter" || e.code === "NumpadAdd") {
        return adicionaUm();
    }
    if (e.code === "NumpadSubtract") {
        return removeUm();
    }
    if (e.code === "NumpadMultiply") {
        return adicionaCinco();
    }
    if (e.code === "Backspace") {
        return zera();
    }
})
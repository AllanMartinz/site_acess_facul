// Seleção dos elementos
const increaseFontBtn = document.getElementById("increase-font");
const decreaseFontBtn = document.getElementById("decrease-font");
const toggleContrastBtn = document.getElementById("toggle-contrast");
const contrastImg = document.getElementById("contrast-img");
const textIncreaseImg = document.getElementById("text-increase-img");
const textDecreaseImg = document.getElementById("text-decrease-img");

let fontSize = 16; // Tamanho inicial da fonte
const maxFontSize = 24; // Limite máximo
const minFontSize = 12; // Limite mínimo

// Função para aumentar o tamanho da fonte
increaseFontBtn.addEventListener("click", () => {
    if (fontSize < maxFontSize) {
        fontSize++;
        document.body.style.fontSize = `${fontSize}px`;
    }
});

// Função para diminuir o tamanho da fonte
decreaseFontBtn.addEventListener("click", () => {
    if (fontSize > minFontSize) {
        fontSize--;
        document.body.style.fontSize = `${fontSize}px`;
    }
});

// Função para alternar o modo de alto contraste
toggleContrastBtn.addEventListener("click", () => {
    document.body.classList.toggle("high-contrast");
});

// Funções para os atalhos no aside
contrastImg.addEventListener("click", () => {
    document.body.classList.toggle("high-contrast");
});

textIncreaseImg.addEventListener("click", () => {
    if (fontSize < maxFontSize) {
        fontSize++;
        document.body.style.fontSize = `${fontSize}px`;
    }
});

textDecreaseImg.addEventListener("click", () => {
    if (fontSize > minFontSize) {
        fontSize--;
        document.body.style.fontSize = `${fontSize}px`;
    }
});


// ------------------------------------------------------------------------
/*
document.addEventListener("keydown", (event) => {
    // Verifica se a tecla Alt foi pressionada junto com outra tecla
    if (event.altKey) {
        switch (event.key) {
            case "1": // Alt + 1
                // Rola para o início da página
                window.scrollTo({ top: 0, behavior: "smooth" });
                break;

            case "2": // Alt + 2
                // Rola para a seção de acessibilidade
                const acessibilidadeSection = document.getElementById("acessibilidade");
                if (acessibilidadeSection) {
                    acessibilidadeSection.scrollIntoView({ behavior: "smooth" });
                }
                break;

            case "3": // Alt + 3
                // Rola para a seção de cadastro
                const cadastroSection = document.getElementById("cadastro");
                if (cadastroSection) {
                    cadastroSection.scrollIntoView({ behavior: "smooth" });
                }
                break;

            default:
                // Caso a tecla pressionada não seja 1, 2 ou 3, não faz nada.
                break;
        }
    }
});
*/

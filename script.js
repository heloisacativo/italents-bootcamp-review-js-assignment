import { backButton } from "./backButton/backButton.js";

document.addEventListener('DOMContentLoaded', () => {
    
    const clickInButtonBack = document.getElementById('buttonBack');
    // aqui criei uma classe chamada Modal, imagine que seja uma receita para criar objetos (os madals)
    class Modal { 
        constructor(overlaySelector, modalSelector) { // dentro dessa receita, tem um constructor (construtor), que é como se fosse o "passo 1" da receita. Ele precisa de dois ingredientes: o seletor do overlay (uma camada cinza transparente que cobre a tela) e o seletor do próprio modal (a janela que aparece)
            this.overlay = document.querySelector(overlaySelector);
            this.modal = document.querySelector(modalSelector);
        }

        show() { // faz com que o modal apareça e o overlay também. Ele basicamente coloca o modal visível
            this.overlay.classList.add('show');
            this.modal.style.display = 'block'; e
        }

        hide() { // esconde o modal, removendo ele da tela e fazendo com que o overlay suma também
            this.overlay.classList.remove('show');
            this.modal.style.display = 'none';
        }
    }


    class ModalManager { // é como um chefe que gerencia vários modais. Ele guarda uma lista de todos os modais que criei (como o modalNormal e o modalExpresso)
        constructor(overlaySelector) {
            this.overlay = document.querySelector(overlaySelector);
            this.modals = [];
        }

        addModal(modal) {
            this.modals.push(modal);
        }

        hideAll() { // Ele tem um método chamado hideAll(), que faz o trabalho de fechar todos os modais que estão abertos. Isso é útil quando queremos ter certeza de que só um modal estará visível de cada vez, até usei posteriormente no button de Voltar
            this.modals.forEach(modal => modal.hide());
        }
    }

    const clickInOptionCup = document.getElementById('optionCup');
    const clickInOptionNormal = document.getElementById('optionCoffeeNormal');
    const clickInOptionContinue = document.getElementById('buttonContinue');
    const clickInOptionContinueCoffeeCup = document.getElementById('buttonContinueCoffeeCup');
    
    const overlaySelector = '#overlay'; // seletor do overlay

    // aqui onde crio os modals
    const modalNormal = new Modal(overlaySelector, '#modalHidden');
    const modalExpresso = new Modal(overlaySelector, '#modalHiddenCoffeeExpresso'); 
    const modalDescriptionCoffee = new Modal(overlaySelector, '#descriptionContainer');
    const modalDescriptionCoffeeCup = new Modal(overlaySelector, '#descriptionContainerCoffeeCup');
    
    // esses modais são então adicionados ao ModalManager
    const modalManager = new ModalManager(overlaySelector);
    modalManager.addModal(modalNormal);
    modalManager.addModal(modalExpresso);
    modalManager.addModal(modalDescriptionCoffee);
    modalManager.addModal(modalDescriptionCoffeeCup);

    // Quando o usuário clica no botão para escolher uma xícara de café (clickInOptionCup), o código diz: "Esconda todos os modais e mostre o modal do café expresso".
    clickInOptionCup.addEventListener('click', () => {
        modalManager.hideAll(); // Esconde todos os modais
        modalExpresso.show();   // Exibe o modal de café expresso
    });

    // Quando o usuário clica no botão para café normal (clickInOptionNormal), o código faz a mesma coisa: "Esconda todos os modais e mostre o modal do café normal".
    clickInOptionNormal.addEventListener('click', () => {
        modalManager.hideAll(); // Esconde todos os modais
        modalNormal.show();     // Exibe o modal de café normal
    });

    clickInOptionContinue.addEventListener('click', () => {
        modalManager.hideAll();
        modalDescriptionCoffee.show();
    })

    clickInOptionContinueCoffeeCup.addEventListener('click', () => {
        modalManager.hideAll();
        modalDescriptionCoffeeCup.show();
    })

    clickInButtonBack.addEventListener('click', () => {
        backButton(modalManager);
    })

    
    // Se o usuário clicar no overlay (a camada cinza transparente), o código esconde todos os modais. É como se o usuário estivesse dizendo "feche tudo e me deixe ver a página normalmente".
    document.querySelector(overlaySelector).addEventListener('click', () => {
        modalManager.hideAll();
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const clickInContinue = document.getElementById('buttonContinue');
    const clickInOptionContinueCoffeeCup = document.getElementById('buttonContinueCoffeeCup');

    const nameInput = document.getElementById('idName');
    const optionCoffeeIced = document.getElementById('coffeeIced')
    const optionCoffeeSnack = document.getElementById('coffeeSnack')
    const optionCoffeeViena = document.getElementById('coffeeViena'); 
    const optionAddonVanilla = document.getElementById('vanilla')
    const optionAddonNutmeg = document.getElementById('nutmeg')
    const optionAddonCinnamon = document.getElementById('cinnamon');

    const optionSizeSmall = document.getElementById('small');
    const optionSizeMedium = document.getElementById('medium');
    const optionSizeLarge = document.getElementById('large');
    const optionIcedMocha = document.getElementById('icedMocha');
    const optionNutmeg = document.getElementById('nutmegCup');
    const optionCinnamon = document.getElementById('cinnamonCup');

    const nameAdd = document.getElementById('nameChoose');

    const optionCoffeeAdd = document.getElementById('typeChoose');
    const optionAddonAdd = document.getElementById('addonChoose');

    const optionSizeAdd = document.getElementById('sizeChoose');
    const optionTypeChoose = document.getElementById('typeChoose');



    clickInContinue.addEventListener('click', (event) => {
        event.preventDefault();

        // let selectedCoffee;
        // if (optionCoffeeIced.checked) {
        //     selectedCoffee = optionCoffeeIced.value;
        // } else if (optionCoffeeSnack.checked) {
        //     selectedCoffee = optionCoffeeSnack.value;
        // } else if (optionCoffeeViena.checked) {
        //     selectedCoffee = optionCoffeeViena.value;
        // }

        let selectedCoffee = optionCoffeeIced.checked ? optionCoffeeIced.value :
                     optionCoffeeSnack.checked ? optionCoffeeSnack.value :
                     optionCoffeeViena.checked ? optionCoffeeViena.value :
                     null; // Valor padrão se nenhum estiver selecionado

        let selectedAddon = optionAddonVanilla.checked ? optionAddonVanilla.value :
                    optionAddonNutmeg.checked ? optionAddonNutmeg.value :
                    optionAddonCinnamon.checked ? optionAddonCinnamon.value :
                    null; // Valor padrão se nenhum estiver selecionado

        // let selectedAddon;
        // if (optionAddonVanilla.checked) {
        //     selectedAddon = optionAddonVanilla.value;
        // } else if (optionAddonNutmeg.checked) {
        //     selectedAddon = optionAddonNutmeg.value;
        // } else if (optionAddonCinnamon.checked) {
        //     selectedAddon = optionAddonCinnamon.value;
        // }


        nameAdd.textContent = nameInput.value;
        optionCoffeeAdd.textContent = selectedCoffee || "Nenhum café selecionado"; 
        optionAddonAdd.textContent = selectedAddon || "Nenhum complemento selecionado";
        
        })

    clickInOptionContinueCoffeeCup.addEventListener('click', (event) => {
        event.preventDefault();

        let selectedSizeCoffee = optionSizeSmall.checked ? optionSizeSmall.value :
                optionSizeMedium.checked ? optionSizeMedium.value :
                optionSizeLarge.checked ? optionSizeLarge.value :
                null;

        let selectedTypeCoffee = optionIcedMocha.checked ? optionIcedMocha.value :
        optionNutmeg.checked ? optionNutmeg.value :
        optionCinnamon.checked ? optionCinnamon.value :
        null;

        nameAdd.textContent = nameInput.value;
        optionSizeAdd.textContent = selectedSizeCoffee || "Nenhum tamanho selecionado";
        optionTypeChoose.textContent = selectedTypeCoffee || "Nenhum tipo selecionado";
 

    })
})



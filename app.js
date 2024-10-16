function updateMilkMix() {
    const slider = document.getElementById('milk-slider');
    const cowMilkPercentage = document.getElementById('cow-milk-percentage');
    const plantMilkPercentage = document.getElementById('plant-milk-percentage');
    const cupImage = document.getElementById('cup-image');

    let cowMilk = slider.value;
    let plantMilk = 100 - cowMilk;

    cowMilkPercentage.textContent = cowMilk + "%";
    plantMilkPercentage.textContent = plantMilk + "%";

    // Update the cup image or appearance based on milk mix
    if (cowMilk > 75) {
        cupImage.src = "cup-cow.png";
    } else if (plantMilk > 75) {
        cupImage.src = "cup-plant.png";
    } else {
        cupImage.src = "cup-neutral.png";
    }
}

document.getElementById('add-to-order').addEventListener('click', function () {
    const cowMilk = document.getElementById('cow-milk-percentage').textContent;
    const plantMilk = document.getElementById('plant-milk-percentage').textContent;

    const orderItem = document.createElement('li');
    orderItem.textContent = `Kaffee: ${cowMilk} Kuhmilch, ${plantMilk} Pflanzenmilch`;
    document.getElementById('order-list').appendChild(orderItem);
});

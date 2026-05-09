const basePoint = 70;
let baseScore;

fetch("./costs/charms.json")
.then(response => response.json())
.then(data => {
    baseScore = data;

    console.log(baseScore);
    console.log(calculateCosts(0, 3))
    
})
.catch(error => console.log(error
));


function calculateCosts(from, to) {
    let i = from + 1;
    let totalCosts = 0
    while (i <= to){
        totalCosts += baseScore.cost["lvl"+i].guide;
        i++;
    }
    return totalCosts;
}


const subItems = document.querySelectorAll(".sub-item");

subItems.forEach(item => {

    const img = item.querySelector("img");
    const select = item.querySelector("select");

    // Create options ONCE
    for(let i = 1; i <= 11; i++) {

        const option = document.createElement("option");

        option.value = i;
        option.textContent = i;

        select.appendChild(option);
    }

    // Toggle dropdown
    img.addEventListener("click", () => {

        select.style.display = "inline-block";

        select.showPicker();

    });

    select.addEventListener("change", () => {

        const level = select.value;

        img.src = `../assets/charms/lancer${level}.jpg`;

        select.style.display = "none";

    });

});


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


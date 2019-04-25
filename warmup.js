const singSong = function (n) {
    let bottlesC = n
    for (i = 0; i <= n; i++) {
        if (i >= 2) {
            console.log(bottlesC + " bottles of coke on the wall, "
                + bottlesC + " bottles of coke. Take one down, pass it around, "
                + (bottlesC - 1) + " bottles of coke on the wall.");
            bottlesC -= 1
        } if (bottlesC === 1) {
            console.log(bottlesC + " bottles of coke on the wall, "
                + bottlesC + " bottles of coke. Take one down, pass it around, "
                + "no more bottles of coke on the wall.");
            bottlesC -= 1
        } if (bottlesC === 0) {
            bottlesC = n
            console.log("No more bottles of coke on the wall, "
                + "no more bottles of coke. Take one down, pass it around, "
                + bottlesC + " bottles of coke on the wall.");
        }
    }
}
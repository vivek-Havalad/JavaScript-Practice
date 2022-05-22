function getChange(amount) {
    var denominations = [1, 2, 5, 10, 20, 50, 100]; // cents
    var result = [];
    while (amount > 0) {
        var coin = denominations.pop(); // Get next greatest coin
        var count = Math.floor(amount/coin); // See how many times I need that coin
        amount -= count * coin; // Reduce the amount with that number of coins
        if (count) result.push([coin, count]); // Store count & coin
    }
    return result;
}
console.log(getChange(4));

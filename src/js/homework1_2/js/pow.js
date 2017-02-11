function myPow(num, power) {
    var result = num;

    if (power == 0) {
        result = 1;
    }

    for (var i = 1; i < power; i++) {
        result *= num;
    }

    return result;
}
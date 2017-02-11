function myPow(num, power) {
    var result = 1;

    for (var i = 0; i < power; i++) {
        result *= num;
    }

    return result;
}
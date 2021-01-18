var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i<array.length; i++) {
    console.log(array[i]);
}

for (var i = 0, j = 10; i<j; i++, j--) {
    console.log(i,j);
}

for (var i = 2; i <= 9; i++) {
    for (var j = 1; j <= 9; j++) {
        console.log(i + "*" + j + "=" + i*j);
    }
}
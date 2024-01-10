let i = 0;
while (i < 3) { // shows 0, then 1, then 2
    alert( i );
    i++;
}

let j = 3;
while (j) alert(j--);

do {
    alert( i );
    i++;
} while (i < 3);

for (let k = 0; k < 3; k++) { // shows 0, then 1, then 2
    alert(k);
}


for (; i < 3; i++) { // no need for "begin"
    alert( i ); // 0, 1, 2
}

for (; i < 3;) {
    alert( i++ );
}
// Hacer una función que reciba como parámetro tres números enteros 
// y que lo ordene de mayor a menor.

function sortNumbers(n1, n2, n3) {
  var max;
  var min;
  var mid;

  if (n1 > n2) {
    if (n1 > n3) {
      max = n1;
      if (n2 > n3) {
        mid = n2;
        min = n3;
      } else {
        mid = n3;
        min = n2;
      }
    } else {
      max = n3;
      mid = n1;
      min = n2;
    }
  } else {
    if (n2 > n3) {
      max = n2;
      mid = n1;
      min = n3;
    } else {
      max = n3;
      mid = n2;
      min = n1;
    }
  }

  console.log(max, mid, min)
}

function sortNumbers1(n1, n2, n3) {
  var max;
  var min;
  var mid;

  if ((n1 > n2) && (n1 > n3)) {
    max = n1;
    if (n2 > n3) {
      min = n3;
      mid = n2;
    } else {
      mid = n3;
      min = n2;
    }
  }

  if ((n2 > n1) && (n2 > n3)) {
    max = n2;
    if (n1 > n3) {
      min = n3;
      mid = n1;
    } else {
      mid = n3;
      min = n1;
    }
  } 

  if ((n3 > n1) && (n3 > n2)) {
    max = n3;
    if (n1 > n2) {
      min = n2;
      mid = n1;
    } else {
      min = n1;
      mid = n2
    }
  }

  console.log(max, mid, min)
}

sortNumbers(3, 2, 1)
sortNumbers1(3, 2, 1)

sortNumbers(6, 2, 1)
sortNumbers1(6, 2, 1)

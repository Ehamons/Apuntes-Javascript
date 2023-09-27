console.log(
  "Haga un código que dados tres números, evalúe cual es el número mayor. Imprimalos en consola ordenados"
);

{
  let num1,
    num2,
    num3,
    comparing_values1,
    comparing_values2,
    comparing_values3,
    set1,
    set2,
    set3,
    print;

  num1 = 32;
  num2 = 108;
  num3 = 32;

  /*print = console.log(`El orden de los números es (${set1}, ${set2}, ${set3})`);
  No funciona si se llama después porque cuando se definió las variables set no tenían valores asignados*/

  comparing_values1 = num1 >= num2;
  comparing_values2 = num1 >= num3;
  comparing_values3 = num2 >= num3;

  /*
  Existen 6 casos posibles:
    num1>num2>num3
    num1>num3>num2
    num2>num1>num3
    num2>num3>num1
    num3>num1>num2
    num3>num2>num1
  */

  switch (comparing_values1) {
    // Número 1 >= Número 2
    case (comparing_values1 = true):
      switch (comparing_values2) {
        // (Número 1 >= Número 2) Y (Número 1 >= Número 3)
        case (comparing_values2 = true):
          // Número 1 >= Número 2 >= Número 3
          if ((comparing_values3 = true)) {
            set1 = num1;
            set2 = num2;
            set3 = num3;
            // print;
            // console.log(`El orden de los números es (${set1}, ${set2}, ${set3})`);
            // Número 1 >= Número 3 >= Número 2
          } else {
            set1 = num1;
            set2 = num3;
            set3 = num2;
            // print;
            // console.log(`El orden de los números es (${set1}, ${set2}, ${set3})`);
          }
          break;
        // Número 3 > Número 1 >= Número 2
        case (comparing_values2 = false):
          set1 = num3;
          set2 = num1;
          set3 = num2;
          // print;
          // console.log(`El orden de los números es (${set1}, ${set2}, ${set3})`);
          break;
      }
      break;
    // Número 2 > Número 1
    case (comparing_values1 = false):
      switch (comparing_values2) {
        // Número 2 > Número 1 >= Número 3
        case (comparing_values2 = true):
          if ((comparing_values3 = true)) {
            set1 = num2;
            set2 = num1;
            set3 = num3;
            // print;
            // console.log(`El orden de los números es (${set1}, ${set2}, ${set3})`);
            // Número 3 >= Número 2 > Número 1
          } else {
            set1 = num3;
            set2 = num2;
            set3 = num1;
            // print;
            // console.log(`El orden de los números es (${set1}, ${set2}, ${set3})`);
          }
          break;
        //   Número 2 >= Número 3 > Número 1
        case (comparing_values2 = false):
          set1 = num2;
          set2 = num3;
          set3 = num1;
          //   print;
          //   console.log(`El orden de los números es (${set1}, ${set2}, ${set3})`);
          break;
      }
  }

  print = console.log(`El orden de los números es (${set1}, ${set2}, ${set3})`);
  // Como print se reescribe con los nuevos valores set ahora sí funciona
  print;
}

console.log("Haga un código que evalúe si un número es par o impar.");
{
  let num, par_impar, print1, print2;

  num = 3;
  par_impar = (num + 1) % 2;

  print1 = "El número ";

  if (par_impar == 0) {
    print2 = " es impar";
  } else {
    print2 = " es par";
  }

  console.log(print1, num, print2);
}

console.log("Caso tienda");

{
  let dozens,
    twenty_pdisc,
    fifteen_pdisc,
    ten_pdisc,
    price,
    print1,
    print2,
    outcome;

  dozens = 18;
  price = 60000 * dozens;
  ten_pdisc = price - price * 0.1;
  fifteen_pdisc = price - price * 0.15;
  twenty_pdisc = price - price * 0.2;
  print1 = "You have bought ";
  print2 = " and the total cost is $";
  dozens > 10
    ? (outcome = twenty_pdisc)
    : dozens >= 5 && dozens <= 10
    ? (outcome = ten_pdisc)
    : dozens > 1 && dozens < 5
    ? (outcome = twenty_pdisc)
    : (outcome = price);
  console.log("Llevas : ", dozens, " docenas");
  console.log();

  console.log(print1, dozens, print2, outcome);
}

console.log("Imprima los números del 10 al 1");

for (let i = 10; i >= 1; i--) {
  console.log("El número actualmente es: ", i);
}

console.log("imprima los números pares del 10 al 1");

{
  let impar, i;
  i = 10;

  while (i >= 0) {
    impar = (i + 1) % 2 == 0;
    if ((impar == false)) {
      console.log(i, "es un número par");
    } else{
      console.log(i, " es un número impar");
    }
    i--;
  }
}

console.log(
  "Realice un código que sume los números del 1 al 5 e imprima el resultado"
);
{
  let suma, prev_sum;
  suma = 0;
  for (let i = 0; i <= 5; i++) {
    prev_sum = suma
    suma = suma + i;
    console.log(prev_sum, " + ", i, "es igual a ", suma);
  }
}

console.log(
  "Haga un código con while que imprima la tabla de multiplicar del 7"
);
{
  let tabla_mult, i;
  i = 0;
  while (i <= 10) {
    tabla_mult = 7 * i;
    console.log("7 * ", i, "es igual a ", tabla_mult);
    i++;
  }
}

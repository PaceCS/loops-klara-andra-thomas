// The input to sum35While is a number.
// The function outputs the sum of all multiples of 3 and 5 that are less than that number.

function sum35While(N) {
  let count = 0;
  let sum = 0;
  let val = 1;

  while (val < N) {
      let div3;
      let div5;


    if (val % 3 == 0) {
        div3 = true;
    } else {
        div3 = false;
    }

    // Next determine if val is divisible by 5
    if (val % 5 == 0) {
        div5 = true;
    } else {
        div5 = false;
    }

    // Now log the appropriate response to the console
    if (div3 || div5) {
      count += 1;
      sum += val;
    }
    val += 1;
  }
  console.log('There are ' + count + ' multiples of 3 and 5 that are less than ' + N + '.');
  console.log('Their sum is ' + sum + '.');
}

//Try out your function here.
sum35While(6);
sum35While(20);
sum35While(1000);
























// -------------------------------------------------------------------------------
// Testing - DON'T CHANGE ANYTHING BELOW
const printme = console.log;
const out = [];
console.log = function log(d) {
    out.push(d);
};
const N = 30;
sum35While(N);
printme('\nTesting...');
printme(`\t did you print the proper number of multiples?\t ${out[0] == 'There are 13 multiples of 3 and 5 that are less than 30.'} `);
printme(`\t did you print the proper sum?\t ${out[1] == 'Their sum is 195.'} `);

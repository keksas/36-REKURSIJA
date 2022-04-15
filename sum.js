/*
Uzduotis: reikia rasti VISU masyve esanciu "normaliu" skaiciu suma.
*/
const a = [1, 2, 3, 4, 10, 6, 7, 8, 10];
const b = [1, 2, true, 3, 4, "", 10, 6, NaN, 7, 8, -Infinity, 10];
const c = [
  1,
  true,
  3,
  { name: "Petras" },
  "",
  ["labas", "rytas"],
  6,
  NaN,
  8,
  [2, 10],
  [4, 7],
  -Infinity,
  10,
];
const d = [
  1,
  2,
  3,
  [4],
  [5],
  [6],
  [7, 8],
  [9, 10],
  [
    1,
    2,
    3,
    [4],
    [5],
    [6],
    [7, 8],
    [9, 10],
    [
      1,
      2,
      3,
      [4],
      [5],
      [6],
      [7, 8],
      [9, 10],
      [
        1,
        2,
        3,
        [4],
        [5],
        [6],
        [7, 8],
        [9, 10],
        [1, 2, 3, [4], [5], [6], [7, 8], [9, 10]],
      ],
    ],
  ],
];

function isGoodNumber(n) {
  return typeof n === "number" && isFinite(n);
}

function sum(list) {
  let total = 0;

  for (const n1 of list) {
    if (Array.isArray(n1)) {
      for (const n2 of n1) {
        if (Array.isArray(n2)) {
          for (const n3 of n2) {
            if (Array.isArray(n3)) {
              for (const n4 of n3) {
                if (Array.isArray(n4)) {
                  for (const n5 of n4) {
                    if (Array.isArray(n5)) {
                      for (const n6 of n5) {
                        if (!isGoodNumber(n6)) {
                          continue;
                        }
                        total += n6;
                      }
                    }
                    if (!isGoodNumber(n5)) {
                      continue;
                    }
                    total += n5;
                  }
                }
                if (!isGoodNumber(n4)) {
                  continue;
                }
                total += n4;
              }
            }
            if (!isGoodNumber(n3)) {
              continue;
            }
            total += n3;
          }
        }
        if (!isGoodNumber(n2)) {
          continue;
        }
        total += n2;
      }
    }
    if (!isGoodNumber(n1)) {
      continue;
    }
    total += n1;
  }

  return total;
}

const r1 = sum(a);
console.log("AREA", r1, "-->", 51);

const r2 = sum(b);
console.log("AREA", r2, "-->", 51);

const r3 = sum(c);
console.log("AREA", r3, "-->", 51);

const r4 = sum(d);
console.log("AREA", r4, "-->", 275);

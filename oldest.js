const tree = [
  {
    name: "Petras",
    age: 40,
    children: [
      {
        name: "Jonas",
        age: 42,
        children: [
          {
            name: "Petriukas",
            age: 88,
            children: [
              {
                name: "Saule",
                age: 100,
              },
              {
                name: "Sauliukas",
                age: 101,
              },
              {
                name: "Menulis",
                age: 102,
              },
            ],
          },
        ],
      },
      {
        name: "Ona",
        age: 38,
      },
      {
        name: "Elze",
        age: 107,
      },
    ],
  },
  {
    name: "Maryte",
    age: 50,
    children: [
      {
        name: "Aloyzas",
        age: 45,
        children: [
          {
            name: "Stasys",
            age: 47,
            children: [
              {
                name: "Irena",
                age: 70,
                children: [
                  {
                    name: "Alfas",
                    age: 99,
                  },
                ],
              },
            ],
          },
          {
            name: "Kazys",
            age: 77,
          },
        ],
      },
    ],
  },
];

function oldest() {
  return;
}

function mostChildren() {
  return;
}

const o = oldest(tree);
const m = mostChildren(tree);

console.log("Elze nugyveno 107 metus.");
console.log(o);

console.log("Petriukas turejo 3 vaikus.");
console.log(m);

import {
  chunk,
  difference,
  differenceBy,
  differenceWith,
  isEqual,
  dropRightWhile,
  intersectionBy,
  intersectionWith
} from "lodash-es";

var Arr = [
  { id: "1001", weight: 50 },
  { id: "1002", weight: 80 },
  { id: "1003", weight: 120 },
  { id: "1004", weight: 40 },
  { id: "1005", weight: 110 },
  { id: "1006", weight: 60 },
  { id: "1007", weight: 40 },
  { id: "1008", weight: 110 }
];

let a = chunk(Arr, 2);
console.log(`a`, a);
let ardifference = difference(Arr, [
  { id: "1001", weight: 50 },
  { id: "1002", weight: 80 }
]);
console.log(`ardifference`, ardifference);
let b = differenceBy(
  Arr,
  [
    { id: "1001", weight: 50 },
    { id: "1002", weight: 80 }
  ],
  "weight"
);
console.log(`b`, b);

let c = differenceWith(
  Arr,
  [
    { id: "1006", weight: 60 },
    { weight: 40, id: "1004" }
  ],
  isEqual
);
console.log(`c`, c);

let e = dropRightWhile(Arr, ["weight", 40]);
console.log(`e`, e);

let f = dropRightWhile(Arr, function (o) {
  return o.weight != 120;
});
console.log(`f`, f);

let g = intersectionBy(
  Arr,
  [
    { id: "1001", weight: 50 },
    { id: "1002", weight: 80 }
  ],
  [
    { id: "10002", weight: 80 },
    { id: "1003", weight: 120 }
  ],'weight'
);
console.log(`g`, g)

let aaa=intersectionWith(
    Arr,
    [
      { id: "1001", weight: 50 },
      { id: "1002", weight: 80 }
    ],
    [
      { id: "1002", weight: 80 },
      { id: "1003", weight: 120 }
    ],
    isEqual
  );
  console.log(`aaa`, aaa)

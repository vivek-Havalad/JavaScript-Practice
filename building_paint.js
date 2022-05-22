const fs = require("fs");
let keys = [ [ 100, 20 ], [ 30, 59 ], [ 71, 81 ], [ 9, 200 ] ];
function create_combo(keys, eset, rPos, row, col, minCost, building, K) {
    let newSet = eset.concat([keys[row][col]]);
    let rowPos;
    if(building.length > rPos.length && building[rPos.length] === 0) {
      rowPos = rPos.concat([col]);
    }else {
      rowPos = rPos.concat([building[rPos.length] - 1]);
    }
    if (row == keys.length - 1) {
        let k = get_k_pass(rowPos);
        if( k === K) {
          let cost = getMinValue(building, newSet);
          if(minCost === 0) {
            minCost = cost;
          } else if (minCost > cost) {
            minCost = cost;
          }
        }
    }

    if (row < keys.length - 1) {
        minCost = create_combo(keys, newSet, rowPos, row + 1, 0, minCost, building, K);
    }

    if (col < keys[row].length - 1) {
        minCost = create_combo(keys, eset, rPos, row, col + 1, minCost, building, K);
    }
    return minCost;
}

function get_k_pass(pattern_list) {
  let k = 0;
  for ( let i = 0; i < pattern_list.length; i++) {
    let j = i + 1;
    while ( j < pattern_list.length && pattern_list[i] === pattern_list[j]) {
      j++;
    }
    k++;
    i = j - 1 ;
  }
  return k;
}
function getMinValue(building, paintingPattern ) {
  let cost = 0;
  for (let i = 0; i < building.length; i++) {
    if (building[i] === 0) {
      cost += paintingPattern[i];
    }
  }
  return cost;
}
function readFile() {
  let fd = fs.readFileSync("./input_building_paint.txt", "utf-8");
  let fd_lines = fd.split("\n");
  let no_of_test = parseInt(fd[0]);
  let intial_line = 1;
  while(no_of_test > 0) {
    let [N, M, K] = fd_lines[intial_line++].split(" ").map(x => parseInt(x));
    let painting_cost = [];
    let building = fd_lines[intial_line++].split(" ").map(x => parseInt(x));
    for(let i = intial_line; i < (N+intial_line); i++) {
      painting_cost.push(fd_lines[i].split(" ").map(x => parseInt(x)));
    }
    let minCost = create_combo(painting_cost, [], [], 0,0,0,building, K);
    console.log(minCost);
    intial_line += N;
    no_of_test--;
  }
}
readFile();

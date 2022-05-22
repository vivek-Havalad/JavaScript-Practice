const a = require("./t.js");

// console.log(a);
let indentifier = [];
function findAndRepalce(obj, tmpObj,p) {
  //console.log(p,obj,tmpObj);
  for (let i in obj) {
    console.log(i, tmpObj.parent_id, tmpObj.incremental_id);
    if(i === "liList"){
      continue;
    }
    else if (i == tmpObj.parent_id) {
      if (
        Object.prototype.hasOwnProperty.call(obj[i], tmpObj.incremental_id)
      ) {
        let tmp = obj[i][tmpObj.incremental_id]["liList"] || [];
        tmp.push(tmpObj.text);
        obj[i][tmpObj.incremental_id]["liList"] = tmp;
      } else {
        obj[i][tmpObj.incremental_id] = {
          liList: [tmpObj.text]
        };
      }
      return obj;
    } else {
      // console.log(obj , i, tmpObj.incremental_id);
      if(Object.keys(obj[i])){
        obj[i] = findAndRepalce(obj[i], tmpObj, i);
      }
    }
  }
  return obj;
}
function createUlLi(list) {
  let obj = {};
  for (let i = 0; i < list.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(list[i], "parent_id")) {
      let tmp = obj[list[i].incremental_id] || {};
      let tmp_lst = tmp["liList"] || [];
      tmp_lst.push(list[i].text);
      tmp["liList"] = tmp_lst;
      obj[list[i].incremental_id] = tmp;
    } else {
      console.log();
      obj = findAndRepalce(obj, list[i]);
    }
  }
  console.log(JSON.stringify(obj));
  return obj;
}
createUlLi(a);

function createrLi(obj, liObj) {
  // console.log(obj, liObj, str);
  let str = "";//{
  for(let i in obj) {
    if(!indentifier.includes(i)) {
      if( i !== "liList"){
      indentifier.push(i);
    }
      str += "<ul>"; // <ul >
      //{
      for(let j = 0; j < (obj[i]["liList"] || []).length; j++) {
        str += "<li>" + obj[i]["liList"][j] + "</li>"; // {li}
      }
      if(i !== "liList" && liObj[i]) {
        str += createrLi(liObj[i], obj);
      }
      str += "</ul>";
    }
  }
  return str;
}

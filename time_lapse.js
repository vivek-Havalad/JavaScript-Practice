const moment = require("moment");

function time_check(timeSlot, tmpObj) {
  for(let i = 0; i < timeSlot.length; i++) {
    let [s1, e1] = timeSlot[i];
    if(e1.isBefore(s1)) {
      console.log("end_date must be greater");
      continue;
    } else if (s1.isBefore(tmpObj.from_time)) {
      if(tmpObj.from_time.isBetween(s1,e1)  && tmpObj.to_time.isBetween(s1,e1)) {
        console.log("over lap", s1.toString(),e1.toString());
        return;
      } else {
        console.log("Not an overlap");
        return;
      }
    } else {
      if(s1.isBetween(tmpObj.from_time,tmpObj.to_time)  && e1.isBetween(tmpObj.from_time,tmpObj.to_time)) {
        console.log("over lap", tmpObj.from_time.toString(),tmpObj.to_time.toString());
        return;
      } else {
        console.log("Not an overlap");
        return;
      }
    }
  }
}
function time_check_list(timeSlot) {
  for(let i = 0; i < timeSlot.length; i++) {
    for(let j = 0; j < timeSlot.length; j++) {
      if(i !== j && j > i) {
        let [s1, e1] = timeSlot[i];
        let [s2, e2] = timeSlot[j];
        if(e1.isBefore(s1) || e2.isBefore(s2)) {
          console.log("end_date must be greater");
          continue;
        }
        else if (s1.isBefore(s2)) {
          if(s2.isBetween(s1,e1)  && e2.isBetween(s1,e1)) {
            console.log("inside list over lap", s2.toString(),e2.toString());
          } else {
            console.log("inside list Not an overlap");
          }
        } else {
          if(s1.isBetween(s2,e2)  && e1.isBetween(s2,e2)) {
            console.log("inside list over lap", s1.toString(),e1.toString());
          } else {
            console.log("inside list Not an overlap");
          }
        }
      }
    }
  }
}

function date_find() {
  let start_date = new moment("12:45", "hh:mm");
  let end_date = new moment("17:00", "hh:mm")
  let st_date = new moment("11:45", "hh:mm");
  let ed_date = new moment("18:45", "hh:mm");
  let timeObj = [{
    "from_time" : "14:45",
    "to_time": "17:00"
    },
    {
      "from_time" : "17:45",
      "to_time": "18:45"
      },

  ]
  let tmpObj = {
    "from_time" : new moment("13:45", "hh:mm"),
    "to_time": new moment("19:45", "hh:mm")
  };
  // let timeSlot = [[start_date, end_date], [st_date,ed_date]];
  let timeSlot = timeObj.map(e => {
    let st = new moment(e.from_time, "hh:mm");
    let et = new moment(e.to_time, "hh:mm");
    return [st, et];
  });
  // time_check_list(timeSlot);
  let validObj = {
    "from_time" : new moment("19:45", "hh:mm"),
    "to_time": new moment("20:45", "hh:mm")
  };
  // time_check(timeSlot, tmpObj);

  time_check(timeSlot, validObj);
  // if(st_date.isBetween(start_date,end_date)  && ed_date.isBetween(start_date,end_date)) {
  //   console.log("over lap");
  // } else {
  //   console.log("Not an overlap");
  // }
}
date_find();

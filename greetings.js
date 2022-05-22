function userGreeting(hrs) {

    const Themes = {
      GOOD_NIGHT: "night",
      EVENING: "EVENING",
      MORNING: "MORNING",
      NOON: "NOON",
      AFTERNOON: "AFTERNOON"
    }

    const morning = 5;
    const noon = 12;
    const evening = 17;
    const night = 23.59;

    if (hrs >= night || hrs < morning) {
      return Themes.MORNING;
    }
    if (hrs >= evening || hrs < morning) {
      return Themes.EVENING;
    }
    if (hrs < noon) {
      return Themes.MORNING;
    }
    if (hrs === noon) {
      return Themes.NOON;
    }
    if (hrs < evening) {
      return Themes.AFTERNOON;
    }
  }
  console.log(userGreeting(parseInt(process.argv[2])));

const clockTitle = document.querySelector(".js-clock");

function getDdays() {
  const date = new Date();
  const timeList = [
    date.getMonth() + 1,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  ];

  const daysOfMon = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dDays = 0;
  for (let mon = timeList[0]; mon <= 11; mon++) {
    dDays += daysOfMon[mon - 1];
  }
  dDays += 25;
  dDays -= new Date().getMonth + 1;

  //const dDays = calDdays(timeList[0]);
  const hours = String(23 - timeList[2]).padStart(2, "0");
  const minutes = String(59 - timeList[3]).padStart(2, "0");
  const seconds = String(60 - timeList[4]).padStart(2, "0");

  clockTitle.innerText = `${dDays}d ${hours}h ${minutes}m ${seconds}s`;
}

function calDdays(currentMonth) {
  const daysOfMon = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dDays = 0;
  for (let mon = currentMonth; mon <= 11; mon++) {
    dDays += daysOfMon[mon - 1];
  }
  dDays += 25;
  dDays -= new Date().getMonth + 1;
  return dDays;
}
getDdays();
setInterval(getDdays, 1000);

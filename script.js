window.onload = function () {
  document.getElementById("btnCheckTime").onclick = function () {
    const date1 = new Date(document.getElementById("date1").value);
    const date2 = new Date();

    console.log("Selected Date:", date1);
    console.log("Current Date:", date2);

    const result = calculateTimeDifference(date1, date2);
    console.log("Days Difference:", result);
    alert("Time difference: " + result + " days");
  };
};

function calculateTimeDifference(time1, time2) {
  if (time1.setHours(0, 0, 0, 0) !== time2.setHours(0, 0, 0, 0)) {
    const difference = Math.abs(time1.getTime() - time2.getTime());
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
    return days;
  } else {
    return 0;
  }
}

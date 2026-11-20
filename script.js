// Lanseringsdato i norsk tid. Klokkeslett er satt til 00:00 inntil annet er bestemt.
const launchTimestamp = new Date("2027-01-04T00:00:00+01:00").getTime();
const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = String(new Date().getFullYear());

const countdownElements = ["days", "hours", "minutes", "seconds"].map(id => document.getElementById(id));
const completeMessage = document.getElementById("countdown-complete");
function updateCountdown() {
  const secondsRemaining = Math.max(0, Math.floor((launchTimestamp - Date.now()) / 1000));
  const values = [
    Math.floor(secondsRemaining / 86400),
    Math.floor((secondsRemaining % 86400) / 3600),
    Math.floor((secondsRemaining % 3600) / 60),
    secondsRemaining % 60
  ];
  countdownElements.forEach((element, i) => {
    if (element) element.textContent = String(values[i]).padStart(2, "0");
  });
  if (completeMessage) completeMessage.hidden = secondsRemaining !== 0;
}
updateCountdown();
setInterval(updateCountdown, 1000);

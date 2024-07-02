document.addEventListener("DOMContentLoaded", function () {
  const currentDayElement = document.querySelector(
    '[data-placeholder="CurrentDay"]'
  );
  const currentTimeElement = document.querySelector(
    '[data-placeholder="CurrentTime"]'
  );

  if (currentDayElement && currentTimeElement) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const now = new Date();
    const currentDay = days[now.getDay()];
    const currentTime = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    currentDayElement.textContent = currentDay;
    currentTimeElement.textContent = currentTime;
  }
});

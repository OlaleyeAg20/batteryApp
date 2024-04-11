// navigator.getBattery().then((battery) => {
//     function updateAllBatteryInfo() {
//       updateChargeInfo();
//       updateLevelInfo();
//       updateChargingInfo();
//       updateDischargingInfo();
//     }
//     updateAllBatteryInfo();
  
//     battery.addEventListener("chargingchange", () => {
//       updateChargeInfo();
//     });
//     function updateChargeInfo() {
//       console.log(`Battery charging? ${battery.charging ? "Yes" : "No"}`);
//     }
  
//     battery.addEventListener("levelchange", () => {
//       updateLevelInfo();
//     });
//     function updateLevelInfo() {
//       console.log(`Battery level: ${battery.level * 100}%`);
//     }
  
//     battery.addEventListener("chargingtimechange", () => {
//       updateChargingInfo();
//     });
//     function updateChargingInfo() {
//       console.log(`Battery charging time: ${battery.chargingTime} seconds`);
//     }
  
//     battery.addEventListener("dischargingtimechange", () => {
//       updateDischargingInfo();
//     });
//     function updateDischargingInfo() {
//       console.log(`Battery discharging time: ${battery.dischargingTime} seconds`);
//     }
//   });

const batteryContainer = document.getElementById('battery')


function batteryLeveler(level){
    batteryLevel = level <= 0.2 ? 2 : level <= 0.4 ? 3 : level <= 0.6 ? 4 : level <= 0.8 ? 5 : 6
    // batteryContainer.innerHTML += level <= 0.5 ? `<div class="cell five"></div>` * 5 : `<div class="cell five"></div>`
    document.querySelectorAll(`.cell:nth-child(-n + ${batteryLevel})`).forEach((e)=>{
        e.style.background = level <= 0.4 ? "#fe2212" : level <= 0.7 ? "#F2B50F" : "#0F9D58"
      })

}

if ('getBattery' in navigator) {
    navigator.getBattery().then(function(battery) {
        document.getElementById('chargeIndicator').style.display = battery.charging ? "block" : "none"
        document.getElementById('batteryPercentage').textContent = `${battery.level * 100}%`
      // Add an event listener to update battery status
      battery.addEventListener('chargingchange', function() {
        batteryLeveler(battery.level)
        document.getElementById('chargeIndicator').style.display = battery.charging ? "block" : "none"
        // console.log('Charging:', battery.charging);
      });
  
      battery.addEventListener('levelchange', function() {
        batteryLeveler(battery.level)
        document.getElementById('batteryPercentage').textContent = `${battery.level * 100}%`
      document.getElementById('batteryTip').style.background = battery.level <= 1 && battery.level >= 0.9 ? "#0F9D58" : "none"
      });
  
      // Initial battery status
      document.getElementById('batteryTip').style.background = battery.level <= 1 && battery.level >= 0.9 ? "#0F9D58" : "none"
    });
    batteryLeveler(battery.level)
  } else {
    document.body.innerHTML = `<h1>Sorry Your Browser Does Not Support Battery API</h1>`
  }

  let levelTracker = 1


  function chargingAnimation(level){
    levelTracker = levelTracker >= 6 ? 1 : levelTracker + 1
    document.querySelectorAll(`.cell:nth-child(-n + ${levelTracker})`).forEach((e)=>{
        e.style.background = level <= 0.4 ? "#fe2212" : level <= 0.7 ? "#F2B50F" : "#0F9D58"
      })
  }






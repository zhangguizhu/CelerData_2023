function calcScale() {
  var containerEL = document.querySelector('#journeyContainer')
  var chartEL = document.querySelector('#journeyChart')
  var scale = containerEL.clientWidth / 1920;
  chartEL.style.transform = `scale(${scale}, ${scale})`
  containerEL.style.height = `${912 * scale}px`
}
calcScale()
$(window).resize(function(){
  calcScale()
})

function renderData() {
  if (window.journeyData) {
    for (var data of window.journeyData) {
      // 1. draw label point
      
      // 2. draw label
      
      // 3. draw dash border
      
      // 4. draw value point
      
      // 5. draw value text
    }
  }
}

renderData()
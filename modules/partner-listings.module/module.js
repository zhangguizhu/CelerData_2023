var selectedTags = []
var inputs = document.querySelectorAll('#partner-filter input')
function checkboxHandler(event) {
  // update selectedTags
  var dom = event.target
  var value = dom.checked
  var tag = dom.id.replace('FILTER_TAG-', '')
  var index = selectedTags.indexOf(tag)
  if (value) {
    if (index === -1) {
      selectedTags.push(tag)
    }
  } else {
    if (index > -1) {
      selectedTags.splice(index, 1)
    }
  }
  // filter partner cards
  var partnerDoms = document.querySelectorAll('.partner-item')
  if (partnerDoms && partnerDoms.length) {
    if (!selectedTags.length) {
      // show all
      for (var i = 0; i < partnerDoms.length; i += 1) {
        var partnerDom = partnerDoms[i]
        partnerDom.style.display = 'flex'
      }
      return;
    }
    // check tag
    for (var i = 0; i < partnerDoms.length; i += 1) {
      var partnerDom = partnerDoms[i]
      var tags = partnerDom.children[0].textContent.replaceAll(', ', ',').split(',')
      var flag = false
      for (var j = 0; j < tags.length; j += 1) {
        if (selectedTags.indexOf(tags[j]) > -1) {
          flag = true
          break
        }
      }
      partnerDom.style.display = flag ? 'flex' : 'none'
    }
  }
}

if (inputs && inputs.length) {
  for (var i = 0; i < inputs.length; i += 1) {
    var input = inputs[i]
    input.addEventListener("change", checkboxHandler)
  }
}

let changeColor = document.getElementById("changeColor")

chrome.storage.sync.get("color", function(data) {
	changeColor.style.backgroundColor = data.color
	changeColor.setAttribute("value", data.color)
})

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
	console.log(tabs)
	// chrome.tabs.executeScript(tabs[0].id, {
	// 	code: `document.body.querySelectorAll("[aria-label='Ads']").forEach(function(adSection) {
	// 		adSection.style.display = "none";
	// 	})`,
	// })
	// chrome.tabs.executeScript(tabs[0].id, { code: 'document.body.style.backgroundColor = "' + color + '";' })
})

changeColor.onclick = function(element) {
	let color = element.target.value
}

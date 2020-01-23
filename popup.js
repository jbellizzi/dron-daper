let hideSwitch = document.getElementById("hide-switch")

hideSwitch.onclick = function(element) {
	chrome.storage.sync.set({ hideAds: element.target.checked })
}

chrome.storage.sync.get("hideAds", function(data) {
	if (data.hideAds) hideSwitch.setAttribute("checked", true)
})

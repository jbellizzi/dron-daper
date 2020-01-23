chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.sync.set({ color: "#3aa757" }, function() {})

	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		chrome.declarativeContent.onPageChanged.addRules([
			{
				conditions: [
					new chrome.declarativeContent.PageStateMatcher({
						pageUrl: { hostEquals: "www.google.com" },
					}),
				],
				actions: [new chrome.declarativeContent.ShowPageAction()],
			},
		])
	})
})

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if (changeInfo.status == "complete") {
		chrome.tabs.executeScript(tabId, {
			code: `document.body.querySelectorAll("[aria-label='Ads']").forEach(function(adSection) {
				adSection.style.display = "none";
			})`,
		})
	}
})

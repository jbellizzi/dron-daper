chrome.storage.sync.get("hideAds", function(data) {
	if (data.hideAds) {
		document.body.querySelectorAll("[aria-label='Ads']").forEach(function(adSection) {
			adSection.style.display = "none"
		})
	} else {
		document.body.querySelectorAll("[aria-label='Ads']").forEach(function(adSection) {
			adSection.querySelectorAll(".ads-ad").forEach(function(ad) {
				ad.style.marginBottom = "5px"
				ad.style.padding = "10px 24px"
				ad.style.backgroundColor = "#E4EBFA"
				ad.style.borderRadius = "10px"
			})
		})
	}
})

/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
	window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
	window.GOVUKFrontend.initAll()

	// Upgrade any select with `.js-autocomplete` class
	let autocompletes = document.querySelectorAll('.js-autocomplete')

	autocompletes.forEach(autocomplete => {
		accessibleAutocomplete.enhanceSelectElement({
			defaultValue: '',
			selectElement: autocomplete
		})
	})
})

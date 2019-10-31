export default {
	methods: {
		isMobile() {
			var mobile = [
				"iphone",
				"ipad",
				"android",
				"blackberry",
				"nokia",
				"opera mini",
				"windows mobile",
				"windows phone",
				"iemobile",
			]
			for (var i in mobile)
				if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0)
					return true

			// nothing found.. assume desktop
			return false
		},
	},
}

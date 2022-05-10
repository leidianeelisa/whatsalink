function createLink() {
	var deviceSelected = jQuery("#selectDevice").val();
	var phoneNumber = jQuery("#phoneNumber").val();
	var message = jQuery("#message").val();
	jQuery("#selectDevice").removeClass("invalid");
	jQuery("#phoneNumber").removeClass("invalid");
	
	if(deviceSelected != 'placeholder' && phoneNumber != '') {

		var prefix = deviceSelected == "desktop" ? "web" : "api";
		var url = "https://" + prefix + ".whatsapp.com/send?phone=55" + phoneNumber + "&text=" + message;
		
		jQuery("input[name='linkInput']").val(url);
		jQuery("#form-link").addClass("hidden");
		jQuery("#linkResult").removeClass("hidden");
	} else {
		if (deviceSelected == 'placeholder') {
			jQuery("#selectDevice").addClass("invalid");
		}
		if (phoneNumber == '') {
			jQuery("#phoneNumber").addClass("invalid");
		}
	}
}

function copyLink() {
	var inputLink = jQuery("#linkInput").val();
	navigator.clipboard.writeText(inputLink);
}

function newLink() {
	jQuery("#selectDevice").val("placeholder");
	jQuery("#phoneNumber").val('');
	jQuery("#message").val('');
	jQuery("#form-link").removeClass("hidden");
	jQuery("#linkResult").addClass("hidden");
}

function openLink() {
	var inputLink = jQuery("#linkInput").val();
	window.open(inputLink);
}

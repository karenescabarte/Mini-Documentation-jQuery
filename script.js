$(document).ready(function () {
	// .click()
	$("#clickBtn").click(function () {
		alert("You Clicked Me");
	});

	// .hide()
	$("#hideBtn").click(function () {
		$(this).hide();
	});

	// .show()
	$("#showBtn").click(function () {
		$("p.showMe").show();
	});

	// .toggle()
	$("#toggleBtn").click(function () {
		$("p.toggleMe").toggle();
	});

	// .slideDown()
	$("#slideDownBtn").click(function () {
		$("p.slideDownMe").slideDown("slow");
	});

	// .slideUp()
	$("#slideUpBtn").click(function () {
		$("#slideUp p").slideUp("slow");
	});

	// .slideToggle()
	$("#slideToggleBtn").click(function () {
		$("#slideToggle p").slideToggle("slow");
	});

	// .fadeIn()
	$("#fadeInBtn").click(function () {
		$("#fadeIn p.fadeInMe").fadeIn("slow");
	});

	// .fadeOut()
	$("#fadeOutBtn").click(function () {
		$("#fadeOut p").fadeOut("slow");
	});

	// .addClass()
	$("#addClassBtn").click(function () {
		$("#addClass p").addClass("addBgColor");
	});

	// .before()
	$("#beforeBtn").click(function () {
		$("#before").before("<i>You used Before()</i>");
	});

	// .after()
	$("#afterBtn").click(function () {
		$("#after").after("<i>You used after()</i>");
	});

	// .append()
	$("#appendBtn").click(function () {
		$("#append p").append("<i>You used append()</i>");
	});

	// .html()
	$("#htmlBtn").click(function () {
		$("#html h2").html("<b><i>You used html()</i></b>");
	});

	// .attr()
	$("#attrBtn").click(function () {
		$("#attr h2").text(
			"The attribute id of the button you clicked is: " +
				$("#attrBtn").attr("id")
		);
	});

	// .val()
	$("#valBtn").click(function () {
		$("input:text").val("Karen Escabarte");
	});

	// .text()
	$("#textBtn").click(function () {
		$("#text h2").html("You used text()");
	});
});

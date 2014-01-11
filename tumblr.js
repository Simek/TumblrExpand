var postsCount = 0;

$('<div id="tumblr-expand" />').appendTo(document.body).fadeIn().on("click", function () {
	if($(this).hasClass("active")) {
		collapse();
	} else {
		expand();
	}
	$(this).toggleClass("active");
});

checkForNewContent();

function expand() {
	$(".image_thumbnail").filter(function () {
		return this.className.indexOf("enlarged") == -1;
	}).click();
}

function collapse() {
	$(".image_thumbnail").filter(function () {
		return this.className.indexOf("enlarged") != -1;
	}).click();
}

function expandNewPosts() {
	var currentPostCount = $(".image_thumbnail").length;
	if(currentPostCount != postsCount) {
		if($("#tumblr-expand").hasClass("active")) {
			expand();
		}
		postsCount = currentPostCount;
	}
	checkForNewContent();
}

function checkForNewContent() {
	setTimeout(function() {
		expandNewPosts();
	}, 300)
}
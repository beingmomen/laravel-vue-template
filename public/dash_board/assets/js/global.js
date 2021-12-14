/* hide alert message after 3 seconds */
$(document).ready(function() {
    setTimeout(() => {
        // remove admin from this alert disappearing
        if (window.location.href.indexOf("admin")) {
        } else {
            $(".alert").addClass("d-none");
        }
    }, 3000);
});

/* get the third parent element of another element */
function getThirdParent(element) {
    $(".file-upload-default").on("change", function() {
        $(this)
            .parent()
            .find(".form-control")
            .val(
                $(this)
                    .val()
                    .replace(/C:\\fakepath\\/i, "")
            );
    });
    return $(element)
        .parent()
        .parent()
        .parent();
}

(function () {
    if (window.location.href.indexOf("console.log") != -1) {
        return;
    }

    var inputs = document.getElementsByTagName("input");
    for (var i=0; i < inputs.length; i++) {
        inputs[i].value = '<script>console.log("input with id ' + inputs[i].id +
        ' is vulnerable"); chrome.runtime.sendMessage("edbmdbgpmclmlaalalohfadheiajimma", {action: "vulns",source:"' +
        inputs[i].id + '"});</script>';
    }
    var submit = document.querySelector("input[type=submit]");
    if (!submit) {
        submit = document.querySelector("button");
    }

    submit.click();

    for (var i=0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
})();
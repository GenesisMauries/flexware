
$(document).ready(function () {
    $("#optional").kendoListBox({
        connectWith: "selected",
        toolbar: {
            tools: ["moveUp", "moveDown", "transferTo", "transferFrom", "transferAllTo", "transferAllFrom", "remove"]
        }
    });

    $("#selected").kendoListBox();
});

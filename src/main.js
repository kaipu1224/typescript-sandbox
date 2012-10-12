var _s = this._.str;
var colors = [
    "bg-color-green", 
    "bg-color-greenDark", 
    "bg-color-greenLight", 
    "bg-color-pink", 
    "bg-color-pinkDark", 
    "bg-color-yellow", 
    "bg-color-darken", 
    "bg-color-purple", 
    "bg-color-blue", 
    "bg-color-blueDark", 
    "bg-color-blueLight", 
    "bg-color-orange", 
    "bg-color-orangeDark", 
    "bg-color-red", 
    
];
$(function () {
    $("#reverseBtn").click(function (e) {
        $("#reverseResult").html("results = " + _s.reverse($("#reverseTxt").val()));
    });
    $("#camelBtn").click(function (e) {
        $("#camelResult").html("results = " + _s.camelize($("#camelTxt").val()));
    });
    $("#capitalBtn").click(function (e) {
        $("#capitalResult").html("results = " + _s.capitalize($("#capitalTxt").val()));
    });
    $("#dasherizeBtn").click(function (e) {
        $("#dasherizeResult").html("results = " + _s.dasherize($("#dasherizeTxt").val()));
    });
    $("#escapeBtn").click(function (e) {
        $("#escapeResult").html("results = " + _s.escapeHTML($("#escapeTxt").val()));
    });
    $("#stripBtn").click(function (e) {
        $("#stripResult").html("results = " + _s.strip($("#stripTxt").val()));
    });
    $("#truncateBtn").click(function (e) {
        $("#truncateResult").html("results = " + _s.truncate($("#truncateTxt").val(), 10));
    });
    $("#addTileBtn").click(function (e) {
        var tile = document.createElement('div');
        tile.className = "tile " + colors[(Math.random() * colors.length) + 1 | 0];
        $(tile).click(function (e) {
            $(this).remove();
        });
        $("#tileArea").append(tile);
    });
});

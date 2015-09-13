$(document).ready(function(){
    // button clicked
    $('button').click(function(){
        var text = $('textarea').val(); // get text from textarea
        var charCount = charCounter(text); // count number of words in text
        $("#results").text(charCount);
    });
    function charCounter(text) {
        var charCount = 0;
        for (var i = 0; i < text.length; i++) {
            charCount++;
        };
        return charCount;
    }
});
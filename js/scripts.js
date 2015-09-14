$(document).ready(function(){
    // button clicked
    $('button').click(function(){
        var text = $('textarea').val(); // get text from textarea
        var charCount = 0;
        if (text) {
            charCount = text.length;
        }
        var wordList = text.match(/\w+/g);
        wordCount = 0;
        if (wordList) {
            wordCount = wordList.length;
        }
        if (wordCount === 0) {
            $('#results').text("Don't be silly! There's nothing to count!");
        } else {
            $('#results').text("There are " + charCount + " character(s) and "+ wordCount +" word(s).")
        }
    });
});
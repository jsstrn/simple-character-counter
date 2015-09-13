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
        $("#char").text(charCount);
        $("#words").text(wordCount);
        var results = "There are " + charCount + " characters and "+ wordCount +" words.";
        $('#results').text(results);
        var displayText = "";
        if (wordCount === 0) {
            
        } else if (wordCount > 50) {

        } else {

        }
    });
});
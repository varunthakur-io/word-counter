var textbox = document.getElementById("text-area");
var charCountElement = document.getElementById("characters");
var wordsCountElement = document.getElementById("words");

// Event listener for input changes in the textarea
textbox.addEventListener('input', function () {
    var text = this.value;

    // Update character count (excluding whitespace)
    charCountElement.innerHTML = text.replace(/\s/g, '').length;

    // Update word count (excluding leading and trailing punctuation)
    var words = text.trim().split(/\s+/).filter(function (word) {
        return word.replace(/[.,\/#!$%^&*;:{}=\-_`~()]/g, "") !== "";
    });

    // Display the word count
    wordsCountElement.innerHTML = words.length;
});
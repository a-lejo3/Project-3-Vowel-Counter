function countVowels() {
    var inputText = document.getElementById("inputText").value;
    var vowelCount = 0;
    var vowels = "aeiouAEIOU";

    for (var i = 0; i < inputText.length; i++) {
        if (vowels.indexOf(inputText[i]) !== -1) {
            vowelCount++;
        }
    }

    document.getElementById("vowelCount").innerHTML = vowelCount;
}

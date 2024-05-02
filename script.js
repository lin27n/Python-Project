document.getElementById('generate-btn').addEventListener('click', function() {
    var userInput = document.getElementById('text-input').value;
    // You can put your text generation logic here, for demonstration purpose, let's just display the input text
    document.getElementById('result').innerHTML = userInput;
});

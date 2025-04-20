document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to the button
    document.getElementById("generateButton").addEventListener("click", function() {
        // Call the function to generate response
        generateResponse();
    });
});

function generateResponse() {
    // Make a call to the Gemini Pro API to generate content
    // Replace 'your_api_key' with your actual API key
    fetch('https://api.gemini.com/v1/generate/content', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'AIzaSyCdZYDrDl4FcWrCtUcOUK1JqCXu5-XnbTM'
        },
        body: JSON.stringify({
            // Add any parameters you need for the request
            // For example:
            "prompt": "Capital of India. Describe about it"
        })
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response data
        console.log(data); // Log response data to console
        // Display the generated content in the HTML
        document.getElementById("response").innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle errors
    });
}

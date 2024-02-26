// Wait for the DOM content to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Student ID constant
    const myStudentId = "200552807"; 
    //  custom number input element
    const customNumberInput = document.getElementById("customNumber");
    //  custom color button element
    const custColorBtn = document.querySelector(".custColor");
    //  random color button element
    const randColorBtn = document.querySelector(".randColor");
    // image select element
    const imageSelect = document.getElementById("imageSelect");
    // images container element
    const images = document.getElementById("images");

    // Array to store image src locations
    const imageSrcArray = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg", "img/img5.jpg"];

    // Function to change bg color from user input and add student id
    function changeCustomColor() {
        // Parse the input value to an integer
        const inputValue = parseInt(customNumberInput.value);
        // To Check if the input value is a valid number between 0 and 100
        if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 100) {
            // Set background color based on input value
            document.body.style.backgroundColor = calculateColor(inputValue);
            // Display student ID
            document.getElementById("myStudentId").textContent = myStudentId;
        } else {
            // Display an alert for invalid input
            alert("Please enter a valid number between 0 and 100.");
        }
    }

    // Function to calculate color based on input value
    function calculateColor(value) {
        if (value < 0 || value > 100) {
            return "red";
        } else if (value < 20) {
            return "green";
        } else if (value < 40) {
            return "blue";
        } else if (value < 60) {
            return "orange";
        } else if (value < 80) {
            return "purple";
        } else {
            return "yellow";
        }
    }

    // Function to change bg color from random number
    function changeRandomColor() {
        // Generate a random number between 1 and 100
        const randomValue = Math.floor(Math.random() * 100) + 1;
        // Set background color based on random number
        document.body.style.backgroundColor = calculateColor(randomValue);
    }

    // Function to generate options for select list
    function addList() {
        // Iterate through the image src array
        imageSrcArray.forEach(function(src, index) {
            // Create an option element for each image
            const option = document.createElement("option");
            // Set the option text
            option.text = `Image ${index + 1}`;
            // Set the option value to the image src
            option.value = src;
            // Add the option to the select list
            imageSelect.add(option);
        });
    }

    // Function to change image when select list item is changed
    function changeImage() {
        // Get the selected image src from the select list
        const selectedImage = imageSelect.value;
        // Set the src attribute of the images container to the selected image
        images.src = selectedImage;
    }

    // Event listener for custom color button click
    custColorBtn.addEventListener("click", changeCustomColor);

    // Event listener for random color button click
    randColorBtn.addEventListener("click", changeRandomColor);

    // Event listener for select list change
    imageSelect.addEventListener("change", changeImage);

    // Call addList function to populate select options
    addList();
});

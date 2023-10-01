var step = 50; // change this to different step value for smoother movement
var chatbox = document.getElementById("chatbox");
var chatboxText = document.getElementById("chatboxText");
var image = document.getElementById('i1');

// Function to move the image and display the chatbox
function move_img(str) {
    var x = image.offsetTop;
    var y = image.offsetLeft;

    switch (str) {
        case "down":
            x = x + step;
            break;

        case "up":
            x = x - step;
            break;

        case "left":
            y = y - step;
            break;

        case "right":
            y = y + step;
            break;
    }

    // Apply the new position with a transition class for smooth movement
    image.style.transition = "all 0.3s ease";
    image.style.top = x + "px";
    image.style.left = y + "px";

    // Display the chatbox next to the image and move it
    displayChatbox(str);
}

// Function to display the chatbox next to the image and move it
function displayChatbox(direction) {
    var chatboxTextContent = "";
    switch (direction) {
        case "down":
            chatboxTextContent = "Okay I'll move down";
            break;

        case "up":
            chatboxTextContent = "Okay I'll move up";
            break;

        case "left":
            chatboxTextContent = "Okay I'll move left";
            break;

        case "right":
            chatboxTextContent = "Okay I'll move right";
            break;
    }
    chatboxText.textContent = chatboxTextContent;
    chatbox.style.display = "block";

    // Position the chatbox next to the image
    chatbox.style.left = (image.offsetLeft + image.clientWidth) + "px";
    chatbox.style.top = image.offsetTop + "px";
}

// Function to close the chatbox
function closeChatbox() {
    chatbox.style.display = "none";
}

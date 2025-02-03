// Load the saved model
fetch('form_interaction_model.joblib')
  .then(response => response.blob())
  .then(blob => joblib.load(blob))
  .then(model => {
    // Attach event listeners to the form fields
    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');
    const subjectInput = document.getElementById('subject-input');
    const messageInput = document.getElementById('message-input');
    const submitButton = document.getElementById('submit-button');
    const classificationResult = document.getElementById('classification-result');

    let navigationTime = 0;
    let typingSpeed = 0;
    let backspaceCount = 0;

    // Event listener functions
    nameInput.addEventListener('input', () => {
      // Update typing speed and backspace count
      // Call classifyInteraction()
    });

    // Add similar event listeners for other form fields

    // Record the navigation time when the user navigates to the page
    window.addEventListener('load', () => {
      navigationTime = new Date().getTime();
    });

    submitButton.addEventListener('click', () => {
      // Submit the form or perform any other desired action
      console.log('Form submitted!');
    });
  })
  .catch(error => {
    console.error('Error loading the model:', error);
  });

function calculateTypingSpeed(length, duration) {
  return length / (duration / 1000);
}

function calculateBackspaceCount(value) {
  return value.split('').filter(char => char === '\b').length;
}

function classifyInteraction(navigationTime, typingSpeed, backspaceCount, model, resultElement) {
  const isHuman = model.predict([[navigationTime, typingSpeed, backspaceCount]])[0];
  resultElement.textContent = `Is this a human interaction? ${isHuman}`;
}
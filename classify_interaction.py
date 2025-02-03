import joblib
import numpy as np

# Load the saved model
model = joblib.load('form_interaction_model.joblib')

# Create a function to classify user input
def classify_interaction(navigation_time, typing_speed, backspace_count):
    # Prepare the input data
    X = np.array([[navigation_time, typing_speed, backspace_count]])
    
    # Use the model to predict the class
    is_human = model.predict(X)[0]
    
    return is_human
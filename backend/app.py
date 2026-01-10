from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)  # VERY IMPORTANT for frontend connection

@app.route("/predict", methods=["GET"])
def predict():
    return jsonify({
        "region": "Chennai",
        "risk_level": random.choice(["Low", "Medium", "High"]),
        "confidence": round(random.uniform(0.75, 0.95), 2)
    })

if __name__ == "__main__":
    app.run(port=5000, debug=True)

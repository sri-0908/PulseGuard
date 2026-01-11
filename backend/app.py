from flask import Flask, jsonify, request
from flask_cors import CORS
from model import predict_outbreak

app = Flask(__name__)
CORS(app)

@app.route("/health")
def health():
    return jsonify({"status": "ok"})

@app.route("/predict")
def predict():
    city = request.args.get("city", "Chennai")
    result = predict_outbreak(city)
    return jsonify(result)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)

from flask import Flask, jsonify
from flask_cors import CORS
from model import predict_outbreak

app = Flask(__name__)
CORS(app)

@app.route("/predict")
def predict():
    result = predict_outbreak()
    return jsonify(result)

@app.route("/health")
def health():
    return jsonify({"status": "ok"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)



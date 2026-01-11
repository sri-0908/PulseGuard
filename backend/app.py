from flask import Flask, jsonify
from flask_cors import CORS
from model import predict_outbreak
import os

app = Flask(__name__)
CORS(app)

@app.route("/health")
def health():
    return jsonify({"status": "ok"})

@app.route("/predict")
def predict():
    return jsonify(predict_outbreak())

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port)

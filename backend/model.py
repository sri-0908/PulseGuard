import random

def predict_outbreak():
    risk_score = round(random.uniform(0.2, 0.9), 2)

    if risk_score > 0.7:
        level = "High"
    elif risk_score > 0.4:
        level = "Medium"
    else:
        level = "Low"

    return {
        "risk_score": risk_score,
        "level": level,
        "region": "Chennai",
        "trend": "Increasing" if risk_score > 0.5 else "Stable"
    }




---
title: Prompt Optimiser Board
aliases:
  - Prompt Optimiser Board
tags:
  - breadboard
  - breadboard/phase/2
created: 2024-06-22T22:31:12
modified: 2024-06-22T22:54:42
---

- Initially for use with the outputs of [[Universal Filter Board]] to optimise the query based on the "accepted" and "rejected" results.
- Sample data

```json
{
  "prompt": "What are the health benefits of regular exercise?",
  "results": [
    {
      "decision": "accepted",
      "rationale": "The source provides comprehensive and scientifically-backed information on the various health benefits of regular exercise.",
      "certainty": 0.95,
      "result": {
        "title": "Health Benefits of Exercise: How Exercise Improves Your Health",
        "url": "https://www.healthline.com/health/fitness-exercise/benefits-of-exercise",
        "snippet": "Regular physical activity can improve your muscle strength and boost your endurance. Exercise delivers oxygen and nutrients to your tissues and helps your cardiovascular system work more efficiently."
      }
    },
    {
      "decision": "accepted",
      "rationale": "The article offers a detailed explanation of the mental and physical health advantages associated with regular exercise, supported by expert opinions.",
      "certainty": 0.90,
      "result": {
        "title": "Exercise: 7 benefits of regular physical activity",
        "url": "https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise/art-20048389",
        "snippet": "Regular exercise can help prevent and manage many health problems and concerns, including stroke, metabolic syndrome, high blood pressure, type 2 diabetes, depression, anxiety, many types of cancer, arthritis, and falls."
      }
    },
    {
      "decision": "rejected",
      "rationale": "The source lacks detailed information and scientific backing, providing only a superficial overview of the benefits of exercise.",
      "certainty": 0.60,
      "result": {
        "title": "Top 10 Benefits of Exercise",
        "url": "https://www.example.com/top-10-benefits-of-exercise",
        "snippet": "Exercise is good for you. It helps you stay fit, lose weight, and feel great."
      }
    },
    {
      "decision": "accepted",
      "rationale": "This source presents evidence-based research on the health benefits of exercise, including mental health benefits and improved cognitive function.",
      "certainty": 0.92,
      "result": {
        "title": "The Mental Health Benefits of Exercise",
        "url": "https://www.helpguide.org/articles/healthy-living/the-mental-health-benefits-of-exercise.htm",
        "snippet": "Exercise is not just about aerobic capacity and muscle size. Sure, exercise can improve your physical health and your physique, trim your waistline, improve your sex life, and even add years to your life."
      }
    },
    {
      "decision": "accepted",
      "rationale": "Provides a balanced view of the benefits of exercise along with practical tips and real-life examples.",
      "certainty": 0.88,
      "result": {
        "title": "The Benefits of Physical Activity",
        "url": "https://www.cdc.gov/physicalactivity/basics/pa-health/index.htm",
        "snippet": "Regular physical activity is one of the most important things you can do for your health. It can help control your weight, reduce your risk of cardiovascular disease, reduce your risk for type 2 diabetes and metabolic syndrome."
      }
    }
  ]
}
```

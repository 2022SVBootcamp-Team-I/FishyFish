from .inference.expect import fish_detect
from teami.celery import app


@app.task()
def fish_ai(img):
    result = fish_detect(img)
    return result

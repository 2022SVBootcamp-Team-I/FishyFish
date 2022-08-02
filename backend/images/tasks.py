#from .inference.expect import fish_detect
from .inference.expect import addition
from teami.celery import app

"""
@app.task(track_started=True)
def expect_image_task(image):
    return fish_detect(image)
"""

@app.task(track_started=True)
def try_celery(x):
    return addition(x)

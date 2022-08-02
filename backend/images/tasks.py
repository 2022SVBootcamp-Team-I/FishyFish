#from .inference.expect import fish_detect
from .inference.expect import addition
from teami.celery import app

"""
@app.task(track_started=True)
def expect_image_task(image):
    return fish_detect(image)
"""

@app.task()
def try_celery(x,y):
    return addition(x,y)

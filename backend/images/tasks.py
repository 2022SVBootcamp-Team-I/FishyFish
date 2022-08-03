#from .inference.expect import fish_detect
#from .inference.expect import fish_detect
from teami.celery import app

"""
@app.task(track_started=True)
def expect_image_task(image):
    return fish_detect(image)
"""
'''
@app.task()
def fish_ai(img):
    return fish_detect(img)
'''
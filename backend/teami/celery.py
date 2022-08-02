from celery import Celery
import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'teami.settings')
app = Celery('teami')
app.config_from_object('django.conf:settings', namespace='CELERY')

# settigs.py에서 celery setting을 CELERY_로 시작하게 한다. app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks()
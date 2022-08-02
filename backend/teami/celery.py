from celery import Celery
from django.conf import settings

# Set the default Django settings module for the 'celery' program.
#os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'teami.settings')

brokers = [f'amqp://{settings.RABBITMQ_USER}:{settings.RABBITMQ_PASSWORD}@{host}//' for host in settings.RABBITMQ_HOSTS]
app = Celery('teami', broker=brokers,broker_transport_options={'confirm_publish' : True})

# Using a string here means the worker doesn't have to serialize
# the configuration object to child processes.
# - namespace='CELERY' means all celery-related configuration keys
#   should have a `CELERY_` prefix.
#app.config_from_object('django.conf:settings', namespace='CELERY')


# Load task modules from all registered Django apps.
app.autodiscover_tasks()
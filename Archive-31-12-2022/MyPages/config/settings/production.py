import os

import dotenv

from .base import *

dotenv.load_dotenv()
SECRET_KEY = os.environ["SECRET_KEY"]

DEBUG = False

ALLOWED_HOSTS = ["*"]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'nostalon', 
        'USER': 'okmtyuta',  
        'PASSWORD': 'GeeR2mg',  
        'HOST': 'localhost', 
        'PORT': '3306', 
        'OPTIONS': {
            'charset': 'utf8mb4',
        },
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

STATIC_URL = 'static/'
STATIC_ROOT = '/home/okmtyuta/.okmtyuta/nginx/public/static'

MEDIA_URL = '/media/'
MEDIA_ROOT = '/home/okmtyuta/.okmtyuta/nginx/public/media'


STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "static"),
]
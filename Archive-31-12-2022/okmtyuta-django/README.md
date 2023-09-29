# Documentation
This is a repository for files which create the backend of my homepage [fromoshima.jp](https://fromoshima.jp). In this documentation, we will explain the architecture of "okmtyuta-django" and how to use it.

## For maintainer
When you commit to change the files, you have to do following tasks:
- Update this documentation, if the usages are changed,
- Update the requirements lists, if you added new library. 
  - It is noted that requirements lists are split to two files: `local_requirements.txt` and `production_requirements.txt.` Former file is for local environment, and later file is for production environment. DO NOT FORGET to update both files.
  - You can output the requirements.txt as following command:
  - `pip freeze > requirements.txt`

Then the following actions are not essential, but are recommended:
- Write down your changes to Update Log section in the bottom of this document.

## Initialization in local
If you start to develop in local environment, you have to following tasks:
  - Install required libraries with following command:
    - `pip install -r local_requirements.txt`
  - Create environment file `.env` as following format.
    - NOTE: If you do not know the `<django-secret-key>`, you have to ask the administrator of our application.
  ```bash
  DJANGO_SETTINGS_MODULE="config.settings.local"
  SECRET_KEY='<django-secret-key>'
  ```

## Activate in production
TODO: write up how to activate our application in production environment, that is the way to use library such as `gunicorn.`

## Update Log
- 16th October 2022
  - Created application
- 29th October 2022
  - Rewrite README.md

## Editor-in-Chiefs
- [okmtyuta](https://github.com/okmtyuta), the administrator of our application. 
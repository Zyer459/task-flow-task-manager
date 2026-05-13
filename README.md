# task-flow-task-manager

run on windows

1. open cmd as administrator
2. goto drive by replace F with drive letter: "F:"
3. create python virtual env by : "python -m venv test"
    3.1. or "py -m venv test"
    3.2. move project folder into venv folder : should look like test/project
4. cd in to test/Scripts directory : "cd test/Scripts"
5. activate venv : "activate"
6. cd to project folder : "cd ../project"
7. pip install requirements: "pip install -r requirements.txt"
8. in test/project run task_flow.py with flask : "flask --app task_flow run"
9. http address of local server should pop up copy that http and paste it in browser address bar
10. to stop flask app press : ctrl+c
11. to exit virtual environment type in cmd : "deactivate"

# task-flow-task-manager

run on windows
git clone "repository url"
files downloaded 3

1. open cmd(command prompt) as administrator
2. create python virtual env by : "python -m venv test"
    3.1. or "py -m venv test"
    3.2. move the folder named 'project' into venv folder : should look like test/project
3. cd in to test/Scripts directory : "cd test/Scripts"
4. activate venv : "activate"
5. cd to project folder : "cd ../project"
6. pip install requirements: "pip install -r requirements.txt"
7. in test/project run task_flow.py with flask : "flask --app task_flow run"
8. http address of local server should pop up copy that http and paste it in browser address bar
9. to stop flask app press : ctrl+c
10. to exit virtual environment type in cmd : "deactivate"

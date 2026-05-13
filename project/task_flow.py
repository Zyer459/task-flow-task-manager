from flask import Flask,render_template, request, redirect, jsonify


from db.view import view, add, _del, _update, _toggler


app = Flask(__name__)


@app.route("/")
def index ():
    return render_template('layout.html')
#used jinja syntax to shorten html boilerplate code, much like a variable being read!.
#would have used jinja to complete the api part too, but the assignment requested json and request body, so learned how to implement api in flask
@app.route("/add-task")
def add_task ():
    return render_template("add-task.html")

@app.route("/view-task")
def view_task ():
    return render_template("view-task.html")

@app.route("/update-task/<int:task_id>")
def update_task(task_id):
    #if request.method == 'PUT':
        return render_template("update-task.html", id=task_id) #arrive here from update-task.js and retuen form for user input, it was either this or prompt, decided to this because last time I used prompt I needed node and packages, so I decided against it, too much voodoo

#api part
#used if-elifs if any new methods should be included and for my own easy understanding
#kept view_add and del_update in same functions since 2 groups use the same routes, if done seperately no prob but why bother write redundant codes
@app.route("/api/tasks", methods=['GET', 'POST'])
def view_add ():
    if request.method == 'GET':
        return jsonify(view()), 200
    
    elif request.method == 'POST':
        data = request.get_json()
        title = data['title']
        if title == '':
            return jsonify({'result':'400'}), 400 #bad request
        description = data['description']
        status = 'pending' #set pending as default
        add(title,description,status)
        return jsonify({'result': '201'}), 201 #success and new content added

@app.route("/api/tasks/<int:task_id>", methods=['PUT', 'DELETE'])
def del_update_task(task_id):
        if request.method == 'PUT':
            data = request.get_json()
            title = data['title']
            if title == '':
                return "", 400
        
            description = data['description']
            status = data['status']

            _update(title,description,status,task_id)
            return "", 205
        
        elif request.method == 'DELETE':
            _del(task_id)
            return "", 204
        
@app.route("/api/tasks/<int:task_id>/toggle", methods=['PATCH'])
def toggle (task_id):
     if request.method == 'PATCH':
          _toggler(task_id)
          return "", 204
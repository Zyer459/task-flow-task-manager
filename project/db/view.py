import sqlite3
import os

# base_dir, db-path should be placed in .env
base_dir = os.path.dirname(os.path.abspath(__file__))
db_path = os.path.join(base_dir, "data.db") #ai help

connect = sqlite3.connect(db_path, check_same_thread=False) #check_same_thread=False from stackoverflow


def view ():
    cursor = connect.cursor()
    cursor.execute ("SELECT * FROM tasks")
    _list = cursor.fetchall()
    cursor.close()
    return _list

def add(title, description, status):
    cursor = connect.cursor()
    sql = "INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)"
    values = [title, description, status]
    cursor.execute(sql,values)
    connect.commit()
    cursor.close()

def _del(id):
    cursor = connect.cursor()
    sql = "DELETE FROM tasks WHERE id=?;"
    values = [id,]
    cursor.execute(sql,values)
    connect.commit()
    cursor.close()

def _update(title, description, status, id):
    cursor = connect.cursor()
    sql = "UPDATE tasks SET title = ?, description = ?, status = ?, updated=CURRENT_TIMESTAMP WHERE id=?;"
    values = [title, description, status, id]
    cursor.execute(sql,values)
    connect.commit()
    cursor.close()

def _toggler(id):
    cursor = connect.cursor()
    sql_i = "SELECT status FROM tasks WHERE id=?;"
    values_i = [id,]
    cursor.execute(sql_i,values_i)
    _status = cursor.fetchone()[0]

    if (_status == 'completed'):
        _status = 'pending'
    elif (_status == 'pending'):
        _status = 'completed'

    sql = "UPDATE tasks SET status = ?, updated=CURRENT_TIMESTAMP WHERE id=?;"
    values = [_status, id]
    cursor.execute(sql,values)
    connect.commit()
    cursor.close()
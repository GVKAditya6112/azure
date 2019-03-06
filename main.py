from flask import Flask, render_template,request
import pyodbc
app = Flask(__name__)
connection  = pyodbc.connect("Driver={ODBC Driver 13 for SQL Server};Server=tcp:mysqlservergvk.database.windows.net,1433;Database=mySampleDatabase;Uid=azureuser@mysqlservergvk;Pwd=Azure1234567")
#print(cur)
@app.route('/')
def hello_world():
  return render_template('index.html')
@app.route('/mydata', methods=['get','post'])
def mydata():
  cur = connection.cursor()
  cur.execute("SELECT count(mag) from earthquake where (mag BETWEEN 2.0 AND 2.5)")
  full1 = cur.fetchone()
  cur.execute("SELECT count(mag) from earthquake where (mag BETWEEN 2.5 AND 3.0)")
  full2 = cur.fetchone()
  cur.execute("SELECT count(mag) from earthquake where (mag BETWEEN 3.0 AND 3.5)")
  full3 = cur.fetchone()
  cur.execute("SELECT count(mag) from earthquake where (mag BETWEEN 3.5 AND 4.0)")
  full4 = cur.fetchone()
  cur.execute("SELECT count(mag) from earthquake where (mag BETWEEN 4.0 AND 4.5)")
  full5 = cur.fetchone()
  rows = [full1[0], full2[0], full3[0], full4[0], full5[0]]
  print(rows)
  Magnitude =  request.form['Magnitude']
  c = cur.execute("SELECT * from earthquake where mag ="+Magnitude+"")
  row = c.fetchone()
  return render_template('p2.html', result=row)
  return render_template('pie.html', rows=rows)
  return render_template('code.js', rows=rows)

@app.route('/mydat', methods=['get','post'])
def mydat():
  cur = connection.cursor()
  cur.execute("SELECT count(mag) from earthquake where (mag BETWEEN 2.0 AND 2.5)")
  full1 = cur.fetchone()
  cur.execute("SELECT count(mag) from earthquake where (mag BETWEEN 2.5 AND 3.0)")
  full2 = cur.fetchone()
  cur.execute("SELECT count(mag) from earthquake where (mag BETWEEN 3.0 AND 3.5)")
  full3 = cur.fetchone()
  cur.execute("SELECT count(mag) from earthquake where (mag BETWEEN 3.5 AND 4.0)")
  full4 = cur.fetchone()
  cur.execute("SELECT count(mag) from earthquake where (mag BETWEEN 4.0 AND 4.5)")
  full5 = cur.fetchone()
  rows = [full1[0], full2[0], full3[0], full4[0], full5[0]]
  print(rows)
  return render_template('code.js', rows=rows)

if __name__ == '__main__':
  app.run()

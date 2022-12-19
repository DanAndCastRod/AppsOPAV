import pyodbc 
import js



# Some other example server values are 
# server = 'localhost\sqlexpress' 
# for a named instance 
server = '10.1.0.12' 
# to specify an alternate port server = 'tcp:myserver.database.windows.net' 
database = 'Captura_digital' 
username = 'proceso_opav' 
password = 'Opav2022.' 
# ENCRYPT defaults to yes starting in ODBC Driver 18. It's good to always specify ENCRYPT=yes on the client side to avoid MITM attacks. 
cnxn = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server};SERVER='+server+';DATABASE='+database+';UID='+username+';PWD='+ password) 
cursor = cnxn.cursor()


with open("consulta1.sql", 'r') as myfile:
    data = myfile.read()
    cursor.execute(data)

result = cursor.fetchall()
print(result)



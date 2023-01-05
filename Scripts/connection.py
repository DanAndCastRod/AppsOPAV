import pyodbc
server = 'localhost'
database = 'Apps'
username = 'sa'
password = '@Acceso23'
cnxn = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server}; SERVER='+server+';DATABASE='+database+';UID='+username+';PWD='+password)
cursor = cnxn.cursor()


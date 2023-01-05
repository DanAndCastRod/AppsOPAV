const sql = require('mssql')

const config = {
  user: 'sa',
  password: '@Acceso23',
  server: 'localhost',
  database: 'Apps',
  options: { 
    trustServerCertificate: true,
    } 
}

sql.connect(config, err => {
    if (err) console.error(err)
  
    // create a request
    const request = new sql.Request()
  
    // query the database
    request.query('SELECT TOP (1000) [Corte],[Descripcion] FROM [Apps].[dbo].[Perfil_tipo_de_corte]', (err, result) => {
      if (err) console.error(err)
  
      console.log(result)
    })
  })
  
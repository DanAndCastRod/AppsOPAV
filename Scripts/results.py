from jinja2 import Environment, FileSystemLoader

env = Environment(loader=FileSystemLoader("Pages"))

plantilla = env.get_template('Details.html')

datos = {'titulo':'SCR' }

html = plantilla.render(datos)

with open('Details.html', 'w') as f:

    f.write(html)
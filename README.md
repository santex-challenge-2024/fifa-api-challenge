# Fifa API

## Funcionalidad

- **Auteticacion de usuario**: Permite a los usuarios registrarse e iniciar session, me devuelve un token de acceso (jwt) que luego lo guardo en mi LocalStorage de mi aplicacion Angular. Esto es necesario para poder acceder a la rutas de la pagina.
- **Listado de jugadores**: Permite a los usuarios poder ver una lista de todos los jugadores del Fifa, a su vez, pueden filtrar por nombre, club, posicion. y tambien pueden ver por paginas y descargar un archivo .csv
- **Crear un jugador**: Permite a los usuarios poder crearse como un jugador.
- **Actualizar Jugador**: Parmite a los usuarios poder actualizar un jugador.

## Paquetes utilizados

- **bcrypt**: se uso este paquete para hashear la contraseña del usuario al momento de registrarse.
- **cors**: se uso este paquete para poder conectar mi api con mi aplicacion angular.
- **express-validator**: se uso este paquete para validar las entradas de la req.body.
- **fast-csv**: se uso este paquete para implementar la descarga de un archivo en formato .csv.
- **jsonwebtoken**: se uso este paquete para generar un jwt de acceso a mi aplicacion.
- **sequelize**: se uso este paquete orm para tener acceso a mi base de datos.

## requerimiento para el funcionamiento

- [Node.js](https://nodejs.org/) (versión recomendada: 14.x o superior)

## DEV

1. Clonar el repositorio.
2. Crear un archivo `.env` basado en `.env.template`
3. Ejecutar el comando `npm install`.
4. Ejecutar el comando `node index.js` para levantar el proyecto.


// Desestructuramos Router de Express
const { Router } = require('express'); 
const { 
    usuariosGet, 
    usuariosPost, 
    usuariosPut, 
    usuariosPatch,
    usuariosDelete 
} = require('../controllers/usuarios');

const router = Router(); // llamamos a la funcion

router.get('/', usuariosGet); // Llamamos al controlador

router.post('/', usuariosPost);

router.put('/:id', usuariosPut);

router.patch('/', usuariosPatch);

router.delete('/', usuariosDelete);

module.exports = router; // exportamos router
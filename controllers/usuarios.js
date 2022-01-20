

const usuariosGet = (req, res) => {

    const { user, msg, pkey, limit = 10} = req.query;
    res.json({
        name: 'Cesar',
        age: 44,
        work: 'technician',
        user,
        msg,
        pkey,
        limit
    })
    
};

const usuariosPost = (req, res) => {
    //const body  = req.body; Se puede limpiar lo que recupero 
    const { nombre, edad } = req.body;
    res.json({
        msg: 'Prueba de Post',
        nombre,
        edad
    })
};

const usuariosPut = (req, res) => {

    const { id } = req.params;
    res.json({
        msg: 'Prueba de Put',
        id
    })
};

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'Prueba de Patch'
    })
};

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'Prueba de Delete'
    })
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}
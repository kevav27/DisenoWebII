const indexCtrl ={};

indexCtrl.renderIndex = (req,res) => {
    res.render('index')
} 

indexCtrl.renderBitacorasConsultas = (req,res) => {
    res.render('bitacorasConsultas')
} 

indexCtrl.renderBitacorasRegistro = (req,res) => {
    res.render('bitacorasRegistro')
} 


indexCtrl.renderBodega = (req,res) => {
    res.render('bodegas')
} 

indexCtrl.renderCamiones = (req,res) => {
    res.render('camiones')
} 

indexCtrl.renderClientes = (req,res) => {
    res.render('clientes')
} 

indexCtrl.renderClientesConsultas = (req,res) => {
    res.render('clientesConsultas')
} 

indexCtrl.renderConfirmarOrden = (req,res) => {
    res.render('confirmarOrden')
} 

indexCtrl.renderConsecutivos = (req,res) => {
    res.render('consecutivos')
} 


indexCtrl.renderCrearOrden = (req,res) => {
    res.render('crearOrden')
} 

indexCtrl.renderEventos = (req,res) => {
    res.render('eventos')
} 

indexCtrl.renderInventario = (req,res) => {
    res.render('inventario')
} 

indexCtrl.renderMateriaPrima = (req,res) => {
    res.render('materiaPrima')
} 

indexCtrl.renderParametros = (req,res) => {
    res.render('parametros')
} 

indexCtrl.renderPedidosPendientesConsultas = (req,res) => {
    res.render('pedidosPendientesConsultas')
} 

indexCtrl.renderProduccionLote = (req,res) => {
    res.render('produccionLote')
} 
indexCtrl.renderProductos = (req,res) => {
    res.render('productos')
} 

indexCtrl.renderProveedores = (req,res) => {
    res.render('proveedores')
} 

indexCtrl.renderPuntoVenta = (req,res) => {
    res.render('puntoVenta')
} 

indexCtrl.renderRoles = (req,res) => {
    res.render('roles')
} 

indexCtrl.renderTiposMateriaPrima = (req,res) => {
    res.render('tiposMateriaPrima')
} 

indexCtrl.renderUsuarios = (req,res) => {
    res.render('usuarios')
} 

indexCtrl.renderLogin = (req,res) =>{
    res.render('login')
}

indexCtrl.renderRegistro = (req,res) =>{
    res.render('registro')
}

indexCtrl.renderError = (req,res) =>{
    res.render('error')
}





module.exports = indexCtrl;


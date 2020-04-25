const { Router } = require('express')
const router = Router();

const { renderIndex, renderBitacorasConsultas, renderBitacorasRegistro, renderBodega,renderCamiones, renderClientes, renderClientesConsultas, renderConfirmarOrden,renderConsecutivos, renderCrearOrden, renderEventos, renderInventario, renderMateriaPrima, renderParametros, renderPedidosPendientesConsultas, renderProduccionLote, renderProductos, renderProveedores,renderPuntoVenta, renderRoles,renderTiposMateriaPrima, renderUsuarios,renderLogin,renderRegistro, renderError} = require('../controllers/index.controller')

router.get('/', renderIndex);

router.get('/bitacorasConsultas', renderBitacorasConsultas);

router.get('/bitacorasRegistro', renderBitacorasRegistro);

router.get('/bodegas', renderBodega);

router.get('/camiones', renderCamiones);

router.get('/clientes', renderClientes);

router.get('/clientesConsultas', renderClientesConsultas);

router.get('/consecutivos', renderConsecutivos);

router.get('/confirmarOrden', renderConfirmarOrden);

router.get('/crearOrden', renderCrearOrden);

router.get('/eventos', renderEventos);

router.get('/inventario', renderInventario);

router.get('/materiaPrima', renderMateriaPrima);

router.get('/parametros', renderParametros);

router.get('/pedidosPendientesConsultas', renderPedidosPendientesConsultas);

router.get('/produccionLote', renderProduccionLote);

router.get('/productos', renderProductos);

router.get('/proveedores', renderProveedores);

router.get('/puntoVenta', renderPuntoVenta);

router.get('/roles', renderRoles);

router.get('/tiposMateriaPrima', renderTiposMateriaPrima);

router.get('/usuarios', renderUsuarios);

router.get('/login', renderLogin);

router.get('/registro', renderRegistro);

router.get('/error', renderError);



renderConfirmarOrden

module.exports = router;
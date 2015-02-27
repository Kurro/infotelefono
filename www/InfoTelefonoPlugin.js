var ejecutar = require('cordova/exec');

var invocarNativo = function(exito, fracaso) 
    ejecutar(exito, fracaso, 'infotelefonoplugin',
             'GET_IDENTIFICACION', []);
};

var plugin = {};
plugin.obtenerInformacion = invocarNativo;

module.exports = plugin; //es el return de este modulo
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Carro = (function () {
    function Carro(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.color = "Blanco";
        this.velocidad = 0;
        if (modelo == null) {
            this.modelo = "BMW Generico";
        }
        else {
            this.modelo = modelo;
        }
    }
    Carro.prototype.getModelo = function () {
        return this.modelo;
    };
    Carro.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    return Carro;
}());
var autoUno = (function (_super) {
    __extends(autoUno, _super);
    function autoUno() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    autoUno.prototype.getAllData = function () {
        return this.getModelo();
    };
    return autoUno;
}(Carro));
var auto = new autoUno("Renalt Cio");
console.log("El auto es de modelo : " + auto.getAllData());

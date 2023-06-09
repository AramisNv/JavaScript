class trabajador {
    nombre = "";
    edad = 0;
    rfc = "";
    diasTrabajados = 0;
    sueldoPorDia = 156.78;


    //Constructor
    constructor(nombre, edad, rfc, diasTrabajados, sueldoPorDia) {
        this.nombre = nombre;
        this.edad = edad;
        this.rfc = rfc;
        this.diasTrabajados = diasTrabajados;
        this.sueldoPorDia = sueldoPorDia;
    }

    //Metodos
    imprimirInfo() {
        console.log("Nombre de empleado", this.nombre);
        console.log("La edad del empleado es", this.edad ,"años");
        console.log("Su rfc es", this.rfc);
        console.log("Dias trabajador por el empleado", this.diasTrabajados);
        console.log("Sueldo por dia es", this.sueldoPorDia);
        console.log (this.salarioQuincenal);
        console.log (this.salarioMensual);
        console.log (this.salarioMensuaLibreDeImpuesto);

    };
    nominaQuincena() {
     let bruto = (156.78 * this.diasTrabajados);
     let isr = 
    }
    calcularSalarioMensual() {
        const salarioMensual = this.sueldoPorDia * 30;
        console.log("Su salario por mes es", salarioMensual)

    }
    calcularSalarioMensuaLibreDeImpuesto() {
        const salarioMensual = this.calcularSalarioMensual();
        const descuentoImpuesto = salarioMensual * 0.31;
        const salarioMensualLibreDeImpuestos = salarioMensual - descuentoImpuesto;
        console.log("Su sueldo fuera de impuesto es ", salarioMensualLibreDeImpuestos
        )

    }
}
//instanciar
let damian = new trabajador("Damian", 29, "Dmi2130134", 15, 156.78,)
let yoshua = new trabajador("Yoshua", 31, "YnMi1234", 30, 156.78);
let paola = new trabajador("Paola", 36, "NMASF34321", 17, 156.78);
let aaron = new trabajador("Aaron", 33, "OHR23145", 29, 156.78);
let humberto = new trabajador("Humberto", 34, "HMO9466", 12, 156.78)

damian.imprimirInfo();
yoshua.imprimirInfo();
paola.imprimirInfo();
aaron.imprimirInfo();
humberto.imprimirInfo();
 

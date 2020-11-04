
const {crearArchivo,imprimirTabla}=require('./multiplicar/multiplicar.js')
const yarg=require('./config/yargs').argv;


let comando =yarg._[0];

switch(comando){
    case 'crear':
        crearArchivo(yarg.base,argv.limite)
.then(mensaje=> {
    console.log(mensaje);
}).catch(e =>{
    console.log(e);
});
break
case 'imprimir':
    imprimirTabla(yarg.base,argv.limite).catch(e=>{
        console.log(e);
    })
    break;
}

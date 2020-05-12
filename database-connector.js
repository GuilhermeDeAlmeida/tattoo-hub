// var orm = require("orm");

// orm.connect("mysql://test:test@localhost/text", function (err, db) {
//   // db is now available to use! ^__^
//   // var Cultivo = Cultivo(db) ;
//   var Cultivo = db.define("cultivo", {
//     imagem: String,
//     nome: String,
//     ciclos: [],
//   });
  

//   var Ciclo= db.define("ciclo", {
//     nome: String,
//     duracao: Number,
//     ideais: controladoresCadastrados,
//     estadoAtualEstufa, controladoresAgora
//   });


//   var Periodo = db.define("periodo", {
//     nome: String,
//     //hasmany
//     descricao: [descricoes],
//   });

//   var Descricao = db.define("descricao", {
//     inicio: Date,
//     fim: Date,
//     controladores: []
//   });

//   var Controlador = db.define("controlador", {
//     nome: String,
//     valorAdequado: Number,
//     valorAtual: Number,
//     atuador: String
//   });

//   var Atuador = db.define("atuador", {
//     nome: String,
//     estado: Boolean,
//     iconOn: String,
//     iconOff: String,
//   });



// });

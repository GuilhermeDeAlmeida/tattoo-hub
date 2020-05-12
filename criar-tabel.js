var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  database: "alphagrow",
  user: "alphagrow",
  password: "alphagrow",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE cultivos (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

function guilherme() {
  return {
    imagem: "imagem do Feijão",
    nome: "Feijão",
    ciclos: ciclos(),
  };
}

function ciclos(){
    return [
        //germinacao
    {
        nome: "Germinacão",
        duracao: 1,
        ideais: ideais(),
        estadoAtualEstufa, estadoAtualEstufa()
      },
      //frutificação
      {
        nome: "Frutificação",
        duracao: 1,
        ideais: ideais(),
        estadoAtualEstufa, estadoAtualEstufa()
      },
    ];
}

function controlador1(){
    return {
        controlador: "Temperatura",
        valorAdequado: "30º",
        valorAtual: "33º",
        atuador: atuador1()
      }
}

function atuador1(){
    return {
        nome: "Ventilação",
        estado: false,
        iconeOn: "on",
        iconeOff: "off",
      }
}

function controlador2(){
    return {
        controlador: "Humidade",
        valorAdequado: "36%",
        valorAtual: "33%",
        atuador: atuador2()
      }
}

function atuador2(){
    return {
        nome: "Borrifador",
        estado: false,
        iconeOn: "on",
        iconeOff: "off"
      }
}
function periodo1(){
    return {
        nome: "manha", 
        descricao:descricao1() 
    }
}

function descricao1(){
    return {
        inicio: "06:00",
        fim: "13:00",
        controladores: [
        controlador1(),
        controlador2(),]
    }
}

function periodo2(){
    return {
        nome: "Tarde", 
        descricao:descricao2() 
    }
}

function descricao2(){
    return {
        inicio: "13:00",
        fim: "18:00",
        controladores: [
        controlador1(),
        controlador2(),]
    }
}

function periodo3(){
    return {
        nome: "Noite", 
        descricao:descricao3() 
    }
}

function descricao3(){
    return {
        inicio: "18:00",
        fim: "0:00",
        controladores: [
        controlador1(),
        controlador2(),]
    }
}

function periodo4(){
    return {
        nome: "Madrugada", 
        descricao:descricao4() 
    }
}

function descricao4(){
    return {
        inicio: "00:00",
        fim: "06:00",
        controladores: [
        controlador1(),
        controlador2(),]
    }
}

function ideais() {
  return [ periodo1(), periodo2(), periodo3(), periodo4()]
    
}
function estadoAtualEstufa() {
    
}

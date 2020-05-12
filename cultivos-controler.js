var express = require("express");
var cultivoService = require("./cultivos-service");

var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Toda vez que for usado vai chamar isso");
  console.log("Time: ", Date.now());
  next();
});
// define the home page route
router.get("/", function (req, res) {
  console.log("Lista que está devolvendo: ", listaDeCultivos());
  res.json(listaDeCultivos());
});

router.get("/test", function (req, res) {
  res.json(test());
});

function listaDeCultivos() {
  return {
    plantacoes: [
      //lista de plantacoes
      //cada objeto é uma plantacao
      {
        //dentro de cada plantacao existem varios
        cultivos: [
          {
            imagem: "imagem do Feijão",
            nome: "Feijão",
            ciclos: listaDeCiclos(),
          },
          {
            imagem: "imagem do Feijão",
            nome: "Feijão",
            ciclos: listaDeCiclos(),
          },
          {
            imagem: "imagem do Feijão",
            nome: "Feijão",
            ciclos: listaDeCiclos(),
          },
        ],
      },
      {
        cultivos: [
          {
            imagem: "imagem do Feijão",
            nome: "Feijão",
            ciclos: listaDeCiclos(),
          },
          {
            imagem: "imagem do Feijão",
            nome: "Feijão",
            ciclos: listaDeCiclos(),
          },
          {
            imagem: "imagem do Feijão",
            nome: "Feijão",
            ciclos: listaDeCiclos(),
          },
        ],
      },
      {
        cultivos: [
          {
            imagem: "imagem do Feijão",
            nome: "Feijão",
            ciclos: listaDeCiclos(),
          },
          {
            imagem: "imagem do Feijão",
            nome: "Feijão",
            ciclos: listaDeCiclos(),
          },
          {
            imagem: "imagem do Feijão",
            nome: "Feijão",
            ciclos: listaDeCiclos(),
          },
        ],
      },
      {
        cultivos: [
          {
            imagem: "imagem do Feijão",
            nome: "Feijão",
            ciclos: listaDeCiclos(),
          },
          {
            imagem: "imagem do Feijão",
            nome: "Feijão",
            ciclos: listaDeCiclos(),
          },
          {
            imagem: "imagem do Feijão",
            nome: "Feijão",
            ciclos: listaDeCiclos(),
          },
        ],
      },
      {
        cultivos: [
          {
            imagem: "imagem do Feijão",
            nome: "Feijão",
            ciclos: listaDeCiclos(),
          },
          {
            imagem: "imagem do Feijão",
            nome: "Feijão",
            ciclos: listaDeCiclos(),
          },
          {
            imagem: "imagem do Feijão",
            nome: "Feijão",
            ciclos: listaDeCiclos(),
          },
        ],
      },
    ],
  };
}

function listaDeCiclos() {
  return [
    //germinacao
    {
      nome: "Germinacão",
      duracao: 1,
      ideais: {
        manha: {
          inicio: "06:00",
          fim: "13:00",
          controladores: [
            {
              controlador: "Temperatura",
              valorAdequado: "30º",
              valorAtual: "33º",
              atuador: {
                nome: "Ventilação",
                estado: false,
                iconeOn: "on",
                iconeOff: "off",
              },
            },
            {
              controlador: "Humidade",
              valorAdequado: "36%",
              valorAtual: "33º",
              atuador: {
                nome: "Borrifador",
                estado: false,
                iconeOn: "on",
                iconeOff: "off",
              },
            },
          ],
        },
        tarde: {
          inicio: "13:00",
          fim: "18:00",
          controladores: [
            {
              controlador: "Temperatura",
              valorAdequado: "30º",
              valorAtual: "33º",
              atuador: {
                nome: "Ventilação",
                estado: false,
                iconeOn: "on",
                iconeOff: "off",
              },
            },
            {
              controlador: "Humidade",
              valorAdequado: "36%",
              valorAtual: "33º",
              atuador: {
                nome: "Borrifador",
                estado: false,
                iconeOn: "on",
                iconeOff: "off",
              },
            },
          ],
        },
        noite: {
          inicio: "18:00",
          fim: "0:00",
          controladores: [
            {
              controlador: "Temperatura",
              valorAdequado: "30º",
              valorAtual: "33º",
              atuador: {
                nome: "Ventilação",
                estado: false,
                iconeOn: "on",
                iconeOff: "off",
              },
            },
            {
              controlador: "Humidade",
              valorAdequado: "36%",
              valorAtual: "33º",
              atuador: {
                nome: "Borrifador",
                estado: false,
                iconeOn: "on",
                iconeOff: "off",
              },
            },
          ],
        },
        madrugada: {
          inicio: "00:00",
          fim: "06:00",
          controladores: [
            {
              controlador: "Temperatura",
              valorAdequado: "30º",
              valorAtual: "33º",
              atuador: {
                nome: "Ventilação",
                estado: false,
                iconeOn: "on",
                iconeOff: "off",
              },
            },
            {
              controlador: "Humidade",
              valorAdequado: "36%",
              valorAtual: "33º",
              atuador: {
                nome: "Borrifador",
                estado: false,
                iconeOn: "on",
                iconeOff: "off",
              },
            },
          ],
        },
      },
    },
    //frutificação
    {
      nome: "Frutificação",
      duracao: 1,
      ideais: {
        manha: {
          inicio: "06:00",
          fim: "13:00",
          controladores: [
            {
              controlador: "Temperatura",
              valorAdequado: "30º",
              valorAtual: "33º",
              atuador: {
                nome: "Ventilação",
                estado: false,
                iconeOn: "on",
                iconeOff: "off",
              },
            },
            {
              controlador: "Humidade",
              valorAdequado: "36%",
              valorAtual: "33º",
              atuador: {
                nome: "Borrifador",
                estado: false,
                iconeOn: "on",
                iconeOff: "off",
              },
            },
          ],
        },
        tarde: {
          inicio: "13:00",
          fim: "18:00",
          controladores: [
            {
              controlador: "Temperatura",
              valorAdequado: "30º",
              valorAtual: "33º",
              atuador: {
                nome: "Ventilação",
                estado: false,
                iconeOn: "on",
                iconeOff: "off",
              },
            },
            {
              controlador: "Humidade",
              valorAdequado: "36%",
              valorAtual: "33º",
              atuador: {
                nome: "Borrifador",
                estado: false,
                iconeOn: "on",
                iconeOff: "off",
              },
            },
          ],
        },
        noite: {
          inicio: "18:00",
          fim: "0:00",
          controladores: [
            {
              controlador: "Temperatura",
              valorAdequado: "30º",
              valorAtual: "33º",
              atuador: {
                nome: "Ventilação",
                estado: false,
                iconeOn: "on",
                iconeOff: "off",
              },
            },
            {
              controlador: "Humidade",
              valorAdequado: "36%",
              valorAtual: "33º",
              atuador: {
                nome: "Borrifador",
                estado: false,
                iconeOn: "on",
                iconeOff: "off",
              },
            },
          ],
        },
        madrugada: {
          inicio: "00:00",
          fim: "06:00",
          controladores: [
            {
              controlador: "Temperatura",
              valorAdequado: "30º",
              valorAtual: "33º",
              atuador: {
                nome: "Ventilação",
                estado: false,
                iconeOn: "on",
                iconeOff: "off",
              },
            },
            {
              controlador: "Humidade",
              valorAdequado: "36%",
              valorAtual: "33º",
              atuador: {
                nome: "Borrifador",
                estado: false,
                iconeOn: "on",
                iconeOff: "off",
              },
            },
          ],
        },
      },
    },
  ];
}

function test() {
  return cultivoService.cultivos();
}
// {
// nome: 'Ana Paula',
// foto: 'Uma foto bem bonita',
// idade: 23,
// insta: 'guizao_f',
// nivel: 10,
// chata: 0,
// fuma: true,
// ondeMora: 'Diadema'
// },
module.exports = router;

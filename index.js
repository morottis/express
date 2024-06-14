const express = require("express");
const app = express();
var cors = require("cors");
var prova = 2;

var bodyParser = require("body-parser");
app.use(bodyParser.json()); // parsa il body delle richieste

app.use(cors()); // aggiungere variabile contatore che somma

let cont = 0;
app.get("/", (req, res) => {
  // uso il punto get per una songola chimata non posso usare piu .send
  res.contentType("application/json");
  res.send({ nome: "Luca", cognome: "picc" });
});

app.get("/cont", (req, res) => {
  // uso il punto get per una songola chimata non posso usare piu .send
  res.contentType("application/json");
  res.app;
  res.send({ cont });
});

/*app.post('/', (req, res) => {
    //usare req per prendere dati che arrivanpo dal body 
    res.contentType("application/json"); 
    res.send(
      {nome : 'hggjgjhgjh'}
    )
  })*/

app.post("/cont", (req, res) => {
  res.contentType("application/json");
  let valore = req.body;
  let feedback ; 
  console.log(req.headers.authorization); // cosi l' eggo l' autorizzazione in modo poi da poterla modeficarla
  /*valore.nomignolo = 'fff';*/
  console.log(req.headers.origin); 
  if (req.headers.authorization == 'autorizzazione 12') {
    console.log(valore);
    if (valore.operatore == "add") {
      console.log("sommo");
      cont += valore.numero;
    } else if (valore.operatore == "sub") {
      console.log("sottraggo");
      cont -= valore.numero;
    } else {
      console.log(" hai sbagliato operatore");
    }
    feedback = ' tutto é andato a buon fine '; 
    res.send({ cont  , feedback});
  }
  else
  {
    feedback= ' non e andato a buon fine autorizzazione sbagliata '; 
    res.send({feedback});
  } 
  //else {
    //res.send(' autorizzazione non acettatta sbagliata prova a inserirne un alktra '); 
  //}
});

app.post("/", (req, res) => {
  res.contentType("application/json");
  let valore = req.body;
  valore.nomignolo = "fff";
  console.log(valore);
  res.send(valore);
});

app.listen(3000);
// oppure
/*
  app.listen(port, () => console.log(`Hello world app listening on port ${port}`))
  */

function saveData(){
  notas = document.getElementById("notas").value;

  localStorage.setItem("vida-actual",vida);
  localStorage.setItem("mana-actual",mana);
  localStorage.setItem("energia-actual",energia);
  localStorage.setItem("notas-equinox",notas);
}

function loadData(){
let v = Number.parseInt(localStorage.getItem("vida-actual"));
let m = Number.parseInt(localStorage.getItem("mana-actual"));
let e = Number.parseInt(localStorage.getItem("energia-actual"));
let n = localStorage.getItem("notas-equinox");

vida = v;
mana = m;
energia = e;
document.getElementById("notas").value = n;
}
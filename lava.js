function randomPick(myArray) {
  if (Array.isArray(myArray)) {
    return myArray[Math.floor(Math.random() * myArray.length)];
  }
  return myArray;
}

const phrases = [
  [ "El azul es lava" ],
  [ "El rosa es lava" ],
  [ "El amarillo es lava" ],
  [ "El naranja es lava" ],
  [ "Todo menos el rojo es lava" ],
  [ "Todo menos el verde es lava" ],
  [ "Todo menos el azul es lava" ],
  [ "Todo menos el rosa es lava" ],
  [ "Todo menos el amarillo es lava" ],
  [ "Todo menos el naranja es lava" ],
  [ "Todo menos el sofá es lava" ],
  [ "Todo menos la C de ", ["coche", "casa", "camión", "carbón", "correr", "Carmen", "Carla", "cuento"], " es lava" ],
  [ "Todo menos la F de ", ["fiesta", "foca", "Francia", "farola", "figura", "flamenco", "fuente"], " es lava" ],
  [ "Todo menos la G de ", ["gato", "guante", "golondrina", "guisantes", "gorro", "gusano", "gigante", "garaje", "girar"], " es lava" ],
  [ "Todo menos la I de ", ["indio", "Izan", "Italia", "iguana", "imagen", "imán", "isla", "iglú", "internet"], " es lava" ],
  [ "Todo menos la K de ", ["kilo", "kiwi", "koala", "karate", "kimono"], " es lava" ],
  [ "Todo menos la L de ", ["luna", "Logroño", "lentejas", "lince", "lengua", "linterna", "lupa", "loro"], " es lava" ],
  [ "Todo menos la M de ", ["mamá", "mono", "marte", "mercurio", "mano", "Mario", "manzana"], " es lava" ],
  [ "Todo menos la N de ", ["navidad", "nuez", "noviembre", "naranja", "noche", "nevera", "Nuria"], " es lava" ],
  [ "Todo menos la P de ", ["pera", "plátano", "papa", "Pepito", "pepino", "puerta", "pared", "pierna", "parking", "piano", "pie", "pelotas"], " es lava" ],
  [ "Todo es lava menos la O de ", ["oso", "otoño", "Óscar", "Óliver", "oreja", "oro", "octubre"] ],
  [ "Todo es lava menos la S de ", ["siesta", "soñar", "saturno", "sábado", "septiembre", "saltar", "serpiente"] ],
  [ "Todo es lava menos la V de ", ["viernes", "vaso", "Venus", "vacaciones", "verde", "viajar", "verano", "verdura", "viento"] ],
  [ "Todo es lava menos la W" ],
  [ "Todo es lava menos la Z de ", ["zorro", "zapato", "zueco", "zapatilla", "zoo", "zapatero", "zumo", "zanahoria", "zanco"] ],
  [ "Todo es lava menos la A de ", ["árbol", "abrazo", "anillo", "abeja", "Ander", "andar", "arena", "arte", "amigos"] ],
  [ "Todo es lava menos las vocales" ],
  [ "Todo es lava menos los numeros" ],
  [ "El azul y el verde son lava" ],
  [ "El verde, el naranja y el rojo son lava" ],
  [ "El rojo, el naranja y el azul son lava" ],
  [ "El naranja y el rojo son lava" ],
  [ "Todo es lava menos las consonantes" ],
  [ "Las consonantes son lava" ],
  [ "Todo es lava menos las sillas" ],
  [ "Los numeros son lava" ]
];
if ("speechSynthesis" in window) {
  // (A) GET HTML ELEMENTS
  let demo = document.getElementById("demoB"),
      vlist = document.getElementById("demoB-voice"),
      vgo = document.getElementById("demoB-go");

  // (B) POPULATE AVAILABLE VOICES
  // CHROME LOADS VOICES ASYNCHRONOUSLY
  // THUS THIS "STUPID" WAY TO ATTACH AVAILABLE VOICES
  var voices = () => {
    speechSynthesis.getVoices().forEach((v, i) => {
      let opt = document.createElement("option");
      opt.value = i;
      opt.innerHTML = v.name;
      vlist.appendChild(opt);
    });
  };
  voices();
  speechSynthesis.onvoiceschanged = voices;

  // (C) SPEAK
  const speak = (n) => {
    let msg = new SpeechSynthesisUtterance();
    msg.lang = "es";
    msg.voice = speechSynthesis.getVoices()[vlist.value];
    msg.rate = Math.random() * (0.5) + 0.9;

    randomPhrase = "";
    let randomPhraseGen = randomPick(phrases);
    for (element of randomPhraseGen) {
      randomPhrase += randomPick(element);
    }
    let countDown = randomPick([". 3, 2; 1; 0.", ". 3, 2, 1, 0.", ". 4, 3, 2, 1, 0.", ". 5, 4, 3, 2, 1, 0."]);
    msg.text = randomPhrase + countDown;
    speechSynthesis.speak(msg);

      if (n > 0) {
      setTimeout(() => speak(n - 1), Math.random() * 7000 + 3000);
    }
    return false;
  };

  // (D) ENABLE FORM
  demo.onsubmit = () => speak(1000);
  vlist.disabled = false;
  vgo.disabled = false;
}

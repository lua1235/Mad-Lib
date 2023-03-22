
async function update() {
    let pNoun = document.getElementById("plural").value
    let Adj = document.getElementById("Adjin").value
    let Ptv = document.getElementById("PTVin").value
    let Noun = document.getElementById("Nin").value
    let Adv = document.getElementById("Advin").value
    let Pron = document.getElementById("Proin").value
    let Loc = document.getElementById("Locin").value
    console.log(pNoun)
    document.getElementById("PN").innerHTML = pNoun;
    document.getElementById("Adj").innerHTML = Adj;
    document.getElementById("PTV").innerHTML = Ptv;
    document.getElementById("Noun").innerHTML = Noun;
    document.getElementById("Ntwo").innerHTML = pNoun;
    document.getElementById("Adv").innerHTML = Adv;
    document.getElementById("Loc").innerHTML = Loc;
    document.getElementById("Pro").innerHTML = Pron;

}
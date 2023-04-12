document.getElementById("sub").addEventListener("click", update);
function test() {
    let test = document.getElementById("test").value;
    console.log(test)
}
function update() {
    console.log("test")
    let pNoun = document.getElementById("plural").value;
    let Adj = document.getElementById("adjective").value;
    let Ptv = document.getElementById("presentverb").value;
    let Noun = document.getElementById("noun").value;
    let Adv = document.getElementById("adverb").value;
    let Pron = document.getElementById("pronoun").value;
    let Loc = document.getElementById("location").value;
    
    console.log(pNoun)
    console.log(Adj)
    console.log(Ptv)
    console.log(Noun)
    console.log(Adv)
    console.log(Pron)
    document.getElementById("PN").innerHTML = pNoun;
    document.getElementById("Adj").innerHTML = Adj;
    document.getElementById("PTV").innerHTML = Ptv;
    document.getElementById("Noun").innerHTML = Noun;
    document.getElementById("Ntwo").innerHTML = pNoun;
    document.getElementById("Adv").innerHTML = Adv;
    document.getElementById("Loc").innerHTML = Loc;
    document.getElementById("Pro").innerHTML = Pron;
}
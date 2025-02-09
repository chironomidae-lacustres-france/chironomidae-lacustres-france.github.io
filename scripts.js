function searchTaxon() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var pages = {
        "prodiamesa": "prodiamesa_olivacea.html",
        "odontomesa": "odontomesa_fulva.html",
        "monodiamesa": "monodiamesa.html",
        "corynoneura": "corynoneura.html",
        "smittia": "smittia.html",
        "pseudosmittia": "pseudosmittia.html",
        "metriocnemus": "metriocnemus.html",
        "heterotanytarsus": "heterotanytarsus.html",
        "propsilocerus": "propsilocerus.html",
        "epoicocladius": "epoicocladius.html",
        "rheocricotopus": "rheocricotopus.html",
        "synorthocladius": "synorthocladius.html",
        "psectrocladius": "psectrocladius.html",
        "paracladius": "paracladius.html",
        "acricotopus": "acricotopus.html",
        "parorthocladius" : "parorthocladius.html",
        "chaetocladius" : "chaetocladius.html",
        "nanocladius" : "nanocladius.html",
        "parakiefferiella" : "parakiefferiella.html",
        "hydrobaenus" : "hydrobaenus.html",
        "bryophaenocladius": "bryophaenocladius.html",
        "parametriocnemus" : "parametriocnemus.html",
        "heterotrissocladius" : "heterotrissocladius.html",
        "brillia" : "brillia.html",
        "eukiefferiella" : "eukiefferiella.html",
        "thienemanniella" : "thienemanniella.html",
        "cricotopus" : "cricotopus_orthocladius_paratrichocladius.html",
        "orthocladius" : "cricotopus_orthocladius_paratrichocladius.html",
        "paratrichocladius" : "cricotopus_orthocladius_paratrichocladius.html",
        "euorthocladius" : "euorthocladius.html",
        "pseudorthocladius" : "pseudorthocladius.html",
        "paratrissocladius" : "paratrissocladius.html",
        "paralimnophyes" : "paralimnophyes.html",
        "limnophyes" : "limnophyes.html",
        "chironomus" : "chironomus.html",
        "cladopelma" : "cladopelma.html",
        "cryptochironomus" : "cryptochironomus.html",
        "cryptotendipes" : "cryptotendipes.html",
        "demicryptochironomus" : "demicryptochironomus.html",
        "dicrotendipes" : "dicrotendipes.html",
        "einfeldia" : "einfeldia.html",
        "endochironomus" : "endochironomus.html",
        "endochironomus tendens" : "endochironomus_tendens.html",
        "fleuria" : "fleuria_lacustris.html",
        "fleuria lacustris" : "fleuria_lacustris.html",
        "glyptotendipes" : "glyptotendipes.html",
        "harnischia" : "harnischia.html",
        "kiefferulus" : "kiefferulus_tendipediformis.html",
        "kiefferulus tendipediformis" : "kiefferulus_tendipediformis.html",
        "lauterborniella" : "lauterborniella.html",
        "microtendipes" : "microtendipes.html",
        "microtendipes rydalensis" : "microtendipes_rydalensis.html",
        "nilothauma" : "nilothauma_brayi.html",
        "nilothauma brayi" : "nilothauma_brayi.html",
        "pagastiella orophila" : "pagastiella_orophila.html",
        "pagastiella" : "pagastiella_orophila.html",
        "parachironomus" : "parachironomus.html",
        "paracladopelma" : "paracladopelma.html",
        "paralauterborniella nigrohalteris" : "paralauterborniella_nigrohalteris.html",
        "paratendipes" : "paratendipes.html",
        "phaenopsectra" : "phaenopsectra.html",
        "polypedilum" : "polypedilum.html",
        "sergentia" : "sergentia.html",
        "stenochironomus" : "stenochironomus.html",
        "tribelos" : "tribelos_intextus.html",
        "tribelos intextus" : "tribelos_intextus.html",
        "stictochironomus" : "stictochironomus.html",
        "xenochironomus" : "xenochironomus_xenolabis.html",
        "xenochironomus xenolabis" : "xenochironomus_xenolabis.html",
        "zavreliella marmorata" : "zavreliella_marmorata.html",
        "zavreliella" : "zavreliella_marmorata.html",
        "ablabesmyia" : "ablabesmyia.html",
        "apsectrotanypus" : "apsectrotanypus.html",
        "clinotanypus" : "clinotanypus.html",
        "guttipelopia" : "guttipelopia.html",
        "krenopelopia" : "krenopelopia.html",
        "labrundinia" : "labrundinia.html",
        "larsia" : "larsia.html",
        "macropelopia" : "macropelopia.html",
        "monopelopia" : "monopelopia.html",
        "natarsia" : "natarsia.html",
        "paramerina" : "paramerina.html",
        "pentaneurella" : "pentaneurella.html",
        "procladius" : "procladius.html",
        "psectrotanypus" : "psectrotanypus.html",
        "tanypus" : "tanypus.html",
        "telopelopia" : "telopelopia.html",
        "thienemannimyia (groupe)" : "thienemannimyia_groupe.html",
        "thienemannimyia_groupe" : "thienemannimyia_groupe.html",
        "thienemannimyia groupe" : "thienemannimyia_groupe.html",
        "thienemannimyia" : "thienemannimyia.html",
        "conchapelopia" : "conchapelopia.html",
        "rheopelopia" : "rheopelopia.html",
        "arctopelopia" : "arctopelopia.html",
        "trissopelopia" : "trissopelopia.html",
        "xenopelopia" : "xenopelopia.html",
        "zavrelimyia" : "zavrelimyia.html",
        "cladotanytarsus" : "cladotanytarsus.html",
        "constempellina" : "constempellina.html",
        "micropsectra" : "micropsectra.html",
        "micropsectra bidentata" : "micropsectra_bidentata.html",
        "neostempellina" : "neostempellina.html",
        "neozavrelia" : "neozavrelia.html",
        "paratanytarsus" : "paratanytarsus.html",
        "paratanytarsus austriacus" : "paratanytarsus_austriacus.html",
        "stempellina" : "stempellina.html",
        "stempellinella": "stempellinella.html",
        "tanytarsus" : "tanytarsus.html",
        "virgatanytarsus" : "virgatanytarsus.html",
        "zavrelia" : "zavrelia.html"
        




        // Ajoutez ici tous les taxons avec leur fichier HTML correspondant (attentention ici mettre le nom du taxon en minuscule)
    };

    if (pages[input]) {
        window.location.href = pages[input];
    } else {
        alert("Taxon inexistant ou mal orthographié, veuillez réessayer.");
    }
}

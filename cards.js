// TYPES ===============================================
// 0 - basic (non-ring based - backstage compatible)
// 1 - basic (ring base - ropes, turnbuckle, apron)
// 2 - entrance
// 3 - finisher
// 4 - blood (if someone bleeds)
// 5 - ladder (if ladder is set)
// 6 - table (if table is set)
// 7 - tag team
// 8 - pre-blood (??)
// 9 - pre-ladder 
// 10 - pre-table
// 11 - ladder (if ladder match - to win)
// 12 - cage
// 13 - items (no-dq)
// 14 - items (hardcore)
// 15 - elimination (battle royal)
// 16 - backstage
//
// 101 - za duży skill
// 102 - za mały skill 
// 103 - za duża chemia 
// 104 - za niska chemia 
// 105 - za duża brutalność
// 106 - za niska brutalność 
// 107 - za duża przewaga
// 108 - za niska przewaga
// 109 - wygrana przez finisher
// 110 - wygrana przez first blood match
// 111 - wygrana przez ladder match 
// 112 - wygrana przez table match 
// 113 - wygrana w battle royal
// =====================================================
//
// [  points,  skills,  chemisty,  brutality,  advantage  ]
//
/*
,
{
	text: "",
	left_text: "",
	right_text: "",
	effect: [[0,0,0,0,0],[0,0,0,0,0]],
	type: 0
}
*/
var card_data = [];

function cards_load(){
card_data = [
// ENTRANCE 
{
	text: "Jakie pyro ma być w trakcie wyjścia?",
	left_text: "Wybuch płomieni!",
	right_text: "Kolorowe fajerwerki",
	effect: [[1,0,0,6,0],[1,0,6,0,0]],
	type: 2 
},

{
	text: "Publiczność wystawia ręce do przybicia piątki.",
	left_text: "Zbij piąteczkę",
	right_text: "Ignoruj",
	effect: [[1,0,0,0,6],[1,0,6,0,0]],
	type: 2
},

{
	text: "Idąc do ringu mijasz osobę trzymającą baner '"+player.name+" sucks!'.",
	left_text: "Zignoruj",
	right_text: "Wyrwij mu baner i podrzyj na kawałki",
	effect: [[1,0,0,0,6],[1,0,6,0,0]],
	type: 2
},

{
	text: "Otrzymujesz głośną reakcję od publiczności.",
	left_text: "Pokaż wszystkim środkowy palec",
	right_text: "Klaszcz i dziękuj publice",
	effect: [[1,0,3,3,0],[1,0,0,0,6]],
	type: 2
},

{
	text: "Potykasz się podczas wejścia.",
	left_text: "Udajesz, że nic się nie wydarzyło",
	right_text: "Udajesz, że było to zamierzone",
	effect: [[1,-6,0,0,0],[1,-2,-2,0,2]],
	type: 2
},

// == NEUTRAL + RING ====================================================================================================

// STRIKING ----------------------------

{
	text: "Dostajesz mocny Punch prosto w twarz.",
	left_text: "Sprzedaj dobrze ten cios",
	right_text: "Oddaj przeciwnikowi " + move_data[player.strike[2]].name,
	effect: [[20,0,0,10,-10],move_data[player.strike[2]].effect],
	type: 0
},

{
	text: "Punch Twojego przeciwnika skończył wyjątkowo daleko od Twojej twarzy.",
	left_text: "Mimo to, sprzedaj cios",
	right_text: "Nic nie poczułeś, więc nie reagujesz",
	effect: [[20,10,0,0,-10],[20,-10,-10,0,0]],
	type: 0
},

{
	text: "Zaczynasz wymieniać sie atakami z przeciwnikiem.",
	left_text: move_data[player.strike[0]].name,
	right_text: move_data[player.strike[2]].name,
	effect: [move_data[player.strike[0]].effect,move_data[player.strike[2]].effect],
	type: 0
},

{
	text: "Wymieniasz sie atakami z przeciwnikiem.",
	left_text: move_data[player.strike[1]].name,
	right_text: move_data[player.strike[3]].name,
	effect: [move_data[player.strike[1]].effect,move_data[player.strike[1]].effect],
	type: 0
},

{
	text: "Przypadkiem faktycznie uderzasz rywala w twarz.",
	left_text: "Wykonaj taunt, bo przecież zyskujesz przewagę",
	right_text: "Starasz się pokryjomu go przeprosić",
	effect: [[40,-20,20,0,0],[40,10,-30,0,0]],
	type: 1
},

{
	text: "Podnosisz się z maty, a Twój przeciwnik zaczyna się zbliżać.",
	left_text: "Szybka kontra!",
	right_text: "Daj sie zaatakować",
	effect: [[20,0,10,0,10],[20,0,0,0,-20]],
	type: 1
},


// STANDING ----------------------------

{
	text: "Przechwytujesz przeciwnika w pozycję headlocku.",
	left_text: move_data[player.standing[0]].name,
	right_text: move_data[player.standing[4]].name,
	effect: [move_data[player.standing[0]].effect,move_data[player.standing[4]].effect],
	type: 0
},

{
	text: "Przechwytujesz oponenta w pozycję headlocku.",
	left_text: move_data[player.standing[1]].name,
	right_text: move_data[player.standing[5]].name,
	effect: [move_data[player.standing[1]].effect,move_data[player.standing[5]].effect],
	type: 0
},

{
	text: "Przechwytujesz swojego przeciwnika w headlock.",
	left_text: move_data[player.standing[2]].name,
	right_text: move_data[player.standing[6]].name,
	effect: [move_data[player.standing[2]].effect,move_data[player.standing[6]].effect],
	type: 0
},

{
	text: "Łapiesz przeciwnika headlockiem.",
	left_text: move_data[player.standing[3]].name,
	right_text: move_data[player.standing[7]].name,
	effect: [move_data[player.standing[3]].effect,move_data[player.standing[7]].effect],
	type: 0
},

{
	text: "Przechwytujesz przeciwnika w pozycję wristlocku.",
	left_text: move_data[player.standing[0]].name,
	right_text: move_data[player.standing[2]].name,
	effect: [move_data[player.standing[0]].effect,move_data[player.standing[2]].effect],
	type: 0
},

{
	text: "Łapiesz przeciwnika wristlockiem.",
	left_text: move_data[player.standing[1]].name,
	right_text: move_data[player.standing[3]].name,
	effect: [move_data[player.standing[1]].effect,move_data[player.standing[3]].effect],
	type: 0
},

{
	text: "Przechwytujesz oponenta w pozycję wristlocku.",
	left_text: move_data[player.standing[4]].name,
	right_text: move_data[player.standing[6]].name,
	effect: [move_data[player.standing[4]].effect,move_data[player.standing[6]].effect],
	type: 0
},

{
	text: "Trzymasz oponenta we wristlocku.",
	left_text: move_data[player.standing[5]].name,
	right_text: move_data[player.standing[7]].name,
	effect: [move_data[player.standing[5]].effect,move_data[player.standing[7]].effect],
	type: 0
},

{
	text: "Twój oponent jest w trakcie wykonywania ryzykowniej akcji.",
	left_text: "Sprzedaj to asekuracyjnie i bezpiecznie",
	right_text: "Skoro jest ryzykowne, niech będzie ryzykowne",
	effect: [[35,15,0,-15,-5],[35,-5,10,10,-10]],
	type: 0
},

{
	text: "Zamierzasz wykonać " + move_data[player.standing[5]].name + ", lecz jest ryzyko, że skończy się botchem.",
	left_text: "Wykonujesz akcję bezpiecznie kosztem jakości",
	right_text: "Olać to, zobaczymy co z tego wyniknie!",
	effect: [[20,0,-10,0,10],[20,-30,0,10,0]],
	type: 0
},

{
	text: "Wykonałeś właśnie " + move_data[player.standing[3]].name + ", lecz nie wyszło to dokładnie tak jak chciałeś.",
	left_text: "Szybko wstań i udaj, że tak miało być",
	right_text: "Wciąz leżąc obok, przeproś przeciwnika",
	effect: [[25,-15,0,0,10],[25,0,-20,-5,0]],
	type: 0
},


// RUNNING ----------------------------

{
	text: "Twój oponent biegnie prosto na Ciebie.",
	left_text: move_data[player.standing[0]].name,
	right_text: "Daj się zaatakować",
	effect: [move_data[player.standing[0]].effect,[20,0,5,0,-15]],
	type: 0
},

/*{
	text: "Twój przeciwnik biegnie w Twoim kierunku.",
	left_text: move_data[player.standing[2]].name,
	right_text: "Daj się zaatakować",
	effect: [move_data[player.standing[2]].effect,[20,0,5,0,-15]],
	type: 0
},*/

{
	text: "Twój oponent biegnie wprost na Ciebie.",
	left_text: move_data[player.standing[4]].name,
	right_text: "Daj się zaatakować",
	effect: [move_data[player.standing[4]].effect,[20,0,5,0,-15]],
	type: 0
},

/*{
	text: "Przeciwnik biegnie w Twoją stronę.",
	left_text: move_data[player.standing[6]].name,
	right_text: "Daj się zaatakować",
	effect: [move_data[player.standing[6]].effect,[20,0,5,0,-15]],
	type: 0
},*/

{
	text: "Padasz ofiarą Irish Whip, odbijasz się od lin, lecz masz możliwość zareagować.",
	left_text: move_data[player.standing[7]].name,
	right_text: "Przyjmij akcję przeciwnika",
	effect: [move_data[player.standing[7]].effect,[15,0,5,0,-10]],
	type: 1
},

{
	text: "Wykonujesz Irish Whip, przeciwnik odbija się od lin.",
	left_text: move_data[player.standing[1]].name,
	right_text: move_data[player.strike[1]].name,
	effect: [move_data[player.standing[1]].effect,move_data[player.strike[1]].effect],
	type: 1
},

{
	text: "Wykonujesz Irish Whip, przeciwnik odbija się od lin.",
	left_text: move_data[player.standing[2]].name,
	right_text: "Dajesz przeciwnikowi wykonać kontrę",
	effect: [move_data[player.standing[2]].effect,[15,0,0,0,-15]],
	type: 1
},

{
	text: "Przeciwnik silnym Irish Whipem wyrzuca Cie z ringu.",
	left_text: "Wyleć kręcąc się jak szalony, zahaczając jeszcze głową o ring",
	right_text: "Wyląduj na nogach, jak gdyby nigdy nic",
	effect: [[30,0,15,15,0],[30,-10,-10,-10,0]],
	type: 1
},


// TAUNT / GIMMICK ----------------------------

{
	text: "Publiczność zaczyna na Ciebie skandować 'You suck!'.",
	left_text: "Zaczynasz się odgrażać",
	right_text: "Skupiasz się na walce",
	effect: [[15,0,15,0,0],[15,15,0,0,0]],
	type: 1
},

{
	text: "Unikając ataku przeciwnika, wyślizgujesz się z ringu.",
	left_text: "Łapiesz oddech",
	right_text: "Pozujesz, by sprowokować przeciwnika",
	effect: [[20,0,0,-10,-10],[20,-10,10,0,0]],
	type: 1
},

{
	text: "Publiczność zaczyna skandować 'Booooring'.",
	left_text: "'To wy jesteście nudni!'",
	right_text: "Zignoruj",
	effect: [[20,0,20,0,0],[20,0,-20,0,0]],
	type: 1
},

// GROUNDED ---------------------------------------------------

{
	text: "Przeciwnik ląduje na macie!",
	left_text: move_data[player.ground[1]].name,
	right_text: move_data[player.ground[3]].name,
	effect: [move_data[player.ground[1]].effect,move_data[player.ground[3]].effect],
	type: 1
},

{
	text: "Twój oponent leży na środku ringu,",
	left_text: move_data[player.ground[0]].name,
	right_text: move_data[player.ground[2]].name,
	effect: [move_data[player.ground[0]].effect,move_data[player.ground[2]].effect],
	type: 1
},


// OTHER --------------------------------------------

{
	text: "Masz znaczną przewagę nad przeciwnikiem!",
	left_text: move_data[player.other[0]].name,
	right_text: move_data[player.other[2]].name,
	effect: [move_data[player.other[0]].effect,move_data[player.other[2]].effect],
	type: 1
},

{
	text: "Masz znaczną przewagę nad swoim rywalem!",
	left_text: move_data[player.other[1]].name,
	right_text: move_data[player.other[3]].name,
	effect: [move_data[player.other[1]].effect,move_data[player.other[3]].effect],
	type: 1
},



// ENDING --------------------------------------

{
	text: "Twoja technika jest tak dobra, że Twój przeciwnik zaczyna popełniać za dużo błędów. Publiczność was wyśmiewa.",
	left_text: "...",
	right_text: "...",
	effect: [[0,0,0,0,0],[0,0,0,0,0]],
	type: 101
},

{
	text: "Publika wybucha śmiechem widząc Twoje drewniane umiejętności.",
	left_text: "...",
	right_text: "...",
	effect: [[0,0,0,0,0],[0,0,0,0,0]],
	type: 102
},

{
	text: "Walka będzie musiała być skrócona, bo chemia tej walki i jej atomosfera spowodowały zamieszki wsród osób na widowni.",
	left_text: "...",
	right_text: "...",
	effect: [[0,0,0,0,0],[0,0,0,0,0]],
	type: 103
},

{
	text: "Publiczność zaczyna opuszczać walkę, ponieważ ta przestała być jakkolwiek ciekawa.",
	left_text: "...",
	right_text: "...",
	effect: [[0,0,0,0,0],[0,0,0,0,0]],
	type: 104
},

{
	text: "Akcja stała się zbyt brutalna, Twój przeciwnik nie jest nawet w stanie kontynuować walki.",
	left_text: "...",
	right_text: "...",
	effect: [[0,0,0,0,0],[0,0,0,0,0]],
	type: 105
},

{
	text: "Ludzie z widowni zaczynają wychodzić z budynku przez kompletny brak jakiejkolwiek realnej brutalności.",
	left_text: "...",
	right_text: "...",
	effect: [[0,0,0,0,0],[0,0,0,0,0]],
	type: 106
},

{
	text: "Twoja przewaga stała się tak duża, że nikt na widowni nie uwierzy w realne zwycięstwo Twojego przeciwnika.",
	left_text: "...",
	right_text: "...",
	effect: [[0,0,0,0,0],[0,0,0,0,0]],
	type: 107
},

{
	text: "Staciłeś swoją przewagę w takim stopniu, że publika już Cie skreśliła i nie uwierzy w Twoje zwycięstwo.",
	left_text: "...",
	right_text: "...",
	effect: [[0,0,0,0,0],[0,0,0,0,0]],
	type: 108
},

{
	text: "Przeciwnik kompletnie nieprzytomny, to jest ta chwila! Przypięcie i liczenie. 1.. 2... 3!",
	left_text: "...",
	right_text: "...",
	effect: [[0,0,0,0,0],[0,0,0,0,0]],
	type: 109
},

{
	text: "Zapinasz dźwignie na przeciwniku, a ten po nieudanej próbie wyjścia z chwytu, odklepuje!",
	left_text: "...",
	right_text: "...",
	effect: [[0,0,0,0,0],[0,0,0,0,0]],
	type: 109
},


// == TABLES MATCH ====================================================================================================

// Pre-Table --------------------------------------

{
	text: "Podnosisz złożony stół leżący nieopodal.",
	left_text: "Atakujesz nim przeciwnika!",
	right_text: "Rozkładasz go na środku ringu",
	effect: [[25,0,0,15,10],[15,-10,0,0,-5]],
	type: 10
},

{
	text: "Dostrzegasz stół leżący poza ringiem.",
	left_text: "Wskazujesz na niego, by wzbudzić reakcji publiki",
	right_text: "Rozkładasz go na środku ringu",
	effect: [[15,0,15,0,0],[15,-10,0,0,-5]],
	type: 10
},

{
	text: "Twój przeciwnik zaczyna stawiać stół w ringu.",
	left_text: "Natychmiast atakujesz oponenta potężnym "+move_data[player.strike[2]].name+"'em",
	right_text: "Czekasz, aż ten skończy",
	effect: [move_data[player.strike[2]].effect,[15,0,0,0,-15]],
	type: 10
},

// Table ------------------------------------

{
	text: "Twój przeciwnik jest na stole!",
	left_text: move_data[player.other[0]].name,
	right_text: move_data[player.other[2]].name,
	effect: [move_data[player.other[0]].effect,move_data[player.other[2]].effect],
	type: 6
},

{
	text: "Oponent leży teraz na środku stołu!",
	left_text: move_data[player.other[1]].name,
	right_text: move_data[player.other[3]].name,
	effect: [move_data[player.other[1]].effect,move_data[player.other[3]].effect],
	type: 6
},

{
	text: "Przeciwnik pada na stół, lecz ten się nie łamie.",
	left_text: move_data[player.other[2]].name,
	right_text: move_data[player.other[1]].name,
	effect: [move_data[player.other[2]].effect,move_data[player.other[1]].effect],
	type: 6
},

{
	text: "Udało Ci się położyć nieprzytomnego rywala na stole.",
	left_text: move_data[player.other[3]].name,
	right_text: move_data[player.other[0]].name,
	effect: [move_data[player.other[3]].effect,move_data[player.other[0]].effect],
	type: 6
},

{
	text: "Biegniesz w kierunku przeciwnika, który oparty jest o stół w narożniku.",
	left_text: move_data[player.strike[1]].name,
	right_text: move_data[player.strike[0]].name,
	effect: [move_data[player.strike[1]].effect,move_data[player.strike[0]].effect],
	type: 6
},

{
	text: "Twój rywal opiera się o stół, który znajduje się w narożniku ringu.",
	left_text: move_data[player.strike[3]].name,
	right_text: move_data[player.strike[2]].name,
	effect: [move_data[player.strike[3]].effect,move_data[player.strike[2]].effect],
	type: 6
},

{
	text: "Wykonujesz Irish Whip kierując przeciwnika na stół, a sam biegniesz za nim.",
	left_text: move_data[player.strike[2]].name,
	right_text: move_data[player.strike[1]].name,
	effect: [move_data[player.strike[2]].effect,move_data[player.strike[1]].effect],
	type: 6
},

{
	text: "Opierasz oponenta o stół w rogu ringu, nabierasz dystansu i zaczynasz biec w jego stronę.",
	left_text: move_data[player.strike[3]].name,
	right_text: move_data[player.strike[0]].name,
	effect: [move_data[player.strike[3]].effect,move_data[player.strike[0]].effect],
	type: 6
},

{
	text: "Chwytem trzymasz rywala w stojącym stole w ringu.",
	left_text: move_data[player.standing[1]].name + " na stół!",
	right_text: move_data[player.standing[0]].name + " na stół!",
	effect: [move_data[player.standing[1]].effect,move_data[player.standing[0]].effect],
	type: 6
},

{
	text: "Wchodzisz na stół wraz ze swoim oponentem.",
	left_text: move_data[player.standing[3]].name,
	right_text: move_data[player.standing[2]].name,
	effect: [move_data[player.standing[3]].effect,move_data[player.standing[2]].effect],
	type: 6
},

{
	text: "Przeciwnik ledwo trzyma się na nogach przy stojącym stole.",
	left_text: move_data[player.standing[5]].name + " na stół!",
	right_text: move_data[player.standing[4]].name + " na stół!",
	effect: [move_data[player.standing[5]].effect,move_data[player.standing[4]].effect],
	type: 6
},

{
	text: "Trzymasz przeciwnika i kierujesz się z nim do stołu opartego o narożnik.",
	left_text: move_data[player.standing[7]].name,
	right_text: move_data[player.standing[6]].name,
	effect: [move_data[player.standing[7]].effect,move_data[player.standing[6]].effect],
	type: 6
},

// ---- TABLE ENDING -----------------------------------------

{
	text: "Rywal leży w kawałkach zniszczonego stołu, zaś Ty triumfujesz z wygranej walki!",
	left_text: "...",
	right_text: "...",
	effect: [[0,0,0,0,0],[0,0,0,0,0]],
	type: 112
},


// == LADDER MATCH ====================================================================================================

// PRE-LADDER --------------------------------------

{
	text: "Podnosisz złożoną drabinę leżącą nieopodal ringu.",
	left_text: "Atakujesz nią przeciwnika!",
	right_text: "Rozkładasz ją na środku ringu",
	effect: [[25,0,0,15,10],[15,-10,0,0,-5]],
	type: 9
},

{
	text: "Dostrzegasz drabinę leżącą poza ringiem.",
	left_text: "Wskazujesz na nią, by wzbudzić reakcji publiki",
	right_text: "Rozkładasz ją na środku ringu",
	effect: [[15,0,15,0,0],[15,-10,0,0,-5]],
	type: 9
},

{
	text: "Twój przeciwnik zaczyna stawiać drabinę w środku ringu.",
	left_text: "Natychmiast atakujesz oponenta potężnym "+move_data[player.strike[3]].name+"'em",
	right_text: "Czekasz, aż ten skończy",
	effect: [move_data[player.strike[2]].effect,[15,0,0,0,-15]],
	type: 9
},

// LADDER - ATTACKS ----------------------------------

{
	text: "Wchodzisz na stojącą w ringu drabinę.",
	left_text: move_data[player.other[1]].name,
	right_text: move_data[player.other[0]].name,
	effect: [move_data[player.other[1]].effect,move_data[player.other[0]].effect],
	type: 5
},

{
	text: "Wchodzisz na stojącą drabinę poza ringiem.",
	left_text: move_data[player.other[3]].name,
	right_text: move_data[player.other[2]].name,
	effect: [move_data[player.other[3]].effect,move_data[player.other[2]].effect],
	type: 5
},

{
	text: "Twój rywal zaczyna wchodzić na drabinę, Ty wchodzisz zaraz po nim.",
	left_text: move_data[player.standing[0]].name+" na szczycie drabiny!",
	right_text: move_data[player.standing[7]].name+" na szczycie drabiny!",
	effect: [move_data[player.standing[0]].effect,move_data[player.standing[7]].effect],
	type: 5
},

{
	text: "Ty i Twój przeciwnik wchodzicie jednocześnie na stojącą w ringu drabinę.",
	left_text: move_data[player.standing[6]].name+" na szczycie drabiny!",
	right_text: move_data[player.standing[1]].name+" na szczycie drabiny!",
	effect: [move_data[player.standing[6]].effect,move_data[player.standing[1]].effect],
	type: 5
},

{
	text: "Wraz ze swoim oponentem znaleźliście się na szczycie drabiny.",
	left_text: move_data[player.standing[2]].name,
	right_text: move_data[player.standing[5]].name,
	effect: [move_data[player.standing[2]].effect,move_data[player.standing[5]].effect],
	type: 5
},

{
	text: "Wchodzisz na stojącą drabinę, lecz Twój konkurent wchodzi po jej drugiej stronie.",
	left_text: move_data[player.standing[4]].name+" na szczycie drabiny!",
	right_text: move_data[player.standing[3]].name+" na szczycie drabiny!",
	effect: [move_data[player.standing[4]].effect,move_data[player.standing[3]].effect],
	type: 5
},

{
	text: "Przeciwnik rzuca w Ciebie drabinę",
	left_text: "Szybki unik!",
	right_text: "Przyjmij atak",
	effect: [[30,20,0,0,10],[30,0,0,0,-30]],
	type: 5
},

// LADDER - WIN -----------------------------------------------------------

{
	text: "Zmęczony znajdujesz się na szczycie drabiny!",
	left_text: move_data[player.other[1]].name+" ze szczytu drabiny!",
	right_text: "Zgarniasz wygraną!",
	effect: [move_data[player.other[1]].effect,[10,0,0,0,1]],
	type: 11
},

{
	text: "Wchodzisz na stojącą w ringu drabinę!",
	left_text: move_data[player.other[2]].name+" ze szczytu drabiny!",
	right_text: "Zgarniasz wygraną!",
	effect: [move_data[player.other[2]].effect,[10,0,0,0,10]],
	type: 11
},

{
	text: "Wchodzisz na drabinę jednocześnie ze swoim przeciwnikiem. Udaje Ci się go zrzucić, zanim ten cokolwiek zrobił!",
	left_text: move_data[player.other[3]].name+" ze szczytu drabiny!",
	right_text: "Zgarniasz wygraną!",
	effect: [move_data[player.other[3]].effect,[10,0,0,0,10]],
	type: 11
},

{
	text: "Zrzucasz rywala z drabiny, po czym sam na nią wchodzisz!",
	left_text: move_data[player.other[0]].name+" ze szczytu drabiny!",
	right_text: "Zgarniasz wygraną!",
	effect: [move_data[player.other[0]].effect,[10,0,0,0,10]],
	type: 11
},

// LADDER - ENDING -----------------------------------------------------------

{
	text: "Celebrujesz wygraną walkę trzymając swoje trofeum na szczycie drabiny!",
	left_text: "...",
	right_text: "...",
	effect: [[0,0,0,0,0],[0,0,0,0,0]],
	type: 111
},

// == WEAPONS ====================================================================================================

// LEVEL 1 (NO-DQ) --------------------------------------
// krzesło, kij, schody, barierki, młot, dzwon, rzeczy publiki, kij baseballowy

{
	text: "Wyciągasz krzesło spod ringu.",
	left_text: "Zaatakuj nim przeciwnika!",
	right_text: "Rzuć je na ziemię",
	effect: [[30,0,0,20,10],[20,0,0,-20,0]],
	type: 13
},

{
	text: "Wchodzisz w posiadanie stalowego krzesła.",
	left_text: "Zaatakuj nim przeciwnika!",
	right_text: "Rzuć je na ziemię",
	effect: [[30,0,0,20,10],[20,0,0,-20,0]],
	type: 13
},

{
	text: "Znajdujesz metalową rurkę.",
	left_text: "Walnij nią oponenta w głowę!",
	right_text: "Rzuć ją na ziemię",
	effect: [[33,0,0,33,0],[20,0,0,-20,0]],
	type: 13
},

{
	text: "Razem z rywalem znajdujecie się poza ringiem. Wykonujesz na nim Irish Whip.",
	left_text: "W kierunku barierek",
	right_text: "W kierunku stalowych schodów",
	effect: [[30,0,0,10,20],[30,0,10,20,0]],
	type: 13
},

{
	text: "Trafiasz na młot wyburzeniowy!",
	left_text: "Walnij nim rywala!",
	right_text: "Zostaw go w spokoju",
	effect: [[35,0,0,35,0],[20,0,0,-20,0]],
	type: 13
},

{
	text: "Bierzesz do ręki dzwon ringowy.",
	left_text: "Zacznij nim dzwonić",
	right_text: "Użyj go przeciwko swojemu rywalowi",
	effect: [[30,0,20,0,-10],[20,0,0,20,0]],
	type: 13
},

{
	text: "Ktoś z publiczności podaje Ci puszkę piwa.",
	left_text: "Napij się",
	right_text: "Rzuć nim w oponenta",
	effect: [[30,-10,20,0,0],[20,0,0,10,10]],
	type: 13
},

{
	text: "Ktoś z publiczności podaje Ci butelkę piwa.",
	left_text: "Napij się",
	right_text: "Rozbij ją na głowię rywala!",
	effect: [[30,-5,25,0,0],[30,0,0,30,0]],
	type: 13
},

// LEVEL 2 (HARDCORE) --------------------------------------
// pinezki, jarzeniówki, drut kolczasty, kastet, szkło

{
	text: "Rozsypujesz w ringu pinezki.",
	left_text: "Rzuć na nie przeciwnikiem!",
	right_text: "Pozwól rywalowi wykorzystać je przeciwko Tobie",
	effect: [[40,0,0,20,20],[40,0,0,20,-20]],
	type: 14
},

{
	text: "W ringu znajduje się stos jarzeniówek.",
	left_text: "Rzuć na nie przeciwnikiem!",
	right_text: "Zignoruj to",
	effect: [[40,0,0,30,10],[40,0,-20,-20,0]],
	type: 14
},

{
	text: "Podnosisz jarzeniówkę.",
	left_text: "Rozbij ją na głowię przeciwnika!",
	right_text: "Rozbij ją na swojej głowie",
	effect: [[40,0,0,20,20],[40,0,20,20,0]],
	type: 14
},

{
	text: "Znajdujesz koło ringu drut kolczasty.",
	left_text: "Zawiń go dookoła ręki i przywal rywalowi!",
	right_text: "Zacznij nim dusić przeciwnika",
	effect: [[40,0,30,10,0],[40,0,10,30,0]],
	type: 14
},

{
	text: "Ktoś z publiczności podaje Ci kastet.",
	left_text: "Użyj go do ataku!",
	right_text: "Odrzuć podarunek",
	effect: [[40,-20,0,20,0],[40,0,-20,-20,0]],
	type: 14
},

{
	text: "Na macie leżą kawalki szkła.",
	left_text: "Podnieś większy kawałek i zaatakuj oponenta",
	right_text: "Rzuć na nie swojego przeciwnika",
	effect: [[40,0,0,40,0],[40,0,0,20,20]],
	type: 14
},


// == BLOOD ====================================================================================================

{
	text: "Krew leci Ci z czoła. Wycierasz ją ręką.",
	left_text: "Zlizujesz krew z ręki",
	right_text: "Wycierasz krew w przeciwnika",
	effect: [[25,0,15,10,0],[25,0,15,0,10]],
	type: 4
},

{
	text: "Twojemu przeciwnikowi zaczyna mocno lecieć krew z czoła.",
	left_text: "Częstujesz go serią uderzeń, by zwiększyć jego krwawienie",
	right_text: "Wyśmiewasz go wskazując na niego palcem",
	effect: [[35,0,0,20,15],[30,0,30,0,0]],
	type: 4
},

{
	text: "Krew mocno leci Ci z czoła.",
	left_text: "Wytrzyj ją",
	right_text: "Niech leci",
	effect: [[27,15,0,-12,0],[27,0,12,15,0]],
	type: 4
},

// FIRST BLOOD ENDING --------------------------------------

{
	text: "Twój rywal zalewa się krwią! Zgodnie z regułami starcia, walka się kończy, a Ty triumfujesz!",
	left_text: "...",
	right_text: "...",
	effect: [[0,0,0,0,0],[0,0,0,0,0]],
	type: 110
},


// == CAGE ====================================================================================================

{
	text: "Wraz z przeciwnikiem znajdujesz się niedużej odległości od klatki.",
	left_text: "Rzuć rywalem o stalową kontrukcję",
	right_text: "Poślij Irish Whipem rywala prosto na ścianę klatki",
	effect: [[40,0,25,0,15],[40,25,0,15,0]],
	type: 12
},

{
	text: "Twój oponent stoi przy ścianie klatki.",
	left_text: "Wykonaj serię uderzeć jego głową o klatkę",
	right_text: "Z całej siły wciśnij twarz rywala do ściany i trzymaj dłuższą chwilę",
	effect: [[40,0,0,20,20],[40,-10,30,0,0]],
	type: 12
},

{
	text: "Przeciwnik chce wykonać na Tobie Irish Whip w stronę klatki.",
	left_text: "Kontruj i sam poślij rywala na stalową konstrukcję",
	right_text: "Mocno przywal w ścianę klatki",
	effect: [[40,20,20,0,0],[40,0,10,0,-30]],
	type: 12
},

{
	text: "Wchodzisz na szczyt klatki.",
	left_text: move_data[player.other[0]].name,
	right_text: move_data[player.other[1]].name,
	effect: [move_data[player.other[0]].effect,move_data[player.other[1]].effect],
	type: 12
},

{
	text: "Udało Ci się wspiąć na górę klatki.",
	left_text: move_data[player.other[2]].name,
	right_text: move_data[player.other[3]].name,
	effect: [move_data[player.other[2]].effect,move_data[player.other[3]].effect],
	type: 12
},

// == FINISHER ====================================================================================================

{
	text: "Twój przeciwnik jest kompletnie padnięty! To jest Twoja chwila!",
	left_text: move_data[player.special[0]].name,
	right_text: "Niech ta walka jeszcze trwa!",
	effect: [move_data[player.special[0]].effect,[40,0,20,0,-20]],
	type: 3
},

{
	text: "Masz przewagę absolutną nad swoim rywalem, możesz to wygrać!",
	left_text: move_data[player.special[1]].name,
	right_text: "Niech ta walka jeszcze trwa!",
	effect: [move_data[player.special[1]].effect,[40,0,20,0,-20]],
	type: 3
},

{
	text: "Twoja przewaga jest już zbyt wysoka, pora zakończyć ten pojedynek!",
	left_text: move_data[player.special[0]].name,
	right_text: move_data[player.special[1]].name,
	effect: [move_data[player.special[0]].effect,move_data[player.special[1]].effect],
	type: 3
},

// == BATTLE ROYAL ====================================================================================================
// -- ELIMINATION --------------------------------------

{
	text: "Twój przeciwnik opiera się od liny.",
	left_text: "Wykorzystaj okazję i wyrzuć go nad górną liną!",
	right_text: "Odciągnij go od lin i wykonaj "+move_data[player.standing[0]].name,
	effect: [[45,0,0,0,35],move_data[player.standing[0]].effect],
	type: 15
},

{
	text: "Widzisz rywala jak zmęczony stoi obok lin.",
	left_text: "Wykorzystaj okazję i wyrzuć go nad górną liną!",
	right_text: "Odciągnij go od lin i wykonaj "+move_data[player.standing[2]].name,
	effect: [[45,0,0,0,35],move_data[player.standing[2]].effect],
	type: 15
},

{
	text: "Twój oponent stoi przy linach.",
	left_text: "Odciągnij go od lin i wykonaj "+move_data[player.standing[4]].name,
	right_text: "Wykorzystaj okazję i wyrzuć go nad górną liną!",
	effect: [move_data[player.standing[4]].effect,[45,0,0,0,35]],
	type: 15
},

{
	text: "Widzisz jak Twój rywal ledwo trzyma się na nogach.",
	left_text: "Odciągnij go od lin i wykonaj "+move_data[player.standing[6]].name,
	right_text: "Wykorzystaj okazję i wyrzuć go nad górną liną!",
	effect: [move_data[player.standing[6]].effect,[45,0,0,0,35]],
	type: 15
},

{
	text: "Stoisz zmęczony przy linach na brzegu ringu. Twój przeciwnik biegnie w Twoją stronę!",
	left_text: "Naciągnij liny, by ten wypadł poza ring",
	right_text: "Nastaw się do ataku i wyprowadź "+move_data[player.strike[0]].name,
	effect: [[45,0,0,0,35],move_data[player.strike[0]].effect],
	type: 15
},

{
	text: "Stoisz na krawędzi ringu. Twój przeciwnik biegnie w Twoją stronę!",
	left_text: "Po prostu się odsuń, niech ten sam wypadnie z ringu",
	right_text: "Nastaw się do ataku i wyprowadź "+move_data[player.strike[2]].name,
	effect: [[45,0,0,0,35],move_data[player.strike[2]].effect],
	type: 15
},
















];
console.log(card_data);
}
// 0,1,2,3,4,5,6,7
/*
,
{
	text: "",
	left_text: "",
	right_text: "",
	effect: [[0,0,0,0,0],[0,0,0,0,0]],
	type: 
}
*/
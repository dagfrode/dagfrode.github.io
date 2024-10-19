<!-- For at noe skal skje her i verden må noen være motiverte for å gjøre jobben, eller det må være minste motstands vei. I alle fall om det skal skje konsistent over tid. Motivasjon falmer som regel over tid.

I denne talken ser vi på hvordan teamet jeg jobber i har jobbet med å bygge inn universiell utforming i alle ledd i utviklingsprosessen, fra design, til koding, byggepipelines og testing av systemene vi lager.

Vi kommer til å snakke kort om hva kravene for universiell utforming er, hvordan vi har prøvd å bygge det inn utviklingsprosessene våre, og om våre erfaring med dette arbeidet.

- Intro
- Universiell utforming
  - hvorfor?
    - lovpålagt
    - bare fordi kroppen din fungerer i dag betyr ikke det at den alltid vil det
  - hva kan testes automatisk?
  - hva kan må testes manuelt?
- Bygge universiell utforming inn i prosesser
  - design
  - komponenter
  - byggepipelines
  - sjekklister for testing
- Våre erfaringer
  - utfordringer
  - fordeler
- Konklusjon

-->

# Bærekraftig universiell utforming - fra sjekkliste til prosess

Mitt navn er Dag Frode, jeg jobber som utvikler i Sparebank 1 utvikling, hvor jeg har vært nå i ca 7 måneder. Før det har jeg blant annet vært konsulent hos Bekk. I dag skal jeg snakke om hvordan vi jobber med universell utforming i SpareBank 1 utvikling.

<!-- ## Hvorfor holder jeg dette foredraget? -->

Jeg må innrømme at da jeg sendte in pitchen for dette foredraget var planen min å "løse" dette med å jobbe med universell utforming "en gang for alle". Jeg har nemmelig lest meg opp på universell utforming en rekke ganger før, men like vel vært forvirret og overveldet de gangene jeg har kommet inn et nytt sted og skulle sjekke at løsningen vi har oppfyller kravene. Så da jeg i mars i år tenkte "hva vil jeg føle meg trygg på om 7 måneder" så var det nettopp universell utforming jeg tenkte på. Jeg føler dessverre ikke at jeg har "løst" hvordan jobbe med universell utforming, men jeg har lært mye. Det er det jeg skal dele med dere nå.

Det jeg ikke var klar over da jeg startet på dette, var hvor mye som alt har gjort med universell utforming, og hvor mange dyktige som alt jobbet med å løfte arbeidet vårt med dette. Kompetansen og engasjementet ble raskt tydelig da jeg kom inn i et team med flere uu illkjeler og da jeg ble med i fagruppen for Universell Utforming.

Jeg hadde tenkt å bruke mye tid på å lese litteratur og lage egne løsninger, men har i stedet følt at jeg har kommet til en skolebenk hvor jeg har lært fra kunnskapet og arbeidet til dyktige kollegaer. Det meste av det jeg kommer til å snakke om i dag er ting som alt ble gjort forskjellige steder i SpareBank1. Arbeidet jeg og faggruppen for universell utforming har gjort har i stor del vært å samle inn de måtene teamene alt jobber med universell utforming, konkretisere, formalisere og dele den kunnskapen, verktøyene og prosessene som teamene alt har hatt.

Det arbeider vi har endt opp med å gjøre har endt opp med å være mer strategisk enn jeg hadde planlagt. Vi har jobbet med å finne ut av hvor vi er, hvor vi vil og hva som skal til for å komme dit. Oppsummert kan jeg si at vi er godt på vei, har mye vi kan lære av hverandre og en del vi kan gjøre for å forbedre opplæring og trygghet på universell utforming. Hvordan vi jobber med å komme dit er det jeg skal bruke resten av foredraget til å snakke om.

<!-- ### Overveldene

<figure>
<object data="./overveldet.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure> -->

sb1u gjør mye for å

har lyst til å løse uu

det bør jo være enkelt i et selskap som er så på som SB1U. gode komponenter osv. kan vel dele opp problemet og spre ansvaret utover så testingen underveis ikke blir så stor og vi kan slippe unna testingen til slutt?

kanskje lage noe som hjelper deg med testingen

## Hva er universell utforming?

Planen etter den ikke fult så korte introduksjonen er å først ta ett steg tilbake for å snakke om hva universell utforming er og hvorfor det er viktig. Vi kommer så inn på de prosessene vi jobber med og opplæringene og verktøyene vi brukre som del av den, før jeg runder av med noen av våre erfaringer.

### Funksjonsnedsettinger

<figure>
<object data="./disability.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure>

En kan ikke snakke om universell utforming uten å snakke om funksjonsnedsettinger. Bakgrunnen til at vi gjør dette arbeidet er at vi selv om vi er mer like en ulike, er vi og forskjellige og har forskjellige behov. Det kan være situasjonsbetinget, middlertidig eller permanente funksjonsnedsettninger og tilsvarende behov.

#### Situasjonsbetingede

<figure>
<object data="./situational.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure>

Situasjonsbetingede funksjonsnedsettninger kan være

#### Middlertidige

<figure>
<object data="./temporary.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure>

#### Permanente

<figure>
<object data="./permanent.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure>

Dette tar oss videre til universell utforming.

### Universell utforming

<figure>
<object data="./uu.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure>

Universell utforming handler om å utforme eller tilrettelegge for at flest mulig skal kunne bruke noe uavhengig av funksjonsnedsettning.

det er mange verktøy som kan hjelpe deg med testing, samtidig er det mange av kravene som krever at testen vurderer om meningen i innholdet er beholdt og det er ikke like lett å automatisere.

### Inklusiv design

jeg tror jeg må droppe disse to slidene. jeg klarer ikke definere det godt nok.

<figure>
<object data="./id.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure>

## Hvilke erfaringer har vi gjort oss?

### Det kan føles overveldene

<figure>
<object data="./overveldet.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure>

### Hvilke erfaringer vi lært fra andre?

<figure>
<object data="./intervju.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure>

### Brukertesting

<figure>
<object data="./intervju.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure>

### Det en krevende sammensatt problemstilling

<figure>
<object data="./reverse_swiss_chees_model_2.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure>

### Det en krevende sammensatt problemstilling [presentation-only]

<figure>
<object data="./reverse_swiss_chees_model_1.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure>

### Det en krevende sammensatt problemstilling [presentation-only]

<figure>
<object data="./reverse_swiss_chees_model.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure>

I sikkerhet snakker en ofte om sikkerhet er som flere lag med svetsisk oste. Det er det hull i alle lagene, men så lenge det er minst et lag som dekker hele overflaten så er en trygg. Med universell utforming føles det innimellom som at det er omvendt. At en er den som prøver å komme seg gjennom alle disse lagene med ost. En kan kode inn aria labels og alt tekster så mye en vil i komponenter, men det hjelper ikke hvis de ikke blir fylt ut av de som bruker komponentene. Eller om de hardkoder de i et språk eller gir de dårlige verdier. For ikke å snakke om dynamisk innhold som lages av de som lager innhold. Når dette skal skje på tvers av et stort økosystem med mange autonome team og med mange forskjellige teknologier øker kompleksiteten ytterligere.

Det var en av tingene jeg bommet på i dette prosjektet. Jeg så bare en uniforme platformen jeg om de fleste jeg snakket med jobbed med. Jeg så ikke alt det selskapet tilbyr og er. Alle teknologiene som er i bruk og alle måtene å jobbe på. Jeg gjorde den feilen som er så vanlig i denne jobbe, jeg så happy path og tenkte at det her bør kunne være enkelt å få til. Vi har jo et helt ypperlig komponentbibliotek som legger tilrette for universell utforming.

Men nok om hvor tungt og utfordrende det kan oppleves. Og la oss heller snakke hva universell utforming er, hvorfor det er viktig og hvordan vi kan jobbe med å gjøre det enkelt for oss selv å jobbe med det.

Tidlig identifiserte jeg 3 ting jeg mener må være på plass for å jobbe med universell utforming på en bærekraftig måte. Med bærekraftig, mener jeg her en måte som vi klarer å oppretholde over tid og som ikke bare blir det siste en sjekker før en releaser noe for så å gleme å forholde seg til det neste året. De 3 tingene jeg mener må på plass for å jobbe bærekreaftig med universell utforming er: opplæring, prosess og verktøy. Altså gode enkle resurser som gjør at det er lett å lære og gjenlære hva som er viktig med universell utforming og hvordan lage universel utformede løsninger. Prosesser som legger til rette for at vi jobber gjevnt med det og ikke i skippertak. Og verktøy som støtter oss i det arbeidet vi gjør.

## Hvordan jobbe bærekraftig med universell utforming?

### Opplæring

<figure>
<object data="./education.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure>

opplæring er naturligvis viktig.

#### Kurs

<figure>
<object data="./course.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure>

lære av noen som kan det og kan gi en god introduksjon til tema.

#### Bygge empati og forståelse

<figure>
<object data="./empathy.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure>

#### Bygge empati og forståelse [presentation-only]

<figure>
<object data="./shoe.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure>

Jeg har et intrykk at det er blitt mer forståelse for behovet for universell utforming over årene. Jeg ser like vel for min egen del at det er viktig å gjevnlig oppsøke måter å kjenne utfordringene på kroppen for å oppretholde empati. Et eksempel her er at jeg har hat kognetiv forståelse og empati for synsnedsettninger, jeg har og brukt briller og filtere for å simulere flere forskjellig enedsettninger. Jeg har brukt skjermleser, men hadde ikke gjort det uten å kunne se samtidig. Så da var vi så heldige å ha inklude hos oss for å gå igjennom løsningene våre fikk jeg og flere noen aha oplevelser. Det var ting vi tok forgitt som vi kunne forstå fordi vi så hele sider p åen gang som det ikke var gode måter å forstå hvis en bare ser litt og litt. Og det viste seg at enkelte tekniske tiltak for å gjøre sidene mer universelt utformet ikke fungerte i gitte kontekster.

#### Tilgjenglige resurser

<figure>
<object data="./resources.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure>

Det er vel en selvfølge. Føler det meste av det jeg sier i dag er det. Det e rmang eåpne resurser for universell utforming, men de kan være vanskelig å forstå. Ikke bare det, men det kan være vanskelig å løse problemstillinger selv om vi forstår kravene. Enkelte løsinger krever redesign av hele eller deler av sider.

### Verktøy

<figure>
<object data="./tools.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure>

#### Skjermleser

<figure>
<object data="./screen_reader.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure>

#### Automatiserte tester

<figure>
<object data="./extensions.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure>

#### Prosedyre for manuell testing

<figure>
<object data="./extensions.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure>

### Prosess

- hva er delene av en prosess?

<figure>
<object data="./reverse_swiss_chees_model_1.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure>

todo bilde

#### Stilguide

<figure>
<object data="./style_guide.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure>

- farger og kontraster
- fonter
  - dysleksi %?

#### Komponenter

<figure>
<object data="./components.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure>

- universelt utformede i seg selv
- finnes gode whitelabel løsninger

#### System design

<figure>
<object data="./dd.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure>

#### Skisser

<figure>
<object data="./sketch.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure>

#### Utvikling

tood linting

<figure>
<object data="./lint.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure>

#### Utvikling [presentation-only]

<figure>
<object data="./automated_tests.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure>

todo automated tests

- linting
- automatiske tester

#### Testing

- automatiserte tester

<figure>
<object data="./testing.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure>

#### Testing [presentation-only]

- manuelle tester

<figure>
<object data="./testing.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure>

#### Testing [presentation-only]

- brukertesting

<figure>
<object data="./testing.svg" type="image/svg+xml" ></object>
<figcaption>Todo add caption</figcaption>
</figure>

## Konklusjon

- universell utforming er viktig, det støtter et inkluderende samfund og gir verd til alle. Det er og til nytta for alle da vi enten permanent, middlertidig eller situasjonsbetinget drar nytta av utformingen
- universell utforming er en krevende sammensatt probmelstilling som fortjener kontinuerlig oppmerksomhet.
- ved å fokusere på opplæring, verktøy og prosess vil det være mulig å universel utforming mindre krevende og lettere å gjøre

- og helt til slutt, vi bør strekke oss lenger enn å bare tilfredstille kravene

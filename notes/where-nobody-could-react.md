# Der ingen skulle tru at nokon kunne reagera

(Where no one would believe that someone could React)

## Hvorfor prøver jeg å reagere rart?

Jeg har lyst til å lage "noe" som gjør at jeg selv klarer å gjøre testing av universell utforming uten at det skal koste mye kognetiv last slik at jeg faktisk gjør det. Mye av denne testingen er manuell. Noe kan automatiseres. Jeg trenger og et sted å huske hva jeg kommer frem til mens jeg jobber med det og som holder meg strukturert og fokusert. Jeg trenger noe støtte.

Arbeidsnavnet til dette "noe" er foressten "Da11y", som i Dags a11y.

> “a11y” stands for “accessibility.” It is a numeronym, with 11 representing the count of letters between the letter a and the letter y. - [a11yproject.com](https://www.a11yproject.com/about/)

Løsningen jeg har kommet frem til, men innspill fra faggruppa for universell utforming er en app som hjelper deg med testing og dokumentasjon og samtidig gir deg relevante verktøy når du har behov for det. Dette må leve et sted og det må ha tilgang til appen du tester. For dette ser jeg et par løsninger, et script som alt er lagt til i det du tester eller en extension.

Fordelen med et script som er i det du lager er at uu testing er "bygget inn". Det vil kunne fungere på alle nettlesere (pr stasjonær). Ulempen er at det kan påvirke uuen til siden og siden generelt på uheldige måter. Samt vi må på en eller annen måte få noe til både være en del av siden og ha et grensesnitt brukeren kan iteragere med. Vi kan seff lage et overlay, men det føles ikke veldig bra. Det kan komme i veien for det du skal teste. Det kan og forstyrre de automatiserte testene en kan tenke seg å kjøre.

Fordelen med en extension er at det vil være mer separat fra siden og på den måte forstyrre mindre. Men vil og kreve at en innstallerer noe, håper extensions vi lager selv kan godkjennes enklere, så vil være browser spesefik.

En må og kunne bruke React til å lage disse appene. Jeg vil ikke gjøre det med plain JS. Så da blir spørsmålene, klarer vi å dytte React inn der jeg ønsker?

## I et annet vindue

Ved hjelp av portaler kan en plassere React node der en skulle ønske det. Også inn i andre vinduer det nåværende vinduet har kontroll på. Ulempen er at en ikke får med seg styling inn i vinduet, men det kan kanskje løses med å bruke styled components?

Denne løsningen er fra [rob-gordon svar på stackoverflow](https://stackoverflow.com/a/64391469)

```tsx
const RenderInWindow = (props) => {
  const [container, setContainer] = useState(null);
  const newWindow = useRef(null);

  useEffect(() => {
    // Create container element on client-side
    setContainer(document.createElement("div"));
  }, []);

  useEffect(() => {
    // When container is ready
    if (container) {
      // Create window
      newWindow.current = window.open(
        "",
        "",
        "width=600,height=400,left=200,top=200"
      );
      // Append container
      newWindow.current.document.body.appendChild(container);

      // Save reference to window for cleanup
      const curWindow = newWindow.current;

      // Return cleanup function
      return () => curWindow.close();
    }
  }, [container]);

  return container && createPortal(props.children, container);
};
```

## I en Chrome extension

Hva skal til for å bruke React til å lage en Chrome extension? Veldig lite faktisk. En Chrome extension er bare litt html, js, og css bundla med et manifest så en kan fint bygge React inn i en slik boundle.

Her er manifestet for extenson jeg jobber med:

```json
{
  "name": "Da11y",
  "description": "Dags attempt at a A11y extention",
  "version": "1.0",
  "manifest_version": 3,
  "action": {
    "default_title": "Click to open panel"
  },
  "side_panel": {
    "default_path": "generated/index.html"
  },
  "permissions": ["sidePanel", "activeTab"],
  "commands": {
    "_execute_action": {
      "suggested_key": {
        "default": "Ctrl+Shift+U",
        "mac": "Command+Shift+U"
      }
    }
  },
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content.js"]
    }
  ]
}
```

Det er en extension med en funksjon, åpne et sidepanel. `side_panel.default_path` er peker til den kompilerte react appen som igjen henter inn resten av css og js. Under commands reggisterer vi en hurtigtast for å åpne panelet. `service_worker` lytter på denne hurtigtasten og på extension ikonet og åpner panelet. `content_scripts` er scripts som injectes i siden extension brukes på. Der lytter den til meldinger som blir sendt fra sidepanelet. Slik får vi koblet knapper i sidepanelet med ting som skjer i nettsiden en er på.

## Bare fordi en kan bo et sted, burde en?

Så, vi har nå sett at en kan dytte React inn i et eget vindue og inn i Chrome extensions. Men bør man gjøre det? Jeg tenker det ikke er noe galt å dytte React inn i extensions, jeg er mer usikker på det å dytte React inn i egne vindue. Men det handler mer om at jeg opplever det som dårlig UX for brukere, så jeg vil nok ikke gjøre det profesjonelt utenom spesielle ekspertsystemer. Koblingen mellom vinduene kan og være kjør. Men for egne prosjekter? Absolutt.

Hvis du ble lurende på hva konklusjonen på hvor Reacten Da11y dyttes, så er svaret i en Chrome extension. Med mindre det skulle skje noe videre. Chrome har alt et par verktøy som er nyttige og det er den mest brukte nettleseren. Det gjør meg vondt å ikke tilrettelegge for støtte av alle nettlesere, men teknisk er det denne løsningen som gir mest mening per nå.

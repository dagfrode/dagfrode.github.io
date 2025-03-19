<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AI Chat - Centered & Wider</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      img {
        max-width: 100%;
        max-height: 50vh;
      }
      html {
        scroll-behavior: smooth;
      }
      body {
        font-family: "Arial", sans-serif;
        background-color: #f8f9fa;
      }
      .chat-wrapper {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .chat-container {
        width: 90%; /* Double the previous width */
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        height: 90vh;
      }
      .chat-header {
        background: linear-gradient(135deg, #007bff, #0056b3);
        color: white;
        padding: 20px;
        text-align: center;
        font-size: 22px;
        font-weight: bold;
      }
      .chat-messages {
        flex: 1;
        overflow-y: auto;
        padding: 20px;
        display: flex;
        flex-direction: column;
        background-color: #f1f1f1;
      }
      .chat-message {
        padding: 14px;
        border-radius: 8px;
        max-width: 75%;
        font-size: 16px;
        line-height: 1.4;
        word-wrap: break-word;
      }
      .user-message {
        background: #007bff;
        color: white;
        align-self: flex-end;
        text-align: right;
        margin-bottom: 10px;
      }
      .bot-message {
        background: #e4e6eb;
        color: black;
        align-self: flex-start;
        font-family: monospace;
      }
      .bot-message ol,
      .bot-message ul {
        margin-left: 35px;
      }
      .chat-input {
        display: flex;
        padding: 15px;
        background: white;
        border-top: 2px solid #ddd;
      }
      .chat-input input {
        flex: 1;
        padding: 14px;
        border: 2px solid #ddd;
        border-radius: 8px;
        outline: none;
        font-size: 16px;
      }
      .chat-input button {
        background: #007bff;
        color: white;
        border: none;
        padding: 14px 20px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 16px;
        margin-left: 10px;
      }
      .chat-input button:hover {
        background: #0056b3;
      }
      h1 {
        font-size: 5rem;
      }
      h2 {
        font-size: 4rem;
      }
      .fade-in {
        opacity: 1;
        animation-name: fadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: 2s;
      }

      @keyframes fadeInOpacity {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    </style>

  </head>
  <body>
    <div id="1" class="chat-wrapper">
      <h1>Me, myself, ChatGPT, and I</h1>
    </div>
    <div id="2" class="chat-wrapper">
      <h2><s>ChatGPT</s> Copilot</h2>
    </div>

    <div id="3" class="chat-wrapper">
      <h2>Idégenerering</h2>
    </div>

    <div id="4" class="chat-wrapper">
      <div class="chat-container">
        <div class="chat-header">Idégenerering - Ideer</div>
        <div class="chat-messages"></div>
        <div class="chat-input">
          <input
            type="text"
            value="Liste med 5 pastaretter"
            onkeypress="handleKeyPress(event, this)"
          />
          <span class="response" style="display: none">
            Her er en liste med 5 deilige pastaretter:
            <br />
            <br />
            <ol>
              <li>
                <b>Carbonara</b> – Klassisk italiensk rett med egg, parmesan,
                pancetta og svart pepper.
              </li>
              <li>
                <b>Pasta Bolognese</b> – Pasta med en rik kjøttsaus laget av
                tomater, kjøttdeig og krydder.
              </li>
              <li>
                <b>Pasta Alfredo</b> – Kremet saus med smør, fløte og parmesan,
                ofte servert med kylling.
              </li>
              <li>
                <b>Pasta Pesto</b> – Pasta med en frisk saus av basilikum,
                hvitløk, pinjekjerner, parmesan og olivenolje.
              </li>
              <li>
                <b>Lasagne</b> – Lagvis pastarett med kjøttsaus, béchamelsaus og
                ost, bakt i ovnen.
              </li>
            </ol>
          </span>
          <button onclick="sendMessage(this)">Send</button>
        </div>
      </div>
    </div>

    <div id="5" class="chat-wrapper">
      <div class="chat-container">
        <div class="chat-header">Idégenerering - Målrettede ideer</div>
        <div class="chat-messages"></div>
        <div class="chat-input">
          <input
            type="text"
            value="5 korte spørsmål for å hjelpe meg med å bestemme hvilken pastarett jeg vil ha til middag"
            onkeypress="handleKeyPress(event, this)"
          />
          <span class="response" style="display: none">
            Her er fem raske spørsmål for å hjelpe deg med å velge pastarett til
            middag:
            <br />
            <br />
            <ol>
              <li>
                <b> Vil du ha en kremet eller tomatbasert saus?</b> (Kremet →
                Carbonara, Alfredo / Tomat → Bolognese, Arrabbiata)
              </li>
              <li>
                <b> Vil du ha kjøtt, sjømat eller vegetarisk?</b> (Kjøtt →
                Bolognese, Carbonara / Sjømat → Frutti di Mare / Vegetarisk →
                Pesto, Pasta alla Norma)
              </li>
              <li>
                <b> Foretrekker du en lett eller fyldig rett?</b> (Lett → Aglio
                e Olio, Pesto / Fyldig → Lasagne, Alfredo)
              </li>
              <li>
                <b>
                  Har du lyst på en klassiker eller noe mer eksperimentelt? </b
                >(Klassiker → Carbonara, Bolognese / Eksperimentelt →
                Puttanesca, Gnocchi alla Sorrentina)
              </li>
              <li>
                <b> Hvor mye tid vil du bruke på matlagingen?</b> (Raskt → Cacio
                e Pepe, Aglio e Olio / Mer tid → Lasagne, Ravioli)
              </li>
            </ol>
          </span>
          <button onclick="sendMessage(this)">Send</button>
        </div>
      </div>
    </div>

    <div id="6" class="chat-wrapper">
      <div class="chat-container">
        <div class="chat-header">Idégenerering - Kategorier</div>
        <div class="chat-messages"></div>
        <div class="chat-input">
          <input
            type="text"
            value="Liste med 5 typer pastaretter"
            onkeypress="handleKeyPress(event, this)"
          />
          <span class="response" style="display: none">
            Her er fem hovedtyper av pastaretter:
            <br /><br />
            <ol>
              <li>
                <b> Pasta med kremet saus </b>– F.eks. Carbonara eller Alfredo,
                hvor sausen er basert på fløte, ost eller egg.
              </li>
              <li>
                <b> Pasta med tomatsaus </b>– F.eks. Bolognese eller Arrabbiata,
                der sausen er laget av tomater, urter og ofte kjøtt.
              </li>
              <li>
                <b> Bakte pastaretter</b> – F.eks. Lasagne eller Pasta al Forno,
                hvor pastaen tilberedes i ovnen med saus og ost.
              </li>
              <li>
                <b> Pasta med olje</b> - eller smørsaus – F.eks. Aglio e Olio
                eller Cacio e Pepe, hvor sausen er lett og basert på olivenolje
                eller smør.
              </li>
              <li>
                <b> Fylte pastaretter </b>– F.eks. Ravioli eller Tortellini,
                hvor pastaen er fylt med kjøtt, ost eller grønnsaker.
              </li>
            </ol>
          </span>
          <button onclick="sendMessage(this)">Send</button>
        </div>
      </div>
    </div>

    <div id="7" class="chat-wrapper">
      <div class="chat-container">
        <div class="chat-header">Idégenerering - konsept</div>
        <div class="chat-messages"></div>
        <div class="chat-input">
          <input
            type="text"
            value="Generer et bilde av 5 personer som står og maler på det samme bildet"
            onkeypress="handleKeyPress(event, this)"
          />
          <span class="response" style="display: none">
            <img
              alt="Genererer bilde..."
              class="fade-in"
              src="./paintbynumbers.png"
            />
          </span>
          <button onclick="sendMessage(this)">Send</button>
        </div>
      </div>
    </div>

    <div id="8" class="chat-wrapper">
      <div class="chat-container">
        <div class="chat-header">Idégenerering - POC / enkle scripts</div>
        <div class="chat-messages"></div>
        <div class="chat-input">
          <input
            type="text"
            value="Generer et spill som tester skrivehastigheten din"
            onkeypress="handleKeyPress(event, this)"
          />
          <span class="response" style="display: none">
            <img
              alt="Genererer bilde..."
              class="fade-in"
              src="./skrivehastighet.png"
            />
          </span>
          <button onclick="sendMessage(this)">Send</button>
        </div>
      </div>
    </div>

    <div id="9" class="chat-wrapper">
      <h2>Refleksjon</h2>
    </div>

    <div id="10" class="chat-wrapper">
      <div class="chat-container">
        <div class="chat-header">Refleksjon - spørsmål</div>
        <div class="chat-messages"></div>
        <div class="chat-input">
          <input
            type="text"
            value="hvilke 5 spørsmål bør jeg stille meg selv for å avklare hvilke nettleserversjoner vi bør støtte?"
            onkeypress="handleKeyPress(event, this)"
          />
          <span class="response" style="display: none">
            Hvis du vil holde det kort og konsist, kan du stille deg selv disse
            fem spørsmålene:
            <br /><br />
            <ul>
              <li>Hvilke nettlesere bruker målgruppen vår?</li>
              <li>
                Hvilke nettlesere krever teknologien vår for å fungere optimalt?
              </li>
              <li>
                Hvor mye ekstra arbeid krever støtte for eldre nettlesere?
              </li>
              <li>Er det eksterne krav som påvirker nettleserstøtten?</li>
              <li>
                Hvordan balanserer vi brukervennlighet, sikkerhet og ytelse?
              </li>
            </ul>
          </span>
          <button onclick="sendMessage(this)">Send</button>
        </div>
      </div>
    </div>

    <div id="11" class="chat-wrapper">
      <div class="chat-container">
        <div class="chat-header">Refleksjon - oppsummere</div>
        <div class="chat-messages"></div>
        <div class="chat-input">
          <input
            type="text"
            value="Jeg skal holde et foredrag om hvordan jeg bruker ai til idegenerering og refleksjon. [...]tankene mine når jeg bare skriver masse slik som dette og til å gjøre sentimentanalyser."
            onkeypress="handleKeyPress(event, this)"
          />
          <span class="response" style="display: none">
            <ol>
              <li>
                <b>Idégenerering</b>
                – Bruker AI til å komme med mange ideer og kategorisere dem for
                å oppdage nye perspektiver.
              </li>
              <li>
                <b> Visuell konseptualisering </b>
                – Genererer bilder for å utforske ideer visuelt.
              </li>
              <li>
                <b>Målrettet tenkning </b>
                – AI stiller spørsmål for å skjerpe idéutviklingen.
              </li>
              <li>
                <b>Refleksjon og oppsummering </b>
                – AI hjelper med refleksjonsspørsmål, oppsummerer tanker og
                analyserer sentiment.
              </li>
            </ol>
          </span>
          <button onclick="sendMessage(this)">Send</button>
        </div>
      </div>
    </div>

    <div id="12" class="chat-wrapper">
      <div class="chat-container">
        <div class="chat-header">Refleksjon - sentiment</div>
        <div class="chat-messages"></div>
        <div class="chat-input">
          <input
            type="text"
            value="sentimentanalayse av: Hva om du hadde en alltid tilgjengelig sparringspartner – en som hjelper deg å tenke[...] som en erstatning for egne tanker, men som en katalysator for bedre idéer."
            onkeypress="handleKeyPress(event, this)"
          />
          <span class="response" style="display: none">
            Teksten har en<b> positiv</b> og <b>inspirerende</b> tone. Her er en
            sentimentanalyse basert på ulike aspekter:
            <ul>
              <li>
                <b>Generell tone</b>: Positiv, motiverende, og engasjerende. Den
                presenterer en idé om en "alltid tilgjengelig sparringspartner"
                på en måte som vekker nysgjerrighet.
              </li>
            </ul>
          </span>
          <button onclick="sendMessage(this)">Send</button>
        </div>
      </div>
    </div>

    <div id="13" class="chat-wrapper">
      <h2>Oppsummering</h2>
    </div>

    <div id="14" class="chat-wrapper">
      <div class="chat-container">
        <div class="chat-header">Fin</div>
        <div class="chat-messages"></div>
        <div class="chat-input">
          <input
            type="text"
            value="Så hva er planen?"
            onkeypress="handleKeyPress(event, this)"
          />
          <span class="response" style="display: none">
            <img alt="Genererer bilde..." class="fade-in" src="./plan.jpg" />
            <br />
            <br />
            <h3>Takk for oppmerksomheten!</h3>
          </span>
          <button onclick="sendMessage(this)">Send</button>
        </div>
      </div>
    </div>

    <script>
      function handleKeyPress(event, inputElement) {
        if (event.key === "Enter") {
          sendMessage(inputElement.nextElementSibling.nextElementSibling);
        }
      }

      function sendMessage(button) {
        let chatBox = button.closest(".chat-container");
        let input = chatBox.querySelector(".chat-input input[type='text']");
        let botResponseSpan = chatBox.querySelector(".chat-input .response");
        let chatMessages = chatBox.querySelector(".chat-messages");

        let message = input.value.trim();
        if (message === "") return;

        // Create user message element
        let userMessage = document.createElement("div");
        userMessage.classList.add("chat-message", "user-message");
        userMessage.innerText = message;
        chatMessages.appendChild(userMessage);

        // Auto-scroll
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Clear input field (optional)
        input.value = "";

        // Get bot response
        let botResponse = botResponseSpan.innerHTML;

        // Simulate bot typing with faster effects
        setTimeout(() => typeBotResponse(chatMessages, botResponse), 400);
      }

      function typeBotResponse(chatMessages, response) {
        let botMessage = document.createElement("div");
        botMessage.classList.add("chat-message", "bot-message");
        chatMessages.appendChild(botMessage);

        let index = 0;
        let isInHTMLTag = false;
        function typeLetter() {
          if (index < response.length) {
            if (response[index] === "<") {
              isInHTMLTag = true;
            } else if (response[index] === ">") {
              isInHTMLTag = false;
            }
            if (isInHTMLTag) {
              index++;
              typeLetter();
            }
            let delay = Math.random() * 30 + 10; // Faster variable typing speed
            botMessage.innerHTML = response.slice(0, index);
            index++;
            setTimeout(typeLetter, delay);
          } else {
            botMessage.innerHTML = response; // Ensure final text is correct
            chatMessages.scrollTop = chatMessages.scrollHeight;
          }
        }
        typeLetter();
      }
      document.addEventListener("keydown", (event) => {
        if (
          ["ArrowDown", "PageDown", "ArrowUp", "PageUp"].includes(event.key)
        ) {
          event.preventDefault(); // Prevent default scrolling

          let hashValue = parseInt(window.location.hash.substring(1)) || 0;

          if (event.key === "ArrowDown" || event.key === "PageDown") {
            hashValue++;
          } else if (
            (event.key === "ArrowUp" || event.key === "PageUp") &&
            hashValue > 0
          ) {
            hashValue--;
          }

          window.location.hash = `#${hashValue}`;
        }
      });
    </script>

  </body>
</html>

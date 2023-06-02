let ipAddress;

document.addEventListener("DOMContentLoaded", function() {

  getIPAddress()
      .then(ipAddress => {
        console.log('IP adresa:', ipAddress);
      })
      .catch(error => {
        console.log('Chyba při získávání IP adresy:', error);
      });

  document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Zabraňuje přesměrování po odeslání formuláře

    let name = document.getElementById("jmeno").value;
    let nazor = document.querySelector('input[name="nazor"]:checked').value;
    let country = document.getElementById("country").value;
    let hazard = Array.from(document.querySelectorAll('input[name="hazard[]"]:checked')).map(function(color) {
      return color.value;
    });
    let notes = document.getElementById("notes").value;

    class FSociety {
      constructor() {
        this.name = name;
        this.country = country;
        this.opinion = nazor;
        this.hazard = hazard.join(", ");
        this.notes = notes;
      }
    }

    let formClass = new FSociety();

    FormHandler(formClass);
    alert("Děkujeme za zpětnou vazbu. ❤")

    // Resetování formuláře
    this.reset();

    let dialog = document.getElementById("feedback");
    dialog.close();

  });
});

function openDialog() {
  let dialog = document.getElementById("feedback");
  dialog.showModal();
}

function closeDialog() {
  let dialog = document.getElementById("feedback");
  dialog.close();
}

function openRules() {
  let dialog = document.getElementById("rules");
  dialog.showModal();
}

function closeRules() {
  let dialog = document.getElementById("rules");
  dialog.close();
}

function FormHandler(klasa) {

  console.log(klasa.name)
  console.log(klasa.country)
  console.log(klasa.opinion)
  console.log(klasa.hazard)
  console.log(klasa.notes)

  DiscordMessage(klasa)

}

function DiscordMessage(data) {

  const webhookUrl = 'https://discord.com/api/webhooks/1114264552641679440/RlTIoLVlnAyV14XIMecyg5OAgcKkAW5Bb3Kn1KQWmyzHwdcKmmQuqZMqe2LLcxTuPx6O';

  const text = {
    content: '---------------------------------------\nJméno: ' + data.name + '\nZemě: ' + data.country  + '\nNázor: ' + data.opinion + '\nHazardní hry: ' + data.hazard + '\nVylepšení: ' + data.notes + '\nIP: ' + ipAddress,
  };

  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(text),
  })
      .then(response => {
        console.log('Zpráva byla úspěšně odeslána na Discord webhook.');
      })
      .catch(error => {
        console.error('Při odesílání zprávy na Discord webhook se vyskytla chyba:', error);
      });
}

function getIPAddress() {


  return new Promise((resolve, reject) => {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
          ipAddress = data.ip;
          //console.log(ipAddress);
          resolve(ipAddress);
        })
        .catch(error => {
          reject(error);
        });
  });
}

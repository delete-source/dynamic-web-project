
document.addEventListener("DOMContentLoaded", function() {
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

    alert("Děkujeme za zpětnou vazbu. ❤")
    FormHandler(formClass);

    // Resetování formuláře
    this.reset();
  });
});

function openDialog() {
  let dialog = document.getElementById("myDialog");
  dialog.showModal();
}

function closeDialog() {
  let dialog = document.getElementById("myDialog");
  dialog.close();
}

function FormHandler(klasa) {

  console.log(klasa.name)
  console.log(klasa.country)
  console.log(klasa.opinion)
  console.log(klasa.hazard)
  console.log(klasa.notes)

}
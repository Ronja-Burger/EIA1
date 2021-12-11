window.addEventListener("load", function () {
    // Hinzufügen der Überschrift
    // 1. Select the div element using the id property
    const app = document.getElementById("app");
    // 2. Create a new <p></p> element programmatically
    const h1 = document.createElement("h1");
    // 3. Add the text content
    h1.textContent = "ToDo-Liste";
    // 4. Append the p element to the div element
    app.appendChild(h1);
    //Textfeld
    document.querySelector("#hinzufügen").addEventListener("click", addTextToHtml);
    let input = document.querySelector("#eingabeText");
    function addTextToHtml() {
        let Eingabefeld;
        if (input.value != "")
            Eingabefeld = input.value;
        // Textfeld leeren
        input.value = "";
        // Hinzufügen eines Listenelements
        // 1. Select the div element using the id property
        const app = document.getElementById("app");
        // 2. Create a new <p></p> element programmatically
        const p = document.createElement("p");
        // 3. Add the text content
        p.textContent = Eingabefeld;
        p.addEventListener("click", erledigen);
        // 4. Append the p element to the div element
        app.appendChild(p);
    }
    function erledigen() {
        if (this.style.textDecoration == "line-through") {
            this.style.textDecoration = "none";
            this.style.color = "#2f4f4f";
        }
        else {
            this.style.textDecoration = "line-through";
            this.style.color = "#ff0000";
        }
    }
});
//and the trashcan
/*
const trash = document.createElement("button");
trash.innerText = "Löschen";
trash.classList.add("trash", "fas fa-trash");
p.appendChild(trash);
*/ 
//# sourceMappingURL=script9.js.map
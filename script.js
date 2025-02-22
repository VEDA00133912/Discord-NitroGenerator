particlesJS("particles-js", {
    particles: {
        number: { value: 100 },
        color: { value: "#f47fff" },
        size: { value: 3 },
        move: { speed: 5 }
    }
});

let type = null;

function setType(selectedType) {
    type = selectedType;
    document.getElementById("selected-type").innerHTML = `Selected: <span>${type === "gift" ? "Gift" : "Promo"}</span>`;

    document.getElementById("gift-btn").classList.toggle("active", type === "gift");
    document.getElementById("promo-btn").classList.toggle("active", type === "promo");

    document.getElementById("gift-btn").disabled = type === "gift";
    document.getElementById("promo-btn").disabled = type === "promo";
}

function generateRandomString(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

function generateLinks() {
    if (!type) {
        alert("Generate Error\nChoose Gift or Promo");
        return;
    }

    let count = document.getElementById("count").value;

    if (count > 100) {
        alert("Generate Error\nThe number of links that can be generated at one time is limited to 100");
        return document.getElementById("count").value = 1; 
    }

    const output = document.getElementById("output");
    output.innerHTML = ""; 

    for (let i = 0; i < count; i++) {
        let link;
        if (type === "gift") {
            link = `https://discord.gift/${generateRandomString(16)}`;
        } else {
            link = `https://discord.com/billing/promotions/${generateRandomString(4)}-${generateRandomString(4)}-${generateRandomString(4)}-${generateRandomString(4)}`;
        }
        const p = document.createElement("p");
        p.textContent = link;
        p.style.color = "#f47fff";
        output.appendChild(p);
    }
}

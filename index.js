class BigCatTable {
  constructor(species, size, location, imageUrl) {
    this.species = species;
    this.size = size;
    this.location = location;
    this.imageUrl = imageUrl;
  }

  createTable() {
    const container = document.createElement("div");
    container.classList.add("Container");
    const title = document.createElement("h2");
    title.textContent = "Big Cats";
    container.appendChild(title);

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const rows = [
      { label: "species", value: this.species },
      { label: "Size", value: this.size },
      { label: "Location", value: this.location },
      { label: "", value: `<img src="${this.imageUrl}" width="100px">` },
    ];
    rows.forEach((row) => {
      const tr = document.createElement("tr");

      const tdLabel = document.createElement("td");
      tdLabel.textContent = row.label;
      tr.appendChild(tdLabel);

      const tdValue = document.createElement("td");
      tdValue.innerHTML = row.value;
      tr.appendChild(tdValue);

      tbody.appendChild(tr);
    });

    thead.appendChild(tbody);
    table.appendChild(thead);
    container.appendChild(table);

    return container;
  }
}
class BigCatManager {
    constructor() {
        this.cats = [];
        this.container = document.createElement('div');
    }

    addCat() {
        const species = prompt('Enter species name:');
        const size = prompt('Enter size (e.g., 10ft):');
        const location = prompt('Enter location:');
        const imageUrl = prompt('Enter image URL:');
        
        if (species && size && location && imageUrl) {
            const newCat = new BigCatTable(species, size, location, imageUrl);
            this.cats.push(newCat);
            this.renderCats();
        } else {
            alert('All fields are required!');
        }
    }

    deleteCat() {
        if (this.cats.length > 0) {
            this.cats.pop(); 
            this.renderCats();
        } else {
            alert('No cats to delete!');
        }
    }


    renderCats() {
        this.container.innerHTML = ''; 

        this.cats.forEach(cat => {
            this.container.appendChild(cat.createTable());
        });
    }


    createButtons() {
        const buttonContainer = document.createElement('div');
        const addButton = document.createElement('button');
        addButton.textContent = "Add Big Cat";
        addButton.onclick = this.addCat.bind(this);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete Last Cat";
        deleteButton.onclick = this.deleteCat.bind(this);

        buttonContainer.appendChild(addButton);
        buttonContainer.appendChild(deleteButton);

        this.container.appendChild(buttonContainer);
    }

    initialize() {
        document.body.appendChild(this.container);
        this.createButtons();
        this.renderCats(); 
    }
}
const manager = new BigCatManager();
manager.initialize();
const bigCat = new BigCatTable(
  "Tiger",
  "10ft",
  "Asia",
  "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf53OPjAvH2Mer3iYwhdBq9h72lpLks5-6EwLWqoRc9jwrVhzmHqpfnVEF9t_zxxmnzQTbpOaUcMvvxQFPllPvxxU7Q4s-73d3NDETehE0WTKOPIXJdqzrMLq3hYMKnaRk7JCypmg?key=diMK_80ckKTiDYYhCkLD1Q"
);
document.body.appendChild(bigCat.createTable());
const bigCat2 = new BigCatTable(
  "Big cats",
  "12ft",
  "Africa",
  "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfRlYhPYUadXdjE8ghce8hz1MA-dJcN3kkWMvL5uK4EngylRs90X7OYDVinCTXhuuHdFwOHOjyP2x4x8C8VCNZIJTiyP0bEfhSlVJvRxyazt4EdiimrV7fbk8vT1wxe4lylQkqJ?key=diMK_80ckKTiDYYhCkLD1Q"
);
document.body.appendChild(bigCat2.createTable());

// 2nd instance Dogs

class Dog {
  constructor(Species, Name, Size, Location, imageUrl) {
    this.Species = Species;
    this.Name = Name;
    this.Size = Size;
    this.Location = Location;
    this.imageUrl = imageUrl;
  }
  createTable() {
    const dogcontainer = document.createElement("div");
    dogcontainer.classList.add("Dogcontainer");
    const title = document.createElement("h2");
    title.textContent = "Dog";
    dogcontainer.appendChild(title);

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const rows = [
      { label: "species", value: this.Species },
      { label: "name", value: this.Name },
      { label: "Size", value: this.Size },
      { label: "Location", value: this.Location },
      { label: "", value: `<img src="${this.imageUrl}" width="100px">` },
    ];

    rows.forEach((row) => {
      const tr = document.createElement("tr");

      const tdLabel = document.createElement("td");
      tdLabel.textContent = row.label;
      tr.appendChild(tdLabel);

      const tdValue = document.createElement("td");
      tdValue.innerHTML = row.value;
      tr.appendChild(tdValue);

      tbody.appendChild(tr);
    });

    thead.appendChild(tbody);
    table.appendChild(thead);
    dogcontainer.appendChild(table);

    return dogcontainer;
  }
}
const dog = new Dog(
  "Dog",
  "Rootweiler",
  "2ft",
  "Germany",
  "https://lh7-rt.googleusercontent.com/docsz/AD_4nXddsWqJ9xao46kXmGAT1zDDzemlcGqondWCaRASmoWHAXQUeFau7e-xPUkbDtCH_QOrIzEm424Cv71Vv7S_tGqLVpLqnEPLyu9PFlcWkiCeaMgldfDsavM7S4TQckUftVtzQCUY?key=diMK_80ckKTiDYYhCkLD1Q"
);
document.body.appendChild(dog.createTable());

// 3rd instance Big Fish

class BigFish {
  constructor(Species, Name, Size, Location, imageUrl) {
    this.Species = Species;
    this.Name = Name;
    this.Size = Size;
    this.Location = Location;
    this.imageUrl = imageUrl;
  }
  createTable() {
    const Bigfishcontainer = document.createElement("div");
    Bigfishcontainer.classList.add("Bigfishcontainer");
    const title = document.createElement("h2");
    title.textContent = "Big Fish";
    Bigfishcontainer.appendChild(title);

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const rows = [
      { label: "species", value: this.Species },
      { label: "name", value: this.Name },
      { label: "Size", value: this.Size },
      { label: "Location", value: this.Location },
      { label: "", value: `<img src="${this.imageUrl}" width="100px">` },
    ];

    rows.forEach((row) => {
      const tr = document.createElement("tr");

      const tdLabel = document.createElement("td");
      tdLabel.textContent = row.label;
      tr.appendChild(tdLabel);

      const tdValue = document.createElement("td");
      tdValue.innerHTML = row.value;
      tr.appendChild(tdValue);

      tbody.appendChild(tr);
    });

    thead.appendChild(tbody);
    table.appendChild(thead);
    Bigfishcontainer.appendChild(table);

    return Bigfishcontainer;
  }
}
const bigfish = new BigFish(
  "Big fish",
  "Humpback Whale",
  "15ft",
  "Atlantic ocean",
  "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeyysrrkfUWIf1lK10UBdJb7fjcJJWI9tBxkSrQu4GyVAJrGtGEfC2hjuFEcKivtWtb4-d5f4Se0qmiiaVavBY-Mugh1FbDbOzOjUS_k_fYCwcvHuXHvsk6yLwiUwTsKQRDImJplg?key=diMK_80ckKTiDYYhCkLD1Q"
);
document.body.appendChild(bigfish.createTable());

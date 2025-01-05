// Función para agregar un héroe
function agregarHeroe(tier) {
  const heroName = prompt("Ingrese el nombre del héroe:");

  if (heroName) {
    const heroList = document.getElementById(tier);
    const newHero = document.createElement("li");
    newHero.textContent = heroName;
    heroList.appendChild(newHero);
  }
}

// Función para eliminar el último héroe de la lista
function eliminarHeroe(tier) {
  const heroList = document.getElementById(tier);
  
  // Eliminar el último héroe solo si la lista no está vacía
  if (heroList.children.length > 0) {
    heroList.removeChild(heroList.lastChild);
  } else {
    alert("No hay héroes para eliminar.");
  }
}

// Añadir evento a los botones de agregar héroe
const addHeroButtons = document.querySelectorAll('.add-hero-btn');
addHeroButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tier = button.getAttribute('data-tier');
    agregarHeroe(tier);
  });
});

// Añadir evento a los botones de eliminar héroe
const removeHeroButtons = document.querySelectorAll('.remove-hero-btn');
removeHeroButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tier = button.getAttribute('data-tier');
    eliminarHeroe(tier);
  });
});
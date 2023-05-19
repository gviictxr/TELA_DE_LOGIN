
// Função para alternar entre os temas claro e escuro

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");
  }
  
// Event listener para o botão de alternar tema

  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("change", toggleTheme);
  
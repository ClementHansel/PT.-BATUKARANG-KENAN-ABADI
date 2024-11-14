// const userPrefersDark = false;
const userPrefersDark = localStorage.getItem("theme") === "dark";

// Other code

checkbox.addEventListener("change", (event) => {
  const isDarkMode = event.target.checked;
  setThemePreference(isDarkMode);
  // Add the line below
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

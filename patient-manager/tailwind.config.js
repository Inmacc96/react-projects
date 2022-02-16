module.exports = {
  purge: ["./index.html", "./src/**/*.{jsx}"],
  // Busca en el archivo index.html, monta la app react y entonces busca
  // todos los estilos usados en cualquier archivo  que tenga la extension .jsx
  // en cualquier carpeta. Y el resto de los estilos que no se está usando los elimina.
  darkMode: false,
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};

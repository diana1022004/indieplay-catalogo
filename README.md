# IndiePlay - Catálogo

Catálogo estático de videojuegos indie hecho con React (Vite) para el Parcial II
de Desarrollo de Aplicaciones Web.

## Estructura

```
src/
├── componentes/
│   ├── Header.jsx       // Barra superior
│   ├── Sidebar.jsx      // Menú lateral
│   └── GameCard.jsx     // Tarjeta de videojuego individual
├── App.jsx              // Componente principal (Dashboard) que une todo
├── App.css              // Estilos del layout y las tarjetas
├── index.css            // Estilos globales
└── main.jsx             // Punto de entrada
```

## Correr en local

```bash
npm install
npm run dev
```

Abre la URL que muestra la terminal (normalmente `http://localhost:5173`).

## Subir a GitHub

```bash
git init
git add .
git commit -m "Parcial II: catálogo de videojuegos indie"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/indieplay-catalogo.git
git push -u origin main
```

Cambia `TU-USUARIO` por tu usuario de GitHub. Crea antes el repositorio vacío en
GitHub (sin README, para que no choque con `git push`).

## Desplegar en Vercel

1. Entra a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
2. **Add New... → Project** y selecciona el repositorio `indieplay-catalogo`.
3. Vercel detecta Vite automáticamente (Build Command: `vite build`, Output: `dist`).
   No cambies nada, solo pulsa **Deploy**.
4. En uno o dos minutos te da el enlace público (algo como
   `indieplay-catalogo.vercel.app`).

## Desplegar en GitHub Pages (alternativa)

```bash
npm install --save-dev gh-pages
```

Agrega a `package.json`:

```json
"homepage": "https://TU-USUARIO.github.io/indieplay-catalogo",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Y en `vite.config.js` agrega `base: "/indieplay-catalogo/"` dentro de
`defineConfig({ ... })`. Luego:

```bash
npm run deploy
```

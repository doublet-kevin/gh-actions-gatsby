
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/home/kevin-pro/Bureau/projet-perso/gh-actions-gatsby/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/kevin-pro/Bureau/projet-perso/gh-actions-gatsby/src/pages/index.js"))
}

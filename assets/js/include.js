["footer"].forEach(id =>
  fetch(id + ".html").then(r => r.text()).then(t => document.getElementById(id).innerHTML = t)
);
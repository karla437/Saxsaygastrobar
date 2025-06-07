function cargarIdioma(idioma) {
  $.getJSON(`locales/${idioma}.json`, function(data) {
    for (const id in data) {
      const el = $(`#${id}`);
      if (el.length) {
        el.text(data[id]); // Puedes extender para alt, placeholder, etc.
      }
    }
  });
}

function inicializarIdioma() {
  const idiomaGuardado = localStorage.getItem('idioma') || 'es';
  cargarIdioma(idiomaGuardado);

  // Dropdown con banderas
  $('#idioma .dropdown-item').on('click', function (e) {
    e.preventDefault();
    const nuevoIdioma = $(this).data('lang');
    localStorage.setItem('idioma', nuevoIdioma);
    cargarIdioma(nuevoIdioma);
  });
}

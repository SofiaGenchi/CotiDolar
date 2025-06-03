import React, { useEffect } from 'react';
import './Noticias.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Noticias() {
  useEffect(() => {
    //agregarle tarjetas de bootstrap X
    fetch(
      'https://newsdata.io/api/1/news?' +
        'apikey=pub_872920f1d2e2930ecec4fe73de047e2b520e8' +
        '&q=dólar' +
        '&country=ar' +
        '&language=es'
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const contenedor = document.querySelector('#noticias');

        for (const noticia of data.results) {
          contenedor.innerHTML += `
                <div class="card bg-light text-dark mb-3" style="width: 500px">
                    ${noticia.image_url ? `<img src="${noticia.image_url}" class="card-img-top" alt="${noticia.title}">` : ''}
                    <div class="card-body">
                         <h5 class="card-title">${noticia.title}</h5>
                        <p class="card-text">${noticia.description || ""}</p>
                         <a href="${noticia.link || '#'}" target="_blank" class="btn btn-outline-dark">Ver fuente</a>
                     </div>
                </div>
            `;
        }
      });
  }, []);

  return (
    <main id="main-noticias" className="noticias-container py-4">
      <div className="container">
        <h2 className="mb-4">Noticias sobre el Dólar</h2>
        <div
          id="noticias"
          className="d-flex flex-row flex-wrap justify-content-around gap-4"
        ></div>
      </div>
    </main>
  );
}

export default Noticias;

fetch('https://api.bluelytics.com.ar/v2/latest')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        //aca voy a crear el contenido html
        let contenidoHTML = `
            <h2>Dólar Oficial</h2>
                <div class="cotizacion-row">
                    <span class="cotizacion-label">Compra:</span>
                    <span class="cotizacion-value">$${data.oficial.value_buy}</span>
                </div>
                <div class="cotizacion-row">
                    <span class="cotizacion-label">Venta:</span>
                    <span class="cotizacion-value">$${data.oficial.value_sell}</span>
                </div>
                <div class="cotizacion-row">
                    <span class="cotizacion-label">Promedio:</span>
                    <span class="cotizacion-value">$${data.oficial.value_avg}</span>
                </div>
                
                <h2>Dólar Blue</h2>
                <div class="cotizacion-row">
                    <span class="cotizacion-label">Compra:</span>
                    <span class="cotizacion-value blue">$${data.blue.value_buy}</span>
                </div>
                <div class="cotizacion-row">
                    <span class="cotizacion-label">Venta:</span>
                    <span class="cotizacion-value blue">$${data.blue.value_sell}</span>
                </div>
                <div class="cotizacion-row">
                    <span class="cotizacion-label">Promedio:</span>
                    <span class="cotizacion-value blue">$${data.blue.value_avg}</span>
                </div>
        `;
        let contenedor = document.querySelector('#cotizacion-dolar');
        contenedor.innerHTML = contenidoHTML;
    });

fetch('https://newsdata.io/api/1/news?' +
      'apikey=pub_872920f1d2e2930ecec4fe73de047e2b520e8' +
      '&q=dólar' +
      '&country=ar' +
      '&language=es')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const contenedor = document.querySelector('#main-noticias');

        for(const noticia of data.results){
            contenedor.innerHTML += `
            <div class="noticia">
                <h2>${noticia.title}</h2>
                <p>${noticia.description || ""}</p>
                <img src="${noticia.image_url}" alt="">
                <a href="${noticia.source_url}" target="_blank">${noticia.source_name}</a>
            </div>
            `
        }
        
    });
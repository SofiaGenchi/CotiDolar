// hacer nav X
let headerHTML = document.querySelector('header');
let navHTML = `
    <div class="header-content">
            <h1>CotiDolar</h1>
            <nav>
                <a href="index.html" class="active">Inicio</a>
                <a href="noticias.html">Noticias</a>
            </nav>
    </div>
`
headerHTML.innerHTML = navHTML;

// hacer footer X
let footerHTML = document.querySelector('footer');
let divFooter = `
     <div class="footer-content">
            <div class="footer-section">
                <h3>CotiDolar AR</h3>
                <p>Seguimiento actualizado del dolar en Argentina</p>
            </div>

            <div class="footer-section">
                <h4>Enlaces</h4>
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="noticias.html">Noticias</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Contacto</h4>
                <p>Sofia Ailen Genchi</p>
                <div class="social-links">
                    <a href="https://github.com/SofiaGenchi" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/sofiagenchi/" target="_blank"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2025 CotiDolar AR - Todos los derechos reservados</p>
        </div>
`
footerHTML.innerHTML = divFooter

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

    //agregarle tarjetas de bootstrap X
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

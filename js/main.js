const places = [
  {
    name: "Machu Picchu – Peru",
    coords: [-13.1631, -72.5450],
    img: "https://aventurasnahistoria.com.br/wp-content/uploads/feedsync/macchu2.jpg",
    desc: "Machu Picchu é uma antiga cidade Inca envolta por montanhas e névoa. Um lugar onde engenharia, espiritualidade e natureza se unem de forma quase sobrenatural.",
    exp: "Assistir o nascer do sol em silêncio absoluto."
  },
  {
    name: "Kyoto – Japão",
    coords: [35.0116, 135.7681],
    img: "assets/images/kyoto.jpg",
    desc: "Kyoto preserva a alma do Japão tradicional, com templos, jardins zen e florestas de bambu que parecem saídos de outro tempo.",
    exp: "Participar de uma cerimônia do chá milenar."
  },
  {
    name: "Santorini – Grécia",
    coords: [36.3932, 25.4615],
    img: "assets/images/santorini.jpg",
    desc: "Casas brancas esculpidas sobre penhascos, contrastando com o azul intenso do Mar Egeu.",
    exp: "Ver o pôr do sol em Oia."
  },
  {
    name: "Petra – Jordânia",
    coords: [30.3285, 35.4444],
    img: "assets/images/petra.jpg",
    desc: "Uma cidade inteira esculpida em rochas rosadas no meio do deserto, antiga capital dos Nabateus.",
    exp: "Atravessar o Siq até ver o Tesouro (Al-Khazneh)."
  },
  {
    name: "Banff – Canadá",
    coords: [51.1784, -115.5708],
    img: "assets/images/banff.jpg",
    desc: "O coração das Montanhas Rochosas canadenses, com lagos azul-turquesa surreais como o Lake Louise e Moraine Lake.",
    exp: "Canoagem no lago Moraine ao amanhecer."
  },
  {
    name: "Ilha de Páscoa – Chile",
    coords: [-27.1127, -109.3497],
    img: "data:image/webp;base64,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",
    desc: "Um dos lugares mais isolados do mundo, Rapa Nui é guardada por centenas de estátuas Moai gigantes.",
    exp: "Ver as estrelas ao lado dos Moais em Ahu Tongariki."
  },
  {
    name: "Angkor Wat – Camboja",
    coords: [13.4125, 103.8670],
    img: "assets/images/angkor.jpg",
    desc: "O maior complexo religioso do mundo, onde raízes gigantes de árvores se entrelaçam com pedras milenares.",
    exp: "Explorar o templo Ta Prohm (famoso por Tomb Raider)."
  },
  {
    name: "Capadócia – Turquia",
    coords: [38.6431, 34.8289],
    img: "assets/images/capadocia.jpg",
    desc: "Uma paisagem lunar de 'chaminés de fadas' e cidades subterrâneas cavadas na rocha macia.",
    exp: "Voo de balão ao nascer do sol sobre o vale."
  },
  {
    name: "Bora Bora – Polinésia Francesa",
    coords: [-16.5004, -151.7415],
    img: "assets/images/borabora.jpg",
    desc: "Um vulcão extinto cercado por uma lagoa de águas cristalinas protegida por recifes de coral.",
    exp: "Dormir em um bangalô sobre as águas turquesas."
  },
  {
    name: "Salar de Uyuni – Bolívia",
    coords: [-20.1338, -67.4891],
    img: "assets/images/uyuni.jpg",
    desc: "O maior deserto de sal do mundo. Na época das chuvas, torna-se o maior espelho natural da Terra.",
    exp: "Tirar fotos em perspectiva no horizonte infinito."
  }
];

// --- 1. RENDERIZAÇÃO DOS LUGARES ---
const container = document.getElementById("places");

if (container) {
    container.innerHTML = places.map((p, index) => `
    <section class="place">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="place-content">
        <h2>${index + 1}. ${p.name}</h2>
        <p>${p.desc}</p>
        <span>✨ ${p.exp}</span>
      </div>
    </section>
  `).join("");
}

// --- 2. MAPA (LEAFLET) ---
// Verifica se o Leaflet foi carregado e se a div do mapa existe
if (typeof L !== 'undefined' && document.getElementById('map')) {
    
    // Inicia o mapa com zoom global
    const map = L.map('map').setView([20, 0], 2);

    // Adiciona o estilo do mapa (Tile Layer) - Usando CartoDB Dark para combinar com o site
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    // Ícone personalizado (opcional, aqui usando o padrão com cor ajustada via CSS seria mais complexo, mantendo padrão)
    
    // Adiciona os marcadores
    places.forEach(p => {
        L.marker(p.coords)
            .addTo(map)
            .bindPopup(`<b>${p.name}</b><br><img src="${p.img}" style="width:100px; margin-top:5px;">`);
    });
}

// --- 3. EFEITO PARALLAX SIMPLES ---
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    const back = document.getElementById('parallax-back');
    const front = document.getElementById('parallax-front');
    
    // Só aplica se os elementos existirem
    if(back && front) {
        // O fundo move mais devagar que o scroll
        back.style.transform = `translateY(${scrollY * 0.5}px)`;
        // A frente move um pouco mais rápido para criar profundidade
        front.style.transform = `translateY(${scrollY * 0.2}px)`;
    }
});

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Impede a página de recarregar

        // Pega os valores dos inputs
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        const botao = contactForm.querySelector('button');
        const textoOriginal = botao.innerText;
        botao.innerText = "Enviando...";
        botao.disabled = true;

        try {
            // Envia para o servidor que criamos no passo 2
            const response = await fetch('http://localhost:3000/enviar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nome, email, mensagem })
            });

            if (response.ok) {
                alert('✨ Obrigado! Sua mensagem foi enviada para nosso banco de dados.');
                contactForm.reset(); // Limpa o formulário
            } else {
                alert('Erro ao enviar. Tente novamente.');
            }

        } catch (error) {
            console.error('Erro:', error);
            alert('Erro de conexão com o servidor.');
        } finally {
            botao.innerText = textoOriginal;
            botao.disabled = false;
        }
    });
}
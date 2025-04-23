
const gifts = [
    {
        title: "Coffret bien-être",
        description: "Un moment de détente avec notamment huiles essentielles et bougies.",
        image: "https://www.natureetdecouvertes.com/fstrz/r/s/cache.natureetdecouvertes.com/Medias/Images/Articles/91644560/500?frz-v=810",
        link: "https://www.natureetdecouvertes.com/bien-etre/massage/coffrets-massage/coffret-bien-etre-vanille-91644560",
        overlay: ""
    },
    {
        title: "Tendresse à emporter",
        description: "Un véritable concentré d'amour dans ces adorables petites peluches.",
        image: "https://choupipop.com/cdn/shop/files/image00003-952968.jpg?v=1731405492&width=1100",
        link: "https://choupipop.com/products/choupi?variant=49598768709971",
        overlay:"Coup de coeur"	
    },
    {
        title: "Bijou personnalisé",
        description: "Un collier gravé avec les initiales de ses enfants.",
        image: "https://i.etsystatic.com/8595828/r/il/26a75c/6348574397/il_1140xN.6348574397_j225.jpg",
        link: "https://www.etsy.com/fr/listing/746893509/collier-prenom-personnalise-avec-chaine?ref=anchored_listing&pro=1",
	overlay:""
    },
    {
        title: "Collection de spécialités",
        description: "De nouvelles saveurs à découvrir ensemble.",
        image: "https://comtessedubarry.twic.pics/media/catalog/product/b/t/btern26_surprise.jpg?twic=v1",
        link: "https://www.comtessedubarry.com/coffret-surprise-collection-12-specialites.html",
	overlay:""
    },
    {
        title: "Livre inspirant",
        description: "Un roman ou un essai qui fait du bien à l’âme.",
        image: "https://www.lalibrairie.com/cache/img/livres/532/9782344065532.webp",
        link: "https://www.lalibrairie.com/livres/histoires-de-sororite_0-11866428_9782344065532.html?ctx=36e73d5990982fdbc0a5101d9dee6d2e",
        overlay:""	
    }
];

const container = document.getElementById('gift-list');

gifts.forEach(gift => {
    const card = document.createElement('div');
    card.className = 'gift-card';
    card.innerHTML = `
        <img src="${gift.image}" alt="${gift.title}">
	<div class="text-overlay ribbon blink">${gift.overlay}</div>
        <div class="gift-card-content">
            <h3>${gift.title}</h3>
            <p>${gift.description}</p>
            <a href="${gift.link}" target="_blank" rel="noopener noreferrer">Voir le cadeau</a>
        </div>
    `;
    container.appendChild(card);
});

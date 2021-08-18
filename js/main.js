//Carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

//Informações das imagens
var detalhes = [{
        id: 1,
        nome: 'Fritíssima',
        caminho: '/img/f1.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus nec sapien eleifend luctus et non ante. Phasellus mauris nibh, elementum ac elit et, accumsan tincidunt magna. Mauris et erat massa. Etiam nulla orci, accumsan sit amet tempus et, aliquet ac quam. Donec quis dui faucibus, laoreet massa quis, bibendum eros. Nulla vehicula quam sit amet elit laoreet mollis. Sed sollicitudin purus erat, eget vulputate dui dictum imperdiet. Nullam egestas purus at nisi vehicula vehicula. Nulla aliquam nulla mi.'
    }, {
        id: 2,
        nome: 'Cheddar Bacon',
        caminho: '/img/f2.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus nec sapien eleifend luctus et non ante. Phasellus mauris nibh, elementum ac elit et, accumsan tincidunt magna. Mauris et erat massa. Etiam nulla orci, accumsan sit amet tempus et, aliquet ac quam. Donec quis dui faucibus, laoreet massa quis, bibendum eros. Nulla vehicula quam sit amet elit laoreet mollis. Sed sollicitudin purus erat, eget vulputate dui dictu.'
    },
    {
        id: 3,
        nome: 'Shoyu Salsa',
        caminho: '/img/f3.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus nec sapien eleifend luctus et non ante. Phasellus mauris nibh, elementum ac elit et, accumsan tincidunt magna. Mauris et erat massa. Etiam nulla orci, accumsan sit amet tempus et, aliquet ac quam. Donec quis dui faucibus, laoreet massa quis, bibendum eros. Nulla vehicula quam sit amet elit laoreet mollis.'
    },
    {
        id: 4,
        nome: 'Salsinha',
        caminho: '/img/f4.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus nec sapien eleifend luctus et non ante. Phasellus mauris nibh, elementum ac elit et, accumsan tincidunt magna. Mauris et erat massa. Etiam nulla orci, accumsan sit amet tempus et, aliquet ac quam. Donec quis dui faucibus, laoreet massa quis, bibendum eros.'
    },
    {
        id: 5,
        nome: 'Sheddar Catupiry Bacon',
        caminho: '/img/f5.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus nec sapien eleifend luctus et non ante. Phasellus mauris nibh, elementum ac elit et, accumsan tincidunt magna. Mauris et erat massa. Etiam nulla orci, accumsan sit amet tempus et, aliquet ac quam'
    },
    {
        id: 6,
        nome: 'Sheddar Catupiry',
        caminho: '/img/f6.jpg',
        desc: 'Lorem Donec quis dui faucibus, laoreet massa quis, bibendum eros.'
    },
    {
        id: 7,
        nome: 'OldSchool',
        caminho: '/img/f7.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus nec sapien eleifend luctus et non ante. Phasellus mauris nibh, elementum ac elit et, accumsan tincidunt magna.'
    },
    {
        id: 8,
        nome: 'Fritas-Burger',
        caminho: '/img/f8.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus nec sapien eleifend luctus et non ante. Phasellus mauris nibh, elementum ac elit et, accumsan tincidunt magna. Mauris et erat massa. Etiam nulla orci, accumsan sit amet tempus et, aliquet ac quam. Donec quis dui faucibus, laoreet massa quis, bibendum eros.'
    }
]

//Troca de Imagens

function troca(item) {
    banner = document.getElementById("filmeprincipal");
    titulo = document.getElementById("titulo");
    descricao = document.getElementById("descricao");
    detalhes.forEach(element => {
        if (element.id == item.id) {
            banner.style.background = "linear-gradient(rgba(0, 0, 0, .50), rgba(0, 0, 0, .50)100%), url(" + element.caminho + ")"
            banner.style.backgroundSize = "100% 100%"
            banner.style.backgroundRepeat = "no-repeat"
            titulo.innerText=element.nome;
            descricao.innerText= element.desc;
        }

    });
}
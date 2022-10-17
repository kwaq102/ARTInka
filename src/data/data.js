import bubbles from '../imgs/bubbles.jpg';
import bubbles2 from '../imgs/bubbles2.jpg';
import painting  from '../imgs/painting.jpeg';
import paintingOnStreet from '../imgs/paintingOnStreet.jpg';
import tattoos from '../imgs/kidsTattoo.jpg';

export const navList = [
    {navName: 'Start', path: '/', end:true},
    {navName: 'Animacje', path: '/stanowiska-animacyjne'},
    {navName: 'Galeria', path: '/galeria'},
    {navName: 'Cennik', path: '/cennik'},
    {navName: 'Kontakt', path: '/kontakt'},
]

export const photosOnSlider = [
    {
        id: 0,
        title: "Tatuaże na rękach dzieci",
        photo: tattoos,

    },
    {
        id: 1,
        title: "Rysowanie twarzy",
        photo: painting,
    },
    {
        id: 2,
        title: "Bański mydlane",
        photo: bubbles2,
    },
    {
        id: 3,
        title: "Malowanie ulicy",
        photo: paintingOnStreet,
    },
    {
        id: 4,
        title: "Bański mydlane",
        photo: bubbles,
    },
]
import bubbles from '../imgs/bubbles.jpg';
import paintingFace3 from '../imgs/paintingFace3.jpg';
import painting  from '../imgs/painting.jpeg';
import paintFace4 from '../imgs/paintFace4.jpg';
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
        photo: paintingFace3,
    },
    {
        id: 3,
        title: "Malowanie ulicy",
        photo: paintFace4,
    },
    {
        id: 4,
        title: "Bański mydlane",
        photo: bubbles,
    },
]
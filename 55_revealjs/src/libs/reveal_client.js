import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';


function init(){
   let deck = new Reveal(document.querySelector('#reveal-container'),
    {
        embedded: true,
        plugins: [Markdown],
    });
    deck.initialize();
}

document.addEventListener( 'DOMContentLoaded', init)


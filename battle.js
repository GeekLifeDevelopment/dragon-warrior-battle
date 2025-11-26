import { hero } from './monsters/hero.js';
import { monster } from './monsters/monster.js';

const attack = () => {
    console.log('The hero attacks the monster!');
}

// Add click event listener when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const monsterImage = document.getElementById('monster-image');
    monsterImage.addEventListener('click', attack);
});


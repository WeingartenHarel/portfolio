'use strict';

function makeId(length = 4) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

function makePrice(min=10, max=100) {
    var price = getRandomIntInclusive(min, max);
    //console.log(price)
    return price;
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function randomColorByPallete() {
    var colors = ['#007bff', '#28a745', '#dc3545']
    var currColorIdx = getRandomIntInclusive(0, 2)
    //console.log(currColorIdx)
    var color = colors[currColorIdx];
    return color;
}

function randomColor() {
    var color = "";
    for (var i = 0; i < 3; i++) {
        color += getRandomIntInclusive(0, 255) + ',';
    }
    color = 'rgb('+color.slice(1, -1)+')';
    //console.log('color', color)
    return color;
}
'use strict';


function getDogImage(n) {
    fetch(`https://dog.ceo/api/breed/${n}/images/random`)
        .then(response => response.json())
        .then(responseJson => generateDogImageTemplate(responseJson));

}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        let n = $('#dog-breed').val();
        getDogImage(n);

    });
}


const generateDogImageTemplate = (dogLink) => {
    let html = '';
    const pics = dogLink.message;
    console.log(dogLink.message);

    // pics.forEach(pic => {
    html += `<img src="${pics}">`;
    console.log(html);
    // });

    $('#dog-image').html(html);

};

$(function () {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});


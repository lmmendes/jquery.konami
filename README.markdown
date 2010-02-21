Konami Code
============

A very simple implementation of the Konami Code

How to use
-----------

    $(window).konami(function(){
        alert('Danger Will Robinson. Danger.');
    });

You can custom the Konami code passing it's as string containing ASCII char separated by a ,

    $window.konami(function(){
        alert('Danger Will Robinson. Danger,');
    }, '32,32');


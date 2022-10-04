
let open = document.getElementsByTagName("button");
let cont = document.querySelector('.continer');
let close = document.querySelector('.clos')

console.log(cont);
// lisnerss




open.addEventListener('click', function( {
    cont.style.display='block';
});
        

close.addEventListener('click', function () {
    cont.style.display = 'none';
});
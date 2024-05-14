var mydiv=document.getElementsByTagName("p");

console.log(mydiv);

var mydiv2=document.querySelectorAll("#mydiv>p");
// console.log(mydiv2);



for (let index = 0; index < mydiv2.length; index++) {
    // const element = array[index];
    mydiv2[index].onclick = function ()
    {
        alert(
          mydiv2[index].innerText
        );
    }
    
}
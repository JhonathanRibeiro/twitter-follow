let cont = 0;
let arr = document.querySelectorAll(".css-18t94o4.css-1dbjc4n.r-1niwhzg.r-p1n3y5.r-sdzlij.r-1phboty.r-rs99b7");
arr.forEach((v, i) => {
    setTimeout(() => {
        if (!v.classList.contains('css-18t94o4 css-1dbjc4n r-urgr8i r-42olwf r-sdzlij r-1phboty r-rs99b7')) {
            v.click();
            cont++;
            console.log('Jhonathan já seguiu' + cont + 'pessoas');
        } else {
            console.log('Já esta seguindo este usuário');
        }
    }, i * 5000);
});
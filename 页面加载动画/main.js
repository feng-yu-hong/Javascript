const loder = document.querySelector('.loder');
const loder = document.querySelector('.main');

function init(){
    setTimeout(() =>{
        loder.style.opacity = 0;
        loder.style.display = 'none';

        main.style.display = 'block';
        setTimeout(() =>(main.style.opacity = 1),50);
    },4000)

}
init();
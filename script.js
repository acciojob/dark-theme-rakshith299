function swapTheme(){
    let main = document.getElementById("app");
    let button = document.getElementById("swap");

    console.log(main.classList.value);

    if(main.classList.value === 'day'){
        main.classList.remove('day');
        main.classList.add('night');
        button.classList.remove('button_day');
        button.classList.add('button_night');
    }else if(main.classList.value === 'night'){
        main.classList.remove('night');
        main.classList.add('day');
        button.classList.remove('button_night');
        button.classList.add('button_day');
    }



}



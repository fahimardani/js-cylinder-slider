let slider = document.querySelector('.slider')
let prevBtn = document.querySelector('#prevBtn')
let nextBtn = document.querySelector('#nextBtn')
let p = document.querySelector('p')

prevBtn.onclick = ()=> {
    slider.prepend(slider.querySelector('img:last-child'))
    slider.animate([
        { transform: 'translatex(100%)' },
        { transform: 'translatex(0)' }
      ], {
        duration: 500,
        iterations: 1
    });
    p.animate([
      { transform: 'translateY(-100%)',
        opacity: 0
       },
      { transform: 'translateY(0)',
        opacity: 1
       }
    ], {
      duration: 500,
      iterations: 1
    });

    if (p.innerHTML === "You are Ms. Servant") {
        p.innerHTML = "2.5 Dimensional Seduction";
    }
    else if (p.innerHTML === "2.5 Dimensional Seduction") {
        p.innerHTML = "Ranma 1/2";
    }
    else if (p.innerHTML === "Ranma 1/2") {
        p.innerHTML = "Dandadan";
    }
    else if (p.innerHTML === "Dandadan") {
        p.innerHTML = "Blue Box";
    }
    else {
        p.innerHTML = "You are Ms. Servant";
    }
}
nextBtn.onclick = ()=> {
    slider.append(slider.querySelector('img:first-child'))
    slider.animate([
        { transform: 'translatex(-100%)' },
        { transform: 'translatex(0)' }
      ], {
        duration: 500,
        iterations: 1
    });

    p.animate([
      { transform: 'translateY(100%)',
        opacity: 0
       },
      { transform: 'translateY(0)',
        opacity: 1
       }
    ], {
      duration: 500,
      iterations: 1
    });

    if (p.innerHTML === "You are Ms. Servant") {
        p.innerHTML = "Blue Box";
    }
    else if (p.innerHTML === "Blue Box") {
        p.innerHTML = "Dandadan";
    }
    else if (p.innerHTML === "Dandadan") {
        p.innerHTML = "Ranma 1/2";
    }
    else if (p.innerHTML === "Ranma 1/2") {
        p.innerHTML = "2.5 Dimensional Seduction";
    }
    else {
        p.innerHTML = "You are Ms. Servant";
    }
}
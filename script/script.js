const slider = document.querySelector('#inspire-slider');
let inspireNum = 0;
let total = document.querySelectorAll('.card').length;
let percentage = 100 / total;
document.querySelectorAll('.scroll-btns .bubble').forEach((element, index) => {
    let max = total - 1;
    if (index === 0) {
        element.addEventListener('click', () => {
            if (inspireNum === 0) {
                if (element.classList.contains('active')) {
                    element.classList.remove('active');
                    element.nextElementSibling.classList.add('active');
                }
            } else {
                inspireNum = inspireNum - 1;
                final = inspireNum * percentage;
                slider.style.transform = `translateX(-${final}%)`;
                if (inspireNum === 0) {
                    if (element.classList.contains('active')) {
                        element.classList.remove('active');
                        element.nextElementSibling.classList.add('active');
                    }
                } else {
                    if (!element.nextElementSibling.classList.contains('active')) {
                        element.nextElementSibling.classList.add('active');
                    }
                }
            }
        });
    } else {
        element.addEventListener('click', () => {
            inspireNum = inspireNum + 1;
            if (inspireNum <= max) {
                final = inspireNum * percentage;
                slider.style.transform = `translateX(-${final}%)`;
                if (inspireNum === max) {
                    if (element.classList.contains('active')) {
                        element.classList.remove('active');
                        element.previousElementSibling.classList.add('active');
                    }
                } else {
                    if (!element.previousElementSibling.classList.contains('active')) {
                        element.previousElementSibling.classList.add('active');
                    }
                }
            } else {
                discover = discover - 1;
            }
        });
    }
});
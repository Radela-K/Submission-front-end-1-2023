const showSlide = (numberSlide) => {
    let index;
    let selectSlide = document.getElementsByClassName("slide");
    let selectDot = document.getElementsByClassName("dotSign");
    if (numberSlide > selectSlide.length) {
        indexSlide = 1
    }
    if (numberSlide < 1) {
        indexSlide = selectSlide.length
    }
    for (index = 0; index < selectSlide.length; index++) {
        selectSlide[index].style.display = "none";
    }
    for (index = 0; index < selectDot.length; index++) {
        selectDot[index].className = selectDot[index].className.replace(" active", "");
    }
    selectSlide[indexSlide - 1].style.display = "block";
    selectDot[indexSlide - 1].className += " active";
}

let indexSlide = 1;
showSlide(indexSlide);

const nextSlide = (numberSlide) => {
    showSlide(indexSlide += numberSlide);
}

const runningSlide = (numberSlide) => {
    showSlide(indexSlide = numberSlide);
}

document.getElementsByClassName("previous")[0].addEventListener("click", () => {
    console.log("click previous");
    nextSlide(-1);
});

document.getElementsByClassName("next")[0].addEventListener("click", () => {
    console.log("click next");
    nextSlide(1);
});

const selectButtonContent = document.getElementsByClassName("dotSign");
for (let index = 0; index < selectButtonContent.length; index++) {
    selectButtonContent[index].addEventListener("click", () => {
        console.log(`tombol nomor ${index + 1}, index ${index}`);
        runningSlide(index + 1);
    });
};
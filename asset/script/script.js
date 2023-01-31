const selectLinkNav = document.getElementsByClassName("linkNav");
for (let index = 0; index < selectLinkNav.length; index++) {
    selectLinkNav[index].addEventListener("click", function () {
        console.log(index);
        const selectActiveClass = document.getElementsByClassName("active");
        selectActiveClass[0].className = selectActiveClass[0].className.replace(" active", " ");
        this.className += " active";
    });
};

const selectButtonAction = document.getElementsByClassName("buttonAction");
for (let index = 0; index < selectButtonAction.length; index++) {
    selectButtonAction[index].addEventListener("click", function () {
        console.log(index);
        const selectActiveClass = document.getElementsByClassName("activeAction");
        selectActiveClass[0].className = selectActiveClass[0].className.replace(" activeAction", " ");
        this.className += " activeAction";
    });
};
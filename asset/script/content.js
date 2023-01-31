let textContent = "";
const loadContent = () => {
    document.getElementsByClassName("cardContent")[0].innerHTML = textContent;
};

document.getElementsByClassName("buttonPengantar")[0].addEventListener("click", () => {
    textContent = `
    <h3>Pengantar</h3>
    <img src="./asset/image/hero2.svg" alt="html css js">
    <article>Sebagian besar Halaman web yang terdapat di internet tersusun atas 3 bahasa. Tiga bahasa ini
        adalah HTML, CSS dan Javascript. </article>
    `;
    loadContent();
});

document.getElementsByClassName("buttonHtml")[0].addEventListener("click", () => {
    textContent = `
    <h3>HTML (Hyper Text Markup Language)</h3>
    <i class="fa-brands fa-html5"></i>
    <article>adalah bahasa markup yang digunakan untuk membuat Halaman web. HTML adalah markup yang digunakan untuk mendefinisikan struktur halaman web. Hal ini seperti misalnya membuat elemen paragraf, gambar, link dan lain sebagainya. HTML tersusun atas elemen/tag HTML.
    </article>
    `;
    loadContent();
});

document.getElementsByClassName("buttonCss")[0].addEventListener("click", () => {
    textContent = `
    <h3>CSS (Cascading Style Sheet)</h3>
    <i class="fa-brands fa-css3-alt"></i>
    <article>adalah bahasa yang digunakan untuk mengatur tampilan (gaya) elemen-elemen HTML. Dengan CSS, kita dapat memberikan warna background, border, mengatur posisi elemen, ukuran font dan lain sebagainya.
    </article>
    `;
    loadContent();
});

document.getElementsByClassName("buttonJs")[0].addEventListener("click", () => {
    textContent = `
    <h3>Javascript</h3>
    <i class="fa-brands fa-js"></i>
    <article>adalah bahasa pemrograman (berjalan pada web browser) yang digunakan untuk membuat halaman web yang lebih interaktif. Dengan javascript, kita bisa membuat banyak fitur pada halaman web. Javascript memungkinkan kita untuk mendeteksi dan menindaklanjuti prilaku pengunjung (events) pada halaman web.</article>
    `;
    loadContent();
});
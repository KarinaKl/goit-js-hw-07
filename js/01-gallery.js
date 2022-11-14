import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");
const galleryCardSet = galleryItems.map(createGalleryCard).join("");

galleryEl.insertAdjacentHTML("beforeend", galleryCardSet);
galleryEl.addEventListener("click", onClickImg);

function createGalleryCard({ preview, original, description }) {
  return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
}

function onClickImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`
  );
  instance.show();

  window.addEventListener("keydown", onCloseEscape);
  function onCloseEsc(e) {
    const isEsKey = e.code === "Escape";
    if (isEscapeKey) {
      instance.close();
    }
  }
}
console.log(galleryItems);

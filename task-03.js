const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const createGalleryItem = (items) => {
  const galleryItem = document.createElement("img");
  galleryItem.src = items.url;
  galleryItem.alt = items.alt;
  galleryItem.classList.add("task3__gallery__item");
  return galleryItem;
};
const galleryRef = images.map((item) => createGalleryItem(item));
const gallery = document.querySelector("#gallery");
gallery.append(...galleryRef);
gallery.classList.add("task3__gallery");

import { fetchImages } from './api.js';
import {
    displayImages,
    clearGallery,
    removeLastImage,
    reverseGallery,
    updateImageSizes
} from './gallery.js';

let currentPage = 1;

async function loadMoreImages() {
    const images = await fetchImages();
    displayImages(images);
}

document.getElementById('loadMore').addEventListener('click', loadMoreImages);
document.getElementById('clearGallery').addEventListener('click', clearGallery);
document.getElementById('removeLast').addEventListener('click', removeLastImage);
document.getElementById('reverseGallery').addEventListener('click', reverseGallery);
window.addEventListener('resize', updateImageSizes);

// Завантажити початкові зображення при першому запуску
loadMoreImages();

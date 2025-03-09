import { imagesPerRow } from './api.js';

const gallery = document.getElementById('gallery');
let imageUrls = [];

export function displayImages(images) {
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.download_url;
        gallery.appendChild(imgElement);
    });
    updateImageSizes();
}

export function renderGallery() {
    gallery.innerHTML = '';
    imageUrls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        gallery.appendChild(img);
    });
    updateImageSizes();
}

export function clearGallery() {
    imageUrls = [];
    renderGallery();
}

export function removeLastImage() {
    imageUrls.pop();
    renderGallery();
}

export function reverseGallery() {
    imageUrls.reverse();
    renderGallery();
}

export function updateImageSizes() {
    const containerWidth = gallery.clientWidth;
    const minGap = 3;
    const maxGap = 15;
    const gap = Math.min(Math.max(containerWidth * 0.03, minGap), maxGap);
    const totalGapWidth = gap * (imagesPerRow - 1);
    const imageWidth = (containerWidth - totalGapWidth) / imagesPerRow;

    const imgElements = gallery.getElementsByTagName('img');
    for (let img of imgElements) {
        img.style.width = `${imageWidth}px`;
        img.style.height = 'auto';
    }

    gallery.style.gap = `${gap}px`;
}

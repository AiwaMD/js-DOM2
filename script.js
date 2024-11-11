let imageUrls = [];
const gallery = document.getElementById("gallery");

window.onload = loadMoreImages;

async function loadMoreImages() {
    try {
        const response = await fetch("https://picsum.photos/v2/list?page=1&limit=4");
        const data = await response.json();
        data.forEach(image => {
            if (!imageUrls.includes(image.download_url)) {
                imageUrls.push(image.download_url);
                displayImage(image.download_url);
            }
        });
    } catch (error) {
        console.error("Error fetching images:", error);
    }
}

function displayImage(url) {
    const img = document.createElement("img");
    img.src = url;
    gallery.appendChild(img);
}

function clearGallery() {
    gallery.innerHTML = "";
    imageUrls = [];
}

function removeLastImage() {
    if (gallery.lastChild) {
        gallery.removeChild(gallery.lastChild);
        imageUrls.pop();
    }
}

function reverseGallery() {
    const images = Array.from(gallery.children);
    gallery.innerHTML = "";
    images.reverse().forEach(img => gallery.appendChild(img));
}

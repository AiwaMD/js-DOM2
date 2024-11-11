let imageUrls = [];
const gallery = document.getElementById("gallery");

// Fetch initial images on page load
window.onload = loadMoreImages;

// Load more images
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

// Display an image in the gallery
function displayImage(url) {
    const img = document.createElement("img");
    img.src = url;
    gallery.appendChild(img);
}

// Clear all images from the gallery
function clearGallery() {
    gallery.innerHTML = "";
    imageUrls = [];
}

// Remove the last image in the gallery
function removeLastImage() {
    if (gallery.lastChild) {
        gallery.removeChild(gallery.lastChild);
        imageUrls.pop();
    }
}

// Reverse the order of images in the gallery
function reverseGallery() {
    const images = Array.from(gallery.children);
    gallery.innerHTML = "";
    images.reverse().forEach(img => gallery.appendChild(img));
}

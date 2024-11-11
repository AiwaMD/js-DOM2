const gallery = document.getElementById('gallery'); 
let imageUrls = []; 
 
async function fetchImages(count = 4) { 
    const response = await fetch(`https://picsum.photos/v2/list?page=${Math.floor(Math.random() * 10) + 1}&limit=${count}`); 
    const images = await response.json(); 
    return images.map(img => img.download_url); 
} 
 
async function loadMoreImages() { 
    const newImages = await fetchImages(4); 
    imageUrls.push(...newImages); 
    renderGallery(); 
} 
 
function renderGallery() { 
    gallery.innerHTML = ''; 
    imageUrls.forEach(url => { 
        const img = document.createElement('img'); 
        img.src = url; 
        gallery.appendChild(img); 
    }); 
} 
 
function clearGallery() { 
    imageUrls = []; 
    renderGallery(); 
} 
 
function removeLastImage() { 
    imageUrls.pop(); 
    renderGallery(); 
} 
 
function reverseGallery() { 
    imageUrls.reverse(); 
    renderGallery(); 
} 
 
// Завантажити початкові 4 картинки при першому завантаженні сторінки 
loadMoreImages();
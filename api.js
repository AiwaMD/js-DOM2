export const imagesPerRow = 4;

export async function fetchImages() {
    const response = await fetch(`https://picsum.photos/v2/list?page=${Math.floor(Math.random() * 10) + 1}&limit=${imagesPerRow}`);
    return await response.json();
}

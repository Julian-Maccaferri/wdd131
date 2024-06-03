document.addEventListener('DOMContentLoaded', () => {
    let reviewCount = localStorage.getItem('reviewCount');

    if (reviewCount === null) {
        reviewCount = 0;
    }

    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    document.getElementById('reviewCount').textContent = reviewCount;
});
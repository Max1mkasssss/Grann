let currentIndex = 0;
        const thumbnails = document.querySelectorAll('.thumbnail');
        const mainPhoto = document.getElementById('mainPhoto');
    
        function setMainPhoto(index) {
            currentIndex = index;
            mainPhoto.src = thumbnails[currentIndex].src;
        }
    
        function updateThumbnails() {
            thumbnails.forEach((thumbnail, index) => {
                thumbnail.style.display = 'none';
                if (index >= currentIndex && index < currentIndex + 3) {
                    thumbnail.style.display = 'block';
                }
            });
        }
    
        function prevThumbnail() {
            if (currentIndex > 0) {
                currentIndex--;
            }
            updateThumbnails();
            setMainPhoto(currentIndex);
        }
    
        function nextThumbnail() {
            if (currentIndex < thumbnails.length - 1) {
                currentIndex++;
            }
            updateThumbnails();
            setMainPhoto(currentIndex);
        }
    
        document.addEventListener('DOMContentLoaded', () => {
            updateThumbnails();
            setMainPhoto(currentIndex);
        });
        function toggleDropdown(listId, btn) {
        const dropdownList = document.getElementById(listId);
        const arrow = btn.querySelector('.arrow');
    
        dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
    
        // Изменяем направление стрелки
        arrow.style.transform = dropdownList.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
    }
    
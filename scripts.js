document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.categories');
    const categoryList = document.getElementById('category-list');

    // Function to toggle the category list
    function toggleCategoryList() {
        if (categoryList.style.display === 'none' || categoryList.style.display === '') {
            categoryList.style.display = 'block';
        } else {
            categoryList.style.display = 'none';
        }
    }

    // Toggle the category list on button click
    toggleButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevents the click from propagating to the document
        toggleCategoryList();
    });

    // Close the category list when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!toggleButton.contains(event.target) && !categoryList.contains(event.target)) {
            categoryList.style.display = 'none';
        }
    });

    // Ensure the category list is hidden initially
    categoryList.style.display = 'none';

    //
    
});
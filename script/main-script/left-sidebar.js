let leftSidebarContainer = document.getElementById('left-sidebar-container');
let leftSidebarSlideButton = document.getElementById('slide-button');


//Toggle the width of the left-sidebar
leftSidebarSlideButton.addEventListener('mouseover', function() {
    leftSidebarContainer.classList.toggle('active');
});
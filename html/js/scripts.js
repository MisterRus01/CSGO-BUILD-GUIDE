function showTab(tabId) {

    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.remove('active'));
    
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');

}


function openLightbox(imageSrc, description) {

    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxDescription = document.getElementById('lightboxDescription');
    
    lightboxImage.src = imageSrc;
    lightboxDescription.innerHTML = description;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.querySelector('.lightbox');
    lightbox.style.display = 'none';
}

function showNestedTab(tabId) { 
    var nestedTabs = document.getElementsByClassName('nested-tab-content');
    for (var i = 0; i < nestedTabs.length; i++) {
        nestedTabs[i].style.display = 'none';
    }

    var selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }
}
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.scroll-to-top-link');

    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();

        window.scrollTo(0, 0);
      });
    });
  });

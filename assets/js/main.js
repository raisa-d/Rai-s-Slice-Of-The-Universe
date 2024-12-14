// JQuery Ripples
$(document).ready(function () {
    // Initialize the ripples plugin on the element
    $('#main').ripples({
        dropRadius: 10,    // Ripple radius
        perturbance: 0.05, // Wave intensity
        resolution: 256,   // Render quality
        interactive: true  // Allow mouse interactions
    });
});

// Popup for collage pictures
function showModal(imageUrl) {
    const modal = document.getElementById("retro-modal");
    const modalImage = document.getElementById("modal-image");
    modalImage.src = imageUrl;
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("retro-modal");
    modal.style.display = "none";
}

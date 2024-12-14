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
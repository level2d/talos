/* embedded_1.js */
(function () {
    'use strict';

    function start() {
        console.log('3D Scanner script started');
    }

    // Run immediately if DOM is ready; otherwise wait
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start, { once: true });
    } else {
        start();
    }
})();
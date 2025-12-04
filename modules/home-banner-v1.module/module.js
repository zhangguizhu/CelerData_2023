$(window).load( function() {
    // setTimeout(function () {
      bodymovin.loadAnimation({
        container: document.getElementById('banner-lottie-container-v1'), // required
        path: 'https://celerdata.com/hubfs/js/home-banner-v2.json', // required
        renderer: 'svg', // required
        loop: true, // optional
        autoplay: true, // optional
        name: "Flow", // optional
      })
    // }, 100)
});
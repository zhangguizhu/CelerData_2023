$(window).load( function() {
    // setTimeout(function () {
      bodymovin.loadAnimation({
        container: document.getElementById('banner-lottie-container'), // required
        path: 'https://celerdata.com/hubfs/js/home-banner.json', // required
        renderer: 'svg', // required
        loop: true, // optional
        autoplay: true, // optional
        name: "Flow", // optional
      })
    // }, 100)
});
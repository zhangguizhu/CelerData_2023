$(window).load( function() {
    setTimeout(function () {
      bodymovin.loadAnimation({
        container: document.getElementById('satellite-lottie-container'), // required
        path: 'https://celerdata.com/hubfs/js/satellite.json', // required
        renderer: 'svg', // required
        loop: true, // optional
        autoplay: true, // optional
        name: "Flow", // optional
      })
    }, 200)
});
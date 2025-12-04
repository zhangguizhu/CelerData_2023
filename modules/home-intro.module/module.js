$(window).load( function() {
    setTimeout(function () {
      bodymovin.loadAnimation({
        container: document.getElementById('frame-lottie-container'), // required
        path: 'https://celerdata.com/hubfs/js/frame.json', // required
        renderer: 'svg', // required
        loop: true, // optional
        autoplay: true, // optional
        name: "Flow", // optional
      })
    }, 200)
});
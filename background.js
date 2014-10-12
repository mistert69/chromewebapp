chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('fft.html', {
    'bounds': {
      'width': 800,
      'height': 400
    }
  });
});

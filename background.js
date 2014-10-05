chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('29_dynamic_labels.html', {
    'bounds': {
      'width': 800,
      'height': 400
    }
  });
});

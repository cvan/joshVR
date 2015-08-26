var mirror = require('./editor');

/**
 * To load a scene, open `http://localhost:8080/?url={url}` where `{url}`
 * resembles one of the following URL formats:
 *
 * http://example.com/scene.xml
 * https://gist.github.com/anonymous/528f10188d08e13c92cb/
 * https://gist.github.com/anonymous/528f10188d08e13c92cb/raw/cbfc338590bc9e8a54e9d00feab421d27efbc30c/joshVR.xml
 * https://gist.github.com/anonymous/528f10188d08e13c92cb/raw/
 * https://gist.githubusercontent.com/anonymous/528f10188d08e13c92cb/
 * https://gist.githubusercontent.com/anonymous/528f10188d08e13c92cb/raw/cbfc338590bc9e8a54e9d00feab421d27efbc30c/joshVR.xml
 * https://gist.githubusercontent.com/anonymous/528f10188d08e13c92cb/raw/
 *
 * @param {String} url A scene URL (joshVR XML file) to load.
 * @param {Function} onSuccess Callback function to execute when scene is loaded.
 * @param {Function} onError Callback function to execute when scene cannot be fetched.
 */
function loadScene(url, onSuccess, onError) {
  // Match https://gist.github.com/anonymous/528f10188d08e13c92cb/ and
  // https://gist.githubusercontent.com/anonymous/528f10188d08e13c92cb/.
  if (url.match(/gist\.(github|githubusercontent).com\/\w+\/\w+\/*?$/)) {
    // Remove trailing slashes and append `/raw/` to get the raw URL.
    url = url.replace(/\/*$/, '') + '/raw/';
  }

  if (url.indexOf('gist.github.com') > 0) {
    // We can't just handle the redirects. We must load the
    // `gist.githubusercontent.com` URLs because they are the only Gist
    // endpoints with CORS headers set.
    url = url.replace('gist.github.com', 'gist.githubusercontent.com');
  }

  var xhr = new XMLHttpRequest;
  xhr.open('get', url);
  xhr.onload = function () {
    mirror.doc.setValue(xhr.response);
    if (onSuccess) {
      onSuccess(xhr);
    }
  };
  xhr.onerror = function () {
    if (onError) {
      onError(xhr);
    }
  };
  xhr.send();
}

module.exports = loadScene;

require('babel-core/register');

function noop() {
  return null;
}
require.extensions['.png'] = noop;
require.extensions['.jpg'] = noop;
require.extensions['.jpeg'] = noop;
require.extensions['.gif'] = noop;

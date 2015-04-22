# ember-cli-es5-shim

This Ember CLI addon imports the es5-shim for your for add/addon. 

ES5 support for older browsers and phantomjs is added using a generator that
adds the dependency for es5-shim to your bower.json file. And imports the
dev/prod version of the es5-shim library into your vendor.js file.


### Installation / Usage

From within your Ember CLI application (must be >= 0.0.41), run the following:

```bash
npm install --save-dev ember-cli-es5-shim
ember generate ember-cli-es5-shim
bower install
```

You can now use ES5 syntax supported by the `es5-shim` library.


### Notes on Phantomjs and Function.bind

You may choose to use `function () {}.bind` and expect that phantomjs won't
error out when you execute your test runner (phantomjs does not support
Function.bind out of the box.

Perhaps try out Function.bind with phantomjs, create a test like so, and
execute it with `ember test`.

```javascript
module('Function.bind test in phantomjs');

test('Function.bind works', function() {
  this.result = false;

  (function() {
    return this.result = true;
  }.bind(this))();

  ok(this.result);
  delete this.result;
});
```

### References

* [es5-shim](https://github.com/es-shims/es5-shim/)
* more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

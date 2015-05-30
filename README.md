[Bootstrap](http://getbootstrap.com) packaged for [Meteor.js](http://meteor.com) without Glyph Icons.


# Usage

```sh
meteor add twbs:bootstrap-noglyph
```

Features requiring JavaScript (such as drop-downs) or custom jQuery plugins like tooltip or popover should work automatically.
If they don't work in templates other than `body`, make sure to run the initialization code in `Template.<yourtemplate>.rendered`:

```js
Template.foo.rendered = function () {
  this.$('[data-toggle="dropdown"]').dropdown();
  this.$('[data-toggle="tooltip"]').tooltip();
  this.$('[data-toggle="popover"]').popover();
}
```

For performance reasons, [the Tooltip and Popover data-apis are opt-in](http://getbootstrap.com/javascript/#popovers).
Above, we initialize them in the limited scope of the template DOM.


# Issues

If you encounter a Meteor-related issue while using this package, please CC @dandv when you [file it](https://github.com/twbs/bootstrap/issues).

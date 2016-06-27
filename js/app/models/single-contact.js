define('models/single-contact', [
  'backbone'
], function(
  BB
) {
  var Contact = BB.Model.extend({
      defaults: {
          photo: "http://goo.kiev.ua/s/persik/3.png"
      }
  });

  return Contact;
});

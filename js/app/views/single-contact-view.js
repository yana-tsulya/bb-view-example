define('views/single-contact-view',[
  'jquery',
  'backbone',
  'underscore'
], function(
  $,
  BB,
  _
){
  var ContactView = BB.View.extend({
       tagName: "article",
       className: "contact-container",
       template: $("#contactTemplate").html(),

       render: function () {
           var tmpl = _.template(this.template);

           $(this.el).html(tmpl(this.model.toJSON()));
           return this;
       }
   });

   return ContactView;
});

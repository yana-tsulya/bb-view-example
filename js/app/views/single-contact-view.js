define('views/single-contact-view', [
    'jquery',
    'backbone',
    'underscore'
], function ($,
             BB,
             _) {
    var ContactView = BB.View.extend({
        tagName: "li",
        className: "contact-container",
        // template: $("#contactTemplate").html(),

        template: $("#dataContactTemplate").html(),

        events: {
            "click .js-delete-contact": "delete"
        },

        initialize: function() {
            this.listenTo(this.model, "change", this.render);
        },

        // render: function () {
        //     var tmpl = _.template(this.template);
        //
        //     $(this.el).html(tmpl(this.model.toJSON()));
        //     return this;
        // },

        render: function() {
          $(this.el).html(this.template);

          $(this.el).find('[data-name]').text(this.model.get("name"));
          return this;
        },

        delete: function() {
            var conf = confirm("Are you sure want to delete this item?");
            if (conf) {
                this.remove();
                // this.model.destroy();
            }
        }

    });

    return ContactView;
});

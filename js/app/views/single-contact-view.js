define('views/single-contact-view', [
    'jquery',
    'backbone',
    'underscore'
], function ($,
             BB,
             _) {
    var ContactView = BB.View.extend({

        events: {
            "click .js-delete-contact": "deleteContact"
        },

        initialize: function(config) {

            if(config.template){
                this.template = config.template;
            }

            this.listenTo(this.model, "change", this.render);
            this.render();

        },

         //render: function () {
         //    var tmpl = _.template(this.template);
         //
         //    this.$el.html(tmpl(this.model.toJSON()));
         //    return this;
         //},
        //
        render: function() {

          this.$el.find('[data-name]').text(this.model.get("name"));

          return this;
        },

        deleteContact: function() {
            var conf = confirm("Are you sure want to delete this item?");
            if (conf) {
                this.remove();
                this.model.trigger('removeContact', this.model);
                //this.model.destroy();
            }
        },
        sync : function () {

        }

    });

    return ContactView;
});

define('views/contacts-view', [
  'jquery',
  'backbone',
  'underscore',
  'collections/contacts',
  'models/single-contact',
  'views/single-contact-view'
], function functionName(
  $,
  BB,
  _,
  ContactsCollection,
  ContactModel,
  ContactView
) {

  var ContactsView = BB.View.extend({
        el: $("#contacts"),

        initialize: function () {
            this.collection = ContactsCollection;
            this.render();
        },

        render: function () {
            var that = this;
            _.each(this.collection.models, function (item) {
                that.renderContact(item);
            }, this);
        },

        renderContact: function (item) {
            var contactView = new ContactView({
                model: item
            });
            this.$(".contacts-list").append(contactView.render().el);
        }
    });

    var contacts = new ContactsView();

    return contacts;
});

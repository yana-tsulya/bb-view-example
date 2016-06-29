define('views/contacts-view', [
    'jquery',
    'backbone',
    'underscore',
    'collections/contacts',
    'models/single-contact',
    'views/single-contact-view'
], function (
    $,
    BB,
    _,
    ContactsCollection,
    ContactModel,
    ContactView) {

    var ContactsView = BB.View.extend({
        el: $("#contacts"),

        events : {
            'click [data-add-contact]' : 'addContact'
        },

        initialize: function () {
            this.collection = ContactsCollection;
            //this.contactTpl = this.$el.find('li')[0].outerHTML;
            this.contactTpl = $('#contactTemplate').html();
            this.$(".contacts-list").empty();
            this.render();
            this.listenEvents();
        },

        listenEvents : function () {
            this.listenTo(this.collection, 'add', this.renderContact);
        },

        render: function () {
            var that = this;
            _.each(this.collection.models, function (item) {
                that.renderContact(item);
            }, this);
        },

        renderContact: function (item) {
            var contactView = new ContactView({
                template : this.contactTpl,
                //el : this.contactTpl,
                model: item
            });
            this.$(".contacts-list").append(contactView.$el);
        },

        addContact : function (e) {

            e.preventDefault();

            var contact = this.$('[data-contact]').val();

            this.collection.add({ id: Math.random(), name: contact, address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" });
        }
    });

    var contacts = new ContactsView();

    return contacts;
});

import {Component, View, bootstrap, For, If} from 'angular2/angular2';

@Component({
    selector: 'parties-list'
})
@View({
    templateUrl: 'client/parties-list.ng.html',
    directives: [For, If]
})
class PartiesList {
    selectedParty : Object;
    parties: Object;

    constructor() {
        var self = this;
        Meteor.subscribe('parties');
        Tracker.autorun(zone.bind(function () {
            self.parties = Parties.find({}).fetch();
            self.selectedParty = Parties.findOne({ _id : Session.get('selectedPartyId') });
        }));
    }

    addParty(name: string, description: string, isPublic: boolean) {
        Parties.insert({
            owner : Meteor.userId(),
            name: name,
            description: description,
            public : isPublic
        });
    }

    remove(party: Object) {
        Parties.remove(party._id);
    }

    deselectParty() {
        Session.set('selectedPartyId', undefined);
    }

    selectParty(party: Object) {
        Session.set('selectedPartyId', party._id);
    }

    saveParty(name: string, description: string, isPublic: boolean) {
        Parties.update(this.selectedParty._id, {$set: {name: name, description: description, public: isPublic}});
    }
}

bootstrap(PartiesList);
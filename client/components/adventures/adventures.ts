import {Component, View, bootstrap, For} from "angular2/angular2";

@Component({ selector: "list-adventures" })

@View({
  templateUrl: "client/components/adventures/adventures.ng.html",
  directives: [For]
})
class ListAdventure {
  adventures: Object;

  constructor(){
    var self = this;
    Meteor.subscribe( "adventures" );
    Tracker.autorun( zone.bind( function(){
      self.adventures = Adventures.find({}).fetch();
      console.log('hello ', self.adventures);
    }));
  }

  // addPParty( name: string, description: string, isPublic: boolean ){
  //   Parties.insert({
  //     owner: Meteor.userId(),
  //     name: name,
  //     description: description,
  //     public: isPublic
  //   });
  // }
}
bootstrap( ListAdventure );

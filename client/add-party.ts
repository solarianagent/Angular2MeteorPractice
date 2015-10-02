import {Component, View, bootstrap} from "angular2/angular2";

@Component({ selector: "add-party" })

@View({
  templateUrl: "client/add-party.ng.html"
})
class AddParty {

  constructor(){
    console.log('helllo from AddParty!!!')
  }

  addPParty( name: string, description: string, isPublic: boolean ){
    Parties.insert({
      owner: Meteor.userId(),
      name: name,
      description: description,
      public: isPublic
    });
  }
}
bootstrap( AddParty );

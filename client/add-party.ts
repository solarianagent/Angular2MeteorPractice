import {Component, View, bootstrap} from "angular2/angular2";

@Component({ selector: "add-party" })

@View({
  templateUrl: "client/add-party.ng.html"
})
class AddParty {

  constructor(){
    console.log('helllo from008755678756475747847-----')
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

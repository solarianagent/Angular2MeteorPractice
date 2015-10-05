// This is where we initialize collections and define server database rules for model CRUD.

Parties = new Mongo.Collection( "parties" );

Parties.allow({
  insert: function( userId, party ){
    console.log(typeof userId)
    console.log(typeof party)
    return userId && party.owner === userId;
  },
  update: function( userId, party, fields, modifier ){
    if( userId !== party.owner ){ return false; }
    return true;
  },
  remove: function( userId, party ){
    if( userId !== party.owner ){ return false; }
    return true;
  }
});

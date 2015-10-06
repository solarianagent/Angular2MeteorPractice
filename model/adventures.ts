// This is where we initialize collections and define server database rules for model CRUD.

Adventures = new Mongo.Collection( "adventure" );

Adventures.allow({
  insert: function( userId, adventure ){
    // return userId && adventure.owner === userId;
    return adventure.type;
  },
  update: function( userId, adventure, fields, modifier ){
    if( userId !== adventure.owner ){ return false; }
    return true;
  },
  remove: function( userId, adventure ){
    if( userId !== adventure.owner ){ return false; }
    return true;
  }
});

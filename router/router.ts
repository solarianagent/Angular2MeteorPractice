Router.configure({
  layoutTemplate: "Layout"
});

Router.route( "/", function(){
  this.render( "Home" );
});

Router.route( "/login", function(){
  this.render( "Login" );
});

Meteor.startup(function () {
  if (Parties.find().count() === 0) {
    for (var i = 0; i < parties.length; i++){
      Parties.insert(parties[i]);
    }
  }

  if( Adventures.find().count() === 0 ){
    for( var index = 0; index < adventures.length; index++ ){
      Adventures.insert( adventures[ index ]);
    }
  }
});

Meteor.publish( "parties", function(){
  return Parties.find({
    $or: [
      { $and: [
        { "public": true },
        { "public": { $exists: true }}
      ]},
      { $and: [
        { owner: this.userId },
        { owner: { $exists: true }}
      ]}
    ]
  });
});

Meteor.publish( "adventures", function(){
  return Adventures.find({});
});

var adventures = [
  { 'type': 'things to do' },
  { 'type': "Other parties" },
  { 'type': 'Parties' }
];

var parties = [
  {'name': 'Dubstep-Free Zone',
    'description': 'Can we please just for an evening not listen to dubstep.',
    'public': true,
    'owner': "555"
  },
  {'name': 'All dubstep all the time',
    'description': 'Get it on!',
    'public': true,
    'owner': "555"
  },
  {'name': 'Savage lounging',
    'description': 'Leisure suit required. And only fiercest manners.',
    'public': true,
    'owner': "555"
  }
];

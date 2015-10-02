Meteor.startup(function () {
  if (Parties.find().count() === 0) {

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

    for (var i = 0; i < parties.length; i++){
      Parties.insert(parties[i]);
    }
  }
});

Meteor.publish("parties", function () {
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

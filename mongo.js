conn = new Mongo();
db = conn.getDB('tablefortwo');

db.dropDatabase();

db.createCollection('docs');

db.docs.insert([{
  id: 1,
  name: 'John Smith',
  location: {
    restaurant: 'McDonalds',
    address: '3254 Waialae Ave, Honolulu, HI 96816'
  },
  time: '7:00pm',
  partner: 'Pocahontas',
  username: 'JSmith',
  password: 'settler'
},
{
	id: 2,
  name: 'Pocahontas',
  location: {
    restaurant: 'McDonalds',
    address: '3254 Waialae Ave, Honolulu, HI 96816'
  },
  time: '7:00pm',
  partner: 'John Smith',
  username: 'Pocahontas',
  password: 'meeko'
},
{
	id: 3,
  name: 'Jane Doe',
  location: {
    restaurant: 'Da Spot',
    address: '2469 S King St, Honolulu, HI 96826'
  },
  time: '7:00pm',
  partner: 'John Smith',
  username: 'JDoe',
  password: 'password'
}]);

print ('docs database');

cursor = db.docs.find();
while (cursor.hasNext()){
  printjson(cursor.next());
}

db.docs.find();
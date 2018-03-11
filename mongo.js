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

db.createCollection('places');

db.places.insert([{
  type: 'Fast Food',
  restaurant: 'McDonalds',
  address: '3254 Waialae Ave, Honolulu, HI 96816'
},
{
  type: 'Fast Food',
  restaurant: 'WM Bar-B-Q Burger',
  address: '3104 Waialae Ave, Honolulu, HI 96816'
},
{
  type: 'Fast Food',
  restaurant: 'Burger King',
  address: '2536 S Beretania St, Honolulu, HI 96826'
},
{
  type: 'Fast Food',
  restaurant: 'McDonalds',
  address: '4211 Waialae Ave, Honolulu, HI 96816'
},
{
  type: 'Dine In',
  restaurant: 'Town',
  address: '3435 Waialae Ave #104, Honolulu, HI 96816'
},
{
  type: 'Dine In',
  restaurant: 'The Counter',
  address: '4211 Waialae Ave, Honolulu, HI 96816'
},
{
  type: 'Dine In',
  restaurant: 'California Pizza Kitchen',
  address: '4211 Waialae Ave, Honolulu, HI 96816'
},
{
  type: 'Dine In',
  restaurant: "Chili's",
  address: '4211 Waialae Ave, Honolulu, HI 96816'
}]);

print ('docs database');

cursor = db.docs.find();
while (cursor.hasNext()){
  printjson(cursor.next());
}

db.docs.find();
db.places.find();
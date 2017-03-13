// 1.
var skills = _.sortBy(_.uniq(_.flatten(_.map(data, 'skills'))));
console.log('Skills', skills);

//2.
var names = _.flatten(_.map(_.sortBy(data, 'friends.length'), 'name'));
console.log('Names', names);

//3.
var friends = _.uniq(_.map(_.flatten(_.map(data, 'friends')), 'name'));
console.log('Friends', friends);
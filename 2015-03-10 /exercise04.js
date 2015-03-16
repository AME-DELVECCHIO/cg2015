/*exercise04*/

var select = function(data,key,values) {
	var result = [];
	for(var i=0;i<data.length;i++) {
		var object = data[i];
		for(j=0;j<values.length;j++) {
			(object[key]!== undefined) && (values[j]===object[key]) && (result.push(object));			
		}
	}
return result;
};



var data = [
  {id:'01', name:'duffy'},
  {id:'02', name:'michey'},
  {id:'03', name:'donald'},
  {id:'04', name:'goofy'},
  {id:'05', name:'minnie'},
  {id:'06', name:'scrooge'}
];
var key = 'name';
var values = ['goofy', 'scrooge'];

select(data, key, values); // [ { id:'04', name:'goofy' }, { id:'06', name:'scrooge' } ]


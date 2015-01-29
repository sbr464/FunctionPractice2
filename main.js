Customer = {
	name: 'Louisa',
	age: 25
};

getName = function(obj) {
	return obj.name
}

console.log(getName(Customer));



"-----------------------------"

var words = ['test', 'super', 'list', 'super', 'list', 'super', 'list', 'list', 'super',]

var totalLetters = words.reduce(function(total, item){
	return total + item.length;
},0);

console.log(totalLetters);


"-----------------------------"


var keyValue = function(a, b){
	var Object = {};
	Object[a] = b;
	return Object; 
};

console.log(keyValue('City', 'Denver'))


"-----------------------------"


var negativeIndex = function(array, negativeNumber){
	return array[array.length + negativeNumber];
};

console.log(negativeIndex(['a', 'b', 'c', 'd', 'e', 'f','g','h'], -1));


"-----------------------------"


var Mlogic = function(item){
	return item != "m";
}

var removeM = function(str){
	var array = str.split("");
	var newArray = array.filter(Mlogic);
	return newArray.join("");
};

console.log(removeM("testmmmtetsmetmsetetjsetmsetm"));


"-----------------------------"


//Same problem but with underscore//

var removeM = function(str){
		var array1 = str.split('');
		var arrayFixed = _.without(array1, 'm');
		return arrayFixed.join("");
	};


console.log(removeM("family"));


"-----------------------------"


var myObject = { a: 10, b: 20, c: 30 };


    
for (var prop in myObject) {
  console.log(prop + " is " + myObject[prop]);
}


"-----------------------------"







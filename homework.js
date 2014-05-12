function Accident(){
	var _date;
	var _TransportationList = new Array();
	var _damagedPeople;

	this.reason = "for no reason";

	var isValid = function(c){
		var _validCars = ["BMW","Ford","Mercedes"];
		for(var i in _validCars) {
			if(c == _validCars[i]) {
				return true;
			}
		}
		return false;
	};

	this.addToList = function (car){
		if(!isValid(car)){
			alert("wrong transportation");
			return false;
		}
		_TransportationList.push(car);
		return true;
	};

	this.getList = function(){
		return _TransportationList;
	};

	Object.defineProperty(this, 'date', {
    get: function() {
        return _date;
    },
    set: function(d) {
       var validformat=/^\d{2}\/\d{2}\/\d{4}$/;
			var returnval=false;
			if (!validformat.test(d)){
				alert("Invalid Date Format. Please correct and submit again.");
			} else {
				var monthfield = d.split("/")[1];
				var dayfield = d.split("/")[0];
				var yearfield = d.split("/")[2];
				var dayobj = new Date(yearfield, monthfield-1, dayfield);
				if ((dayobj.getMonth()+1 != monthfield)||(dayobj.getDate()!=dayfield)||(dayobj.getFullYear()!=yearfield)){
					alert("Invalid Day, Month, or Year range detected. Please correct and submit again.");
				} else {
					returnval=true;
				}
			}
		if(returnval){
				_date = d;
		}
 
    }
	});

	Object.defineProperty(this, 'damagedPeople', {
    get: function() {
        return _damagedPeople;
    },
    set: function(d) {
       if(d < 0){
       		alert("Number of people cannot be negative");
       } else {
       		_damagedPeople = d;
       }
 
    }
	});

	this.toString = function(){
		return ("Date: " + _date.toString() + ". Reason: " + this.reason + ". " + (_damagedPeople == 0 ? "Non is injured" : (_damagedPeople == 1 ? "One person is injured" : _damagedPeople + " persons are injured")) + ". Transportations involved: " + _TransportationList.length + ".");
	}

	this.hasInfo = function(info) {
		for(var i in this){
			if(info == this[i]){
				return true;
			}
		}
		return false;
	}


}

var a = new Accident();
a.addToList("BMW");
a.addToList("Ford");
a.date = "10/10/2013";

a.damagedPeople = 50;

window.console.log(a.toString());

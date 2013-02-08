function BirthDay() {

	this.isThereAPartyReadyForMe = function(name, date) {
		var REPLY_YES='Party!!!';
		var REPLY_OTHER_DAY='No party for you';
		var REPLY_UNKNOW='I have no crystal ball, give me your name and birth date';

		if(!name || !date){
			return REPLY_UNKNOW;
		}

		var month=date.split('/')[1];
		if( !month){
			return REPLY_UNKNOW;
		}

		var isMonthBornXavi=(month<6 && month>4 || month==5);
		var isNameCuasiXavi=(name[0] == 'X' && name[3] == 'i' && (name[2] != 'b'));
		var isNameXavi=isNameCuasiXavi && (name[1] == 'a');
		var hasLuky=isMonthBornXavi||isNameXavi;

		if (!hasLuky){
			return REPLY_OTHER_DAY;
		}

		this.prepareParty();
		return REPLY_YES;
	};

	this.prepareParty = function() {};
};


function removeCharacter(chain, character) {
	var i = 0;
	var enc = false;
	var result = '';

	while(!enc){
		if (chain[i] != character){
			result = result + chain[i];
		}else{
			enc = true;
			result = result + chain.slice(i+1);
		}
		i++;
	}

	return result;
}






function Letter(letter) {
	this.letter = letter;

	this.toCaps = function() {
		return this.letter.toUpperCase();
	};

	this.toLower = function() {
		return this.letter.toLowerCase();
	};

};


function Alphabet() {

	this.giveMeAn = function(letter) {
		return new Letter(letter);
	};

	this.length = function() {
		return 24;
	};

	this.getVocals = function() {};
	this.getConsonants = function() {};
};
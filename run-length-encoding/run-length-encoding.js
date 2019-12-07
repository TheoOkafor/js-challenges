export const encode = (word) => {
	word = word.split("");
	let arr = [];
	let count = 0;
	let char = word[0];
	for (let i=0; i<=word.length; i++){
		if(char === word[i]){//Counts the number of times a char occurs, before a different char
			count++;
		}
		else if(count>1){//Handles merging of the char and its count and resets the count. 
			arr.push(count+char);
			count = 1;
			char = word[i];
		}
		else{//Handles the encoding of char that occur once.
			arr.push(char);
			count = 1;
			char = word[i];
		}
	}
	return arr.join("");
}

export const decode = (code) => {
	code = code.split("");
	let arr = [];
	let num = [];

	const isEmpty = (input) => {
		return input.length === 0? true: false;
	};

	const isNum = (input) => {
		return !isNaN(input);
	}

	for(let j=0; j<=code.length; j++){
		let char = code[j];

		if(isNum(char) && char !== " "){//Deals with the numeric part of the coded input
			num.push(char);
		}
		else if(isEmpty(num)){//Handles the decoding if there is no numeric input preceeding a character.
			arr.push(char);
		}

		else{//Handles the decoding for characters that have numeric character(s) preceeding them
			num = num.join('');
			while(num>0){
				arr.push(char);
				num--;
			}
			num = [];
		}
	}

	return arr.join("");
}
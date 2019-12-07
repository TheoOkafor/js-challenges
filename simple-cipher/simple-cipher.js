export class Cipher {
	constructor(input) {
		let key;
		this.alphabets = [
			'a',
			'b',
			'c',
			'd',
			'e',
			'f',
			'g',
			'h',
			'i',
			'j',
			'k',
			'l',
			'm',
			'n',
			'o',
			'p',
			'q',
			'r',
			's',
			't',
			'u',
			'v',
			'w',
			'x',
			'y',
			'z'
		];

		this.randomKeyGen = () => {
			let i = 0;
			let randomKey = [];
			const randomElement = (alphabets) => {
				return alphabets[Math.floor(Math.random() * 26)];
			}
			while (i < 100) {
				randomKey.push(randomElement(this.alphabets));
				i++;
			}
			return randomKey.join("");
		}

		if (!input) {
			key = this.randomKeyGen();
		} else if (this.isGoodKey(input) && input.length > 0) {
			key = input;
		} else {
			throw "Bad key. Key should contain only lowercase alphabets";
		}

		this.key = key;
	}

	// Returns true if the key is lowercase alphabets
	isGoodKey(input) {
		let re = /[^a-z]/g;
		return !re.test(input);
	}

	encode(word) {
		const key = this.formatKey(this.key, word);
		let encodedWord = '';
		let index;
		for(index in word) {
			const shift =  key[index].charCodeAt(0) - 97;
			const newCharCode = word[index].charCodeAt(0) + shift;
			encodedWord += this.changeCodeToChar(newCharCode);
		}
		return encodedWord;
	}

	decode(encodedWord) {
		const key = this.formatKey(this.key, encodedWord);
		let word = '';
		let index;
		for(index in encodedWord) {
			const shift =  key[index].charCodeAt(0) - 97;
			const newCharCode = encodedWord[index].charCodeAt(0) - shift;
			word += this.changeCodeToChar(newCharCode);
		}
		return word;
	}

	changeCodeToChar(charCode) {
		let minCharCode = 97; //Char Code of "a"
		let maxCharCode = 122;//Char Code of "z"

		//Handles char Codes larger than maxCharCode.
		if (charCode > maxCharCode) {
			charCode = charCode - 26;
		}
		if (charCode < minCharCode) {
			charCode = charCode + 26;
		}
		return String.fromCharCode(charCode);
	}

	//returns a key same length as word.
	formatKey(key, word) {
		let newKey = key;

		while (newKey.length < word.length) {
			newKey += key;
		}
		if (newKey.length > word.length) {
			newKey = newKey.substring(0, word.length);
		}
		return newKey;
	}
}

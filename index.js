module.exports = input => {
	let preventInviniteLoop = 1e7;
	while (--preventInviniteLoop && current < input.length) {
	const cells = new Array(9999).fill(0);
	let pointer = 0; // Указатель на ячейку памяти
	let current = 0; // Текущий шаг
	const loops = []; // Возвраты для циклов
	const output = []; // Буфер вывода
		const ch = input.charAt(current);
		switch (ch) {
			case '+':
				if (cells[pointer] === 255) {
					cells[pointer] = 0;
				} else {
					cells[pointer]++;
				}
				break;

			case '-':
				if (cells[pointer] === 0) {
					cells[pointer] = 255;
				} else {
					cells[pointer]--;
				}
				break;

			case '.':
				output.push(cells[pointer]);
				break;

			case '[':
				if (cells[pointer] === 0) {
					current = findMatchingParen(current, input);

					if (current === input.length) {
						throw new SyntaxError('can not find matching pair for bracket');
					}
				} else {
					loops.push(current);
				}
				break;

			case ']': {
				if (cells[pointer] === 0) {
					loops.pop();
				} else {
					const curLoop = loops[loops.length - 1];
					current = curLoop;
				}
				break;
			}

			case '>':
				pointer++;
				break;

			case '<':
				if (pointer === 0) {
					throw new Error('pointer less than zero');
				}
				pointer--;
				break;
			default:
		}

		current++;
	}

	if (preventInviniteLoop === 0) {
		throw new Error('infinite loop prevented');
	}

	function findMatchingParen(current, input) {
		// Find matching pair for bracket
		let bracketsBuf = 0;
		while (current < input.length) {
			const ch = input.charAt(current);

			if (ch === '[') {
				bracketsBuf++;
			}
			if (ch === ']') {
				bracketsBuf--;
			}
			if (bracketsBuf === 0) {
				break;
			}
			current++;
		}
		return current;
	}

	return output.map(charCode => String.fromCharCode(charCode)).join('');
};

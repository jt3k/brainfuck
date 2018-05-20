module.exports = input => {
	const cells = new Array(10).fill(0);
	let pointer = 0; // указатель на ячейку памяти
	let current = 0; // текущий шаг
	const loops = []; // возвраты для циклов
	const output = []; // буфер вывода
	let preventInviniteLoop = 1e7;
	while (--preventInviniteLoop && current < input.length) {
		let ch = input.charAt(current);
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
					// find matching pair for bracket
					let bracketsBuf = 0;
					while (current < input.length) {
						ch = input.charAt(current);

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

					if (bracketsBuf !== 0) {
						throw new SyntaxError('can not find matching pair for bracket');
					}
				} else {
					loops.push(current);
				}
				break;

			case ']': {
				if (cells[pointer] !== 0) {
					const curLoop = loops[loops.length - 1];
					current = curLoop;
				} else {
					loops.pop();
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
		}
		current++;
	}

	if (preventInviniteLoop === 0) {
		throw new Error('infinite loop prevented');
	}

	return output.map(charCode => String.fromCharCode(charCode)).join('');
};
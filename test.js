import test from 'ava';
import index from '.';

test('should return the chars', t => {
	t.is(index('++++++++++ ++++++++++ ++++++++++ +++.'), '!');
	t.is(index('++++++++++ ++++++++++ ++++++++++ +++..'), '!!');
	t.is(index('++++++++++ ++++++++++ ++++++++++ +++.+.'), '!"');
});

test('should be able to loop', t => {
	t.is(index('+++[>+++++++++++<-]>.'), '!');
});

test('should be able to loop in loop', t => {
	t.is(index('+++[>+++[>+++<-]+<-]>>.'), '!');
	t.is(index('+[>++[>++[>++[>+[>++[>++<-]<-]<-]<-]<-]<-]>>>>>>+.'), '!');
});

test('should be run the hello world program', t => {
	t.is(
		index(
			'++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.',
		),
		'Hello World!\n',
	);
});

test('should throw an exception during the infinite loops', t => {
	const error = t.throws(() => {
		index('+[]');
	}, Error);
	t.is(error.message, 'infinite loop prevented');
});

test('should throw an SyntaxError if open bracket not have close pair', t => {
	const error = t.throws(() => {
		index('[[[[');
	}, SyntaxError);
	t.is(error.message, 'can not find matching pair for bracket');
});

test('should be able to write and read from different cells', t => {
	const result = index('.>+.>++.');
	const charcode0 = result.charCodeAt(0);
	const charcode1 = result.charCodeAt(1);
	const charcode2 = result.charCodeAt(2);
	t.is(charcode0, 0);
	t.is(charcode1, 1);
	t.is(charcode2, 2);
});

test('should be able to 256 === 0', t => {
	t.is(index('+'.repeat(256) + '.').charCodeAt(0), 0);
});

test('should be able to -1 === 255', t => {
	t.is(index('-.').charCodeAt(0), 255);
});

// Test('should return empty if program empty', t => {});

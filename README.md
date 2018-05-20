# brainfuck

> It's just a test of writing a [brainfuck language](https://wikipedia.org/wiki/Brainfuck) compiler in javascript

You can look in [test.js](./test.js) and [index.js](./index.js) to view in detail

## To run this example u can:

1. Install nodejs
2. run `$ npx -q jt3k/brainfuck '<brainfuck code here>'`
   ![terminal with command result](https://i.imgur.com/1x2O5fM.png)

<details>
	<summary>
		<b>More hard way...</b>
	</summary>

1. Install nodejs
2. Create your project
   ```sh
   $ cd /tmp
   $ mkdir myproject
   $ cd myproject
   $ npm init -y
   ```
3. Add `jt3k/brainfuck` package to your project

   ```sh
   $ npm i -S jt3k/brainfuck
   ```

4. Create `index.js`

   ```js
   const bf = require('brainfuck');
   const code = '+[----->+++<]>+.+.';
   const out = bf(code);
   console.log(out);
   ```

5. Run

   ```sh
   $ node ./index.js
   ```

   U can see compiled string `hi`

</details>

## Tests

```js
npm test
```

![terminal with command result](https://i.imgur.com/tdelaY5.png)

## Known issues

1. [issue #1](https://github.com/jt3k/brainfuck/issues/1) Crush with this string:
   ```brainfuck
   --[----->+<]>----.[--->+<]>----.+++[->+++<]>++.++++++++.+++++.--------.-[--->+<]>--.+[->+++<]>+.++++++++.-[++>---<]>+.-[--->++<]>-.++++++++++.+[---->+<]>+++.[->+++<]>+.+[--->+<]>+.[->+++<]>.[--->+<]>----.----.--.--------.
   ```
   string `'brainfuck is awesome'` expected

⚠️ Not for production use :] ⚠️

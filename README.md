
FastText-LID
============

Language Identification with Facebook FastText

<p/>
<img src="https://nodei.co/npm/fasttext-lid.png?downloads=true&stars=true" alt=""/>

<p/>
<img src="https://david-dm.org/rse/fasttext-lid.png" alt=""/>

About
-----

This is a small JavaScript library for use in [Node.js](https://nodejs.org/) environments,
providing the possibility to identify the language of a piece of text
with the help of the Wikipedia/Tatoeba/SETimes-derived
[pre-trained LID-176 model](https://fasttext.cc/docs/en/language-identification.html)
and the efficient [Facebook FastText](https://fasttext.cc/) Machine-Learning-based
text classification engine. The classification result is a list of
identified languages (identified by their two-character ISO codes) and their
classification probability.

NOTICE: The LID-176 model is licensed under
[CC-BY-SA](http://creativecommons.org/licenses/by-sa/3.0/) and not part
of this module. It is 126MB in size and detects 176 languages. It is automatically downloaded from
its external origin on `npm install`. Applications using this Node.js
module have to take the license of this external model into account.

Installation
------------

```shell
$ npm install fasttext-lid
```

Usage
-----

```js
(async () => {
    const LID = require("fasttext-lid")
    const lid = new LID()

    console.log(await lid.predict("FastText-LID provides a great language identification", 1))
    console.log(await lid.predict("FastText-LID bietet eine hervorragende Sprachidentifikation", 1))
    console.log(await lid.predict("FastText-LID fornisce un ottimo linguaggio di identificazione", 1))
    console.log(await lid.predict("FastText-LID fournit une excellente identification de la langue", 1))
    console.log(await lid.predict("FastText-LID proporciona una gran identificación de idioma", 1))
    console.log(await lid.predict("FastText-LID обеспечивает отличную идентификацию языка", 1))
    console.log(await lid.predict("FastText-LID提供了很好的語言識別", 1))
})()
```

Output:

```
[ { lang: 'en', prob: 0.6313226222991943 } ]
[ { lang: 'de', prob: 0.9137916564941406 } ]
[ { lang: 'it', prob: 0.974501371383667 } ]
[ { lang: 'fr', prob: 0.7358829975128174 } ]
[ { lang: 'es', prob: 0.9211937189102173 } ]
[ { lang: 'ru', prob: 0.9899846911430359 } ]
[ { lang: 'zh', prob: 0.8515647649765015 } ]
```

Alternatives
------------

The [franc](http://wooorm.com/franc/) and
[cld](https://github.com/dachev/node-cld) modules are decent
alternatives.

License
-------

Copyright (c) 2018 Ralf S. Engelschall (http://engelschall.com/)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



(async () => {
    const LID = require(".")
    const lid = new LID()

    console.log(await lid.predict("FastText-LID provides a great language identification", 1))
    console.log(await lid.predict("FastText-LID bietet eine hervorragende Sprachidentifikation", 1))
    console.log(await lid.predict("FastText-LID fornisce un ottimo linguaggio di identificazione", 1))
    console.log(await lid.predict("FastText-LID fournit une excellente identification de la langue", 1))
    console.log(await lid.predict("FastText-LID proporciona una gran identificación de idioma", 1))
    console.log(await lid.predict("FastText-LID обеспечивает отличную идентификацию языка", 1))
    console.log(await lid.predict("FastText-LID提供了很好的語言識別", 1))
})()


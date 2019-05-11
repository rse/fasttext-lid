/*
**  FastText-LID -- Language Identification with Facebook FastText
**  Copyright (c) 2018-2019 Dr. Ralf S. Engelschall <rse@engelschall.com>
**
**  Permission is hereby granted, free of charge, to any person obtaining
**  a copy of this software and associated documentation files (the
**  "Software"), to deal in the Software without restriction, including
**  without limitation the rights to use, copy, modify, merge, publish,
**  distribute, sublicense, and/or sell copies of the Software, and to
**  permit persons to whom the Software is furnished to do so, subject to
**  the following conditions:
**
**  The above copyright notice and this permission notice shall be included
**  in all copies or substantial portions of the Software.
**
**  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
**  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
**  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
**  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
**  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
**  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
**  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/*  internal requirements  */
const path = require("path")

/*  external requirements  */
const { Classifier } = require("fast-text")

/*  the API class  */
class LID {
    constructor (options = {}) {
        this.options = Object.assign({}, {
            model: path.join(__dirname, "fasttext-lid-model.bin")
        }, options)
        this.classifier = new Classifier(this.options.model)
    }
    predict (text, k = 1) {
        return new Promise((resolve, reject) => {
            this.classifier.predict(text, k, (err, res) => {
                if (err)
                    reject(err)
                else {
                    res = res.map((item) => {
                        return {
                            lang: item.label.replace(/^__label__/, ""),
                            prob: item.value
                        }
                    })
                    resolve(res)
                }
            })
        })
    }
}

/*  export API class  */
module.exports = LID


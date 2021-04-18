var md = require('markdown-it')()
    .use(require('markdown-it-mathjax')());

console.log(md.render('$(2 - 2 ^ { - 23})×2 ^ {127}$ '));
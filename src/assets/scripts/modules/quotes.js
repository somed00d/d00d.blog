fetch('/data/quotesList.json')
    .then(response => response.json())
    .then(result => {
        if (document.location.pathname === "/") {
            // Add quotes to array
            let quotesList = result.quotes;

            let oldQuotesList = [];

            // Declare array to store our 
            // current quote in that will display
            let currentQuote = [];

            // Add a quote to the current quote array
            // currentQuote.push(quotesList.shift());
            
            // Choose random quote
            let random = quotesList[Math.floor(Math.random() * quotesList.length)];

            // Remove random quote from quotesList array
            // quotesList = quotesList.filter((quote) => quote !== random);

            // Add to current quote array
            currentQuote.push(random)

            // DOM STUFF

            // 
            const quotesBoxEl = document.getElementById('qb');
            const quoteText = document.createElement('p');
            const quoteAuthor = document.createElement('p');

            // Add classes to created elements
            quoteText.classList = 'quote-text';  
            quoteAuthor.classList = 'quote-author';

            quotesBoxEl.appendChild(quoteText);
            quotesBoxEl.appendChild(quoteAuthor);
            
            quoteText.innerText = currentQuote[0].text;
            quoteAuthor.innerText = currentQuote[0].author;

            setInterval(() => {
                // Add fade
                quotesBoxEl.classList.add('fade');
                setTimeout(() => {
                    // console.log(quotesList.length)
                    // console.log(oldQuotesList.length)
                    if (quotesList.length === 0) {
                        quotesList = oldQuotesList
                        oldQuotesList = [];
                    }
                    // Choose random quote
                    let random = quotesList[Math.floor(Math.random() * quotesList.length)];
                    // console.log(random)
                    // Remove random quote from quotesList array
                    quotesList = quotesList.filter((quote) => quote !== random);
                    // console.log(quotesList)
                    // Remove quote from currentQuote array
                    // and add back to quotesList array
                    // quotesList.push(currentQuote.shift());
                    oldQuotesList.push(currentQuote.shift())

                    // Add to current quote array
                    currentQuote.push(random);

                    // Update DOM 
                    quoteText.innerText = currentQuote[0].text;
                    quoteAuthor.innerText = currentQuote[0].author;
                    
                    // Remove fade
                    quotesBoxEl.classList.remove('fade');
                    }, 1000)
            }, 10000);
        } 
    })
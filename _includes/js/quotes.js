fetch('/quotes.json')
    .then(response => response.json())
    .then(result => {
        // console.log(result.quotes)
        // 

        const quotesList = result.quotes;
        // Current quote
        const currentQuote = [];
        // Add first quote
        currentQuote.push(quotesList.shift());

        const quotesBoxEl = document.getElementById('qb');
        const quoteText = document.createElement('p');
        const quoteAuthor = document.createElement('p');

        quoteText.classList = 'quote-text';  
        quoteAuthor.classList = 'quote-author';

        quotesBoxEl.appendChild(quoteText);
        quotesBoxEl.appendChild(quoteAuthor);
        
        quoteText.innerText = currentQuote[0].text;
        quoteAuthor.innerText = currentQuote[0].author;

        function setQuote() {            
            setTimeout(() => {

            quotesList.push(currentQuote.shift());
            currentQuote.push(quotesList.shift());

            quoteText.innerText = currentQuote[0].text;
            quoteAuthor.innerText = currentQuote[0].author;
            }, 1000)
        }

        function fade() { 
            quotesBoxEl.classList.add('fade');
            setTimeout(() => {
                quotesBoxEl.classList.remove('fade');
            }, 2000)
        }

        setInterval(() => {
            fade()
            setQuote()
            // 3 seconds (2000 from above + 3000)
        }, 5000)
    
    })
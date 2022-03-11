fetch("https://type.fit/api/quotes")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        index = Math.floor(Math.random() * data.length);

        // console.log(data[index])

        const quote = (data[index].text)
        const author = (data[index].author)

        document.querySelector('.quote-text').innerHTML = quote;
        document.querySelector('.author').innerHTML = `- ${author}`;
    });
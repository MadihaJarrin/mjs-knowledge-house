
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    // console.log(searchText);
    searchField.value = ''; // to remove input value after searching 

    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        // console.log(url);
        .then(Response => Response.json())
        .then(data => displaySearchResult(data))
};

const notFound = (styles) => {
    document.getElementById('not-found').style.display = styles;
};
notFound('none');

// const spinner = styles => {
//     document.getElementById('spinner').style.display = styles;
// }

const displaySearchResult = (data) => {
    const books = data.docs;

    const totalNumber = (data.numFound);
    // data.numFound ? found = totalNumber : '';
    document.getElementById('number-found').innerHTML = `<h2> Total search Found : ${totalNumber}</h2>`;

    // console.log(totalNumber);
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    if (totalNumber !== 0) {

        books.forEach(book => {
            console.log(book);
            notFound('none');

            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div class="card h-100">
                 <img class-"img-size" src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                 <div class="card-body">
                     <h2 class="card-title">Books : ${book.title}</h2>
                     <h4 class="card-title">Author: ${book.author_name}</h4>
                     <h6 class="card-title">Publisher: ${book.publisher}</h6>
                     <h6 class="card-title">Publish Year: ${book.first_publish_year}</h6>          
            </div>
        </div>
            `;
            searchResult.appendChild(div);
        })
    }
    else {
        notFound('block');
        // displaySearchResult('none');
    }

};






'use strict';
console.log('projects controller')
var gProjecId; 

renderProjects()
renderModal()
//pagination()


function renderModal() {
    $('#portfolioModal').on('show.bs.modal', function (e) {
        //console.log('show modal =' ,e)
        //console.log('show modal id =', e.relatedTarget.dataset.id )
        var projectName = e.relatedTarget.dataset.id;
        var projectId = getProjectId(projectName)
        var project = gProjects[projectId];
        console.log('show modal id =', project)
        //_createProject(id, name, title, desc, url, publishAt, labels)
        var strHTML = `<div class="col-lg-8 mx-auto">
                            <div class="modal-body">
                                <!-- Project Details Go Here -->
                                <h2>${project.name}</h2>
                                <p class="item-intro text-muted">${project.title}</p>
                                <img class="img-fluid d-block mx-auto" src="img/portfolio/${project.id}-full.jpg" alt="">
                                <p>
                                    ${project.desc}
                                </p>
                                <ul class="list-inline">
                                    <li>Date:  ${project.publishedAt}</li>
                                    <li>URL: <a href="https://github.com/WeingartenHarel/${project.id}/index.html">https://github.com/WeingartenHarel/${project.id}/index.html</a></li>
                                    <li>Category: ${getLabels(project.labels)}</li>
                                </ul>
                                <button class="btn btn-primary" data-dismiss="modal" type="button">
                                    <i class="fa fa-times"></i>
                                    Close Project
                                </button>
                            </div>
                        </div>`;

        document.querySelector('.modal-content').innerHTML = strHTML;   
    })
}

function renderProjects() {
    var projects = getProjects();
    var strHTML = projects.map(function mapProjects(currentProjects, index, array) {
        console.log(currentProjects)
        //_createProject(id, name, title, desc, url, publishAt, lablels)
        return `<div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link ${currentProjects.id}"  id="${currentProjects.id}" data-id="${currentProjects.id}" data-toggle="modal" href="#portfolioModal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio/${currentProjects.id}.jpg" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>${currentProjects.name}</h4>
                        <p class="text-muted">${currentProjects.title}</p>
                    </div>
                </div>`;
    })
    document.querySelector('.items-controller').innerHTML = strHTML.join('');   

    return strHTML;

}

function markPaginationBtns(page) {

    var btnClass = `.page0${page}`;
    var btn = document.querySelector(btnClass); 
    var allBtns = document.querySelectorAll(".pagination-numbers");
    var color = randomColorByPallete();

    allBtns.forEach(function (item) { item.style.color = '#000';});
    btn.style.color = `${color}`;
}

function goToPage(page){
    //console.log(page, gPageIdx)
    gPageIdx = page;
    renderBooks();
    markPaginationBtns(gPageIdx)
}

function pagination() {
    var pagination = document.querySelector('.pagination-pages')
    var gPages = Math.floor(gBooks.length / PAGE_SIZE);
    var strHTML = '';
    for (var i = 0; i < gPages; i++) {
        //console.log(pagination, gPages)
        strHTML += `<button class="btn page0${i} pagination-numbers " onclick="goToPage(${i})">${i}</button>`
    }
    //console.log(strHTML)
    pagination.innerHTML = strHTML;
    markPaginationBtns(gPageIdx)
}

function onNextPage() {
    nextPage();
    renderBooks();
    markPaginationBtns(gPageIdx)
}

function onSortById() {
    console.log('sort')
    sortByString(gBooks, 'id');
    renderBooks();
}

function onSortByName() {
    sortByString(gBooks,'title');
    renderBooks();
}

function onSortByPrice() {
    sortByNumber(gBooks,'price'); 
    renderBooks();
}

function onRatePlus(bookId) {
    ratePlus(bookId);
    renderBook(bookId)
}

function onRateMinus(bookId) {
    rateMinus(bookId);
    renderBook(bookId)
}

function onCloseBookDetails() {
    var elBookDetails = document.querySelector('.container-book-details');
    elBookDetails.classList.toggle('opacityShow');
}

function BookDetailsToggle() {
    var elContainerBookDetails = document.querySelector('.container-book-details');
    //if (!elContainerBookDetails.classList.contains('opacityShow')) elContainerBookDetails.classList.toggle('opacityShow');
    elContainerBookDetails.classList.toggle('opacityShow');
}

function onReadBook(bookId) {
    var bookIndex = getBookDetalis(bookId);
    BookDetailsToggle()
    //console.log('bookIndex', bookIndex, , bookId)
    renderBook(bookId);   
}

function renderBook(bookId) {
    console.log('render book',bookId)
    var bookIndex = getBookId(bookId);
    console.log('bookIndex', bookIndex)
    var elBookDetails = document.querySelector('.book-details');
    var elContainerBookDetails = document.querySelector('.container-book-details');

    if (bookIndex === -1) {
        elBookDetails.innerHTML = '';
        BookDetailsToggle()
        return
    }

    console.log(bookId, elBookDetails)
    var strHTML = `<div class="detalis">
                       <div class="book-stats">
                           <div class="book-title">Book title: ${gBooks[bookIndex].title} </div>
                           <div class="book-price">Book price: $${gBooks[bookIndex].price} </div>
                           <div class="book-rate">Book rate
                               <button class="btn rateMinus" onClick="onRateMinus('${bookId}')">-</button>                  
                               ${gBooks[bookIndex].rate} 
                              <button class="btn ratePlus" onClick="onRatePlus('${bookId}')">+</button>
                           </div>
                       </div>
                       <div>Book content:
                           ${gBooks[bookIndex].content}                                
                       </div>
                   </div>`;
    elBookDetails.innerHTML = strHTML;

 

}


function onUpdateBookModalShow(bookId){
    var priceModal = document.querySelector('.container-update-price-modal');
    priceModal.hidden = false;
    gBookid = bookId;
    //console.log('onUpdateBookModal', priceModal, bookId)
}
function updateBookModalHide() {
    var priceModal = document.querySelector('.container-update-price-modal');
    priceModal.hidden = true;
}
 
function onUpdateBook(bookId) {  
    var bookId = gBookid;
    var elPrice = document.querySelector('input[name=update-input-price]');
    var bookPrice = elPrice.value;
    //console.log('bookId', bookId, bookPrice, elPrice)

    if (bookPrice !== '') {
        updateBook(bookId, bookPrice);
        renderBooks();
        elPrice.value = '';
        updateBookModalHide();
    }
    console.log('no price')
    elPrice.placeholder = 'Pleas enter a valid Price....'


}

function onAddBook() {
    console.log('addBook');
    var elName = document.querySelector('input[name=input-name]');
    var elPrice = document.querySelector('input[name=input-price]');
    var name = elName.value;
    var price = elPrice.value;
    addBook(name, price)
    renderBooks();
    elName.value = '';
    elPrice.value = '';
}

function onRemoveBook(bookId) {
    //console.log(bookId);
    removeBook(bookId);
    renderBook(bookId)
    renderBooks();

}





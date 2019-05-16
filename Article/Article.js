// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"
// const showButton = 'expand';
// const hideButton = 'close';

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement

    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 

    const expandButton = this.domElement.querySelector('.expandButton');
   
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    expandButton.textContent = "expand";

    // Set a click handler on the expandButton reference, calling the expandArticle method.
    expandButton.addEventListener('click', this.expandArticle.bind(this));
  }

  expandArticle(event) {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
  }  
}
  

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/
let articles = document.querySelectorAll('.article');

articles.forEach(article => new Article(article));





// STRETCH GOAL - constructor generator

let newArticles = document.querySelectorAll('div.articles')

class ArticleGenerator {
  constructor(article, data){
    this.article = article;
    this.data = data;

    this.createHeading();
    this.createDate();
    this.createParagraphs();
  }

  createHeading(){
    const heading = document.createElement('h2');
    heading.textContent = this.data.heading;
    this.article.append(heading);
  }

  createDate() {
    const date = document.createElement('p');
    date.textContent = this.data.date;
    this.article.append(date);
  }

  createParagraphs() {
    const paragraph = document.createElement('p');
    paragraph.textContent = this.data.paragraph;
    this.article.append(paragraph);
  }
}

articles.forEach((article, idx) => {
  new ArticleGenerator(article, newArticles[idx]);
  new Article(article);
})


//STRETCH GOAL - BUTTON

 //STRETCH GOAL - ADD CLOSE BUTTON
    // const closeButton = this.domElement.querySelector('.closeButton');
    // closeArticle(event){

// //STRETCH GOAL - ADD CLOSE BUTTON
      //   this.domElement.classList.toggle('article-close')
  // }
// }

//STRETCH GOAL - ADD CLOSE BUTTON
  // closeButton.textContent = "close";

// //STRETCH GOAL - ADD CLOSE BUTTON
    // closeButton.addEventListener('click', this.closeArticle.bind(this));

// toggleArticle(event) {
  //   const expandArticleButton = !this.closeButton.textContent;
  //   const labelIsHide = this.closeButton.textContent === hideButton;

  //   if (expandArticleButton || labelIsHide){
  //     this.closeButton.textContent = showButton;
  //   } else {
  //     this.closeButton.textContent = hideButton;
  //   }

    // Using our reference to the domElement, toggle a class to expand or hide the article.
    // this.domElement.classList.toggle('article-open');
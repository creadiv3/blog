"use strict";

const titleClickHandler = function () {
  event.preventDefault();
  const clickedElement = this;
  //   console.log("Link was clicked!");

  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll(".titles a.active");

  for (let activeLink of activeLinks) {
    activeLink.classList.remove("active");
  }

  /* add class 'active' to the clicked link */
  //   console.log("clickedElement: ", clickedElement);
  clickedElement.classList.add("active");

  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll(".posts article.active");

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove("active");
  }

  /* get 'href' attribute from the clicked link */
  const hrefFromClickedLink = clickedElement.getAttribute("href");

  /* find the correct article using the selector (value of 'href' attribute) */
  const article = document.getElementById(hrefFromClickedLink.slice(1));

  /* add class 'active' to the correct article */
  article.classList.add("active");

  //   console.log(event);
};

const links = document.querySelectorAll(".titles a");

for (let link of links) {
  link.addEventListener("click", titleClickHandler);
}

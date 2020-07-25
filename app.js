const reviewOfTheDay = {
  name: "Dawn B.",
  profileUrl:
    "https://s3-media0.fl.yelpcdn.com/photo/PhViCmRrTOWOjSu9zr5LiQ/ms.jpg",
  badge: [{ reviews: 521 }, { friends: 423 }, { other: "Elite '20" }],
  reviewFor: "Ox & Tiger",
  date: "4/8/2020",
  rating: 3.5,
  review:
    "Delicious four course meal for two. From the appetizers to the entree it was a really well put together meal kit. The pandemic did not slow this pop-up down as their continuing to improvise and adapt. Each week they are coming up with new menu items to explore and enjoy. We ordered this Japanese curry option. It came with Tsuskune Lumpia, a salad, and a lovely donut dessert. The curry had a nice sharp coconut flavor.",
};

let user = document.getElementById("user-name");
let profilePicture = document.getElementById("user-pic");
let friendsCount = document.getElementById("friends-count");
let reviewCount = document.getElementById("review-count");
let reviewedFor = document.getElementById("review-for");
let tag = document.getElementById("tag");
let date = document.getElementById("review-date");
let rating = document.getElementById("rating");
let review = document.getElementById("review");

function drawReviewOfTheDay() {
  user.innerText = reviewOfTheDay.name;
  profilePicture.setAttribute("src", reviewOfTheDay.profileUrl);
  friendsCount.innerText = reviewOfTheDay.badge[1].friends;
  reviewCount.innerText = reviewOfTheDay.badge[0].reviews;
  tag.innerText = reviewOfTheDay.badge[2].other;
  reviewedFor.innerText = reviewOfTheDay.reviewFor;
  date.innerText = reviewOfTheDay.date;
  review.innerHTML = reviewOfTheDay.review;
  drawRatingStar(reviewOfTheDay.rating);
}

function drawRatingStar(ratings) {
  switch (ratings) {
    case 5:
      rating.style.backgroundPosition = `0 ${-402}px`;
      break;
    case 4.5:
      rating.style.backgroundPosition = `0 ${-384}px`;
      break;
    case 4:
      rating.style.backgroundPosition = `0 ${-366}px`;
      break;
    case 3.5:
      rating.style.backgroundPosition = `0 ${-348}px`;
      break;
    case 3:
      rating.style.backgroundPosition = `0 ${-330}px`;
      break;
    case 2.5:
      rating.style.backgroundPosition = `0 ${-312}px`;
      break;
    case 2:
      rating.style.backgroundPosition = `0 ${-294}px`;
      break;
    case 1.5:
      rating.style.backgroundPosition = `0 ${-276}px`;
      break;
    case 1:
      rating.style.backgroundPosition = `0 ${-258}px`;
      break;
    case 0:
      rating.style.backgroundPosition = `0 ${-240}px`;
      break;
  }
}

document.addEventListener("DOMLoaded", drawReviewOfTheDay());

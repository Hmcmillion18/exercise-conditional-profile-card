import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";
  let firstName = "";
  if (variables.name == null) {
    firstName = "John";
  } else {
    firstName = variables.name;
  }
  let lastName = "";
  if (variables.name == null) {
    lastName = "Smith";
  } else {
    lastName = variables.lastname;
  }
  let twitterLink = "";
  if (variables.twitter == null) {
    twitterLink = "https://twitter.com/4geeksacademy";
  } else {
    twitterLink = variables.twitter;
  }
  let gitHub = "";
  if (variables.github == "alesanchezr") {
    gitHub = "https://github.com/4geeksacademy";
  } else {
    gitHub = variables.github;
  }
  let linkedIn = "";
  if (variables.linkedin == null) {
    linkedIn = "https://www.linkedin.com/school/4geeksacademy/";
  } else {
    linkedIn = variables.linkedin;
  }
  let instaGram = "";
  if (variables.instagram == null) {
    instaGram = "https://instagram.com/4geeksacademy";
  } else {
    instaGram = variables.instagram;
  }
  let roleDropDown = "";
  if (variables.role == null) {
    roleDropDown = "Web Developer";
  } else {
    roleDropDown = variables.role;
  }
  let cityDropDown = "";
  if (variables.city == null) {
    cityDropDown = "Miami";
  } else {
    cityDropDown = variables.city;
  }
  let countryDropDown = "";
  if (variables.country == null) {
    countryDropDown = "USA";
  } else {
    countryDropDown = variables.country;
  }
  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${firstName} ${lastName}</h1>
          <h2>${roleDropDown}</h2>
          <h3>${cityDropDown} ${countryDropDown}</h3>
          <ul class="${variables.socialMediaPosition}">
            <li><a href="${twitterLink}"><i class="fa-brands fa-square-twitter fa-xl fa-bounce"></i></i></a></li>
            <li><a href="${gitHub}"><i class="fab fa-github fa-xl fa-bounce"></i></a></li>
            <li><a href="${linkedIn}"><i class="fab fa-linkedin fa-xl fa-bounce"></i></a></li>
            <li><a href="${instaGram}"><i class="fab fa-instagram fa-xl fa-bounce"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL:
      "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_640.png",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};

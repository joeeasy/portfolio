window.onload = function() {
    var app = app || {};

    app = {
        introduction: function() {
            var elements = document.getElementsByClassName('typewrite');
            for (var i=0; i<elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                  new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
            document.body.appendChild(css);
        },
        portfolio: [
            {name: "Temitope Atte", siteUrl: "temitopeatte.org", imageUrl: 'http://res.cloudinary.com/dsxfchez8/image/upload/v1520163637/temitope-atte_gekpsg.png'},
            
            {name: "Prime Agrolytics",siteUrl: "http://www.primeagrolytics.com/login", imageUrl: "http://res.cloudinary.com/dsxfchez8/image/upload/v1519746528/orimeagrolytics_hvjzps.png"},
             {name: "Cards For Humanity", siteUrl: "https://cfh.io", imageUrl: "http://res.cloudinary.com/dsxfchez8/image/upload/v1519745242/screencapture-cfh-io-1519745125999_taa2tk.png"},
             {name: "AJE",siteUrl: "https://joeeasy.github.io/aje/index.html", imageUrl: "http://res.cloudinary.com/dsxfchez8/image/upload/v1510847906/screencapture-joeeasy-github-io-aje-index-html-1510847847079_lpawda.png"},
             
             {name: "Univelcity LMS", siteUrl:"http://res.cloudinary.com/dsxfchez8/image/upload/v1520163637/temitope-atte_gekpsg.png 'https://univelcity-lms.herokuapp.com/', imageUrl: "http://res.cloudinary.com/dsxfchez8/image/upload/v1510850324/screencapture-univelcity-lms-herokuapp-com-index-1510850269515_i8v6b5.png"},
             
             {name: "Niger Delta Super Star", siteUrl: "http://nigerdeltasuperstar.org.ng", imageurl: "http://res.cloudinary.com/dsxfchez8/image/upload/v1510848302/screencapture-nigerdeltasuperstar-org-ng-1510848266383_ny219p.png"},
             
             {name: "Ikonfess", siteUrl: "http://www.ikonfess.com/", imageUrl: "http://res.cloudinary.com/dsxfchez8/image/upload/v1510847768/screencapture-www-ikonfess-com-1510847735636_hfrya9.png"},
             
             {name: "UK pubmed", siteUrl: "http://ukpubmed.org", imageUrl: "http://res.cloudinary.com/dsxfchez8/image/upload/v1510847524/ukpubmed_lo1j9y.png"},
             
        ],
        loadPortfolio: function() {
            var portfolioContainer = document.querySelector('#portfolioContainer');
            // console.log(portfolioContainer)
            app.portfolio.forEach(function(item) {
                portfolioContainer.innerHTML += `
                <div class="d iv jo kk" style="height: 482px; margin-bottom: 10px">
                <div class="m">
                <div class="overlay-container" style="height: 482px">
                <img src="${item.imageUrl}" alt="Avatar" class="image">
                <div class="overlay">
                  <div class="text"> <a class="waves-effect waves-light btn-large" href="${item.siteUrl}" target="_blank">${item.name}</a></div>
                </div>
              </div>
                </div>
              </div>
                `
            });
        }
    }
    app.introduction();
    app.loadPortfolio();
}
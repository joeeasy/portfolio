window.onload = function() {
    var app = app || {};

    app = {
        portfolio: [
            
            
            
             {name: "Dust Hq", siteUrl: "http://dusthq.com", imageUrl: "http://res.cloudinary.com/dsxfchez8/image/upload/v1510847819/screencapture-www-dusthq-com-1510847801762_sglvjk.png"},
             
             {name: "AJE",siteUrl: "https://joeeasy.github.io/aje/index.html", imageUrl: "http://res.cloudinary.com/dsxfchez8/image/upload/v1510847906/screencapture-joeeasy-github-io-aje-index-html-1510847847079_lpawda.png"},
             
             {name: "Univelcity LMS", siteUrl: 'https://univelcity-lms.herokuapp.com/', imageUrl: "http://res.cloudinary.com/dsxfchez8/image/upload/v1510850324/screencapture-univelcity-lms-herokuapp-com-index-1510850269515_i8v6b5.png"},
             
             {name: "Niger Delta Super Star", siteUrl: "http://nigerdeltasuperstar.org.ng", imageurl: "http://res.cloudinary.com/dsxfchez8/image/upload/v1510848302/screencapture-nigerdeltasuperstar-org-ng-1510848266383_ny219p.png"},
             
             {name: "Ikonfess", siteUrl: "http://www.ikonfess.com/", imageUrl: "http://res.cloudinary.com/dsxfchez8/image/upload/v1510847768/screencapture-www-ikonfess-com-1510847735636_hfrya9.png"},
             
             {name: "UK pubmed", siteUrl: "http://ukpubmed.org", imageUrl: "http://res.cloudinary.com/dsxfchez8/image/upload/v1510847524/ukpubmed_lo1j9y.png"},
             {name: "Academia Publishing", siteUrl: "http://academaipublishing.org", imageUrl: "http://res.cloudinary.com/dsxfchez8/image/upload/v1510848198/screencapture-academiapublishing-org-1510848151282_u1teed.png"}
        ],
        loadPortfolio: function() {
            var portfolioContainer = document.querySelector('#portfolioContainer');
            console.log(portfolioContainer)
            app.portfolio.forEach(function(item) {
                portfolioContainer.innerHTML += `
                <div class="d iv jo kk" style="height: 482px; margin-bottom: 10px">
                <div class="m">
                  <div class="card-image">
                    <a href="${item.siteUrl}"><img src="${item.imageUrl}" style="height: 482px"></a>
                    <span class="card-title">${item.name}</span>
                  </div>
                </div>
              </div>
                `
            });
        }
    }
    app.loadPortfolio();
}
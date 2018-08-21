$(document).ready(function () {
    var designs = [];

    // design constructor
    class design {
        constructor(name, url, description) {
            this.name = name;
            this.url = url;
            this.description = description;

            // Push design to an array of all designs
            var designProject = {
                'name': this.name,
                'url': this.url,
                'description': this.description
            };

            designs.push(designProject);
        }
    }

    // List of designs 
    var wunderlist = new design(
        'Wunderlist Redesign Concept',
        'https://mir-s3-cdn-cf.behance.net/project_modules/source/dce74646831391.5865d2a1c862e.png',
        'I built this back when I used Wunderlist to manage my tasks. I loved Wunderlist, but heavily disliked the look. So, I decided to design my own version. To this day, this is my most popular design.'
    );

    var movieSite = new design(
        'Utopian Movie Site',
        'https://assets.materialup.com/uploads/ffd67f47-2726-4e76-8af2-5e93de39f097/preview.png',
        'I used to be heavy on streaming movies. There was this site I loved but I felt that the interface was too old. I redesigned the site with a focus on ease of access.'
    );

    var newspaper = new design(
        'Randolph Times Landing',
        'https://mir-s3-cdn-cf.behance.net/project_modules/source/b5b91d45644167.5837798f8d436.png',
        'Back when I was in my high school\'s newspaper team, we didn\'t have an online presence. So, I decided to build our school a newspaper that they can access anywhere, anytime, online or offline. Unfortunately, the idea wasn\'t implemented but this design has been one of my favorites.'
    );

    var algebraCom = new design(
        'Algebra.com Redesign',
        'https://assets.materialup.com/uploads/d8faa42a-698d-4ad5-91ea-6e40fe9c6c42/preview.png',
        'I love Algebra.com. I love the idea of people being willing to shell out a few minutes of their time to help others with their algebra homework. The site maintainer (and creator) has asked for a redesign favor. I ended up imagining what it could be like. Cleaner, simpler, and making asking questions easier than ever.'
    );

    function showDesigns(array) {
        for (i = 0; i < array.length; i++) {
            $('#designs > .row').append(
                '<div class="box col-md-6"><a href="' + array[i].url + '" title="' + array[i].name + '" data-toggle="lightbox" data-gallery="portfolio" data-title="' + array[i].name + '" data-footer="' + array[i].description + '"><img type="image/png" src="' + array[i].url + '" alt="' + array[i].name + '" class="img-responsive"/></a></div>')
        }
    }

    function lightbox() {

        $(document).delegate('*[data-toggle="lightbox"]', 'click', function (event) {
            event.preventDefault();
            $(this).ekkoLightbox();
        });
    }

    lightbox();
    showDesigns(designs);
});
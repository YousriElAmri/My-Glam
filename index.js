          // navbar function
          $(function () {
            $(document).scroll(function () {
              var $nav = $(".navbar-fixed-top");
              $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
            });
          });



          function myFunction() {
            setTimeout(function () {
              alert("Hello");
            }, 3000);
          }

          // SLIDER
          $(document).ready(function () {
            $("#myCarousel").on("slide.bs.carousel", function (e) {
              var $e = $(e.relatedTarget);
              var idx = $e.index();
              var itemsPerSlide = 3;
              var totalItems = $(".carousel-item").length;

              if (idx >= totalItems - (itemsPerSlide - 1)) {
                var it = itemsPerSlide - (totalItems - idx);
                for (var i = 0; i < it; i++) {
                  // append slides to end
                  if (e.direction == "left") {
                    $(".carousel-item")
                      .eq(i)
                      .appendTo(".carousel-inner");
                  } else {
                    $(".carousel-item")
                      .eq(0)
                      .appendTo($(this).find(".carousel-inner"));
                  }
                }
              }
            });
          });


          $.getJSON("https://cors.io/?https://api.myglamapp.pl/api/categories?language=EN", function (file) {
            var cardBody = "";
            for (var i = 0; i < file.data.length; i++) {
              if (i == 0) {
                cardBody += '<div class="carousel-item col-md-4 active">';
              } else {
                cardBody += '<div class="carousel-item col-md-4 ">';
              }
              cardBody += '<div class="card">' +
                '<img class="card-img-top img-fluid" src="http://' + file.data[i].imagePath + '"alt="Card image">' +
                '<div class="card-body">' +
                '<div class="image-underline"></div>' +
                '<h4 class="card-title">' + file.data[i].label + '</h4>' ;
            
             for (let j = 0; j < file.data[i].Services.length; j++) {
               cardBody += '<p class="card-text"><small class="text-muted">' + file.data[i].Services[j].label_service + '</small></p>' ;
             }
             cardBody+= '</div>' +
             '</div>' +
             '</div>';
             document.getElementById('carousel-inner').innerHTML = cardBody;
          }
          })
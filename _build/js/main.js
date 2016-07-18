(function(){
  var app = angular.module('store', []);

  app.controller('StoreCtrl', function(){
    this.products = gems;
  });
  app.controller('PanelCtrl', function(){
    this.tab = 1;

    this.selectTab = function(setTab){
      this.tab = setTab;
    };

    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

  var gems = [
    {
        type: 'gem',
        name: 'Dodecahedreon',
        price: 10,
        description: 'This is a 10 sided gem object, and a secret piece of knowledge Lorem ipsum dolor sit amet',
        canPurchase: true,
        soldOut: false,
        images: [{full: 'assets/img/dode.jpg'}],
        reviews:{
            rating: 5,
            text: "I love this gem, it's just wonderful",
            user: "mary@lovesit.com"
          }
     },
     {
       type: 'gem',
       name: 'Tetrahedron',
       price: 4,
       description: 'This is a 4 sided gem object, and a secret piece of knowledge Lorem ipsum dolor sit amet',
       canPurchase: false ,
       soldOut: false,
       images: [{full: 'assets/img/tetra.jpg'}],
       reviews:{
           rating: 5,
           text: "I love this gem, it's just wonderful",
           user: "mary@lovesit.com"
         },
    },
    {
      type: 'gem',
      name: 'Octohedron',
      price: 8,
      description: 'This is a 8 sided gem object, and a secret piece of knowledge Lorem ipsum dolor sit amet',
      canPurchase: true,
      soldOut: false,
      images: [{full: 'assets/img/octo.jpg'}],
      reviews:{
          rating: 5,
          text: "I love this gem, it's just wonderful",
          user: "mary@lovesit.com"
        },
   },
   {
     type: 'gem',
     name: 'Isosahedron',
     price: 6,
     description: 'This is a 6 sided gem object, and a secret piece of knowledge Lorem ipsum dolor sit amet',
     canPurchase: true,
     soldOut: false,
     images: [{full: 'assets/img/isos.jpg'}],
     reviews:{
         rating: 5,
         text: "I love this gem, it's just wonderful",
         user: "mary@lovesit.com"
       },
  }];
})();

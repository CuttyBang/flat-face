(function(){
  var app = angular.module('store', []);

  app.controller('StoreCtrl', function(){
    this.products = gems;
  });

  var gems = [
    {
        type: 'gem',
        name: 'Dodecahedreon',
        price: 10,
        description: 'This is a 10 sided gem object, and a secret piece of knowledge Lorem ipsum dolor sit amet',
        canPurchase: true,
        soldOut: false
     },
     {
       type: 'gem',
       name: 'Tetrahedron',
       price: 4,
       description: 'This is a 4 sided gem object, and a secret piece of knowledge Lorem ipsum dolor sit amet',
       canPurchase: false ,
       soldOut: false
    },
    {
      type: 'gem',
      name: 'Octohedron',
      price: 8,
      description: 'This is a 8 sided gem object, and a secret piece of knowledge Lorem ipsum dolor sit amet',
      canPurchase: true,
      soldOut: false
   },
   {
     type: 'gem',
     name: 'Isosahedron',
     price: 6,
     description: 'This is a 6 sided gem object, and a secret piece of knowledge Lorem ipsum dolor sit amet',
     canPurchase: true,
     soldOut: false
  },
    ];
})();

 var myApp = require('./myP.js');
(function(){
  'use strict';

 describe("Case for a prime number", function() {

      it("should return `[ 2, 3, 5, 7, 11, 13]` for 14", function() {
        expect(myApp.getPrime(14)).toEqual([ 2, 3, 5, 7, 11, 13]);
      });

      it("should return `[2, 3, 5, 7]` for 8", function() {
        expect(myApp.getPrime(8)).toEqual( [2, 3, 5, 7]);
      });

      it("should return `[ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ]` for 50", function() {
        expect(myApp.getPrime(50)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ]);
      });

      it("should return `[ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29]` for 30", function() {
        expect(myApp.getPrime(30)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
      });

      it("should return `[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,53,59, 61,67,71,73,79,83,89,97 ]` for 100", function() {
        expect(myApp.getPrime(100)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,53,59, 61,67,71,73,79,83,89,97 ]);
      });


    })
 })();
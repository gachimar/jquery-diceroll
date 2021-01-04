(function(factory) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        define([ "jquery" ], factory);
    } else {
        factory(jQuery);
    }
})(function($) {
   var roller = function (number){
        let dots = new Array
        switch (number) {
            case 1:
                return [0,0,0,0,1,0,0,0,0]
                break
            case 2:
                return [1,0,0,0,0,0,0,0,1]
                break
            case 3:
                return [1,0,0,0,1,0,0,0,1]
                break
            case 4:
                return [1,0,1,0,0,0,1,0,1]
                break
            case 5:
                return [1,0,1,0,1,0,1,0,1]
                break
            case 6: 
                return [1,1,1,0,0,0,1,1,1]
                break
        }
   }
   var render = function (el,dots,background,secs){
        let pulse = 'pulse';
        if (secs === 'b'){
            pulse = 'pulse-two'
        }
        el.html('<div class="dice '+(secs !== undefined ? (secs === 'b' ? 'dice-spin-two' : 'dice-spin-one') : 'dice-spin-one' )+'" style="background-color:'+ (background===undefined ? '#333' : background) +'"><div class="dice-body">'+"\n"+'<div class="pin-container">'+"\n"+'<div class="'
            + (dots[0] ? 'pin' : 'blank') +
            ' '+ pulse +'"></div>  <div class="'
            + (dots[1] ? 'pin' : 'blank') +
            '"></div>  <div class="'
            + (dots[2] ? 'pin' : 'blank') +
            ' '+ pulse +'"></div></div>'+"\n"+'<div  class="pin-container">'+"\n"+'<div class="'
            + (dots[3] ? 'pin' : 'blank') +
            '"></div>  <div class="'
            + (dots[4] ? 'pin' : 'blank') +
            ' '+ pulse +'"></div>  <div class="'
            + (dots[5] ? 'pin' : 'blank') +
            '"></div></div>'+"\n"+'<div  class="pin-container">'+"\n"+'<div class="'
            + (dots[6] ? 'pin' : 'blank') +
            ' '+ pulse +'"></div>  <div class="'
            + (dots[7] ? 'pin' : 'blank') +
            '"></div>  <div class="'
            + (dots[8] ? 'pin' : 'blank') +
            ' '+ pulse +'"></div></div></div></div>')
   }
   $.fn.diceroll = function(number,background,secs){

        this.addClass('dice');
        
        let dots = roller(Number(number));
        
        render(this,dots,background,secs)
        
   }
})
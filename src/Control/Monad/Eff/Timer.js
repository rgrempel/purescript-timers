/* global exports */
"use strict";


// module Control.Monad.Eff.Timer

exports.timeout = function(time){
  return function(fn){
    return function(){
      return setTimeout(fn, time);
    };
  };
};

exports.clearTimeout = function(timer){
  return function(){
    return clearTimeout(timer);
  };
};

exports.interval = function(time){
  return function(fn){
    return function(){
      return setInterval(fn, time);
    };
  };
};

exports.clearInterval = function(timer){
  return function(){
    return clearInterval(timer);
  };
};

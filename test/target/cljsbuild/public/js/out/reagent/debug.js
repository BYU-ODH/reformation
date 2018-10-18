// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__46715__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__46715 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46716__i = 0, G__46716__a = new Array(arguments.length -  0);
while (G__46716__i < G__46716__a.length) {G__46716__a[G__46716__i] = arguments[G__46716__i + 0]; ++G__46716__i;}
  args = new cljs.core.IndexedSeq(G__46716__a,0,null);
} 
return G__46715__delegate.call(this,args);};
G__46715.cljs$lang$maxFixedArity = 0;
G__46715.cljs$lang$applyTo = (function (arglist__46717){
var args = cljs.core.seq(arglist__46717);
return G__46715__delegate(args);
});
G__46715.cljs$core$IFn$_invoke$arity$variadic = G__46715__delegate;
return G__46715;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__46718__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__46718 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46719__i = 0, G__46719__a = new Array(arguments.length -  0);
while (G__46719__i < G__46719__a.length) {G__46719__a[G__46719__i] = arguments[G__46719__i + 0]; ++G__46719__i;}
  args = new cljs.core.IndexedSeq(G__46719__a,0,null);
} 
return G__46718__delegate.call(this,args);};
G__46718.cljs$lang$maxFixedArity = 0;
G__46718.cljs$lang$applyTo = (function (arglist__46720){
var args = cljs.core.seq(arglist__46720);
return G__46718__delegate(args);
});
G__46718.cljs$core$IFn$_invoke$arity$variadic = G__46718__delegate;
return G__46718;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map

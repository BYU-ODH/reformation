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
var G__49649__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__49649 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49650__i = 0, G__49650__a = new Array(arguments.length -  0);
while (G__49650__i < G__49650__a.length) {G__49650__a[G__49650__i] = arguments[G__49650__i + 0]; ++G__49650__i;}
  args = new cljs.core.IndexedSeq(G__49650__a,0,null);
} 
return G__49649__delegate.call(this,args);};
G__49649.cljs$lang$maxFixedArity = 0;
G__49649.cljs$lang$applyTo = (function (arglist__49651){
var args = cljs.core.seq(arglist__49651);
return G__49649__delegate(args);
});
G__49649.cljs$core$IFn$_invoke$arity$variadic = G__49649__delegate;
return G__49649;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__49652__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__49652 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49653__i = 0, G__49653__a = new Array(arguments.length -  0);
while (G__49653__i < G__49653__a.length) {G__49653__a[G__49653__i] = arguments[G__49653__i + 0]; ++G__49653__i;}
  args = new cljs.core.IndexedSeq(G__49653__a,0,null);
} 
return G__49652__delegate.call(this,args);};
G__49652.cljs$lang$maxFixedArity = 0;
G__49652.cljs$lang$applyTo = (function (arglist__49654){
var args = cljs.core.seq(arglist__49654);
return G__49652__delegate(args);
});
G__49652.cljs$core$IFn$_invoke$arity$variadic = G__49652__delegate;
return G__49652;
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

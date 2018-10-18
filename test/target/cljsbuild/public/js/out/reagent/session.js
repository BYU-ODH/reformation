// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor.call(null,reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__45799__auto__ = [];
var len__45792__auto___51248 = arguments.length;
var i__45793__auto___51249 = (0);
while(true){
if((i__45793__auto___51249 < len__45792__auto___51248)){
args__45799__auto__.push((arguments[i__45793__auto___51249]));

var G__51250 = (i__45793__auto___51249 + (1));
i__45793__auto___51249 = G__51250;
continue;
} else {
}
break;
}

var argseq__45800__auto__ = ((((1) < args__45799__auto__.length))?(new cljs.core.IndexedSeq(args__45799__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45800__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__51244){
var vec__51245 = p__51244;
var default$ = cljs.core.nth.call(null,vec__51245,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref.call(null,temp_a) == null))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq51242){
var G__51243 = cljs.core.first.call(null,seq51242);
var seq51242__$1 = cljs.core.next.call(null,seq51242);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__51243,seq51242__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__45799__auto__ = [];
var len__45792__auto___51257 = arguments.length;
var i__45793__auto___51258 = (0);
while(true){
if((i__45793__auto___51258 < len__45792__auto___51257)){
args__45799__auto__.push((arguments[i__45793__auto___51258]));

var G__51259 = (i__45793__auto___51258 + (1));
i__45793__auto___51258 = G__51259;
continue;
} else {
}
break;
}

var argseq__45800__auto__ = ((((1) < args__45799__auto__.length))?(new cljs.core.IndexedSeq(args__45799__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45800__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__51253){
var vec__51254 = p__51253;
var default$ = cljs.core.nth.call(null,vec__51254,(0),null);
var or__44515__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__44515__auto__)){
return or__44515__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq51251){
var G__51252 = cljs.core.first.call(null,seq51251);
var seq51251__$1 = cljs.core.next.call(null,seq51251);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__51252,seq51251__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__45799__auto__ = [];
var len__45792__auto___51262 = arguments.length;
var i__45793__auto___51263 = (0);
while(true){
if((i__45793__auto___51263 < len__45792__auto___51262)){
args__45799__auto__.push((arguments[i__45793__auto___51263]));

var G__51264 = (i__45793__auto___51263 + (1));
i__45793__auto___51263 = G__51264;
continue;
} else {
}
break;
}

var argseq__45800__auto__ = ((((1) < args__45799__auto__.length))?(new cljs.core.IndexedSeq(args__45799__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45800__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq51260){
var G__51261 = cljs.core.first.call(null,seq51260);
var seq51260__$1 = cljs.core.next.call(null,seq51260);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51261,seq51260__$1);
});

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__45799__auto__ = [];
var len__45792__auto___51271 = arguments.length;
var i__45793__auto___51272 = (0);
while(true){
if((i__45793__auto___51272 < len__45792__auto___51271)){
args__45799__auto__.push((arguments[i__45793__auto___51272]));

var G__51273 = (i__45793__auto___51272 + (1));
i__45793__auto___51272 = G__51273;
continue;
} else {
}
break;
}

var argseq__45800__auto__ = ((((1) < args__45799__auto__.length))?(new cljs.core.IndexedSeq(args__45799__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45800__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__51267){
var vec__51268 = p__51267;
var default$ = cljs.core.nth.call(null,vec__51268,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq51265){
var G__51266 = cljs.core.first.call(null,seq51265);
var seq51265__$1 = cljs.core.next.call(null,seq51265);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51266,seq51265__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__45799__auto__ = [];
var len__45792__auto___51280 = arguments.length;
var i__45793__auto___51281 = (0);
while(true){
if((i__45793__auto___51281 < len__45792__auto___51280)){
args__45799__auto__.push((arguments[i__45793__auto___51281]));

var G__51282 = (i__45793__auto___51281 + (1));
i__45793__auto___51281 = G__51282;
continue;
} else {
}
break;
}

var argseq__45800__auto__ = ((((1) < args__45799__auto__.length))?(new cljs.core.IndexedSeq(args__45799__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45800__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__51276){
var vec__51277 = p__51276;
var default$ = cljs.core.nth.call(null,vec__51277,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq51274){
var G__51275 = cljs.core.first.call(null,seq51274);
var seq51274__$1 = cljs.core.next.call(null,seq51274);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51275,seq51274__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__45799__auto__ = [];
var len__45792__auto___51287 = arguments.length;
var i__45793__auto___51288 = (0);
while(true){
if((i__45793__auto___51288 < len__45792__auto___51287)){
args__45799__auto__.push((arguments[i__45793__auto___51288]));

var G__51289 = (i__45793__auto___51288 + (1));
i__45793__auto___51288 = G__51289;
continue;
} else {
}
break;
}

var argseq__45800__auto__ = ((((2) < args__45799__auto__.length))?(new cljs.core.IndexedSeq(args__45799__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45800__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__51283_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__51283_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq51284){
var G__51285 = cljs.core.first.call(null,seq51284);
var seq51284__$1 = cljs.core.next.call(null,seq51284);
var G__51286 = cljs.core.first.call(null,seq51284__$1);
var seq51284__$2 = cljs.core.next.call(null,seq51284__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51285,G__51286,seq51284__$2);
});

/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__45799__auto__ = [];
var len__45792__auto___51294 = arguments.length;
var i__45793__auto___51295 = (0);
while(true){
if((i__45793__auto___51295 < len__45792__auto___51294)){
args__45799__auto__.push((arguments[i__45793__auto___51295]));

var G__51296 = (i__45793__auto___51295 + (1));
i__45793__auto___51295 = G__51296;
continue;
} else {
}
break;
}

var argseq__45800__auto__ = ((((2) < args__45799__auto__.length))?(new cljs.core.IndexedSeq(args__45799__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45800__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__51290_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__51290_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq51291){
var G__51292 = cljs.core.first.call(null,seq51291);
var seq51291__$1 = cljs.core.next.call(null,seq51291);
var G__51293 = cljs.core.first.call(null,seq51291__$1);
var seq51291__$2 = cljs.core.next.call(null,seq51291__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51292,G__51293,seq51291__$2);
});


//# sourceMappingURL=session.js.map

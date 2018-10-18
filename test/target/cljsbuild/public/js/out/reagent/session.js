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
var args__44545__auto__ = [];
var len__44538__auto___47183 = arguments.length;
var i__44539__auto___47184 = (0);
while(true){
if((i__44539__auto___47184 < len__44538__auto___47183)){
args__44545__auto__.push((arguments[i__44539__auto___47184]));

var G__47185 = (i__44539__auto___47184 + (1));
i__44539__auto___47184 = G__47185;
continue;
} else {
}
break;
}

var argseq__44546__auto__ = ((((1) < args__44545__auto__.length))?(new cljs.core.IndexedSeq(args__44545__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44546__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__47179){
var vec__47180 = p__47179;
var default$ = cljs.core.nth.call(null,vec__47180,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref.call(null,temp_a) == null))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq47177){
var G__47178 = cljs.core.first.call(null,seq47177);
var seq47177__$1 = cljs.core.next.call(null,seq47177);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__47178,seq47177__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__44545__auto__ = [];
var len__44538__auto___47192 = arguments.length;
var i__44539__auto___47193 = (0);
while(true){
if((i__44539__auto___47193 < len__44538__auto___47192)){
args__44545__auto__.push((arguments[i__44539__auto___47193]));

var G__47194 = (i__44539__auto___47193 + (1));
i__44539__auto___47193 = G__47194;
continue;
} else {
}
break;
}

var argseq__44546__auto__ = ((((1) < args__44545__auto__.length))?(new cljs.core.IndexedSeq(args__44545__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44546__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__47188){
var vec__47189 = p__47188;
var default$ = cljs.core.nth.call(null,vec__47189,(0),null);
var or__43261__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__43261__auto__)){
return or__43261__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq47186){
var G__47187 = cljs.core.first.call(null,seq47186);
var seq47186__$1 = cljs.core.next.call(null,seq47186);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__47187,seq47186__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__44545__auto__ = [];
var len__44538__auto___47197 = arguments.length;
var i__44539__auto___47198 = (0);
while(true){
if((i__44539__auto___47198 < len__44538__auto___47197)){
args__44545__auto__.push((arguments[i__44539__auto___47198]));

var G__47199 = (i__44539__auto___47198 + (1));
i__44539__auto___47198 = G__47199;
continue;
} else {
}
break;
}

var argseq__44546__auto__ = ((((1) < args__44545__auto__.length))?(new cljs.core.IndexedSeq(args__44545__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44546__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq47195){
var G__47196 = cljs.core.first.call(null,seq47195);
var seq47195__$1 = cljs.core.next.call(null,seq47195);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47196,seq47195__$1);
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
var args__44545__auto__ = [];
var len__44538__auto___47206 = arguments.length;
var i__44539__auto___47207 = (0);
while(true){
if((i__44539__auto___47207 < len__44538__auto___47206)){
args__44545__auto__.push((arguments[i__44539__auto___47207]));

var G__47208 = (i__44539__auto___47207 + (1));
i__44539__auto___47207 = G__47208;
continue;
} else {
}
break;
}

var argseq__44546__auto__ = ((((1) < args__44545__auto__.length))?(new cljs.core.IndexedSeq(args__44545__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44546__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__47202){
var vec__47203 = p__47202;
var default$ = cljs.core.nth.call(null,vec__47203,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq47200){
var G__47201 = cljs.core.first.call(null,seq47200);
var seq47200__$1 = cljs.core.next.call(null,seq47200);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47201,seq47200__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__44545__auto__ = [];
var len__44538__auto___47215 = arguments.length;
var i__44539__auto___47216 = (0);
while(true){
if((i__44539__auto___47216 < len__44538__auto___47215)){
args__44545__auto__.push((arguments[i__44539__auto___47216]));

var G__47217 = (i__44539__auto___47216 + (1));
i__44539__auto___47216 = G__47217;
continue;
} else {
}
break;
}

var argseq__44546__auto__ = ((((1) < args__44545__auto__.length))?(new cljs.core.IndexedSeq(args__44545__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44546__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__47211){
var vec__47212 = p__47211;
var default$ = cljs.core.nth.call(null,vec__47212,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq47209){
var G__47210 = cljs.core.first.call(null,seq47209);
var seq47209__$1 = cljs.core.next.call(null,seq47209);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47210,seq47209__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__44545__auto__ = [];
var len__44538__auto___47222 = arguments.length;
var i__44539__auto___47223 = (0);
while(true){
if((i__44539__auto___47223 < len__44538__auto___47222)){
args__44545__auto__.push((arguments[i__44539__auto___47223]));

var G__47224 = (i__44539__auto___47223 + (1));
i__44539__auto___47223 = G__47224;
continue;
} else {
}
break;
}

var argseq__44546__auto__ = ((((2) < args__44545__auto__.length))?(new cljs.core.IndexedSeq(args__44545__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__44546__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__47218_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__47218_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq47219){
var G__47220 = cljs.core.first.call(null,seq47219);
var seq47219__$1 = cljs.core.next.call(null,seq47219);
var G__47221 = cljs.core.first.call(null,seq47219__$1);
var seq47219__$2 = cljs.core.next.call(null,seq47219__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47220,G__47221,seq47219__$2);
});

/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__44545__auto__ = [];
var len__44538__auto___47229 = arguments.length;
var i__44539__auto___47230 = (0);
while(true){
if((i__44539__auto___47230 < len__44538__auto___47229)){
args__44545__auto__.push((arguments[i__44539__auto___47230]));

var G__47231 = (i__44539__auto___47230 + (1));
i__44539__auto___47230 = G__47231;
continue;
} else {
}
break;
}

var argseq__44546__auto__ = ((((2) < args__44545__auto__.length))?(new cljs.core.IndexedSeq(args__44545__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__44546__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__47225_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__47225_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq47226){
var G__47227 = cljs.core.first.call(null,seq47226);
var seq47226__$1 = cljs.core.next.call(null,seq47226);
var G__47228 = cljs.core.first.call(null,seq47226__$1);
var seq47226__$2 = cljs.core.next.call(null,seq47226__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47227,G__47228,seq47226__$2);
});


//# sourceMappingURL=session.js.map

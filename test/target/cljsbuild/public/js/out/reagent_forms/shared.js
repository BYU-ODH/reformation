// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent_forms.shared');
goog.require('cljs.core');
goog.require('clojure.string');
reagent_forms.shared.get_value_from_change = (function reagent_forms$shared$get_value_from_change(e){
return e.target.value;
});
reagent_forms.shared.idify = (function reagent_forms$shared$idify(s){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.lower_case.call(null,s),/ /,"-"),/[^0-9 \- a-z]/,"");
});
/**
 * Adjust a submission-default map for review rather than editing
 */
reagent_forms.shared.reviewify = (function reagent_forms$shared$reviewify(given_default){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__45397__auto__ = (function reagent_forms$shared$reviewify_$_iter__51931(s__51932){
return (new cljs.core.LazySeq(null,(function (){
var s__51932__$1 = s__51932;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__51932__$1);
if(temp__5278__auto__){
var s__51932__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51932__$2)){
var c__45395__auto__ = cljs.core.chunk_first.call(null,s__51932__$2);
var size__45396__auto__ = cljs.core.count.call(null,c__45395__auto__);
var b__51934 = cljs.core.chunk_buffer.call(null,size__45396__auto__);
if((function (){var i__51933 = (0);
while(true){
if((i__51933 < size__45396__auto__)){
var vec__51935 = cljs.core._nth.call(null,c__45395__auto__,i__51933);
var k = cljs.core.nth.call(null,vec__51935,(0),null);
var v = cljs.core.nth.call(null,vec__51935,(1),null);
cljs.core.chunk_append.call(null,b__51934,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core.vector_QMARK_.call(null,v))?cljs.core.conj.call(null,v,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true):((cljs.core.map_QMARK_.call(null,v))?reagent_forms.shared.reviewify.call(null,v):null))], null));

var G__51941 = (i__51933 + (1));
i__51933 = G__51941;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51934),reagent_forms$shared$reviewify_$_iter__51931.call(null,cljs.core.chunk_rest.call(null,s__51932__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51934),null);
}
} else {
var vec__51938 = cljs.core.first.call(null,s__51932__$2);
var k = cljs.core.nth.call(null,vec__51938,(0),null);
var v = cljs.core.nth.call(null,vec__51938,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core.vector_QMARK_.call(null,v))?cljs.core.conj.call(null,v,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true):((cljs.core.map_QMARK_.call(null,v))?reagent_forms.shared.reviewify.call(null,v):null))], null),reagent_forms$shared$reviewify_$_iter__51931.call(null,cljs.core.rest.call(null,s__51932__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__45397__auto__.call(null,given_default);
})());
});

//# sourceMappingURL=shared.js.map

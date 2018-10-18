// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent_forms.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('secretary.core');
goog.require('accountant.core');
var action__51319__auto___51452 = (function (params__51320__auto__){
if(cljs.core.map_QMARK_.call(null,params__51320__auto__)){
var map__51446 = params__51320__auto__;
var map__51446__$1 = ((((!((map__51446 == null)))?((((map__51446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51446):map__51446);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core.vector_QMARK_.call(null,params__51320__auto__)){
var vec__51448 = params__51320__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__51319__auto___51452);

reagent_forms.routes.home = ((function (action__51319__auto___51452){
return (function reagent_forms$routes$home(var_args){
var args__45799__auto__ = [];
var len__45792__auto___51453 = arguments.length;
var i__45793__auto___51454 = (0);
while(true){
if((i__45793__auto___51454 < len__45792__auto___51453)){
args__45799__auto__.push((arguments[i__45793__auto___51454]));

var G__51455 = (i__45793__auto___51454 + (1));
i__45793__auto___51454 = G__51455;
continue;
} else {
}
break;
}

var argseq__45800__auto__ = ((((0) < args__45799__auto__.length))?(new cljs.core.IndexedSeq(args__45799__auto__.slice((0)),(0),null)):null);
return reagent_forms.routes.home.cljs$core$IFn$_invoke$arity$variadic(argseq__45800__auto__);
});})(action__51319__auto___51452))
;

reagent_forms.routes.home.cljs$core$IFn$_invoke$arity$variadic = ((function (action__51319__auto___51452){
return (function (args__51318__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__51318__auto__);
});})(action__51319__auto___51452))
;

reagent_forms.routes.home.cljs$lang$maxFixedArity = (0);

reagent_forms.routes.home.cljs$lang$applyTo = ((function (action__51319__auto___51452){
return (function (seq51451){
return reagent_forms.routes.home.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51451));
});})(action__51319__auto___51452))
;

var action__51319__auto___51462 = (function (params__51320__auto__){
if(cljs.core.map_QMARK_.call(null,params__51320__auto__)){
var map__51456 = params__51320__auto__;
var map__51456__$1 = ((((!((map__51456 == null)))?((((map__51456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51456.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51456):map__51456);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"app","app",-560961707));
} else {
if(cljs.core.vector_QMARK_.call(null,params__51320__auto__)){
var vec__51458 = params__51320__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"app","app",-560961707));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/applicant",action__51319__auto___51462);

reagent_forms.routes.applicant_route = ((function (action__51319__auto___51462){
return (function reagent_forms$routes$applicant_route(var_args){
var args__45799__auto__ = [];
var len__45792__auto___51463 = arguments.length;
var i__45793__auto___51464 = (0);
while(true){
if((i__45793__auto___51464 < len__45792__auto___51463)){
args__45799__auto__.push((arguments[i__45793__auto___51464]));

var G__51465 = (i__45793__auto___51464 + (1));
i__45793__auto___51464 = G__51465;
continue;
} else {
}
break;
}

var argseq__45800__auto__ = ((((0) < args__45799__auto__.length))?(new cljs.core.IndexedSeq(args__45799__auto__.slice((0)),(0),null)):null);
return reagent_forms.routes.applicant_route.cljs$core$IFn$_invoke$arity$variadic(argseq__45800__auto__);
});})(action__51319__auto___51462))
;

reagent_forms.routes.applicant_route.cljs$core$IFn$_invoke$arity$variadic = ((function (action__51319__auto___51462){
return (function (args__51318__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/applicant",args__51318__auto__);
});})(action__51319__auto___51462))
;

reagent_forms.routes.applicant_route.cljs$lang$maxFixedArity = (0);

reagent_forms.routes.applicant_route.cljs$lang$applyTo = ((function (action__51319__auto___51462){
return (function (seq51461){
return reagent_forms.routes.applicant_route.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51461));
});})(action__51319__auto___51462))
;

var action__51319__auto___51472 = (function (params__51320__auto__){
if(cljs.core.map_QMARK_.call(null,params__51320__auto__)){
var map__51466 = params__51320__auto__;
var map__51466__$1 = ((((!((map__51466 == null)))?((((map__51466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51466):map__51466);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"reviews-dashboard","reviews-dashboard",1642004409));
} else {
if(cljs.core.vector_QMARK_.call(null,params__51320__auto__)){
var vec__51468 = params__51320__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"reviews-dashboard","reviews-dashboard",1642004409));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/reviews",action__51319__auto___51472);

reagent_forms.routes.reviews_dashboard_route = ((function (action__51319__auto___51472){
return (function reagent_forms$routes$reviews_dashboard_route(var_args){
var args__45799__auto__ = [];
var len__45792__auto___51473 = arguments.length;
var i__45793__auto___51474 = (0);
while(true){
if((i__45793__auto___51474 < len__45792__auto___51473)){
args__45799__auto__.push((arguments[i__45793__auto___51474]));

var G__51475 = (i__45793__auto___51474 + (1));
i__45793__auto___51474 = G__51475;
continue;
} else {
}
break;
}

var argseq__45800__auto__ = ((((0) < args__45799__auto__.length))?(new cljs.core.IndexedSeq(args__45799__auto__.slice((0)),(0),null)):null);
return reagent_forms.routes.reviews_dashboard_route.cljs$core$IFn$_invoke$arity$variadic(argseq__45800__auto__);
});})(action__51319__auto___51472))
;

reagent_forms.routes.reviews_dashboard_route.cljs$core$IFn$_invoke$arity$variadic = ((function (action__51319__auto___51472){
return (function (args__51318__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/reviews",args__51318__auto__);
});})(action__51319__auto___51472))
;

reagent_forms.routes.reviews_dashboard_route.cljs$lang$maxFixedArity = (0);

reagent_forms.routes.reviews_dashboard_route.cljs$lang$applyTo = ((function (action__51319__auto___51472){
return (function (seq51471){
return reagent_forms.routes.reviews_dashboard_route.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51471));
});})(action__51319__auto___51472))
;

var action__51319__auto___51482 = (function (params__51320__auto__){
if(cljs.core.map_QMARK_.call(null,params__51320__auto__)){
var map__51476 = params__51320__auto__;
var map__51476__$1 = ((((!((map__51476 == null)))?((((map__51476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51476.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51476):map__51476);
var application = cljs.core.get.call(null,map__51476__$1,new cljs.core.Keyword(null,"application","application",551185447));
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"application","application",551185447),parseInt(application));

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"review","review",1101692435));
} else {
if(cljs.core.vector_QMARK_.call(null,params__51320__auto__)){
var vec__51478 = params__51320__auto__;
var application = cljs.core.nth.call(null,vec__51478,(0),null);
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"application","application",551185447),parseInt(application));

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"review","review",1101692435));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/review/:application",action__51319__auto___51482);

reagent_forms.routes.review_route = ((function (action__51319__auto___51482){
return (function reagent_forms$routes$review_route(var_args){
var args__45799__auto__ = [];
var len__45792__auto___51483 = arguments.length;
var i__45793__auto___51484 = (0);
while(true){
if((i__45793__auto___51484 < len__45792__auto___51483)){
args__45799__auto__.push((arguments[i__45793__auto___51484]));

var G__51485 = (i__45793__auto___51484 + (1));
i__45793__auto___51484 = G__51485;
continue;
} else {
}
break;
}

var argseq__45800__auto__ = ((((0) < args__45799__auto__.length))?(new cljs.core.IndexedSeq(args__45799__auto__.slice((0)),(0),null)):null);
return reagent_forms.routes.review_route.cljs$core$IFn$_invoke$arity$variadic(argseq__45800__auto__);
});})(action__51319__auto___51482))
;

reagent_forms.routes.review_route.cljs$core$IFn$_invoke$arity$variadic = ((function (action__51319__auto___51482){
return (function (args__51318__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/review/:application",args__51318__auto__);
});})(action__51319__auto___51482))
;

reagent_forms.routes.review_route.cljs$lang$maxFixedArity = (0);

reagent_forms.routes.review_route.cljs$lang$applyTo = ((function (action__51319__auto___51482){
return (function (seq51481){
return reagent_forms.routes.review_route.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51481));
});})(action__51319__auto___51482))
;

var action__51319__auto___51492 = (function (params__51320__auto__){
if(cljs.core.map_QMARK_.call(null,params__51320__auto__)){
var map__51486 = params__51320__auto__;
var map__51486__$1 = ((((!((map__51486 == null)))?((((map__51486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51486.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51486):map__51486);
var application = cljs.core.get.call(null,map__51486__$1,new cljs.core.Keyword(null,"application","application",551185447));
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"application","application",551185447),parseInt(application));

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"update","update",1045576396));
} else {
if(cljs.core.vector_QMARK_.call(null,params__51320__auto__)){
var vec__51488 = params__51320__auto__;
var application = cljs.core.nth.call(null,vec__51488,(0),null);
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"application","application",551185447),parseInt(application));

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"update","update",1045576396));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/application/edit/:application",action__51319__auto___51492);

reagent_forms.routes.edit_route = ((function (action__51319__auto___51492){
return (function reagent_forms$routes$edit_route(var_args){
var args__45799__auto__ = [];
var len__45792__auto___51493 = arguments.length;
var i__45793__auto___51494 = (0);
while(true){
if((i__45793__auto___51494 < len__45792__auto___51493)){
args__45799__auto__.push((arguments[i__45793__auto___51494]));

var G__51495 = (i__45793__auto___51494 + (1));
i__45793__auto___51494 = G__51495;
continue;
} else {
}
break;
}

var argseq__45800__auto__ = ((((0) < args__45799__auto__.length))?(new cljs.core.IndexedSeq(args__45799__auto__.slice((0)),(0),null)):null);
return reagent_forms.routes.edit_route.cljs$core$IFn$_invoke$arity$variadic(argseq__45800__auto__);
});})(action__51319__auto___51492))
;

reagent_forms.routes.edit_route.cljs$core$IFn$_invoke$arity$variadic = ((function (action__51319__auto___51492){
return (function (args__51318__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/application/edit/:application",args__51318__auto__);
});})(action__51319__auto___51492))
;

reagent_forms.routes.edit_route.cljs$lang$maxFixedArity = (0);

reagent_forms.routes.edit_route.cljs$lang$applyTo = ((function (action__51319__auto___51492){
return (function (seq51491){
return reagent_forms.routes.edit_route.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51491));
});})(action__51319__auto___51492))
;

accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
return secretary.core.dispatch_BANG_.call(null,path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return secretary.core.locate_route.call(null,path);
})], null));
accountant.core.dispatch_current_BANG_.call(null);

//# sourceMappingURL=routes.js.map

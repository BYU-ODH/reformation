// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent_forms.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('secretary.core');
goog.require('accountant.core');
var action__47254__auto___47387 = (function (params__47255__auto__){
if(cljs.core.map_QMARK_.call(null,params__47255__auto__)){
var map__47381 = params__47255__auto__;
var map__47381__$1 = ((((!((map__47381 == null)))?((((map__47381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47381.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47381):map__47381);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core.vector_QMARK_.call(null,params__47255__auto__)){
var vec__47383 = params__47255__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__47254__auto___47387);

reagent_forms.routes.home = ((function (action__47254__auto___47387){
return (function reagent_forms$routes$home(var_args){
var args__44545__auto__ = [];
var len__44538__auto___47388 = arguments.length;
var i__44539__auto___47389 = (0);
while(true){
if((i__44539__auto___47389 < len__44538__auto___47388)){
args__44545__auto__.push((arguments[i__44539__auto___47389]));

var G__47390 = (i__44539__auto___47389 + (1));
i__44539__auto___47389 = G__47390;
continue;
} else {
}
break;
}

var argseq__44546__auto__ = ((((0) < args__44545__auto__.length))?(new cljs.core.IndexedSeq(args__44545__auto__.slice((0)),(0),null)):null);
return reagent_forms.routes.home.cljs$core$IFn$_invoke$arity$variadic(argseq__44546__auto__);
});})(action__47254__auto___47387))
;

reagent_forms.routes.home.cljs$core$IFn$_invoke$arity$variadic = ((function (action__47254__auto___47387){
return (function (args__47253__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__47253__auto__);
});})(action__47254__auto___47387))
;

reagent_forms.routes.home.cljs$lang$maxFixedArity = (0);

reagent_forms.routes.home.cljs$lang$applyTo = ((function (action__47254__auto___47387){
return (function (seq47386){
return reagent_forms.routes.home.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47386));
});})(action__47254__auto___47387))
;

var action__47254__auto___47397 = (function (params__47255__auto__){
if(cljs.core.map_QMARK_.call(null,params__47255__auto__)){
var map__47391 = params__47255__auto__;
var map__47391__$1 = ((((!((map__47391 == null)))?((((map__47391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47391.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47391):map__47391);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"app","app",-560961707));
} else {
if(cljs.core.vector_QMARK_.call(null,params__47255__auto__)){
var vec__47393 = params__47255__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"app","app",-560961707));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/applicant",action__47254__auto___47397);

reagent_forms.routes.applicant_route = ((function (action__47254__auto___47397){
return (function reagent_forms$routes$applicant_route(var_args){
var args__44545__auto__ = [];
var len__44538__auto___47398 = arguments.length;
var i__44539__auto___47399 = (0);
while(true){
if((i__44539__auto___47399 < len__44538__auto___47398)){
args__44545__auto__.push((arguments[i__44539__auto___47399]));

var G__47400 = (i__44539__auto___47399 + (1));
i__44539__auto___47399 = G__47400;
continue;
} else {
}
break;
}

var argseq__44546__auto__ = ((((0) < args__44545__auto__.length))?(new cljs.core.IndexedSeq(args__44545__auto__.slice((0)),(0),null)):null);
return reagent_forms.routes.applicant_route.cljs$core$IFn$_invoke$arity$variadic(argseq__44546__auto__);
});})(action__47254__auto___47397))
;

reagent_forms.routes.applicant_route.cljs$core$IFn$_invoke$arity$variadic = ((function (action__47254__auto___47397){
return (function (args__47253__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/applicant",args__47253__auto__);
});})(action__47254__auto___47397))
;

reagent_forms.routes.applicant_route.cljs$lang$maxFixedArity = (0);

reagent_forms.routes.applicant_route.cljs$lang$applyTo = ((function (action__47254__auto___47397){
return (function (seq47396){
return reagent_forms.routes.applicant_route.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47396));
});})(action__47254__auto___47397))
;

var action__47254__auto___47407 = (function (params__47255__auto__){
if(cljs.core.map_QMARK_.call(null,params__47255__auto__)){
var map__47401 = params__47255__auto__;
var map__47401__$1 = ((((!((map__47401 == null)))?((((map__47401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47401.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47401):map__47401);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"reviews-dashboard","reviews-dashboard",1642004409));
} else {
if(cljs.core.vector_QMARK_.call(null,params__47255__auto__)){
var vec__47403 = params__47255__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"reviews-dashboard","reviews-dashboard",1642004409));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/reviews",action__47254__auto___47407);

reagent_forms.routes.reviews_dashboard_route = ((function (action__47254__auto___47407){
return (function reagent_forms$routes$reviews_dashboard_route(var_args){
var args__44545__auto__ = [];
var len__44538__auto___47408 = arguments.length;
var i__44539__auto___47409 = (0);
while(true){
if((i__44539__auto___47409 < len__44538__auto___47408)){
args__44545__auto__.push((arguments[i__44539__auto___47409]));

var G__47410 = (i__44539__auto___47409 + (1));
i__44539__auto___47409 = G__47410;
continue;
} else {
}
break;
}

var argseq__44546__auto__ = ((((0) < args__44545__auto__.length))?(new cljs.core.IndexedSeq(args__44545__auto__.slice((0)),(0),null)):null);
return reagent_forms.routes.reviews_dashboard_route.cljs$core$IFn$_invoke$arity$variadic(argseq__44546__auto__);
});})(action__47254__auto___47407))
;

reagent_forms.routes.reviews_dashboard_route.cljs$core$IFn$_invoke$arity$variadic = ((function (action__47254__auto___47407){
return (function (args__47253__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/reviews",args__47253__auto__);
});})(action__47254__auto___47407))
;

reagent_forms.routes.reviews_dashboard_route.cljs$lang$maxFixedArity = (0);

reagent_forms.routes.reviews_dashboard_route.cljs$lang$applyTo = ((function (action__47254__auto___47407){
return (function (seq47406){
return reagent_forms.routes.reviews_dashboard_route.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47406));
});})(action__47254__auto___47407))
;

var action__47254__auto___47417 = (function (params__47255__auto__){
if(cljs.core.map_QMARK_.call(null,params__47255__auto__)){
var map__47411 = params__47255__auto__;
var map__47411__$1 = ((((!((map__47411 == null)))?((((map__47411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47411.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47411):map__47411);
var application = cljs.core.get.call(null,map__47411__$1,new cljs.core.Keyword(null,"application","application",551185447));
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"application","application",551185447),parseInt(application));

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"review","review",1101692435));
} else {
if(cljs.core.vector_QMARK_.call(null,params__47255__auto__)){
var vec__47413 = params__47255__auto__;
var application = cljs.core.nth.call(null,vec__47413,(0),null);
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"application","application",551185447),parseInt(application));

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"review","review",1101692435));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/review/:application",action__47254__auto___47417);

reagent_forms.routes.review_route = ((function (action__47254__auto___47417){
return (function reagent_forms$routes$review_route(var_args){
var args__44545__auto__ = [];
var len__44538__auto___47418 = arguments.length;
var i__44539__auto___47419 = (0);
while(true){
if((i__44539__auto___47419 < len__44538__auto___47418)){
args__44545__auto__.push((arguments[i__44539__auto___47419]));

var G__47420 = (i__44539__auto___47419 + (1));
i__44539__auto___47419 = G__47420;
continue;
} else {
}
break;
}

var argseq__44546__auto__ = ((((0) < args__44545__auto__.length))?(new cljs.core.IndexedSeq(args__44545__auto__.slice((0)),(0),null)):null);
return reagent_forms.routes.review_route.cljs$core$IFn$_invoke$arity$variadic(argseq__44546__auto__);
});})(action__47254__auto___47417))
;

reagent_forms.routes.review_route.cljs$core$IFn$_invoke$arity$variadic = ((function (action__47254__auto___47417){
return (function (args__47253__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/review/:application",args__47253__auto__);
});})(action__47254__auto___47417))
;

reagent_forms.routes.review_route.cljs$lang$maxFixedArity = (0);

reagent_forms.routes.review_route.cljs$lang$applyTo = ((function (action__47254__auto___47417){
return (function (seq47416){
return reagent_forms.routes.review_route.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47416));
});})(action__47254__auto___47417))
;

var action__47254__auto___47427 = (function (params__47255__auto__){
if(cljs.core.map_QMARK_.call(null,params__47255__auto__)){
var map__47421 = params__47255__auto__;
var map__47421__$1 = ((((!((map__47421 == null)))?((((map__47421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47421.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47421):map__47421);
var application = cljs.core.get.call(null,map__47421__$1,new cljs.core.Keyword(null,"application","application",551185447));
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"application","application",551185447),parseInt(application));

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"update","update",1045576396));
} else {
if(cljs.core.vector_QMARK_.call(null,params__47255__auto__)){
var vec__47423 = params__47255__auto__;
var application = cljs.core.nth.call(null,vec__47423,(0),null);
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"application","application",551185447),parseInt(application));

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"update","update",1045576396));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/application/edit/:application",action__47254__auto___47427);

reagent_forms.routes.edit_route = ((function (action__47254__auto___47427){
return (function reagent_forms$routes$edit_route(var_args){
var args__44545__auto__ = [];
var len__44538__auto___47428 = arguments.length;
var i__44539__auto___47429 = (0);
while(true){
if((i__44539__auto___47429 < len__44538__auto___47428)){
args__44545__auto__.push((arguments[i__44539__auto___47429]));

var G__47430 = (i__44539__auto___47429 + (1));
i__44539__auto___47429 = G__47430;
continue;
} else {
}
break;
}

var argseq__44546__auto__ = ((((0) < args__44545__auto__.length))?(new cljs.core.IndexedSeq(args__44545__auto__.slice((0)),(0),null)):null);
return reagent_forms.routes.edit_route.cljs$core$IFn$_invoke$arity$variadic(argseq__44546__auto__);
});})(action__47254__auto___47427))
;

reagent_forms.routes.edit_route.cljs$core$IFn$_invoke$arity$variadic = ((function (action__47254__auto___47427){
return (function (args__47253__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/application/edit/:application",args__47253__auto__);
});})(action__47254__auto___47427))
;

reagent_forms.routes.edit_route.cljs$lang$maxFixedArity = (0);

reagent_forms.routes.edit_route.cljs$lang$applyTo = ((function (action__47254__auto___47427){
return (function (seq47426){
return reagent_forms.routes.edit_route.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47426));
});})(action__47254__auto___47427))
;

var action__47254__auto___47437 = (function (params__47255__auto__){
if(cljs.core.map_QMARK_.call(null,params__47255__auto__)){
var map__47431 = params__47255__auto__;
var map__47431__$1 = ((((!((map__47431 == null)))?((((map__47431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47431.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47431):map__47431);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
if(cljs.core.vector_QMARK_.call(null,params__47255__auto__)){
var vec__47433 = params__47255__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__47254__auto___47437);

reagent_forms.routes.about_route = ((function (action__47254__auto___47437){
return (function reagent_forms$routes$about_route(var_args){
var args__44545__auto__ = [];
var len__44538__auto___47438 = arguments.length;
var i__44539__auto___47439 = (0);
while(true){
if((i__44539__auto___47439 < len__44538__auto___47438)){
args__44545__auto__.push((arguments[i__44539__auto___47439]));

var G__47440 = (i__44539__auto___47439 + (1));
i__44539__auto___47439 = G__47440;
continue;
} else {
}
break;
}

var argseq__44546__auto__ = ((((0) < args__44545__auto__.length))?(new cljs.core.IndexedSeq(args__44545__auto__.slice((0)),(0),null)):null);
return reagent_forms.routes.about_route.cljs$core$IFn$_invoke$arity$variadic(argseq__44546__auto__);
});})(action__47254__auto___47437))
;

reagent_forms.routes.about_route.cljs$core$IFn$_invoke$arity$variadic = ((function (action__47254__auto___47437){
return (function (args__47253__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/about",args__47253__auto__);
});})(action__47254__auto___47437))
;

reagent_forms.routes.about_route.cljs$lang$maxFixedArity = (0);

reagent_forms.routes.about_route.cljs$lang$applyTo = ((function (action__47254__auto___47437){
return (function (seq47436){
return reagent_forms.routes.about_route.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47436));
});})(action__47254__auto___47437))
;

var action__47254__auto___47447 = (function (params__47255__auto__){
if(cljs.core.map_QMARK_.call(null,params__47255__auto__)){
var map__47441 = params__47255__auto__;
var map__47441__$1 = ((((!((map__47441 == null)))?((((map__47441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47441.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47441):map__47441);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"contact","contact",609093372));
} else {
if(cljs.core.vector_QMARK_.call(null,params__47255__auto__)){
var vec__47443 = params__47255__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"contact","contact",609093372));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/contact",action__47254__auto___47447);

reagent_forms.routes.contact_route = ((function (action__47254__auto___47447){
return (function reagent_forms$routes$contact_route(var_args){
var args__44545__auto__ = [];
var len__44538__auto___47448 = arguments.length;
var i__44539__auto___47449 = (0);
while(true){
if((i__44539__auto___47449 < len__44538__auto___47448)){
args__44545__auto__.push((arguments[i__44539__auto___47449]));

var G__47450 = (i__44539__auto___47449 + (1));
i__44539__auto___47449 = G__47450;
continue;
} else {
}
break;
}

var argseq__44546__auto__ = ((((0) < args__44545__auto__.length))?(new cljs.core.IndexedSeq(args__44545__auto__.slice((0)),(0),null)):null);
return reagent_forms.routes.contact_route.cljs$core$IFn$_invoke$arity$variadic(argseq__44546__auto__);
});})(action__47254__auto___47447))
;

reagent_forms.routes.contact_route.cljs$core$IFn$_invoke$arity$variadic = ((function (action__47254__auto___47447){
return (function (args__47253__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/contact",args__47253__auto__);
});})(action__47254__auto___47447))
;

reagent_forms.routes.contact_route.cljs$lang$maxFixedArity = (0);

reagent_forms.routes.contact_route.cljs$lang$applyTo = ((function (action__47254__auto___47447){
return (function (seq47446){
return reagent_forms.routes.contact_route.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47446));
});})(action__47254__auto___47447))
;

accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
return secretary.core.dispatch_BANG_.call(null,path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return secretary.core.locate_route.call(null,path);
})], null));
accountant.core.dispatch_current_BANG_.call(null);

//# sourceMappingURL=routes.js.map

// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent_forms.reviews');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('reagent_forms.routes');
goog.require('reagent_forms.shared');
goog.require('reagent_forms.shared.auth');
goog.require('ajax.core');
reagent_forms.reviews.APPLICATIONS = reagent.core.atom.call(null,null);
reagent_forms.reviews.test_request = (function reagent_forms$reviews$test_request(){
var methods$ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.GET,ajax.core.POST], null);
var url = "/admin/test";
var pmap = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (methods$,url){
return (function (r){
return cljs.core.println.call(null,r);
});})(methods$,url))
,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1532431356),reagent_forms.shared.auth.get_user_id.call(null),new cljs.core.Keyword(null,"bogus","bogus",637345996),"Hi there!"], null)], null);
var seq__48172 = cljs.core.seq.call(null,methods$);
var chunk__48173 = null;
var count__48174 = (0);
var i__48175 = (0);
while(true){
if((i__48175 < count__48174)){
var m = cljs.core._nth.call(null,chunk__48173,i__48175);
m.call(null,url,pmap);

var G__48176 = seq__48172;
var G__48177 = chunk__48173;
var G__48178 = count__48174;
var G__48179 = (i__48175 + (1));
seq__48172 = G__48176;
chunk__48173 = G__48177;
count__48174 = G__48178;
i__48175 = G__48179;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__48172);
if(temp__5278__auto__){
var seq__48172__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48172__$1)){
var c__44192__auto__ = cljs.core.chunk_first.call(null,seq__48172__$1);
var G__48180 = cljs.core.chunk_rest.call(null,seq__48172__$1);
var G__48181 = c__44192__auto__;
var G__48182 = cljs.core.count.call(null,c__44192__auto__);
var G__48183 = (0);
seq__48172 = G__48180;
chunk__48173 = G__48181;
count__48174 = G__48182;
i__48175 = G__48183;
continue;
} else {
var m = cljs.core.first.call(null,seq__48172__$1);
m.call(null,url,pmap);

var G__48184 = cljs.core.next.call(null,seq__48172__$1);
var G__48185 = null;
var G__48186 = (0);
var G__48187 = (0);
seq__48172 = G__48184;
chunk__48173 = G__48185;
count__48174 = G__48186;
i__48175 = G__48187;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Query the server with the appropriate credentials and retrieve the applications awaiting user's approval
 */
reagent_forms.reviews.get_applications = (function reagent_forms$reviews$get_applications(){
var method = ajax.core.GET;
var url = "/admin/applications";
var pmap = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (method,url){
return (function (r){
return cljs.core.reset_BANG_.call(null,reagent_forms.reviews.APPLICATIONS,cljs.core.first.call(null,r));
});})(method,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (method,url){
return (function (e){
console.log("-------ERROR getting applications!");

return console.log(e);
});})(method,url))
,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),reagent_forms.shared.auth.get_user_id.call(null)], null)], null);
return method.call(null,url,pmap);
});
reagent_forms.reviews.parse_applications = (function reagent_forms$reviews$parse_applications(applications){
var columns = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Title",(function (row){
return cljs.core.get_in.call(null,row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"program-title","program-title",831071632)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Applicant",(function (row){
return new cljs.core.Keyword(null,"preferred-name","preferred-name",16446050).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"applicant","applicant",-1694092490).cljs$core$IFn$_invoke$arity$1(row));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Date Proposed",(function (row){
return reagent_forms.shared.format_date.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(row));
})], null)], null);
if(cljs.core.empty_QMARK_.call(null,applications)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.no-applications","div.no-applications",842822273),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"You have no applications pending review."], null)], null);
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.applications.table.table-striped.table-bordered.table-hover","table.applications.table.table-striped.table-bordered.table-hover",-2054359456),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__44143__auto__ = ((function (columns){
return (function reagent_forms$reviews$parse_applications_$_iter__48189(s__48190){
return (new cljs.core.LazySeq(null,((function (columns){
return (function (){
var s__48190__$1 = s__48190;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__48190__$1);
if(temp__5278__auto__){
var s__48190__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48190__$2)){
var c__44141__auto__ = cljs.core.chunk_first.call(null,s__48190__$2);
var size__44142__auto__ = cljs.core.count.call(null,c__44141__auto__);
var b__48192 = cljs.core.chunk_buffer.call(null,size__44142__auto__);
if((function (){var i__48191 = (0);
while(true){
if((i__48191 < size__44142__auto__)){
var vec__48193 = cljs.core._nth.call(null,c__44141__auto__,i__48191);
var label = cljs.core.nth.call(null,vec__48193,(0),null);
var _ = cljs.core.nth.call(null,vec__48193,(1),null);
cljs.core.chunk_append.call(null,b__48192,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),label], null));

var G__48223 = (i__48191 + (1));
i__48191 = G__48223;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48192),reagent_forms$reviews$parse_applications_$_iter__48189.call(null,cljs.core.chunk_rest.call(null,s__48190__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48192),null);
}
} else {
var vec__48196 = cljs.core.first.call(null,s__48190__$2);
var label = cljs.core.nth.call(null,vec__48196,(0),null);
var _ = cljs.core.nth.call(null,vec__48196,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),label], null),reagent_forms$reviews$parse_applications_$_iter__48189.call(null,cljs.core.rest.call(null,s__48190__$2)));
}
} else {
return null;
}
break;
}
});})(columns))
,null,null));
});})(columns))
;
return iter__44143__auto__.call(null,columns);
})()),cljs.core.map.call(null,((function (columns){
return (function (p1__48188_SHARP_){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),p1__48188_SHARP_);
});})(columns))
,(function (){var iter__44143__auto__ = ((function (columns){
return (function reagent_forms$reviews$parse_applications_$_iter__48199(s__48200){
return (new cljs.core.LazySeq(null,((function (columns){
return (function (){
var s__48200__$1 = s__48200;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__48200__$1);
if(temp__5278__auto__){
var s__48200__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48200__$2)){
var c__44141__auto__ = cljs.core.chunk_first.call(null,s__48200__$2);
var size__44142__auto__ = cljs.core.count.call(null,c__44141__auto__);
var b__48202 = cljs.core.chunk_buffer.call(null,size__44142__auto__);
if((function (){var i__48201 = (0);
while(true){
if((i__48201 < size__44142__auto__)){
var a = cljs.core._nth.call(null,c__44141__auto__,i__48201);
cljs.core.chunk_append.call(null,b__48202,(function (){var app_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(a);
var iter__44143__auto__ = ((function (i__48201,app_id,a,c__44141__auto__,size__44142__auto__,b__48202,s__48200__$2,temp__5278__auto__,columns){
return (function reagent_forms$reviews$parse_applications_$_iter__48199_$_iter__48203(s__48204){
return (new cljs.core.LazySeq(null,((function (i__48201,app_id,a,c__44141__auto__,size__44142__auto__,b__48202,s__48200__$2,temp__5278__auto__,columns){
return (function (){
var s__48204__$1 = s__48204;
while(true){
var temp__5278__auto____$1 = cljs.core.seq.call(null,s__48204__$1);
if(temp__5278__auto____$1){
var s__48204__$2 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48204__$2)){
var c__44141__auto____$1 = cljs.core.chunk_first.call(null,s__48204__$2);
var size__44142__auto____$1 = cljs.core.count.call(null,c__44141__auto____$1);
var b__48206 = cljs.core.chunk_buffer.call(null,size__44142__auto____$1);
if((function (){var i__48205 = (0);
while(true){
if((i__48205 < size__44142__auto____$1)){
var vec__48207 = cljs.core._nth.call(null,c__44141__auto____$1,i__48205);
var _ = cljs.core.nth.call(null,vec__48207,(0),null);
var valfun = cljs.core.nth.call(null,vec__48207,(1),null);
cljs.core.chunk_append.call(null,b__48206,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reagent_forms.routes.review_route.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"application","application",551185447),app_id], null))], null),valfun.call(null,a)], null)], null));

var G__48224 = (i__48205 + (1));
i__48205 = G__48224;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48206),reagent_forms$reviews$parse_applications_$_iter__48199_$_iter__48203.call(null,cljs.core.chunk_rest.call(null,s__48204__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48206),null);
}
} else {
var vec__48210 = cljs.core.first.call(null,s__48204__$2);
var _ = cljs.core.nth.call(null,vec__48210,(0),null);
var valfun = cljs.core.nth.call(null,vec__48210,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reagent_forms.routes.review_route.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"application","application",551185447),app_id], null))], null),valfun.call(null,a)], null)], null),reagent_forms$reviews$parse_applications_$_iter__48199_$_iter__48203.call(null,cljs.core.rest.call(null,s__48204__$2)));
}
} else {
return null;
}
break;
}
});})(i__48201,app_id,a,c__44141__auto__,size__44142__auto__,b__48202,s__48200__$2,temp__5278__auto__,columns))
,null,null));
});})(i__48201,app_id,a,c__44141__auto__,size__44142__auto__,b__48202,s__48200__$2,temp__5278__auto__,columns))
;
return iter__44143__auto__.call(null,columns);
})());

var G__48225 = (i__48201 + (1));
i__48201 = G__48225;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48202),reagent_forms$reviews$parse_applications_$_iter__48199.call(null,cljs.core.chunk_rest.call(null,s__48200__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48202),null);
}
} else {
var a = cljs.core.first.call(null,s__48200__$2);
return cljs.core.cons.call(null,(function (){var app_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(a);
var iter__44143__auto__ = ((function (app_id,a,s__48200__$2,temp__5278__auto__,columns){
return (function reagent_forms$reviews$parse_applications_$_iter__48199_$_iter__48213(s__48214){
return (new cljs.core.LazySeq(null,((function (app_id,a,s__48200__$2,temp__5278__auto__,columns){
return (function (){
var s__48214__$1 = s__48214;
while(true){
var temp__5278__auto____$1 = cljs.core.seq.call(null,s__48214__$1);
if(temp__5278__auto____$1){
var s__48214__$2 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48214__$2)){
var c__44141__auto__ = cljs.core.chunk_first.call(null,s__48214__$2);
var size__44142__auto__ = cljs.core.count.call(null,c__44141__auto__);
var b__48216 = cljs.core.chunk_buffer.call(null,size__44142__auto__);
if((function (){var i__48215 = (0);
while(true){
if((i__48215 < size__44142__auto__)){
var vec__48217 = cljs.core._nth.call(null,c__44141__auto__,i__48215);
var _ = cljs.core.nth.call(null,vec__48217,(0),null);
var valfun = cljs.core.nth.call(null,vec__48217,(1),null);
cljs.core.chunk_append.call(null,b__48216,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reagent_forms.routes.review_route.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"application","application",551185447),app_id], null))], null),valfun.call(null,a)], null)], null));

var G__48226 = (i__48215 + (1));
i__48215 = G__48226;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48216),reagent_forms$reviews$parse_applications_$_iter__48199_$_iter__48213.call(null,cljs.core.chunk_rest.call(null,s__48214__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48216),null);
}
} else {
var vec__48220 = cljs.core.first.call(null,s__48214__$2);
var _ = cljs.core.nth.call(null,vec__48220,(0),null);
var valfun = cljs.core.nth.call(null,vec__48220,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reagent_forms.routes.review_route.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"application","application",551185447),app_id], null))], null),valfun.call(null,a)], null)], null),reagent_forms$reviews$parse_applications_$_iter__48199_$_iter__48213.call(null,cljs.core.rest.call(null,s__48214__$2)));
}
} else {
return null;
}
break;
}
});})(app_id,a,s__48200__$2,temp__5278__auto__,columns))
,null,null));
});})(app_id,a,s__48200__$2,temp__5278__auto__,columns))
;
return iter__44143__auto__.call(null,columns);
})(),reagent_forms$reviews$parse_applications_$_iter__48199.call(null,cljs.core.rest.call(null,s__48200__$2)));
}
} else {
return null;
}
break;
}
});})(columns))
,null,null));
});})(columns))
;
return iter__44143__auto__.call(null,applications);
})())], null)], null));
}
});
reagent_forms.reviews.maybe_init = (function reagent_forms$reviews$maybe_init(var_args){
var args__44545__auto__ = [];
var len__44538__auto___48232 = arguments.length;
var i__44539__auto___48233 = (0);
while(true){
if((i__44539__auto___48233 < len__44538__auto___48232)){
args__44545__auto__.push((arguments[i__44539__auto___48233]));

var G__48234 = (i__44539__auto___48233 + (1));
i__44539__auto___48233 = G__48234;
continue;
} else {
}
break;
}

var argseq__44546__auto__ = ((((0) < args__44545__auto__.length))?(new cljs.core.IndexedSeq(args__44545__auto__.slice((0)),(0),null)):null);
return reagent_forms.reviews.maybe_init.cljs$core$IFn$_invoke$arity$variadic(argseq__44546__auto__);
});

reagent_forms.reviews.maybe_init.cljs$core$IFn$_invoke$arity$variadic = (function (p__48228){
var vec__48229 = p__48228;
var force_QMARK_ = cljs.core.nth.call(null,vec__48229,(0),null);
if(cljs.core.truth_((function (){var or__43261__auto__ = force_QMARK_;
if(cljs.core.truth_(or__43261__auto__)){
return or__43261__auto__;
} else {
var and__43249__auto__ = reagent_forms.shared.auth.signed_in_QMARK_.call(null);
if(cljs.core.truth_(and__43249__auto__)){
return (cljs.core.deref.call(null,reagent_forms.reviews.APPLICATIONS) == null);
} else {
return and__43249__auto__;
}
}
})())){
return reagent_forms.reviews.get_applications.call(null);
} else {
return null;
}
});

reagent_forms.reviews.maybe_init.cljs$lang$maxFixedArity = (0);

reagent_forms.reviews.maybe_init.cljs$lang$applyTo = (function (seq48227){
return reagent_forms.reviews.maybe_init.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48227));
});

/**
 * Show all reviews that can be viewed by USER right now.
 */
reagent_forms.reviews.reviews_dashboard = (function reagent_forms$reviews$reviews_dashboard(){
var _STAR_init = reagent_forms.reviews.maybe_init.call(null);
return reagent_forms.shared.page_template.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jumbo-title","jumbo-title",-968162395),"Applications for Awaiting Your Review",new cljs.core.Keyword(null,"contents","contents",-1567174023),reagent_forms.reviews.parse_applications.call(null,new cljs.core.Keyword(null,"reviews","reviews",-315606921).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reagent_forms.reviews.APPLICATIONS)))], null));
});

//# sourceMappingURL=reviews.js.map

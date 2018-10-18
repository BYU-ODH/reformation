// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent_forms.shared');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('clojure.string');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('ajax.core');
goog.require('accountant.core');
goog.require('goog.ui.Tooltip');
reagent_forms.shared.COURSES_ID = "course-details";
reagent_forms.shared.CONTEXT = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(context)].join('');
if(typeof reagent_forms.shared.text_size !== 'undefined'){
} else {
reagent_forms.shared.text_size = (25);
}
reagent_forms.shared.ROWS = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
reagent_forms.shared._STAR_INSTITUTIONS_STAR_ = reagent.core.atom.call(null,null);
reagent_forms.shared._STAR_LANGUAGES_STAR_ = reagent.core.atom.call(null,null);
reagent_forms.shared.go_to = (function reagent_forms$shared$go_to(var_args){
var args__44545__auto__ = [];
var len__44538__auto___48020 = arguments.length;
var i__44539__auto___48021 = (0);
while(true){
if((i__44539__auto___48021 < len__44538__auto___48020)){
args__44545__auto__.push((arguments[i__44539__auto___48021]));

var G__48022 = (i__44539__auto___48021 + (1));
i__44539__auto___48021 = G__48022;
continue;
} else {
}
break;
}

var argseq__44546__auto__ = ((((1) < args__44545__auto__.length))?(new cljs.core.IndexedSeq(args__44545__auto__.slice((1)),(0),null)):null);
return reagent_forms.shared.go_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44546__auto__);
});

reagent_forms.shared.go_to.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__48016){
var vec__48017 = p__48016;
var query = cljs.core.nth.call(null,vec__48017,(0),null);
return accountant.core.navigate_BANG_.call(null,url,query);
});

reagent_forms.shared.go_to.cljs$lang$maxFixedArity = (1);

reagent_forms.shared.go_to.cljs$lang$applyTo = (function (seq48014){
var G__48015 = cljs.core.first.call(null,seq48014);
var seq48014__$1 = cljs.core.next.call(null,seq48014);
return reagent_forms.shared.go_to.cljs$core$IFn$_invoke$arity$variadic(G__48015,seq48014__$1);
});

reagent_forms.shared.go_to_internal = (function reagent_forms$shared$go_to_internal(pagekey){
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),pagekey);
});
reagent_forms.shared.get_set = (function reagent_forms$shared$get_set(var_args){
var G__48024 = arguments.length;
switch (G__48024) {
case 2:
return reagent_forms.shared.get_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent_forms.shared.get_set.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent_forms.shared.get_set.cljs$core$IFn$_invoke$arity$2 = (function (m,path){
return cljs.core.get_in.call(null,m,path);
});

reagent_forms.shared.get_set.cljs$core$IFn$_invoke$arity$3 = (function (m,path,val){
return cljs.core.assoc_in.call(null,m,path,val);
});

reagent_forms.shared.get_set.cljs$lang$maxFixedArity = 3;

reagent_forms.shared.get_value_by_id = (function reagent_forms$shared$get_value_by_id(id){
return document.getElementById(id).value;
});
reagent_forms.shared.cx = (function reagent_forms$shared$cx(var_args){
var args__44545__auto__ = [];
var len__44538__auto___48027 = arguments.length;
var i__44539__auto___48028 = (0);
while(true){
if((i__44539__auto___48028 < len__44538__auto___48027)){
args__44545__auto__.push((arguments[i__44539__auto___48028]));

var G__48029 = (i__44539__auto___48028 + (1));
i__44539__auto___48028 = G__48029;
continue;
} else {
}
break;
}

var argseq__44546__auto__ = ((((0) < args__44545__auto__.length))?(new cljs.core.IndexedSeq(args__44545__auto__.slice((0)),(0),null)):null);
return reagent_forms.shared.cx.cljs$core$IFn$_invoke$arity$variadic(argseq__44546__auto__);
});

reagent_forms.shared.cx.cljs$core$IFn$_invoke$arity$variadic = (function (s){
var CONTEXT = (((!(cljs.core.empty_QMARK_.call(null,s))) && (!(cljs.core.empty_QMARK_.call(null,reagent_forms.shared.CONTEXT))) && (!(cljs.core._EQ_.call(null,"/",cljs.core.last.call(null,reagent_forms.shared.CONTEXT)))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent_forms.shared.CONTEXT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join(''):reagent_forms.shared.CONTEXT);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(CONTEXT),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,s))].join('');
});

reagent_forms.shared.cx.cljs$lang$maxFixedArity = (0);

reagent_forms.shared.cx.cljs$lang$applyTo = (function (seq48026){
return reagent_forms.shared.cx.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48026));
});

reagent_forms.shared.page_template = (function reagent_forms$shared$page_template(page_map){
var map__48030 = page_map;
var map__48030__$1 = ((((!((map__48030 == null)))?((((map__48030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48030.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48030):map__48030);
var page_class = cljs.core.get.call(null,map__48030__$1,new cljs.core.Keyword(null,"page-class","page-class",1129108560));
var jumbo_title = cljs.core.get.call(null,map__48030__$1,new cljs.core.Keyword(null,"jumbo-title","jumbo-title",-968162395));
var jumbo_subtitle = cljs.core.get.call(null,map__48030__$1,new cljs.core.Keyword(null,"jumbo-subtitle","jumbo-subtitle",2022994683));
var jumbo_contents = cljs.core.get.call(null,map__48030__$1,new cljs.core.Keyword(null,"jumbo-contents","jumbo-contents",-958819972));
var contents = cljs.core.get.call(null,map__48030__$1,new cljs.core.Keyword(null,"contents","contents",-1567174023));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),page_class], null),(cljs.core.truth_(jumbo_title)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jumbotron","div.jumbotron",-1632448673),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),jumbo_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),(function (){var temp__5278__auto__ = jumbo_subtitle;
if(cljs.core.truth_(temp__5278__auto__)){
var jt = temp__5278__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),jt], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),jumbo_contents], null)], null)], null)], null):null),(cljs.core.truth_(contents)?contents:null)], null);
});
reagent_forms.shared.idify = (function reagent_forms$shared$idify(s){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.lower_case.call(null,s),/ /,"-"),/[^0-9 \- a-z]/,"");
});
reagent_forms.shared.assoc_map_in_vector = (function reagent_forms$shared$assoc_map_in_vector(vm,vi,mpath,mvalue){
var new_m = cljs.core.get.call(null,vm,vi);
return cljs.core.assoc.call(null,vm,vi,cljs.core.assoc_in.call(null,new_m,mpath,mvalue));
});
reagent_forms.shared.get_value_from_change = (function reagent_forms$shared$get_value_from_change(e){
return e.target.value;
});
/**
 * Produce a read-only label/value pair
 */
reagent_forms.shared.read_text = (function reagent_forms$shared$read_text(var_args){
var args__44545__auto__ = [];
var len__44538__auto___48039 = arguments.length;
var i__44539__auto___48040 = (0);
while(true){
if((i__44539__auto___48040 < len__44538__auto___48039)){
args__44545__auto__.push((arguments[i__44539__auto___48040]));

var G__48041 = (i__44539__auto___48040 + (1));
i__44539__auto___48040 = G__48041;
continue;
} else {
}
break;
}

var argseq__44546__auto__ = ((((2) < args__44545__auto__.length))?(new cljs.core.IndexedSeq(args__44545__auto__.slice((2)),(0),null)):null);
return reagent_forms.shared.read_text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__44546__auto__);
});

reagent_forms.shared.read_text.cljs$core$IFn$_invoke$arity$variadic = (function (label,val,p__48035){
var vec__48036 = p__48035;
var argmap = cljs.core.nth.call(null,vec__48036,(0),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-class","row-class",-1782148593).cljs$core$IFn$_invoke$arity$1(argmap),((cljs.core.empty_QMARK_.call(null,val))?"no-val":null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label.col","span.label.col",-165691555),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.val.col","span.val.col",-1901664559),((cljs.core.empty_QMARK_.call(null,val))?"Not Given":val)], null)], null);
});

reagent_forms.shared.read_text.cljs$lang$maxFixedArity = (2);

reagent_forms.shared.read_text.cljs$lang$applyTo = (function (seq48032){
var G__48033 = cljs.core.first.call(null,seq48032);
var seq48032__$1 = cljs.core.next.call(null,seq48032);
var G__48034 = cljs.core.first.call(null,seq48032__$1);
var seq48032__$2 = cljs.core.next.call(null,seq48032__$1);
return reagent_forms.shared.read_text.cljs$core$IFn$_invoke$arity$variadic(G__48033,G__48034,seq48032__$2);
});

reagent_forms.shared.format_email = (function reagent_forms$shared$format_email(s){
return clojure.string.replace.call(null,s,/%40/,"@");
});
reagent_forms.shared.custom_formatter = cljs_time.format.formatter.call(null,"YYYY-MM-dd hh:mm a");
reagent_forms.shared.format_date = (function reagent_forms$shared$format_date(d){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse.call(null,reagent_forms.shared.custom_formatter,cljs_time.core.from_default_time_zone.call(null,cljs_time.core.date_time.call(null,d))))].join('');
});
reagent_forms.shared.attach_popover = (function reagent_forms$shared$attach_popover(el,s){
return (new goog.ui.Tooltip(el,s));
});
/**
 * Determine whether an atom of a map with string values has all string values empty
 */
reagent_forms.shared.uninitialized_map_atom_QMARK_ = (function reagent_forms$shared$uninitialized_map_atom_QMARK_(map_atom){
if(cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,map_atom))){
return cljs.core.every_QMARK_.call(null,cljs.core.comp.call(null,cljs.core.empty_QMARK_,cljs.core.second),cljs.core.deref.call(null,map_atom));
} else {
throw cljs.core.ex_info.call(null,"Invalid map-atom provided",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map-atom","map-atom",285371387),map_atom], null));
}
});
/**
 * Query the server with the appropriate credentials and retrieve the application, putting it in the provided `APPLICATION-ATOM`
 */
reagent_forms.shared.get_application = (function reagent_forms$shared$get_application(p__48042){
var map__48043 = p__48042;
var map__48043__$1 = ((((!((map__48043 == null)))?((((map__48043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48043.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48043):map__48043);
var user_map = cljs.core.get.call(null,map__48043__$1,new cljs.core.Keyword(null,"user-map","user-map",-1037585771));
var application_id = cljs.core.get.call(null,map__48043__$1,new cljs.core.Keyword(null,"application-id","application-id",859759713));
var receptacle_atom = cljs.core.get.call(null,map__48043__$1,new cljs.core.Keyword(null,"receptacle-atom","receptacle-atom",1224067121));
var filter_fn = cljs.core.get.call(null,map__48043__$1,new cljs.core.Keyword(null,"filter-fn","filter-fn",1689475675),cljs.core.identity);
var force_QMARK_ = cljs.core.get.call(null,map__48043__$1,new cljs.core.Keyword(null,"force?","force?",1839038675));
var url = ["/admin/application"].join('');
var get_application = ((function (url,map__48043,map__48043__$1,user_map,application_id,receptacle_atom,filter_fn,force_QMARK_){
return (function (){
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (url,map__48043,map__48043__$1,user_map,application_id,receptacle_atom,filter_fn,force_QMARK_){
return (function (r){
return cljs.core.reset_BANG_.call(null,receptacle_atom,filter_fn.call(null,cljs.core.first.call(null,r)));
});})(url,map__48043,map__48043__$1,user_map,application_id,receptacle_atom,filter_fn,force_QMARK_))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (url,map__48043,map__48043__$1,user_map,application_id,receptacle_atom,filter_fn,force_QMARK_){
return (function (e){
console.log("-------ERROR getting application!");

return console.log(e);
});})(url,map__48043,map__48043__$1,user_map,application_id,receptacle_atom,filter_fn,force_QMARK_))
,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1532431356),user_map,new cljs.core.Keyword(null,"application-id","application-id",859759713),application_id], null)], null));
});})(url,map__48043,map__48043__$1,user_map,application_id,receptacle_atom,filter_fn,force_QMARK_))
;
if(cljs.core.truth_((function (){var or__43261__auto__ = force_QMARK_;
if(cljs.core.truth_(or__43261__auto__)){
return or__43261__auto__;
} else {
return !(cljs.core._EQ_.call(null,application_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,receptacle_atom))));
}
})())){
get_application.call(null);
} else {
}

return cljs.core.deref.call(null,receptacle_atom);
});
reagent_forms.shared.array_map_QMARK_ = (function reagent_forms$shared$array_map_QMARK_(m){
return cljs.core._EQ_.call(null,cljs.core.type.call(null,m),cljs.core.PersistentArrayMap);
});
/**
 * Produce a map with the same key-structure but with empty values
 */
reagent_forms.shared.map_structure = (function reagent_forms$shared$map_structure(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__44143__auto__ = (function reagent_forms$shared$map_structure_$_iter__48045(s__48046){
return (new cljs.core.LazySeq(null,(function (){
var s__48046__$1 = s__48046;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__48046__$1);
if(temp__5278__auto__){
var s__48046__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48046__$2)){
var c__44141__auto__ = cljs.core.chunk_first.call(null,s__48046__$2);
var size__44142__auto__ = cljs.core.count.call(null,c__44141__auto__);
var b__48048 = cljs.core.chunk_buffer.call(null,size__44142__auto__);
if((function (){var i__48047 = (0);
while(true){
if((i__48047 < size__44142__auto__)){
var vec__48049 = cljs.core._nth.call(null,c__44141__auto__,i__48047);
var k = cljs.core.nth.call(null,vec__48049,(0),null);
var v = cljs.core.nth.call(null,vec__48049,(1),null);
var endv = ((cljs.core.vector_QMARK_.call(null,v))?new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$2(cljs.core.apply.call(null,cljs.core.hash_map,v),""):((cljs.core.map_QMARK_.call(null,v))?reagent_forms.shared.map_structure.call(null,v):""
));
cljs.core.chunk_append.call(null,b__48048,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$2(endv,endv)], null));

var G__48055 = (i__48047 + (1));
i__48047 = G__48055;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48048),reagent_forms$shared$map_structure_$_iter__48045.call(null,cljs.core.chunk_rest.call(null,s__48046__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48048),null);
}
} else {
var vec__48052 = cljs.core.first.call(null,s__48046__$2);
var k = cljs.core.nth.call(null,vec__48052,(0),null);
var v = cljs.core.nth.call(null,vec__48052,(1),null);
var endv = ((cljs.core.vector_QMARK_.call(null,v))?new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$2(cljs.core.apply.call(null,cljs.core.hash_map,v),""):((cljs.core.map_QMARK_.call(null,v))?reagent_forms.shared.map_structure.call(null,v):""
));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$2(endv,endv)], null),reagent_forms$shared$map_structure_$_iter__48045.call(null,cljs.core.rest.call(null,s__48046__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__44143__auto__.call(null,m);
})());
});
/**
 * Reset the given atom to a default state based on a default map, where it will possess each of the (possibly nested) structural elements of the given default, but values only according to an internal :default
 */
reagent_forms.shared.reset_default = (function reagent_forms$shared$reset_default(A,default_map){
if(cljs.core.truth_(cljs.core.reset_BANG_.call(null,A,reagent_forms.shared.map_structure.call(null,default_map)))){
return A;
} else {
return null;
}
});

//# sourceMappingURL=shared.js.map

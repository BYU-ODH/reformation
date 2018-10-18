// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent_forms.shared.components.input');
goog.require('cljs.core');
goog.require('reagent_forms.shared');
/**
 * Adjust a submission-default map for review rather than editing, adding lots of 
 */
reagent_forms.shared.components.input.reviewify = (function reagent_forms$shared$components$input$reviewify(given_default){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__44143__auto__ = (function reagent_forms$shared$components$input$reviewify_$_iter__48065(s__48066){
return (new cljs.core.LazySeq(null,(function (){
var s__48066__$1 = s__48066;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__48066__$1);
if(temp__5278__auto__){
var s__48066__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48066__$2)){
var c__44141__auto__ = cljs.core.chunk_first.call(null,s__48066__$2);
var size__44142__auto__ = cljs.core.count.call(null,c__44141__auto__);
var b__48068 = cljs.core.chunk_buffer.call(null,size__44142__auto__);
if((function (){var i__48067 = (0);
while(true){
if((i__48067 < size__44142__auto__)){
var vec__48069 = cljs.core._nth.call(null,c__44141__auto__,i__48067);
var k = cljs.core.nth.call(null,vec__48069,(0),null);
var v = cljs.core.nth.call(null,vec__48069,(1),null);
cljs.core.chunk_append.call(null,b__48068,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core.vector_QMARK_.call(null,v))?cljs.core.conj.call(null,v,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true):((cljs.core.map_QMARK_.call(null,v))?reagent_forms.shared.components.input.reviewify.call(null,v):null))], null));

var G__48075 = (i__48067 + (1));
i__48067 = G__48075;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48068),reagent_forms$shared$components$input$reviewify_$_iter__48065.call(null,cljs.core.chunk_rest.call(null,s__48066__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48068),null);
}
} else {
var vec__48072 = cljs.core.first.call(null,s__48066__$2);
var k = cljs.core.nth.call(null,vec__48072,(0),null);
var v = cljs.core.nth.call(null,vec__48072,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core.vector_QMARK_.call(null,v))?cljs.core.conj.call(null,v,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true):((cljs.core.map_QMARK_.call(null,v))?reagent_forms.shared.components.input.reviewify.call(null,v):null))], null),reagent_forms$shared$components$input$reviewify_$_iter__48065.call(null,cljs.core.rest.call(null,s__48066__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__44143__auto__.call(null,given_default);
})());
});
reagent_forms.shared.components.input.add_multi_table_row = (function reagent_forms$shared$components$input$add_multi_table_row(multitable_map,value_path,row_template){
return cljs.core.update_in.call(null,multitable_map,value_path,(function (x){
if((x == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_template], null);
} else {
return cljs.core.conj.call(null,x,row_template);
}
}));
});
reagent_forms.shared.components.input.delete_multi_table_row = (function reagent_forms$shared$components$input$delete_multi_table_row(multitable_map,value_path){
return cljs.core.update_in.call(null,multitable_map,value_path,cljs.core.comp.call(null,cljs.core.vec,cljs.core.butlast));
});
reagent_forms.shared.components.input.update_multi_table = (function reagent_forms$shared$components$input$update_multi_table(multi_table,table_row_num,column_key,value){
return cljs.core.assoc_in.call(null,multi_table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [table_row_num,column_key], null),value);
});
reagent_forms.shared.components.input.multi_table = (function reagent_forms$shared$components$input$multi_table(ATOM,m){
var map__48076 = m;
var map__48076__$1 = ((((!((map__48076 == null)))?((((map__48076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48076.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48076):map__48076);
var label = cljs.core.get.call(null,map__48076__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.call(null,map__48076__$1,new cljs.core.Keyword(null,"id","id",-1388402092),"generic-id");
var subtext = cljs.core.get.call(null,map__48076__$1,new cljs.core.Keyword(null,"subtext","subtext",1186196563),null);
var columns = cljs.core.get.call(null,map__48076__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var min_rows = cljs.core.get.call(null,map__48076__$1,new cljs.core.Keyword(null,"min-rows","min-rows",1428640765),(1));
var value_path = cljs.core.get.call(null,map__48076__$1,new cljs.core.Keyword(null,"value-path","value-path",-1429603818),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,id)], null));
var sum_field = cljs.core.get.call(null,map__48076__$1,new cljs.core.Keyword(null,"sum-field","sum-field",1075048853));
var disabled = cljs.core.get.call(null,map__48076__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var row_template = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__44143__auto__ = ((function (map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled){
return (function reagent_forms$shared$components$input$multi_table_$_iter__48078(s__48079){
return (new cljs.core.LazySeq(null,((function (map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled){
return (function (){
var s__48079__$1 = s__48079;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__48079__$1);
if(temp__5278__auto__){
var s__48079__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48079__$2)){
var c__44141__auto__ = cljs.core.chunk_first.call(null,s__48079__$2);
var size__44142__auto__ = cljs.core.count.call(null,c__44141__auto__);
var b__48081 = cljs.core.chunk_buffer.call(null,size__44142__auto__);
if((function (){var i__48080 = (0);
while(true){
if((i__48080 < size__44142__auto__)){
var c = cljs.core._nth.call(null,c__44141__auto__,i__48080);
cljs.core.chunk_append.call(null,b__48081,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.call(null,new cljs.core.Keyword(null,"key","key",-1516042587)),null], null));

var G__48124 = (i__48080 + (1));
i__48080 = G__48124;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48081),reagent_forms$shared$components$input$multi_table_$_iter__48078.call(null,cljs.core.chunk_rest.call(null,s__48079__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48081),null);
}
} else {
var c = cljs.core.first.call(null,s__48079__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.call(null,new cljs.core.Keyword(null,"key","key",-1516042587)),null], null),reagent_forms$shared$components$input$multi_table_$_iter__48078.call(null,cljs.core.rest.call(null,s__48079__$2)));
}
} else {
return null;
}
break;
}
});})(map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled))
,null,null));
});})(map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled))
;
return iter__44143__auto__.call(null,columns);
})());
var sub = (cljs.core.truth_(subtext)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.form-text.text-muted","small.form-text.text-muted",429284451),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),["sub_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),subtext], null):null);
var _init_table_BANG_ = (((cljs.core.count.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,ATOM),value_path)) < min_rows))?cljs.core.swap_BANG_.call(null,ATOM,reagent_forms.shared.components.input.add_multi_table_row,value_path,row_template):null);
var headers = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__44143__auto__ = ((function (map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_){
return (function reagent_forms$shared$components$input$multi_table_$_iter__48082(s__48083){
return (new cljs.core.LazySeq(null,((function (map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_){
return (function (){
var s__48083__$1 = s__48083;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__48083__$1);
if(temp__5278__auto__){
var s__48083__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48083__$2)){
var c__44141__auto__ = cljs.core.chunk_first.call(null,s__48083__$2);
var size__44142__auto__ = cljs.core.count.call(null,c__44141__auto__);
var b__48085 = cljs.core.chunk_buffer.call(null,size__44142__auto__);
if((function (){var i__48084 = (0);
while(true){
if((i__48084 < size__44142__auto__)){
var c = cljs.core._nth.call(null,c__44141__auto__,i__48084);
cljs.core.chunk_append.call(null,b__48085,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(c))?"disabled":null)], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(c)], null));

var G__48125 = (i__48084 + (1));
i__48084 = G__48125;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48085),reagent_forms$shared$components$input$multi_table_$_iter__48082.call(null,cljs.core.chunk_rest.call(null,s__48083__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48085),null);
}
} else {
var c = cljs.core.first.call(null,s__48083__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(c))?"disabled":null)], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(c)], null),reagent_forms$shared$components$input$multi_table_$_iter__48082.call(null,cljs.core.rest.call(null,s__48083__$2)));
}
} else {
return null;
}
break;
}
});})(map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_))
,null,null));
});})(map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_))
;
return iter__44143__auto__.call(null,columns);
})())], null);
var tbody_base = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var iter__44143__auto__ = ((function (map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers){
return (function reagent_forms$shared$components$input$multi_table_$_iter__48086(s__48087){
return (new cljs.core.LazySeq(null,((function (map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers){
return (function (){
var s__48087__$1 = s__48087;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__48087__$1);
if(temp__5278__auto__){
var s__48087__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48087__$2)){
var c__44141__auto__ = cljs.core.chunk_first.call(null,s__48087__$2);
var size__44142__auto__ = cljs.core.count.call(null,c__44141__auto__);
var b__48089 = cljs.core.chunk_buffer.call(null,size__44142__auto__);
if((function (){var i__48088 = (0);
while(true){
if((i__48088 < size__44142__auto__)){
var vec__48090 = cljs.core._nth.call(null,c__44141__auto__,i__48088);
var i = cljs.core.nth.call(null,vec__48090,(0),null);
var m__$1 = cljs.core.nth.call(null,vec__48090,(1),null);
cljs.core.chunk_append.call(null,b__48089,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__44143__auto__ = ((function (i__48088,vec__48090,i,m__$1,c__44141__auto__,size__44142__auto__,b__48089,s__48087__$2,temp__5278__auto__,map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers){
return (function reagent_forms$shared$components$input$multi_table_$_iter__48086_$_iter__48093(s__48094){
return (new cljs.core.LazySeq(null,((function (i__48088,vec__48090,i,m__$1,c__44141__auto__,size__44142__auto__,b__48089,s__48087__$2,temp__5278__auto__,map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers){
return (function (){
var s__48094__$1 = s__48094;
while(true){
var temp__5278__auto____$1 = cljs.core.seq.call(null,s__48094__$1);
if(temp__5278__auto____$1){
var s__48094__$2 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48094__$2)){
var c__44141__auto____$1 = cljs.core.chunk_first.call(null,s__48094__$2);
var size__44142__auto____$1 = cljs.core.count.call(null,c__44141__auto____$1);
var b__48096 = cljs.core.chunk_buffer.call(null,size__44142__auto____$1);
if((function (){var i__48095 = (0);
while(true){
if((i__48095 < size__44142__auto____$1)){
var c = cljs.core._nth.call(null,c__44141__auto____$1,i__48095);
cljs.core.chunk_append.call(null,b__48096,(function (){var nameval = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent_forms.shared.idify.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(c)))].join('');
var nameval_num = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(nameval),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('');
var if_checkbox = ((function (i__48095,i__48088,nameval,nameval_num,c,c__44141__auto____$1,size__44142__auto____$1,b__48096,s__48094__$2,temp__5278__auto____$1,vec__48090,i,m__$1,c__44141__auto__,size__44142__auto__,b__48089,s__48087__$2,temp__5278__auto__,map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers){
return (function() { 
var G__48126__delegate = function (v,p__48097){
var vec__48098 = p__48097;
var e = cljs.core.nth.call(null,vec__48098,(0),null);
if(cljs.core._EQ_.call(null,"checkbox",new cljs.core.Keyword(null,"input-type","input-type",856973840).cljs$core$IFn$_invoke$arity$1(c))){
return v;
} else {
return e;
}
};
var G__48126 = function (v,var_args){
var p__48097 = null;
if (arguments.length > 1) {
var G__48127__i = 0, G__48127__a = new Array(arguments.length -  1);
while (G__48127__i < G__48127__a.length) {G__48127__a[G__48127__i] = arguments[G__48127__i + 1]; ++G__48127__i;}
  p__48097 = new cljs.core.IndexedSeq(G__48127__a,0,null);
} 
return G__48126__delegate.call(this,v,p__48097);};
G__48126.cljs$lang$maxFixedArity = 1;
G__48126.cljs$lang$applyTo = (function (arglist__48128){
var v = cljs.core.first(arglist__48128);
var p__48097 = cljs.core.rest(arglist__48128);
return G__48126__delegate(v,p__48097);
});
G__48126.cljs$core$IFn$_invoke$arity$variadic = G__48126__delegate;
return G__48126;
})()
;})(i__48095,i__48088,nameval,nameval_num,c,c__44141__auto____$1,size__44142__auto____$1,b__48096,s__48094__$2,temp__5278__auto____$1,vec__48090,i,m__$1,c__44141__auto__,size__44142__auto__,b__48089,s__48087__$2,temp__5278__auto__,map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers))
;
var multi_value_path = cljs.core.conj.call(null,value_path,i,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(c));
var on_change_function = ((function (i__48095,i__48088,nameval,nameval_num,if_checkbox,multi_value_path,c,c__44141__auto____$1,size__44142__auto____$1,b__48096,s__48094__$2,temp__5278__auto____$1,vec__48090,i,m__$1,c__44141__auto__,size__44142__auto__,b__48089,s__48087__$2,temp__5278__auto__,map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers){
return (function (e){
return cljs.core.swap_BANG_.call(null,ATOM,cljs.core.assoc_in,multi_value_path,if_checkbox.call(null,e.target.checked,reagent_forms.shared.get_value_from_change.call(null,e)));
});})(i__48095,i__48088,nameval,nameval_num,if_checkbox,multi_value_path,c,c__44141__auto____$1,size__44142__auto____$1,b__48096,s__48094__$2,temp__5278__auto____$1,vec__48090,i,m__$1,c__44141__auto__,size__44142__auto__,b__48089,s__48087__$2,temp__5278__auto__,map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form-group",nameval,nameval_num,new cljs.core.Keyword(null,"input-type","input-type",856973840).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"column-class","column-class",-1162211104).cljs$core$IFn$_invoke$arity$1(c)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.custom-control.custom-checkbox","label.custom-control.custom-checkbox",2060881043),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,"textarea",new cljs.core.Keyword(null,"input-type","input-type",856973840).cljs$core$IFn$_invoke$arity$1(c)))?new cljs.core.Keyword(null,"textarea","textarea",-650375824):new cljs.core.Keyword(null,"input","input",556931961)),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__43261__auto__ = new cljs.core.Keyword(null,"input-type","input-type",856973840).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(or__43261__auto__)){
return or__43261__auto__;
} else {
return "text";
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-class","input-class",-62053138).cljs$core$IFn$_invoke$arity$1(c),if_checkbox.call(null,"custom-control-input"),(cljs.core.truth_(new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(c))?"disabled":null)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__43261__auto__ = new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(or__43261__auto__)){
return or__43261__auto__;
} else {
return disabled;
}
})(),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),c.call(null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083)),new cljs.core.Keyword(null,"default-value","default-value",232220170),c.call(null,new cljs.core.Keyword(null,"default-value","default-value",232220170)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change_function,new cljs.core.Keyword(null,"name","name",1843675177),nameval,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,cljs.core.deref.call(null,ATOM),multi_value_path)], null)], null),if_checkbox.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.custom-control-indicator","span.custom-control-indicator",-1187066743)], null))], null)], null);
})());

var G__48129 = (i__48095 + (1));
i__48095 = G__48129;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48096),reagent_forms$shared$components$input$multi_table_$_iter__48086_$_iter__48093.call(null,cljs.core.chunk_rest.call(null,s__48094__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48096),null);
}
} else {
var c = cljs.core.first.call(null,s__48094__$2);
return cljs.core.cons.call(null,(function (){var nameval = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent_forms.shared.idify.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(c)))].join('');
var nameval_num = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(nameval),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('');
var if_checkbox = ((function (i__48088,nameval,nameval_num,c,s__48094__$2,temp__5278__auto____$1,vec__48090,i,m__$1,c__44141__auto__,size__44142__auto__,b__48089,s__48087__$2,temp__5278__auto__,map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers){
return (function() { 
var G__48130__delegate = function (v,p__48101){
var vec__48102 = p__48101;
var e = cljs.core.nth.call(null,vec__48102,(0),null);
if(cljs.core._EQ_.call(null,"checkbox",new cljs.core.Keyword(null,"input-type","input-type",856973840).cljs$core$IFn$_invoke$arity$1(c))){
return v;
} else {
return e;
}
};
var G__48130 = function (v,var_args){
var p__48101 = null;
if (arguments.length > 1) {
var G__48131__i = 0, G__48131__a = new Array(arguments.length -  1);
while (G__48131__i < G__48131__a.length) {G__48131__a[G__48131__i] = arguments[G__48131__i + 1]; ++G__48131__i;}
  p__48101 = new cljs.core.IndexedSeq(G__48131__a,0,null);
} 
return G__48130__delegate.call(this,v,p__48101);};
G__48130.cljs$lang$maxFixedArity = 1;
G__48130.cljs$lang$applyTo = (function (arglist__48132){
var v = cljs.core.first(arglist__48132);
var p__48101 = cljs.core.rest(arglist__48132);
return G__48130__delegate(v,p__48101);
});
G__48130.cljs$core$IFn$_invoke$arity$variadic = G__48130__delegate;
return G__48130;
})()
;})(i__48088,nameval,nameval_num,c,s__48094__$2,temp__5278__auto____$1,vec__48090,i,m__$1,c__44141__auto__,size__44142__auto__,b__48089,s__48087__$2,temp__5278__auto__,map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers))
;
var multi_value_path = cljs.core.conj.call(null,value_path,i,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(c));
var on_change_function = ((function (i__48088,nameval,nameval_num,if_checkbox,multi_value_path,c,s__48094__$2,temp__5278__auto____$1,vec__48090,i,m__$1,c__44141__auto__,size__44142__auto__,b__48089,s__48087__$2,temp__5278__auto__,map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers){
return (function (e){
return cljs.core.swap_BANG_.call(null,ATOM,cljs.core.assoc_in,multi_value_path,if_checkbox.call(null,e.target.checked,reagent_forms.shared.get_value_from_change.call(null,e)));
});})(i__48088,nameval,nameval_num,if_checkbox,multi_value_path,c,s__48094__$2,temp__5278__auto____$1,vec__48090,i,m__$1,c__44141__auto__,size__44142__auto__,b__48089,s__48087__$2,temp__5278__auto__,map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form-group",nameval,nameval_num,new cljs.core.Keyword(null,"input-type","input-type",856973840).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"column-class","column-class",-1162211104).cljs$core$IFn$_invoke$arity$1(c)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.custom-control.custom-checkbox","label.custom-control.custom-checkbox",2060881043),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,"textarea",new cljs.core.Keyword(null,"input-type","input-type",856973840).cljs$core$IFn$_invoke$arity$1(c)))?new cljs.core.Keyword(null,"textarea","textarea",-650375824):new cljs.core.Keyword(null,"input","input",556931961)),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__43261__auto__ = new cljs.core.Keyword(null,"input-type","input-type",856973840).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(or__43261__auto__)){
return or__43261__auto__;
} else {
return "text";
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-class","input-class",-62053138).cljs$core$IFn$_invoke$arity$1(c),if_checkbox.call(null,"custom-control-input"),(cljs.core.truth_(new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(c))?"disabled":null)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__43261__auto__ = new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(or__43261__auto__)){
return or__43261__auto__;
} else {
return disabled;
}
})(),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),c.call(null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083)),new cljs.core.Keyword(null,"default-value","default-value",232220170),c.call(null,new cljs.core.Keyword(null,"default-value","default-value",232220170)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change_function,new cljs.core.Keyword(null,"name","name",1843675177),nameval,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,cljs.core.deref.call(null,ATOM),multi_value_path)], null)], null),if_checkbox.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.custom-control-indicator","span.custom-control-indicator",-1187066743)], null))], null)], null);
})(),reagent_forms$shared$components$input$multi_table_$_iter__48086_$_iter__48093.call(null,cljs.core.rest.call(null,s__48094__$2)));
}
} else {
return null;
}
break;
}
});})(i__48088,vec__48090,i,m__$1,c__44141__auto__,size__44142__auto__,b__48089,s__48087__$2,temp__5278__auto__,map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers))
,null,null));
});})(i__48088,vec__48090,i,m__$1,c__44141__auto__,size__44142__auto__,b__48089,s__48087__$2,temp__5278__auto__,map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers))
;
return iter__44143__auto__.call(null,columns);
})()));

var G__48133 = (i__48088 + (1));
i__48088 = G__48133;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48089),reagent_forms$shared$components$input$multi_table_$_iter__48086.call(null,cljs.core.chunk_rest.call(null,s__48087__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48089),null);
}
} else {
var vec__48105 = cljs.core.first.call(null,s__48087__$2);
var i = cljs.core.nth.call(null,vec__48105,(0),null);
var m__$1 = cljs.core.nth.call(null,vec__48105,(1),null);
return cljs.core.cons.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__44143__auto__ = ((function (vec__48105,i,m__$1,s__48087__$2,temp__5278__auto__,map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers){
return (function reagent_forms$shared$components$input$multi_table_$_iter__48086_$_iter__48108(s__48109){
return (new cljs.core.LazySeq(null,((function (vec__48105,i,m__$1,s__48087__$2,temp__5278__auto__,map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers){
return (function (){
var s__48109__$1 = s__48109;
while(true){
var temp__5278__auto____$1 = cljs.core.seq.call(null,s__48109__$1);
if(temp__5278__auto____$1){
var s__48109__$2 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48109__$2)){
var c__44141__auto__ = cljs.core.chunk_first.call(null,s__48109__$2);
var size__44142__auto__ = cljs.core.count.call(null,c__44141__auto__);
var b__48111 = cljs.core.chunk_buffer.call(null,size__44142__auto__);
if((function (){var i__48110 = (0);
while(true){
if((i__48110 < size__44142__auto__)){
var c = cljs.core._nth.call(null,c__44141__auto__,i__48110);
cljs.core.chunk_append.call(null,b__48111,(function (){var nameval = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent_forms.shared.idify.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(c)))].join('');
var nameval_num = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(nameval),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('');
var if_checkbox = ((function (i__48110,nameval,nameval_num,c,c__44141__auto__,size__44142__auto__,b__48111,s__48109__$2,temp__5278__auto____$1,vec__48105,i,m__$1,s__48087__$2,temp__5278__auto__,map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers){
return (function() { 
var G__48134__delegate = function (v,p__48112){
var vec__48113 = p__48112;
var e = cljs.core.nth.call(null,vec__48113,(0),null);
if(cljs.core._EQ_.call(null,"checkbox",new cljs.core.Keyword(null,"input-type","input-type",856973840).cljs$core$IFn$_invoke$arity$1(c))){
return v;
} else {
return e;
}
};
var G__48134 = function (v,var_args){
var p__48112 = null;
if (arguments.length > 1) {
var G__48135__i = 0, G__48135__a = new Array(arguments.length -  1);
while (G__48135__i < G__48135__a.length) {G__48135__a[G__48135__i] = arguments[G__48135__i + 1]; ++G__48135__i;}
  p__48112 = new cljs.core.IndexedSeq(G__48135__a,0,null);
} 
return G__48134__delegate.call(this,v,p__48112);};
G__48134.cljs$lang$maxFixedArity = 1;
G__48134.cljs$lang$applyTo = (function (arglist__48136){
var v = cljs.core.first(arglist__48136);
var p__48112 = cljs.core.rest(arglist__48136);
return G__48134__delegate(v,p__48112);
});
G__48134.cljs$core$IFn$_invoke$arity$variadic = G__48134__delegate;
return G__48134;
})()
;})(i__48110,nameval,nameval_num,c,c__44141__auto__,size__44142__auto__,b__48111,s__48109__$2,temp__5278__auto____$1,vec__48105,i,m__$1,s__48087__$2,temp__5278__auto__,map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers))
;
var multi_value_path = cljs.core.conj.call(null,value_path,i,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(c));
var on_change_function = ((function (i__48110,nameval,nameval_num,if_checkbox,multi_value_path,c,c__44141__auto__,size__44142__auto__,b__48111,s__48109__$2,temp__5278__auto____$1,vec__48105,i,m__$1,s__48087__$2,temp__5278__auto__,map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers){
return (function (e){
return cljs.core.swap_BANG_.call(null,ATOM,cljs.core.assoc_in,multi_value_path,if_checkbox.call(null,e.target.checked,reagent_forms.shared.get_value_from_change.call(null,e)));
});})(i__48110,nameval,nameval_num,if_checkbox,multi_value_path,c,c__44141__auto__,size__44142__auto__,b__48111,s__48109__$2,temp__5278__auto____$1,vec__48105,i,m__$1,s__48087__$2,temp__5278__auto__,map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form-group",nameval,nameval_num,new cljs.core.Keyword(null,"input-type","input-type",856973840).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"column-class","column-class",-1162211104).cljs$core$IFn$_invoke$arity$1(c)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.custom-control.custom-checkbox","label.custom-control.custom-checkbox",2060881043),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,"textarea",new cljs.core.Keyword(null,"input-type","input-type",856973840).cljs$core$IFn$_invoke$arity$1(c)))?new cljs.core.Keyword(null,"textarea","textarea",-650375824):new cljs.core.Keyword(null,"input","input",556931961)),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__43261__auto__ = new cljs.core.Keyword(null,"input-type","input-type",856973840).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(or__43261__auto__)){
return or__43261__auto__;
} else {
return "text";
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-class","input-class",-62053138).cljs$core$IFn$_invoke$arity$1(c),if_checkbox.call(null,"custom-control-input"),(cljs.core.truth_(new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(c))?"disabled":null)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__43261__auto__ = new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(or__43261__auto__)){
return or__43261__auto__;
} else {
return disabled;
}
})(),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),c.call(null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083)),new cljs.core.Keyword(null,"default-value","default-value",232220170),c.call(null,new cljs.core.Keyword(null,"default-value","default-value",232220170)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change_function,new cljs.core.Keyword(null,"name","name",1843675177),nameval,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,cljs.core.deref.call(null,ATOM),multi_value_path)], null)], null),if_checkbox.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.custom-control-indicator","span.custom-control-indicator",-1187066743)], null))], null)], null);
})());

var G__48137 = (i__48110 + (1));
i__48110 = G__48137;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48111),reagent_forms$shared$components$input$multi_table_$_iter__48086_$_iter__48108.call(null,cljs.core.chunk_rest.call(null,s__48109__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48111),null);
}
} else {
var c = cljs.core.first.call(null,s__48109__$2);
return cljs.core.cons.call(null,(function (){var nameval = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent_forms.shared.idify.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(c)))].join('');
var nameval_num = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(nameval),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('');
var if_checkbox = ((function (nameval,nameval_num,c,s__48109__$2,temp__5278__auto____$1,vec__48105,i,m__$1,s__48087__$2,temp__5278__auto__,map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers){
return (function() { 
var G__48138__delegate = function (v,p__48116){
var vec__48117 = p__48116;
var e = cljs.core.nth.call(null,vec__48117,(0),null);
if(cljs.core._EQ_.call(null,"checkbox",new cljs.core.Keyword(null,"input-type","input-type",856973840).cljs$core$IFn$_invoke$arity$1(c))){
return v;
} else {
return e;
}
};
var G__48138 = function (v,var_args){
var p__48116 = null;
if (arguments.length > 1) {
var G__48139__i = 0, G__48139__a = new Array(arguments.length -  1);
while (G__48139__i < G__48139__a.length) {G__48139__a[G__48139__i] = arguments[G__48139__i + 1]; ++G__48139__i;}
  p__48116 = new cljs.core.IndexedSeq(G__48139__a,0,null);
} 
return G__48138__delegate.call(this,v,p__48116);};
G__48138.cljs$lang$maxFixedArity = 1;
G__48138.cljs$lang$applyTo = (function (arglist__48140){
var v = cljs.core.first(arglist__48140);
var p__48116 = cljs.core.rest(arglist__48140);
return G__48138__delegate(v,p__48116);
});
G__48138.cljs$core$IFn$_invoke$arity$variadic = G__48138__delegate;
return G__48138;
})()
;})(nameval,nameval_num,c,s__48109__$2,temp__5278__auto____$1,vec__48105,i,m__$1,s__48087__$2,temp__5278__auto__,map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers))
;
var multi_value_path = cljs.core.conj.call(null,value_path,i,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(c));
var on_change_function = ((function (nameval,nameval_num,if_checkbox,multi_value_path,c,s__48109__$2,temp__5278__auto____$1,vec__48105,i,m__$1,s__48087__$2,temp__5278__auto__,map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers){
return (function (e){
return cljs.core.swap_BANG_.call(null,ATOM,cljs.core.assoc_in,multi_value_path,if_checkbox.call(null,e.target.checked,reagent_forms.shared.get_value_from_change.call(null,e)));
});})(nameval,nameval_num,if_checkbox,multi_value_path,c,s__48109__$2,temp__5278__auto____$1,vec__48105,i,m__$1,s__48087__$2,temp__5278__auto__,map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form-group",nameval,nameval_num,new cljs.core.Keyword(null,"input-type","input-type",856973840).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"column-class","column-class",-1162211104).cljs$core$IFn$_invoke$arity$1(c)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.custom-control.custom-checkbox","label.custom-control.custom-checkbox",2060881043),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,"textarea",new cljs.core.Keyword(null,"input-type","input-type",856973840).cljs$core$IFn$_invoke$arity$1(c)))?new cljs.core.Keyword(null,"textarea","textarea",-650375824):new cljs.core.Keyword(null,"input","input",556931961)),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__43261__auto__ = new cljs.core.Keyword(null,"input-type","input-type",856973840).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(or__43261__auto__)){
return or__43261__auto__;
} else {
return "text";
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-class","input-class",-62053138).cljs$core$IFn$_invoke$arity$1(c),if_checkbox.call(null,"custom-control-input"),(cljs.core.truth_(new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(c))?"disabled":null)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__43261__auto__ = new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(or__43261__auto__)){
return or__43261__auto__;
} else {
return disabled;
}
})(),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),c.call(null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083)),new cljs.core.Keyword(null,"default-value","default-value",232220170),c.call(null,new cljs.core.Keyword(null,"default-value","default-value",232220170)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change_function,new cljs.core.Keyword(null,"name","name",1843675177),nameval,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,cljs.core.deref.call(null,ATOM),multi_value_path)], null)], null),if_checkbox.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.custom-control-indicator","span.custom-control-indicator",-1187066743)], null))], null)], null);
})(),reagent_forms$shared$components$input$multi_table_$_iter__48086_$_iter__48108.call(null,cljs.core.rest.call(null,s__48109__$2)));
}
} else {
return null;
}
break;
}
});})(vec__48105,i,m__$1,s__48087__$2,temp__5278__auto__,map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers))
,null,null));
});})(vec__48105,i,m__$1,s__48087__$2,temp__5278__auto__,map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers))
;
return iter__44143__auto__.call(null,columns);
})()),reagent_forms$shared$components$input$multi_table_$_iter__48086.call(null,cljs.core.rest.call(null,s__48087__$2)));
}
} else {
return null;
}
break;
}
});})(map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers))
,null,null));
});})(map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers))
;
return iter__44143__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.get_in.call(null,cljs.core.deref.call(null,ATOM),value_path)));
})());
var tbody = ((cljs.core.not.call(null,sum_field))?tbody_base:(function (){var sum_key = cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,sum_field)),"-total"].join(''));
var sum_val = sum_key.call(null,cljs.core.deref.call(null,ATOM));
var total = cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__44143__auto__ = ((function (sum_key,sum_val,map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers,tbody_base){
return (function reagent_forms$shared$components$input$multi_table_$_iter__48120(s__48121){
return (new cljs.core.LazySeq(null,((function (sum_key,sum_val,map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers,tbody_base){
return (function (){
var s__48121__$1 = s__48121;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__48121__$1);
if(temp__5278__auto__){
var s__48121__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48121__$2)){
var c__44141__auto__ = cljs.core.chunk_first.call(null,s__48121__$2);
var size__44142__auto__ = cljs.core.count.call(null,c__44141__auto__);
var b__48123 = cljs.core.chunk_buffer.call(null,size__44142__auto__);
if((function (){var i__48122 = (0);
while(true){
if((i__48122 < size__44142__auto__)){
var c = cljs.core._nth.call(null,c__44141__auto__,i__48122);
cljs.core.chunk_append.call(null,b__48123,parseInt(sum_field.call(null,c)));

var G__48141 = (i__48122 + (1));
i__48122 = G__48141;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48123),reagent_forms$shared$components$input$multi_table_$_iter__48120.call(null,cljs.core.chunk_rest.call(null,s__48121__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48123),null);
}
} else {
var c = cljs.core.first.call(null,s__48121__$2);
return cljs.core.cons.call(null,parseInt(sum_field.call(null,c)),reagent_forms$shared$components$input$multi_table_$_iter__48120.call(null,cljs.core.rest.call(null,s__48121__$2)));
}
} else {
return null;
}
break;
}
});})(sum_key,sum_val,map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers,tbody_base))
,null,null));
});})(sum_key,sum_val,map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers,tbody_base))
;
return iter__44143__auto__.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,ATOM),value_path));
})());
cljs.core.swap_BANG_.call(null,ATOM,cljs.core.assoc,sum_key,(function (){var x__43613__auto__ = total;
var y__43614__auto__ = (0);
return ((x__43613__auto__ > y__43614__auto__) ? x__43613__auto__ : y__43614__auto__);
})());

return cljs.core.conj.call(null,tbody_base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.form-group.total","td.form-group.total",-716401835),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Total"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group","div.input-group",-2073660476),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),"$"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"value","value",305978217),sum_key.call(null,cljs.core.deref.call(null,ATOM))], null)], null)], null)], null)], null));
})());
var add_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-success","a.btn.btn-success",-1694151738),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers,tbody_base,tbody){
return (function (){
return cljs.core.swap_BANG_.call(null,ATOM,reagent_forms.shared.components.input.add_multi_table_row,value_path,row_template);
});})(map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers,tbody_base,tbody))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-plus","i.fa.fa-plus",1581703945)], null)], null);
var delete_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-danger","a.btn.btn-danger",2091300065),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers,tbody_base,tbody,add_button){
return (function (){
return cljs.core.swap_BANG_.call(null,ATOM,reagent_forms.shared.components.input.delete_multi_table_row,value_path);
});})(map__48076,map__48076__$1,label,id,subtext,columns,min_rows,value_path,sum_field,disabled,row_template,sub,_init_table_BANG_,headers,tbody_base,tbody,add_button))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-minus","i.fa.fa-minus",-2118708238)], null)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.multi-table.table-responsive","div.multi-table.table-responsive",1159879782),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table-bordered.table-striped","table.table-bordered.table-striped",-1163074978),headers,tbody], null)),(cljs.core.truth_(disabled)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-buttons","div.control-buttons",772734805),add_button,delete_button], null))], null);
});
reagent_forms.shared.components.input.date_prompt = (function reagent_forms$shared$components$input$date_prompt(m){
var map__48142 = m;
var map__48142__$1 = ((((!((map__48142 == null)))?((((map__48142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48142.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48142):map__48142);
var label = cljs.core.get.call(null,map__48142__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.call(null,map__48142__$1,new cljs.core.Keyword(null,"id","id",-1388402092),reagent_forms.shared.idify.call(null,label));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1386112129),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),id], null),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),id,new cljs.core.Keyword(null,"default-value","default-value",232220170),(new Date())], null)], null)], null)], null)], null);
});
reagent_forms.shared.components.input.text_prompt = (function reagent_forms$shared$components$input$text_prompt(m){
var map__48144 = m;
var map__48144__$1 = ((((!((map__48144 == null)))?((((map__48144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48144.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48144):map__48144);
var label = cljs.core.get.call(null,map__48144__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.call(null,map__48144__$1,new cljs.core.Keyword(null,"id","id",-1388402092),reagent_forms.shared.idify.call(null,label));
var subtext = cljs.core.get.call(null,map__48144__$1,new cljs.core.Keyword(null,"subtext","subtext",1186196563),null);
var value = cljs.core.get.call(null,map__48144__$1,new cljs.core.Keyword(null,"value","value",305978217));
var disabled = cljs.core.get.call(null,map__48144__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var sub = (cljs.core.truth_(subtext)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.form-text.text-muted","small.form-text.text-muted",429284451),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),["sub_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),subtext], null):null);
var mv = (cljs.core.truth_((function (){var or__43261__auto__ = value;
if(cljs.core.truth_(or__43261__auto__)){
return or__43261__auto__;
} else {
return disabled;
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled], null):null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1386112129),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),id], null),label], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.call(null,mv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),id,new cljs.core.Keyword(null,"default-value","default-value",232220170),"test"], null))], null)], null)], null),sub], null);
});
reagent_forms.shared.components.input.select_box = (function reagent_forms$shared$components$input$select_box(m){
var map__48146 = m;
var map__48146__$1 = ((((!((map__48146 == null)))?((((map__48146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48146):map__48146);
var options = cljs.core.get.call(null,map__48146__$1,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No :options provided"], null));
var id = cljs.core.get.call(null,map__48146__$1,new cljs.core.Keyword(null,"id","id",-1388402092),"generic-select");
var on_change = cljs.core.get.call(null,map__48146__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-control","select.form-control",696610397),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),id,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null)], null),(function (){var iter__44143__auto__ = ((function (map__48146,map__48146__$1,options,id,on_change){
return (function reagent_forms$shared$components$input$select_box_$_iter__48148(s__48149){
return (new cljs.core.LazySeq(null,((function (map__48146,map__48146__$1,options,id,on_change){
return (function (){
var s__48149__$1 = s__48149;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__48149__$1);
if(temp__5278__auto__){
var s__48149__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48149__$2)){
var c__44141__auto__ = cljs.core.chunk_first.call(null,s__48149__$2);
var size__44142__auto__ = cljs.core.count.call(null,c__44141__auto__);
var b__48151 = cljs.core.chunk_buffer.call(null,size__44142__auto__);
if((function (){var i__48150 = (0);
while(true){
if((i__48150 < size__44142__auto__)){
var o = cljs.core._nth.call(null,c__44141__auto__,i__48150);
cljs.core.chunk_append.call(null,b__48151,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),o], null));

var G__48152 = (i__48150 + (1));
i__48150 = G__48152;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48151),reagent_forms$shared$components$input$select_box_$_iter__48148.call(null,cljs.core.chunk_rest.call(null,s__48149__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48151),null);
}
} else {
var o = cljs.core.first.call(null,s__48149__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),o], null),reagent_forms$shared$components$input$select_box_$_iter__48148.call(null,cljs.core.rest.call(null,s__48149__$2)));
}
} else {
return null;
}
break;
}
});})(map__48146,map__48146__$1,options,id,on_change))
,null,null));
});})(map__48146,map__48146__$1,options,id,on_change))
;
return iter__44143__auto__.call(null,options);
})());
});
reagent_forms.shared.components.input.text_area = (function reagent_forms$shared$components$input$text_area(m){
var map__48153 = m;
var map__48153__$1 = ((((!((map__48153 == null)))?((((map__48153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48153.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48153):map__48153);
var label = cljs.core.get.call(null,map__48153__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.call(null,map__48153__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var subtext = cljs.core.get.call(null,map__48153__$1,new cljs.core.Keyword(null,"subtext","subtext",1186196563),null);
var sub = (cljs.core.truth_(subtext)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.form-text.text-muted","small.form-text.text-muted",429284451),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),["sub_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),subtext], null):null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),id], null),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.form-control","textarea.form-control",-1690362789),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),id,new cljs.core.Keyword(null,"rows","rows",850049680),(5)], null)], null)], null);
});
/**
 * Produce data-bound inputs for a given map, updating `ATOM` on change. `opt-map` specifies options including display variables.
 */
reagent_forms.shared.components.input.tinput = (function reagent_forms$shared$components$input$tinput(var_args){
var args__44545__auto__ = [];
var len__44538__auto___48167 = arguments.length;
var i__44539__auto___48168 = (0);
while(true){
if((i__44539__auto___48168 < len__44538__auto___48167)){
args__44545__auto__.push((arguments[i__44539__auto___48168]));

var G__48169 = (i__44539__auto___48168 + (1));
i__44539__auto___48168 = G__48169;
continue;
} else {
}
break;
}

var argseq__44546__auto__ = ((((2) < args__44545__auto__.length))?(new cljs.core.IndexedSeq(args__44545__auto__.slice((2)),(0),null)):null);
return reagent_forms.shared.components.input.tinput.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__44546__auto__);
});

reagent_forms.shared.components.input.tinput.cljs$core$IFn$_invoke$arity$variadic = (function (ATOM,valpath,p__48158){
var vec__48159 = p__48158;
var opt_map = cljs.core.nth.call(null,vec__48159,(0),null);
var map__48162 = opt_map;
var map__48162__$1 = ((((!((map__48162 == null)))?((((map__48162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48162.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48162):map__48162);
var id = cljs.core.get.call(null,map__48162__$1,new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(valpath)].join(''));
var validation_function = cljs.core.get.call(null,map__48162__$1,new cljs.core.Keyword(null,"validation-function","validation-function",1218053271));
var required_QMARK_ = cljs.core.get.call(null,map__48162__$1,new cljs.core.Keyword(null,"required?","required?",-872514462));
var type = cljs.core.get.call(null,map__48162__$1,new cljs.core.Keyword(null,"type","type",1174270348),"text");
var default_value = cljs.core.get.call(null,map__48162__$1,new cljs.core.Keyword(null,"default-value","default-value",232220170));
var disabled = cljs.core.get.call(null,map__48162__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var subtext = cljs.core.get.call(null,map__48162__$1,new cljs.core.Keyword(null,"subtext","subtext",1186196563));
var invalid_feedback = cljs.core.get.call(null,map__48162__$1,new cljs.core.Keyword(null,"invalid-feedback","invalid-feedback",520998772));
var input_value = cljs.core.get_in.call(null,cljs.core.deref.call(null,ATOM),valpath);
var change_fun1 = ((function (map__48162,map__48162__$1,id,validation_function,required_QMARK_,type,default_value,disabled,subtext,invalid_feedback,input_value,vec__48159,opt_map){
return (function (e){
return cljs.core.swap_BANG_.call(null,ATOM,cljs.core.assoc_in,valpath,reagent_forms.shared.get_value_from_change.call(null,e));
});})(map__48162,map__48162__$1,id,validation_function,required_QMARK_,type,default_value,disabled,subtext,invalid_feedback,input_value,vec__48159,opt_map))
;
var change_fun = (function (){var temp__5276__auto__ = validation_function;
if(cljs.core.truth_(temp__5276__auto__)){
var vf = temp__5276__auto__;
return ((function (vf,temp__5276__auto__,map__48162,map__48162__$1,id,validation_function,required_QMARK_,type,default_value,disabled,subtext,invalid_feedback,input_value,change_fun1,vec__48159,opt_map){
return (function (e){
vf.call(null,e);

return change_fun1.call(null,e);
});
;})(vf,temp__5276__auto__,map__48162,map__48162__$1,id,validation_function,required_QMARK_,type,default_value,disabled,subtext,invalid_feedback,input_value,change_fun1,vec__48159,opt_map))
} else {
return change_fun1;
}
})();
var input_map = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),id,new cljs.core.Keyword(null,"on-change","on-change",-732046149),change_fun,new cljs.core.Keyword(null,"default-value","default-value",232220170),default_value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),input_value], null),(cljs.core.truth_(disabled)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled], null):null),(cljs.core.truth_(required_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"required","required",1807647006),true], null):null));
var sub = (cljs.core.truth_(subtext)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.form-text.text-muted","small.form-text.text-muted",429284451),subtext], null):null);
var invalid_feedback__$1 = (cljs.core.truth_(invalid_feedback)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.invalid-feedback","div.invalid-feedback",-266429608),invalid_feedback], null):null);
var input = (function (){var pred__48164 = cljs.core._EQ_;
var expr__48165 = type;
if(cljs.core.truth_(pred__48164.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__48165))){
return reagent_forms.shared.components.input.select_box.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opt_map),new cljs.core.Keyword(null,"on-change","on-change",-732046149),change_fun,new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
} else {
if(cljs.core.truth_(pred__48164.call(null,new cljs.core.Keyword(null,"multi-table","multi-table",700745777),expr__48165))){
return reagent_forms.shared.components.input.multi_table.call(null,ATOM,opt_map);
} else {
if(cljs.core.truth_(pred__48164.call(null,new cljs.core.Keyword(null,"textarea","textarea",-650375824),expr__48165))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.form-control","textarea.form-control",-1690362789),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),id,new cljs.core.Keyword(null,"rows","rows",850049680),(5),new cljs.core.Keyword(null,"value","value",305978217),input_value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),change_fun,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083).cljs$core$IFn$_invoke$arity$1(opt_map),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),input_map], null);
}
}
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3.label-area","div.col-md-3.label-area",1132892550),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),id], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$2(opt_map,id)], null),sub], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),input,invalid_feedback__$1], null)], null)], null);
});

reagent_forms.shared.components.input.tinput.cljs$lang$maxFixedArity = (2);

reagent_forms.shared.components.input.tinput.cljs$lang$applyTo = (function (seq48155){
var G__48156 = cljs.core.first.call(null,seq48155);
var seq48155__$1 = cljs.core.next.call(null,seq48155);
var G__48157 = cljs.core.first.call(null,seq48155__$1);
var seq48155__$2 = cljs.core.next.call(null,seq48155__$1);
return reagent_forms.shared.components.input.tinput.cljs$core$IFn$_invoke$arity$variadic(G__48156,G__48157,seq48155__$2);
});


//# sourceMappingURL=input.js.map

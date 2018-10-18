// Compiled by ClojureScript 1.9.908 {}
goog.provide('ajax.interceptors');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.util');
goog.require('ajax.url');
goog.require('ajax.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__43949__auto__,k__43950__auto__){
var self__ = this;
var this__43949__auto____$1 = this;
return this__43949__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__43950__auto__,null);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__43951__auto__,k45845,else__43952__auto__){
var self__ = this;
var this__43951__auto____$1 = this;
var G__45849 = k45845;
var G__45849__$1 = (((G__45849 instanceof cljs.core.Keyword))?G__45849.fqn:null);
switch (G__45849__$1) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k45845,else__43952__auto__);

}
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__45850,opts){
var self__ = this;
var map__45851 = p__45850;
var map__45851__$1 = ((((!((map__45851 == null)))?((((map__45851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45851.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45851):map__45851);
var request__$1 = cljs.core.get.call(null,map__45851__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__45853 = this;
var map__45853__$1 = ((((!((map__45853 == null)))?((((map__45853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45853.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45853):map__45853);
var request__$2 = cljs.core.get.call(null,map__45853__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__45855,xhrio){
var self__ = this;
var map__45856 = p__45855;
var map__45856__$1 = ((((!((map__45856 == null)))?((((map__45856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45856.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45856):map__45856);
var response__$1 = cljs.core.get.call(null,map__45856__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__45858 = this;
var map__45858__$1 = ((((!((map__45858 == null)))?((((map__45858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45858.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45858):map__45858);
var response__$2 = cljs.core.get.call(null,map__45858__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__43963__auto__,writer__43964__auto__,opts__43965__auto__){
var self__ = this;
var this__43963__auto____$1 = this;
var pr_pair__43966__auto__ = ((function (this__43963__auto____$1){
return (function (keyval__43967__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__43964__auto__,cljs.core.pr_writer,""," ","",opts__43965__auto__,keyval__43967__auto__);
});})(this__43963__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__43964__auto__,pr_pair__43966__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__43965__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45844){
var self__ = this;
var G__45844__$1 = this;
return (new cljs.core.RecordIter((0),G__45844__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__43947__auto__){
var self__ = this;
var this__43947__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__43944__auto__){
var self__ = this;
var this__43944__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__43953__auto__){
var self__ = this;
var this__43953__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__43945__auto__){
var self__ = this;
var this__43945__auto____$1 = this;
var h__43717__auto__ = self__.__hash;
if(!((h__43717__auto__ == null))){
return h__43717__auto__;
} else {
var h__43717__auto____$1 = ((function (h__43717__auto__,this__43945__auto____$1){
return (function (coll__43946__auto__){
return (1482887116 ^ cljs.core.hash_unordered_coll.call(null,coll__43946__auto__));
});})(h__43717__auto__,this__43945__auto____$1))
.call(null,this__43945__auto____$1);
self__.__hash = h__43717__auto____$1;

return h__43717__auto____$1;
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45846,other45847){
var self__ = this;
var this45846__$1 = this;
return (!((other45847 == null))) && ((this45846__$1.constructor === other45847.constructor)) && (cljs.core._EQ_.call(null,this45846__$1.name,other45847.name)) && (cljs.core._EQ_.call(null,this45846__$1.request,other45847.request)) && (cljs.core._EQ_.call(null,this45846__$1.response,other45847.response)) && (cljs.core._EQ_.call(null,this45846__$1.__extmap,other45847.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__43958__auto__,k__43959__auto__){
var self__ = this;
var this__43958__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__43959__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__43958__auto____$1),self__.__meta),k__43959__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__43959__auto__)),null));
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__43956__auto__,k__43957__auto__,G__45844){
var self__ = this;
var this__43956__auto____$1 = this;
var pred__45860 = cljs.core.keyword_identical_QMARK_;
var expr__45861 = k__43957__auto__;
if(cljs.core.truth_(pred__45860.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__45861))){
return (new ajax.interceptors.StandardInterceptor(G__45844,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__45860.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__45861))){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__45844,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__45860.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__45861))){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__45844,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__43957__auto__,G__45844),null));
}
}
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__43961__auto__){
var self__ = this;
var this__43961__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__43948__auto__,G__45844){
var self__ = this;
var this__43948__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__45844,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__43954__auto__,entry__43955__auto__){
var self__ = this;
var this__43954__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__43955__auto__)){
return this__43954__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__43955__auto__,(0)),cljs.core._nth.call(null,entry__43955__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__43954__auto____$1,entry__43955__auto__);
}
});

ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.interceptors.StandardInterceptor.cljs$lang$type = true;

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__43987__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__43987__auto__,writer__43988__auto__){
return cljs.core._write.call(null,writer__43988__auto__,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__45848){
return (new ajax.interceptors.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__45848),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__45848),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__45848),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__45848,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192))),null));
});

ajax.interceptors.to_interceptor = (function ajax$interceptors$to_interceptor(m){

return ajax.interceptors.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.interceptors.success_QMARK_ = (function ajax$interceptors$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([status]),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.interceptors.exception_message = (function ajax$interceptors$exception_message(e){
return e.message;
});
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__45864,xhrio){
var map__45865 = p__45864;
var map__45865__$1 = ((((!((map__45865 == null)))?((((map__45865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45865.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45865):map__45865);
var description = cljs.core.get.call(null,map__45865__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.interceptors.exception_message.call(null,e)),"  Format should have been ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.interceptors.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.interceptors.fail = (function ajax$interceptors$fail(var_args){
var args__44545__auto__ = [];
var len__44538__auto___45871 = arguments.length;
var i__44539__auto___45872 = (0);
while(true){
if((i__44539__auto___45872 < len__44538__auto___45871)){
args__44545__auto__.push((arguments[i__44539__auto___45872]));

var G__45873 = (i__44539__auto___45872 + (1));
i__44539__auto___45872 = G__45873;
continue;
} else {
}
break;
}

var argseq__44546__auto__ = ((((3) < args__44545__auto__.length))?(new cljs.core.IndexedSeq(args__44545__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__44546__auto__);
});

ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.interceptors.fail.cljs$lang$maxFixedArity = (3);

ajax.interceptors.fail.cljs$lang$applyTo = (function (seq45867){
var G__45868 = cljs.core.first.call(null,seq45867);
var seq45867__$1 = cljs.core.next.call(null,seq45867);
var G__45869 = cljs.core.first.call(null,seq45867__$1);
var seq45867__$2 = cljs.core.next.call(null,seq45867__$1);
var G__45870 = cljs.core.first.call(null,seq45867__$2);
var seq45867__$3 = cljs.core.next.call(null,seq45867__$2);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic(G__45868,G__45869,G__45870,seq45867__$3);
});

ajax.interceptors.content_type_to_request_header = (function ajax$interceptors$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__43949__auto__,k__43950__auto__){
var self__ = this;
var this__43949__auto____$1 = this;
return this__43949__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__43950__auto__,null);
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__43951__auto__,k45876,else__43952__auto__){
var self__ = this;
var this__43951__auto____$1 = this;
var G__45880 = k45876;
var G__45880__$1 = (((G__45880 instanceof cljs.core.Keyword))?G__45880.fqn:null);
switch (G__45880__$1) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k45876,else__43952__auto__);

}
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__45881,request){
var self__ = this;
var map__45882 = p__45881;
var map__45882__$1 = ((((!((map__45882 == null)))?((((map__45882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45882.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45882):map__45882);
var content_type__$1 = cljs.core.get.call(null,map__45882__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__45884 = this;
var map__45884__$1 = ((((!((map__45884 == null)))?((((map__45884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45884.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45884):map__45884);
var content_type__$2 = cljs.core.get.call(null,map__45884__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__45884,map__45884__$1,content_type__$2,map__45882,map__45882__$1,content_type__$1){
return (function (p1__45874_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__43261__auto__ = p1__45874_SHARP_;
if(cljs.core.truth_(or__43261__auto__)){
return or__43261__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__45884,map__45884__$1,content_type__$2,map__45882,map__45882__$1,content_type__$1))
);
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__45886,xhrio){
var self__ = this;
var map__45887 = p__45886;
var map__45887__$1 = ((((!((map__45887 == null)))?((((map__45887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45887.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45887):map__45887);
var format = map__45887__$1;
var read__$1 = cljs.core.get.call(null,map__45887__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__45889 = this;
var map__45889__$1 = ((((!((map__45889 == null)))?((((map__45889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45889.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45889):map__45889);
var format__$1 = map__45889__$1;
var read__$2 = cljs.core.get.call(null,map__45889__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.interceptors.fail,status);
var G__45892 = status;
switch (G__45892) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.interceptors.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e45893){if((e45893 instanceof Object)){
var e = e45893;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e45893;

}
}
}
}catch (e45891){if((e45891 instanceof Object)){
var e = e45891;
var message = e.message;
return ajax.interceptors.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e45891;

}
}});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__43963__auto__,writer__43964__auto__,opts__43965__auto__){
var self__ = this;
var this__43963__auto____$1 = this;
var pr_pair__43966__auto__ = ((function (this__43963__auto____$1){
return (function (keyval__43967__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__43964__auto__,cljs.core.pr_writer,""," ","",opts__43965__auto__,keyval__43967__auto__);
});})(this__43963__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__43964__auto__,pr_pair__43966__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__43965__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45875){
var self__ = this;
var G__45875__$1 = this;
return (new cljs.core.RecordIter((0),G__45875__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__43947__auto__){
var self__ = this;
var this__43947__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__43944__auto__){
var self__ = this;
var this__43944__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__43953__auto__){
var self__ = this;
var this__43953__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__43945__auto__){
var self__ = this;
var this__43945__auto____$1 = this;
var h__43717__auto__ = self__.__hash;
if(!((h__43717__auto__ == null))){
return h__43717__auto__;
} else {
var h__43717__auto____$1 = ((function (h__43717__auto__,this__43945__auto____$1){
return (function (coll__43946__auto__){
return (-2103965186 ^ cljs.core.hash_unordered_coll.call(null,coll__43946__auto__));
});})(h__43717__auto__,this__43945__auto____$1))
.call(null,this__43945__auto____$1);
self__.__hash = h__43717__auto____$1;

return h__43717__auto____$1;
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45877,other45878){
var self__ = this;
var this45877__$1 = this;
return (!((other45878 == null))) && ((this45877__$1.constructor === other45878.constructor)) && (cljs.core._EQ_.call(null,this45877__$1.read,other45878.read)) && (cljs.core._EQ_.call(null,this45877__$1.description,other45878.description)) && (cljs.core._EQ_.call(null,this45877__$1.content_type,other45878.content_type)) && (cljs.core._EQ_.call(null,this45877__$1.__extmap,other45878.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__43958__auto__,k__43959__auto__){
var self__ = this;
var this__43958__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__43959__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__43958__auto____$1),self__.__meta),k__43959__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__43959__auto__)),null));
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__43956__auto__,k__43957__auto__,G__45875){
var self__ = this;
var this__43956__auto____$1 = this;
var pred__45894 = cljs.core.keyword_identical_QMARK_;
var expr__45895 = k__43957__auto__;
if(cljs.core.truth_(pred__45894.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__45895))){
return (new ajax.interceptors.ResponseFormat(G__45875,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__45894.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__45895))){
return (new ajax.interceptors.ResponseFormat(self__.read,G__45875,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__45894.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__45895))){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__45875,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__43957__auto__,G__45875),null));
}
}
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__43961__auto__){
var self__ = this;
var this__43961__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__43948__auto__,G__45875){
var self__ = this;
var this__43948__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__45875,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__43954__auto__,entry__43955__auto__){
var self__ = this;
var this__43954__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__43955__auto__)){
return this__43954__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__43955__auto__,(0)),cljs.core._nth.call(null,entry__43955__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__43954__auto____$1,entry__43955__auto__);
}
});

ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.interceptors.ResponseFormat.cljs$lang$type = true;

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__43987__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__43987__auto__,writer__43988__auto__){
return cljs.core._write.call(null,writer__43988__auto__,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__45879){
return (new ajax.interceptors.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__45879),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__45879),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__45879),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__45879,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634))),null));
});

ajax.interceptors.get_request_format = (function ajax$interceptors$get_request_format(format){

if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if((format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as request formats in ajax calls: ",format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
ajax.interceptors.apply_request_format = (function ajax$interceptors$apply_request_format(write,params){
return write.call(null,params);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__43949__auto__,k__43950__auto__){
var self__ = this;
var this__43949__auto____$1 = this;
return this__43949__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__43950__auto__,null);
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__43951__auto__,k45901,else__43952__auto__){
var self__ = this;
var this__43951__auto____$1 = this;
var G__45905 = k45901;
switch (G__45905) {
default:
return cljs.core.get.call(null,self__.__extmap,k45901,else__43952__auto__);

}
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__45906){
var self__ = this;
var map__45907 = p__45906;
var map__45907__$1 = ((((!((map__45907 == null)))?((((map__45907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45907.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45907):map__45907);
var request = map__45907__$1;
var uri = cljs.core.get.call(null,map__45907__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__45907__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__45907__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__45907__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__45907__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__45909 = ajax.interceptors.get_request_format.call(null,format);
var map__45909__$1 = ((((!((map__45909 == null)))?((((map__45909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45909.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45909):map__45909);
var write = cljs.core.get.call(null,map__45909__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__45909__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.interceptors.apply_request_format.call(null,write,params):ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__43261__auto__ = headers;
if(cljs.core.truth_(or__43261__auto__)){
return or__43261__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.interceptors.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__43963__auto__,writer__43964__auto__,opts__43965__auto__){
var self__ = this;
var this__43963__auto____$1 = this;
var pr_pair__43966__auto__ = ((function (this__43963__auto____$1){
return (function (keyval__43967__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__43964__auto__,cljs.core.pr_writer,""," ","",opts__43965__auto__,keyval__43967__auto__);
});})(this__43963__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__43964__auto__,pr_pair__43966__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__43965__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45900){
var self__ = this;
var G__45900__$1 = this;
return (new cljs.core.RecordIter((0),G__45900__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__43947__auto__){
var self__ = this;
var this__43947__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__43944__auto__){
var self__ = this;
var this__43944__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__43953__auto__){
var self__ = this;
var this__43953__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__43945__auto__){
var self__ = this;
var this__43945__auto____$1 = this;
var h__43717__auto__ = self__.__hash;
if(!((h__43717__auto__ == null))){
return h__43717__auto__;
} else {
var h__43717__auto____$1 = ((function (h__43717__auto__,this__43945__auto____$1){
return (function (coll__43946__auto__){
return (1698259290 ^ cljs.core.hash_unordered_coll.call(null,coll__43946__auto__));
});})(h__43717__auto__,this__43945__auto____$1))
.call(null,this__43945__auto____$1);
self__.__hash = h__43717__auto____$1;

return h__43717__auto____$1;
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45902,other45903){
var self__ = this;
var this45902__$1 = this;
return (!((other45903 == null))) && ((this45902__$1.constructor === other45903.constructor)) && (cljs.core._EQ_.call(null,this45902__$1.__extmap,other45903.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__43958__auto__,k__43959__auto__){
var self__ = this;
var this__43958__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__43959__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__43958__auto____$1),self__.__meta),k__43959__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__43959__auto__)),null));
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__43956__auto__,k__43957__auto__,G__45900){
var self__ = this;
var this__43956__auto____$1 = this;
var pred__45911 = cljs.core.keyword_identical_QMARK_;
var expr__45912 = k__43957__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__43957__auto__,G__45900),null));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__43961__auto__){
var self__ = this;
var this__43961__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__43948__auto__,G__45900){
var self__ = this;
var this__43948__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__45900,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__43954__auto__,entry__43955__auto__){
var self__ = this;
var this__43954__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__43955__auto__)){
return this__43954__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__43955__auto__,(0)),cljs.core._nth.call(null,entry__43955__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__43954__auto____$1,entry__43955__auto__);
}
});

ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true;

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__43987__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__43987__auto__,writer__43988__auto__){
return cljs.core._write.call(null,writer__43988__auto__,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__45904){
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__45904)),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var G__45916 = arguments.length;
switch (G__45916) {
case 2:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__45917,uri){
var map__45918 = p__45917;
var map__45918__$1 = ((((!((map__45918 == null)))?((((map__45918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45918):map__45918);
var vec_strategy = cljs.core.get.call(null,map__45918__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__45918__$1,new cljs.core.Keyword(null,"params","params",710516235));

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__45920){
var map__45921 = p__45920;
var map__45921__$1 = ((((!((map__45921 == null)))?((((map__45921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45921.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45921):map__45921);
var vec_strategy = cljs.core.get.call(null,map__45921__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__45921__$1,new cljs.core.Keyword(null,"params","params",710516235));
return ((function (map__45921,map__45921__$1,vec_strategy,params){
return (function (uri){

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});
;})(map__45921,map__45921__$1,vec_strategy,params))
});

ajax.interceptors.uri_with_params.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ProcessGet = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__43949__auto__,k__43950__auto__){
var self__ = this;
var this__43949__auto____$1 = this;
return this__43949__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__43950__auto__,null);
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__43951__auto__,k45925,else__43952__auto__){
var self__ = this;
var this__43951__auto____$1 = this;
var G__45929 = k45925;
switch (G__45929) {
default:
return cljs.core.get.call(null,self__.__extmap,k45925,else__43952__auto__);

}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__45930){
var self__ = this;
var map__45931 = p__45930;
var map__45931__$1 = ((((!((map__45931 == null)))?((((map__45931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45931.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45931):map__45931);
var request = map__45931__$1;
var method = cljs.core.get.call(null,map__45931__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),ajax.interceptors.uri_with_params.call(null,request)));
} else {
return request;
}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__43963__auto__,writer__43964__auto__,opts__43965__auto__){
var self__ = this;
var this__43963__auto____$1 = this;
var pr_pair__43966__auto__ = ((function (this__43963__auto____$1){
return (function (keyval__43967__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__43964__auto__,cljs.core.pr_writer,""," ","",opts__43965__auto__,keyval__43967__auto__);
});})(this__43963__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__43964__auto__,pr_pair__43966__auto__,"#ajax.interceptors.ProcessGet{",", ","}",opts__43965__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45924){
var self__ = this;
var G__45924__$1 = this;
return (new cljs.core.RecordIter((0),G__45924__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__43947__auto__){
var self__ = this;
var this__43947__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__43944__auto__){
var self__ = this;
var this__43944__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__43953__auto__){
var self__ = this;
var this__43953__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__43945__auto__){
var self__ = this;
var this__43945__auto____$1 = this;
var h__43717__auto__ = self__.__hash;
if(!((h__43717__auto__ == null))){
return h__43717__auto__;
} else {
var h__43717__auto____$1 = ((function (h__43717__auto__,this__43945__auto____$1){
return (function (coll__43946__auto__){
return (1135316249 ^ cljs.core.hash_unordered_coll.call(null,coll__43946__auto__));
});})(h__43717__auto__,this__43945__auto____$1))
.call(null,this__43945__auto____$1);
self__.__hash = h__43717__auto____$1;

return h__43717__auto____$1;
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45926,other45927){
var self__ = this;
var this45926__$1 = this;
return (!((other45927 == null))) && ((this45926__$1.constructor === other45927.constructor)) && (cljs.core._EQ_.call(null,this45926__$1.__extmap,other45927.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__43958__auto__,k__43959__auto__){
var self__ = this;
var this__43958__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__43959__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__43958__auto____$1),self__.__meta),k__43959__auto__);
} else {
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__43959__auto__)),null));
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__43956__auto__,k__43957__auto__,G__45924){
var self__ = this;
var this__43956__auto____$1 = this;
var pred__45933 = cljs.core.keyword_identical_QMARK_;
var expr__45934 = k__43957__auto__;
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__43957__auto__,G__45924),null));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__43961__auto__){
var self__ = this;
var this__43961__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__43948__auto__,G__45924){
var self__ = this;
var this__43948__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(G__45924,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__43954__auto__,entry__43955__auto__){
var self__ = this;
var this__43954__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__43955__auto__)){
return this__43954__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__43955__auto__,(0)),cljs.core._nth.call(null,entry__43955__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__43954__auto____$1,entry__43955__auto__);
}
});

ajax.interceptors.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ProcessGet.cljs$lang$type = true;

ajax.interceptors.ProcessGet.cljs$lang$ctorPrSeq = (function (this__43987__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.ProcessGet.cljs$lang$ctorPrWriter = (function (this__43987__auto__,writer__43988__auto__){
return cljs.core._write.call(null,writer__43988__auto__,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.__GT_ProcessGet = (function ajax$interceptors$__GT_ProcessGet(){
return (new ajax.interceptors.ProcessGet(null,null,null));
});

ajax.interceptors.map__GT_ProcessGet = (function ajax$interceptors$map__GT_ProcessGet(G__45928){
return (new ajax.interceptors.ProcessGet(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__45928)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__43949__auto__,k__43950__auto__){
var self__ = this;
var this__43949__auto____$1 = this;
return this__43949__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__43950__auto__,null);
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__43951__auto__,k45938,else__43952__auto__){
var self__ = this;
var this__43951__auto____$1 = this;
var G__45942 = k45938;
switch (G__45942) {
default:
return cljs.core.get.call(null,self__.__extmap,k45938,else__43952__auto__);

}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__45943){
var self__ = this;
var map__45944 = p__45943;
var map__45944__$1 = ((((!((map__45944 == null)))?((((map__45944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45944.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45944):map__45944);
var request = map__45944__$1;
var body = cljs.core.get.call(null,map__45944__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__43963__auto__,writer__43964__auto__,opts__43965__auto__){
var self__ = this;
var this__43963__auto____$1 = this;
var pr_pair__43966__auto__ = ((function (this__43963__auto____$1){
return (function (keyval__43967__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__43964__auto__,cljs.core.pr_writer,""," ","",opts__43965__auto__,keyval__43967__auto__);
});})(this__43963__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__43964__auto__,pr_pair__43966__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__43965__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45937){
var self__ = this;
var G__45937__$1 = this;
return (new cljs.core.RecordIter((0),G__45937__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__43947__auto__){
var self__ = this;
var this__43947__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__43944__auto__){
var self__ = this;
var this__43944__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__43953__auto__){
var self__ = this;
var this__43953__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__43945__auto__){
var self__ = this;
var this__43945__auto____$1 = this;
var h__43717__auto__ = self__.__hash;
if(!((h__43717__auto__ == null))){
return h__43717__auto__;
} else {
var h__43717__auto____$1 = ((function (h__43717__auto__,this__43945__auto____$1){
return (function (coll__43946__auto__){
return (-1077152635 ^ cljs.core.hash_unordered_coll.call(null,coll__43946__auto__));
});})(h__43717__auto__,this__43945__auto____$1))
.call(null,this__43945__auto____$1);
self__.__hash = h__43717__auto____$1;

return h__43717__auto____$1;
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45939,other45940){
var self__ = this;
var this45939__$1 = this;
return (!((other45940 == null))) && ((this45939__$1.constructor === other45940.constructor)) && (cljs.core._EQ_.call(null,this45939__$1.__extmap,other45940.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__43958__auto__,k__43959__auto__){
var self__ = this;
var this__43958__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__43959__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__43958__auto____$1),self__.__meta),k__43959__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__43959__auto__)),null));
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__43956__auto__,k__43957__auto__,G__45937){
var self__ = this;
var this__43956__auto____$1 = this;
var pred__45946 = cljs.core.keyword_identical_QMARK_;
var expr__45947 = k__43957__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__43957__auto__,G__45937),null));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__43961__auto__){
var self__ = this;
var this__43961__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__43948__auto__,G__45937){
var self__ = this;
var this__43948__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__45937,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__43954__auto__,entry__43955__auto__){
var self__ = this;
var this__43954__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__43955__auto__)){
return this__43954__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__43955__auto__,(0)),cljs.core._nth.call(null,entry__43955__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__43954__auto____$1,entry__43955__auto__);
}
});

ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.DirectSubmission.cljs$lang$type = true;

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__43987__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__43987__auto__,writer__43988__auto__){
return cljs.core._write.call(null,writer__43988__auto__,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__45941){
return (new ajax.interceptors.DirectSubmission(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__45941)),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessGet(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__45950){
var map__45951 = p__45950;
var map__45951__$1 = ((((!((map__45951 == null)))?((((map__45951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45951.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45951):map__45951);
var opts = map__45951__$1;
var response_format = cljs.core.get.call(null,map__45951__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.truth_(ajax.interceptors.is_response_format_QMARK_.call(null,response_format))){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return interpret_vector.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,response_format);
} else {
if((response_format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as response formats in ajax calls: ",response_format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
}
});

//# sourceMappingURL=interceptors.js.map

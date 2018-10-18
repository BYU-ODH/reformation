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
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__45203__auto__,k__45204__auto__){
var self__ = this;
var this__45203__auto____$1 = this;
return this__45203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__45204__auto__,null);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__45205__auto__,k50443,else__45206__auto__){
var self__ = this;
var this__45205__auto____$1 = this;
var G__50447 = k50443;
var G__50447__$1 = (((G__50447 instanceof cljs.core.Keyword))?G__50447.fqn:null);
switch (G__50447__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k50443,else__45206__auto__);

}
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__50448,opts){
var self__ = this;
var map__50449 = p__50448;
var map__50449__$1 = ((((!((map__50449 == null)))?((((map__50449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50449.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50449):map__50449);
var request__$1 = cljs.core.get.call(null,map__50449__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__50451 = this;
var map__50451__$1 = ((((!((map__50451 == null)))?((((map__50451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50451.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50451):map__50451);
var request__$2 = cljs.core.get.call(null,map__50451__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__50453,xhrio){
var self__ = this;
var map__50454 = p__50453;
var map__50454__$1 = ((((!((map__50454 == null)))?((((map__50454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50454.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50454):map__50454);
var response__$1 = cljs.core.get.call(null,map__50454__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__50456 = this;
var map__50456__$1 = ((((!((map__50456 == null)))?((((map__50456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50456.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50456):map__50456);
var response__$2 = cljs.core.get.call(null,map__50456__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__45217__auto__,writer__45218__auto__,opts__45219__auto__){
var self__ = this;
var this__45217__auto____$1 = this;
var pr_pair__45220__auto__ = ((function (this__45217__auto____$1){
return (function (keyval__45221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__45218__auto__,cljs.core.pr_writer,""," ","",opts__45219__auto__,keyval__45221__auto__);
});})(this__45217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__45218__auto__,pr_pair__45220__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__45219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50442){
var self__ = this;
var G__50442__$1 = this;
return (new cljs.core.RecordIter((0),G__50442__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__45201__auto__){
var self__ = this;
var this__45201__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__45198__auto__){
var self__ = this;
var this__45198__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__45207__auto__){
var self__ = this;
var this__45207__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__45199__auto__){
var self__ = this;
var this__45199__auto____$1 = this;
var h__44971__auto__ = self__.__hash;
if(!((h__44971__auto__ == null))){
return h__44971__auto__;
} else {
var h__44971__auto____$1 = ((function (h__44971__auto__,this__45199__auto____$1){
return (function (coll__45200__auto__){
return (1482887116 ^ cljs.core.hash_unordered_coll.call(null,coll__45200__auto__));
});})(h__44971__auto__,this__45199__auto____$1))
.call(null,this__45199__auto____$1);
self__.__hash = h__44971__auto____$1;

return h__44971__auto____$1;
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50444,other50445){
var self__ = this;
var this50444__$1 = this;
return (!((other50445 == null))) && ((this50444__$1.constructor === other50445.constructor)) && (cljs.core._EQ_.call(null,this50444__$1.name,other50445.name)) && (cljs.core._EQ_.call(null,this50444__$1.request,other50445.request)) && (cljs.core._EQ_.call(null,this50444__$1.response,other50445.response)) && (cljs.core._EQ_.call(null,this50444__$1.__extmap,other50445.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__45212__auto__,k__45213__auto__){
var self__ = this;
var this__45212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__45213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__45212__auto____$1),self__.__meta),k__45213__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__45213__auto__)),null));
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__45210__auto__,k__45211__auto__,G__50442){
var self__ = this;
var this__45210__auto____$1 = this;
var pred__50458 = cljs.core.keyword_identical_QMARK_;
var expr__50459 = k__45211__auto__;
if(cljs.core.truth_(pred__50458.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__50459))){
return (new ajax.interceptors.StandardInterceptor(G__50442,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50458.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__50459))){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__50442,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50458.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__50459))){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__50442,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__45211__auto__,G__50442),null));
}
}
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__45215__auto__){
var self__ = this;
var this__45215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__45202__auto__,G__50442){
var self__ = this;
var this__45202__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__50442,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__45208__auto__,entry__45209__auto__){
var self__ = this;
var this__45208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__45209__auto__)){
return this__45208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__45209__auto__,(0)),cljs.core._nth.call(null,entry__45209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__45208__auto____$1,entry__45209__auto__);
}
});

ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.interceptors.StandardInterceptor.cljs$lang$type = true;

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__45241__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__45241__auto__,writer__45242__auto__){
return cljs.core._write.call(null,writer__45242__auto__,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__50446){
return (new ajax.interceptors.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__50446),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__50446),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__50446),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__50446,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192))),null));
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
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__50462,xhrio){
var map__50463 = p__50462;
var map__50463__$1 = ((((!((map__50463 == null)))?((((map__50463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50463.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50463):map__50463);
var description = cljs.core.get.call(null,map__50463__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
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
var args__45799__auto__ = [];
var len__45792__auto___50469 = arguments.length;
var i__45793__auto___50470 = (0);
while(true){
if((i__45793__auto___50470 < len__45792__auto___50469)){
args__45799__auto__.push((arguments[i__45793__auto___50470]));

var G__50471 = (i__45793__auto___50470 + (1));
i__45793__auto___50470 = G__50471;
continue;
} else {
}
break;
}

var argseq__45800__auto__ = ((((3) < args__45799__auto__.length))?(new cljs.core.IndexedSeq(args__45799__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__45800__auto__);
});

ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.interceptors.fail.cljs$lang$maxFixedArity = (3);

ajax.interceptors.fail.cljs$lang$applyTo = (function (seq50465){
var G__50466 = cljs.core.first.call(null,seq50465);
var seq50465__$1 = cljs.core.next.call(null,seq50465);
var G__50467 = cljs.core.first.call(null,seq50465__$1);
var seq50465__$2 = cljs.core.next.call(null,seq50465__$1);
var G__50468 = cljs.core.first.call(null,seq50465__$2);
var seq50465__$3 = cljs.core.next.call(null,seq50465__$2);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic(G__50466,G__50467,G__50468,seq50465__$3);
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
ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__45203__auto__,k__45204__auto__){
var self__ = this;
var this__45203__auto____$1 = this;
return this__45203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__45204__auto__,null);
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__45205__auto__,k50474,else__45206__auto__){
var self__ = this;
var this__45205__auto____$1 = this;
var G__50478 = k50474;
var G__50478__$1 = (((G__50478 instanceof cljs.core.Keyword))?G__50478.fqn:null);
switch (G__50478__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k50474,else__45206__auto__);

}
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__50479,request){
var self__ = this;
var map__50480 = p__50479;
var map__50480__$1 = ((((!((map__50480 == null)))?((((map__50480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50480.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50480):map__50480);
var content_type__$1 = cljs.core.get.call(null,map__50480__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__50482 = this;
var map__50482__$1 = ((((!((map__50482 == null)))?((((map__50482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50482.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50482):map__50482);
var content_type__$2 = cljs.core.get.call(null,map__50482__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__50482,map__50482__$1,content_type__$2,map__50480,map__50480__$1,content_type__$1){
return (function (p1__50472_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__44515__auto__ = p1__50472_SHARP_;
if(cljs.core.truth_(or__44515__auto__)){
return or__44515__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__50482,map__50482__$1,content_type__$2,map__50480,map__50480__$1,content_type__$1))
);
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__50484,xhrio){
var self__ = this;
var map__50485 = p__50484;
var map__50485__$1 = ((((!((map__50485 == null)))?((((map__50485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50485.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50485):map__50485);
var format = map__50485__$1;
var read__$1 = cljs.core.get.call(null,map__50485__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__50487 = this;
var map__50487__$1 = ((((!((map__50487 == null)))?((((map__50487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50487.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50487):map__50487);
var format__$1 = map__50487__$1;
var read__$2 = cljs.core.get.call(null,map__50487__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.interceptors.fail,status);
var G__50490 = status;
switch (G__50490) {
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
}catch (e50491){if((e50491 instanceof Object)){
var e = e50491;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e50491;

}
}
}
}catch (e50489){if((e50489 instanceof Object)){
var e = e50489;
var message = e.message;
return ajax.interceptors.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e50489;

}
}});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__45217__auto__,writer__45218__auto__,opts__45219__auto__){
var self__ = this;
var this__45217__auto____$1 = this;
var pr_pair__45220__auto__ = ((function (this__45217__auto____$1){
return (function (keyval__45221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__45218__auto__,cljs.core.pr_writer,""," ","",opts__45219__auto__,keyval__45221__auto__);
});})(this__45217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__45218__auto__,pr_pair__45220__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__45219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50473){
var self__ = this;
var G__50473__$1 = this;
return (new cljs.core.RecordIter((0),G__50473__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__45201__auto__){
var self__ = this;
var this__45201__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__45198__auto__){
var self__ = this;
var this__45198__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__45207__auto__){
var self__ = this;
var this__45207__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__45199__auto__){
var self__ = this;
var this__45199__auto____$1 = this;
var h__44971__auto__ = self__.__hash;
if(!((h__44971__auto__ == null))){
return h__44971__auto__;
} else {
var h__44971__auto____$1 = ((function (h__44971__auto__,this__45199__auto____$1){
return (function (coll__45200__auto__){
return (-2103965186 ^ cljs.core.hash_unordered_coll.call(null,coll__45200__auto__));
});})(h__44971__auto__,this__45199__auto____$1))
.call(null,this__45199__auto____$1);
self__.__hash = h__44971__auto____$1;

return h__44971__auto____$1;
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50475,other50476){
var self__ = this;
var this50475__$1 = this;
return (!((other50476 == null))) && ((this50475__$1.constructor === other50476.constructor)) && (cljs.core._EQ_.call(null,this50475__$1.read,other50476.read)) && (cljs.core._EQ_.call(null,this50475__$1.description,other50476.description)) && (cljs.core._EQ_.call(null,this50475__$1.content_type,other50476.content_type)) && (cljs.core._EQ_.call(null,this50475__$1.__extmap,other50476.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__45212__auto__,k__45213__auto__){
var self__ = this;
var this__45212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__45213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__45212__auto____$1),self__.__meta),k__45213__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__45213__auto__)),null));
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__45210__auto__,k__45211__auto__,G__50473){
var self__ = this;
var this__45210__auto____$1 = this;
var pred__50492 = cljs.core.keyword_identical_QMARK_;
var expr__50493 = k__45211__auto__;
if(cljs.core.truth_(pred__50492.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__50493))){
return (new ajax.interceptors.ResponseFormat(G__50473,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50492.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__50493))){
return (new ajax.interceptors.ResponseFormat(self__.read,G__50473,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50492.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__50493))){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__50473,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__45211__auto__,G__50473),null));
}
}
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__45215__auto__){
var self__ = this;
var this__45215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__45202__auto__,G__50473){
var self__ = this;
var this__45202__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__50473,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__45208__auto__,entry__45209__auto__){
var self__ = this;
var this__45208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__45209__auto__)){
return this__45208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__45209__auto__,(0)),cljs.core._nth.call(null,entry__45209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__45208__auto____$1,entry__45209__auto__);
}
});

ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.interceptors.ResponseFormat.cljs$lang$type = true;

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__45241__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__45241__auto__,writer__45242__auto__){
return cljs.core._write.call(null,writer__45242__auto__,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__50477){
return (new ajax.interceptors.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__50477),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__50477),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__50477),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__50477,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634))),null));
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
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__45203__auto__,k__45204__auto__){
var self__ = this;
var this__45203__auto____$1 = this;
return this__45203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__45204__auto__,null);
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__45205__auto__,k50498,else__45206__auto__){
var self__ = this;
var this__45205__auto____$1 = this;
var G__50502 = k50498;
switch (G__50502) {
default:
return cljs.core.get.call(null,self__.__extmap,k50498,else__45206__auto__);

}
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__50503){
var self__ = this;
var map__50504 = p__50503;
var map__50504__$1 = ((((!((map__50504 == null)))?((((map__50504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50504):map__50504);
var request = map__50504__$1;
var uri = cljs.core.get.call(null,map__50504__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__50504__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__50504__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__50504__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__50504__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__50506 = ajax.interceptors.get_request_format.call(null,format);
var map__50506__$1 = ((((!((map__50506 == null)))?((((map__50506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50506.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50506):map__50506);
var write = cljs.core.get.call(null,map__50506__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__50506__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.interceptors.apply_request_format.call(null,write,params):ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__44515__auto__ = headers;
if(cljs.core.truth_(or__44515__auto__)){
return or__44515__auto__;
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

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__45217__auto__,writer__45218__auto__,opts__45219__auto__){
var self__ = this;
var this__45217__auto____$1 = this;
var pr_pair__45220__auto__ = ((function (this__45217__auto____$1){
return (function (keyval__45221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__45218__auto__,cljs.core.pr_writer,""," ","",opts__45219__auto__,keyval__45221__auto__);
});})(this__45217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__45218__auto__,pr_pair__45220__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__45219__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50497){
var self__ = this;
var G__50497__$1 = this;
return (new cljs.core.RecordIter((0),G__50497__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__45201__auto__){
var self__ = this;
var this__45201__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__45198__auto__){
var self__ = this;
var this__45198__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__45207__auto__){
var self__ = this;
var this__45207__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__45199__auto__){
var self__ = this;
var this__45199__auto____$1 = this;
var h__44971__auto__ = self__.__hash;
if(!((h__44971__auto__ == null))){
return h__44971__auto__;
} else {
var h__44971__auto____$1 = ((function (h__44971__auto__,this__45199__auto____$1){
return (function (coll__45200__auto__){
return (1698259290 ^ cljs.core.hash_unordered_coll.call(null,coll__45200__auto__));
});})(h__44971__auto__,this__45199__auto____$1))
.call(null,this__45199__auto____$1);
self__.__hash = h__44971__auto____$1;

return h__44971__auto____$1;
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50499,other50500){
var self__ = this;
var this50499__$1 = this;
return (!((other50500 == null))) && ((this50499__$1.constructor === other50500.constructor)) && (cljs.core._EQ_.call(null,this50499__$1.__extmap,other50500.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__45212__auto__,k__45213__auto__){
var self__ = this;
var this__45212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__45213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__45212__auto____$1),self__.__meta),k__45213__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__45213__auto__)),null));
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__45210__auto__,k__45211__auto__,G__50497){
var self__ = this;
var this__45210__auto____$1 = this;
var pred__50508 = cljs.core.keyword_identical_QMARK_;
var expr__50509 = k__45211__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__45211__auto__,G__50497),null));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__45215__auto__){
var self__ = this;
var this__45215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__45202__auto__,G__50497){
var self__ = this;
var this__45202__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__50497,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__45208__auto__,entry__45209__auto__){
var self__ = this;
var this__45208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__45209__auto__)){
return this__45208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__45209__auto__,(0)),cljs.core._nth.call(null,entry__45209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__45208__auto____$1,entry__45209__auto__);
}
});

ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true;

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__45241__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__45241__auto__,writer__45242__auto__){
return cljs.core._write.call(null,writer__45242__auto__,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__50501){
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__50501)),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var G__50513 = arguments.length;
switch (G__50513) {
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

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__50514,uri){
var map__50515 = p__50514;
var map__50515__$1 = ((((!((map__50515 == null)))?((((map__50515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50515):map__50515);
var vec_strategy = cljs.core.get.call(null,map__50515__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__50515__$1,new cljs.core.Keyword(null,"params","params",710516235));

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__50517){
var map__50518 = p__50517;
var map__50518__$1 = ((((!((map__50518 == null)))?((((map__50518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50518.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50518):map__50518);
var vec_strategy = cljs.core.get.call(null,map__50518__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__50518__$1,new cljs.core.Keyword(null,"params","params",710516235));
return ((function (map__50518,map__50518__$1,vec_strategy,params){
return (function (uri){

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});
;})(map__50518,map__50518__$1,vec_strategy,params))
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
ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__45203__auto__,k__45204__auto__){
var self__ = this;
var this__45203__auto____$1 = this;
return this__45203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__45204__auto__,null);
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__45205__auto__,k50522,else__45206__auto__){
var self__ = this;
var this__45205__auto____$1 = this;
var G__50526 = k50522;
switch (G__50526) {
default:
return cljs.core.get.call(null,self__.__extmap,k50522,else__45206__auto__);

}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__50527){
var self__ = this;
var map__50528 = p__50527;
var map__50528__$1 = ((((!((map__50528 == null)))?((((map__50528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50528.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50528):map__50528);
var request = map__50528__$1;
var method = cljs.core.get.call(null,map__50528__$1,new cljs.core.Keyword(null,"method","method",55703592));
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

ajax.interceptors.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__45217__auto__,writer__45218__auto__,opts__45219__auto__){
var self__ = this;
var this__45217__auto____$1 = this;
var pr_pair__45220__auto__ = ((function (this__45217__auto____$1){
return (function (keyval__45221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__45218__auto__,cljs.core.pr_writer,""," ","",opts__45219__auto__,keyval__45221__auto__);
});})(this__45217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__45218__auto__,pr_pair__45220__auto__,"#ajax.interceptors.ProcessGet{",", ","}",opts__45219__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50521){
var self__ = this;
var G__50521__$1 = this;
return (new cljs.core.RecordIter((0),G__50521__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__45201__auto__){
var self__ = this;
var this__45201__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__45198__auto__){
var self__ = this;
var this__45198__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__45207__auto__){
var self__ = this;
var this__45207__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__45199__auto__){
var self__ = this;
var this__45199__auto____$1 = this;
var h__44971__auto__ = self__.__hash;
if(!((h__44971__auto__ == null))){
return h__44971__auto__;
} else {
var h__44971__auto____$1 = ((function (h__44971__auto__,this__45199__auto____$1){
return (function (coll__45200__auto__){
return (1135316249 ^ cljs.core.hash_unordered_coll.call(null,coll__45200__auto__));
});})(h__44971__auto__,this__45199__auto____$1))
.call(null,this__45199__auto____$1);
self__.__hash = h__44971__auto____$1;

return h__44971__auto____$1;
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50523,other50524){
var self__ = this;
var this50523__$1 = this;
return (!((other50524 == null))) && ((this50523__$1.constructor === other50524.constructor)) && (cljs.core._EQ_.call(null,this50523__$1.__extmap,other50524.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__45212__auto__,k__45213__auto__){
var self__ = this;
var this__45212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__45213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__45212__auto____$1),self__.__meta),k__45213__auto__);
} else {
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__45213__auto__)),null));
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__45210__auto__,k__45211__auto__,G__50521){
var self__ = this;
var this__45210__auto____$1 = this;
var pred__50530 = cljs.core.keyword_identical_QMARK_;
var expr__50531 = k__45211__auto__;
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__45211__auto__,G__50521),null));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__45215__auto__){
var self__ = this;
var this__45215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__45202__auto__,G__50521){
var self__ = this;
var this__45202__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(G__50521,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__45208__auto__,entry__45209__auto__){
var self__ = this;
var this__45208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__45209__auto__)){
return this__45208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__45209__auto__,(0)),cljs.core._nth.call(null,entry__45209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__45208__auto____$1,entry__45209__auto__);
}
});

ajax.interceptors.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ProcessGet.cljs$lang$type = true;

ajax.interceptors.ProcessGet.cljs$lang$ctorPrSeq = (function (this__45241__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.ProcessGet.cljs$lang$ctorPrWriter = (function (this__45241__auto__,writer__45242__auto__){
return cljs.core._write.call(null,writer__45242__auto__,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.__GT_ProcessGet = (function ajax$interceptors$__GT_ProcessGet(){
return (new ajax.interceptors.ProcessGet(null,null,null));
});

ajax.interceptors.map__GT_ProcessGet = (function ajax$interceptors$map__GT_ProcessGet(G__50525){
return (new ajax.interceptors.ProcessGet(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__50525)),null));
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
ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__45203__auto__,k__45204__auto__){
var self__ = this;
var this__45203__auto____$1 = this;
return this__45203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__45204__auto__,null);
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__45205__auto__,k50535,else__45206__auto__){
var self__ = this;
var this__45205__auto____$1 = this;
var G__50539 = k50535;
switch (G__50539) {
default:
return cljs.core.get.call(null,self__.__extmap,k50535,else__45206__auto__);

}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__50540){
var self__ = this;
var map__50541 = p__50540;
var map__50541__$1 = ((((!((map__50541 == null)))?((((map__50541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50541.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50541):map__50541);
var request = map__50541__$1;
var body = cljs.core.get.call(null,map__50541__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
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

ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__45217__auto__,writer__45218__auto__,opts__45219__auto__){
var self__ = this;
var this__45217__auto____$1 = this;
var pr_pair__45220__auto__ = ((function (this__45217__auto____$1){
return (function (keyval__45221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__45218__auto__,cljs.core.pr_writer,""," ","",opts__45219__auto__,keyval__45221__auto__);
});})(this__45217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__45218__auto__,pr_pair__45220__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__45219__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50534){
var self__ = this;
var G__50534__$1 = this;
return (new cljs.core.RecordIter((0),G__50534__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__45201__auto__){
var self__ = this;
var this__45201__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__45198__auto__){
var self__ = this;
var this__45198__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__45207__auto__){
var self__ = this;
var this__45207__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__45199__auto__){
var self__ = this;
var this__45199__auto____$1 = this;
var h__44971__auto__ = self__.__hash;
if(!((h__44971__auto__ == null))){
return h__44971__auto__;
} else {
var h__44971__auto____$1 = ((function (h__44971__auto__,this__45199__auto____$1){
return (function (coll__45200__auto__){
return (-1077152635 ^ cljs.core.hash_unordered_coll.call(null,coll__45200__auto__));
});})(h__44971__auto__,this__45199__auto____$1))
.call(null,this__45199__auto____$1);
self__.__hash = h__44971__auto____$1;

return h__44971__auto____$1;
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50536,other50537){
var self__ = this;
var this50536__$1 = this;
return (!((other50537 == null))) && ((this50536__$1.constructor === other50537.constructor)) && (cljs.core._EQ_.call(null,this50536__$1.__extmap,other50537.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__45212__auto__,k__45213__auto__){
var self__ = this;
var this__45212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__45213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__45212__auto____$1),self__.__meta),k__45213__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__45213__auto__)),null));
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__45210__auto__,k__45211__auto__,G__50534){
var self__ = this;
var this__45210__auto____$1 = this;
var pred__50543 = cljs.core.keyword_identical_QMARK_;
var expr__50544 = k__45211__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__45211__auto__,G__50534),null));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__45215__auto__){
var self__ = this;
var this__45215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__45202__auto__,G__50534){
var self__ = this;
var this__45202__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__50534,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__45208__auto__,entry__45209__auto__){
var self__ = this;
var this__45208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__45209__auto__)){
return this__45208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__45209__auto__,(0)),cljs.core._nth.call(null,entry__45209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__45208__auto____$1,entry__45209__auto__);
}
});

ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.DirectSubmission.cljs$lang$type = true;

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__45241__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__45241__auto__,writer__45242__auto__){
return cljs.core._write.call(null,writer__45242__auto__,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__50538){
return (new ajax.interceptors.DirectSubmission(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__50538)),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessGet(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__50547){
var map__50548 = p__50547;
var map__50548__$1 = ((((!((map__50548 == null)))?((((map__50548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50548.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50548):map__50548);
var opts = map__50548__$1;
var response_format = cljs.core.get.call(null,map__50548__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
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

// Compiled by ClojureScript 1.9.908 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.url');
goog.require('ajax.json');
goog.require('ajax.transit');
goog.require('ajax.ring');
goog.require('ajax.formats');
goog.require('ajax.util');
goog.require('ajax.interceptors');
goog.require('ajax.simple');
goog.require('ajax.easy');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
goog.require('ajax.xml_http_request');
ajax.core.to_interceptor = ajax.interceptors.to_interceptor;
ajax.core.abort = (function ajax$core$abort(this$){

return ajax.protocols._abort.call(null,this$);
});
ajax.core.json_request_format = ajax.json.json_request_format;
ajax.core.json_response_format = ajax.json.json_response_format;
ajax.core.transit_request_format = ajax.transit.transit_request_format;
ajax.core.transit_response_format = ajax.transit.transit_response_format;
ajax.core.ring_response_format = ajax.ring.ring_response_format;
ajax.core.url_request_format = ajax.url.url_request_format;
ajax.core.text_request_format = ajax.formats.text_request_format;
ajax.core.text_response_format = ajax.formats.text_response_format;
ajax.core.raw_response_format = ajax.formats.raw_response_format;
ajax.core.default_interceptors = ajax.simple.default_interceptors;
ajax.core.ajax_request = ajax.simple.ajax_request;
ajax.core.default_formats = ajax.easy.default_formats;
ajax.core.detect_response_format = ajax.easy.detect_response_format;
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__44545__auto__ = [];
var len__44538__auto___46554 = arguments.length;
var i__44539__auto___46555 = (0);
while(true){
if((i__44539__auto___46555 < len__44538__auto___46554)){
args__44545__auto__.push((arguments[i__44539__auto___46555]));

var G__46556 = (i__44539__auto___46555 + (1));
i__44539__auto___46555 = G__46556;
continue;
} else {
}
break;
}

var argseq__44546__auto__ = ((((1) < args__44545__auto__.length))?(new cljs.core.IndexedSeq(args__44545__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44546__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__45836__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"GET",(((f__45836__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__45836__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq46552){
var G__46553 = cljs.core.first.call(null,seq46552);
var seq46552__$1 = cljs.core.next.call(null,seq46552);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__46553,seq46552__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__44545__auto__ = [];
var len__44538__auto___46559 = arguments.length;
var i__44539__auto___46560 = (0);
while(true){
if((i__44539__auto___46560 < len__44538__auto___46559)){
args__44545__auto__.push((arguments[i__44539__auto___46560]));

var G__46561 = (i__44539__auto___46560 + (1));
i__44539__auto___46560 = G__46561;
continue;
} else {
}
break;
}

var argseq__44546__auto__ = ((((1) < args__44545__auto__.length))?(new cljs.core.IndexedSeq(args__44545__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44546__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__45836__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"HEAD",(((f__45836__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__45836__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq46557){
var G__46558 = cljs.core.first.call(null,seq46557);
var seq46557__$1 = cljs.core.next.call(null,seq46557);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__46558,seq46557__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__44545__auto__ = [];
var len__44538__auto___46564 = arguments.length;
var i__44539__auto___46565 = (0);
while(true){
if((i__44539__auto___46565 < len__44538__auto___46564)){
args__44545__auto__.push((arguments[i__44539__auto___46565]));

var G__46566 = (i__44539__auto___46565 + (1));
i__44539__auto___46565 = G__46566;
continue;
} else {
}
break;
}

var argseq__44546__auto__ = ((((1) < args__44545__auto__.length))?(new cljs.core.IndexedSeq(args__44545__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44546__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__45836__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"POST",(((f__45836__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__45836__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq46562){
var G__46563 = cljs.core.first.call(null,seq46562);
var seq46562__$1 = cljs.core.next.call(null,seq46562);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__46563,seq46562__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__44545__auto__ = [];
var len__44538__auto___46569 = arguments.length;
var i__44539__auto___46570 = (0);
while(true){
if((i__44539__auto___46570 < len__44538__auto___46569)){
args__44545__auto__.push((arguments[i__44539__auto___46570]));

var G__46571 = (i__44539__auto___46570 + (1));
i__44539__auto___46570 = G__46571;
continue;
} else {
}
break;
}

var argseq__44546__auto__ = ((((1) < args__44545__auto__.length))?(new cljs.core.IndexedSeq(args__44545__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44546__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__45836__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PUT",(((f__45836__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__45836__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq46567){
var G__46568 = cljs.core.first.call(null,seq46567);
var seq46567__$1 = cljs.core.next.call(null,seq46567);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__46568,seq46567__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__44545__auto__ = [];
var len__44538__auto___46574 = arguments.length;
var i__44539__auto___46575 = (0);
while(true){
if((i__44539__auto___46575 < len__44538__auto___46574)){
args__44545__auto__.push((arguments[i__44539__auto___46575]));

var G__46576 = (i__44539__auto___46575 + (1));
i__44539__auto___46575 = G__46576;
continue;
} else {
}
break;
}

var argseq__44546__auto__ = ((((1) < args__44545__auto__.length))?(new cljs.core.IndexedSeq(args__44545__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44546__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__45836__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"DELETE",(((f__45836__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__45836__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq46572){
var G__46573 = cljs.core.first.call(null,seq46572);
var seq46572__$1 = cljs.core.next.call(null,seq46572);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__46573,seq46572__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__44545__auto__ = [];
var len__44538__auto___46579 = arguments.length;
var i__44539__auto___46580 = (0);
while(true){
if((i__44539__auto___46580 < len__44538__auto___46579)){
args__44545__auto__.push((arguments[i__44539__auto___46580]));

var G__46581 = (i__44539__auto___46580 + (1));
i__44539__auto___46580 = G__46581;
continue;
} else {
}
break;
}

var argseq__44546__auto__ = ((((1) < args__44545__auto__.length))?(new cljs.core.IndexedSeq(args__44545__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44546__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__45836__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"OPTIONS",(((f__45836__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__45836__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq46577){
var G__46578 = cljs.core.first.call(null,seq46577);
var seq46577__$1 = cljs.core.next.call(null,seq46577);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__46578,seq46577__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__44545__auto__ = [];
var len__44538__auto___46584 = arguments.length;
var i__44539__auto___46585 = (0);
while(true){
if((i__44539__auto___46585 < len__44538__auto___46584)){
args__44545__auto__.push((arguments[i__44539__auto___46585]));

var G__46586 = (i__44539__auto___46585 + (1));
i__44539__auto___46585 = G__46586;
continue;
} else {
}
break;
}

var argseq__44546__auto__ = ((((1) < args__44545__auto__.length))?(new cljs.core.IndexedSeq(args__44545__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44546__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__45836__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"TRACE",(((f__45836__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__45836__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq46582){
var G__46583 = cljs.core.first.call(null,seq46582);
var seq46582__$1 = cljs.core.next.call(null,seq46582);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__46583,seq46582__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__44545__auto__ = [];
var len__44538__auto___46589 = arguments.length;
var i__44539__auto___46590 = (0);
while(true){
if((i__44539__auto___46590 < len__44538__auto___46589)){
args__44545__auto__.push((arguments[i__44539__auto___46590]));

var G__46591 = (i__44539__auto___46590 + (1));
i__44539__auto___46590 = G__46591;
continue;
} else {
}
break;
}

var argseq__44546__auto__ = ((((1) < args__44545__auto__.length))?(new cljs.core.IndexedSeq(args__44545__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44546__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__45836__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PATCH",(((f__45836__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__45836__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq46587){
var G__46588 = cljs.core.first.call(null,seq46587);
var seq46587__$1 = cljs.core.next.call(null,seq46587);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__46588,seq46587__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PURGE = (function ajax$core$PURGE(var_args){
var args__44545__auto__ = [];
var len__44538__auto___46594 = arguments.length;
var i__44539__auto___46595 = (0);
while(true){
if((i__44539__auto___46595 < len__44538__auto___46594)){
args__44545__auto__.push((arguments[i__44539__auto___46595]));

var G__46596 = (i__44539__auto___46595 + (1));
i__44539__auto___46595 = G__46596;
continue;
} else {
}
break;
}

var argseq__44546__auto__ = ((((1) < args__44545__auto__.length))?(new cljs.core.IndexedSeq(args__44545__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44546__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__45836__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PURGE",(((f__45836__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__45836__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq46592){
var G__46593 = cljs.core.first.call(null,seq46592);
var seq46592__$1 = cljs.core.next.call(null,seq46592);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__46593,seq46592__$1);
});


//# sourceMappingURL=core.js.map

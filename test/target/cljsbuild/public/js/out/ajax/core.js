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
var args__45799__auto__ = [];
var len__45792__auto___50823 = arguments.length;
var i__45793__auto___50824 = (0);
while(true){
if((i__45793__auto___50824 < len__45792__auto___50823)){
args__45799__auto__.push((arguments[i__45793__auto___50824]));

var G__50825 = (i__45793__auto___50824 + (1));
i__45793__auto___50824 = G__50825;
continue;
} else {
}
break;
}

var argseq__45800__auto__ = ((((1) < args__45799__auto__.length))?(new cljs.core.IndexedSeq(args__45799__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45800__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__50434__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"GET",(((f__50434__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__50434__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq50821){
var G__50822 = cljs.core.first.call(null,seq50821);
var seq50821__$1 = cljs.core.next.call(null,seq50821);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__50822,seq50821__$1);
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
var args__45799__auto__ = [];
var len__45792__auto___50828 = arguments.length;
var i__45793__auto___50829 = (0);
while(true){
if((i__45793__auto___50829 < len__45792__auto___50828)){
args__45799__auto__.push((arguments[i__45793__auto___50829]));

var G__50830 = (i__45793__auto___50829 + (1));
i__45793__auto___50829 = G__50830;
continue;
} else {
}
break;
}

var argseq__45800__auto__ = ((((1) < args__45799__auto__.length))?(new cljs.core.IndexedSeq(args__45799__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45800__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__50434__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"HEAD",(((f__50434__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__50434__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq50826){
var G__50827 = cljs.core.first.call(null,seq50826);
var seq50826__$1 = cljs.core.next.call(null,seq50826);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__50827,seq50826__$1);
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
var args__45799__auto__ = [];
var len__45792__auto___50833 = arguments.length;
var i__45793__auto___50834 = (0);
while(true){
if((i__45793__auto___50834 < len__45792__auto___50833)){
args__45799__auto__.push((arguments[i__45793__auto___50834]));

var G__50835 = (i__45793__auto___50834 + (1));
i__45793__auto___50834 = G__50835;
continue;
} else {
}
break;
}

var argseq__45800__auto__ = ((((1) < args__45799__auto__.length))?(new cljs.core.IndexedSeq(args__45799__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45800__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__50434__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"POST",(((f__50434__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__50434__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq50831){
var G__50832 = cljs.core.first.call(null,seq50831);
var seq50831__$1 = cljs.core.next.call(null,seq50831);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__50832,seq50831__$1);
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
var args__45799__auto__ = [];
var len__45792__auto___50838 = arguments.length;
var i__45793__auto___50839 = (0);
while(true){
if((i__45793__auto___50839 < len__45792__auto___50838)){
args__45799__auto__.push((arguments[i__45793__auto___50839]));

var G__50840 = (i__45793__auto___50839 + (1));
i__45793__auto___50839 = G__50840;
continue;
} else {
}
break;
}

var argseq__45800__auto__ = ((((1) < args__45799__auto__.length))?(new cljs.core.IndexedSeq(args__45799__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45800__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__50434__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PUT",(((f__50434__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__50434__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq50836){
var G__50837 = cljs.core.first.call(null,seq50836);
var seq50836__$1 = cljs.core.next.call(null,seq50836);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__50837,seq50836__$1);
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
var args__45799__auto__ = [];
var len__45792__auto___50843 = arguments.length;
var i__45793__auto___50844 = (0);
while(true){
if((i__45793__auto___50844 < len__45792__auto___50843)){
args__45799__auto__.push((arguments[i__45793__auto___50844]));

var G__50845 = (i__45793__auto___50844 + (1));
i__45793__auto___50844 = G__50845;
continue;
} else {
}
break;
}

var argseq__45800__auto__ = ((((1) < args__45799__auto__.length))?(new cljs.core.IndexedSeq(args__45799__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45800__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__50434__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"DELETE",(((f__50434__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__50434__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq50841){
var G__50842 = cljs.core.first.call(null,seq50841);
var seq50841__$1 = cljs.core.next.call(null,seq50841);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__50842,seq50841__$1);
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
var args__45799__auto__ = [];
var len__45792__auto___50848 = arguments.length;
var i__45793__auto___50849 = (0);
while(true){
if((i__45793__auto___50849 < len__45792__auto___50848)){
args__45799__auto__.push((arguments[i__45793__auto___50849]));

var G__50850 = (i__45793__auto___50849 + (1));
i__45793__auto___50849 = G__50850;
continue;
} else {
}
break;
}

var argseq__45800__auto__ = ((((1) < args__45799__auto__.length))?(new cljs.core.IndexedSeq(args__45799__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45800__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__50434__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"OPTIONS",(((f__50434__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__50434__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq50846){
var G__50847 = cljs.core.first.call(null,seq50846);
var seq50846__$1 = cljs.core.next.call(null,seq50846);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__50847,seq50846__$1);
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
var args__45799__auto__ = [];
var len__45792__auto___50853 = arguments.length;
var i__45793__auto___50854 = (0);
while(true){
if((i__45793__auto___50854 < len__45792__auto___50853)){
args__45799__auto__.push((arguments[i__45793__auto___50854]));

var G__50855 = (i__45793__auto___50854 + (1));
i__45793__auto___50854 = G__50855;
continue;
} else {
}
break;
}

var argseq__45800__auto__ = ((((1) < args__45799__auto__.length))?(new cljs.core.IndexedSeq(args__45799__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45800__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__50434__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"TRACE",(((f__50434__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__50434__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq50851){
var G__50852 = cljs.core.first.call(null,seq50851);
var seq50851__$1 = cljs.core.next.call(null,seq50851);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__50852,seq50851__$1);
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
var args__45799__auto__ = [];
var len__45792__auto___50858 = arguments.length;
var i__45793__auto___50859 = (0);
while(true){
if((i__45793__auto___50859 < len__45792__auto___50858)){
args__45799__auto__.push((arguments[i__45793__auto___50859]));

var G__50860 = (i__45793__auto___50859 + (1));
i__45793__auto___50859 = G__50860;
continue;
} else {
}
break;
}

var argseq__45800__auto__ = ((((1) < args__45799__auto__.length))?(new cljs.core.IndexedSeq(args__45799__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45800__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__50434__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PATCH",(((f__50434__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__50434__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq50856){
var G__50857 = cljs.core.first.call(null,seq50856);
var seq50856__$1 = cljs.core.next.call(null,seq50856);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__50857,seq50856__$1);
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
var args__45799__auto__ = [];
var len__45792__auto___50863 = arguments.length;
var i__45793__auto___50864 = (0);
while(true){
if((i__45793__auto___50864 < len__45792__auto___50863)){
args__45799__auto__.push((arguments[i__45793__auto___50864]));

var G__50865 = (i__45793__auto___50864 + (1));
i__45793__auto___50864 = G__50865;
continue;
} else {
}
break;
}

var argseq__45800__auto__ = ((((1) < args__45799__auto__.length))?(new cljs.core.IndexedSeq(args__45799__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45800__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__50434__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PURGE",(((f__50434__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__50434__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq50861){
var G__50862 = cljs.core.first.call(null,seq50861);
var seq50861__$1 = cljs.core.next.call(null,seq50861);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__50862,seq50861__$1);
});


//# sourceMappingURL=core.js.map

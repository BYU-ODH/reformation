// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
reagent.dom.global$module$react_dom = goog.global.ReactDOM;
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode.call(null,container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_51135 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return reagent.dom.global$module$react_dom.render.call(null,comp.call(null),container,((function (_STAR_always_update_STAR_51135){
return (function (){
var _STAR_always_update_STAR_51136 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_51136;
}});})(_STAR_always_update_STAR_51135))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_51135;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__51138 = arguments.length;
switch (G__51138) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode.call(null,this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__51140_51144 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__51141_51145 = null;
var count__51142_51146 = (0);
var i__51143_51147 = (0);
while(true){
if((i__51143_51147 < count__51142_51146)){
var v_51148 = cljs.core._nth.call(null,chunk__51141_51145,i__51143_51147);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_51148);

var G__51149 = seq__51140_51144;
var G__51150 = chunk__51141_51145;
var G__51151 = count__51142_51146;
var G__51152 = (i__51143_51147 + (1));
seq__51140_51144 = G__51149;
chunk__51141_51145 = G__51150;
count__51142_51146 = G__51151;
i__51143_51147 = G__51152;
continue;
} else {
var temp__5278__auto___51153 = cljs.core.seq.call(null,seq__51140_51144);
if(temp__5278__auto___51153){
var seq__51140_51154__$1 = temp__5278__auto___51153;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51140_51154__$1)){
var c__45446__auto___51155 = cljs.core.chunk_first.call(null,seq__51140_51154__$1);
var G__51156 = cljs.core.chunk_rest.call(null,seq__51140_51154__$1);
var G__51157 = c__45446__auto___51155;
var G__51158 = cljs.core.count.call(null,c__45446__auto___51155);
var G__51159 = (0);
seq__51140_51144 = G__51156;
chunk__51141_51145 = G__51157;
count__51142_51146 = G__51158;
i__51143_51147 = G__51159;
continue;
} else {
var v_51160 = cljs.core.first.call(null,seq__51140_51154__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_51160);

var G__51161 = cljs.core.next.call(null,seq__51140_51154__$1);
var G__51162 = null;
var G__51163 = (0);
var G__51164 = (0);
seq__51140_51144 = G__51161;
chunk__51141_51145 = G__51162;
count__51142_51146 = G__51163;
i__51143_51147 = G__51164;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map

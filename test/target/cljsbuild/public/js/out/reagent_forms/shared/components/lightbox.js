// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent_forms.shared.components.lightbox');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof reagent_forms.shared.components.lightbox.LIGHTBOX_CONTENTS !== 'undefined'){
} else {
reagent_forms.shared.components.lightbox.LIGHTBOX_CONTENTS = reagent.core.atom.call(null,null);
}
reagent_forms.shared.components.lightbox.clear_lightbox = (function reagent_forms$shared$components$lightbox$clear_lightbox(){
return cljs.core.reset_BANG_.call(null,reagent_forms.shared.components.lightbox.LIGHTBOX_CONTENTS,null);
});
/**
 * A lightbox that fills the screen and shades the background with its contents. The lightbox is planted on the page at start-time, waiting to be filled. This function is not intended to directly render -- it populates the already-planted LIGHTBOX-CONTENTS
 */
reagent_forms.shared.components.lightbox.lightbox = (function reagent_forms$shared$components$lightbox$lightbox(var_args){
var G__56690 = arguments.length;
switch (G__56690) {
case 0:
return reagent_forms.shared.components.lightbox.lightbox.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return reagent_forms.shared.components.lightbox.lightbox.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent_forms.shared.components.lightbox.lightbox.cljs$core$IFn$_invoke$arity$0 = (function (){
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,reagent_forms.shared.components.lightbox.LIGHTBOX_CONTENTS)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.global-lightbox","div.global-lightbox",1114106688),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.lightbox-contents","div.lightbox-contents",-1402162441),cljs.core.deref.call(null,reagent_forms.shared.components.lightbox.LIGHTBOX_CONTENTS)], null)], null);
} else {
return null;
}
});

reagent_forms.shared.components.lightbox.lightbox.cljs$core$IFn$_invoke$arity$1 = (function (contents){
cljs.core.reset_BANG_.call(null,reagent_forms.shared.components.lightbox.LIGHTBOX_CONTENTS,contents);

return null;
});

reagent_forms.shared.components.lightbox.lightbox.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=lightbox.js.map

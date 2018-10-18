// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent_forms.shared.auth');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('ajax.core');
goog.require('accountant.core');
goog.require('reagent_forms.routes');
goog.require('reagent_forms.shared');
if(typeof reagent_forms.shared.auth.USER !== 'undefined'){
} else {
reagent_forms.shared.auth.USER = reagent.core.atom.call(null,null);
}
/**
 * The USER is supplied by the back-end, which puts it in the /USER js variable
 */
reagent_forms.shared.auth.init_user = (function reagent_forms$shared$auth$init_user(){
return cljs.core.reset_BANG_.call(null,reagent_forms.shared.auth.USER,cljs.core.js__GT_clj.call(null,USER,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
reagent_forms.shared.auth.get_username = (function reagent_forms$shared$auth$get_username(){
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent_forms.shared.auth.USER),new cljs.core.Keyword(null,"username","username",1605666410));
});
reagent_forms.shared.auth.get_user_id = (function reagent_forms$shared$auth$get_user_id(){
return parseInt(cljs.core.get.call(null,cljs.core.deref.call(null,reagent_forms.shared.auth.USER),new cljs.core.Keyword(null,"reagent-forms-user-id","reagent-forms-user-id",1793227132)));
});
reagent_forms.shared.auth.get_name = (function reagent_forms$shared$auth$get_name(){
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent_forms.shared.auth.USER),new cljs.core.Keyword(null,"preferred-name","preferred-name",16446050));
});
reagent_forms.shared.auth.get_full_name = (function reagent_forms$shared$auth$get_full_name(){
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent_forms.shared.auth.USER),new cljs.core.Keyword(null,"preferred-name","preferred-name",16446050));
});
reagent_forms.shared.auth.get_email = (function reagent_forms$shared$auth$get_email(umap){
var or__43261__auto__ = cljs.core.get.call(null,umap,new cljs.core.Keyword(null,"work-email","work-email",-700149872));
if(cljs.core.truth_(or__43261__auto__)){
return or__43261__auto__;
} else {
return cljs.core.get.call(null,umap,new cljs.core.Keyword(null,"other-email","other-email",-704246882));
}
});
reagent_forms.shared.auth.get_user_email = (function reagent_forms$shared$auth$get_user_email(){
return reagent_forms.shared.auth.get_email.call(null,cljs.core.deref.call(null,reagent_forms.shared.auth.USER));
});
reagent_forms.shared.auth.deauth_BANG_ = (function reagent_forms$shared$auth$deauth_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent_forms.shared.auth.USER,null);
});
reagent_forms.shared.auth.signed_in_QMARK_ = (function reagent_forms$shared$auth$signed_in_QMARK_(){
return cljs.core.not_empty.call(null,reagent_forms.shared.auth.get_username.call(null));
});
reagent_forms.shared.auth._request_admin_QMARK_ = (function reagent_forms$shared$auth$_request_admin_QMARK_(){
var url = "/admin/is-admin";
var p = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),reagent_forms.shared.auth.get_user_id.call(null)], null);
var h = ((function (url,p){
return (function (r){
return cljs.core.swap_BANG_.call(null,reagent_forms.shared.auth.USER,cljs.core.assoc,new cljs.core.Keyword(null,"admin?","admin?",-366877557),cljs.core.first.call(null,r));
});})(url,p))
;
var eh = ((function (url,p,h){
return (function (e){
console.log("Error checking if admin");

return console.log(e);
});})(url,p,h))
;
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),h,new cljs.core.Keyword(null,"params","params",710516235),p,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),eh], null));
});
reagent_forms.shared.auth.admin_QMARK_ = (function reagent_forms$shared$auth$admin_QMARK_(){
var admin_QMARK_ = new cljs.core.Keyword(null,"admin?","admin?",-366877557).cljs$core$IFn$_invoke$arity$2(cljs.core.deref.call(null,reagent_forms.shared.auth.USER),new cljs.core.Keyword(null,"none","none",1333468478));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"none","none",1333468478),admin_QMARK_)){
return reagent_forms.shared.auth._request_admin_QMARK_.call(null);
} else {
return admin_QMARK_;
}
});
reagent_forms.shared.auth.authenticate_BANG_ = (function reagent_forms$shared$auth$authenticate_BANG_(authmap){
var url = "/auth";
var h = ((function (url){
return (function (r){
cljs.core.reset_BANG_.call(null,reagent_forms.shared.auth.USER,cljs.core.first.call(null,r));

return accountant.core.navigate_BANG_.call(null,reagent_forms.routes.home.call(null));
});})(url))
;
var eh = ((function (url,h){
return (function (e){
return reagent_forms.shared.auth.deauth_BANG_.call(null);
});})(url,h))
;
cljs.core.reset_BANG_.call(null,reagent_forms.shared.auth.USER,null);

ajax.core.POST.call(null,url,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),h,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),eh,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.select_keys.call(null,authmap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-email","user-email",2126479881),new cljs.core.Keyword(null,"password","password",417022471)], null))], null));

return reagent_forms.shared.auth.USER;
});
reagent_forms.shared.auth.submit_signin = (function reagent_forms$shared$auth$submit_signin(e){
e.preventDefault();

return reagent_forms.shared.auth.authenticate_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user-email","user-email",2126479881),reagent_forms.shared.get_value_by_id.call(null,"user-email"),new cljs.core.Keyword(null,"password","password",417022471),reagent_forms.shared.get_value_by_id.call(null,"password")], null));
});
reagent_forms.shared.auth.signin_modal = (function reagent_forms$shared$auth$signin_modal(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal.fade","div.modal.fade",-327881909),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"signin-modal",new cljs.core.Keyword(null,"role","role",-736691072),"dialog"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-dialog","div.modal-dialog",-237012986),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-header","div.modal-header",-799180845),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null),"\u00D7"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.modal-title","h4.modal-title",-572415885),"Sign In"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-body","div.modal-body",-2141892968),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.form-signin","form.form-signin",-655342808),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"user-email",new cljs.core.Keyword(null,"id","id",-1388402092),"user-email",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Email Address",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"name","name",1843675177),"password",new cljs.core.Keyword(null,"id","id",-1388402092),"password",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Password",new cljs.core.Keyword(null,"required","required",1807647006),true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-footer","div.modal-footer",1309572241),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-success","button.btn.btn-success",574341715),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),reagent_forms.shared.auth.submit_signin,new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null),"Submit"], null)], null)], null)], null)], null)], null)], null);
});
reagent_forms.shared.auth.signin_button = (function reagent_forms$shared$auth$signin_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item.signin","li.nav-item.signin",1939622503),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"modal",new cljs.core.Keyword(null,"data-target","data-target",-113904678),"#signin-modal"], null),"Sign In"], null)], null);
});
reagent_forms.shared.auth.admin_only = (function reagent_forms$shared$auth$admin_only(f){
if(cljs.core.truth_(reagent_forms.shared.auth.admin_QMARK_.call(null))){
return f;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.forbidden","div.forbidden",-1892101522),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Not Authorized"], null)], null);
}
});
reagent_forms.shared.auth.user_can_view_application_QMARK_ = (function reagent_forms$shared$auth$user_can_view_application_QMARK_(user,app){
return true;
});
/**
 * Get the minimal map containing user information
 */
reagent_forms.shared.auth.get_usermap = (function reagent_forms$shared$auth$get_usermap(){
return cljs.core.deref.call(null,reagent_forms.shared.auth.USER);
});
reagent_forms.shared.auth.has_password_QMARK_ = (function reagent_forms$shared$auth$has_password_QMARK_(){
return new cljs.core.Keyword(null,"has-pass?","has-pass?",1567299908).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reagent_forms.shared.auth.USER));
});
/**
 * string-format a given role, such as ASSOCIATE-DEAN
 */
reagent_forms.shared.auth.format_role = (function reagent_forms$shared$auth$format_role(role){
var split = (function reagent_forms$shared$auth$format_role_$_split(x){
return clojure.string.split.call(null,x,/-/);
});
var cap = (function reagent_forms$shared$auth$format_role_$_cap(xs){
return cljs.core.map.call(null,clojure.string.capitalize,xs);
});
var rejoin = (function reagent_forms$shared$auth$format_role_$_rejoin(xs){
return clojure.string.join.call(null," ",xs);
});
return rejoin.call(null,cap.call(null,split.call(null,role)));
});
reagent_forms.shared.auth.is_applicant_QMARK_ = (function reagent_forms$shared$auth$is_applicant_QMARK_(application){
return cljs.core._EQ_.call(null,reagent_forms.shared.auth.get_username.call(null),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(application))));
});
reagent_forms.shared.auth.can_edit_QMARK_ = (function reagent_forms$shared$auth$can_edit_QMARK_(form){
return reagent_forms.shared.auth.is_applicant_QMARK_.call(null,form);
});

//# sourceMappingURL=auth.js.map

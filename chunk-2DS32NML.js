import{c as S}from"./chunk-7YOZCCHK.js";import{a as b,b as v,c as L,d as E,e as I,f as W,j as x,k as T}from"./chunk-ENJO6PHD.js";import{Ba as e,Ca as n,Fa as w,Ga as C,Ha as r,Ja as M,La as l,Ma as d,Na as p,Pa as _,T as g,gb as N,hb as y,oa as s,pa as c,xa as f,za as h}from"./chunk-2LVG2L7T.js";function D(a,m){if(a&1&&(e(0,"div",9),r(1),n()),a&2){let i=C();s(),M(" ",i.errorMessage," ")}}var q=class a{constructor(m){this.router=m;this.userName="",this.password="",this.errorMessage=""}userName;password;errorMessage;login(){if(!this.userName||!this.password){this.errorMessage="Both username and password are required.";return}localStorage.setItem("user",this.userName),this.router.navigate(["/dashboard"])}static \u0275fac=function(i){return new(i||a)(c(S))};static \u0275cmp=g({type:a,selectors:[["app-login"]],standalone:!0,features:[_],decls:15,vars:3,consts:[[1,"login-container"],[3,"ngSubmit"],[1,"form-group"],["for","username"],["type","text","id","userName","placeholder","Enter your username","name","userName","required","",3,"ngModelChange","ngModel"],["for","password"],["type","password","id","password","placeholder","Enter your password","name","password","required","",3,"ngModelChange","ngModel"],["class","error-message",4,"ngIf"],["type","submit",1,"login-button"],[1,"error-message"]],template:function(i,t){i&1&&(e(0,"div",0)(1,"h1"),r(2,"Login"),n(),e(3,"form",1),w("ngSubmit",function(){return t.login()}),e(4,"div",2)(5,"label",3),r(6,"Username"),n(),e(7,"input",4),p("ngModelChange",function(o){return d(t.userName,o)||(t.userName=o),o}),n()(),e(8,"div",2)(9,"label",5),r(10,"Password"),n(),e(11,"input",6),p("ngModelChange",function(o){return d(t.password,o)||(t.password=o),o}),n()(),f(12,D,2,1,"div",7),e(13,"button",8),r(14,"Login"),n()()()),i&2&&(s(7),l("ngModel",t.userName),s(4),l("ngModel",t.password),s(),h("ngIf",t.errorMessage))},dependencies:[T,W,b,v,L,x,I,E,y,N],encapsulation:2})};export{q as LoginComponent};

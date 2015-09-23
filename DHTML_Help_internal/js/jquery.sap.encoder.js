/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("jquery.sap.encoder",false);(function(){function h(i,l){var s=i.toString(16);if(l){while(l>s.length){s="0"+s;}}return s;}var r=/[\x00-\x2b\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\uffff]/g,a=/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f]/,m={"<":"&lt;",">":"&gt;","&":"&amp;","\"":"&quot;"};var f=function(s){var i=m[s];if(!i){if(a.test(s)){i="&#xfffd;";}else{i="&#x"+h(s.charCodeAt(0))+";";}m[s]=i;}return i;};jQuery.sap.encodeHTML=function(s){return s.replace(r,f);};jQuery.sap.encodeXML=function(s){return s.replace(r,f);};jQuery.sap.escapeHTML=function(s){return s.replace(r,f);};var b=/[\x00-\x2b\x2d\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\uffff]/g,j={};var c=function(s){var i=j[s];if(!i){var l=s.charCodeAt(0);if(l<256){i="\\x"+h(l,2);}else{i="\\u"+h(l,4);}j[s]=i;}return i;};jQuery.sap.encodeJS=function(s){return s.replace(b,c);};jQuery.sap.escapeJS=function(s){return s.replace(b,c);};var d=/[\x00-\x29\x2b\x2c\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\uffff]/g,u={};var e=function(s){var i=u[s];if(!i){var l=s.charCodeAt(0);if(l<128){i="%"+h(l,2);}else if(l<2048){i="%"+h((l>>6)|192,2)+"%"+h((l&63)|128,2);}else{i="%"+h((l>>12)|224,2)+"%"+h(((l>>6)&63)|128,2)+"%"+h((l&63)|128,2);}u[s]=i;}return i;};jQuery.sap.encodeURL=function(s){return s.replace(d,e);};var g=/[\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\uffff][0-9A-Fa-f]?/g;var k=function(s){var i=s.charCodeAt(0);if(s.length==1){return"\\"+h(i);}else{return"\\"+h(i)+" "+s.substr(1);}};jQuery.sap.encodeCSS=function(s){return s.replace(g,k);};function W(p,i,l,n){if(p){this.protocol=p.toUpperCase();}if(i){this.host=i.toUpperCase();}this.port=l;this.path=n;}var w=new Array();jQuery.sap.clearUrlWhitelist=function(){w.splice(0,w.length);};jQuery.sap.addUrlWhitelist=function(p,i,l,n){var o=new W(p,i,l,n);var q=w.length;w[q]=o;};jQuery.sap.removeUrlWhitelist=function(i){w.splice(i,1)};jQuery.sap.getUrlWhitelist=function(){return w.slice();};jQuery.sap.validateUrl=function(s){var l=/(?:([^:\/?#]+):)?(?:\/\/([^\/?#:]*)(?::([0-9]+))?)?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/.exec(s);if(!l){return l;}var p=l[1],n=l[2],o=l[3],q=l[4],t=l[5],v=l[6];var x=/[\x00-\x24\x26-\x29\x2b\x2c\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\uffff]/;if(p){p=p.toUpperCase();if(w.length<=0){if(!/^(https?|ftp)/i.test(p)){return false;}}}if(n){n=n.toUpperCase();}if(q){var y=q.split("/");for(var i=0;i<y.length;i++){var z=x.test(y[i]);if(z){return false;}}}if(t){var y=t.split("&");for(var i=0;i<y.length;i++){var A=y[i].search("=");if(A!=-1){var B=y[i].substring(0,A);var C=y[i].substring(A+1);var D=x.test(B);var E=x.test(C);if(D||E){return false;}}}}if(v){if(x.test(v)){return false;}}if(w.length>0){var F=false;for(var i=0;i<w.length;i++){if(!p||!w[i].protocol||p==w[i].protocol){var G=false;if(n&&w[i].host&&/^\*/.test(w[i].host)){var H=w[i].host.slice(1).replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");var I=RegExp(H+"$");if(I.test(n)){G=true;}}else if(!n||!w[i].host||n==w[i].host){G=true;}if(G){if(!w[i].port||o==w[i].port){if(w[i].path&&/\*$/.test(w[i].path)){var J=w[i].path.slice(0,-1).replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");var I=RegExp("^"+J);if(I.test(q)){F=true;}}else if(!w[i].path||q==w[i].path){F=true;}}}}if(F){break;}}if(!F){return F;}}return true;};}());

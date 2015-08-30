/**
 * @license
 * lodash 3.10.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./lodash.js`
 */
;(function(){function n(n,t){if(n!==t){var r=null===n,e=n===w,u=n===n,o=null===t,i=t===w,f=t===t;if(n>t&&!o||!u||r&&!i&&f||e&&f)return 1;if(n<t&&!r||!f||o&&!e&&u||i&&u)return-1}return 0}function t(n,t,r){for(var e=n.length,u=r?e:-1;r?u--:++u<e;)if(t(n[u],u,n))return u;return-1}function r(n,t,r){if(t!==t)return p(n,r);r-=1;for(var e=n.length;++r<e;)if(n[r]===t)return r;return-1}function e(n){return typeof n=="function"||false}function u(n){return null==n?"":n+""}function o(n,t){for(var r=-1,e=n.length;++r<e&&-1<t.indexOf(n.charAt(r)););
return r}function i(n,t){for(var r=n.length;r--&&-1<t.indexOf(n.charAt(r)););return r}function f(t,r){return n(t.a,r.a)||t.b-r.b}function a(n){return Nn[n]}function c(n){return Tn[n]}function l(n,t,r){return t?n=Bn[n]:r&&(n=Dn[n]),"\\"+n}function s(n){return"\\"+Dn[n]}function p(n,t,r){var e=n.length;for(t+=r?0:-1;r?t--:++t<e;){var u=n[t];if(u!==u)return t}return-1}function h(n){return!!n&&typeof n=="object"}function _(n){return 160>=n&&9<=n&&13>=n||32==n||160==n||5760==n||6158==n||8192<=n&&(8202>=n||8232==n||8233==n||8239==n||8287==n||12288==n||65279==n);
}function v(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;)n[r]===t&&(n[r]=z,o[++u]=r);return o}function g(n){for(var t=-1,r=n.length;++t<r&&_(n.charCodeAt(t)););return t}function y(n){for(var t=n.length;t--&&_(n.charCodeAt(t)););return t}function d(n){return Ln[n]}function m(_){function Nn(n){if(h(n)&&!(Oo(n)||n instanceof zn)){if(n instanceof Ln)return n;if(nu.call(n,"__chain__")&&nu.call(n,"__wrapped__"))return Mr(n)}return new Ln(n)}function Tn(){}function Ln(n,t,r){this.__wrapped__=n,this.__actions__=r||[],
this.__chain__=!!t}function zn(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=Ru,this.__views__=[]}function Bn(){this.__data__={}}function Dn(n){var t=n?n.length:0;for(this.data={hash:gu(null),set:new lu};t--;)this.push(n[t])}function Mn(n,t){var r=n.data;return(typeof t=="string"||ge(t)?r.set.has(t):r.hash[t])?0:-1}function qn(n,t){var r=-1,e=n.length;for(t||(t=Be(e));++r<e;)t[r]=n[r];return t}function Pn(n,t){for(var r=-1,e=n.length;++r<e&&false!==t(n[r],r,n););
return n}function Kn(n,t){for(var r=-1,e=n.length;++r<e;)if(!t(n[r],r,n))return false;return true}function Vn(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;){var i=n[r];t(i,r,n)&&(o[++u]=i)}return o}function Gn(n,t){for(var r=-1,e=n.length,u=Be(e);++r<e;)u[r]=t(n[r],r,n);return u}function Jn(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function Xn(n,t,r,e){var u=-1,o=n.length;for(e&&o&&(r=n[++u]);++u<o;)r=t(r,n[u],u,n);return r}function Hn(n,t){for(var r=-1,e=n.length;++r<e;)if(t(n[r],r,n))return true;
return false}function Qn(n,t,r,e){return n!==w&&nu.call(e,r)?n:t}function nt(n,t,r){for(var e=-1,u=zo(t),o=u.length;++e<o;){var i=u[e],f=n[i],a=r(f,t[i],i,n,t);(a===a?a===f:f!==f)&&(f!==w||i in n)||(n[i]=a)}return n}function tt(n,t){return null==t?n:et(t,zo(t),n)}function rt(n,t){for(var r=-1,e=null==n,u=!e&&Er(n),o=u?n.length:0,i=t.length,f=Be(i);++r<i;){var a=t[r];f[r]=u?Cr(a,o)?n[a]:w:e?w:n[a]}return f}function et(n,t,r){r||(r={});for(var e=-1,u=t.length;++e<u;){var o=t[e];r[o]=n[o]}return r}function ut(n,t,r){
var e=typeof n;return"function"==e?t===w?n:Bt(n,t,r):null==n?Fe:"object"==e?bt(n):t===w?ze(n):xt(n,t)}function ot(n,t,r,e,u,o,i){var f;if(r&&(f=u?r(n,e,u):r(n)),f!==w)return f;if(!ge(n))return n;if(e=Oo(n)){if(f=kr(n),!t)return qn(n,f)}else{var a=ru.call(n),c=a==K;if(a!=Z&&a!=B&&(!c||u))return Fn[a]?Rr(n,a,t):u?n:{};if(f=Ir(c?{}:n),!t)return tt(f,n)}for(o||(o=[]),i||(i=[]),u=o.length;u--;)if(o[u]==n)return i[u];return o.push(n),i.push(f),(e?Pn:_t)(n,function(e,u){f[u]=ot(e,t,r,u,n,o,i)}),f}function it(n,t,r){
if(typeof n!="function")throw new Ge(L);return su(function(){n.apply(w,r)},t)}function ft(n,t){var e=n?n.length:0,u=[];if(!e)return u;var o=-1,i=xr(),f=i===r,a=f&&t.length>=F&&gu&&lu?new Dn(t):null,c=t.length;a&&(i=Mn,f=false,t=a);n:for(;++o<e;)if(a=n[o],f&&a===a){for(var l=c;l--;)if(t[l]===a)continue n;u.push(a)}else 0>i(t,a,0)&&u.push(a);return u}function at(n,t){var r=true;return Su(n,function(n,e,u){return r=!!t(n,e,u)}),r}function ct(n,t,r,e){var u=e,o=u;return Su(n,function(n,i,f){i=+t(n,i,f),(r(i,u)||i===e&&i===o)&&(u=i,
o=n)}),o}function lt(n,t){var r=[];return Su(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function st(n,t,r,e){var u;return r(n,function(n,r,o){return t(n,r,o)?(u=e?r:n,false):void 0}),u}function pt(n,t,r,e){e||(e=[]);for(var u=-1,o=n.length;++u<o;){var i=n[u];h(i)&&Er(i)&&(r||Oo(i)||pe(i))?t?pt(i,t,r,e):Jn(e,i):r||(e[e.length]=i)}return e}function ht(n,t){Nu(n,t,Re)}function _t(n,t){return Nu(n,t,zo)}function vt(n,t){return Tu(n,t,zo)}function gt(n,t){for(var r=-1,e=t.length,u=-1,o=[];++r<e;){var i=t[r];
ve(n[i])&&(o[++u]=i)}return o}function yt(n,t,r){if(null!=n){r!==w&&r in Br(n)&&(t=[r]),r=0;for(var e=t.length;null!=n&&r<e;)n=n[t[r++]];return r&&r==e?n:w}}function dt(n,t,r,e,u,o){if(n===t)n=true;else if(null==n||null==t||!ge(n)&&!h(t))n=n!==n&&t!==t;else n:{var i=dt,f=Oo(n),a=Oo(t),c=D,l=D;f||(c=ru.call(n),c==B?c=Z:c!=Z&&(f=xe(n))),a||(l=ru.call(t),l==B?l=Z:l!=Z&&xe(t));var s=c==Z,a=l==Z,l=c==l;if(!l||f||s){if(!e&&(c=s&&nu.call(n,"__wrapped__"),a=a&&nu.call(t,"__wrapped__"),c||a)){n=i(c?n.value():n,a?t.value():t,r,e,u,o);
break n}if(l){for(u||(u=[]),o||(o=[]),c=u.length;c--;)if(u[c]==n){n=o[c]==t;break n}u.push(n),o.push(t),n=(f?yr:mr)(n,t,i,r,e,u,o),u.pop(),o.pop()}else n=false}else n=dr(n,t,c)}return n}function mt(n,t,r){var e=t.length,u=e,o=!r;if(null==n)return!u;for(n=Br(n);e--;){var i=t[e];if(o&&i[2]?i[1]!==n[i[0]]:!(i[0]in n))return false}for(;++e<u;){var i=t[e],f=i[0],a=n[f],c=i[1];if(o&&i[2]){if(a===w&&!(f in n))return false}else if(i=r?r(a,c,f):w,i===w?!dt(c,a,r,true):!i)return false}return true}function wt(n,t){var r=-1,e=Er(n)?Be(n.length):[];
return Su(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function bt(n){var t=Ar(n);if(1==t.length&&t[0][2]){var r=t[0][0],e=t[0][1];return function(n){return null==n?false:n[r]===e&&(e!==w||r in Br(n))}}return function(n){return mt(n,t)}}function xt(n,t){var r=Oo(n),e=Wr(n)&&t===t&&!ge(t),u=n+"";return n=Dr(n),function(o){if(null==o)return false;var i=u;if(o=Br(o),!(!r&&e||i in o)){if(o=1==n.length?o:yt(o,Et(n,0,-1)),null==o)return false;i=Zr(n),o=Br(o)}return o[i]===t?t!==w||i in o:dt(t,o[i],w,true)}}function At(n,t,r,e,u){
if(!ge(n))return n;var o=Er(t)&&(Oo(t)||xe(t)),i=o?w:zo(t);return Pn(i||t,function(f,a){if(i&&(a=f,f=t[a]),h(f)){e||(e=[]),u||(u=[]);n:{for(var c=a,l=e,s=u,p=l.length,_=t[c];p--;)if(l[p]==_){n[c]=s[p];break n}var p=n[c],v=r?r(p,_,c,n,t):w,g=v===w;g&&(v=_,Er(_)&&(Oo(_)||xe(_))?v=Oo(p)?p:Er(p)?qn(p):[]:me(_)||pe(_)?v=pe(p)?ke(p):me(p)?p:{}:g=false),l.push(_),s.push(v),g?n[c]=At(v,_,r,l,s):(v===v?v!==p:p===p)&&(n[c]=v)}}else c=n[a],l=r?r(c,f,a,n,t):w,(s=l===w)&&(l=f),l===w&&(!o||a in n)||!s&&(l===l?l===c:c!==c)||(n[a]=l);
}),n}function jt(n){return function(t){return null==t?w:t[n]}}function kt(n){var t=n+"";return n=Dr(n),function(r){return yt(r,n,t)}}function It(n,t){for(var r=n?t.length:0;r--;){var e=t[r];if(e!=u&&Cr(e)){var u=e;pu.call(n,e,1)}}}function Rt(n,t){return n+yu(ku()*(t-n+1))}function Ot(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function Et(n,t,r){var e=-1,u=n.length;for(t=null==t?0:+t||0,0>t&&(t=-t>u?0:u+t),r=r===w||r>u?u:+r||0,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Be(u);++e<u;)r[e]=n[e+t];
return r}function Ct(n,t){var r;return Su(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function Ut(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function Wt(t,r,e){var u=wr(),o=-1;return r=Gn(r,function(n){return u(n)}),t=wt(t,function(n){return{a:Gn(r,function(t){return t(n)}),b:++o,c:n}}),Ut(t,function(t,r){var u;n:{for(var o=-1,i=t.a,f=r.a,a=i.length,c=e.length;++o<a;)if(u=n(i[o],f[o])){if(o>=c)break n;o=e[o],u*="asc"===o||true===o?1:-1;break n}u=t.b-r.b}return u})}function $t(n,t){
var r=0;return Su(n,function(n,e,u){r+=+t(n,e,u)||0}),r}function St(n,t){var e=-1,u=xr(),o=n.length,i=u===r,f=i&&o>=F,a=f&&gu&&lu?new Dn(void 0):null,c=[];a?(u=Mn,i=false):(f=false,a=t?[]:c);n:for(;++e<o;){var l=n[e],s=t?t(l,e,n):l;if(i&&l===l){for(var p=a.length;p--;)if(a[p]===s)continue n;t&&a.push(s),c.push(l)}else 0>u(a,s,0)&&((t||f)&&a.push(s),c.push(l))}return c}function Ft(n,t){for(var r=-1,e=t.length,u=Be(e);++r<e;)u[r]=n[t[r]];return u}function Nt(n,t,r,e){for(var u=n.length,o=e?u:-1;(e?o--:++o<u)&&t(n[o],o,n););
return r?Et(n,e?0:o,e?o+1:u):Et(n,e?o+1:0,e?u:o)}function Tt(n,t){var r=n;r instanceof zn&&(r=r.value());for(var e=-1,u=t.length;++e<u;)var o=t[e],r=o.func.apply(o.thisArg,Jn([r],o.args));return r}function Lt(n,t,r){var e=0,u=n?n.length:e;if(typeof t=="number"&&t===t&&u<=Eu){for(;e<u;){var o=e+u>>>1,i=n[o];(r?i<=t:i<t)&&null!==i?e=o+1:u=o}return u}return zt(n,t,Fe,r)}function zt(n,t,r,e){t=r(t);for(var u=0,o=n?n.length:0,i=t!==t,f=null===t,a=t===w;u<o;){var c=yu((u+o)/2),l=r(n[c]),s=l!==w,p=l===l;
(i?p||e:f?p&&s&&(e||null!=l):a?p&&(e||s):null==l?0:e?l<=t:l<t)?u=c+1:o=c}return xu(o,Ou)}function Bt(n,t,r){if(typeof n!="function")return Fe;if(t===w)return n;switch(r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,o){return n.call(t,r,e,u,o)};case 5:return function(r,e,u,o,i){return n.call(t,r,e,u,o,i)}}return function(){return n.apply(t,arguments)}}function Dt(n){var t=new ou(n.byteLength);return new hu(t).set(new hu(n)),
t}function Mt(n,t,r){for(var e=r.length,u=-1,o=bu(n.length-e,0),i=-1,f=t.length,a=Be(f+o);++i<f;)a[i]=t[i];for(;++u<e;)a[r[u]]=n[u];for(;o--;)a[i++]=n[u++];return a}function qt(n,t,r){for(var e=-1,u=r.length,o=-1,i=bu(n.length-u,0),f=-1,a=t.length,c=Be(i+a);++o<i;)c[o]=n[o];for(i=o;++f<a;)c[i+f]=t[f];for(;++e<u;)c[i+r[e]]=n[o++];return c}function Pt(n,t){return function(r,e,u){var o=t?t():{};if(e=wr(e,u,3),Oo(r)){u=-1;for(var i=r.length;++u<i;){var f=r[u];n(o,f,e(f,u,r),r)}}else Su(r,function(t,r,u){
n(o,t,e(t,r,u),u)});return o}}function Kt(n){return le(function(t,r){var e=-1,u=null==t?0:r.length,o=2<u?r[u-2]:w,i=2<u?r[2]:w,f=1<u?r[u-1]:w;for(typeof o=="function"?(o=Bt(o,f,5),u-=2):(o=typeof f=="function"?f:w,u-=o?1:0),i&&Ur(r[0],r[1],i)&&(o=3>u?w:o,u=1);++e<u;)(i=r[e])&&n(t,i,o);return t})}function Vt(n,t){return function(r,e){var u=r?Bu(r):0;if(!Sr(u))return n(r,e);for(var o=t?u:-1,i=Br(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}function Zt(n){return function(t,r,e){var u=Br(t);e=e(t);for(var o=e.length,i=n?o:-1;n?i--:++i<o;){
var f=e[i];if(false===r(u[f],f,u))break}return t}}function Yt(n,t){function r(){return(this&&this!==Zn&&this instanceof r?e:n).apply(t,arguments)}var e=Jt(n);return r}function Gt(n){return function(t){var r=-1;t=$e(Ce(t));for(var e=t.length,u="";++r<e;)u=n(u,t[r],r);return u}}function Jt(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:
return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=$u(n.prototype),t=n.apply(r,t);return ge(t)?t:r}}function Xt(n){function t(r,e,u){return u&&Ur(r,e,u)&&(e=w),r=gr(r,n,w,w,w,w,w,e),r.placeholder=t.placeholder,r}return t}function Ht(n,t){return le(function(r){var e=r[0];return null==e?e:(r.push(t),n.apply(w,r))})}function Qt(n,t){return function(r,e,u){if(u&&Ur(r,e,u)&&(e=w),e=wr(e,u,3),1==e.length){
u=r=Oo(r)?r:zr(r);for(var o=e,i=-1,f=u.length,a=t,c=a;++i<f;){var l=u[i],s=+o(l);n(s,a)&&(a=s,c=l)}if(u=c,!r.length||u!==t)return u}return ct(r,e,n,t)}}function nr(n,r){return function(e,u,o){return u=wr(u,o,3),Oo(e)?(u=t(e,u,r),-1<u?e[u]:w):st(e,u,n)}}function tr(n){return function(r,e,u){return r&&r.length?(e=wr(e,u,3),t(r,e,n)):-1}}function rr(n){return function(t,r,e){return r=wr(r,e,3),st(t,r,n,true)}}function er(n){return function(){for(var t,r=arguments.length,e=n?r:-1,u=0,o=Be(r);n?e--:++e<r;){
var i=o[u++]=arguments[e];if(typeof i!="function")throw new Ge(L);!t&&Ln.prototype.thru&&"wrapper"==br(i)&&(t=new Ln([],true))}for(e=t?-1:r;++e<r;){var i=o[e],u=br(i),f="wrapper"==u?zu(i):w;t=f&&$r(f[0])&&f[1]==(E|k|R|C)&&!f[4].length&&1==f[9]?t[br(f[0])].apply(t,f[3]):1==i.length&&$r(i)?t[u]():t.thru(i)}return function(){var n=arguments,e=n[0];if(t&&1==n.length&&Oo(e)&&e.length>=F)return t.plant(e).value();for(var u=0,n=r?o[u].apply(this,n):e;++u<r;)n=o[u].call(this,n);return n}}}function ur(n,t){
return function(r,e,u){return typeof e=="function"&&u===w&&Oo(r)?n(r,e):t(r,Bt(e,u,3))}}function or(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Bt(r,e,3)),n(t,r,Re)}}function ir(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Bt(r,e,3)),n(t,r)}}function fr(n){return function(t,r,e){var u={};return r=wr(r,e,3),_t(t,function(t,e,o){o=r(t,e,o),e=n?o:e,t=n?t:o,u[e]=t}),u}}function ar(n){return function(t,r,e){return t=u(t),(n?t:"")+pr(t,r,e)+(n?"":t)}}function cr(n){
var t=le(function(r,e){var u=v(e,t.placeholder);return gr(r,n,w,e,u)});return t}function lr(n,t){return function(r,e,u,o){var i=3>arguments.length;return typeof e=="function"&&o===w&&Oo(r)?n(r,e,u,i):Ot(r,wr(e,o,4),u,i,t)}}function sr(n,t,r,e,u,o,i,f,a,c){function l(){for(var m=arguments.length,b=m,j=Be(m);b--;)j[b]=arguments[b];if(e&&(j=Mt(j,e,u)),o&&(j=qt(j,o,i)),_||y){var b=l.placeholder,k=v(j,b),m=m-k.length;if(m<c){var I=f?qn(f):w,m=bu(c-m,0),E=_?k:w,k=_?w:k,C=_?j:w,j=_?w:j;return t|=_?R:O,t&=~(_?O:R),
g||(t&=~(x|A)),j=[n,t,r,C,E,j,k,I,a,m],I=sr.apply(w,j),$r(n)&&Du(I,j),I.placeholder=b,I}}if(b=p?r:this,I=h?b[n]:n,f)for(m=j.length,E=xu(f.length,m),k=qn(j);E--;)C=f[E],j[E]=Cr(C,m)?k[C]:w;return s&&a<j.length&&(j.length=a),this&&this!==Zn&&this instanceof l&&(I=d||Jt(n)),I.apply(b,j)}var s=t&E,p=t&x,h=t&A,_=t&k,g=t&j,y=t&I,d=h?w:Jt(n);return l}function pr(n,t,r){return n=n.length,t=+t,n<t&&mu(t)?(t-=n,r=null==r?" ":r+"",Ue(r,vu(t/r.length)).slice(0,t)):""}function hr(n,t,r,e){function u(){for(var t=-1,f=arguments.length,a=-1,c=e.length,l=Be(c+f);++a<c;)l[a]=e[a];
for(;f--;)l[a++]=arguments[++t];return(this&&this!==Zn&&this instanceof u?i:n).apply(o?r:this,l)}var o=t&x,i=Jt(n);return u}function _r(n){var t=Pe[n];return function(n,r){return(r=r===w?0:+r||0)?(r=au(10,r),t(n*r)/r):t(n)}}function vr(n){return function(t,r,e,u){var o=wr(e);return null==e&&o===ut?Lt(t,r,n):zt(t,r,o(e,u,1),n)}}function gr(n,t,r,e,u,o,i,f){var a=t&A;if(!a&&typeof n!="function")throw new Ge(L);var c=e?e.length:0;if(c||(t&=~(R|O),e=u=w),c-=u?u.length:0,t&O){var l=e,s=u;e=u=w}var p=a?w:zu(n);
return r=[n,t,r,e,u,l,s,o,i,f],p&&(e=r[1],t=p[1],f=e|t,u=t==E&&e==k||t==E&&e==C&&r[7].length<=p[8]||t==(E|C)&&e==k,(f<E||u)&&(t&x&&(r[2]=p[2],f|=e&x?0:j),(e=p[3])&&(u=r[3],r[3]=u?Mt(u,e,p[4]):qn(e),r[4]=u?v(r[3],z):qn(p[4])),(e=p[5])&&(u=r[5],r[5]=u?qt(u,e,p[6]):qn(e),r[6]=u?v(r[5],z):qn(p[6])),(e=p[7])&&(r[7]=qn(e)),t&E&&(r[8]=null==r[8]?p[8]:xu(r[8],p[8])),null==r[9]&&(r[9]=p[9]),r[0]=p[0],r[1]=f),t=r[1],f=r[9]),r[9]=null==f?a?0:n.length:bu(f-c,0)||0,(p?Lu:Du)(t==x?Yt(r[0],r[2]):t!=R&&t!=(x|R)||r[4].length?sr.apply(w,r):hr.apply(w,r),r);
}function yr(n,t,r,e,u,o,i){var f=-1,a=n.length,c=t.length;if(a!=c&&(!u||c<=a))return false;for(;++f<a;){var l=n[f],c=t[f],s=e?e(u?c:l,u?l:c,f):w;if(s!==w){if(s)continue;return false}if(u){if(!Hn(t,function(n){return l===n||r(l,n,e,u,o,i)}))return false}else if(l!==c&&!r(l,c,e,u,o,i))return false}return true}function dr(n,t,r){switch(r){case M:case q:return+n==+t;case P:return n.name==t.name&&n.message==t.message;case V:return n!=+n?t!=+t:n==+t;case Y:case G:return n==t+""}return false}function mr(n,t,r,e,u,o,i){var f=zo(n),a=f.length,c=zo(t).length;
if(a!=c&&!u)return false;for(c=a;c--;){var l=f[c];if(!(u?l in t:nu.call(t,l)))return false}for(var s=u;++c<a;){var l=f[c],p=n[l],h=t[l],_=e?e(u?h:p,u?p:h,l):w;if(_===w?!r(p,h,e,u,o,i):!_)return false;s||(s="constructor"==l)}return s||(r=n.constructor,e=t.constructor,!(r!=e&&"constructor"in n&&"constructor"in t)||typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)?true:false}function wr(n,t,r){var e=Nn.callback||Se,e=e===Se?ut:e;return r?e(n,t,r):e}function br(n){for(var t=n.name+"",r=Wu[t],e=r?r.length:0;e--;){
var u=r[e],o=u.func;if(null==o||o==n)return u.name}return t}function xr(n,t,e){var u=Nn.indexOf||Vr,u=u===Vr?r:u;return n?u(n,t,e):u}function Ar(n){n=Oe(n);for(var t=n.length;t--;){var r=n[t][1];n[t][2]=r===r&&!ge(r)}return n}function jr(n,t){var r=null==n?w:n[t];return ye(r)?r:w}function kr(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&nu.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Ir(n){return n=n.constructor,typeof n=="function"&&n instanceof n||(n=Ve),
new n}function Rr(n,t,r){var e=n.constructor;switch(t){case J:return Dt(n);case M:case q:return new e(+n);case X:case H:case Q:case nn:case tn:case rn:case en:case un:case on:return t=n.buffer,new e(r?Dt(t):t,n.byteOffset,n.length);case V:case G:return new e(n);case Y:var u=new e(n.source,kn.exec(n));u.lastIndex=n.lastIndex}return u}function Or(n,t,r){return null==n||Wr(t,n)||(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),t=Zr(t)),t=null==n?n:n[t],null==t?w:t.apply(n,r)}function Er(n){return null!=n&&Sr(Bu(n));
}function Cr(n,t){return n=typeof n=="number"||On.test(n)?+n:-1,t=null==t?Cu:t,-1<n&&0==n%1&&n<t}function Ur(n,t,r){if(!ge(r))return false;var e=typeof t;return("number"==e?Er(r)&&Cr(t,r.length):"string"==e&&t in r)?(t=r[t],n===n?n===t:t!==t):false}function Wr(n,t){var r=typeof n;return"string"==r&&dn.test(n)||"number"==r?true:Oo(n)?false:!yn.test(n)||null!=t&&n in Br(t)}function $r(n){var t=br(n),r=Nn[t];return typeof r=="function"&&t in zn.prototype?n===r?true:(t=zu(r),!!t&&n===t[0]):false}function Sr(n){return typeof n=="number"&&-1<n&&0==n%1&&n<=Cu;
}function Fr(n,t){return n===w?t:Eo(n,t,Fr)}function Nr(n,t){n=Br(n);for(var r=-1,e=t.length,u={};++r<e;){var o=t[r];o in n&&(u[o]=n[o])}return u}function Tr(n,t){var r={};return ht(n,function(n,e,u){t(n,e,u)&&(r[e]=n)}),r}function Lr(n){for(var t=Re(n),r=t.length,e=r&&n.length,u=!!e&&Sr(e)&&(Oo(n)||pe(n)),o=-1,i=[];++o<r;){var f=t[o];(u&&Cr(f,e)||nu.call(n,f))&&i.push(f)}return i}function zr(n){return null==n?[]:Er(n)?ge(n)?n:Ve(n):Ee(n)}function Br(n){return ge(n)?n:Ve(n)}function Dr(n){if(Oo(n))return n;
var t=[];return u(n).replace(mn,function(n,r,e,u){t.push(e?u.replace(An,"$1"):r||n)}),t}function Mr(n){return n instanceof zn?n.clone():new Ln(n.__wrapped__,n.__chain__,qn(n.__actions__))}function qr(n,t,r){return n&&n.length?((r?Ur(n,t,r):null==t)&&(t=1),Et(n,0>t?0:t)):[]}function Pr(n,t,r){var e=n?n.length:0;return e?((r?Ur(n,t,r):null==t)&&(t=1),t=e-(+t||0),Et(n,0,0>t?0:t)):[]}function Kr(n){return n?n[0]:w}function Vr(n,t,e){var u=n?n.length:0;if(!u)return-1;if(typeof e=="number")e=0>e?bu(u+e,0):e;else if(e)return e=Lt(n,t),
e<u&&(t===t?t===n[e]:n[e]!==n[e])?e:-1;return r(n,t,e||0)}function Zr(n){var t=n?n.length:0;return t?n[t-1]:w}function Yr(n){return qr(n,1)}function Gr(n,t,e,u){if(!n||!n.length)return[];null!=t&&typeof t!="boolean"&&(u=e,e=Ur(n,t,u)?w:t,t=false);var o=wr();if((null!=e||o!==ut)&&(e=o(e,u,3)),t&&xr()===r){t=e;var i;e=-1,u=n.length;for(var o=-1,f=[];++e<u;){var a=n[e],c=t?t(a,e,n):a;e&&i===c||(i=c,f[++o]=a)}n=f}else n=St(n,e);return n}function Jr(n){if(!n||!n.length)return[];var t=-1,r=0;n=Vn(n,function(n){
return Er(n)?(r=bu(n.length,r),true):void 0});for(var e=Be(r);++t<r;)e[t]=Gn(n,jt(t));return e}function Xr(n,t,r){return n&&n.length?(n=Jr(n),null==t?n:(t=Bt(t,r,4),Gn(n,function(n){return Xn(n,t,w,true)}))):[]}function Hr(n,t){var r=-1,e=n?n.length:0,u={};for(!e||t||Oo(n[0])||(t=[]);++r<e;){var o=n[r];t?u[o]=t[r]:o&&(u[o[0]]=o[1])}return u}function Qr(n){return n=Nn(n),n.__chain__=true,n}function ne(n,t,r){return t.call(r,n)}function te(n,t,r){var e=Oo(n)?Kn:at;return r&&Ur(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=wr(t,r,3)),
e(n,t)}function re(n,t,r){var e=Oo(n)?Vn:lt;return t=wr(t,r,3),e(n,t)}function ee(n,t,r,e){var u=n?Bu(n):0;return Sr(u)||(n=Ee(n),u=n.length),r=typeof r!="number"||e&&Ur(t,r,e)?0:0>r?bu(u+r,0):r||0,typeof n=="string"||!Oo(n)&&be(n)?r<=u&&-1<n.indexOf(t,r):!!u&&-1<xr(n,t,r)}function ue(n,t,r){var e=Oo(n)?Gn:wt;return t=wr(t,r,3),e(n,t)}function oe(n,t,r){if(r?Ur(n,t,r):null==t){n=zr(n);var e=n.length;return 0<e?n[Rt(0,e-1)]:w}r=-1,n=je(n);var e=n.length,u=e-1;for(t=xu(0>t?0:+t||0,e);++r<t;){var e=Rt(r,u),o=n[e];
n[e]=n[r],n[r]=o}return n.length=t,n}function ie(n,t,r){var e=Oo(n)?Hn:Ct;return r&&Ur(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=wr(t,r,3)),e(n,t)}function fe(n,t){var r;if(typeof t!="function"){if(typeof n!="function")throw new Ge(L);var e=n;n=t,t=e}return function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=w),r}}function ae(n,t,r){function e(t,r){r&&iu(r),a=p=h=w,t&&(_=ho(),c=n.apply(s,f),p||a||(f=s=w))}function u(){var n=t-(ho()-l);0>=n||n>t?e(h,a):p=su(u,n)}function o(){e(g,p);
}function i(){if(f=arguments,l=ho(),s=this,h=g&&(p||!y),false===v)var r=y&&!p;else{a||y||(_=l);var e=v-(l-_),i=0>=e||e>v;i?(a&&(a=iu(a)),_=l,c=n.apply(s,f)):a||(a=su(o,e))}return i&&p?p=iu(p):p||t===v||(p=su(u,t)),r&&(i=true,c=n.apply(s,f)),!i||p||a||(f=s=w),c}var f,a,c,l,s,p,h,_=0,v=false,g=true;if(typeof n!="function")throw new Ge(L);if(t=0>t?0:+t||0,true===r)var y=true,g=false;else ge(r)&&(y=!!r.leading,v="maxWait"in r&&bu(+r.maxWait||0,t),g="trailing"in r?!!r.trailing:g);return i.cancel=function(){p&&iu(p),a&&iu(a),
_=0,a=p=h=w},i}function ce(n,t){function r(){var e=arguments,u=t?t.apply(this,e):e[0],o=r.cache;return o.has(u)?o.get(u):(e=n.apply(this,e),r.cache=o.set(u,e),e)}if(typeof n!="function"||t&&typeof t!="function")throw new Ge(L);return r.cache=new ce.Cache,r}function le(n,t){if(typeof n!="function")throw new Ge(L);return t=bu(t===w?n.length-1:+t||0,0),function(){for(var r=arguments,e=-1,u=bu(r.length-t,0),o=Be(u);++e<u;)o[e]=r[t+e];switch(t){case 0:return n.call(this,o);case 1:return n.call(this,r[0],o);
case 2:return n.call(this,r[0],r[1],o)}for(u=Be(t+1),e=-1;++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u)}}function se(n,t){return n>t}function pe(n){return h(n)&&Er(n)&&nu.call(n,"callee")&&!cu.call(n,"callee")}function he(n,t,r,e){return e=(r=typeof r=="function"?Bt(r,e,3):w)?r(n,t):w,e===w?dt(n,t,r):!!e}function _e(n){return h(n)&&typeof n.message=="string"&&ru.call(n)==P}function ve(n){return ge(n)&&ru.call(n)==K}function ge(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function ye(n){
return null==n?false:ve(n)?uu.test(Qe.call(n)):h(n)&&Rn.test(n)}function de(n){return typeof n=="number"||h(n)&&ru.call(n)==V}function me(n){var t;if(!h(n)||ru.call(n)!=Z||pe(n)||!(nu.call(n,"constructor")||(t=n.constructor,typeof t!="function"||t instanceof t)))return false;var r;return ht(n,function(n,t){r=t}),r===w||nu.call(n,r)}function we(n){return ge(n)&&ru.call(n)==Y}function be(n){return typeof n=="string"||h(n)&&ru.call(n)==G}function xe(n){return h(n)&&Sr(n.length)&&!!Sn[ru.call(n)]}function Ae(n,t){
return n<t}function je(n){var t=n?Bu(n):0;return Sr(t)?t?qn(n):[]:Ee(n)}function ke(n){return et(n,Re(n))}function Ie(n){return gt(n,Re(n))}function Re(n){if(null==n)return[];ge(n)||(n=Ve(n));for(var t=n.length,t=t&&Sr(t)&&(Oo(n)||pe(n))&&t||0,r=n.constructor,e=-1,r=typeof r=="function"&&r.prototype===n,u=Be(t),o=0<t;++e<t;)u[e]=e+"";for(var i in n)o&&Cr(i,t)||"constructor"==i&&(r||!nu.call(n,i))||u.push(i);return u}function Oe(n){n=Br(n);for(var t=-1,r=zo(n),e=r.length,u=Be(e);++t<e;){var o=r[t];
u[t]=[o,n[o]]}return u}function Ee(n){return Ft(n,zo(n))}function Ce(n){return(n=u(n))&&n.replace(En,a).replace(xn,"")}function Ue(n,t){var r="";if(n=u(n),t=+t,1>t||!n||!mu(t))return r;do t%2&&(r+=n),t=yu(t/2),n+=n;while(t);return r}function We(n,t,r){var e=n;return(n=u(n))?(r?Ur(e,t,r):null==t)?n.slice(g(n),y(n)+1):(t+="",n.slice(o(n,t),i(n,t)+1)):n}function $e(n,t,r){return r&&Ur(n,t,r)&&(t=w),n=u(n),n.match(t||Wn)||[]}function Se(n,t,r){return r&&Ur(n,t,r)&&(t=w),h(n)?Ne(n):ut(n,t)}function Fe(n){
return n}function Ne(n){return bt(ot(n,true))}function Te(n,t,r){if(null==r){var e=ge(t),u=e?zo(t):w;((u=u&&u.length?gt(t,u):w)?u.length:e)||(u=false,r=t,t=n,n=this)}u||(u=gt(t,zo(t)));var o=true,e=-1,i=ve(n),f=u.length;false===r?o=false:ge(r)&&"chain"in r&&(o=r.chain);for(;++e<f;){r=u[e];var a=t[r];n[r]=a,i&&(n.prototype[r]=function(t){return function(){var r=this.__chain__;if(o||r){var e=n(this.__wrapped__);return(e.__actions__=qn(this.__actions__)).push({func:t,args:arguments,thisArg:n}),e.__chain__=r,e}return t.apply(n,Jn([this.value()],arguments));
}}(a))}return n}function Le(){}function ze(n){return Wr(n)?jt(n):kt(n)}_=_?Yn.defaults(Zn.Object(),_,Yn.pick(Zn,$n)):Zn;var Be=_.Array,De=_.Date,Me=_.Error,qe=_.Function,Pe=_.Math,Ke=_.Number,Ve=_.Object,Ze=_.RegExp,Ye=_.String,Ge=_.TypeError,Je=Be.prototype,Xe=Ve.prototype,He=Ye.prototype,Qe=qe.prototype.toString,nu=Xe.hasOwnProperty,tu=0,ru=Xe.toString,eu=Zn._,uu=Ze("^"+Qe.call(nu).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ou=_.ArrayBuffer,iu=_.clearTimeout,fu=_.parseFloat,au=Pe.pow,cu=Xe.propertyIsEnumerable,lu=jr(_,"Set"),su=_.setTimeout,pu=Je.splice,hu=_.Uint8Array,_u=jr(_,"WeakMap"),vu=Pe.ceil,gu=jr(Ve,"create"),yu=Pe.floor,du=jr(Be,"isArray"),mu=_.isFinite,wu=jr(Ve,"keys"),bu=Pe.max,xu=Pe.min,Au=jr(De,"now"),ju=_.parseInt,ku=Pe.random,Iu=Ke.NEGATIVE_INFINITY,Ru=Ke.POSITIVE_INFINITY,Ou=4294967294,Eu=2147483647,Cu=9007199254740991,Uu=_u&&new _u,Wu={};
Nn.support={},Nn.templateSettings={escape:_n,evaluate:vn,interpolate:gn,variable:"",imports:{_:Nn}};var $u=function(){function n(){}return function(t){if(ge(t)){n.prototype=t;var r=new n;n.prototype=w}return r||{}}}(),Su=Vt(_t),Fu=Vt(vt,true),Nu=Zt(),Tu=Zt(true),Lu=Uu?function(n,t){return Uu.set(n,t),n}:Fe,zu=Uu?function(n){return Uu.get(n)}:Le,Bu=jt("length"),Du=function(){var n=0,t=0;return function(r,e){var u=ho(),o=S-(u-t);if(t=u,0<o){if(++n>=$)return r}else n=0;return Lu(r,e)}}(),Mu=le(function(n,t){
return h(n)&&Er(n)?ft(n,pt(t,false,true)):[]}),qu=tr(),Pu=tr(true),Ku=le(function(n){for(var t=n.length,e=t,u=Be(l),o=xr(),i=o===r,f=[];e--;){var a=n[e]=Er(a=n[e])?a:[];u[e]=i&&120<=a.length&&gu&&lu?new Dn(e&&a):null}var i=n[0],c=-1,l=i?i.length:0,s=u[0];n:for(;++c<l;)if(a=i[c],0>(s?Mn(s,a):o(f,a,0))){for(e=t;--e;){var p=u[e];if(0>(p?Mn(p,a):o(n[e],a,0)))continue n}s&&s.push(a),f.push(a)}return f}),Vu=le(function(t,r){r=pt(r);var e=rt(t,r);return It(t,r.sort(n)),e}),Zu=vr(),Yu=vr(true),Gu=le(function(n){return St(pt(n,false,true));
}),Ju=le(function(n,t){return Er(n)?ft(n,t):[]}),Xu=le(Jr),Hu=le(function(n){var t=n.length,r=2<t?n[t-2]:w,e=1<t?n[t-1]:w;return 2<t&&typeof r=="function"?t-=2:(r=1<t&&typeof e=="function"?(--t,e):w,e=w),n.length=t,Xr(n,r,e)}),Qu=le(function(n){return n=pt(n),this.thru(function(t){t=Oo(t)?t:[Br(t)];for(var r=n,e=-1,u=t.length,o=-1,i=r.length,f=Be(u+i);++e<u;)f[e]=t[e];for(;++o<i;)f[e++]=r[o];return f})}),no=le(function(n,t){return rt(n,pt(t))}),to=Pt(function(n,t,r){nu.call(n,r)?++n[r]:n[r]=1}),ro=nr(Su),eo=nr(Fu,true),uo=ur(Pn,Su),oo=ur(function(n,t){
for(var r=n.length;r--&&false!==t(n[r],r,n););return n},Fu),io=Pt(function(n,t,r){nu.call(n,r)?n[r].push(t):n[r]=[t]}),fo=Pt(function(n,t,r){n[r]=t}),ao=le(function(n,t,r){var e=-1,u=typeof t=="function",o=Wr(t),i=Er(n)?Be(n.length):[];return Su(n,function(n){var f=u?t:o&&null!=n?n[t]:w;i[++e]=f?f.apply(n,r):Or(n,t,r)}),i}),co=Pt(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),lo=lr(Xn,Su),so=lr(function(n,t,r,e){var u=n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r},Fu),po=le(function(n,t){
if(null==n)return[];var r=t[2];return r&&Ur(t[0],t[1],r)&&(t.length=1),Wt(n,pt(t),[])}),ho=Au||function(){return(new De).getTime()},_o=le(function(n,t,r){var e=x;if(r.length)var u=v(r,_o.placeholder),e=e|R;return gr(n,e,t,r,u)}),vo=le(function(n,t){t=t.length?pt(t):Ie(n);for(var r=-1,e=t.length;++r<e;){var u=t[r];n[u]=gr(n[u],x,n)}return n}),go=le(function(n,t,r){var e=x|A;if(r.length)var u=v(r,go.placeholder),e=e|R;return gr(t,e,n,r,u)}),yo=Xt(k),mo=Xt(I),wo=le(function(n,t){return it(n,1,t)}),bo=le(function(n,t,r){
return it(n,t,r)}),xo=er(),Ao=er(true),jo=le(function(n,t){if(t=pt(t),typeof n!="function"||!Kn(t,e))throw new Ge(L);var r=t.length;return le(function(e){for(var u=xu(e.length,r);u--;)e[u]=t[u](e[u]);return n.apply(this,e)})}),ko=cr(R),Io=cr(O),Ro=le(function(n,t){return gr(n,C,w,w,w,pt(t))}),Oo=du||function(n){return h(n)&&Sr(n.length)&&ru.call(n)==D},Eo=Kt(At),Co=Kt(function(n,t,r){return r?nt(n,t,r):tt(n,t)}),Uo=Ht(Co,function(n,t){return n===w?t:n}),Wo=Ht(Eo,Fr),$o=rr(_t),So=rr(vt),Fo=or(Nu),No=or(Tu),To=ir(_t),Lo=ir(vt),zo=wu?function(n){
var t=null==n?w:n.constructor;return typeof t=="function"&&t.prototype===n||typeof n!="function"&&Er(n)?Lr(n):ge(n)?wu(n):[]}:Lr,Bo=fr(true),Do=fr(),Mo=le(function(n,t){if(null==n)return{};if("function"!=typeof t[0])return t=Gn(pt(t),Ye),Nr(n,ft(Re(n),t));var r=Bt(t[0],t[1],3);return Tr(n,function(n,t,e){return!r(n,t,e)})}),qo=le(function(n,t){return null==n?{}:"function"==typeof t[0]?Tr(n,Bt(t[0],t[1],3)):Nr(n,pt(t))}),Po=Gt(function(n,t,r){return t=t.toLowerCase(),n+(r?t.charAt(0).toUpperCase()+t.slice(1):t);
}),Ko=Gt(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Vo=ar(),Zo=ar(true),Yo=Gt(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Go=Gt(function(n,t,r){return n+(r?" ":"")+(t.charAt(0).toUpperCase()+t.slice(1))}),Jo=le(function(n,t){try{return n.apply(w,t)}catch(r){return _e(r)?r:new Me(r)}}),Xo=le(function(n,t){return function(r){return Or(r,n,t)}}),Ho=le(function(n,t){return function(r){return Or(n,r,t)}}),Qo=_r("ceil"),ni=_r("floor"),ti=Qt(se,Iu),ri=Qt(Ae,Ru),ei=_r("round");return Nn.prototype=Tn.prototype,
Ln.prototype=$u(Tn.prototype),Ln.prototype.constructor=Ln,zn.prototype=$u(Tn.prototype),zn.prototype.constructor=zn,Bn.prototype["delete"]=function(n){return this.has(n)&&delete this.__data__[n]},Bn.prototype.get=function(n){return"__proto__"==n?w:this.__data__[n]},Bn.prototype.has=function(n){return"__proto__"!=n&&nu.call(this.__data__,n)},Bn.prototype.set=function(n,t){return"__proto__"!=n&&(this.__data__[n]=t),this},Dn.prototype.push=function(n){var t=this.data;typeof n=="string"||ge(n)?t.set.add(n):t.hash[n]=true;
},ce.Cache=Bn,Nn.after=function(n,t){if(typeof t!="function"){if(typeof n!="function")throw new Ge(L);var r=n;n=t,t=r}return n=mu(n=+n)?n:0,function(){return 1>--n?t.apply(this,arguments):void 0}},Nn.ary=function(n,t,r){return r&&Ur(n,t,r)&&(t=w),t=n&&null==t?n.length:bu(+t||0,0),gr(n,E,w,w,w,w,t)},Nn.assign=Co,Nn.at=no,Nn.before=fe,Nn.bind=_o,Nn.bindAll=vo,Nn.bindKey=go,Nn.callback=Se,Nn.chain=Qr,Nn.chunk=function(n,t,r){t=(r?Ur(n,t,r):null==t)?1:bu(yu(t)||1,1),r=0;for(var e=n?n.length:0,u=-1,o=Be(vu(e/t));r<e;)o[++u]=Et(n,r,r+=t);
return o},Nn.compact=function(n){for(var t=-1,r=n?n.length:0,e=-1,u=[];++t<r;){var o=n[t];o&&(u[++e]=o)}return u},Nn.constant=function(n){return function(){return n}},Nn.countBy=to,Nn.create=function(n,t,r){var e=$u(n);return r&&Ur(n,t,r)&&(t=w),t?tt(e,t):e},Nn.curry=yo,Nn.curryRight=mo,Nn.debounce=ae,Nn.defaults=Uo,Nn.defaultsDeep=Wo,Nn.defer=wo,Nn.delay=bo,Nn.difference=Mu,Nn.drop=qr,Nn.dropRight=Pr,Nn.dropRightWhile=function(n,t,r){return n&&n.length?Nt(n,wr(t,r,3),true,true):[]},Nn.dropWhile=function(n,t,r){
return n&&n.length?Nt(n,wr(t,r,3),true):[]},Nn.fill=function(n,t,r,e){var u=n?n.length:0;if(!u)return[];for(r&&typeof r!="number"&&Ur(n,t,r)&&(r=0,e=u),u=n.length,r=null==r?0:+r||0,0>r&&(r=-r>u?0:u+r),e=e===w||e>u?u:+e||0,0>e&&(e+=u),u=r>e?0:e>>>0,r>>>=0;r<u;)n[r++]=t;return n},Nn.filter=re,Nn.flatten=function(n,t,r){var e=n?n.length:0;return r&&Ur(n,t,r)&&(t=false),e?pt(n,t):[]},Nn.flattenDeep=function(n){return n&&n.length?pt(n,true):[]},Nn.flow=xo,Nn.flowRight=Ao,Nn.forEach=uo,Nn.forEachRight=oo,Nn.forIn=Fo,
Nn.forInRight=No,Nn.forOwn=To,Nn.forOwnRight=Lo,Nn.functions=Ie,Nn.groupBy=io,Nn.indexBy=fo,Nn.initial=function(n){return Pr(n,1)},Nn.intersection=Ku,Nn.invert=function(n,t,r){r&&Ur(n,t,r)&&(t=w),r=-1;for(var e=zo(n),u=e.length,o={};++r<u;){var i=e[r],f=n[i];t?nu.call(o,f)?o[f].push(i):o[f]=[i]:o[f]=i}return o},Nn.invoke=ao,Nn.keys=zo,Nn.keysIn=Re,Nn.map=ue,Nn.mapKeys=Bo,Nn.mapValues=Do,Nn.matches=Ne,Nn.matchesProperty=function(n,t){return xt(n,ot(t,true))},Nn.memoize=ce,Nn.merge=Eo,Nn.method=Xo,Nn.methodOf=Ho,
Nn.mixin=Te,Nn.modArgs=jo,Nn.negate=function(n){if(typeof n!="function")throw new Ge(L);return function(){return!n.apply(this,arguments)}},Nn.omit=Mo,Nn.once=function(n){return fe(2,n)},Nn.pairs=Oe,Nn.partial=ko,Nn.partialRight=Io,Nn.partition=co,Nn.pick=qo,Nn.pluck=function(n,t){return ue(n,ze(t))},Nn.property=ze,Nn.propertyOf=function(n){return function(t){return yt(n,Dr(t),t+"")}},Nn.pull=function(){var n=arguments,t=n[0];if(!t||!t.length)return t;for(var r=0,e=xr(),u=n.length;++r<u;)for(var o=0,i=n[r];-1<(o=e(t,i,o));)pu.call(t,o,1);
return t},Nn.pullAt=Vu,Nn.range=function(n,t,r){r&&Ur(n,t,r)&&(t=r=w),n=+n||0,r=null==r?1:+r||0,null==t?(t=n,n=0):t=+t||0;var e=-1;t=bu(vu((t-n)/(r||1)),0);for(var u=Be(t);++e<t;)u[e]=n,n+=r;return u},Nn.rearg=Ro,Nn.reject=function(n,t,r){var e=Oo(n)?Vn:lt;return t=wr(t,r,3),e(n,function(n,r,e){return!t(n,r,e)})},Nn.remove=function(n,t,r){var e=[];if(!n||!n.length)return e;var u=-1,o=[],i=n.length;for(t=wr(t,r,3);++u<i;)r=n[u],t(r,u,n)&&(e.push(r),o.push(u));return It(n,o),e},Nn.rest=Yr,Nn.restParam=le,
Nn.set=function(n,t,r){if(null==n)return n;var e=t+"";t=null!=n[e]||Wr(t,n)?[e]:Dr(t);for(var e=-1,u=t.length,o=u-1,i=n;null!=i&&++e<u;){var f=t[e];ge(i)&&(e==o?i[f]=r:null==i[f]&&(i[f]=Cr(t[e+1])?[]:{})),i=i[f]}return n},Nn.shuffle=function(n){return oe(n,Ru)},Nn.slice=function(n,t,r){var e=n?n.length:0;return e?(r&&typeof r!="number"&&Ur(n,t,r)&&(t=0,r=e),Et(n,t,r)):[]},Nn.sortBy=function(n,t,r){if(null==n)return[];r&&Ur(n,t,r)&&(t=w);var e=-1;return t=wr(t,r,3),n=wt(n,function(n,r,u){return{a:t(n,r,u),
b:++e,c:n}}),Ut(n,f)},Nn.sortByAll=po,Nn.sortByOrder=function(n,t,r,e){return null==n?[]:(e&&Ur(t,r,e)&&(r=w),Oo(t)||(t=null==t?[]:[t]),Oo(r)||(r=null==r?[]:[r]),Wt(n,t,r))},Nn.spread=function(n){if(typeof n!="function")throw new Ge(L);return function(t){return n.apply(this,t)}},Nn.take=function(n,t,r){return n&&n.length?((r?Ur(n,t,r):null==t)&&(t=1),Et(n,0,0>t?0:t)):[]},Nn.takeRight=function(n,t,r){var e=n?n.length:0;return e?((r?Ur(n,t,r):null==t)&&(t=1),t=e-(+t||0),Et(n,0>t?0:t)):[]},Nn.takeRightWhile=function(n,t,r){
return n&&n.length?Nt(n,wr(t,r,3),false,true):[]},Nn.takeWhile=function(n,t,r){return n&&n.length?Nt(n,wr(t,r,3)):[]},Nn.tap=function(n,t,r){return t.call(r,n),n},Nn.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new Ge(L);return false===r?e=false:ge(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),ae(n,t,{leading:e,maxWait:+t,trailing:u})},Nn.thru=ne,Nn.times=function(n,t,r){if(n=yu(n),1>n||!mu(n))return[];var e=-1,u=Be(xu(n,4294967295));for(t=Bt(t,r,1);++e<n;)4294967295>e?u[e]=t(e):t(e);
return u},Nn.toArray=je,Nn.toPlainObject=ke,Nn.transform=function(n,t,r,e){var u=Oo(n)||xe(n);return t=wr(t,e,4),null==r&&(u||ge(n)?(e=n.constructor,r=u?Oo(n)?new e:[]:$u(ve(e)?e.prototype:w)):r={}),(u?Pn:_t)(n,function(n,e,u){return t(r,n,e,u)}),r},Nn.union=Gu,Nn.uniq=Gr,Nn.unzip=Jr,Nn.unzipWith=Xr,Nn.values=Ee,Nn.valuesIn=function(n){return Ft(n,Re(n))},Nn.where=function(n,t){return re(n,bt(t))},Nn.without=Ju,Nn.wrap=function(n,t){return t=null==t?Fe:t,gr(t,R,w,[n],[])},Nn.xor=function(){for(var n=-1,t=arguments.length;++n<t;){
var r=arguments[n];if(Er(r))var e=e?Jn(ft(e,r),ft(r,e)):r}return e?St(e):[]},Nn.zip=Xu,Nn.zipObject=Hr,Nn.zipWith=Hu,Nn.backflow=Ao,Nn.collect=ue,Nn.compose=Ao,Nn.each=uo,Nn.eachRight=oo,Nn.extend=Co,Nn.iteratee=Se,Nn.methods=Ie,Nn.object=Hr,Nn.select=re,Nn.tail=Yr,Nn.unique=Gr,Te(Nn,Nn),Nn.add=function(n,t){return(+n||0)+(+t||0)},Nn.attempt=Jo,Nn.camelCase=Po,Nn.capitalize=function(n){return(n=u(n))&&n.charAt(0).toUpperCase()+n.slice(1)},Nn.ceil=Qo,Nn.clone=function(n,t,r,e){return t&&typeof t!="boolean"&&Ur(n,t,r)?t=false:typeof t=="function"&&(e=r,
r=t,t=false),typeof r=="function"?ot(n,t,Bt(r,e,3)):ot(n,t)},Nn.cloneDeep=function(n,t,r){return typeof t=="function"?ot(n,true,Bt(t,r,3)):ot(n,true)},Nn.deburr=Ce,Nn.endsWith=function(n,t,r){n=u(n),t+="";var e=n.length;return r=r===w?e:xu(0>r?0:+r||0,e),r-=t.length,0<=r&&n.indexOf(t,r)==r},Nn.escape=function(n){return(n=u(n))&&hn.test(n)?n.replace(sn,c):n},Nn.escapeRegExp=function(n){return(n=u(n))&&bn.test(n)?n.replace(wn,l):n||"(?:)"},Nn.every=te,Nn.find=ro,Nn.findIndex=qu,Nn.findKey=$o,Nn.findLast=eo,
Nn.findLastIndex=Pu,Nn.findLastKey=So,Nn.findWhere=function(n,t){return ro(n,bt(t))},Nn.first=Kr,Nn.floor=ni,Nn.get=function(n,t,r){return n=null==n?w:yt(n,Dr(t),t+""),n===w?r:n},Nn.gt=se,Nn.gte=function(n,t){return n>=t},Nn.has=function(n,t){if(null==n)return false;var r=nu.call(n,t);if(!r&&!Wr(t)){if(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),null==n)return false;t=Zr(t),r=nu.call(n,t)}return r||Sr(n.length)&&Cr(t,n.length)&&(Oo(n)||pe(n))},Nn.identity=Fe,Nn.includes=ee,Nn.indexOf=Vr,Nn.inRange=function(n,t,r){
return t=+t||0,r===w?(r=t,t=0):r=+r||0,n>=xu(t,r)&&n<bu(t,r)},Nn.isArguments=pe,Nn.isArray=Oo,Nn.isBoolean=function(n){return true===n||false===n||h(n)&&ru.call(n)==M},Nn.isDate=function(n){return h(n)&&ru.call(n)==q},Nn.isElement=function(n){return!!n&&1===n.nodeType&&h(n)&&!me(n)},Nn.isEmpty=function(n){return null==n?true:Er(n)&&(Oo(n)||be(n)||pe(n)||h(n)&&ve(n.splice))?!n.length:!zo(n).length},Nn.isEqual=he,Nn.isError=_e,Nn.isFinite=function(n){return typeof n=="number"&&mu(n)},Nn.isFunction=ve,Nn.isMatch=function(n,t,r,e){
return r=typeof r=="function"?Bt(r,e,3):w,mt(n,Ar(t),r)},Nn.isNaN=function(n){return de(n)&&n!=+n},Nn.isNative=ye,Nn.isNull=function(n){return null===n},Nn.isNumber=de,Nn.isObject=ge,Nn.isPlainObject=me,Nn.isRegExp=we,Nn.isString=be,Nn.isTypedArray=xe,Nn.isUndefined=function(n){return n===w},Nn.kebabCase=Ko,Nn.last=Zr,Nn.lastIndexOf=function(n,t,r){var e=n?n.length:0;if(!e)return-1;var u=e;if(typeof r=="number")u=(0>r?bu(e+r,0):xu(r||0,e-1))+1;else if(r)return u=Lt(n,t,true)-1,n=n[u],(t===t?t===n:n!==n)?u:-1;
if(t!==t)return p(n,u,true);for(;u--;)if(n[u]===t)return u;return-1},Nn.lt=Ae,Nn.lte=function(n,t){return n<=t},Nn.max=ti,Nn.min=ri,Nn.noConflict=function(){return Zn._=eu,this},Nn.noop=Le,Nn.now=ho,Nn.pad=function(n,t,r){n=u(n),t=+t;var e=n.length;return e<t&&mu(t)?(e=(t-e)/2,t=yu(e),e=vu(e),r=pr("",e,r),r.slice(0,t)+n+r):n},Nn.padLeft=Vo,Nn.padRight=Zo,Nn.parseInt=function(n,t,r){return(r?Ur(n,t,r):null==t)?t=0:t&&(t=+t),n=We(n),ju(n,t||(In.test(n)?16:10))},Nn.random=function(n,t,r){r&&Ur(n,t,r)&&(t=r=w);
var e=null==n,u=null==t;return null==r&&(u&&typeof n=="boolean"?(r=n,n=1):typeof t=="boolean"&&(r=t,u=true)),e&&u&&(t=1,u=false),n=+n||0,u?(t=n,n=0):t=+t||0,r||n%1||t%1?(r=ku(),xu(n+r*(t-n+fu("1e-"+((r+"").length-1))),t)):Rt(n,t)},Nn.reduce=lo,Nn.reduceRight=so,Nn.repeat=Ue,Nn.result=function(n,t,r){var e=null==n?w:n[t];return e===w&&(null==n||Wr(t,n)||(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),e=null==n?w:n[Zr(t)]),e=e===w?r:e),ve(e)?e.call(n):e},Nn.round=ei,Nn.runInContext=m,Nn.size=function(n){var t=n?Bu(n):0;
return Sr(t)?t:zo(n).length},Nn.snakeCase=Yo,Nn.some=ie,Nn.sortedIndex=Zu,Nn.sortedLastIndex=Yu,Nn.startCase=Go,Nn.startsWith=function(n,t,r){return n=u(n),r=null==r?0:xu(0>r?0:+r||0,n.length),n.lastIndexOf(t,r)==r},Nn.sum=function(n,t,r){if(r&&Ur(n,t,r)&&(t=w),t=wr(t,r,3),1==t.length){n=Oo(n)?n:zr(n),r=n.length;for(var e=0;r--;)e+=+t(n[r])||0;n=e}else n=$t(n,t);return n},Nn.template=function(n,t,r){var e=Nn.templateSettings;r&&Ur(n,t,r)&&(t=r=w),n=u(n),t=nt(tt({},r||t),e,Qn),r=nt(tt({},t.imports),e.imports,Qn);
var o,i,f=zo(r),a=Ft(r,f),c=0;r=t.interpolate||Cn;var l="__p+='";r=Ze((t.escape||Cn).source+"|"+r.source+"|"+(r===gn?jn:Cn).source+"|"+(t.evaluate||Cn).source+"|$","g");var p="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,u,f,a){return e||(e=u),l+=n.slice(c,a).replace(Un,s),r&&(o=true,l+="'+__e("+r+")+'"),f&&(i=true,l+="';"+f+";\n__p+='"),e&&(l+="'+((__t=("+e+"))==null?'':__t)+'"),c=a+t.length,t}),l+="';",(t=t.variable)||(l="with(obj){"+l+"}"),l=(i?l.replace(fn,""):l).replace(an,"$1").replace(cn,"$1;"),
l="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(o?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}",t=Jo(function(){return qe(f,p+"return "+l).apply(w,a)}),t.source=l,_e(t))throw t;return t},Nn.trim=We,Nn.trimLeft=function(n,t,r){var e=n;return(n=u(n))?n.slice((r?Ur(e,t,r):null==t)?g(n):o(n,t+"")):n},Nn.trimRight=function(n,t,r){var e=n;return(n=u(n))?(r?Ur(e,t,r):null==t)?n.slice(0,y(n)+1):n.slice(0,i(n,t+"")+1):n;
},Nn.trunc=function(n,t,r){r&&Ur(n,t,r)&&(t=w);var e=U;if(r=W,null!=t)if(ge(t)){var o="separator"in t?t.separator:o,e="length"in t?+t.length||0:e;r="omission"in t?u(t.omission):r}else e=+t||0;if(n=u(n),e>=n.length)return n;if(e-=r.length,1>e)return r;if(t=n.slice(0,e),null==o)return t+r;if(we(o)){if(n.slice(e).search(o)){var i,f=n.slice(0,e);for(o.global||(o=Ze(o.source,(kn.exec(o)||"")+"g")),o.lastIndex=0;n=o.exec(f);)i=n.index;t=t.slice(0,null==i?e:i)}}else n.indexOf(o,e)!=e&&(o=t.lastIndexOf(o),
-1<o&&(t=t.slice(0,o)));return t+r},Nn.unescape=function(n){return(n=u(n))&&pn.test(n)?n.replace(ln,d):n},Nn.uniqueId=function(n){var t=++tu;return u(n)+t},Nn.words=$e,Nn.all=te,Nn.any=ie,Nn.contains=ee,Nn.eq=he,Nn.detect=ro,Nn.foldl=lo,Nn.foldr=so,Nn.head=Kr,Nn.include=ee,Nn.inject=lo,Te(Nn,function(){var n={};return _t(Nn,function(t,r){Nn.prototype[r]||(n[r]=t)}),n}(),false),Nn.sample=oe,Nn.prototype.sample=function(n){return this.__chain__||null!=n?this.thru(function(t){return oe(t,n)}):oe(this.value());
},Nn.VERSION=b,Pn("bind bindKey curry curryRight partial partialRight".split(" "),function(n){Nn[n].placeholder=Nn}),Pn(["drop","take"],function(n,t){zn.prototype[n]=function(r){var e=this.__filtered__;if(e&&!t)return new zn(this);r=null==r?1:bu(yu(r)||0,0);var u=this.clone();return e?u.__takeCount__=xu(u.__takeCount__,r):u.__views__.push({size:r,type:n+(0>u.__dir__?"Right":"")}),u},zn.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),Pn(["filter","map","takeWhile"],function(n,t){
var r=t+1,e=r!=T;zn.prototype[n]=function(n,t){var u=this.clone();return u.__iteratees__.push({iteratee:wr(n,t,1),type:r}),u.__filtered__=u.__filtered__||e,u}}),Pn(["first","last"],function(n,t){var r="take"+(t?"Right":"");zn.prototype[n]=function(){return this[r](1).value()[0]}}),Pn(["initial","rest"],function(n,t){var r="drop"+(t?"":"Right");zn.prototype[n]=function(){return this.__filtered__?new zn(this):this[r](1)}}),Pn(["pluck","where"],function(n,t){var r=t?"filter":"map",e=t?bt:ze;zn.prototype[n]=function(n){
return this[r](e(n))}}),zn.prototype.compact=function(){return this.filter(Fe)},zn.prototype.reject=function(n,t){return n=wr(n,t,1),this.filter(function(t){return!n(t)})},zn.prototype.slice=function(n,t){n=null==n?0:+n||0;var r=this;return r.__filtered__&&(0<n||0>t)?new zn(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==w&&(t=+t||0,r=0>t?r.dropRight(-t):r.take(t-n)),r)},zn.prototype.takeRightWhile=function(n,t){return this.reverse().takeWhile(n,t).reverse()},zn.prototype.toArray=function(){return this.take(Ru);
},_t(zn.prototype,function(n,t){var r=/^(?:filter|map|reject)|While$/.test(t),e=/^(?:first|last)$/.test(t),u=Nn[e?"take"+("last"==t?"Right":""):t];u&&(Nn.prototype[t]=function(){function t(n){return e&&i?u(n,1)[0]:u.apply(w,Jn([n],o))}var o=e?[1]:arguments,i=this.__chain__,f=this.__wrapped__,a=!!this.__actions__.length,c=f instanceof zn,l=o[0],s=c||Oo(f);return s&&r&&typeof l=="function"&&1!=l.length&&(c=s=false),l={func:ne,args:[t],thisArg:w},a=c&&!a,e&&!i?a?(f=f.clone(),f.__actions__.push(l),n.call(f)):u.call(w,this.value())[0]:!e&&s?(f=a?f:new zn(this),
f=n.apply(f,o),f.__actions__.push(l),new Ln(f,i)):this.thru(t)})}),Pn("join pop push replace shift sort splice split unshift".split(" "),function(n){var t=(/^(?:replace|split)$/.test(n)?He:Je)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:join|pop|replace|shift)$/.test(n);Nn.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?t.apply(this.value(),n):this[r](function(r){return t.apply(r,n)})}}),_t(zn.prototype,function(n,t){var r=Nn[t];if(r){var e=r.name+"";(Wu[e]||(Wu[e]=[])).push({
name:t,func:r})}}),Wu[sr(w,A).name]=[{name:"wrapper",func:w}],zn.prototype.clone=function(){var n=new zn(this.__wrapped__);return n.__actions__=qn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=qn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=qn(this.__views__),n},zn.prototype.reverse=function(){if(this.__filtered__){var n=new zn(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n},zn.prototype.value=function(){
var n,t=this.__wrapped__.value(),r=this.__dir__,e=Oo(t),u=0>r,o=e?t.length:0;n=o;for(var i=this.__views__,f=0,a=-1,c=i.length;++a<c;){var l=i[a],s=l.size;switch(l.type){case"drop":f+=s;break;case"dropRight":n-=s;break;case"take":n=xu(n,f+s);break;case"takeRight":f=bu(f,n-s)}}if(n={start:f,end:n},i=n.start,f=n.end,n=f-i,u=u?f:i-1,i=this.__iteratees__,f=i.length,a=0,c=xu(n,this.__takeCount__),!e||o<F||o==n&&c==n)return Tt(t,this.__actions__);e=[];n:for(;n--&&a<c;){for(u+=r,o=-1,l=t[u];++o<f;){var p=i[o],s=p.type,p=p.iteratee(l);
if(s==T)l=p;else if(!p){if(s==N)continue n;break n}}e[a++]=l}return e},Nn.prototype.chain=function(){return Qr(this)},Nn.prototype.commit=function(){return new Ln(this.value(),this.__chain__)},Nn.prototype.concat=Qu,Nn.prototype.plant=function(n){for(var t,r=this;r instanceof Tn;){var e=Mr(r);t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},Nn.prototype.reverse=function(){function n(n){return n.reverse()}var t=this.__wrapped__;return t instanceof zn?(this.__actions__.length&&(t=new zn(this)),
t=t.reverse(),t.__actions__.push({func:ne,args:[n],thisArg:w}),new Ln(t,this.__chain__)):this.thru(n)},Nn.prototype.toString=function(){return this.value()+""},Nn.prototype.run=Nn.prototype.toJSON=Nn.prototype.valueOf=Nn.prototype.value=function(){return Tt(this.__wrapped__,this.__actions__)},Nn.prototype.collect=Nn.prototype.map,Nn.prototype.head=Nn.prototype.first,Nn.prototype.select=Nn.prototype.filter,Nn.prototype.tail=Nn.prototype.rest,Nn}var w,b="3.10.1",x=1,A=2,j=4,k=8,I=16,R=32,O=64,E=128,C=256,U=30,W="...",$=150,S=16,F=200,N=1,T=2,L="Expected a function",z="__lodash_placeholder__",B="[object Arguments]",D="[object Array]",M="[object Boolean]",q="[object Date]",P="[object Error]",K="[object Function]",V="[object Number]",Z="[object Object]",Y="[object RegExp]",G="[object String]",J="[object ArrayBuffer]",X="[object Float32Array]",H="[object Float64Array]",Q="[object Int8Array]",nn="[object Int16Array]",tn="[object Int32Array]",rn="[object Uint8Array]",en="[object Uint8ClampedArray]",un="[object Uint16Array]",on="[object Uint32Array]",fn=/\b__p\+='';/g,an=/\b(__p\+=)''\+/g,cn=/(__e\(.*?\)|\b__t\))\+'';/g,ln=/&(?:amp|lt|gt|quot|#39|#96);/g,sn=/[&<>"'`]/g,pn=RegExp(ln.source),hn=RegExp(sn.source),_n=/<%-([\s\S]+?)%>/g,vn=/<%([\s\S]+?)%>/g,gn=/<%=([\s\S]+?)%>/g,yn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,dn=/^\w*$/,mn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,wn=/^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,bn=RegExp(wn.source),xn=/[\u0300-\u036f\ufe20-\ufe23]/g,An=/\\(\\)?/g,jn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,kn=/\w*$/,In=/^0[xX]/,Rn=/^\[object .+?Constructor\]$/,On=/^\d+$/,En=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,Cn=/($^)/,Un=/['\n\r\u2028\u2029\\]/g,Wn=RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+","g"),$n="Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout isFinite parseFloat parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap".split(" "),Sn={};
Sn[X]=Sn[H]=Sn[Q]=Sn[nn]=Sn[tn]=Sn[rn]=Sn[en]=Sn[un]=Sn[on]=true,Sn[B]=Sn[D]=Sn[J]=Sn[M]=Sn[q]=Sn[P]=Sn[K]=Sn["[object Map]"]=Sn[V]=Sn[Z]=Sn[Y]=Sn["[object Set]"]=Sn[G]=Sn["[object WeakMap]"]=false;var Fn={};Fn[B]=Fn[D]=Fn[J]=Fn[M]=Fn[q]=Fn[X]=Fn[H]=Fn[Q]=Fn[nn]=Fn[tn]=Fn[V]=Fn[Z]=Fn[Y]=Fn[G]=Fn[rn]=Fn[en]=Fn[un]=Fn[on]=true,Fn[P]=Fn[K]=Fn["[object Map]"]=Fn["[object Set]"]=Fn["[object WeakMap]"]=false;var Nn={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a",
"\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y",
"\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss"},Tn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Ln={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},zn={"function":true,object:true},Bn={0:"x30",1:"x31",2:"x32",3:"x33",4:"x34",5:"x35",6:"x36",7:"x37",8:"x38",9:"x39",A:"x41",B:"x42",C:"x43",D:"x44",E:"x45",F:"x46",a:"x61",b:"x62",c:"x63",d:"x64",e:"x65",f:"x66",n:"x6e",r:"x72",t:"x74",u:"x75",v:"x76",x:"x78"},Dn={"\\":"\\",
"'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Mn=zn[typeof exports]&&exports&&!exports.nodeType&&exports,qn=zn[typeof module]&&module&&!module.nodeType&&module,Pn=zn[typeof self]&&self&&self.Object&&self,Kn=zn[typeof window]&&window&&window.Object&&window,Vn=qn&&qn.exports===Mn&&Mn,Zn=Mn&&qn&&typeof global=="object"&&global&&global.Object&&global||Kn!==(this&&this.window)&&Kn||Pn||this,Yn=m();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Zn._=Yn, define(function(){
return Yn})):Mn&&qn?Vn?(qn.exports=Yn)._=Yn:Mn._=Yn:Zn._=Yn}).call(this);
// Generated by CoffeeScript 1.9.2
(function(root, factory) {
  if (('function' === typeof define) && (define.amd != null)) {
    return define(factory);
  } else if (typeof exports !== "undefined" && exports !== null) {
    return module.exports = factory();
  } else {
    return root.helfer = factory();
  }
})(this, function() {
  var helfer;
  helfer = {};
  helfer.camelToSnake = function(string) {
    return string.replace(/([a-z][A-Z])/g, function(m) {
      return m[0] + '_' + m[1].toLowerCase();
    });
  };
  helfer.snakeToCamel = function(string) {
    return string.replace(/_([a-z])/g, function(m) {
      return m[1].toUpperCase();
    });
  };
  helfer.camelToHyphen = function(string) {
    return string.replace(/([a-z][A-Z])/g, function(m) {
      return m[0] + '-' + m[1].toLowerCase();
    });
  };
  helfer.hyphenToCamel = function(string) {
    return string.replace(/-([a-z])/g, function(m) {
      return m[1].toUpperCase();
    });
  };
  helfer.colonToSnake = function(string) {
    return string.replace(/:/g, '_');
  };
  helfer.snakeToColon = function(string) {
    return string.replace(/_/g, ':');
  };
  helfer.hyphenColonToCamelSnake = function(string) {
    return helfer.hyphenToCamel(helfer.colonToSnake(string));
  };
  helfer.camelSnakeToHyphenColon = function(string) {
    return helfer.camelToHyphen(helfer.snakeToColon(string));
  };
  helfer.uppercaseFirstLetter = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  helfer.lowercaseFirstLetter = function(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  };
  helfer.splitCamelcase = function(string) {
    return string.match(/([A-Z]?[^A-Z]*)/g).slice(0, -1).map(function(x) {
      return x.toLowerCase();
    });
  };
  helfer.joinCamelcase = function(array) {
    var capitalize;
    capitalize = function(string) {
      return helfer.uppercaseFirstLetter(string.toLowerCase());
    };
    return helfer.lowercaseFirstLetter(array.map(capitalize).join(''));
  };
  helfer.splitUnderscore = function(string) {
    if (string === '') {
      return [];
    }
    return string.split('_');
  };
  helfer.joinUnderscore = function(array) {
    return array.join('_');
  };
  helfer.splitUppercaseUnderscore = function(string) {
    if (string === '') {
      return [];
    }
    return string.split('_').map(function(x) {
      return x.toLowerCase();
    });
  };
  helfer.joinUppercaseUnderscore = function(array) {
    return array.map(function(x) {
      return x.toUpperCase();
    }).join('_');
  };
  helfer.coerceToArray = function(arg) {
    if (Array.isArray(arg)) {
      return arg;
    }
    if (arg == null) {
      return [];
    }
    return [arg];
  };
  helfer.findIndex = function(array, predicate) {
    var index, length;
    index = -1;
    length = array.length;
    while (++index < length) {
      if (predicate(array[index])) {
        return index;
      }
    }
    return -1;
  };
  helfer.findIndexWhereProperty = function(objects, property) {
    return helfer.findIndex(objects, function(object) {
      return helfer.isObject(object) && (!helfer.isUndefined(object[property]));
    });
  };
  helfer.findIndexWhereSequence = function(array, sequence) {
    var index, length, matchingSequenceIndex;
    if (sequence.length === 0) {
      return -1;
    }
    matchingSequenceIndex = -1;
    index = -1;
    length = array.length;
    while (++index < length) {
      if (matchingSequenceIndex !== -1) {
        matchingSequenceIndex++;
        if (matchingSequenceIndex === sequence.length) {
          return index - matchingSequenceIndex;
        }
        if (array[index] !== sequence[matchingSequenceIndex]) {
          matchingSequenceIndex = -1;
        }
      } else {
        if (array[index] === sequence[0]) {
          if (sequence.length === 1) {
            return index;
          }
          matchingSequenceIndex = 0;
        }
      }
    }
    if (matchingSequenceIndex !== -1 && matchingSequenceIndex + 1 === sequence.length) {
      return index - sequence.length;
    }
    return -1;
  };
  helfer.splitArrayWhere = function(array, predicate) {
    var index;
    index = helfer.findIndex(array, predicate);
    if (index === -1) {
      return [array, []];
    }
    return [array.slice(0, index), array.slice(index)];
  };
  helfer.splitArrayWhereSequence = function(array, value) {
    var index, rest, results, sequence;
    sequence = helfer.coerceToArray(value);
    results = [];
    rest = array;
    while (true) {
      index = helfer.findIndexWhereSequence(rest, sequence);
      if (index === -1) {
        results.push(rest);
        return results;
      } else {
        results.push(rest.slice(0, index));
        rest = rest.slice(index + sequence.length);
      }
    }
  };
  helfer.reverseIndex = function(index) {
    var reverseIndex;
    reverseIndex = {};
    Object.keys(index).forEach(function(key) {
      var value;
      value = index[key];
      if ('string' !== typeof value) {
        throw Error('all keys in index must map to a string');
      }
      if (reverseIndex[value] == null) {
        reverseIndex[value] = [];
      }
      return reverseIndex[value].push(key);
    });
    return reverseIndex;
  };
  helfer.inherits = function(constructor, superConstructor) {
    var proxyConstructor;
    if ('function' === typeof Object.create) {
      constructor.prototype = Object.create(superConstructor.prototype);
      return constructor.prototype.constructor = constructor;
    } else {
      proxyConstructor = function() {};
      proxyConstructor.prototype = superConstructor.prototype;
      constructor.prototype = new proxyConstructor;
      return constructor.prototype.constructor = constructor;
    }
  };
  helfer.parseFunctionArguments = function(fun) {
    var argumentPart, string;
    if ('function' !== typeof fun) {
      throw new Error('argument must be a function');
    }
    string = fun.toString();
    argumentPart = string.slice(string.indexOf('(') + 1, string.indexOf(')'));
    return argumentPart.match(/([^\s,]+)/g) || [];
  };
  helfer.identity = function(x) {
    return x;
  };
  helfer.isObject = function(x) {
    return x === Object(x);
  };
  helfer.isUndefined = function(x) {
    return 'undefined' === typeof x;
  };
  helfer.isNull = function(x) {
    return null === x;
  };
  helfer.isExisting = function(x) {
    return x != null;
  };
  helfer.isThenable = function(x) {
    return helfer.isObject(x) && 'function' === typeof x.then;
  };
  helfer.isError = function(x) {
    return x instanceof Error;
  };
  return helfer;
});

/* @preserve
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
/**
 * bluebird build version 2.9.34
 * Features enabled: core, race, call_get, generators, map, nodeify, promisify, props, reduce, settle, some, cancel, using, filter, any, each, timers
*/
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;"undefined"!=typeof window?e=window:"undefined"!=typeof global?e=global:"undefined"!=typeof self&&(e=self),e.Promise=t()}}(function(){var t,e,r;return function n(t,e,r){function i(s,a){if(!e[s]){if(!t[s]){var u="function"==typeof _dereq_&&_dereq_;if(!a&&u)return u(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var l=e[s]={exports:{}};t[s][0].call(l.exports,function(e){var r=t[s][1][e];return i(r?r:e)},l,l.exports,n,t,e,r)}return e[s].exports}for(var o="function"==typeof _dereq_&&_dereq_,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(t,e){"use strict";e.exports=function(t){function e(t){var e=new r(t),n=e.promise();return e.setHowMany(1),e.setUnwrap(),e.init(),n}var r=t._SomePromiseArray;t.any=function(t){return e(t)},t.prototype.any=function(){return e(this)}}},{}],2:[function(t,e){"use strict";function r(){this._isTickUsed=!1,this._lateQueue=new c(16),this._normalQueue=new c(16),this._trampolineEnabled=!0;var t=this;this.drainQueues=function(){t._drainQueues()},this._schedule=u.isStatic?u(this.drainQueues):u}function n(t,e,r){this._lateQueue.push(t,e,r),this._queueTick()}function i(t,e,r){this._normalQueue.push(t,e,r),this._queueTick()}function o(t){this._normalQueue._pushOne(t),this._queueTick()}var s;try{throw new Error}catch(a){s=a}var u=t("./schedule.js"),c=t("./queue.js"),l=t("./util.js");r.prototype.disableTrampolineIfNecessary=function(){l.hasDevTools&&(this._trampolineEnabled=!1)},r.prototype.enableTrampoline=function(){this._trampolineEnabled||(this._trampolineEnabled=!0,this._schedule=function(t){setTimeout(t,0)})},r.prototype.haveItemsQueued=function(){return this._normalQueue.length()>0},r.prototype.throwLater=function(t,e){if(1===arguments.length&&(e=t,t=function(){throw e}),"undefined"!=typeof setTimeout)setTimeout(function(){t(e)},0);else try{this._schedule(function(){t(e)})}catch(r){throw new Error("No async scheduler available\n\n    See http://goo.gl/m3OTXk\n")}},l.hasDevTools?(u.isStatic&&(u=function(t){setTimeout(t,0)}),r.prototype.invokeLater=function(t,e,r){this._trampolineEnabled?n.call(this,t,e,r):this._schedule(function(){setTimeout(function(){t.call(e,r)},100)})},r.prototype.invoke=function(t,e,r){this._trampolineEnabled?i.call(this,t,e,r):this._schedule(function(){t.call(e,r)})},r.prototype.settlePromises=function(t){this._trampolineEnabled?o.call(this,t):this._schedule(function(){t._settlePromises()})}):(r.prototype.invokeLater=n,r.prototype.invoke=i,r.prototype.settlePromises=o),r.prototype.invokeFirst=function(t,e,r){this._normalQueue.unshift(t,e,r),this._queueTick()},r.prototype._drainQueue=function(t){for(;t.length()>0;){var e=t.shift();if("function"==typeof e){var r=t.shift(),n=t.shift();e.call(r,n)}else e._settlePromises()}},r.prototype._drainQueues=function(){this._drainQueue(this._normalQueue),this._reset(),this._drainQueue(this._lateQueue)},r.prototype._queueTick=function(){this._isTickUsed||(this._isTickUsed=!0,this._schedule(this.drainQueues))},r.prototype._reset=function(){this._isTickUsed=!1},e.exports=new r,e.exports.firstLineError=s},{"./queue.js":28,"./schedule.js":31,"./util.js":38}],3:[function(t,e){"use strict";e.exports=function(t,e,r){var n=function(t,e){this._reject(e)},i=function(t,e){e.promiseRejectionQueued=!0,e.bindingPromise._then(n,n,null,this,t)},o=function(t,e){this._isPending()&&this._resolveCallback(e.target)},s=function(t,e){e.promiseRejectionQueued||this._reject(t)};t.prototype.bind=function(n){var a=r(n),u=new t(e);u._propagateFrom(this,1);var c=this._target();if(u._setBoundTo(a),a instanceof t){var l={promiseRejectionQueued:!1,promise:u,target:c,bindingPromise:a};c._then(e,i,u._progress,u,l),a._then(o,s,u._progress,u,l)}else u._resolveCallback(c);return u},t.prototype._setBoundTo=function(t){void 0!==t?(this._bitField=131072|this._bitField,this._boundTo=t):this._bitField=-131073&this._bitField},t.prototype._isBound=function(){return 131072===(131072&this._bitField)},t.bind=function(n,i){var o=r(n),s=new t(e);return s._setBoundTo(o),o instanceof t?o._then(function(){s._resolveCallback(i)},s._reject,s._progress,s,null):s._resolveCallback(i),s}}},{}],4:[function(t,e){"use strict";function r(){try{Promise===i&&(Promise=n)}catch(t){}return i}var n;"undefined"!=typeof Promise&&(n=Promise);var i=t("./promise.js")();i.noConflict=r,e.exports=i},{"./promise.js":23}],5:[function(t,e){"use strict";var r=Object.create;if(r){var n=r(null),i=r(null);n[" size"]=i[" size"]=0}e.exports=function(e){function r(t,r){var n;if(null!=t&&(n=t[r]),"function"!=typeof n){var i="Object "+a.classString(t)+" has no method '"+a.toString(r)+"'";throw new e.TypeError(i)}return n}function n(t){var e=this.pop(),n=r(t,e);return n.apply(t,this)}function i(t){return t[this]}function o(t){var e=+this;return 0>e&&(e=Math.max(0,e+t.length)),t[e]}{var s,a=t("./util.js"),u=a.canEvaluate;a.isIdentifier}e.prototype.call=function(t){for(var e=arguments.length,r=new Array(e-1),i=1;e>i;++i)r[i-1]=arguments[i];return r.push(t),this._then(n,void 0,void 0,r,void 0)},e.prototype.get=function(t){var e,r="number"==typeof t;if(r)e=o;else if(u){var n=s(t);e=null!==n?n:i}else e=i;return this._then(e,void 0,void 0,t,void 0)}}},{"./util.js":38}],6:[function(t,e){"use strict";e.exports=function(e){var r=t("./errors.js"),n=t("./async.js"),i=r.CancellationError;e.prototype._cancel=function(t){if(!this.isCancellable())return this;for(var e,r=this;void 0!==(e=r._cancellationParent)&&e.isCancellable();)r=e;this._unsetCancellable(),r._target()._rejectCallback(t,!1,!0)},e.prototype.cancel=function(t){return this.isCancellable()?(void 0===t&&(t=new i),n.invokeLater(this._cancel,this,t),this):this},e.prototype.cancellable=function(){return this._cancellable()?this:(n.enableTrampoline(),this._setCancellable(),this._cancellationParent=void 0,this)},e.prototype.uncancellable=function(){var t=this.then();return t._unsetCancellable(),t},e.prototype.fork=function(t,e,r){var n=this._then(t,e,r,void 0,void 0);return n._setCancellable(),n._cancellationParent=void 0,n}}},{"./async.js":2,"./errors.js":13}],7:[function(t,e){"use strict";e.exports=function(){function e(t){this._parent=t;var r=this._length=1+(void 0===t?0:t._length);j(this,e),r>32&&this.uncycle()}function r(t,e){for(var r=0;r<e.length-1;++r)e[r].push("From previous event:"),e[r]=e[r].join("\n");return r<e.length&&(e[r]=e[r].join("\n")),t+"\n"+e.join("\n")}function n(t){for(var e=0;e<t.length;++e)(0===t[e].length||e+1<t.length&&t[e][0]===t[e+1][0])&&(t.splice(e,1),e--)}function i(t){for(var e=t[0],r=1;r<t.length;++r){for(var n=t[r],i=e.length-1,o=e[i],s=-1,a=n.length-1;a>=0;--a)if(n[a]===o){s=a;break}for(var a=s;a>=0;--a){var u=n[a];if(e[i]!==u)break;e.pop(),i--}e=n}}function o(t){for(var e=[],r=0;r<t.length;++r){var n=t[r],i=_.test(n)||"    (No stack trace)"===n,o=i&&y(n);i&&!o&&(v&&" "!==n.charAt(0)&&(n="    "+n),e.push(n))}return e}function s(t){for(var e=t.stack.replace(/\s+$/g,"").split("\n"),r=0;r<e.length;++r){var n=e[r];if("    (No stack trace)"===n||_.test(n))break}return r>0&&(e=e.slice(r)),e}function a(t){var e;if("function"==typeof t)e="[function "+(t.name||"anonymous")+"]";else{e=t.toString();var r=/\[object [a-zA-Z0-9$_]+\]/;if(r.test(e))try{var n=JSON.stringify(t);e=n}catch(i){}0===e.length&&(e="(empty array)")}return"(<"+u(e)+">, no stack trace)"}function u(t){var e=41;return t.length<e?t:t.substr(0,e-3)+"..."}function c(t){var e=t.match(g);return e?{fileName:e[1],line:parseInt(e[2],10)}:void 0}var l,h=t("./async.js"),p=t("./util.js"),f=/[\\\/]bluebird[\\\/]js[\\\/](main|debug|zalgo|instrumented)/,_=null,d=null,v=!1;p.inherits(e,Error),e.prototype.uncycle=function(){var t=this._length;if(!(2>t)){for(var e=[],r={},n=0,i=this;void 0!==i;++n)e.push(i),i=i._parent;t=this._length=n;for(var n=t-1;n>=0;--n){var o=e[n].stack;void 0===r[o]&&(r[o]=n)}for(var n=0;t>n;++n){var s=e[n].stack,a=r[s];if(void 0!==a&&a!==n){a>0&&(e[a-1]._parent=void 0,e[a-1]._length=1),e[n]._parent=void 0,e[n]._length=1;var u=n>0?e[n-1]:this;t-1>a?(u._parent=e[a+1],u._parent.uncycle(),u._length=u._parent._length+1):(u._parent=void 0,u._length=1);for(var c=u._length+1,l=n-2;l>=0;--l)e[l]._length=c,c++;return}}}},e.prototype.parent=function(){return this._parent},e.prototype.hasParent=function(){return void 0!==this._parent},e.prototype.attachExtraTrace=function(t){if(!t.__stackCleaned__){this.uncycle();for(var s=e.parseStackAndMessage(t),a=s.message,u=[s.stack],c=this;void 0!==c;)u.push(o(c.stack.split("\n"))),c=c._parent;i(u),n(u),p.notEnumerableProp(t,"stack",r(a,u)),p.notEnumerableProp(t,"__stackCleaned__",!0)}},e.parseStackAndMessage=function(t){var e=t.stack,r=t.toString();return e="string"==typeof e&&e.length>0?s(t):["    (No stack trace)"],{message:r,stack:o(e)}},e.formatAndLogError=function(t,e){if("undefined"!=typeof console){var r;if("object"==typeof t||"function"==typeof t){var n=t.stack;r=e+d(n,t)}else r=e+String(t);"function"==typeof l?l(r):("function"==typeof console.log||"object"==typeof console.log)&&console.log(r)}},e.unhandledRejection=function(t){e.formatAndLogError(t,"^--- With additional stack trace: ")},e.isSupported=function(){return"function"==typeof j},e.fireRejectionEvent=function(t,r,n,i){var o=!1;try{"function"==typeof r&&(o=!0,"rejectionHandled"===t?r(i):r(n,i))}catch(s){h.throwLater(s)}var a=!1;try{a=b(t,n,i)}catch(s){a=!0,h.throwLater(s)}var u=!1;if(m)try{u=m(t.toLowerCase(),{reason:n,promise:i})}catch(s){u=!0,h.throwLater(s)}a||o||u||"unhandledRejection"!==t||e.formatAndLogError(n,"Unhandled rejection ")};var y=function(){return!1},g=/[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;e.setBounds=function(t,r){if(e.isSupported()){for(var n,i,o=t.stack.split("\n"),s=r.stack.split("\n"),a=-1,u=-1,l=0;l<o.length;++l){var h=c(o[l]);if(h){n=h.fileName,a=h.line;break}}for(var l=0;l<s.length;++l){var h=c(s[l]);if(h){i=h.fileName,u=h.line;break}}0>a||0>u||!n||!i||n!==i||a>=u||(y=function(t){if(f.test(t))return!0;var e=c(t);return e&&e.fileName===n&&a<=e.line&&e.line<=u?!0:!1})}};var m,j=function(){var t=/^\s*at\s*/,e=function(t,e){return"string"==typeof t?t:void 0!==e.name&&void 0!==e.message?e.toString():a(e)};if("number"==typeof Error.stackTraceLimit&&"function"==typeof Error.captureStackTrace){Error.stackTraceLimit=Error.stackTraceLimit+6,_=t,d=e;var r=Error.captureStackTrace;return y=function(t){return f.test(t)},function(t,e){Error.stackTraceLimit=Error.stackTraceLimit+6,r(t,e),Error.stackTraceLimit=Error.stackTraceLimit-6}}var n=new Error;if("string"==typeof n.stack&&n.stack.split("\n")[0].indexOf("stackDetection@")>=0)return _=/@/,d=e,v=!0,function(t){t.stack=(new Error).stack};var i;try{throw new Error}catch(o){i="stack"in o}return"stack"in n||!i||"number"!=typeof Error.stackTraceLimit?(d=function(t,e){return"string"==typeof t?t:"object"!=typeof e&&"function"!=typeof e||void 0===e.name||void 0===e.message?a(e):e.toString()},null):(_=t,d=e,function(t){Error.stackTraceLimit=Error.stackTraceLimit+6;try{throw new Error}catch(e){t.stack=e.stack}Error.stackTraceLimit=Error.stackTraceLimit-6})}([]),b=function(){if(p.isNode)return function(t,e,r){return"rejectionHandled"===t?process.emit(t,r):process.emit(t,e,r)};var t=!1,e=!0;try{var r=new self.CustomEvent("test");t=r instanceof CustomEvent}catch(n){}if(!t)try{var i=document.createEvent("CustomEvent");i.initCustomEvent("testingtheevent",!1,!0,{}),self.dispatchEvent(i)}catch(n){e=!1}e&&(m=function(e,r){var n;return t?n=new self.CustomEvent(e,{detail:r,bubbles:!1,cancelable:!0}):self.dispatchEvent&&(n=document.createEvent("CustomEvent"),n.initCustomEvent(e,!1,!0,r)),n?!self.dispatchEvent(n):!1});var o={};return o.unhandledRejection="onunhandledRejection".toLowerCase(),o.rejectionHandled="onrejectionHandled".toLowerCase(),function(t,e,r){var n=o[t],i=self[n];return i?("rejectionHandled"===t?i.call(self,r):i.call(self,e,r),!0):!1}}();return"undefined"!=typeof console&&"undefined"!=typeof console.warn&&(l=function(t){console.warn(t)},p.isNode&&process.stderr.isTTY?l=function(t){process.stderr.write("[31m"+t+"[39m\n")}:p.isNode||"string"!=typeof(new Error).stack||(l=function(t){console.warn("%c"+t,"color: red")})),e}},{"./async.js":2,"./util.js":38}],8:[function(t,e){"use strict";e.exports=function(e){function r(t,e,r){this._instances=t,this._callback=e,this._promise=r}function n(t,e){var r={},n=s(t).call(r,e);if(n===a)return n;var i=u(r);return i.length?(a.e=new c("Catch filter must inherit from Error or be a simple predicate function\n\n    See http://goo.gl/o84o68\n"),a):n}var i=t("./util.js"),o=t("./errors.js"),s=i.tryCatch,a=i.errorObj,u=t("./es5.js").keys,c=o.TypeError;return r.prototype.doFilter=function(t){for(var r=this._callback,i=this._promise,o=i._boundValue(),u=0,c=this._instances.length;c>u;++u){var l=this._instances[u],h=l===Error||null!=l&&l.prototype instanceof Error;if(h&&t instanceof l){var p=s(r).call(o,t);return p===a?(e.e=p.e,e):p}if("function"==typeof l&&!h){var f=n(l,t);if(f===a){t=a.e;break}if(f){var p=s(r).call(o,t);return p===a?(e.e=p.e,e):p}}}return e.e=t,e},r}},{"./errors.js":13,"./es5.js":14,"./util.js":38}],9:[function(t,e){"use strict";e.exports=function(t,e,r){function n(){this._trace=new e(o())}function i(){return r()?new n:void 0}function o(){var t=s.length-1;return t>=0?s[t]:void 0}var s=[];return n.prototype._pushContext=function(){r()&&void 0!==this._trace&&s.push(this._trace)},n.prototype._popContext=function(){r()&&void 0!==this._trace&&s.pop()},t.prototype._peekContext=o,t.prototype._pushContext=n.prototype._pushContext,t.prototype._popContext=n.prototype._popContext,i}},{}],10:[function(t,e){"use strict";e.exports=function(e,r){var n,i,o=e._getDomain,s=t("./async.js"),a=t("./errors.js").Warning,u=t("./util.js"),c=u.canAttachTrace,l=!1||u.isNode&&(!!process.env.BLUEBIRD_DEBUG||"development"===process.env.NODE_ENV);return l&&s.disableTrampolineIfNecessary(),e.prototype._ignoreRejections=function(){this._unsetRejectionIsUnhandled(),this._bitField=16777216|this._bitField},e.prototype._ensurePossibleRejectionHandled=function(){0===(16777216&this._bitField)&&(this._setRejectionIsUnhandled(),s.invokeLater(this._notifyUnhandledRejection,this,void 0))},e.prototype._notifyUnhandledRejectionIsHandled=function(){r.fireRejectionEvent("rejectionHandled",n,void 0,this)},e.prototype._notifyUnhandledRejection=function(){if(this._isRejectionUnhandled()){var t=this._getCarriedStackTrace()||this._settledValue;this._setUnhandledRejectionIsNotified(),r.fireRejectionEvent("unhandledRejection",i,t,this)}},e.prototype._setUnhandledRejectionIsNotified=function(){this._bitField=524288|this._bitField},e.prototype._unsetUnhandledRejectionIsNotified=function(){this._bitField=-524289&this._bitField},e.prototype._isUnhandledRejectionNotified=function(){return(524288&this._bitField)>0},e.prototype._setRejectionIsUnhandled=function(){this._bitField=2097152|this._bitField},e.prototype._unsetRejectionIsUnhandled=function(){this._bitField=-2097153&this._bitField,this._isUnhandledRejectionNotified()&&(this._unsetUnhandledRejectionIsNotified(),this._notifyUnhandledRejectionIsHandled())},e.prototype._isRejectionUnhandled=function(){return(2097152&this._bitField)>0},e.prototype._setCarriedStackTrace=function(t){this._bitField=1048576|this._bitField,this._fulfillmentHandler0=t},e.prototype._isCarryingStackTrace=function(){return(1048576&this._bitField)>0},e.prototype._getCarriedStackTrace=function(){return this._isCarryingStackTrace()?this._fulfillmentHandler0:void 0},e.prototype._captureStackTrace=function(){return l&&(this._trace=new r(this._peekContext())),this},e.prototype._attachExtraTrace=function(t,e){if(l&&c(t)){var n=this._trace;if(void 0!==n&&e&&(n=n._parent),void 0!==n)n.attachExtraTrace(t);else if(!t.__stackCleaned__){var i=r.parseStackAndMessage(t);u.notEnumerableProp(t,"stack",i.message+"\n"+i.stack.join("\n")),u.notEnumerableProp(t,"__stackCleaned__",!0)}}},e.prototype._warn=function(t){var e=new a(t),n=this._peekContext();if(n)n.attachExtraTrace(e);else{var i=r.parseStackAndMessage(e);e.stack=i.message+"\n"+i.stack.join("\n")}r.formatAndLogError(e,"")},e.onPossiblyUnhandledRejection=function(t){var e=o();i="function"==typeof t?null===e?t:e.bind(t):void 0},e.onUnhandledRejectionHandled=function(t){var e=o();n="function"==typeof t?null===e?t:e.bind(t):void 0},e.longStackTraces=function(){if(s.haveItemsQueued()&&l===!1)throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/DT1qyG\n");l=r.isSupported(),l&&s.disableTrampolineIfNecessary()},e.hasLongStackTraces=function(){return l&&r.isSupported()},r.isSupported()||(e.longStackTraces=function(){},l=!1),function(){return l}}},{"./async.js":2,"./errors.js":13,"./util.js":38}],11:[function(t,e){"use strict";var r=t("./util.js"),n=r.isPrimitive;e.exports=function(t){var e=function(){return this},r=function(){throw this},i=function(){},o=function(){throw void 0},s=function(t,e){return 1===e?function(){throw t}:2===e?function(){return t}:void 0};t.prototype["return"]=t.prototype.thenReturn=function(t){return void 0===t?this.then(i):n(t)?this._then(s(t,2),void 0,void 0,void 0,void 0):this._then(e,void 0,void 0,t,void 0)},t.prototype["throw"]=t.prototype.thenThrow=function(t){return void 0===t?this.then(o):n(t)?this._then(s(t,1),void 0,void 0,void 0,void 0):this._then(r,void 0,void 0,t,void 0)}}},{"./util.js":38}],12:[function(t,e){"use strict";e.exports=function(t,e){var r=t.reduce;t.prototype.each=function(t){return r(this,t,null,e)},t.each=function(t,n){return r(t,n,null,e)}}},{}],13:[function(t,e){"use strict";function r(t,e){function r(n){return this instanceof r?(l(this,"message","string"==typeof n?n:e),l(this,"name",t),void(Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):Error.call(this))):new r(n)}return c(r,Error),r}function n(t){return this instanceof n?(l(this,"name","OperationalError"),l(this,"message",t),this.cause=t,this.isOperational=!0,void(t instanceof Error?(l(this,"message",t.message),l(this,"stack",t.stack)):Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor))):new n(t)}var i,o,s=t("./es5.js"),a=s.freeze,u=t("./util.js"),c=u.inherits,l=u.notEnumerableProp,h=r("Warning","warning"),p=r("CancellationError","cancellation error"),f=r("TimeoutError","timeout error"),_=r("AggregateError","aggregate error");try{i=TypeError,o=RangeError}catch(d){i=r("TypeError","type error"),o=r("RangeError","range error")}for(var v="join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "),y=0;y<v.length;++y)"function"==typeof Array.prototype[v[y]]&&(_.prototype[v[y]]=Array.prototype[v[y]]);s.defineProperty(_.prototype,"length",{value:0,configurable:!1,writable:!0,enumerable:!0}),_.prototype.isOperational=!0;var g=0;_.prototype.toString=function(){var t=Array(4*g+1).join(" "),e="\n"+t+"AggregateError of:\n";g++,t=Array(4*g+1).join(" ");for(var r=0;r<this.length;++r){for(var n=this[r]===this?"[Circular AggregateError]":this[r]+"",i=n.split("\n"),o=0;o<i.length;++o)i[o]=t+i[o];n=i.join("\n"),e+=n+"\n"}return g--,e},c(n,Error);var m=Error.__BluebirdErrorTypes__;m||(m=a({CancellationError:p,TimeoutError:f,OperationalError:n,RejectionError:n,AggregateError:_}),l(Error,"__BluebirdErrorTypes__",m)),e.exports={Error:Error,TypeError:i,RangeError:o,CancellationError:m.CancellationError,OperationalError:m.OperationalError,TimeoutError:m.TimeoutError,AggregateError:m.AggregateError,Warning:h}},{"./es5.js":14,"./util.js":38}],14:[function(t,e){var r=function(){"use strict";return void 0===this}();if(r)e.exports={freeze:Object.freeze,defineProperty:Object.defineProperty,getDescriptor:Object.getOwnPropertyDescriptor,keys:Object.keys,names:Object.getOwnPropertyNames,getPrototypeOf:Object.getPrototypeOf,isArray:Array.isArray,isES5:r,propertyIsWritable:function(t,e){var r=Object.getOwnPropertyDescriptor(t,e);return!(r&&!r.writable&&!r.set)}};else{var n={}.hasOwnProperty,i={}.toString,o={}.constructor.prototype,s=function(t){var e=[];for(var r in t)n.call(t,r)&&e.push(r);return e},a=function(t,e){return{value:t[e]}},u=function(t,e,r){return t[e]=r.value,t},c=function(t){return t},l=function(t){try{return Object(t).constructor.prototype}catch(e){return o}},h=function(t){try{return"[object Array]"===i.call(t)}catch(e){return!1}};e.exports={isArray:h,keys:s,names:s,defineProperty:u,getDescriptor:a,freeze:c,getPrototypeOf:l,isES5:r,propertyIsWritable:function(){return!0}}}},{}],15:[function(t,e){"use strict";e.exports=function(t,e){var r=t.map;t.prototype.filter=function(t,n){return r(this,t,n,e)},t.filter=function(t,n,i){return r(t,n,i,e)}}},{}],16:[function(t,e){"use strict";e.exports=function(e,r,n){function i(){return this}function o(){throw this}function s(t){return function(){return t}}function a(t){return function(){throw t}}function u(t,e,r){var n;return n=p(e)?r?s(e):a(e):r?i:o,t._then(n,f,void 0,e,void 0)}function c(t){var i=this.promise,o=this.handler,s=i._isBound()?o.call(i._boundValue()):o();if(void 0!==s){var a=n(s,i);if(a instanceof e)return a=a._target(),u(a,t,i.isFulfilled())}return i.isRejected()?(r.e=t,r):t}function l(t){var r=this.promise,i=this.handler,o=r._isBound()?i.call(r._boundValue(),t):i(t);if(void 0!==o){var s=n(o,r);if(s instanceof e)return s=s._target(),u(s,t,!0)}return t}var h=t("./util.js"),p=h.isPrimitive,f=h.thrower;e.prototype._passThroughHandler=function(t,e){if("function"!=typeof t)return this.then();var r={promise:this,handler:t};return this._then(e?c:l,e?c:void 0,void 0,r,void 0)},e.prototype.lastly=e.prototype["finally"]=function(t){return this._passThroughHandler(t,!0)},e.prototype.tap=function(t){return this._passThroughHandler(t,!1)}}},{"./util.js":38}],17:[function(t,e){"use strict";e.exports=function(e,r,n,i){function o(t,r,n){for(var o=0;o<r.length;++o){n._pushContext();var s=h(r[o])(t);if(n._popContext(),s===l){n._pushContext();var a=e.reject(l.e);return n._popContext(),a}var u=i(s,n);if(u instanceof e)return u}return null}function s(t,r,i,o){var s=this._promise=new e(n);s._captureStackTrace(),this._stack=o,this._generatorFunction=t,this._receiver=r,this._generator=void 0,this._yieldHandlers="function"==typeof i?[i].concat(p):p}var a=t("./errors.js"),u=a.TypeError,c=t("./util.js"),l=c.errorObj,h=c.tryCatch,p=[];s.prototype.promise=function(){return this._promise},s.prototype._run=function(){this._generator=this._generatorFunction.call(this._receiver),this._receiver=this._generatorFunction=void 0,this._next(void 0)},s.prototype._continue=function(t){if(t===l)return this._promise._rejectCallback(t.e,!1,!0);var r=t.value;if(t.done===!0)this._promise._resolveCallback(r);else{var n=i(r,this._promise);if(!(n instanceof e)&&(n=o(n,this._yieldHandlers,this._promise),null===n))return void this._throw(new u("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/4Y4pDk\n\n".replace("%s",r)+"From coroutine:\n"+this._stack.split("\n").slice(1,-7).join("\n")));n._then(this._next,this._throw,void 0,this,null)}},s.prototype._throw=function(t){this._promise._attachExtraTrace(t),this._promise._pushContext();var e=h(this._generator["throw"]).call(this._generator,t);this._promise._popContext(),this._continue(e)},s.prototype._next=function(t){this._promise._pushContext();var e=h(this._generator.next).call(this._generator,t);this._promise._popContext(),this._continue(e)},e.coroutine=function(t,e){if("function"!=typeof t)throw new u("generatorFunction must be a function\n\n    See http://goo.gl/6Vqhm0\n");var r=Object(e).yieldHandler,n=s,i=(new Error).stack;return function(){var e=t.apply(this,arguments),o=new n(void 0,void 0,r,i);return o._generator=e,o._next(void 0),o.promise()}},e.coroutine.addYieldHandler=function(t){if("function"!=typeof t)throw new u("fn must be a function\n\n    See http://goo.gl/916lJJ\n");p.push(t)},e.spawn=function(t){if("function"!=typeof t)return r("generatorFunction must be a function\n\n    See http://goo.gl/6Vqhm0\n");var n=new s(t,this),i=n.promise();return n._run(e.spawn),i}}},{"./errors.js":13,"./util.js":38}],18:[function(t,e){"use strict";e.exports=function(e,r,n,i){{var o=t("./util.js");o.canEvaluate,o.tryCatch,o.errorObj}e.join=function(){var t,e=arguments.length-1;if(e>0&&"function"==typeof arguments[e]){t=arguments[e];var n}for(var i=arguments.length,o=new Array(i),s=0;i>s;++s)o[s]=arguments[s];t&&o.pop();var n=new r(o).promise();return void 0!==t?n.spread(t):n}}},{"./util.js":38}],19:[function(t,e){"use strict";e.exports=function(e,r,n,i,o){function s(t,e,r,n){this.constructor$(t),this._promise._captureStackTrace();var i=c();this._callback=null===i?e:i.bind(e),this._preservedValues=n===o?new Array(this.length()):null,this._limit=r,this._inFlight=0,this._queue=r>=1?[]:d,l.invoke(a,this,void 0)}function a(){this._init$(void 0,-2)}function u(t,e,r,n){var i="object"==typeof r&&null!==r?r.concurrency:0;return i="number"==typeof i&&isFinite(i)&&i>=1?i:0,new s(t,e,i,n)}var c=e._getDomain,l=t("./async.js"),h=t("./util.js"),p=h.tryCatch,f=h.errorObj,_={},d=[];h.inherits(s,r),s.prototype._init=function(){},s.prototype._promiseFulfilled=function(t,r){var n=this._values,o=this.length(),s=this._preservedValues,a=this._limit;if(n[r]===_){if(n[r]=t,a>=1&&(this._inFlight--,this._drainQueue(),this._isResolved()))return}else{if(a>=1&&this._inFlight>=a)return n[r]=t,void this._queue.push(r);null!==s&&(s[r]=t);var u=this._callback,c=this._promise._boundValue();this._promise._pushContext();var l=p(u).call(c,t,r,o);if(this._promise._popContext(),l===f)return this._reject(l.e);var h=i(l,this._promise);if(h instanceof e){if(h=h._target(),h._isPending())return a>=1&&this._inFlight++,n[r]=_,h._proxyPromiseArray(this,r);if(!h._isFulfilled())return this._reject(h._reason());l=h._value()}n[r]=l}var d=++this._totalResolved;d>=o&&(null!==s?this._filter(n,s):this._resolve(n))},s.prototype._drainQueue=function(){for(var t=this._queue,e=this._limit,r=this._values;t.length>0&&this._inFlight<e;){if(this._isResolved())return;var n=t.pop();this._promiseFulfilled(r[n],n)}},s.prototype._filter=function(t,e){for(var r=e.length,n=new Array(r),i=0,o=0;r>o;++o)t[o]&&(n[i++]=e[o]);n.length=i,this._resolve(n)},s.prototype.preservedValues=function(){return this._preservedValues},e.prototype.map=function(t,e){return"function"!=typeof t?n("fn must be a function\n\n    See http://goo.gl/916lJJ\n"):u(this,t,e,null).promise()},e.map=function(t,e,r,i){return"function"!=typeof e?n("fn must be a function\n\n    See http://goo.gl/916lJJ\n"):u(t,e,r,i).promise()}}},{"./async.js":2,"./util.js":38}],20:[function(t,e){"use strict";e.exports=function(e,r,n,i){var o=t("./util.js"),s=o.tryCatch;e.method=function(t){if("function"!=typeof t)throw new e.TypeError("fn must be a function\n\n    See http://goo.gl/916lJJ\n");return function(){var n=new e(r);n._captureStackTrace(),n._pushContext();var i=s(t).apply(this,arguments);return n._popContext(),n._resolveFromSyncValue(i),n}},e.attempt=e["try"]=function(t,n,a){if("function"!=typeof t)return i("fn must be a function\n\n    See http://goo.gl/916lJJ\n");var u=new e(r);u._captureStackTrace(),u._pushContext();var c=o.isArray(n)?s(t).apply(a,n):s(t).call(a,n);return u._popContext(),u._resolveFromSyncValue(c),u},e.prototype._resolveFromSyncValue=function(t){t===o.errorObj?this._rejectCallback(t.e,!1,!0):this._resolveCallback(t,!0)}}},{"./util.js":38}],21:[function(t,e){"use strict";e.exports=function(e){function r(t,e){var r=this;if(!o.isArray(t))return n.call(r,t,e);var i=a(e).apply(r._boundValue(),[null].concat(t));i===u&&s.throwLater(i.e)}function n(t,e){var r=this,n=r._boundValue(),i=void 0===t?a(e).call(n,null):a(e).call(n,null,t);i===u&&s.throwLater(i.e)}function i(t,e){var r=this;if(!t){var n=r._target(),i=n._getCarriedStackTrace();i.cause=t,t=i}var o=a(e).call(r._boundValue(),t);o===u&&s.throwLater(o.e)}var o=t("./util.js"),s=t("./async.js"),a=o.tryCatch,u=o.errorObj;e.prototype.asCallback=e.prototype.nodeify=function(t,e){if("function"==typeof t){var o=n;void 0!==e&&Object(e).spread&&(o=r),this._then(o,i,void 0,this,t)}return this}}},{"./async.js":2,"./util.js":38}],22:[function(t,e){"use strict";e.exports=function(e,r){var n=t("./util.js"),i=t("./async.js"),o=n.tryCatch,s=n.errorObj;e.prototype.progressed=function(t){return this._then(void 0,void 0,t,void 0,void 0)},e.prototype._progress=function(t){this._isFollowingOrFulfilledOrRejected()||this._target()._progressUnchecked(t)},e.prototype._progressHandlerAt=function(t){return 0===t?this._progressHandler0:this[(t<<2)+t-5+2]},e.prototype._doProgressWith=function(t){var r=t.value,i=t.handler,a=t.promise,u=t.receiver,c=o(i).call(u,r);if(c===s){if(null!=c.e&&"StopProgressPropagation"!==c.e.name){var l=n.canAttachTrace(c.e)?c.e:new Error(n.toString(c.e));a._attachExtraTrace(l),a._progress(c.e)}}else c instanceof e?c._then(a._progress,null,null,a,void 0):a._progress(c)},e.prototype._progressUnchecked=function(t){for(var n=this._length(),o=this._progress,s=0;n>s;s++){var a=this._progressHandlerAt(s),u=this._promiseAt(s);if(u instanceof e)"function"==typeof a?i.invoke(this._doProgressWith,this,{handler:a,promise:u,receiver:this._receiverAt(s),value:t}):i.invoke(o,u,t);else{var c=this._receiverAt(s);"function"==typeof a?a.call(c,t,u):c instanceof r&&!c._isResolved()&&c._promiseProgressed(t,u)}}}}},{"./async.js":2,"./util.js":38}],23:[function(t,e){"use strict";e.exports=function(){function e(t){if("function"!=typeof t)throw new l("the promise constructor requires a resolver function\n\n    See http://goo.gl/EC22Yn\n");if(this.constructor!==e)throw new l("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/KsIlge\n");this._bitField=0,this._fulfillmentHandler0=void 0,this._rejectionHandler0=void 0,this._progressHandler0=void 0,this._promise0=void 0,this._receiver0=void 0,this._settledValue=void 0,t!==h&&this._resolveFromResolver(t)}function r(t){var r=new e(h);r._fulfillmentHandler0=t,r._rejectionHandler0=t,r._progressHandler0=t,r._promise0=t,r._receiver0=t,r._settledValue=t}var n,i=function(){return new l("circular promise resolution chain\n\n    See http://goo.gl/LhFpo0\n")},o=function(){return new e.PromiseInspection(this._target())},s=function(t){return e.reject(new l(t))},a=t("./util.js");n=a.isNode?function(){var t=process.domain;return void 0===t&&(t=null),t}:function(){return null},a.notEnumerableProp(e,"_getDomain",n);var u=t("./async.js"),c=t("./errors.js"),l=e.TypeError=c.TypeError;e.RangeError=c.RangeError,e.CancellationError=c.CancellationError,e.TimeoutError=c.TimeoutError,e.OperationalError=c.OperationalError,e.RejectionError=c.OperationalError,e.AggregateError=c.AggregateError;var h=function(){},p={},f={e:null},_=t("./thenables.js")(e,h),d=t("./promise_array.js")(e,h,_,s),v=t("./captured_trace.js")(),y=t("./debuggability.js")(e,v),g=t("./context.js")(e,v,y),m=t("./catch_filter.js")(f),j=t("./promise_resolver.js"),b=j._nodebackForPromise,w=a.errorObj,k=a.tryCatch;return e.prototype.toString=function(){return"[object Promise]"},e.prototype.caught=e.prototype["catch"]=function(t){var r=arguments.length;if(r>1){var n,i=new Array(r-1),o=0;for(n=0;r-1>n;++n){var s=arguments[n];if("function"!=typeof s)return e.reject(new l("Catch filter must inherit from Error or be a simple predicate function\n\n    See http://goo.gl/o84o68\n"));i[o++]=s}i.length=o,t=arguments[n];var a=new m(i,t,this);return this._then(void 0,a.doFilter,void 0,a,void 0)}return this._then(void 0,t,void 0,void 0,void 0)},e.prototype.reflect=function(){return this._then(o,o,void 0,this,void 0)},e.prototype.then=function(t,e,r){if(y()&&arguments.length>0&&"function"!=typeof t&&"function"!=typeof e){var n=".then() only accepts functions but was passed: "+a.classString(t);arguments.length>1&&(n+=", "+a.classString(e)),this._warn(n)}return this._then(t,e,r,void 0,void 0)},e.prototype.done=function(t,e,r){var n=this._then(t,e,r,void 0,void 0);n._setIsFinal()},e.prototype.spread=function(t,e){return this.all()._then(t,e,void 0,p,void 0)
},e.prototype.isCancellable=function(){return!this.isResolved()&&this._cancellable()},e.prototype.toJSON=function(){var t={isFulfilled:!1,isRejected:!1,fulfillmentValue:void 0,rejectionReason:void 0};return this.isFulfilled()?(t.fulfillmentValue=this.value(),t.isFulfilled=!0):this.isRejected()&&(t.rejectionReason=this.reason(),t.isRejected=!0),t},e.prototype.all=function(){return new d(this).promise()},e.prototype.error=function(t){return this.caught(a.originatesFromRejection,t)},e.is=function(t){return t instanceof e},e.fromNode=function(t){var r=new e(h),n=k(t)(b(r));return n===w&&r._rejectCallback(n.e,!0,!0),r},e.all=function(t){return new d(t).promise()},e.defer=e.pending=function(){var t=new e(h);return new j(t)},e.cast=function(t){var r=_(t);if(!(r instanceof e)){var n=r;r=new e(h),r._fulfillUnchecked(n)}return r},e.resolve=e.fulfilled=e.cast,e.reject=e.rejected=function(t){var r=new e(h);return r._captureStackTrace(),r._rejectCallback(t,!0),r},e.setScheduler=function(t){if("function"!=typeof t)throw new l("fn must be a function\n\n    See http://goo.gl/916lJJ\n");var e=u._schedule;return u._schedule=t,e},e.prototype._then=function(t,r,i,o,s){var a=void 0!==s,c=a?s:new e(h);a||(c._propagateFrom(this,5),c._captureStackTrace());var l=this._target();l!==this&&(void 0===o&&(o=this._boundTo),a||c._setIsMigrated());var p=l._addCallbacks(t,r,i,c,o,n());return l._isResolved()&&!l._isSettlePromisesQueued()&&u.invoke(l._settlePromiseAtPostResolution,l,p),c},e.prototype._settlePromiseAtPostResolution=function(t){this._isRejectionUnhandled()&&this._unsetRejectionIsUnhandled(),this._settlePromiseAt(t)},e.prototype._length=function(){return 131071&this._bitField},e.prototype._isFollowingOrFulfilledOrRejected=function(){return(939524096&this._bitField)>0},e.prototype._isFollowing=function(){return 536870912===(536870912&this._bitField)},e.prototype._setLength=function(t){this._bitField=-131072&this._bitField|131071&t},e.prototype._setFulfilled=function(){this._bitField=268435456|this._bitField},e.prototype._setRejected=function(){this._bitField=134217728|this._bitField},e.prototype._setFollowing=function(){this._bitField=536870912|this._bitField},e.prototype._setIsFinal=function(){this._bitField=33554432|this._bitField},e.prototype._isFinal=function(){return(33554432&this._bitField)>0},e.prototype._cancellable=function(){return(67108864&this._bitField)>0},e.prototype._setCancellable=function(){this._bitField=67108864|this._bitField},e.prototype._unsetCancellable=function(){this._bitField=-67108865&this._bitField},e.prototype._setIsMigrated=function(){this._bitField=4194304|this._bitField},e.prototype._unsetIsMigrated=function(){this._bitField=-4194305&this._bitField},e.prototype._isMigrated=function(){return(4194304&this._bitField)>0},e.prototype._receiverAt=function(t){var e=0===t?this._receiver0:this[5*t-5+4];return void 0===e&&this._isBound()?this._boundValue():e},e.prototype._promiseAt=function(t){return 0===t?this._promise0:this[5*t-5+3]},e.prototype._fulfillmentHandlerAt=function(t){return 0===t?this._fulfillmentHandler0:this[5*t-5+0]},e.prototype._rejectionHandlerAt=function(t){return 0===t?this._rejectionHandler0:this[5*t-5+1]},e.prototype._boundValue=function(){var t=this._boundTo;return void 0!==t&&t instanceof e?t.isFulfilled()?t.value():void 0:t},e.prototype._migrateCallbacks=function(t,r){var n=t._fulfillmentHandlerAt(r),i=t._rejectionHandlerAt(r),o=t._progressHandlerAt(r),s=t._promiseAt(r),a=t._receiverAt(r);s instanceof e&&s._setIsMigrated(),this._addCallbacks(n,i,o,s,a,null)},e.prototype._addCallbacks=function(t,e,r,n,i,o){var s=this._length();if(s>=131066&&(s=0,this._setLength(0)),0===s)this._promise0=n,void 0!==i&&(this._receiver0=i),"function"!=typeof t||this._isCarryingStackTrace()||(this._fulfillmentHandler0=null===o?t:o.bind(t)),"function"==typeof e&&(this._rejectionHandler0=null===o?e:o.bind(e)),"function"==typeof r&&(this._progressHandler0=null===o?r:o.bind(r));else{var a=5*s-5;this[a+3]=n,this[a+4]=i,"function"==typeof t&&(this[a+0]=null===o?t:o.bind(t)),"function"==typeof e&&(this[a+1]=null===o?e:o.bind(e)),"function"==typeof r&&(this[a+2]=null===o?r:o.bind(r))}return this._setLength(s+1),s},e.prototype._setProxyHandlers=function(t,e){var r=this._length();if(r>=131066&&(r=0,this._setLength(0)),0===r)this._promise0=e,this._receiver0=t;else{var n=5*r-5;this[n+3]=e,this[n+4]=t}this._setLength(r+1)},e.prototype._proxyPromiseArray=function(t,e){this._setProxyHandlers(t,e)},e.prototype._resolveCallback=function(t,r){if(!this._isFollowingOrFulfilledOrRejected()){if(t===this)return this._rejectCallback(i(),!1,!0);var n=_(t,this);if(!(n instanceof e))return this._fulfill(t);var o=1|(r?4:0);this._propagateFrom(n,o);var s=n._target();if(s._isPending()){for(var a=this._length(),u=0;a>u;++u)s._migrateCallbacks(this,u);this._setFollowing(),this._setLength(0),this._setFollowee(s)}else s._isFulfilled()?this._fulfillUnchecked(s._value()):this._rejectUnchecked(s._reason(),s._getCarriedStackTrace())}},e.prototype._rejectCallback=function(t,e,r){r||a.markAsOriginatingFromRejection(t);var n=a.ensureErrorObject(t),i=n===t;this._attachExtraTrace(n,e?i:!1),this._reject(t,i?void 0:n)},e.prototype._resolveFromResolver=function(t){var e=this;this._captureStackTrace(),this._pushContext();var r=!0,n=k(t)(function(t){null!==e&&(e._resolveCallback(t),e=null)},function(t){null!==e&&(e._rejectCallback(t,r),e=null)});r=!1,this._popContext(),void 0!==n&&n===w&&null!==e&&(e._rejectCallback(n.e,!0,!0),e=null)},e.prototype._settlePromiseFromHandler=function(t,e,r,n){if(!n._isRejected()){n._pushContext();var o;if(o=e!==p||this._isRejected()?k(t).call(e,r):k(t).apply(this._boundValue(),r),n._popContext(),o===w||o===n||o===f){var s=o===n?i():o.e;n._rejectCallback(s,!1,!0)}else n._resolveCallback(o)}},e.prototype._target=function(){for(var t=this;t._isFollowing();)t=t._followee();return t},e.prototype._followee=function(){return this._rejectionHandler0},e.prototype._setFollowee=function(t){this._rejectionHandler0=t},e.prototype._cleanValues=function(){this._cancellable()&&(this._cancellationParent=void 0)},e.prototype._propagateFrom=function(t,e){(1&e)>0&&t._cancellable()&&(this._setCancellable(),this._cancellationParent=t),(4&e)>0&&t._isBound()&&this._setBoundTo(t._boundTo)},e.prototype._fulfill=function(t){this._isFollowingOrFulfilledOrRejected()||this._fulfillUnchecked(t)},e.prototype._reject=function(t,e){this._isFollowingOrFulfilledOrRejected()||this._rejectUnchecked(t,e)},e.prototype._settlePromiseAt=function(t){var r=this._promiseAt(t),n=r instanceof e;if(n&&r._isMigrated())return r._unsetIsMigrated(),u.invoke(this._settlePromiseAt,this,t);var i=this._isFulfilled()?this._fulfillmentHandlerAt(t):this._rejectionHandlerAt(t),o=this._isCarryingStackTrace()?this._getCarriedStackTrace():void 0,s=this._settledValue,a=this._receiverAt(t);this._clearCallbackDataAtIndex(t),"function"==typeof i?n?this._settlePromiseFromHandler(i,a,s,r):i.call(a,s,r):a instanceof d?a._isResolved()||(this._isFulfilled()?a._promiseFulfilled(s,r):a._promiseRejected(s,r)):n&&(this._isFulfilled()?r._fulfill(s):r._reject(s,o)),t>=4&&4===(31&t)&&u.invokeLater(this._setLength,this,0)},e.prototype._clearCallbackDataAtIndex=function(t){if(0===t)this._isCarryingStackTrace()||(this._fulfillmentHandler0=void 0),this._rejectionHandler0=this._progressHandler0=this._receiver0=this._promise0=void 0;else{var e=5*t-5;this[e+3]=this[e+4]=this[e+0]=this[e+1]=this[e+2]=void 0}},e.prototype._isSettlePromisesQueued=function(){return-1073741824===(-1073741824&this._bitField)},e.prototype._setSettlePromisesQueued=function(){this._bitField=-1073741824|this._bitField},e.prototype._unsetSettlePromisesQueued=function(){this._bitField=1073741823&this._bitField},e.prototype._queueSettlePromises=function(){u.settlePromises(this),this._setSettlePromisesQueued()},e.prototype._fulfillUnchecked=function(t){if(t===this){var e=i();return this._attachExtraTrace(e),this._rejectUnchecked(e,void 0)}this._setFulfilled(),this._settledValue=t,this._cleanValues(),this._length()>0&&this._queueSettlePromises()},e.prototype._rejectUncheckedCheckError=function(t){var e=a.ensureErrorObject(t);this._rejectUnchecked(t,e===t?void 0:e)},e.prototype._rejectUnchecked=function(t,e){if(t===this){var r=i();return this._attachExtraTrace(r),this._rejectUnchecked(r)}return this._setRejected(),this._settledValue=t,this._cleanValues(),this._isFinal()?void u.throwLater(function(t){throw"stack"in t&&u.invokeFirst(v.unhandledRejection,void 0,t),t},void 0===e?t:e):(void 0!==e&&e!==t&&this._setCarriedStackTrace(e),void(this._length()>0?this._queueSettlePromises():this._ensurePossibleRejectionHandled()))},e.prototype._settlePromises=function(){this._unsetSettlePromisesQueued();for(var t=this._length(),e=0;t>e;e++)this._settlePromiseAt(e)},a.notEnumerableProp(e,"_makeSelfResolutionError",i),t("./progress.js")(e,d),t("./method.js")(e,h,_,s),t("./bind.js")(e,h,_),t("./finally.js")(e,f,_),t("./direct_resolve.js")(e),t("./synchronous_inspection.js")(e),t("./join.js")(e,d,_,h),e.Promise=e,t("./map.js")(e,d,s,_,h),t("./cancel.js")(e),t("./using.js")(e,s,_,g),t("./generators.js")(e,s,h,_),t("./nodeify.js")(e),t("./call_get.js")(e),t("./props.js")(e,d,_,s),t("./race.js")(e,h,_,s),t("./reduce.js")(e,d,s,_,h),t("./settle.js")(e,d),t("./some.js")(e,d,s),t("./promisify.js")(e,h),t("./any.js")(e),t("./each.js")(e,h),t("./timers.js")(e,h),t("./filter.js")(e,h),a.toFastProperties(e),a.toFastProperties(e.prototype),r({a:1}),r({b:2}),r({c:3}),r(1),r(function(){}),r(void 0),r(!1),r(new e(h)),v.setBounds(u.firstLineError,a.lastLineError),e}},{"./any.js":1,"./async.js":2,"./bind.js":3,"./call_get.js":5,"./cancel.js":6,"./captured_trace.js":7,"./catch_filter.js":8,"./context.js":9,"./debuggability.js":10,"./direct_resolve.js":11,"./each.js":12,"./errors.js":13,"./filter.js":15,"./finally.js":16,"./generators.js":17,"./join.js":18,"./map.js":19,"./method.js":20,"./nodeify.js":21,"./progress.js":22,"./promise_array.js":24,"./promise_resolver.js":25,"./promisify.js":26,"./props.js":27,"./race.js":29,"./reduce.js":30,"./settle.js":32,"./some.js":33,"./synchronous_inspection.js":34,"./thenables.js":35,"./timers.js":36,"./using.js":37,"./util.js":38}],24:[function(t,e){"use strict";e.exports=function(e,r,n,i){function o(t){switch(t){case-2:return[];case-3:return{}}}function s(t){var n,i=this._promise=new e(r);t instanceof e&&(n=t,i._propagateFrom(n,5)),this._values=t,this._length=0,this._totalResolved=0,this._init(void 0,-2)}var a=t("./util.js"),u=a.isArray;return s.prototype.length=function(){return this._length},s.prototype.promise=function(){return this._promise},s.prototype._init=function c(t,r){var s=n(this._values,this._promise);if(s instanceof e){if(s=s._target(),this._values=s,!s._isFulfilled())return s._isPending()?void s._then(c,this._reject,void 0,this,r):void this._reject(s._reason());if(s=s._value(),!u(s)){var a=new e.TypeError("expecting an array, a promise or a thenable\n\n    See http://goo.gl/s8MMhc\n");return void this.__hardReject__(a)}}else if(!u(s))return void this._promise._reject(i("expecting an array, a promise or a thenable\n\n    See http://goo.gl/s8MMhc\n")._reason());if(0===s.length)return void(-5===r?this._resolveEmptyArray():this._resolve(o(r)));var l=this.getActualLength(s.length);this._length=l,this._values=this.shouldCopyValues()?new Array(l):this._values;for(var h=this._promise,p=0;l>p;++p){var f=this._isResolved(),_=n(s[p],h);_ instanceof e?(_=_._target(),f?_._ignoreRejections():_._isPending()?_._proxyPromiseArray(this,p):_._isFulfilled()?this._promiseFulfilled(_._value(),p):this._promiseRejected(_._reason(),p)):f||this._promiseFulfilled(_,p)}},s.prototype._isResolved=function(){return null===this._values},s.prototype._resolve=function(t){this._values=null,this._promise._fulfill(t)},s.prototype.__hardReject__=s.prototype._reject=function(t){this._values=null,this._promise._rejectCallback(t,!1,!0)},s.prototype._promiseProgressed=function(t,e){this._promise._progress({index:e,value:t})},s.prototype._promiseFulfilled=function(t,e){this._values[e]=t;var r=++this._totalResolved;r>=this._length&&this._resolve(this._values)},s.prototype._promiseRejected=function(t){this._totalResolved++,this._reject(t)},s.prototype.shouldCopyValues=function(){return!0},s.prototype.getActualLength=function(t){return t},s}},{"./util.js":38}],25:[function(t,e){"use strict";function r(t){return t instanceof Error&&p.getPrototypeOf(t)===Error.prototype}function n(t){var e;if(r(t)){e=new l(t),e.name=t.name,e.message=t.message,e.stack=t.stack;for(var n=p.keys(t),i=0;i<n.length;++i){var o=n[i];f.test(o)||(e[o]=t[o])}return e}return s.markAsOriginatingFromRejection(t),t}function i(t){return function(e,r){if(null!==t){if(e){var i=n(a(e));t._attachExtraTrace(i),t._reject(i)}else if(arguments.length>2){for(var o=arguments.length,s=new Array(o-1),u=1;o>u;++u)s[u-1]=arguments[u];t._fulfill(s)}else t._fulfill(r);t=null}}}var o,s=t("./util.js"),a=s.maybeWrapAsError,u=t("./errors.js"),c=u.TimeoutError,l=u.OperationalError,h=s.haveGetters,p=t("./es5.js"),f=/^(?:name|message|stack|cause)$/;if(o=h?function(t){this.promise=t}:function(t){this.promise=t,this.asCallback=i(t),this.callback=this.asCallback},h){var _={get:function(){return i(this.promise)}};p.defineProperty(o.prototype,"asCallback",_),p.defineProperty(o.prototype,"callback",_)}o._nodebackForPromise=i,o.prototype.toString=function(){return"[object PromiseResolver]"},o.prototype.resolve=o.prototype.fulfill=function(t){if(!(this instanceof o))throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\n\n    See http://goo.gl/sdkXL9\n");this.promise._resolveCallback(t)},o.prototype.reject=function(t){if(!(this instanceof o))throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\n\n    See http://goo.gl/sdkXL9\n");this.promise._rejectCallback(t)},o.prototype.progress=function(t){if(!(this instanceof o))throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\n\n    See http://goo.gl/sdkXL9\n");this.promise._progress(t)},o.prototype.cancel=function(t){this.promise.cancel(t)},o.prototype.timeout=function(){this.reject(new c("timeout"))},o.prototype.isResolved=function(){return this.promise.isResolved()},o.prototype.toJSON=function(){return this.promise.toJSON()},e.exports=o},{"./errors.js":13,"./es5.js":14,"./util.js":38}],26:[function(t,e){"use strict";e.exports=function(e,r){function n(t){return!w.test(t)}function i(t){try{return t.__isPromisified__===!0}catch(e){return!1}}function o(t,e,r){var n=f.getDataPropertyOrDefault(t,e+r,j);return n?i(n):!1}function s(t,e,r){for(var n=0;n<t.length;n+=2){var i=t[n];if(r.test(i))for(var o=i.replace(r,""),s=0;s<t.length;s+=2)if(t[s]===o)throw new g("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/iWrZbw\n".replace("%s",e))}}function a(t,e,r,n){for(var a=f.inheritedDataKeys(t),u=[],c=0;c<a.length;++c){var l=a[c],h=t[l],p=n===k?!0:k(l,h,t);"function"!=typeof h||i(h)||o(t,l,e)||!n(l,h,t,p)||u.push(l,h)}return s(u,e,r),u}function u(t,n,i,o){function s(){var i=n;n===p&&(i=this);var o=new e(r);o._captureStackTrace();var s="string"==typeof u&&this!==a?this[u]:t,c=_(o);try{s.apply(i,d(arguments,c))}catch(l){o._rejectCallback(v(l),!0,!0)}return o}var a=function(){return this}(),u=t;return"string"==typeof u&&(t=o),f.notEnumerableProp(s,"__isPromisified__",!0),s}function c(t,e,r,n){for(var i=new RegExp(E(e)+"$"),o=a(t,e,i,r),s=0,u=o.length;u>s;s+=2){var c=o[s],l=o[s+1],h=c+e;t[h]=n===F?F(c,p,c,l,e):n(l,function(){return F(c,p,c,l,e)})}return f.toFastProperties(t),t}function l(t,e){return F(t,e,void 0,t)}var h,p={},f=t("./util.js"),_=t("./promise_resolver.js")._nodebackForPromise,d=f.withAppended,v=f.maybeWrapAsError,y=f.canEvaluate,g=t("./errors").TypeError,m="Async",j={__isPromisified__:!0},b=["arity","length","name","arguments","caller","callee","prototype","__isPromisified__"],w=new RegExp("^(?:"+b.join("|")+")$"),k=function(t){return f.isIdentifier(t)&&"_"!==t.charAt(0)&&"constructor"!==t},E=function(t){return t.replace(/([$])/,"\\$")},F=y?h:u;e.promisify=function(t,e){if("function"!=typeof t)throw new g("fn must be a function\n\n    See http://goo.gl/916lJJ\n");if(i(t))return t;var r=l(t,arguments.length<2?p:e);return f.copyDescriptors(t,r,n),r},e.promisifyAll=function(t,e){if("function"!=typeof t&&"object"!=typeof t)throw new g("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/9ITlV0\n");e=Object(e);var r=e.suffix;"string"!=typeof r&&(r=m);var n=e.filter;"function"!=typeof n&&(n=k);var i=e.promisifier;if("function"!=typeof i&&(i=F),!f.isIdentifier(r))throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/8FZo5V\n");for(var o=f.inheritedDataKeys(t),s=0;s<o.length;++s){var a=t[o[s]];"constructor"!==o[s]&&f.isClass(a)&&(c(a.prototype,r,n,i),c(a,r,n,i))}return c(t,r,n,i)}}},{"./errors":13,"./promise_resolver.js":25,"./util.js":38}],27:[function(t,e){"use strict";e.exports=function(e,r,n,i){function o(t){for(var e=c.keys(t),r=e.length,n=new Array(2*r),i=0;r>i;++i){var o=e[i];n[i]=t[o],n[i+r]=o}this.constructor$(n)}function s(t){var r,s=n(t);return u(s)?(r=s instanceof e?s._then(e.props,void 0,void 0,void 0,void 0):new o(s).promise(),s instanceof e&&r._propagateFrom(s,4),r):i("cannot await properties of a non-object\n\n    See http://goo.gl/OsFKC8\n")}var a=t("./util.js"),u=a.isObject,c=t("./es5.js");a.inherits(o,r),o.prototype._init=function(){this._init$(void 0,-3)},o.prototype._promiseFulfilled=function(t,e){this._values[e]=t;var r=++this._totalResolved;if(r>=this._length){for(var n={},i=this.length(),o=0,s=this.length();s>o;++o)n[this._values[o+i]]=this._values[o];this._resolve(n)}},o.prototype._promiseProgressed=function(t,e){this._promise._progress({key:this._values[e+this.length()],value:t})},o.prototype.shouldCopyValues=function(){return!1},o.prototype.getActualLength=function(t){return t>>1},e.prototype.props=function(){return s(this)},e.props=function(t){return s(t)}}},{"./es5.js":14,"./util.js":38}],28:[function(t,e){"use strict";function r(t,e,r,n,i){for(var o=0;i>o;++o)r[o+n]=t[o+e],t[o+e]=void 0}function n(t){this._capacity=t,this._length=0,this._front=0}n.prototype._willBeOverCapacity=function(t){return this._capacity<t},n.prototype._pushOne=function(t){var e=this.length();this._checkCapacity(e+1);var r=this._front+e&this._capacity-1;this[r]=t,this._length=e+1},n.prototype._unshiftOne=function(t){var e=this._capacity;this._checkCapacity(this.length()+1);var r=this._front,n=(r-1&e-1^e)-e;this[n]=t,this._front=n,this._length=this.length()+1},n.prototype.unshift=function(t,e,r){this._unshiftOne(r),this._unshiftOne(e),this._unshiftOne(t)},n.prototype.push=function(t,e,r){var n=this.length()+3;if(this._willBeOverCapacity(n))return this._pushOne(t),this._pushOne(e),void this._pushOne(r);var i=this._front+n-3;this._checkCapacity(n);var o=this._capacity-1;this[i+0&o]=t,this[i+1&o]=e,this[i+2&o]=r,this._length=n},n.prototype.shift=function(){var t=this._front,e=this[t];return this[t]=void 0,this._front=t+1&this._capacity-1,this._length--,e},n.prototype.length=function(){return this._length},n.prototype._checkCapacity=function(t){this._capacity<t&&this._resizeTo(this._capacity<<1)},n.prototype._resizeTo=function(t){var e=this._capacity;this._capacity=t;var n=this._front,i=this._length,o=n+i&e-1;r(this,0,this,e,o)},e.exports=n},{}],29:[function(t,e){"use strict";e.exports=function(e,r,n,i){function o(t,o){var u=n(t);if(u instanceof e)return a(u);if(!s(t))return i("expecting an array, a promise or a thenable\n\n    See http://goo.gl/s8MMhc\n");var c=new e(r);void 0!==o&&c._propagateFrom(o,5);for(var l=c._fulfill,h=c._reject,p=0,f=t.length;f>p;++p){var _=t[p];(void 0!==_||p in t)&&e.cast(_)._then(l,h,void 0,c,null)}return c}var s=t("./util.js").isArray,a=function(t){return t.then(function(e){return o(e,t)})};e.race=function(t){return o(t,void 0)},e.prototype.race=function(){return o(this,void 0)}}},{"./util.js":38}],30:[function(t,e){"use strict";e.exports=function(e,r,n,i,o){function s(t,r,n,s){this.constructor$(t),this._promise._captureStackTrace(),this._preservedValues=s===o?[]:null,this._zerothIsAccum=void 0===n,this._gotAccum=!1,this._reducingIndex=this._zerothIsAccum?1:0,this._valuesPhase=void 0;var u=i(n,this._promise),h=!1,p=u instanceof e;p&&(u=u._target(),u._isPending()?u._proxyPromiseArray(this,-1):u._isFulfilled()?(n=u._value(),this._gotAccum=!0):(this._reject(u._reason()),h=!0)),p||this._zerothIsAccum||(this._gotAccum=!0);var f=c();this._callback=null===f?r:f.bind(r),this._accum=n,h||l.invoke(a,this,void 0)}function a(){this._init$(void 0,-5)}function u(t,e,r,i){if("function"!=typeof e)return n("fn must be a function\n\n    See http://goo.gl/916lJJ\n");var o=new s(t,e,r,i);return o.promise()}var c=e._getDomain,l=t("./async.js"),h=t("./util.js"),p=h.tryCatch,f=h.errorObj;h.inherits(s,r),s.prototype._init=function(){},s.prototype._resolveEmptyArray=function(){(this._gotAccum||this._zerothIsAccum)&&this._resolve(null!==this._preservedValues?[]:this._accum)},s.prototype._promiseFulfilled=function(t,r){var n=this._values;n[r]=t;var o,s=this.length(),a=this._preservedValues,u=null!==a,c=this._gotAccum,l=this._valuesPhase;if(!l)for(l=this._valuesPhase=new Array(s),o=0;s>o;++o)l[o]=0;if(o=l[r],0===r&&this._zerothIsAccum?(this._accum=t,this._gotAccum=c=!0,l[r]=0===o?1:2):-1===r?(this._accum=t,this._gotAccum=c=!0):0===o?l[r]=1:(l[r]=2,this._accum=t),c){for(var h,_=this._callback,d=this._promise._boundValue(),v=this._reducingIndex;s>v;++v)if(o=l[v],2!==o){if(1!==o)return;if(t=n[v],this._promise._pushContext(),u?(a.push(t),h=p(_).call(d,t,v,s)):h=p(_).call(d,this._accum,t,v,s),this._promise._popContext(),h===f)return this._reject(h.e);var y=i(h,this._promise);if(y instanceof e){if(y=y._target(),y._isPending())return l[v]=4,y._proxyPromiseArray(this,v);if(!y._isFulfilled())return this._reject(y._reason());h=y._value()}this._reducingIndex=v+1,this._accum=h}else this._reducingIndex=v+1;this._resolve(u?a:this._accum)}},e.prototype.reduce=function(t,e){return u(this,t,e,null)},e.reduce=function(t,e,r,n){return u(t,e,r,n)}}},{"./async.js":2,"./util.js":38}],31:[function(t,e){"use strict";var r,n=t("./util"),i=function(){throw new Error("No async scheduler available\n\n    See http://goo.gl/m3OTXk\n")};if(n.isNode&&"undefined"==typeof MutationObserver){var o=global.setImmediate,s=process.nextTick;r=n.isRecentNode?function(t){o.call(global,t)}:function(t){s.call(process,t)}}else"undefined"==typeof MutationObserver||"undefined"!=typeof window&&window.navigator&&window.navigator.standalone?r="undefined"!=typeof setImmediate?function(t){setImmediate(t)}:"undefined"!=typeof setTimeout?function(t){setTimeout(t,0)}:i:(r=function(t){var e=document.createElement("div"),r=new MutationObserver(t);return r.observe(e,{attributes:!0}),function(){e.classList.toggle("foo")}},r.isStatic=!0);e.exports=r},{"./util":38}],32:[function(t,e){"use strict";e.exports=function(e,r){function n(t){this.constructor$(t)}var i=e.PromiseInspection,o=t("./util.js");o.inherits(n,r),n.prototype._promiseResolved=function(t,e){this._values[t]=e;var r=++this._totalResolved;r>=this._length&&this._resolve(this._values)},n.prototype._promiseFulfilled=function(t,e){var r=new i;r._bitField=268435456,r._settledValue=t,this._promiseResolved(e,r)},n.prototype._promiseRejected=function(t,e){var r=new i;r._bitField=134217728,r._settledValue=t,this._promiseResolved(e,r)},e.settle=function(t){return new n(t).promise()},e.prototype.settle=function(){return new n(this).promise()}}},{"./util.js":38}],33:[function(t,e){"use strict";e.exports=function(e,r,n){function i(t){this.constructor$(t),this._howMany=0,this._unwrap=!1,this._initialized=!1}function o(t,e){if((0|e)!==e||0>e)return n("expecting a positive integer\n\n    See http://goo.gl/1wAmHx\n");var r=new i(t),o=r.promise();return r.setHowMany(e),r.init(),o}var s=t("./util.js"),a=t("./errors.js").RangeError,u=t("./errors.js").AggregateError,c=s.isArray;s.inherits(i,r),i.prototype._init=function(){if(this._initialized){if(0===this._howMany)return void this._resolve([]);this._init$(void 0,-5);var t=c(this._values);!this._isResolved()&&t&&this._howMany>this._canPossiblyFulfill()&&this._reject(this._getRangeError(this.length()))}},i.prototype.init=function(){this._initialized=!0,this._init()},i.prototype.setUnwrap=function(){this._unwrap=!0},i.prototype.howMany=function(){return this._howMany},i.prototype.setHowMany=function(t){this._howMany=t},i.prototype._promiseFulfilled=function(t){this._addFulfilled(t),this._fulfilled()===this.howMany()&&(this._values.length=this.howMany(),this._resolve(1===this.howMany()&&this._unwrap?this._values[0]:this._values))},i.prototype._promiseRejected=function(t){if(this._addRejected(t),this.howMany()>this._canPossiblyFulfill()){for(var e=new u,r=this.length();r<this._values.length;++r)e.push(this._values[r]);this._reject(e)}},i.prototype._fulfilled=function(){return this._totalResolved},i.prototype._rejected=function(){return this._values.length-this.length()},i.prototype._addRejected=function(t){this._values.push(t)},i.prototype._addFulfilled=function(t){this._values[this._totalResolved++]=t},i.prototype._canPossiblyFulfill=function(){return this.length()-this._rejected()},i.prototype._getRangeError=function(t){var e="Input array must contain at least "+this._howMany+" items but contains only "+t+" items";return new a(e)},i.prototype._resolveEmptyArray=function(){this._reject(this._getRangeError(0))},e.some=function(t,e){return o(t,e)},e.prototype.some=function(t){return o(this,t)},e._SomePromiseArray=i}},{"./errors.js":13,"./util.js":38}],34:[function(t,e){"use strict";e.exports=function(t){function e(t){void 0!==t?(t=t._target(),this._bitField=t._bitField,this._settledValue=t._settledValue):(this._bitField=0,this._settledValue=void 0)}e.prototype.value=function(){if(!this.isFulfilled())throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/hc1DLj\n");return this._settledValue},e.prototype.error=e.prototype.reason=function(){if(!this.isRejected())throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/hPuiwB\n");return this._settledValue},e.prototype.isFulfilled=t.prototype._isFulfilled=function(){return(268435456&this._bitField)>0},e.prototype.isRejected=t.prototype._isRejected=function(){return(134217728&this._bitField)>0},e.prototype.isPending=t.prototype._isPending=function(){return 0===(402653184&this._bitField)},e.prototype.isResolved=t.prototype._isResolved=function(){return(402653184&this._bitField)>0},t.prototype.isPending=function(){return this._target()._isPending()},t.prototype.isRejected=function(){return this._target()._isRejected()},t.prototype.isFulfilled=function(){return this._target()._isFulfilled()},t.prototype.isResolved=function(){return this._target()._isResolved()},t.prototype._value=function(){return this._settledValue},t.prototype._reason=function(){return this._unsetRejectionIsUnhandled(),this._settledValue},t.prototype.value=function(){var t=this._target();if(!t.isFulfilled())throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/hc1DLj\n");return t._settledValue},t.prototype.reason=function(){var t=this._target();if(!t.isRejected())throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/hPuiwB\n");return t._unsetRejectionIsUnhandled(),t._settledValue},t.PromiseInspection=e}},{}],35:[function(t,e){"use strict";e.exports=function(e,r){function n(t,n){if(c(t)){if(t instanceof e)return t;if(o(t)){var l=new e(r);return t._then(l._fulfillUnchecked,l._rejectUncheckedCheckError,l._progressUnchecked,l,null),l}var h=a.tryCatch(i)(t);if(h===u){n&&n._pushContext();var l=e.reject(h.e);return n&&n._popContext(),l}if("function"==typeof h)return s(t,h,n)}return t}function i(t){return t.then}function o(t){return l.call(t,"_promise0")}function s(t,n,i){function o(t){l&&(l._resolveCallback(t),l=null)}function s(t){l&&(l._rejectCallback(t,p,!0),l=null)}function c(t){l&&"function"==typeof l._progress&&l._progress(t)}var l=new e(r),h=l;i&&i._pushContext(),l._captureStackTrace(),i&&i._popContext();var p=!0,f=a.tryCatch(n).call(t,o,s,c);return p=!1,l&&f===u&&(l._rejectCallback(f.e,!0,!0),l=null),h}var a=t("./util.js"),u=a.errorObj,c=a.isObject,l={}.hasOwnProperty;return n}},{"./util.js":38}],36:[function(t,e){"use strict";e.exports=function(e,r){function n(t){var e=this;return e instanceof Number&&(e=+e),clearTimeout(e),t}function i(t){var e=this;throw e instanceof Number&&(e=+e),clearTimeout(e),t}var o=t("./util.js"),s=e.TimeoutError,a=function(t,e){if(t.isPending()){"string"!=typeof e&&(e="operation timed out");var r=new s(e);o.markAsOriginatingFromRejection(r),t._attachExtraTrace(r),t._cancel(r)}},u=function(t){return c(+this).thenReturn(t)},c=e.delay=function(t,n){if(void 0===n){n=t,t=void 0;var i=new e(r);return setTimeout(function(){i._fulfill()},n),i}return n=+n,e.resolve(t)._then(u,null,null,n,void 0)};e.prototype.delay=function(t){return c(this,t)},e.prototype.timeout=function(t,e){t=+t;var r=this.then().cancellable();r._cancellationParent=this;var o=setTimeout(function(){a(r,e)},t);return r._then(n,i,void 0,o,void 0)}}},{"./util.js":38}],37:[function(t,e){"use strict";e.exports=function(e,r,n,i){function o(t){for(var r=t.length,n=0;r>n;++n){var i=t[n];if(i.isRejected())return e.reject(i.error());t[n]=i._settledValue}return t}function s(t){setTimeout(function(){throw t},0)}function a(t){var e=n(t);return e!==t&&"function"==typeof t._isDisposable&&"function"==typeof t._getDisposer&&t._isDisposable()&&e._setDisposable(t._getDisposer()),e}function u(t,r){function i(){if(o>=u)return c.resolve();var l=a(t[o++]);if(l instanceof e&&l._isDisposable()){try{l=n(l._getDisposer().tryDispose(r),t.promise)}catch(h){return s(h)}if(l instanceof e)return l._then(i,s,null,null,null)}i()}var o=0,u=t.length,c=e.defer();return i(),c.promise}function c(t){var e=new v;return e._settledValue=t,e._bitField=268435456,u(this,e).thenReturn(t)}function l(t){var e=new v;return e._settledValue=t,e._bitField=134217728,u(this,e).thenThrow(t)}function h(t,e,r){this._data=t,this._promise=e,this._context=r}function p(t,e,r){this.constructor$(t,e,r)}function f(t){return h.isDisposer(t)?(this.resources[this.index]._setDisposable(t),t.promise()):t}var _=t("./errors.js").TypeError,d=t("./util.js").inherits,v=e.PromiseInspection;h.prototype.data=function(){return this._data},h.prototype.promise=function(){return this._promise},h.prototype.resource=function(){return this.promise().isFulfilled()?this.promise().value():null},h.prototype.tryDispose=function(t){var e=this.resource(),r=this._context;void 0!==r&&r._pushContext();var n=null!==e?this.doDispose(e,t):null;return void 0!==r&&r._popContext(),this._promise._unsetDisposable(),this._data=null,n},h.isDisposer=function(t){return null!=t&&"function"==typeof t.resource&&"function"==typeof t.tryDispose},d(p,h),p.prototype.doDispose=function(t,e){var r=this.data();return r.call(t,t,e)},e.using=function(){var t=arguments.length;if(2>t)return r("you must pass at least 2 arguments to Promise.using");var i=arguments[t-1];if("function"!=typeof i)return r("fn must be a function\n\n    See http://goo.gl/916lJJ\n");t--;for(var s=new Array(t),a=0;t>a;++a){var u=arguments[a];if(h.isDisposer(u)){var p=u;u=u.promise(),u._setDisposable(p)}else{var _=n(u);_ instanceof e&&(u=_._then(f,null,null,{resources:s,index:a},void 0))}s[a]=u}var d=e.settle(s).then(o).then(function(t){d._pushContext();var e;try{e=i.apply(void 0,t)}finally{d._popContext()}return e})._then(c,l,void 0,s,void 0);return s.promise=d,d},e.prototype._setDisposable=function(t){this._bitField=262144|this._bitField,this._disposer=t
},e.prototype._isDisposable=function(){return(262144&this._bitField)>0},e.prototype._getDisposer=function(){return this._disposer},e.prototype._unsetDisposable=function(){this._bitField=-262145&this._bitField,this._disposer=void 0},e.prototype.disposer=function(t){if("function"==typeof t)return new p(t,this,i());throw new _}}},{"./errors.js":13,"./util.js":38}],38:[function(t,e,r){"use strict";function n(){try{var t=C;return C=null,t.apply(this,arguments)}catch(e){return F.e=e,F}}function i(t){return C=t,n}function o(t){return null==t||t===!0||t===!1||"string"==typeof t||"number"==typeof t}function s(t){return!o(t)}function a(t){return o(t)?new Error(v(t)):t}function u(t,e){var r,n=t.length,i=new Array(n+1);for(r=0;n>r;++r)i[r]=t[r];return i[r]=e,i}function c(t,e,r){if(!w.isES5)return{}.hasOwnProperty.call(t,e)?t[e]:void 0;var n=Object.getOwnPropertyDescriptor(t,e);return null!=n?null==n.get&&null==n.set?n.value:r:void 0}function l(t,e,r){if(o(t))return t;var n={value:r,configurable:!0,enumerable:!1,writable:!0};return w.defineProperty(t,e,n),t}function h(t){throw t}function p(t){try{if("function"==typeof t){var e=w.names(t.prototype),r=w.isES5&&e.length>1,n=e.length>0&&!(1===e.length&&"constructor"===e[0]),i=x.test(t+"")&&w.names(t).length>0;if(r||n||i)return!0}return!1}catch(o){return!1}}function f(t){function e(){}e.prototype=t;for(var r=8;r--;)new e;return t}function _(t){return R.test(t)}function d(t,e,r){for(var n=new Array(t),i=0;t>i;++i)n[i]=e+i+r;return n}function v(t){try{return t+""}catch(e){return"[no string representation]"}}function y(t){try{l(t,"isOperational",!0)}catch(e){}}function g(t){return null==t?!1:t instanceof Error.__BluebirdErrorTypes__.OperationalError||t.isOperational===!0}function m(t){return t instanceof Error&&w.propertyIsWritable(t,"stack")}function j(t){return{}.toString.call(t)}function b(t,e,r){for(var n=w.names(t),i=0;i<n.length;++i){var o=n[i];if(r(o))try{w.defineProperty(e,o,w.getDescriptor(t,o))}catch(s){}}}var w=t("./es5.js"),k="undefined"==typeof navigator,E=function(){try{var t={};return w.defineProperty(t,"f",{get:function(){return 3}}),3===t.f}catch(e){return!1}}(),F={e:{}},C,P=function(t,e){function r(){this.constructor=t,this.constructor$=e;for(var r in e.prototype)n.call(e.prototype,r)&&"$"!==r.charAt(r.length-1)&&(this[r+"$"]=e.prototype[r])}var n={}.hasOwnProperty;return r.prototype=e.prototype,t.prototype=new r,t.prototype},T=function(){var t=[Array.prototype,Object.prototype,Function.prototype],e=function(e){for(var r=0;r<t.length;++r)if(t[r]===e)return!0;return!1};if(w.isES5){var r=Object.getOwnPropertyNames;return function(t){for(var n=[],i=Object.create(null);null!=t&&!e(t);){var o;try{o=r(t)}catch(s){return n}for(var a=0;a<o.length;++a){var u=o[a];if(!i[u]){i[u]=!0;var c=Object.getOwnPropertyDescriptor(t,u);null!=c&&null==c.get&&null==c.set&&n.push(u)}}t=w.getPrototypeOf(t)}return n}}var n={}.hasOwnProperty;return function(r){if(e(r))return[];var i=[];t:for(var o in r)if(n.call(r,o))i.push(o);else{for(var s=0;s<t.length;++s)if(n.call(t[s],o))continue t;i.push(o)}return i}}(),x=/this\s*\.\s*\S+\s*=/,R=/^[a-z$_][a-z$_0-9]*$/i,S=function(){return"stack"in new Error?function(t){return m(t)?t:new Error(v(t))}:function(t){if(m(t))return t;try{throw new Error(v(t))}catch(e){return e}}}(),A={isClass:p,isIdentifier:_,inheritedDataKeys:T,getDataPropertyOrDefault:c,thrower:h,isArray:w.isArray,haveGetters:E,notEnumerableProp:l,isPrimitive:o,isObject:s,canEvaluate:k,errorObj:F,tryCatch:i,inherits:P,withAppended:u,maybeWrapAsError:a,toFastProperties:f,filledRange:d,toString:v,canAttachTrace:m,ensureErrorObject:S,originatesFromRejection:g,markAsOriginatingFromRejection:y,classString:j,copyDescriptors:b,hasDevTools:"undefined"!=typeof chrome&&chrome&&"function"==typeof chrome.loadTimes,isNode:"undefined"!=typeof process&&"[object process]"===j(process).toLowerCase()};A.isRecentNode=A.isNode&&function(){var t=process.versions.node.split(".").map(Number);return 0===t[0]&&t[1]>10||t[0]>0}(),A.isNode&&A.toFastProperties(process);try{throw new Error}catch(O){A.lastLineError=O}e.exports=A},{"./es5.js":14}]},{},[4])(4)}),"undefined"!=typeof window&&null!==window?window.P=window.Promise:"undefined"!=typeof self&&null!==self&&(self.P=self.Promise);
// Generated by CoffeeScript 1.9.3
(function(root, factory) {
  if (('function' === typeof define) && (define.amd != null)) {
    return define(['bluebird', 'lodash', 'helfer'], factory);
  } else if (typeof exports !== "undefined" && exports !== null) {
    return module.exports = factory(require('bluebird'), require('lodash'), require('helfer'), require('fs'), require('path'));
  } else {
    if (root.Promise == null) {
      throw new Error('missing global variable `Promise`');
    }
    if (root._ == null) {
      throw new Error('missing global variable `_`');
    }
    if (root.helfer == null) {
      throw new Error('missing global variable `helfer`');
    }
    return root.hinoki = factory(root.Promise, root._, root.helfer);
  }
})(this, function(Promise, _, helfer, fsModule, pathModule) {
  var hinoki;
  hinoki = function(arg1, arg2, arg3) {
    var cacheTarget, keyOrKeysOrFunction, keys, lifetimes, path, paths, source;
    source = hinoki.source(arg1);
    if (arg3 != null) {
      lifetimes = helfer.coerceToArray(arg2);
      keyOrKeysOrFunction = arg3;
    } else {
      lifetimes = [{}];
      keyOrKeysOrFunction = arg2;
    }
    cacheTarget = 0;
    if ('function' === typeof keyOrKeysOrFunction) {
      keys = hinoki.getKeysToInject(keyOrKeysOrFunction);
      paths = _.map(keys, helfer.coerceToArray);
      return hinoki.getValuesAndCacheTarget(source, lifetimes, paths, cacheTarget).promise.spread(keyOrKeysOrFunction);
    }
    if (Array.isArray(keyOrKeysOrFunction)) {
      keys = helfer.coerceToArray(keyOrKeysOrFunction);
      paths = _.map(keys, helfer.coerceToArray);
      return hinoki.getValuesAndCacheTarget(source, lifetimes, paths, cacheTarget).promise;
    }
    path = helfer.coerceToArray(keyOrKeysOrFunction);
    return hinoki.getValueAndCacheTarget(source, lifetimes, path, cacheTarget).promise;
  };
  hinoki.isNodejs = ((fsModule != null ? fsModule.statSync : void 0) != null) && ((fsModule != null ? fsModule.readdirSync : void 0) != null);
  hinoki.PromiseAndCacheTarget = function(promise, cacheTarget) {
    this.promise = promise;
    this.cacheTarget = cacheTarget;
    return this;
  };
  hinoki.getValuesAndCacheTarget = function(source, lifetimes, paths, cacheTarget) {
    var nextCacheTarget, promise;
    nextCacheTarget = cacheTarget;
    promise = Promise.all(_.map(paths, function(path) {
      var result;
      result = hinoki.getValueAndCacheTarget(source, lifetimes, path, cacheTarget);
      nextCacheTarget = Math.max(nextCacheTarget, result.cacheTarget);
      return result.promise;
    }));
    return new hinoki.PromiseAndCacheTarget(promise, nextCacheTarget);
  };
  hinoki.getValueAndCacheTarget = function(source, lifetimes, path, cacheTarget) {
    var dependenciesPromise, dependencyKey, dependencyKeys, dependencyKeysIndex, dependencyKeysLength, dependencyPaths, factory, factoryCallResultPromise, key, lifetimeIndex, newPath, nextCacheTarget, promise, result, returnPromise, valueOrPromise;
    key = path[0];
    lifetimeIndex = helfer.findIndexWhereProperty(lifetimes, key);
    if (lifetimeIndex !== -1) {
      valueOrPromise = lifetimes[lifetimeIndex][key];
      promise = helfer.isThenable(valueOrPromise) ? (typeof hinoki.debug === "function" ? hinoki.debug({
        event: 'lifetimeHasPromise',
        path: path,
        promise: valueOrPromise,
        lifetime: lifetimes[lifetimeIndex],
        lifetimeIndex: lifetimeIndex
      }) : void 0, valueOrPromise) : (typeof hinoki.debug === "function" ? hinoki.debug({
        event: 'lifetimeHasValue',
        path: path,
        value: valueOrPromise,
        lifetime: lifetimes[lifetimeIndex],
        lifetimeIndex: lifetimeIndex
      }) : void 0, Promise.resolve(valueOrPromise));
      return new hinoki.PromiseAndCacheTarget(promise, lifetimeIndex);
    }
    factory = source(key);
    if (factory == null) {
      return new hinoki.PromiseAndCacheTarget(Promise.reject(new hinoki.NotFoundError(path)), cacheTarget);
    }
    if (!hinoki.isFactory(factory)) {
      return new hinoki.PromiseAndCacheTarget(Promise.reject(new hinoki.BadFactoryError(path, factory)), cacheTarget);
    }
    if (typeof hinoki.debug === "function") {
      hinoki.debug({
        event: 'sourceReturnedFactory',
        path: path,
        factory: factory
      });
    }
    dependencyKeys = hinoki.baseGetKeysToInject(factory, true);
    dependencyKeysIndex = -1;
    dependencyKeysLength = dependencyKeys.length;
    dependencyPaths = [];
    while (++dependencyKeysIndex < dependencyKeysLength) {
      dependencyKey = dependencyKeys[dependencyKeysIndex];
      newPath = path.slice();
      newPath.unshift(dependencyKey);
      if (-1 !== path.indexOf(dependencyKey)) {
        return new hinoki.PromiseAndCacheTarget(Promise.reject(new hinoki.CircularDependencyError(newPath)), cacheTarget);
      }
      dependencyPaths.push(newPath);
    }
    if (dependencyPaths.length !== 0) {
      result = hinoki.getValuesAndCacheTarget(source, lifetimes, dependencyPaths, cacheTarget);
      dependenciesPromise = result.promise;
      nextCacheTarget = result.cacheTarget;
    } else {
      dependenciesPromise = Promise.resolve([]);
      nextCacheTarget = cacheTarget;
    }
    factoryCallResultPromise = dependenciesPromise.then(function(dependencyValues) {
      return hinoki.callFactory(path, factory, dependencyValues);
    });
    if (!factory.__nocache) {
      lifetimes[nextCacheTarget][key] = factoryCallResultPromise;
    }
    returnPromise = factoryCallResultPromise.then(function(value) {
      if (!factory.__nocache) {
        lifetimes[nextCacheTarget][key] = value;
      }
      return value;
    })["catch"](function(error) {
      if (!factory.__nocache) {
        delete lifetimes[nextCacheTarget][key];
      }
      return Promise.reject(error);
    });
    return new hinoki.PromiseAndCacheTarget(returnPromise, nextCacheTarget);
  };
  hinoki.tryCatch = function(fun, args) {
    var error;
    try {
      return fun.apply(null, args);
    } catch (_error) {
      error = _error;
      if (helfer.isError(error)) {
        return error;
      } else {
        return new Error(error.toString());
      }
    }
  };
  hinoki.callFactoryFunction = function(path, factoryFunction, args) {
    var result;
    result = hinoki.tryCatch(factoryFunction, args);
    if (helfer.isUndefined(result)) {
      return Promise.reject(new hinoki.FactoryReturnedUndefinedError(path, factoryFunction));
    }
    if (helfer.isError(result)) {
      return Promise.reject(new hinoki.ErrorInFactory(path, factoryFunction, result));
    }
    if (helfer.isThenable(result)) {
      if (typeof hinoki.debug === "function") {
        hinoki.debug({
          event: 'factoryReturnedPromise',
          path: path,
          promise: result,
          factory: factoryFunction
        });
      }
      return result.then(function(value) {
        if (typeof hinoki.debug === "function") {
          hinoki.debug({
            event: 'promiseResolved',
            path: path,
            value: value,
            factory: factoryFunction
          });
        }
        return value;
      })["catch"](function(rejection) {
        return Promise.reject(new hinoki.PromiseRejectedError(path, factoryFunction, rejection));
      });
    }
    if (typeof hinoki.debug === "function") {
      hinoki.debug({
        event: 'factoryReturnedValue',
        path: path,
        value: result,
        factory: factoryFunction
      });
    }
    return Promise.resolve(result);
  };
  hinoki.callFactoryObjectArray = function(path, factoryObject, dependenciesObject) {
    var i, iterator, key, keys, length, result;
    iterator = function(f, key) {
      var dependencies, dependencyKeys, newPath;
      newPath = path.slice();
      newPath[0] += '[' + key + ']';
      if (!hinoki.isFactory(f)) {
        return Promise.reject(new hinoki.BadFactoryError(newPath, f));
      }
      if ('function' === typeof f) {
        dependencyKeys = hinoki.getKeysToInject(f);
        dependencies = _.map(dependencyKeys, function(dependencyKey) {
          return dependenciesObject[dependencyKey];
        });
        return hinoki.callFactoryFunction(newPath, f, dependencies);
      } else if ('object' === typeof f) {
        return hinoki.callFactoryObjectArray(newPath, f, dependenciesObject);
      }
    };
    if (Array.isArray(factoryObject)) {
      return Promise.all(factoryObject).map(iterator);
    } else if ('object' === typeof factoryObject) {
      keys = Object.keys(factoryObject);
      length = keys.length;
      i = -1;
      result = {};
      while (++i < length) {
        key = keys[i];
        if (0 !== key.indexOf('__')) {
          result[key] = iterator(factoryObject[key], key);
        }
      }
      return Promise.props(result);
    }
  };
  hinoki.callFactory = function(path, factory, dependencyValues) {
    var dependenciesObject, dependencyKeys;
    if ('function' === typeof factory) {
      return hinoki.callFactoryFunction(path, factory, dependencyValues);
    } else {
      dependencyKeys = hinoki.getKeysToInject(factory);
      dependenciesObject = _.zipObject(dependencyKeys, dependencyValues);
      return hinoki.callFactoryObjectArray(path, factory, dependenciesObject);
    }
  };
  hinoki.BaseError = function() {};
  helfer.inherits(hinoki.BaseError, Error);
  hinoki.NotFoundError = function(path) {
    this.name = 'NotFoundError';
    this.message = "neither value nor factory found for `" + path[0] + "` in path `" + (hinoki.pathToString(path)) + "`";
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(this, this.constructor);
    }
    this.path = path;
  };
  helfer.inherits(hinoki.NotFoundError, hinoki.BaseError);
  hinoki.CircularDependencyError = function(path) {
    this.name = 'CircularDependencyError';
    this.message = "circular dependency `" + (hinoki.pathToString(path)) + "`";
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(this, this.constructor);
    }
    this.path = path;
  };
  helfer.inherits(hinoki.CircularDependencyError, hinoki.BaseError);
  hinoki.ErrorInFactory = function(path, factory, error) {
    this.name = 'ErrorInFactory';
    this.message = "error in factory for `" + path[0] + "`. original error `" + (error.toString()) + "`";
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(this, this.constructor);
    }
    this.path = path;
    this.factory = factory;
    this.error = error;
  };
  helfer.inherits(hinoki.ErrorInFactory, hinoki.BaseError);
  hinoki.FactoryReturnedUndefinedError = function(path, factory) {
    this.name = 'FactoryReturnedUndefinedError';
    this.message = "factory for `" + path[0] + "` returned undefined";
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(this, this.constructor);
    }
    this.path = path;
    this.factory = factory;
  };
  helfer.inherits(hinoki.FactoryReturnedUndefinedError, hinoki.BaseError);
  hinoki.PromiseRejectedError = function(path, factory, error) {
    this.name = 'PromiseRejectedError';
    this.message = "promise returned from factory for `" + path[0] + "` was rejected. original error `" + (error.toString()) + "`";
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(this, this.constructor);
    }
    this.path = path;
    this.factory = factory;
    this.error = error;
  };
  helfer.inherits(hinoki.PromiseRejectedError, hinoki.BaseError);
  hinoki.BadFactoryError = function(path, factory) {
    this.name = 'BadFactoryError';
    this.message = "factory for `" + path[0] + "` has to be a function, object of factories or array of factories but is `" + (typeof factory) + "`";
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(this, this.constructor);
    }
    this.path = path;
    this.factory = factory;
  };
  helfer.inherits(hinoki.BadFactoryError, hinoki.BaseError);
  hinoki.pathToString = function(path) {
    return path.join(' <- ');
  };
  hinoki.getKeysToInject = function(factory) {
    return hinoki.baseGetKeysToInject(factory, false);
  };
  hinoki.baseGetKeysToInject = function(factory, cache) {
    var keys, keysSet, type;
    if (factory.__inject != null) {
      return factory.__inject;
    }
    type = typeof factory;
    if (('object' === type) || ('function' === type)) {
      if ('function' === type) {
        keys = helfer.parseFunctionArguments(factory);
      } else {
        keysSet = {};
        _.forEach(factory, function(subFactory) {
          var subKeys;
          subKeys = hinoki.baseGetKeysToInject(subFactory, cache);
          return _.forEach(subKeys, function(subKey) {
            return keysSet[subKey] = true;
          });
        });
        keys = Object.keys(keysSet);
      }
      if (cache) {
        factory.__inject = keys;
      }
      return keys;
    }
    return [];
  };
  hinoki.isFactory = function(value) {
    var type;
    type = typeof value;
    return (type === 'function') || Array.isArray(value) || (type === 'object');
  };
  if (hinoki.isNodejs) {
    hinoki.requireSource = function(filepath) {
      if ('string' !== typeof filepath) {
        throw new Error('argument must be a string');
      }
      return hinoki.baseRequireSource(filepath, {});
    };
    hinoki.baseRequireSource = function(filepath, object) {
      var exports, extension, filenames, stat;
      stat = fsModule.statSync(filepath);
      if (stat.isFile()) {
        extension = pathModule.extname(filepath);
        if (extension !== '.js' && extension !== '.coffee') {
          return;
        }
        if (extension === '.coffee') {
          require('coffee-script/register');
        }
        exports = require(filepath);
        Object.keys(exports).map(function(key) {
          if (!hinoki.isFactory(exports[key])) {
            throw new Error('export is not a factory: ' + key + ' in :' + filepath);
          }
          if (object[key] != null) {
            throw new Error('duplicate export: ' + key + ' in: ' + filepath + '. first was in: ' + object[key].__file);
          }
          object[key] = exports[key];
          return object[key].__file = filepath;
        });
      } else if (stat.isDirectory()) {
        filenames = fsModule.readdirSync(filepath);
        filenames.forEach(function(filename) {
          return hinoki.baseRequireSource(pathModule.join(filepath, filename), object);
        });
      }
      return object;
    };
  }
  hinoki.source = function(arg) {
    var coercedSources, source;
    if ('function' === typeof arg) {
      return arg;
    }
    if (Array.isArray(arg)) {
      coercedSources = _.map(arg, hinoki.source);
      source = function(key) {
        var index, length, result;
        index = -1;
        length = arg.length;
        while (++index < length) {
          result = coercedSources[index](key);
          if (result != null) {
            return result;
          }
        }
        return null;
      };
      source.keys = function() {
        var keys;
        keys = [];
        _.each(coercedSources, function(source) {
          if (source.keys != null) {
            return keys = keys.concat(source.keys());
          }
        });
        return keys;
      };
      return source;
    }
    if ('string' === typeof arg) {
      if (!hinoki.isNodejs) {
        throw new Error('string sources only work on Node.js because they need the filesystem module to be present');
      }
      return hinoki.source(hinoki.requireSource(arg));
    }
    if ('object' === typeof arg) {
      source = function(key) {
        return arg[key];
      };
      source.keys = function() {
        return Object.keys(arg);
      };
      return source;
    }
    throw new Error('argument must be a function, string, object or array of these');
  };
  hinoki.decorateSourceToAlsoLookupWithPrefix = function(innerSource, prefix) {
    var source;
    source = function(key) {
      var result, wrapperFactory;
      result = innerSource(key);
      if (result != null) {
        return result;
      }
      if (0 === key.indexOf(prefix)) {
        return null;
      }
      wrapperFactory = function(wrapped) {
        return wrapped;
      };
      wrapperFactory.__inject = [prefix + key];
      return wrapperFactory;
    };
    if (innerSource.keys != null) {
      source.keys = innerSource.keys;
    }
    return source;
  };
  return hinoki;
});

var module;

module = {};

module.exports = {};

module.exports.initClient = function() {
  return function() {
    return console.log('initClient');
  };
};

module.exports.hinoki = function(window) {
  return window.hinoki;
};

module.exports._ = function(window) {
  return window._.noConflict();
};

(function() {
  var lifetime, source;
  console.log('initializing client');
  lifetime = {
    window: window
  };
  source = hinoki.source([module.exports]);
  console.log('Promise', Promise);
  return hinoki(source, lifetime, function(initClient) {
    console.log('successfully retrieved `initClient`. calling it now.');
    return initClient();
  });
})();

(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{391:function(t,e,o){var r=o(409);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,o(17).default)("0f69988f",r,!0,{})},405:function(t,e,o){"use strict";var r=o(4),a=o(20),i=o(24),n=o(158),s=o(63),c=o(11),l=o(64).f,f=o(97).f,u=o(12).f,p=o(406).trim,d=r.Number,h=d,v=d.prototype,b="Number"==i(o(96)(v)),m="trim"in String.prototype,g=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){var o,r,a,i=(e=m?e.trim():p(e,3)).charCodeAt(0);if(43===i||45===i){if(88===(o=e.charCodeAt(2))||120===o)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+e}for(var n,c=e.slice(2),l=0,f=c.length;l<f;l++)if((n=c.charCodeAt(l))<48||n>a)return NaN;return parseInt(c,r)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof d&&(b?c(function(){v.valueOf.call(o)}):"Number"!=i(o))?n(new h(g(e)),o,d):g(e)};for(var w,N=o(10)?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;N.length>I;I++)a(h,w=N[I])&&!a(d,w)&&u(d,w,f(h,w));d.prototype=v,v.constructor=d,o(15)(r,"Number",d)}},406:function(t,e,o){var r=o(9),a=o(23),i=o(11),n=o(407),s="["+n+"]",c=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),f=function(t,e,o){var a={},s=i(function(){return!!n[t]()||"​"!="​"[t]()}),c=a[t]=s?e(u):n[t];o&&(a[o]=c),r(r.P+r.F*s,"String",a)},u=f.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(l,"")),t};t.exports=f},407:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},408:function(t,e,o){"use strict";var r=o(391);o.n(r).a},409:function(t,e,o){(t.exports=o(16)(!1)).push([t.i,".back-to-top-fade-enter-active[data-v-24a405e5],.back-to-top-fade-leave-active[data-v-24a405e5]{transition:opacity .7s}.back-to-top-fade-enter[data-v-24a405e5],.back-to-top-fade-leave-to[data-v-24a405e5]{opacity:0}.vue-back-to-top[data-v-24a405e5]{cursor:pointer;position:fixed;z-index:1000}.vue-back-to-top .default[data-v-24a405e5]{background-color:#f5c85c;border-radius:3px;color:#fff;height:30px;line-height:30px;text-align:center;width:160px}.vue-back-to-top .default span[data-v-24a405e5]{color:#fff}.vue-back-to-top--is-footer[data-v-24a405e5]{bottom:50%!important;position:absolute;-webkit-transform:translateY(50%);transform:translateY(50%)}",""])},410:function(t,e,o){"use strict";o.r(e);var r=o(149),a=o(150),i=o(148),n=o(146),s=o(147),c=(o(405),{name:"BackToTop",props:{text:{type:String,default:"Voltar ao topo"},visibleoffset:{type:[String,Number],default:600},visibleoffsetbottom:{type:[String,Number],default:0},right:{type:String,default:"30px"},bottom:{type:String,default:"40px"},scrollFn:{type:Function,default:function(t){}}},data:function(){return{visible:!1}},mounted:function(){window.smoothscroll=function(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>0&&(window.requestAnimationFrame(window.smoothscroll),window.scrollTo(0,Math.floor(t-t/5)))},window.addEventListener("scroll",this.catchScroll)},destroyed:function(){window.removeEventListener("scroll",this.catchScroll)},methods:{catchScroll:function(){var t=window.pageYOffset>parseInt(this.visibleoffset),e=window.innerHeight+window.pageYOffset>=document.body.offsetHeight-parseInt(this.visibleoffsetbottom);this.visible=parseInt(this.visibleoffsetbottom)>0?t&&!e:t,this.scrollFn(this)},backToTop:function(){window.smoothscroll(),this.$emit("scrolled")}}}),l=(o(408),o(1)),f=Object(l.a)(c,function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("2")])},[],!1,null,"24a405e5",null);f.options.__file="elevator.vue";var u=f.exports,p={components:{hero:r.a,offerings:a.a,approach:i.a,pro:n.a,contact:s.a,elevator:u}},d=Object(l.a)(p,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("hero",{attrs:{"hero-msg":"We help brands build engaging digital and visual identities"}}),this._v(" "),e("div",{staticClass:"main-content"},[e("offerings",{attrs:{title:"we got skills",description:"Using our unique\trange of skills we are able to offer a number of services that can be implemented to help any business get bigger and serve more people"}}),this._v(" "),e("approach",{attrs:{title:"our approach",description:"We use a tailored approach that focused on the business goals and the consumers needs"}}),this._v(" "),e("pro",{attrs:{title:"selected works",description:"A brief selection of some of our favorite projects form recently"}}),this._v(" "),e("contact",{attrs:{title:"let's chat",description:"Our work isn't just about beauty we pride ourselves in the results that we have gotten for our clients and impact that our work has made on their consumers lives"}}),this._v(" "),e("elevator")],1)],1)},[],!1,null,null,null);d.options.__file="index.vue";e.default=d.exports}}]);
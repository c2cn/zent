(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{976:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return _}));var t=s(845),o=s.n(t),p=s(839),e=s.n(p),c=s(840),l=s.n(c),u=s(519),r=s.n(u),i=s(841),k=s.n(i),d=s(842),h=s.n(d),m=s(843),g=s.n(m),f=s(844),v=s.n(f),y=s(0),C=s.n(y),w=s(211),b=s(147);function E(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var s,t=g()(n);if(a){var o=g()(this).constructor;s=Reflect.construct(t,arguments,o)}else s=t.apply(this,arguments);return h()(this,s)}}var F=function(){var n=function(n){k()(s,n);var a=E(s);function s(){var n;e()(this,s);for(var t=arguments.length,o=new Array(t),p=0;p<t;p++)o[p]=arguments[p];return n=a.call.apply(a,[this].concat(o)),v()(r()(n),"state",{color:"#5197FF"}),v()(r()(n),"handleChange",(function(a){n.setState({color:a})})),n}return l()(s,[{key:"render",value:function(){var n=this.state.color;return C.a.createElement("div",null,C.a.createElement(b.ColorPicker,{color:n,onChange:this.handleChange}),C.a.createElement("div",{style:{color:n,marginTop:5}},"Current color：",n))}}]),s}(C.a.Component);return C.a.createElement(n,null)},A=function(){var n=function(n){k()(s,n);var a=E(s);function s(){var n;e()(this,s);for(var t=arguments.length,o=new Array(t),p=0;p<t;p++)o[p]=arguments[p];return n=a.call.apply(a,[this].concat(o)),v()(r()(n),"state",{color:"rgba(81, 151, 255, 0.6)",showAlpha:!0}),v()(r()(n),"handleChange",(function(a){n.setState({color:a})})),n}return l()(s,[{key:"render",value:function(){var n=this.state,a=n.color,s=n.showAlpha;return C.a.createElement("div",null,C.a.createElement(b.ColorPicker,{color:a,showAlpha:s,onChange:this.handleChange}),C.a.createElement("div",{style:{color:a,marginTop:5}},"Current color：",a))}}]),s}(C.a.Component);return C.a.createElement(n,null)},S=function(){var n=function(n){k()(s,n);var a=E(s);function s(){var n;e()(this,s);for(var t=arguments.length,o=new Array(t),p=0;p<t;p++)o[p]=arguments[p];return n=a.call.apply(a,[this].concat(o)),v()(r()(n),"state",{color:"#FF4444"}),v()(r()(n),"handleChange",(function(a){n.setState({color:a})})),n}return l()(s,[{key:"render",value:function(){var n=this.state.color;return C.a.createElement("div",null,C.a.createElement(b.ColorPicker,{color:n,type:"simple",onChange:this.handleChange}),C.a.createElement("div",{style:{color:n,marginTop:5}},"Current color：",n))}}]),s}(C.a.Component);return C.a.createElement(n,null)},P=function(){var n=b.ColorPicker.ColorBoard,a=function(a){k()(t,a);var s=E(t);function t(){var n;e()(this,t);for(var a=arguments.length,o=new Array(a),p=0;p<a;p++)o[p]=arguments[p];return n=s.call.apply(s,[this].concat(o)),v()(r()(n),"state",{color:"#5197FF"}),v()(r()(n),"handleChange",(function(a){n.setState({color:a.hex})})),n}return l()(t,[{key:"render",value:function(){var a=this.state,s=a.color;a.showAlpha;return C.a.createElement("div",null,C.a.createElement(n,{color:s,onChange:this.handleChange}),C.a.createElement("div",{style:{color:s,marginTop:10}},s))}}]),t}(C.a.Component);return C.a.createElement(a,null)},T=function(){var n=b.ColorPicker.ColorBoard,a=function(a){k()(t,a);var s=E(t);function t(){var n;e()(this,t);for(var a=arguments.length,o=new Array(a),p=0;p<a;p++)o[p]=arguments[p];return n=s.call.apply(s,[this].concat(o)),v()(r()(n),"state",{color:"rgba(81, 151, 255, 0.6)",showAlpha:!0}),v()(r()(n),"handleChange",(function(a){n.setState({color:a.rgba})})),n}return l()(t,[{key:"render",value:function(){var a=this.state,s=a.color,t=a.showAlpha;return C.a.createElement("div",null,C.a.createElement(n,{color:s,showAlpha:t,onChange:this.handleChange}),C.a.createElement("div",{style:{color:s,marginTop:10}},"Current color：",s))}}]),t}(C.a.Component);return C.a.createElement(a,null)};function D(n){return C.a.createElement(n.tag,o()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function j(n){return C.a.createElement(D,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function z(n){return C.a.createElement(D,{tag:"style",html:n.style})}var N=function(n){k()(s,n);var a=E(s);function s(){var n;e()(this,s);for(var t=arguments.length,o=new Array(t),p=0;p<t;p++)o[p]=arguments[p];return n=a.call.apply(a,[this].concat(o)),v()(r()(n),"state",{showCode:!1}),v()(r()(n),"toggle",(function(){n.setState({showCode:!n.state.showCode})})),n}return l()(s,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,o=a.children;return C.a.createElement("div",{className:"zandoc-react-demo"},C.a.createElement("div",{className:"zandoc-react-demo__preview"},o),C.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},C.a.createElement("div",{className:"zandoc-react-demo__title"},C.a.createElement("p",null,s||"")),C.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&C.a.createElement("pre",{className:"zandoc-react-demo__code"},C.a.createElement(D,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),s}(y.Component),_=function(n){k()(s,n);var a=E(s);function s(){return e()(this,s),a.apply(this,arguments)}return l()(s,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(w.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return C.a.createElement("div",{className:"zandoc-react-container",key:null},C.a.createElement(z,{style:""}),C.a.createElement(j,{html:'<h2 class="anchor-heading"><a href="#colorpicker">¶</a><a href="javascript:void(0)" id="colorpicker" class="anchor-point"></a>ColorPicker</h2>\n<p>ColorPicker is used for color selection and supports multiple formats.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),C.a.createElement(N,{title:"Basic usage",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ColorPicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    color<span class="token punctuation">:</span> <span class="token string">\'#5197FF\'</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>color<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      color\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> color <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorPicker</span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>color<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">,</span> marginTop<span class="token punctuation">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>Current color：<span class="token punctuation">{</span>color<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},C.a.createElement(F)),C.a.createElement(N,{title:"Choose opacity",id:"Demoopacity",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ColorPicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    color<span class="token punctuation">:</span> <span class="token string">\'rgba(81, 151, 255, 0.6)\'</span><span class="token punctuation">,</span>\n    showAlpha<span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>color<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      color\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> color<span class="token punctuation">,</span> showAlpha <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorPicker</span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>color<span class="token punctuation">}</span></span> <span class="token attr-name">showAlpha</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showAlpha<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">,</span> marginTop<span class="token punctuation">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>Current color：<span class="token punctuation">{</span>color<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},C.a.createElement(A)),C.a.createElement(N,{title:"Simple version",id:"Demosimple",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ColorPicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    color<span class="token punctuation">:</span> <span class="token string">\'#FF4444\'</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>color<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      color\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> color <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorPicker</span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>color<span class="token punctuation">}</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>simple<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">,</span> marginTop<span class="token punctuation">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>Current color：<span class="token punctuation">{</span>color<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},C.a.createElement(S)),C.a.createElement(N,{title:"Color board",id:"Democolorboard",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ColorPicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> ColorBoard <span class="token operator">=</span> ColorPicker<span class="token punctuation">.</span>ColorBoard<span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    color<span class="token punctuation">:</span> <span class="token string">\'#5197FF\'</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>color<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      color<span class="token punctuation">:</span> color<span class="token punctuation">.</span>hex\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> color<span class="token punctuation">,</span> showAlpha <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorBoard</span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>color<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">,</span> marginTop<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span>color<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},C.a.createElement(P)),C.a.createElement(N,{title:"Color board with opacity",id:"Demoopacityboard",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ColorPicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> ColorBoard <span class="token operator">=</span> ColorPicker<span class="token punctuation">.</span>ColorBoard<span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    color<span class="token punctuation">:</span> <span class="token string">\'rgba(81, 151, 255, 0.6)\'</span><span class="token punctuation">,</span>\n    showAlpha<span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>color<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      color<span class="token punctuation">:</span> color<span class="token punctuation">.</span>rgba\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> color<span class="token punctuation">,</span> showAlpha <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorBoard</span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>color<span class="token punctuation">}</span></span> <span class="token attr-name">showAlpha</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showAlpha<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">,</span> marginTop<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>Current color：<span class="token punctuation">{</span>color<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},C.a.createElement(T)),C.a.createElement(j,{html:"<h3 class=\"anchor-heading\"><a href=\"#api\">¶</a><a href=\"javascript:void(0)\" id=\"api\" class=\"anchor-point\"></a>API</h3>\n<h4 class=\"anchor-heading\"><a href=\"#colorpicker\">¶</a><a href=\"javascript:void(0)\" id=\"colorpicker\" class=\"anchor-point\"></a>ColorPicker</h4>\n<table class=\"table\">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>color</td>\n<td>The color of ColorPicker</td>\n<td>string</td>\n<td></td>\n<td><code>'#5197FF'</code>\n or \n<code>'rgba(81, 151, 255, 0.6)'</code></td>\n</tr>\n<tr>\n<td>showAlpha</td>\n<td>Whether to show opacity selection</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true/false</code></td>\n</tr>\n<tr>\n<td>type</td>\n<td>The type of ColorPicker</td>\n<td>string</td>\n<td><code>'default'</code></td>\n<td><code>'default'</code>\n、\n<code>'simple'</code></td>\n</tr>\n<tr>\n<td>presetColors</td>\n<td>Simple version of custom color array</td>\n<td>array</td>\n<td>[\n<code>'#FFFFFF'</code>\n, \n<code>'#F8F8F8'</code>\n, \n<code>'#F2F2F2'</code>\n, \n<code>'#999999'</code>\n, \n<code>'#444444'</code>\n, \n<code>'#FF4444'</code>\n, \n<code>'#FF6500'</code>\n, \n<code>'#FF884D'</code>\n, \n<code>'#FFCD00'</code>\n, \n<code>'#3FBD00'</code>\n, \n<code>'#3FBC87'</code>\n, \n<code>'#00CD98'</code>\n, \n<code>'#5197FF'</code>\n, \n<code>'#BADCFF'</code>\n, \n<code>'#FFEFB8'</code>\n]</td>\n<td></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>The callback function that is triggerd when color is changed</td>\n<td>func(color)</td>\n<td><code>noop</code></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>The custom classname</td>\n<td>string</td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n<tr>\n<td>wrapperClassName</td>\n<td>The  custom classname of trigger's parent node</td>\n<td>string</td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>The custom prefix</td>\n<td>string</td>\n<td><code>'zent'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h4 class=\"anchor-heading\"><a href=\"#colorboard\">¶</a><a href=\"javascript:void(0)\" id=\"colorboard\" class=\"anchor-point\"></a>ColorBoard</h4>\n<table class=\"table\">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>color</td>\n<td>The color of ColorPicker</td>\n<td>string</td>\n<td></td>\n<td><code>'#5197FF'</code>\n or \n<code>'rgba(81, 151, 255, 0.6)'</code></td>\n</tr>\n<tr>\n<td>showAlpha</td>\n<td>Whether to show opacity selection</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true/false</code></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>The callback function that is triggerd when color is changed</td>\n<td>func(color)</td>\n<td><code>noop</code></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>The cutom clasname</td>\n<td>string</td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>The custom prefix</td>\n<td>string</td>\n<td><code>'zent'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>"}))}}]),s}(y.Component)}}]);
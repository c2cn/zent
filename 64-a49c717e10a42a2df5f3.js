(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{955:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return O}));var t=s(845),p=s.n(t),o=s(839),e=s.n(o),c=s(840),u=s.n(c),l=s(519),r=s.n(l),i=s(841),k=s.n(i),d=s(842),g=s.n(d),m=s(843),h=s.n(m),f=s(844),y=s.n(f),E=s(0),v=s.n(E),w=s(211),C=s(147);function b(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var s,t=h()(n);if(a){var p=h()(this).constructor;s=Reflect.construct(t,arguments,p)}else s=t.apply(this,arguments);return g()(this,s)}}var B=function(){var n=function(n){k()(s,n);var a=b(s);function s(){var n;e()(this,s);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return n=a.call.apply(a,[this].concat(p)),y()(r()(n),"state",{fail:!1}),y()(r()(n),"triggerFail",(function(){n.setState({fail:!0})})),n}return u()(s,[{key:"render",value:function(){if(this.state.fail)throw new Error("This is an error from render.");return v.a.createElement("div",null,v.a.createElement("span",{style:{marginRight:10}},"Render OK"),v.a.createElement(C.Button,{onClick:this.triggerFail},"Trigger error"))}}]),s}(v.a.Component);return v.a.createElement("div",null,v.a.createElement(C.ErrorBoundary,null,v.a.createElement(n,null)),v.a.createElement("div",{style:{marginTop:10}},"Not affected here"))},R=function(){var n=function(n){k()(s,n);var a=b(s);function s(){var n;e()(this,s);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return n=a.call.apply(a,[this].concat(p)),y()(r()(n),"state",{fail:!1}),y()(r()(n),"triggerFail",(function(){n.setState({fail:!0})})),n}return u()(s,[{key:"render",value:function(){if(this.state.fail)throw new Error("This is an error from render.");return v.a.createElement("div",null,v.a.createElement("span",{style:{marginRight:10}},"Render OK"),v.a.createElement(C.Button,{onClick:this.triggerFail},"Trigger error"))}}]),s}(v.a.Component);return v.a.createElement("div",null,v.a.createElement(C.ErrorBoundary,{onError:function(n){return C.Notify.error(n.toString())}},v.a.createElement(n,null)),v.a.createElement("div",{style:{marginTop:10}},"Not affected here"))},T=function(){var n=function(n){k()(s,n);var a=b(s);function s(){var n;e()(this,s);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return n=a.call.apply(a,[this].concat(p)),y()(r()(n),"state",{fail:!1}),y()(r()(n),"triggerFail",(function(){n.setState({fail:!0})})),n}return u()(s,[{key:"render",value:function(){if(this.state.fail)throw new Error("This is an error from render.");return v.a.createElement("div",null,v.a.createElement("span",{style:{marginRight:10}},"Render OK"),v.a.createElement(C.Button,{onClick:this.triggerFail},"Trigger error"))}}]),s}(v.a.Component),a=C.ErrorBoundary.withErrorBoundary({Component:n}),s=C.ErrorBoundary.catchError()(n);return v.a.createElement("div",null,v.a.createElement(a,null),v.a.createElement(s,null),v.a.createElement("div",{style:{marginTop:10}},"Not affected here"))},N=function(){var n=function(n){k()(s,n);var a=b(s);function s(){return e()(this,s),a.apply(this,arguments)}return u()(s,[{key:"render",value:function(){return v.a.createElement("div",null,this.props.error.toString())}}]),s}(v.a.Component),a=function(n){k()(s,n);var a=b(s);function s(){var n;e()(this,s);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return n=a.call.apply(a,[this].concat(p)),y()(r()(n),"state",{fail:!1}),y()(r()(n),"triggerFail",(function(){n.setState({fail:!0})})),n}return u()(s,[{key:"render",value:function(){if(this.state.fail)throw new Error("This is an error from render.");return v.a.createElement("div",null,v.a.createElement("span",{style:{marginRight:10}},"Render OK"),v.a.createElement(C.Button,{onClick:this.triggerFail},"Trigger error"))}}]),s}(v.a.Component);return v.a.createElement("div",null,v.a.createElement(C.ErrorBoundary,{FallbackComponent:n},v.a.createElement(a,null)),v.a.createElement("div",{style:{marginTop:10}},"Not affected here"))};function F(n){return v.a.createElement(n.tag,p()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function S(n){return v.a.createElement(F,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function z(n){return v.a.createElement(F,{tag:"style",html:n.style})}var _=function(n){k()(s,n);var a=b(s);function s(){var n;e()(this,s);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return n=a.call.apply(a,[this].concat(p)),y()(r()(n),"state",{showCode:!1}),y()(r()(n),"toggle",(function(){n.setState({showCode:!n.state.showCode})})),n}return u()(s,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return v.a.createElement("div",{className:"zandoc-react-demo"},v.a.createElement("div",{className:"zandoc-react-demo__preview"},p),v.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},v.a.createElement("div",{className:"zandoc-react-demo__title"},v.a.createElement("p",null,s||"")),v.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&v.a.createElement("pre",{className:"zandoc-react-demo__code"},v.a.createElement(F,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),s}(E.Component),O=function(n){k()(s,n);var a=b(s);function s(){return e()(this,s),a.apply(this,arguments)}return u()(s,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(w.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return v.a.createElement("div",{className:"zandoc-react-container",key:null},v.a.createElement(z,{style:""}),v.a.createElement(S,{html:'<h2 class="anchor-heading"><a href="#errorboundary">¶</a><a href="javascript:void(0)" id="errorboundary" class="anchor-point"></a>ErrorBoundary</h2>\n<p>Catch errors down in the component tree. It is the <code>try...catch...</code> to <code>React</code> component tree.</p>\n<h3 class="anchor-heading"><a href="#guides">¶</a><a href="javascript:void(0)" id="guides" class="anchor-point"></a>Guides</h3>\n<p>Use this to separate component errors within a page. <code>ErrorBoundary</code> catches errors during component life cycle down in the component tree so that errors occur in one part of the page will not affect other parts of the same page.</p>\n<p>For example, say we have a page that is divided into two parts: navigation on the left and main content on the right. You can use <code>ErrorBoundary</code> to wrap both parts so that errors occur in one part will not break the other part of the page.</p>\n<p>Note：</p>\n<ul>\n<li>Errors in <code>React</code> event handlers will not be catched</li>\n<li>Errors in asynchronous code(e.g. <code>setTimeout</code>，<code>requestAnimationFrame</code>) will not be catched</li>\n<li>Requires <code>React 16</code> or newer version</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),v.a.createElement(_,{title:"Basic Usage",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ErrorBoundary<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ErrorComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    fail<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">triggerFail</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      fail<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>fail<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'This is an error from render.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token operator">&lt;</span>span style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginRight<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>Render OK<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>triggerFail<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Trigger error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ErrorBoundary</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ErrorComponent</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ErrorBoundary</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>Not affected here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.a.createElement(B)),v.a.createElement(_,{title:"onError callback",id:"Demoonerror",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ErrorBoundary<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ErrorComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    fail<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">triggerFail</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      fail<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>fail<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'This is an error from render.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token operator">&lt;</span>span style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginRight<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>Render OK<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>triggerFail<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Trigger error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ErrorBoundary</span> <span class="token attr-name">onError</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>err <span class="token operator">=></span> Notify<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ErrorComponent</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ErrorBoundary</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>Not affected here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.a.createElement(R)),v.a.createElement(_,{title:"withErrorBoundary and catchError HOC",id:"Demohoc",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ErrorBoundary<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ErrorComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    fail<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">triggerFail</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      fail<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>fail<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'This is an error from render.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token operator">&lt;</span>span style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginRight<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>Render OK<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>triggerFail<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Trigger error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> GuardedErrorComponent <span class="token operator">=</span> ErrorBoundary<span class="token punctuation">.</span><span class="token function">withErrorBoundary</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  Component<span class="token punctuation">:</span> ErrorComponent<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> GuardedErrorComponent2 <span class="token operator">=</span> ErrorBoundary<span class="token punctuation">.</span><span class="token function">catchError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>ErrorComponent<span class="token punctuation">)</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>GuardedErrorComponent</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>GuardedErrorComponent2</span> <span class="token punctuation">/></span></span>\n    <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>Not affected here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.a.createElement(T)),v.a.createElement(_,{title:"Custom FallbackComponent",id:"Democustom",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ErrorBoundary<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Fallback</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>error<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ErrorComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    fail<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">triggerFail</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      fail<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>fail<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'This is an error from render.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token operator">&lt;</span>span style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginRight<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>Render OK<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>triggerFail<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Trigger error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ErrorBoundary</span> <span class="token attr-name">FallbackComponent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>Fallback<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ErrorComponent</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ErrorBoundary</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>Not affected here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.a.createElement(N)),v.a.createElement(S,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>children</td>\n<td>Children component to guard</td>\n<td><code>node</code></td>\n<td>Yes</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onError</td>\n<td>Callback when an error occurs inside a child component</td>\n<td><code>(error: Error, stackTrace: string): void</code></td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>FallbackComponent</td>\n<td>Component to render when an error occurs</td>\n<td><code>Component</code></td>\n<td>No</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<p><code>FallbackComponent</code> has two props: <code>error</code> and <code>componentStack</code>，they are the same as <code>onError</code>\'s parameters。</p>\n<h4 class="anchor-heading"><a href="#witherrorboundary">¶</a><a href="javascript:void(0)" id="witherrorboundary" class="anchor-point"></a>withErrorBoundary</h4>\n<p>This is a high order component, it provides the same functionality as <code>ErrorBoundary</code>.</p>\n<pre><code class="language-ts"><span class="token function">withErrorBoundary</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  BaseComponent<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Component<span class="token punctuation">,</span>\n  onError<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>error<span class="token punctuation">:</span> Error<span class="token punctuation">,</span> stackTrace<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">,</span>\n  FallbackComponent<span class="token operator">?</span><span class="token punctuation">:</span> React<span class="token punctuation">.</span>Component\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">:</span> React<span class="token punctuation">.</span>Component</code></pre>\n<h4 class="anchor-heading"><a href="#catcherror">¶</a><a href="javascript:void(0)" id="catcherror" class="anchor-point"></a>catchError</h4>\n<p>This HOC is the same as <code>withErrorBoundary</code>, but more decorator friendly.</p>\n<pre><code class="language-ts"><span class="token function">catchError</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  onError<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>error<span class="token punctuation">:</span> Error<span class="token punctuation">,</span> stackTrace<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">,</span>\n  FallbackComponent<span class="token operator">?</span><span class="token punctuation">:</span> React<span class="token punctuation">.</span>Component\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>BaseComponent<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Component<span class="token punctuation">)</span><span class="token punctuation">:</span> React<span class="token punctuation">.</span>Component<span class="token punctuation">)</span></code></pre>'}))}}]),s}(E.Component)}}]);
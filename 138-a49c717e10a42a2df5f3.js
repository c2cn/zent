(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{1006:function(n,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return S}));var s=t(845),e=t.n(s),p=t(839),o=t.n(p),c=t(840),l=t.n(c),u=t(519),i=t.n(u),r=t(841),k=t.n(r),d=t(842),m=t.n(d),h=t(843),g=t.n(h),y=t(844),b=t.n(y),f=t(0),v=t.n(f),T=t(211),E=t(147);function z(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,s=g()(n);if(a){var e=g()(this).constructor;t=Reflect.construct(s,arguments,e)}else t=s.apply(this,arguments);return m()(this,t)}}var w=function(){return v.a.createElement("div",null,v.a.createElement("h3",null,"Horizontal"),v.a.createElement(E.Timeline.Legend,null,"Sample"),v.a.createElement(E.Timeline,{type:"horizontal"},v.a.createElement(E.Timeline.Item,{label:"Time 1"}),v.a.createElement(E.Timeline.Item,{label:"Time 2",tip:"hello"}),v.a.createElement(E.Timeline.Item,{label:"Time 3"}),v.a.createElement(E.Timeline.Item,{size:0,label:"Custom length"})),v.a.createElement("h3",null,"Vertical"),v.a.createElement(E.Timeline.Legend,null,"Sample"),v.a.createElement(E.Timeline,{type:"vertical"},v.a.createElement(E.Timeline.Item,{label:"Time 1"}),v.a.createElement(E.Timeline.Item,{label:"Time 2",tip:"hello"}),v.a.createElement(E.Timeline.Item,{label:"Time 3"}),v.a.createElement(E.Timeline.Item,{label:"No dot, custom color",showDot:!1,lineColor:"red"}),v.a.createElement(E.Timeline.Item,{label:"No label",showLabel:!1}),v.a.createElement(E.Timeline.Item,{label:"Custom dot color",dotColor:"#5197FF"}),v.a.createElement(E.Timeline.Item,{size:0,label:"Custom length"})))},C=function(){return v.a.createElement("div",null,v.a.createElement(E.Timeline,{type:"horizontal",timeline:["hello","world",{label:"blue",dotColor:"#5197FF"},{label:"red",lineColor:"#E70000"},{label:"color",color:"#E70000"}]}))},I=function(){var n=[{label:"online",color:"#00b90e",percent:.3},{label:"unknown",percent:.2,showDot:!1,showLabel:!1},{label:"offline",color:"#E70000",percent:.5}],a=function(a){k()(s,a);var t=z(s);function s(){var n;o()(this,s);for(var a=arguments.length,e=new Array(a),p=0;p<a;p++)e[p]=arguments[p];return n=t.call.apply(t,[this].concat(e)),b()(i()(n),"state",{size:500}),b()(i()(n),"onChange",(function(a){n.setState({size:a})})),n}return l()(s,[{key:"render",value:function(){var a=this.state.size;return v.a.createElement("div",null,v.a.createElement(E.NumberInput,{value:a,onChange:this.onChange,showStepper:!0}),v.a.createElement(E.Timeline,{size:a,timeline:n}))}}]),s}(v.a.Component);return v.a.createElement(a,null)};function N(n){return v.a.createElement(n.tag,e()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function D(n){return v.a.createElement(N,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function j(n){return v.a.createElement(N,{tag:"style",html:n.style})}var _=function(n){k()(t,n);var a=z(t);function t(){var n;o()(this,t);for(var s=arguments.length,e=new Array(s),p=0;p<s;p++)e[p]=arguments[p];return n=a.call.apply(a,[this].concat(e)),b()(i()(n),"state",{showCode:!1}),b()(i()(n),"toggle",(function(){n.setState({showCode:!n.state.showCode})})),n}return l()(t,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,t=a.title,s=a.src,e=a.children;return v.a.createElement("div",{className:"zandoc-react-demo"},v.a.createElement("div",{className:"zandoc-react-demo__preview"},e),v.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},v.a.createElement("div",{className:"zandoc-react-demo__title"},v.a.createElement("p",null,t||"")),v.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&v.a.createElement("pre",{className:"zandoc-react-demo__code"},v.a.createElement(N,{tag:"code",html:s,attributes:{className:"language-jsx"}})))}}]),t}(f.Component),S=function(n){k()(t,n);var a=z(t);function t(){return o()(this,t),a.apply(this,arguments)}return l()(t,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(T.a)(document.documentElement,0,function n(a,t){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(t+=a.offsetTop),n(a.parentNode,t);return t}(a,-9))}}},{key:"render",value:function(){return v.a.createElement("div",{className:"zandoc-react-container",key:null},v.a.createElement(j,{style:""}),v.a.createElement(D,{html:'<h2 class="anchor-heading"><a href="#timeline">¶</a><a href="javascript:void(0)" id="timeline" class="anchor-point"></a>Timeline</h2>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),v.a.createElement(_,{title:"Basic usage",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Timeline <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>Horizontal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Legend</span><span class="token punctuation">></span></span>Sample<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Legend</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Time 1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Time 2<span class="token punctuation">"</span></span> <span class="token attr-name">tip</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hello<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Time 3<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Custom length<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>Vertical<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Legend</span><span class="token punctuation">></span></span>Sample<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Legend</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Time 1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Time 2<span class="token punctuation">"</span></span> <span class="token attr-name">tip</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hello<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Time 3<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>No dot, custom color<span class="token punctuation">"</span></span> <span class="token attr-name">showDot</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token attr-name">lineColor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>No label<span class="token punctuation">"</span></span> <span class="token attr-name">showLabel</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Custom dot color<span class="token punctuation">"</span></span> <span class="token attr-name">dotColor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#5197FF<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Custom length<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.a.createElement(w)),v.a.createElement(_,{title:"Use Array",id:"Demoarray",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Timeline <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> timeline <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token string">\'hello\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'world\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span>\n    dotColor<span class="token punctuation">:</span> <span class="token string">\'#5197FF\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'red\'</span><span class="token punctuation">,</span>\n    lineColor<span class="token punctuation">:</span> <span class="token string">\'#E70000\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'color\'</span><span class="token punctuation">,</span>\n    color<span class="token punctuation">:</span> <span class="token string">\'#E70000\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span> <span class="token attr-name">timeline</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>timeline<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.a.createElement(C)),v.a.createElement(_,{title:"Dynamic Size",id:"Demodynamic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Timeline<span class="token punctuation">,</span> NumberInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> timeline <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'online\'</span><span class="token punctuation">,</span>\n    color<span class="token punctuation">:</span> <span class="token string">\'#00b90e\'</span><span class="token punctuation">,</span>\n    percent<span class="token punctuation">:</span> <span class="token number">0.3</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'unknown\'</span><span class="token punctuation">,</span>\n    percent<span class="token punctuation">:</span> <span class="token number">0.2</span><span class="token punctuation">,</span>\n    showDot<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    showLabel<span class="token punctuation">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'offline\'</span><span class="token punctuation">,</span>\n    color<span class="token punctuation">:</span> <span class="token string">\'#E70000\'</span><span class="token punctuation">,</span>\n    percent<span class="token punctuation">:</span> <span class="token number">0.5</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    size<span class="token punctuation">:</span> <span class="token number">500</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>size<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      size<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> size <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NumberInput</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>size<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token attr-name">showStepper</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline</span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>size<span class="token punctuation">}</span></span> <span class="token attr-name">timeline</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>timeline<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.a.createElement(I)),v.a.createElement(D,{html:'<h2 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h2>\n<h3 class="anchor-heading"><a href="#timeline">¶</a><a href="javascript:void(0)" id="timeline" class="anchor-point"></a>Timeline</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternative</th>\n<th>Optional</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>horizontal or vertical</td>\n<td>string</td>\n<td><code>\'horizontal\'</code></td>\n<td><code>\'horizontal\' | \'vertical\'</code></td>\n<td>yes</td>\n</tr>\n<tr>\n<td>size</td>\n<td>size</td>\n<td>number</td>\n<td></td>\n<td></td>\n<td>yes</td>\n</tr>\n<tr>\n<td>timeline</td>\n<td>pass an array as data</td>\n<td>Array</td>\n<td></td>\n<td>yes</td>\n<td>yes</td>\n</tr>\n<tr>\n<td>className</td>\n<td>custom className</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n<td>yes</td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>custom className prefix</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n<td></td>\n<td>yes</td>\n</tr>\n<tr>\n<td>style</td>\n<td>custom style</td>\n<td>object</td>\n<td></td>\n<td></td>\n<td>yes</td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#timeline-item">¶</a><a href="javascript:void(0)" id="timeline-item" class="anchor-point"></a>Timeline Item</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternative</th>\n<th>Optional</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>label</td>\n<td>label</td>\n<td>node</td>\n<td></td>\n<td></td>\n<td>yes</td>\n</tr>\n<tr>\n<td>tip</td>\n<td>hover pop content</td>\n<td>node</td>\n<td></td>\n<td></td>\n<td>yes</td>\n</tr>\n<tr>\n<td>color</td>\n<td>color, higher priority than \n<code>lineColor</code>\n and \n<code>dotColor</code></td>\n<td>string</td>\n<td></td>\n<td></td>\n<td>yes</td>\n</tr>\n<tr>\n<td>lineColor</td>\n<td>line color</td>\n<td>string</td>\n<td><code>#999</code></td>\n<td></td>\n<td>yes</td>\n</tr>\n<tr>\n<td>dotColor</td>\n<td>dot color</td>\n<td>string</td>\n<td><code>#00B90E</code></td>\n<td></td>\n<td>yes</td>\n</tr>\n<tr>\n<td>type</td>\n<td>horizontal or vertical</td>\n<td>string</td>\n<td><code>\'horizontal\'</code></td>\n<td><code>\'horizontal\' | \'vertical\'</code></td>\n<td>yes</td>\n</tr>\n<tr>\n<td>showLabel</td>\n<td>should display the label</td>\n<td>boolean</td>\n<td><code>true</code></td>\n<td><code>true | false</code></td>\n<td>yes</td>\n</tr>\n<tr>\n<td>showDot</td>\n<td>should display the dot</td>\n<td>boolean</td>\n<td><code>true</code></td>\n<td><code>true | false</code></td>\n<td>yes</td>\n</tr>\n<tr>\n<td>size</td>\n<td>size</td>\n<td>number</td>\n<td></td>\n<td></td>\n<td>yes</td>\n</tr>\n<tr>\n<td>className</td>\n<td>custom className</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n<td></td>\n<td>yes</td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>custom className prefix</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n<td></td>\n<td>yes</td>\n</tr>\n<tr>\n<td>style</td>\n<td>custom style</td>\n<td>object</td>\n<td></td>\n<td></td>\n<td>yes</td>\n</tr>\n</tbody>\n</table>\n<h3 class="anchor-heading"><a href="#timeline-array">¶</a><a href="javascript:void(0)" id="timeline-array" class="anchor-point"></a>Timeline Array</h3>\n<p>Support all properties of <code>Timeline Item</code>.</p>\n<table class="table">\n<thead>\n<tr>\n<th>Extra Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Optional</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>id</td>\n<td>default \n<code>key</code>\n, or the array index will be used as \n<code>key</code></td>\n<td>string</td>\n<td>yes</td>\n</tr>\n<tr>\n<td>percent</td>\n<td>percent of total size when using dynamic size (0 &#x3C;= percent &#x3C;= 1)</td>\n<td>number</td>\n<td>yes</td>\n</tr>\n</tbody>\n</table>'}))}}]),t}(f.Component)}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{932:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return M}));var t=s(839),p=s.n(t),e=s(840),o=s.n(e),c=s(519),l=s.n(c),u=s(841),k=s.n(u),i=s(842),r=s.n(i),d=s(843),g=s.n(d),m=s(844),h=s.n(m),f=s(845),b=s.n(f),y=s(0),T=s.n(y),v=s(211),E=s(147);function C(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var s,t=g()(n);if(a){var p=g()(this).constructor;s=Reflect.construct(t,arguments,p)}else s=t.apply(this,arguments);return r()(this,s)}}var w=function(){return T.a.createElement("div",null,T.a.createElement(E.Tag,null,"标签内容"),T.a.createElement(E.Tag,null,T.a.createElement("a",{href:"#"},"链接")))},z=function(){return T.a.createElement("div",null,T.a.createElement(E.Tag,{theme:"grey"},"灰色"),T.a.createElement(E.Tag,{theme:"red"},"红色"),T.a.createElement(E.Tag,{theme:"green"},"绿色"),T.a.createElement(E.Tag,{theme:"yellow"},"黄色"),T.a.createElement(E.Tag,{theme:"blue"},"蓝色"),T.a.createElement(E.Tag,{theme:"grey",outline:!0},"灰色"),T.a.createElement(E.Tag,{theme:"red",outline:!0},"红色"),T.a.createElement(E.Tag,{theme:"green",outline:!0},"绿色"),T.a.createElement(E.Tag,{theme:"yellow",outline:!0},"黄色"),T.a.createElement(E.Tag,{theme:"blue",outline:!0},"蓝色"))},N=function(){return T.a.createElement("div",null,T.a.createElement(E.Tag,{style:{borderColor:"#9370db",backgroundColor:"#9370db"}},"#9370db"),T.a.createElement(E.Tag,{style:{borderColor:"#9370db",color:"#9370db"},outline:!0},"#9370db"),T.a.createElement(E.Tag,{style:{borderColor:"#87d068",backgroundColor:"#cfefdf",color:"#00a854"}},"自定义色彩"),T.a.createElement(E.Tag,{style:{borderColor:"#778899",backgroundColor:"#778899"},rounded:!1},"非圆角"),T.a.createElement(E.Tag,{style:{borderColor:"#48d1cc",backgroundColor:"#48d1cc",fontSize:14}},"大标签"))},_=function(){return T.a.createElement("div",null,T.a.createElement(E.Tag,{closable:!0,onClose:function(n){E.Notify.success("Close tag")},outline:!0},"自定义色彩"),T.a.createElement(E.Tag,{closable:!0,onClose:function(n){E.Notify.success("Close tag2")}},"非圆角"),T.a.createElement(E.Tag,{theme:"grey",closable:!0,closeButtonStyle:{color:"#969799"}},"自定义关闭按钮颜色"))};function S(n){return T.a.createElement(n.tag,b()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function D(n){return T.a.createElement(S,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function R(n){return T.a.createElement(S,{tag:"style",html:n.style})}var j=function(n){k()(s,n);var a=C(s);function s(){var n;p()(this,s);for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return n=a.call.apply(a,[this].concat(e)),h()(l()(n),"state",{showCode:!1}),h()(l()(n),"toggle",(function(){n.setState({showCode:!n.state.showCode})})),n}return o()(s,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return T.a.createElement("div",{className:"zandoc-react-demo"},T.a.createElement("div",{className:"zandoc-react-demo__preview"},p),T.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},T.a.createElement("div",{className:"zandoc-react-demo__title"},T.a.createElement("p",null,s||"")),T.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&T.a.createElement("pre",{className:"zandoc-react-demo__code"},T.a.createElement(S,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),s}(y.Component),M=function(n){k()(s,n);var a=C(s);function s(){return p()(this,s),a.apply(this,arguments)}return o()(s,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(v.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return T.a.createElement("div",{className:"zandoc-react-container",key:null},T.a.createElement(R,{style:".zent-tag{\n\tmargin: 0 10px 5px 0;\n}"}),T.a.createElement(D,{html:'<h2 class="anchor-heading"><a href="#tag-biao-qian">¶</a><a href="javascript:void(0)" id="tag-biao-qian" class="anchor-point"></a>Tag 标签</h2>\n<p>标签用于进行标记和分类。</p>\n<h3 class="anchor-heading"><a href="#shi-yong-zhi-nan">¶</a><a href="javascript:void(0)" id="shi-yong-zhi-nan" class="anchor-point"></a>使用指南</h3>\n<ul>\n<li>用于添加特殊标记或者分类记号。</li>\n<li>可添加多个标签。</li>\n<li>标签内字数建议不超过四个字。</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),T.a.createElement(j,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Tag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span><span class="token punctuation">></span></span>标签内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>链接<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},T.a.createElement(w)),T.a.createElement(j,{title:"两种风格和五种预定样式：`red`，`green`，`yellow`，`blue`，`grey`",id:"Demostyle",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Tag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grey<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>灰色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>红色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>绿色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>yellow<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>黄色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>蓝色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grey<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>\n      灰色\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>\n      红色\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>\n      绿色\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>yellow<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>\n      黄色\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>\n      蓝色\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},T.a.createElement(z)),T.a.createElement(j,{title:"支持自定义色彩，非圆角，标签大小",id:"Democustom",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Tag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Tag\n      style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        borderColor<span class="token punctuation">:</span> <span class="token string">\'#9370db\'</span><span class="token punctuation">,</span>\n        backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#9370db\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token operator">></span>\n      #9370db\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Tag\n      style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        borderColor<span class="token punctuation">:</span> <span class="token string">\'#9370db\'</span><span class="token punctuation">,</span>\n        color<span class="token punctuation">:</span> <span class="token string">\'#9370db\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span>\n      outline\n    <span class="token operator">></span>\n      #9370db\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Tag\n      style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        borderColor<span class="token punctuation">:</span> <span class="token string">\'#87d068\'</span><span class="token punctuation">,</span>\n        backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#cfefdf\'</span><span class="token punctuation">,</span>\n        color<span class="token punctuation">:</span> <span class="token string">\'#00a854\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token operator">></span>\n      自定义色彩\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Tag\n      style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        borderColor<span class="token punctuation">:</span> <span class="token string">\'#778899\'</span><span class="token punctuation">,</span>\n        backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#778899\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span>\n      rounded<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span>\n    <span class="token operator">></span>\n      非圆角\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Tag\n      style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        borderColor<span class="token punctuation">:</span> <span class="token string">\'#48d1cc\'</span><span class="token punctuation">,</span>\n        backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#48d1cc\'</span><span class="token punctuation">,</span>\n        fontSize<span class="token punctuation">:</span> <span class="token number">14</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token operator">></span>\n      大标签\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},T.a.createElement(N)),T.a.createElement(j,{title:"关闭标签，支持添加关闭事件",id:"Demoonclose",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Tag<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">closeCallback</span> <span class="token operator">=</span> e <span class="token operator">=></span> <span class="token punctuation">{</span>\n  Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'Close tag\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">closeCallback2</span> <span class="token operator">=</span> e <span class="token operator">=></span> <span class="token punctuation">{</span>\n  Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'Close tag2\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">closable</span> <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>closeCallback<span class="token punctuation">}</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>\n      自定义色彩\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">closable</span> <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>closeCallback2<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      非圆角\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Tag theme<span class="token operator">=</span><span class="token string">"grey"</span> closable closeButtonStyle<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">\'#969799\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>\n      自定义关闭按钮颜色\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},T.a.createElement(_)),T.a.createElement(D,{html:"<h3 class=\"anchor-heading\"><a href=\"#api\">¶</a><a href=\"javascript:void(0)\" id=\"api\" class=\"anchor-point\"></a>API</h3>\n<table class=\"table\">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>theme</td>\n<td>标签的预置颜色</td>\n<td>string</td>\n<td><code>'red'</code></td>\n<td><code>'red'</code>\n \n|\n \n<code>'green'</code>\n \n|\n \n<code>'yellow'</code>\n \n|\n \n<code>'blue'</code>\n \n|\n \n<code>'grey'</code></td>\n</tr>\n<tr>\n<td>outline</td>\n<td>边框有颜色，无底色</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true</code>\n \n|\n \n<code>false</code></td>\n</tr>\n<tr>\n<td>rounded</td>\n<td>是否有圆角</td>\n<td>bool</td>\n<td><code>true</code></td>\n<td><code>true</code>\n \n|\n \n<code>false</code></td>\n</tr>\n<tr>\n<td>closable</td>\n<td>是否可以关闭</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true</code>\n \n|\n \n<code>false</code></td>\n</tr>\n<tr>\n<td>visible</td>\n<td>是否显示</td>\n<td>bool</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>关闭时的回调</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td></td>\n</tr>\n<tr>\n<td>closeButtonStyle</td>\n<td>关闭按钮样式</td>\n<td>React.CSSProperties</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>自定义样式</td>\n<td>React.CSSProperties</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<blockquote>\n<p>所有参数都是可选，搭配 <code>visible</code> 和 <code>onClose</code> 可以实现关闭效果</p>\n</blockquote>"}))}}]),s}(y.Component)}}]);
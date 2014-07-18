/**
 * Code Syntax Highlight Generator
 * Modified by ajblk
 * Date: 18 July, 2014
 * Learn More at: http://codeworkout.blogspot.com/2014/07/online-generator-tool-for-code-syntax_18.html
*/

/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
var XRegExp;if(XRegExp)throw Error("can't load XRegExp twice in the same frame");(function(){function e(e,n){if(!XRegExp.isRegExp(e))throw TypeError("type RegExp expected");var r=e._xregexp;e=XRegExp(e.source,t(e)+(n||""));if(r)e._xregexp={source:r.source,captureNames:r.captureNames?r.captureNames.slice(0):null};return e}function t(e){return(e.global?"g":"")+(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.extended?"x":"")+(e.sticky?"y":"")}function n(e,t,n,r){var i=a.length,s,o,f;u=true;try{for(;i--;){f=a[i];if(n&f.scope&&(!f.trigger||f.trigger.call(r))){f.pattern.lastIndex=t;if((o=f.pattern.exec(e))&&o.index===t){s={output:f.handler.call(r,o,n),match:o};break}}}}catch(l){throw l}finally{u=false}return s}function r(e,t,n){if(Array.prototype.indexOf)return e.indexOf(t,n);for(n=n||0;n<e.length;n++)if(e[n]===t)return n;return-1}XRegExp=function(t,r){var i=[],o=XRegExp.OUTSIDE_CLASS,a=0,l,c;if(XRegExp.isRegExp(t)){if(r!==undefined)throw TypeError("can't supply flags when constructing one RegExp from another");return e(t)}if(u)throw Error("can't call the XRegExp constructor within token definition functions");r=r||"";for(l={hasNamedCapture:false,captureNames:[],hasFlag:function(e){return r.indexOf(e)>-1},setFlag:function(e){r+=e}};a<t.length;)if(c=n(t,a,o,l)){i.push(c.output);a+=c.match[0].length||1}else if(c=f.exec.call(d[o],t.slice(a))){i.push(c[0]);a+=c[0].length}else{c=t.charAt(a);if(c==="[")o=XRegExp.INSIDE_CLASS;else if(c==="]")o=XRegExp.OUTSIDE_CLASS;i.push(c);a++}i=RegExp(i.join(""),f.replace.call(r,s,""));i._xregexp={source:t,captureNames:l.hasNamedCapture?l.captureNames:null};return i};XRegExp.version="1.5.0";XRegExp.INSIDE_CLASS=1;XRegExp.OUTSIDE_CLASS=2;var i=/\$(?:(\d\d?|[$&`'])|{([$\w]+)})/g,s=/[^gimy]+|([\s\S])(?=[\s\S]*\1)/g,o=/^(?:[?*+]|{\d+(?:,\d*)?})\??/,u=false,a=[],f={exec:RegExp.prototype.exec,test:RegExp.prototype.test,match:String.prototype.match,replace:String.prototype.replace,split:String.prototype.split},l=f.exec.call(/()??/,"")[1]===undefined,c=function(){var e=/^/g;f.test.call(e,"");return!e.lastIndex}(),h=function(){var e=/x/g;f.replace.call("x",e,"");return!e.lastIndex}(),p=RegExp.prototype.sticky!==undefined,d={};d[XRegExp.INSIDE_CLASS]=/^(?:\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S]))/;d[XRegExp.OUTSIDE_CLASS]=/^(?:\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S])|\(\?[:=!]|[?*+]\?|{\d+(?:,\d*)?}\??)/;XRegExp.addToken=function(t,n,r,i){a.push({pattern:e(t,"g"+(p?"y":"")),handler:n,scope:r||XRegExp.OUTSIDE_CLASS,trigger:i||null})};XRegExp.cache=function(e,t){var n=e+"/"+(t||"");return XRegExp.cache[n]||(XRegExp.cache[n]=XRegExp(e,t))};XRegExp.copyAsGlobal=function(t){return e(t,"g")};XRegExp.escape=function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")};XRegExp.execAt=function(t,n,r,i){n=e(n,"g"+(i&&p?"y":""));n.lastIndex=r=r||0;t=n.exec(t);return i?t&&t.index===r?t:null:t};XRegExp.freezeTokens=function(){XRegExp.addToken=function(){throw Error("can't run addToken after freezeTokens")}};XRegExp.isRegExp=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"};XRegExp.iterate=function(t,n,r,i){for(var s=e(n,"g"),o=-1,u;u=s.exec(t);){r.call(i,u,++o,t,s);s.lastIndex===u.index&&s.lastIndex++}if(n.global)n.lastIndex=0};XRegExp.matchChain=function(t,n){return function r(t,i){var s=n[i].regex?n[i]:{regex:n[i]},o=e(s.regex,"g"),u=[],a;for(a=0;a<t.length;a++)XRegExp.iterate(t[a],o,function(e){u.push(s.backref?e[s.backref]||"":e[0])});return i===n.length-1||!u.length?u:r(u,i+1)}([t],0)};RegExp.prototype.apply=function(e,t){return this.exec(t[0])};RegExp.prototype.call=function(e,t){return this.exec(t)};RegExp.prototype.exec=function(e){var n=f.exec.apply(this,arguments),i;if(n){if(!l&&n.length>1&&r(n,"")>-1){i=RegExp(this.source,f.replace.call(t(this),"g",""));f.replace.call(e.slice(n.index),i,function(){for(var e=1;e<arguments.length-2;e++)if(arguments[e]===undefined)n[e]=undefined})}if(this._xregexp&&this._xregexp.captureNames)for(var s=1;s<n.length;s++)if(i=this._xregexp.captureNames[s-1])n[i]=n[s];!c&&this.global&&!n[0].length&&this.lastIndex>n.index&&this.lastIndex--}return n};if(!c)RegExp.prototype.test=function(e){(e=f.exec.call(this,e))&&this.global&&!e[0].length&&this.lastIndex>e.index&&this.lastIndex--;return!!e};String.prototype.match=function(e){XRegExp.isRegExp(e)||(e=RegExp(e));if(e.global){var t=f.match.apply(this,arguments);e.lastIndex=0;return t}return e.exec(this)};String.prototype.replace=function(e,t){var n=XRegExp.isRegExp(e),s,o;if(n&&typeof t.valueOf()==="string"&&t.indexOf("${")===-1&&h)return f.replace.apply(this,arguments);if(n){if(e._xregexp)s=e._xregexp.captureNames}else e+="";if(typeof t==="function")o=f.replace.call(this,e,function(){if(s){arguments[0]=new String(arguments[0]);for(var r=0;r<s.length;r++)if(s[r])arguments[0][s[r]]=arguments[r+1]}if(n&&e.global)e.lastIndex=arguments[arguments.length-2]+arguments[0].length;return t.apply(null,arguments)});else{o=this+"";o=f.replace.call(o,e,function(){var e=arguments;return f.replace.call(t,i,function(t,n,i){if(n)switch(n){case"$":return"$";case"&":return e[0];case"`":return e[e.length-1].slice(0,e[e.length-2]);case"'":return e[e.length-1].slice(e[e.length-2]+e[0].length);default:i="";n=+n;if(!n)return t;for(;n>e.length-3;){i=String.prototype.slice.call(n,-1)+i;n=Math.floor(n/10)}return(n?e[n]||"":"$")+i}else{n=+i;if(n<=e.length-3)return e[n];n=s?r(s,i):-1;return n>-1?e[n+1]:t}})})}if(n&&e.global)e.lastIndex=0;return o};String.prototype.split=function(e,t){if(!XRegExp.isRegExp(e))return f.split.apply(this,arguments);var n=this+"",r=[],i=0,s,o;if(t===undefined||+t<0)t=Infinity;else{t=Math.floor(+t);if(!t)return[]}for(e=XRegExp.copyAsGlobal(e);s=e.exec(n);){if(e.lastIndex>i){r.push(n.slice(i,s.index));s.length>1&&s.index<n.length&&Array.prototype.push.apply(r,s.slice(1));o=s[0].length;i=e.lastIndex;if(r.length>=t)break}e.lastIndex===s.index&&e.lastIndex++}if(i===n.length){if(!f.test.call(e,"")||o)r.push("")}else r.push(n.slice(i));return r.length>t?r.slice(0,t):r};XRegExp.addToken(/\(\?#[^)]*\)/,function(e){return f.test.call(o,e.input.slice(e.index+e[0].length))?"":"(?:)"});XRegExp.addToken(/\((?!\?)/,function(){this.captureNames.push(null);return"("});XRegExp.addToken(/\(\?<([$\w]+)>/,function(e){this.captureNames.push(e[1]);this.hasNamedCapture=true;return"("});XRegExp.addToken(/\\k<([\w$]+)>/,function(e){var t=r(this.captureNames,e[1]);return t>-1?"\\"+(t+1)+(isNaN(e.input.charAt(e.index+e[0].length))?"":"(?:)"):e[0]});XRegExp.addToken(/\[\^?]/,function(e){return e[0]==="[]"?"\\b\\B":"[\\s\\S]"});XRegExp.addToken(/^\(\?([imsx]+)\)/,function(e){this.setFlag(e[1]);return""});XRegExp.addToken(/(?:\s+|#.*)+/,function(e){return f.test.call(o,e.input.slice(e.index+e[0].length))?"":"(?:)"},XRegExp.OUTSIDE_CLASS,function(){return this.hasFlag("x")});XRegExp.addToken(/\./,function(){return"[\\s\\S]"},XRegExp.OUTSIDE_CLASS,function(){return this.hasFlag("s")})})();var SyntaxHighlighter=function(){function t(e,t){return e.className.indexOf(t)!=-1}function n(e,n){if(!t(e,n))e.className+=" "+n}function r(e,t){e.className=e.className.replace(t,"")}function s(e){var t=[];for(var n=0;n<e.length;n++)t.push(e[n]);return t}function o(e){return e.split("\n")}function u(e){var t="highlighterMainDiv_";return e.indexOf(t)==0?e:t+e}function a(t){return e.vars.highlighters[u(t)]}function f(e){return document.getElementById(u(e))}function l(t){e.vars.highlighters[u(t.id)]=t}function c(e,t,n){if(e==null)return null;var r=n!=true?e.childNodes:[e.parentNode],i={"#":"id",".":"className"}[t.substr(0,1)]||"nodeName",s,o;s=i!="nodeName"?t.substr(1):t.toUpperCase();if((e[i]||"").indexOf(s)!=-1)return e;for(var u=0;r&&u<r.length&&o==null;u++)o=c(r[u],t,n);return o}function h(e,t){return c(e,t,true)}function p(e,t,n){n=Math.max(n||0,0);for(var r=n;r<e.length;r++)if(e[r]==t)return r;return-1}function d(e){return(e||"")+Math.round(Math.random()*1e6).toString()}function v(e,t){var n={},r;for(r in e)n[r]=e[r];for(r in t)n[r]=t[r];return n}function m(e){var t={"true":true,"false":false}[e];return t==null?e:t}function g(e,t,n,r,i){var s=(screen.width-n)/2,o=(screen.height-r)/2;i+=", left="+s+", top="+o+", width="+n+", height="+r;i=i.replace(/^,/,"");var u=window.open(e,t,i);u.focus();return u}function y(e,t,n,r,i){function s(e,t){e=e||window.event;if(!e.target){e.target=e.srcElement;e.preventDefault=function(){this.returnValue=false}}n.call(r||window,e,t)}if(e.attachEvent){e.attachEvent("on"+t,function(e){s(e,i)})}else{e.addEventListener(t,function(e){s(e,i)},false)}}function b(t){window.alert(e.config.strings.alert+t)}function w(t,n){var r=e.vars.discoveredBrushes,i=null;if(r==null){r={};for(var s in e.brushes){var o=e.brushes[s],u=o.aliases;if(u==null)continue;o.brushName=s.toLowerCase();for(var a=0;a<u.length;a++)r[u[a]]=s}e.vars.discoveredBrushes=r}i=e.brushes[r[t]];if(i==null&&n!=false)b(e.config.strings.noBrush+t);return i}function E(e,t){var n=o(e);for(var r=0;r<n.length;r++)n[r]=t(n[r],r);return n.join("\n")}function S(e){return e.replace(/^[ ]*[\n]+|[\n]*[ ]*$/g,"")}function x(e){var t,n={},r=new XRegExp("^\\[(?<values>(.*?))\\]$"),i=new XRegExp("(?<name>[\\w-]+)"+"\\s*:\\s*"+"(?<value>"+"[\\w-%#]+|"+"\\[.*?\\]|"+'".*?"|'+"'.*?'"+")\\s*;?","g");while((t=i.exec(e))!=null){var s=t.value.replace(/^['"]|['"]$/g,"");if(s!=null&&r.test(s)){var o=r.exec(s);s=o.values.length>0?o.values.split(/\s*,\s*/):[]}n[t.name]=s}return n}function T(t,n){if(t==null||t.length==0||t=="\n")return t;t=t.replace(/</g,"&lt;");t=t.replace(/ {2,}/g,function(t){var n="";for(var r=0;r<t.length-1;r++)n+=e.config.space;return n+" "});if(n!=null)t=E(t,function(e){if(e.length==0)return"";var t="";e=e.replace(/^(&nbsp;| )+/,function(e){t=e;return""});if(e.length==0)return t;return t+'<code class="'+n+'">'+e+"</code>"});return t}function N(e,t){var n=e.toString();while(n.length<t)n="0"+n;return n}function C(e,t){var n="";for(var r=0;r<t;r++)n+=" ";return e.replace(/\t/g,n)}function k(e,t){function u(e,t,n){return e.substr(0,t)+i.substr(0,n)+e.substr(t+1,e.length)}var n=o(e),r="	",i="";for(var s=0;s<50;s++)i+="                    ";e=E(e,function(e){if(e.indexOf(r)==-1)return e;var n=0;while((n=e.indexOf(r))!=-1){var i=t-n%t;e=u(e,n,i)}return e});return e}function L(t){var n=/<br\s*\/?>|&lt;br\s*\/?&gt;/gi;if(e.config.bloggerMode==true)t=t.replace(n,"\n");if(e.config.stripBrs==true)t=t.replace(n,"");return t}function A(e){return e.replace(/^\s+|\s+$/g,"")}function O(e){var t=o(L(e)),n=new Array,r=/^\s*/,i=1e3;for(var s=0;s<t.length&&i>0;s++){var u=t[s];if(A(u).length==0)continue;var a=r.exec(u);if(a==null)return e;i=Math.min(a[0].length,i)}if(i>0)for(var s=0;s<t.length;s++)t[s]=t[s].substr(i);return t.join("\n")}function M(e,t){if(e.index<t.index)return-1;else if(e.index>t.index)return 1;else{if(e.length<t.length)return-1;else if(e.length>t.length)return 1}return 0}function _(t,n){function r(e,t){return e[0]}var i=0,s=null,o=[],u=n.func?n.func:r;while((s=n.regex.exec(t))!=null){var a=u(s,n);if(typeof a=="string")a=[new e.Match(a,s.index,n.css)];o=o.concat(a)}return o}function D(t){var n=/(.*)((&gt;|&lt;).*)/;return t.replace(e.regexLib.url,function(e){var t="",r=null;if(r=n.exec(e)){e=r[1];t=r[2]}return'<a href="'+e+'">'+e+"</a>"+t})}function P(){var e=document.getElementsByTagName("script"),t=[];for(var n=0;n<e.length;n++)if(e[n].type=="syntaxhighlighter")t.push(e[n]);return t}function H(e){var t="<![CDATA[",n="]]>",r=A(e),i=false,s=t.length,o=n.length;if(r.indexOf(t)==0){r=r.substring(s);i=true}var u=r.length;if(r.indexOf(n)==u-o){r=r.substring(0,u-o);i=true}return i?r:e}function B(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function j(e){return e.replace(/&/g,"&amp;")}function F(e,t){var i=e.target,s=this.highlighter.params.highlighterMainDivId+"_"+t,o=document.getElementById(s),u=document.getElementById(this.highlighter.params.containerId+"_"+t),f=document.createElement("textarea"),l;if(!u||!o)return;l=a(o.id);n(o,"source");var c=u.childNodes,h=[];for(var p=0;p<c.length;p++)h.push(c[p].innerText||c[p].textContent);h=h.join("\r");f.appendChild(document.createTextNode(h));u.appendChild(f);f.focus();f.select();y(f,"blur",function(e,t){f.parentNode.removeChild(f);r(o,"source")},undefined,t)}if(typeof require!="undefined"&&typeof XRegExp=="undefined"){XRegExp=require("XRegExp").XRegExp}var e={defaults:{"class-name":"","first-line":1,"pad-line-numbers":false,highlight:null,title:null,"smart-tabs":true,"tab-size":4,gutter:true,toolbar:true,"quick-code":true,collapse:false,"auto-links":true,light:false,"html-script":false},config:{space:"&nbsp;",useScriptTags:false,bloggerMode:false,stripBrs:false,tagName:"textarea",strings:{expandSource:"expand source",help:"?",alert:"SyntaxHighlighter\n\n",noBrush:"Can't find brush for: ",brushNotHtmlScript:"Brush wasn't configured for html-script option: ",aboutDialog:'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>About SyntaxHighlighter</title></head><body style="font-family:Geneva,Arial,Helvetica,sans-serif;background-color:#fff;color:#000;font-size:1em;text-align:center;"><div style="text-align:center;margin-top:1.5em;"><div style="font-size:xx-large;">SyntaxHighlighter</div><div style="font-size:.75em;margin-bottom:3em;"><div>version 3.0.83 (July 02 2010)</div><div><a href="http://alexgorbatchev.com/SyntaxHighlighter" target="_blank" style="color:#005896">http://alexgorbatchev.com/SyntaxHighlighter</a></div><div>JavaScript code syntax highlighter.</div><div>Copyright 2004-2010 Alex Gorbatchev.</div></div>	<div><a href="http://ajblk.github.io/SyntaxHighlightGenerator-v3.0/OnlineGenerator.html" target="_blank" >Online Syntax Highlight Generator</a><br> for faster and better styled code in your website<br><a href="http://codeworkout.blogspot.com/2014/07/online-generator-tool-for-code-syntax_18.html" target="_blank"  style="color:#005896">Demo on its Usage</a></div></div></body></html>'}},vars:{discoveredBrushes:null,highlighters:{}},brushes:{},regexLib:{multiLineCComments:/\/\*[\s\S]*?\*\//gm,singleLineCComments:/\/\/.*$/gm,singleLinePerlComments:/#.*$/gm,doubleQuotedString:/"([^\\"\n]|\\.)*"/g,singleQuotedString:/'([^\\'\n]|\\.)*'/g,multiLineDoubleQuotedString:new XRegExp('"([^\\\\"]|\\\\.)*"',"gs"),multiLineSingleQuotedString:new XRegExp("'([^\\\\']|\\\\.)*'","gs"),xmlComments:/(&lt;|<)!--[\s\S]*?--(&gt;|>)/gm,url:/\w+:\/\/[\w-.\/?%&=:@;]*/g,phpScriptTags:{left:/(&lt;|<)\?=?/g,right:/\?(&gt;|>)/g},aspScriptTags:{left:/(&lt;|<)%=?/g,right:/%(&gt;|>)/g},scriptScriptTags:{left:/(&lt;|<)\s*script.*?(&gt;|>)/gi,right:/(&lt;|<)\/\s*script\s*(&gt;|>)/gi}},toolbar:{getHtml:function(t){function s(t,n){return e.toolbar.getButtonHtml(t,n,e.config.strings[n])}var n='<div id="'+t.params.toolbarContainerId+"_"+t.id+'" class="toolbar">',r=e.toolbar.items,i=r.list;for(var o=0;o<i.length;o++)n+=(r[i[o]].getHtml||s)(t,i[o]);n+="</div>";return n},getButtonHtml:function(e,t,n){return'<span><a href="#" class="toolbar_item'+" command_"+t+" "+t+'">'+n+"</a></span>"},handler:function(t,n){function s(e){var t=new RegExp(e+"_(\\w+)"),n=t.exec(i);return n?n[1]:null}var r=t.target,i=r.className||"";var o=this.highlighter.params.highlighterMainDivId+"_"+n,u=s("command");if(highlighter&&u)e.toolbar.items[u].execute(highlighter);t.preventDefault()},items:{list:["expandSource","help"],expandSource:{getHtml:function(t){if(t.getParam("collapse")!=true)return"";var n=t.getParam("title");return e.toolbar.getButtonHtml(t,"expandSource",n?n:e.config.strings.expandSource)},execute:function(e){var t=f(e.id);r(t,"collapsed")}},help:{execute:function(t){var n=g("","_blank",500,350,"scrollbars=0"),r=n.document;r.write(e.config.strings.aboutDialog);r.close();n.focus()}}}},findElements:function(t,n){var r=n?[n]:s(document.getElementsByTagName(e.config.tagName)),i=e.config,o=[];if(i.useScriptTags)r=r.concat(P());if(r.length===0)return o;for(var u=0;u<r.length;u++){var a={target:r[u],params:v(t,x(r[u].className))};if(a.params["brush"]==null)continue;o.push(a)}return o},highlight:function(t){var n=null,r=e.config,s="";var o=document.getElementById(t.codeInputTextarea);for(i=0;i<o.attributes.length;i++){if(o.attributes[i].nodeName==t.custSettingsVar){s=o.attributes[i].value;break}}var u=o,a=v(t,x(s)||{}),f=a.brush,l;if(f==null)return;if(a["html-script"]=="true"||e.defaults["html-script"]==true){n=new e.HtmlScript(f);f="htmlscript"}else{var c=w(f);if(c)n=new c;else return}l=u.value;if(r.useScriptTags)l=H(l);if((u.title||"")!="")a.title=u.title;a["brush"]=f;n.init(a);var h=document.createElement("pre"),p=document.getElementById(t.htmlOutputDivId),d=document.getElementById(t.previewDivId),m=n.getDiv(l).innerHTML;p.innerHTML=B(m);d.innerHTML=m;h.innerHTML=j(B(n.formattedCode));p.innerHTML+="<br/><br/>"+'&lt;pre id="presourcecode_'+n.id+'" class="displaysourcecode" &gt;'+h.outerHTML+"&lt;/pre&gt;"},all:function(t){var n=typeof t.presourcecode!=="undefined"?t.presourcecode:"presourcecode",r=typeof t.containerId!=="undefined"?t.containerId:"container",i=typeof t.toolbarContainerId!=="undefined"?t.toolbarContainerId:"toolbarContainer",s=typeof t.codeContainerId!=="undefined"?t.codeContainerId:"codeContainer",o=typeof t.custSettingsVar!=="undefined"?t.custSettingsVar:"settings",u=typeof t.previewDivId!=="undefined"?t.previewDivId:"PreviewSect",a=typeof t.htmlOutputDivId!=="undefined"?t.htmlOutputDivId:"outputhtml",f=typeof t.codeInputTextarea!=="undefined"?t.codeInputTextarea:"highlightcode";var l={presourcecode:n,containerId:r,toolbarContainerId:i,codeContainerId:s,custSettingsVar:o,previewDivId:u,htmlOutputDivId:a,codeInputTextarea:f},c=v(t,l);e.highlight(c)}};e["all"]=e.all;e["highlight"]=e.highlight;e.Match=function(e,t,n){this.value=e;this.index=t;this.length=e.length;this.css=n;this.brushName=null};e.Match.prototype.toString=function(){return this.value};e.HtmlScript=function(t){function f(e,t){for(var n=0;n<e.length;n++)e[n].index+=t}function l(e,t){var i=e.code,s=[],o=r.regexList,u=e.index+e.left.length,a=r.htmlScript,l;for(var c=0;c<o.length;c++){l=_(i,o[c]);f(l,u);s=s.concat(l)}if(a.left!=null&&e.left!=null){l=_(e.left,a.left);f(l,e.index);s=s.concat(l)}if(a.right!=null&&e.right!=null){l=_(e.right,a.right);f(l,e.index+e[0].lastIndexOf(e.right));s=s.concat(l)}for(var h=0;h<s.length;h++)s[h].brushName=n.brushName;return s}var n=w(t),r,i=new e.brushes.Xml,s=null,o=this,u="getDiv getHtml init".split(" ");if(n==null)return;r=new n;for(var a=0;a<u.length;a++)(function(){var e=u[a];o[e]=function(){return i[e].apply(i,arguments)}})();if(r.htmlScript==null){b(e.config.strings.brushNotHtmlScript+t);return}i.regexList.push({regex:r.htmlScript.code,func:l})};e.Highlighter=function(){};e.Highlighter.prototype={getParam:function(e,t){var n=this.params[e];return m(n==null?t:n)},create:function(e){return document.createElement(e)},findMatches:function(e,t){var n=[];if(e!=null)for(var r=0;r<e.length;r++)if(typeof e[r]=="object")n=n.concat(_(t,e[r]));return this.removeNestedMatches(n.sort(M))},removeNestedMatches:function(e){for(var t=0;t<e.length;t++){if(e[t]===null)continue;var n=e[t],r=n.index+n.length;for(var i=t+1;i<e.length&&e[t]!==null;i++){var s=e[i];if(s===null)continue;else if(s.index>r)break;else if(s.index==n.index&&s.length>n.length)e[t]=null;else if(s.index>=n.index&&s.index<r)e[i]=null}}return e},figureOutLineNumbers:function(e){var t=[],n=parseInt(this.getParam("first-line"));E(e,function(e,r){t.push(r+n)});return t},isLineHighlighted:function(e){var t=this.getParam("highlight",[]);if(typeof t!="object"&&t.push==null)t=[t];return p(t,e.toString())!=-1},getLineHtml:function(e,t,n){var r=["line","number"+t,"index"+e,"alt"+(t%2==0?1:2).toString()];if(this.isLineHighlighted(t))r.push("highlighted");if(t==0)r.push("break");return'<div class="'+r.join(" ")+'">'+n+"</div>"},getLineNumbersHtml:function(t,n){var r="",i=o(t).length,s=parseInt(this.getParam("first-line")),u=this.getParam("pad-line-numbers");if(u==true)u=(s+i-1).toString().length;else if(isNaN(u)==true)u=0;for(var a=0;a<i;a++){var f=n?n[a]:s+a,t=f==0?e.config.space:N(f,u);r+=this.getLineHtml(a,f,t)}return r},getCodeLinesHtml:function(t,n){t=A(t);var r=o(t),i=this.getParam("pad-line-numbers"),s=parseInt(this.getParam("first-line")),t="",u=this.getParam("brush");for(var a=0;a<r.length;a++){var f=r[a],l=/^(&nbsp;|\s)+/.exec(f),c=null,h=n?n[a]:s+a;if(l!=null){c=l[0].toString();f=f.substr(c.length);c=c.replace(" ",e.config.space)}f=A(f);if(f.length==0)f=e.config.space;t+=this.getLineHtml(a,h,(c!=null?'<code class="'+u+' spaces">'+c+"</code>":"")+f)}return t},getTitleHtml:function(e){return e?"<caption>"+e+"</caption>":""},getMatchesHtml:function(e,t){function s(e){var t=e?e.brushName||i:i;return t?t+" ":""}var n=0,r="",i=this.getParam("brush","");for(var o=0;o<t.length;o++){var u=t[o],a;if(u===null||u.length===0)continue;a=s(u);r+=T(e.substr(n,u.index-n),a+"plain")+T(u.value,a+u.css);n=u.index+u.length+(u.offset||0)}r+=T(e.substr(n),s()+"plain");return r},getHtml:function(t){var n="",r=["syntaxhighlighter"],i,s,o;if(this.getParam("light")==true)this.params.toolbar=this.params.gutter=false;className="syntaxhighlighter";if(this.getParam("collapse")==true)r.push("collapsed");if((gutter=this.getParam("gutter"))==false)r.push("nogutter");r.push(this.getParam("class-name"));r.push(this.getParam("brush"));t=S(t).replace(/\r/g," ");i=this.getParam("tab-size");t=this.getParam("smart-tabs")==true?k(t,i):C(t,i);t=O(t);this.formattedCode=t;if(gutter)o=this.figureOutLineNumbers(t);s=this.findMatches(this.regexList,t);n=this.getMatchesHtml(t,s);n=this.getCodeLinesHtml(n,o);if(this.getParam("auto-links"))n=D(n);if(typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.match(/MSIE/))r.push("ie");n='<div id="'+u(this.id)+'" class="'+r.join(" ")+'">'+(this.getParam("toolbar")?e.toolbar.getHtml(this):"")+'<table border="0" cellpadding="0" cellspacing="0">'+this.getTitleHtml(this.getParam("title"))+"<tbody>"+"<tr>"+(gutter?'<td class="gutter">'+this.getLineNumbersHtml(t)+"</td>":"")+'<td id="'+this.params.codeContainerId+"_"+this.id+'" class="code">'+'<div id="'+this.params.containerId+"_"+this.id+'" class="container">'+n+"</div>"+"</td>"+"</tr>"+"</tbody>"+"</table>"+"</div>";return n},getDiv:function(t){if(t===null)t="";this.code=t;var n=this.create("div");n.innerHTML=this.getHtml(t);if(this.getParam("toolbar")){var r=c(n,"#"+this.params.toolbarContainerId+"_"+this.id);y(r,"click",e.toolbar.handler,undefined,this.id)}if(this.getParam("quick-code")){var r=c(n,"#"+this.params.codeContainerId+"_"+this.id);y(r,"dblclick",F,undefined,this.id)}return n},init:function(t){this.id=d();l(this);this.params=v(e.defaults,t||{});if(this.getParam("light")==true)this.params.toolbar=this.params.gutter=false},getKeywords:function(e){e=e.replace(/^\s+|\s+$/g,"").replace(/\s+/g,"|");return"\\b(?:"+e+")\\b"},forHtmlScript:function(e){this.htmlScript={left:{regex:e.left,css:"script"},right:{regex:e.right,css:"script"},code:new XRegExp("(?<left>"+e.left.source+")"+"(?<code>.*?)"+"(?<right>"+e.right.source+")","sgi")}}};return e}();typeof exports!="undefined"?exports["SyntaxHighlighter"]=SyntaxHighlighter:null
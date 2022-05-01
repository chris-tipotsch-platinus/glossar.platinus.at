"use strict";(self.webpackChunkchris=self.webpackChunkchris||[]).push([[6144],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return f}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=t.createContext({}),c=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},l=function(e){var n=c(e.components);return t.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,s=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=c(r),f=i,h=m["".concat(u,".").concat(f)]||m[f]||d[f]||s;return r?t.createElement(h,o(o({ref:n},l),{},{components:r})):t.createElement(h,o({ref:n},l))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=r.length,o=new Array(s);o[0]=m;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<s;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7101:function(e,n,r){r.r(n),r.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return d}});var t=r(7462),i=r(3366),s=(r(7294),r(3905)),o=["components"],a={id:"IPS",title:"IPS",tags:["Begriffe","IM"]},u="IPS - Intrusion Prevention System",c={unversionedId:"Glossar/I-Glossar/IPS",id:"Glossar/I-Glossar/IPS",title:"IPS",description:"IPS steht f\xfcr Intrusion Prevention System und ist ein wichtiger Bestandteil der Sicherheit in einem Computernetzwerk. Es dient der  Verhinderung von Angriffen durch zu hohen Traffic oder Schadsoftware.  Hierf\xfcr \xfcberwacht ein Algorithmus den Datenverkehr im Netzwerk und  untersucht ihn hinsichtlich Anomalien. Werden Anomalien festgestellt,  wird der entsprechende Datenverkehr blockiert.",source:"@site/docs/10-Glossar/I-Glossar/IPS.md",sourceDirName:"10-Glossar/I-Glossar",slug:"/Glossar/I-Glossar/IPS",permalink:"/docs/Glossar/I-Glossar/IPS",editUrl:"https://github.com/chris-tipotsch-platinus/glossar.platinus.at/docs/10-Glossar/I-Glossar/IPS.md",tags:[{label:"Begriffe",permalink:"/docs/tags/begriffe"},{label:"IM",permalink:"/docs/tags/im"}],version:"current",frontMatter:{id:"IPS",title:"IPS",tags:["Begriffe","IM"]},sidebar:"Sidebar10",previous:{title:"Hosting",permalink:"/docs/Glossar/H-Glossar/Hosting"},next:{title:"IT-Service",permalink:"/docs/Glossar/I-Glossar/IT-Service"}},l={},d=[],m={toc:d};function f(e){var n=e.components,r=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"ips---intrusion-prevention-system"},"IPS - Intrusion Prevention System"),(0,s.kt)("p",null,"IPS steht f\xfcr ",(0,s.kt)("strong",{parentName:"p"},"Intrusion Prevention System")," und ist ein wichtiger Bestandteil der Sicherheit in einem Computernetzwerk. Es dient der  Verhinderung von Angriffen durch zu hohen Traffic oder Schadsoftware.  Hierf\xfcr \xfcberwacht ein Algorithmus den Datenverkehr im Netzwerk und  untersucht ihn hinsichtlich Anomalien. Werden Anomalien festgestellt,  wird der entsprechende Datenverkehr blockiert."),(0,s.kt)("p",null,"Um Angriffe auf das Netzwerk zu identifizieren, arbeiten Intrusion Prevention Systeme mit Datenbanken. Diese sind mit bekannten Mustern sch\xe4dlicher Angriffe auf  Computersysteme gef\xfcllt, sodass diese beim Eindringen in das Netzwerk  erkannt werden. \xdcberwacht wird der Datenverkehr stets beim Ein- und  Ausgang der einzelnen Netzwerk-Komponenten wie Server, Rechner oder  Router. Man spricht bei einem solchen Intrusion Prevention Systeme auch  von einem NIPS, einem ",(0,s.kt)("strong",{parentName:"p"},"Network Based Intrusion Prevention")," System. Hierbei kommt das System also in den Datenleitungen zum Einsatz und nicht etwa  in den einzelnen Komponenten. In Abgrenzung hierzu gibt es noch das ",(0,s.kt)("strong",{parentName:"p"},"Host Based Intrusion Prevention System"),". Dieses System \xfcberwacht den  Datenverkehr in den einzelnen Rechnern eines Netzwerks. Dies hat den  Grund, dass Angriffe auf Netzwerke ihren Weg meist \xfcber Rechner finden. So wird zum Beispiel eine E-Mail mit dem Rechner eines Mitarbeiters im Netzwerk ge\xf6ffnet, die Schadsoftware enth\xe4lt. Von hier aus nimmt sie ihren Weg durch das Netzwerk. Um den Austritt der Schadsoftware aus dem  betroffenen Computer zu verhindern, kommt das HI zum Einsatz."),(0,s.kt)("p",null,"Ein  Intrusion Prevention System wird von Software-Unternehmen angeboten. \xdcblicherweise bieten diese Unternehmen zus\xe4tzlich zu vorgefertigter Software auch eine st\xe4ndige Aktualisierung. Hierdurch wird das Erkennen  g\xe4nzlich neuartiger Angriffe erm\xf6glicht, indem die Datenbank mit neuen  Algorithmen ausgestattet wird. Je aktueller das Intrusion Prevention  System , desto h\xf6her der Schutz."))}f.isMDXComponent=!0}}]);
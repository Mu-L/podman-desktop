"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6453],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>p});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),k=l(r),p=i,d=k["".concat(s,".").concat(p)]||k[p]||b[p]||o;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=k;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},81475:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>b,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var n=r(25773),i=(r(27378),r(35318));const o={sidebar_position:6,title:"Restarting your Minikube cluster",description:"Restarting your local Minikube-powered Kubernetes cluster.",keywords:["podman desktop","podman","containers","migrating","kubernetes","minikube"],tags:["migrating-to-kubernetes","minikube"]},a="Restarting your local Minikube-powered Kubernetes cluster",u={unversionedId:"onboarding/kubernetes/minikube/restarting-your-minikube-cluster",id:"onboarding/kubernetes/minikube/restarting-your-minikube-cluster",title:"Restarting your Minikube cluster",description:"Restarting your local Minikube-powered Kubernetes cluster.",source:"@site/docs/onboarding/kubernetes/minikube/restarting-your-minikube-cluster.md",sourceDirName:"onboarding/kubernetes/minikube",slug:"/onboarding/kubernetes/minikube/restarting-your-minikube-cluster",permalink:"/docs/onboarding/kubernetes/minikube/restarting-your-minikube-cluster",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/onboarding/kubernetes/minikube/restarting-your-minikube-cluster.md",tags:[{label:"migrating-to-kubernetes",permalink:"/docs/tags/migrating-to-kubernetes"},{label:"minikube",permalink:"/docs/tags/minikube"}],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Restarting your Minikube cluster",description:"Restarting your local Minikube-powered Kubernetes cluster.",keywords:["podman desktop","podman","containers","migrating","kubernetes","minikube"],tags:["migrating-to-kubernetes","minikube"]},sidebar:"mySidebar",previous:{title:"Creating a Minikube cluster",permalink:"/docs/onboarding/kubernetes/minikube/creating-a-minikube-cluster"},next:{title:"Deleting your Minikube cluster",permalink:"/docs/onboarding/kubernetes/minikube/deleting-your-minikube-cluster"}},s={},l=[{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4},{value:"Workaround",id:"workaround",level:4}],c={toc:l};function b(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"restarting-your-local-minikube-powered-kubernetes-cluster"},"Restarting your local Minikube-powered Kubernetes cluster"),(0,i.kt)("p",null,"With Podman Desktop, you can restart your local Minikube-powered Kubernetes cluster."),(0,i.kt)("h4",{id:"procedure"},"Procedure"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("icon",{icon:"fa-solid fa-cog",size:"lg"})," Settings > Resources"),"."),(0,i.kt)("li",{parentName:"ol"},"Find the Minikube cluster to restart."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("icon",{icon:"fa-solid fa-repeat",size:"lg"}),".")),(0,i.kt)("h4",{id:"verification"},"Verification"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("strong",{parentName:"li"},"Containers"),"."),(0,i.kt)("li",{parentName:"ol"},"Find the Minikube cluster that restarted."),(0,i.kt)("li",{parentName:"ol"},"The cluster ",(0,i.kt)("strong",{parentName:"li"},"Age")," is consistent with the restart time."),(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("strong",{parentName:"li"},"Pods"),"."),(0,i.kt)("li",{parentName:"ol"},"Find the pods that are running on your Minikube cluster.")),(0,i.kt)("h4",{id:"workaround"},"Workaround"),(0,i.kt)("p",null,"Minikube has no command to restart a cluster.\nTherefore, Podman Desktop stops the Minikube cluster, and starts it again.\nThe Minikube cluster might not restart successfully.\nIn that case:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Consider replacing Minikube with a local Kubernetes cluster that you can restart, such as ",(0,i.kt)("a",{parentName:"li",href:"https://developers.redhat.com/products/openshift-local/"},"OpenShift Local"),"."),(0,i.kt)("li",{parentName:"ul"},"Consider ",(0,i.kt)("a",{parentName:"li",href:"/docs/onboarding/kubernetes/minikube/deleting-your-minikube-cluster"},"deleting your Minikube cluster"),", and ",(0,i.kt)("a",{parentName:"li",href:"/docs/onboarding/kubernetes/minikube/creating-a-minikube-cluster"},"creating a Minikube cluster"),".")))}b.isMDXComponent=!0}}]);
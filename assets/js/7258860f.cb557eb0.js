"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92423],{87064:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=i(24246),s=i(71670);const o={},r="Function: logsContainer()",a={id:"namespaces/containerEngine/functions/logsContainer",title:"Function: logsContainer()",description:"logsContainer(engineId, id, callback): Promise\\",source:"@site/api/namespaces/containerEngine/functions/logsContainer.md",sourceDirName:"namespaces/containerEngine/functions",slug:"/namespaces/containerEngine/functions/logsContainer",permalink:"/api/namespaces/containerEngine/functions/logsContainer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"listVolumes",permalink:"/api/namespaces/containerEngine/functions/listVolumes"},next:{title:"onEvent",permalink:"/api/namespaces/containerEngine/functions/onEvent"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Defined in",id:"defined-in",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"function-logscontainer",children:"Function: logsContainer()"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"logsContainer"}),"(",(0,t.jsx)(n.code,{children:"engineId"}),", ",(0,t.jsx)(n.code,{children:"id"}),", ",(0,t.jsx)(n.code,{children:"callback"}),"): ",(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Get the streamed logs of a container"}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"engineId"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsxs)(n.p,{children:["the id of the engine managing the container, obtained from the result of ",(0,t.jsx)(n.a,{href:"/api/namespaces/containerEngine/functions/listContainers",children:"containerEngine.listContainers"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"id"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsxs)(n.p,{children:["the id of the container on this engine, obtained from the result of ",(0,t.jsx)(n.a,{href:"/api/namespaces/containerEngine/functions/listContainers",children:"containerEngine.listContainers"})," or as the result of ",(0,t.jsx)(n.a,{href:"/api/namespaces/containerEngine/functions/createContainer",children:"containerEngine.createContainer"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"callback"})]}),"\n",(0,t.jsxs)(n.p,{children:["the function called when new logs are emitted or new events happen on the stream. The value of ",(0,t.jsx)(n.code,{children:"name"})," can be either ",(0,t.jsx)(n.code,{children:"data"})," (and ",(0,t.jsx)(n.code,{children:"data"})," contains the logs), or ",(0,t.jsx)(n.code,{children:"end"})," indicating the end of the stream, or ",(0,t.jsx)(n.code,{children:"first-message"})," indicating no data has been emitted yet on the stream."]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,t.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/4e12ff312d9ae1ceaf20dde32e088aae024e7a7e/packages/extension-api/src/extension-api.d.ts#L3502",children:"packages/extension-api/src/extension-api.d.ts:3502"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},71670:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var t=i(27378);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
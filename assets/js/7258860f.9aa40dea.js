"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1603],{65169:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"namespaces/containerEngine/functions/logsContainer","title":"Function: logsContainer()","description":"logsContainer(engineId, id, callback): Promise\\\\","source":"@site/api/namespaces/containerEngine/functions/logsContainer.md","sourceDirName":"namespaces/containerEngine/functions","slug":"/namespaces/containerEngine/functions/logsContainer","permalink":"/api/namespaces/containerEngine/functions/logsContainer","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"listVolumes","permalink":"/api/namespaces/containerEngine/functions/listVolumes"},"next":{"title":"onEvent","permalink":"/api/namespaces/containerEngine/functions/onEvent"}}');var s=i(62540),o=i(43023);const r={},c="Function: logsContainer()",a={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Defined in",id:"defined-in",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"function-logscontainer",children:"Function: logsContainer()"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"logsContainer"}),"(",(0,s.jsx)(n.code,{children:"engineId"}),", ",(0,s.jsx)(n.code,{children:"id"}),", ",(0,s.jsx)(n.code,{children:"callback"}),"): ",(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Get the streamed logs of a container"}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"engineId"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.p,{children:["the id of the engine managing the container, obtained from the result of ",(0,s.jsx)(n.a,{href:"/api/namespaces/containerEngine/functions/listContainers",children:"containerEngine.listContainers"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"id"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.p,{children:["the id of the container on this engine, obtained from the result of ",(0,s.jsx)(n.a,{href:"/api/namespaces/containerEngine/functions/listContainers",children:"containerEngine.listContainers"})," or as the result of ",(0,s.jsx)(n.a,{href:"/api/namespaces/containerEngine/functions/createContainer",children:"containerEngine.createContainer"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"callback"})]}),"\n",(0,s.jsxs)(n.p,{children:["the function called when new logs are emitted or new events happen on the stream. The value of ",(0,s.jsx)(n.code,{children:"name"})," can be either ",(0,s.jsx)(n.code,{children:"data"})," (and ",(0,s.jsx)(n.code,{children:"data"})," contains the logs), or ",(0,s.jsx)(n.code,{children:"end"})," indicating the end of the stream, or ",(0,s.jsx)(n.code,{children:"first-message"})," indicating no data has been emitted yet on the stream."]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,s.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/bbc67238f200d7c9e88581058703b39331feece1/packages/extension-api/src/extension-api.d.ts#L3751",children:"packages/extension-api/src/extension-api.d.ts:3751"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},43023:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var t=i(63696);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31405],{87960:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"@podman-desktop/namespaces/containerEngine/functions/statsContainer","title":"Function: statsContainer()","description":"statsContainer(engineId, id, callback): Promise\\\\","source":"@site/api/@podman-desktop/namespaces/containerEngine/functions/statsContainer.md","sourceDirName":"@podman-desktop/namespaces/containerEngine/functions","slug":"/@podman-desktop/namespaces/containerEngine/functions/statsContainer","permalink":"/api/@podman-desktop/namespaces/containerEngine/functions/statsContainer","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"startPod","permalink":"/api/@podman-desktop/namespaces/containerEngine/functions/startPod"},"next":{"title":"stopContainer","permalink":"/api/@podman-desktop/namespaces/containerEngine/functions/stopContainer"}}');var i=s(62540),a=s(43023);const o={},r="Function: statsContainer()",c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"engineId",id:"engineid",level:3},{value:"id",id:"id",level:3},{value:"callback",id:"callback",level:3},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"function-statscontainer",children:"Function: statsContainer()"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"statsContainer"}),"(",(0,i.jsx)(n.code,{children:"engineId"}),", ",(0,i.jsx)(n.code,{children:"id"}),", ",(0,i.jsx)(n.code,{children:"callback"}),"): ",(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.a,{href:"/api/classes/Disposable",children:(0,i.jsx)(n.code,{children:"Disposable"})}),">"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/c33d8f2c77da42337d88273072a441002733dce5/packages/extension-api/src/extension-api.d.ts#L3795",children:"packages/extension-api/src/extension-api.d.ts:3795"})]}),"\n",(0,i.jsx)(n.p,{children:"Get the streamed stats of a running container."}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(n.h3,{id:"engineid",children:"engineId"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"string"})}),"\n",(0,i.jsxs)(n.p,{children:["the id of the engine managing the container, obtained from the result of ",(0,i.jsx)(n.a,{href:"/api/@podman-desktop/namespaces/containerEngine/functions/listContainers",children:"containerEngine.listContainers"})]}),"\n",(0,i.jsx)(n.h3,{id:"id",children:"id"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"string"})}),"\n",(0,i.jsxs)(n.p,{children:["the id or name of the container on this engine, obtained from the result of ",(0,i.jsx)(n.a,{href:"/api/@podman-desktop/namespaces/containerEngine/functions/listContainers",children:"containerEngine.listContainers"})," or as the result of ",(0,i.jsx)(n.a,{href:"/api/@podman-desktop/namespaces/containerEngine/functions/createContainer",children:"containerEngine.createContainer"})]}),"\n",(0,i.jsx)(n.h3,{id:"callback",children:"callback"}),"\n",(0,i.jsxs)(n.p,{children:["(",(0,i.jsx)(n.code,{children:"stats"}),") => ",(0,i.jsx)(n.code,{children:"void"})]}),"\n",(0,i.jsx)(n.p,{children:"the function called when container stats info are emitted."}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.a,{href:"/api/classes/Disposable",children:(0,i.jsx)(n.code,{children:"Disposable"})}),">"]}),"\n",(0,i.jsxs)(n.p,{children:["A Promise resolving a ",(0,i.jsx)(n.a,{href:"/api/classes/Disposable",children:"Disposable"})," that unregister the callback when called."]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"Here is a usage example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const disposable = await statsContainer('engineId', 'containerId', (stats: ContainerStatsInfo): void => {\n console.log('CPU Usage', stats.cpu_stats.cpu_usage.total_usage);\n});\n\n// When no longer needed\ndisposable.dispose();\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var t=s(63696);const i={},a=t.createContext(i);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);
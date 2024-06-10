"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21181],{65494:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=s(24246),i=s(71670);const r={},c="Interface: ExtensionContext",o={id:"interfaces/ExtensionContext",title:"Interface: ExtensionContext",description:"Properties",source:"@site/api/interfaces/ExtensionContext.md",sourceDirName:"interfaces",slug:"/interfaces/ExtensionContext",permalink:"/api/interfaces/ExtensionContext",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"Extension",permalink:"/api/interfaces/Extension"},next:{title:"FileSystemWatcher",permalink:"/api/interfaces/FileSystemWatcher"}},a={},d=[{value:"Properties",id:"properties",level:2},{value:"extensionUri",id:"extensionuri",level:3},{value:"Source",id:"source",level:4},{value:"secrets",id:"secrets",level:3},{value:"Source",id:"source-1",level:4},{value:"storagePath",id:"storagepath",level:3},{value:"Source",id:"source-2",level:4},{value:"subscriptions",id:"subscriptions",level:3},{value:"Source",id:"source-3",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"interface-extensioncontext",children:"Interface: ExtensionContext"}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"extensionuri",children:"extensionUri"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"readonly"})," ",(0,t.jsx)(n.strong,{children:"extensionUri"}),": ",(0,t.jsx)(n.a,{href:"/api/classes/Uri",children:(0,t.jsx)(n.code,{children:"Uri"})})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The uri of the directory containing the extension."}),"\n",(0,t.jsx)(n.h4,{id:"source",children:"Source"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/c822920e1fc5cc6f79c6f64ac8f21016f6a785bd/packages/extension-api/src/extension-api.d.ts#L165",children:"packages/extension-api/src/extension-api.d.ts:165"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"secrets",children:"secrets"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"readonly"})," ",(0,t.jsx)(n.strong,{children:"secrets"}),": ",(0,t.jsx)(n.a,{href:"/api/interfaces/SecretStorage",children:(0,t.jsx)(n.code,{children:"SecretStorage"})})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"A storage utility for secrets. Secrets are persisted across reloads."}),"\n",(0,t.jsx)(n.h4,{id:"source-1",children:"Source"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/c822920e1fc5cc6f79c6f64ac8f21016f6a785bd/packages/extension-api/src/extension-api.d.ts#L170",children:"packages/extension-api/src/extension-api.d.ts:170"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"storagepath",children:"storagePath"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"readonly"})," ",(0,t.jsx)(n.strong,{children:"storagePath"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"An absolute file path in which the extension can store state.\nThe directory might not exist on disk and creation is\nup to the extension."}),"\n",(0,t.jsx)(n.h4,{id:"source-2",children:"Source"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/c822920e1fc5cc6f79c6f64ac8f21016f6a785bd/packages/extension-api/src/extension-api.d.ts#L160",children:"packages/extension-api/src/extension-api.d.ts:160"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"subscriptions",children:"subscriptions"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"readonly"})," ",(0,t.jsx)(n.strong,{children:"subscriptions"}),": ",(0,t.jsx)(n.code,{children:"object"}),"[]"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"source-3",children:"Source"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/c822920e1fc5cc6f79c6f64ac8f21016f6a785bd/packages/extension-api/src/extension-api.d.ts#L153",children:"packages/extension-api/src/extension-api.d.ts:153"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>c});var t=s(27378);const i={},r=t.createContext(i);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
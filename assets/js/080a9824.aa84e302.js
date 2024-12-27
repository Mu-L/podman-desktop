"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51023],{75569:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"interfaces/ImageFilesystemLayer","title":"Interface: ImageFilesystemLayer","description":"a filesystem layer of an image as defined by spec","source":"@site/api/interfaces/ImageFilesystemLayer.md","sourceDirName":"interfaces","slug":"/interfaces/ImageFilesystemLayer","permalink":"/api/interfaces/ImageFilesystemLayer","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"ImageFileSymlink","permalink":"/api/interfaces/ImageFileSymlink"},"next":{"title":"ImageFilesystemLayers","permalink":"/api/interfaces/ImageFilesystemLayers"}}');var t=i(62540),a=i(43023);const d={},r="Interface: ImageFilesystemLayer",c={},o=[{value:"Properties",id:"properties",level:2},{value:"createdBy?",id:"createdby",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"files?",id:"files",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"id",id:"id",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"opaqueWhiteouts?",id:"opaquewhiteouts",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"whiteouts?",id:"whiteouts",level:3},{value:"Defined in",id:"defined-in-4",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"interface-imagefilesystemlayer",children:"Interface: ImageFilesystemLayer"})}),"\n",(0,t.jsxs)(n.p,{children:["a filesystem layer of an image as defined by ",(0,t.jsx)(n.a,{href:"https://github.com/opencontainers/image-spec/blob/main/spec.md",children:"spec"})]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"createdby",children:"createdBy?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"createdBy"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"the command which created the layer"}),"\n",(0,t.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/2854c208b85cf7aa709be60a79cba8646145877f/packages/extension-api/src/extension-api.d.ts#L897",children:"packages/extension-api/src/extension-api.d.ts:897"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"files",children:"files?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"files"}),": ",(0,t.jsx)(n.a,{href:"/api/interfaces/ImageFile",children:(0,t.jsx)(n.code,{children:"ImageFile"})}),"[]"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"files indicate the paths of the files added or modified in the layer"}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/2854c208b85cf7aa709be60a79cba8646145877f/packages/extension-api/src/extension-api.d.ts#L901",children:"packages/extension-api/src/extension-api.d.ts:901"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"id",children:"id"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"id"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"unique id of the layer"}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/2854c208b85cf7aa709be60a79cba8646145877f/packages/extension-api/src/extension-api.d.ts#L893",children:"packages/extension-api/src/extension-api.d.ts:893"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"opaquewhiteouts",children:"opaqueWhiteouts?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"opaqueWhiteouts"}),": ",(0,t.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"opaque whiteouts indicate the directories in which the content has to be completely deleted from previous layers."}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/2854c208b85cf7aa709be60a79cba8646145877f/packages/extension-api/src/extension-api.d.ts#L909",children:"packages/extension-api/src/extension-api.d.ts:909"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"whiteouts",children:"whiteouts?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"whiteouts"}),": ",(0,t.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"whiteouts indicate the paths of the files to be deleted from previous layers."}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/2854c208b85cf7aa709be60a79cba8646145877f/packages/extension-api/src/extension-api.d.ts#L905",children:"packages/extension-api/src/extension-api.d.ts:905"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},43023:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>r});var s=i(63696);const t={},a=s.createContext(t);function d(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);
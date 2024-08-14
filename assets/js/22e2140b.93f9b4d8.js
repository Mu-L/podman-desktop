"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24260],{47227:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=r(24246),i=r(71670);const s={},a="Type Alias: ProviderResult<T>",o={id:"type-aliases/ProviderResult",title:"Type Alias: ProviderResult\\<T\\>",description:"ProviderResult\\: T \\| undefined \\| Promise\\",source:"@site/api/type-aliases/ProviderResult.md",sourceDirName:"type-aliases",slug:"/type-aliases/ProviderResult",permalink:"/api/type-aliases/ProviderResult",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"ProviderLinks",permalink:"/api/type-aliases/ProviderLinks"},next:{title:"ProviderStatus",permalink:"/api/type-aliases/ProviderStatus"}},d={},c=[{value:"Type Parameters",id:"type-parameters",level:2},{value:"Defined in",id:"defined-in",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"type-alias-providerresultt",children:"Type Alias: ProviderResult<T>"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ProviderResult"}),"<",(0,t.jsx)(n.code,{children:"T"}),">: ",(0,t.jsx)(n.code,{children:"T"})," | ",(0,t.jsx)(n.code,{children:"undefined"})," | ",(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"T"})," | ",(0,t.jsx)(n.code,{children:"undefined"}),">"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["A provider result represents the values a provider, like the ",(0,t.jsx)(n.a,{href:"/api/interfaces/ImageCheckerProvider",children:(0,t.jsx)(n.code,{children:"ImageCheckerProvider"})}),",\nmay return. For once this is the actual result type ",(0,t.jsx)(n.code,{children:"T"}),", like ",(0,t.jsx)(n.code,{children:"ImageChecks"}),", or a Promise that resolves\nto that type ",(0,t.jsx)(n.code,{children:"T"}),". In addition, ",(0,t.jsx)(n.code,{children:"null"})," and ",(0,t.jsx)(n.code,{children:"undefined"})," can be returned - either directly or from a\nPromise."]}),"\n",(0,t.jsxs)(n.p,{children:["The snippets below are all valid implementations of the ",(0,t.jsx)(n.a,{href:"/api/interfaces/ImageCheckerProvider",children:(0,t.jsx)(n.code,{children:"ImageCheckerProvider"})}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"let a: ImageCheckerProvider = {\n check(image: ImageInfo, token?: CancellationToken): ProviderResult<ImageChecks> {\n   return new ImageChecks();\n }\n\nlet b: ImageCheckerProvider = {\n async check(image: ImageInfo, token?: CancellationToken): ProviderResult<ImageChecks> {\n\t\treturn new ImageChecks();\n\t}\n}\n\nlet c: ImageCheckerProvider = {\n check(image: ImageInfo, token?: CancellationToken): ProviderResult<ImageChecks> {\n\t\treturn; // undefined\n\t}\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"T"})]}),"\n",(0,t.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/d28e31e164672204435fd356c0f739a5f0d86c85/packages/extension-api/src/extension-api.d.ts#L276",children:"packages/extension-api/src/extension-api.d.ts:276"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},71670:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>a});var t=r(27378);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
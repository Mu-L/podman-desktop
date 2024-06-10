"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86661],{48168:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var c=n(24246),s=n(71670);const t={},r="Interface: QuickPickItem",o={id:"interfaces/QuickPickItem",title:"Interface: QuickPickItem",description:"Represents an item that can be selected from",source:"@site/api/interfaces/QuickPickItem.md",sourceDirName:"interfaces",slug:"/interfaces/QuickPickItem",permalink:"/api/interfaces/QuickPickItem",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"QuickInputButton",permalink:"/api/interfaces/QuickInputButton"},next:{title:"QuickPickOptions",permalink:"/api/interfaces/QuickPickOptions"}},a={},d=[{value:"Properties",id:"properties",level:2},{value:"alwaysShow?",id:"alwaysshow",level:3},{value:"Source",id:"source",level:4},{value:"buttons?",id:"buttons",level:3},{value:"Source",id:"source-1",level:4},{value:"description?",id:"description",level:3},{value:"Source",id:"source-2",level:4},{value:"detail?",id:"detail",level:3},{value:"Source",id:"source-3",level:4},{value:"kind?",id:"kind",level:3},{value:"Source",id:"source-4",level:4},{value:"label",id:"label",level:3},{value:"Source",id:"source-5",level:4},{value:"picked?",id:"picked",level:3},{value:"See",id:"see",level:4},{value:"Source",id:"source-6",level:4}];function l(e){const i={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.h1,{id:"interface-quickpickitem",children:"Interface: QuickPickItem"}),"\n",(0,c.jsx)(i.p,{children:"Represents an item that can be selected from\na list of items."}),"\n",(0,c.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,c.jsx)(i.h3,{id:"alwaysshow",children:"alwaysShow?"}),"\n",(0,c.jsxs)(i.blockquote,{children:["\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"optional"})," ",(0,c.jsx)(i.strong,{children:"alwaysShow"}),": ",(0,c.jsx)(i.code,{children:"boolean"})]}),"\n"]}),"\n",(0,c.jsx)(i.p,{children:"Always show this item."}),"\n",(0,c.jsxs)(i.p,{children:["Note: this property is ignored when ",(0,c.jsx)(i.a,{href:"/api/interfaces/QuickPickItem#kind",children:"kind"})," is set to ",(0,c.jsx)(i.a,{href:"/api/enumerations/QuickPickItemKind#separator",children:"QuickPickItemKind.Separator"})]}),"\n",(0,c.jsx)(i.h4,{id:"source",children:"Source"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.a,{href:"https://github.com/containers/podman-desktop/blob/c822920e1fc5cc6f79c6f64ac8f21016f6a785bd/packages/extension-api/src/extension-api.d.ts#L1142",children:"packages/extension-api/src/extension-api.d.ts:1142"})}),"\n",(0,c.jsx)(i.hr,{}),"\n",(0,c.jsx)(i.h3,{id:"buttons",children:"buttons?"}),"\n",(0,c.jsxs)(i.blockquote,{children:["\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"optional"})," ",(0,c.jsx)(i.strong,{children:"buttons"}),": readonly ",(0,c.jsx)(i.a,{href:"/api/interfaces/QuickInputButton",children:(0,c.jsx)(i.code,{children:"QuickInputButton"})}),"[]"]}),"\n"]}),"\n",(0,c.jsxs)(i.p,{children:["Optional buttons that will be rendered on this particular item. These buttons will trigger\nan QuickPickItemButtonEvent when clicked. Buttons are only rendered when using a quickpick\ncreated by the window.createQuickPick createQuickPick() API. Buttons are not rendered when using\nthe ",(0,c.jsx)(i.a,{href:"/api/namespaces/window/functions/showQuickPick",children:"showQuickPick()"})," API."]}),"\n",(0,c.jsxs)(i.p,{children:["Note: this property is ignored when ",(0,c.jsx)(i.a,{href:"/api/interfaces/QuickPickItem#kind",children:"kind"})," is set to ",(0,c.jsx)(i.a,{href:"/api/enumerations/QuickPickItemKind#separator",children:"QuickPickItemKind.Separator"})]}),"\n",(0,c.jsx)(i.h4,{id:"source-1",children:"Source"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.a,{href:"https://github.com/containers/podman-desktop/blob/c822920e1fc5cc6f79c6f64ac8f21016f6a785bd/packages/extension-api/src/extension-api.d.ts#L1152",children:"packages/extension-api/src/extension-api.d.ts:1152"})}),"\n",(0,c.jsx)(i.hr,{}),"\n",(0,c.jsx)(i.h3,{id:"description",children:"description?"}),"\n",(0,c.jsxs)(i.blockquote,{children:["\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"optional"})," ",(0,c.jsx)(i.strong,{children:"description"}),": ",(0,c.jsx)(i.code,{children:"string"})]}),"\n"]}),"\n",(0,c.jsxs)(i.p,{children:["A human-readable string which is rendered less prominent in the same line. Supports rendering of\nThemeIcon theme icons via the ",(0,c.jsx)(i.code,{children:"$(<name>)"}),"-syntax."]}),"\n",(0,c.jsxs)(i.p,{children:["Note: this property is ignored when ",(0,c.jsx)(i.a,{href:"/api/interfaces/QuickPickItem#kind",children:"kind"})," is set to ",(0,c.jsx)(i.a,{href:"/api/enumerations/QuickPickItemKind#separator",children:"QuickPickItemKind.Separator"})]}),"\n",(0,c.jsx)(i.h4,{id:"source-2",children:"Source"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.a,{href:"https://github.com/containers/podman-desktop/blob/c822920e1fc5cc6f79c6f64ac8f21016f6a785bd/packages/extension-api/src/extension-api.d.ts#L1114",children:"packages/extension-api/src/extension-api.d.ts:1114"})}),"\n",(0,c.jsx)(i.hr,{}),"\n",(0,c.jsx)(i.h3,{id:"detail",children:"detail?"}),"\n",(0,c.jsxs)(i.blockquote,{children:["\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"optional"})," ",(0,c.jsx)(i.strong,{children:"detail"}),": ",(0,c.jsx)(i.code,{children:"string"})]}),"\n"]}),"\n",(0,c.jsxs)(i.p,{children:["A human-readable string which is rendered less prominent in a separate line. Supports rendering of\nThemeIcon theme icons via the ",(0,c.jsx)(i.code,{children:"$(<name>)"}),"-syntax."]}),"\n",(0,c.jsxs)(i.p,{children:["Note: this property is ignored when ",(0,c.jsx)(i.a,{href:"/api/interfaces/QuickPickItem#kind",children:"kind"})," is set to ",(0,c.jsx)(i.a,{href:"/api/enumerations/QuickPickItemKind#separator",children:"QuickPickItemKind.Separator"})]}),"\n",(0,c.jsx)(i.h4,{id:"source-3",children:"Source"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.a,{href:"https://github.com/containers/podman-desktop/blob/c822920e1fc5cc6f79c6f64ac8f21016f6a785bd/packages/extension-api/src/extension-api.d.ts#L1122",children:"packages/extension-api/src/extension-api.d.ts:1122"})}),"\n",(0,c.jsx)(i.hr,{}),"\n",(0,c.jsx)(i.h3,{id:"kind",children:"kind?"}),"\n",(0,c.jsxs)(i.blockquote,{children:["\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"optional"})," ",(0,c.jsx)(i.strong,{children:"kind"}),": ",(0,c.jsx)(i.a,{href:"/api/enumerations/QuickPickItemKind",children:(0,c.jsx)(i.code,{children:"QuickPickItemKind"})})]}),"\n"]}),"\n",(0,c.jsxs)(i.p,{children:["The kind of QuickPickItem that will determine how this item is rendered in the quick pick. When not specified,\nthe default is ",(0,c.jsx)(i.a,{href:"/api/enumerations/QuickPickItemKind#default",children:"QuickPickItemKind.Default"}),"."]}),"\n",(0,c.jsx)(i.h4,{id:"source-4",children:"Source"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.a,{href:"https://github.com/containers/podman-desktop/blob/c822920e1fc5cc6f79c6f64ac8f21016f6a785bd/packages/extension-api/src/extension-api.d.ts#L1106",children:"packages/extension-api/src/extension-api.d.ts:1106"})}),"\n",(0,c.jsx)(i.hr,{}),"\n",(0,c.jsx)(i.h3,{id:"label",children:"label"}),"\n",(0,c.jsxs)(i.blockquote,{children:["\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.strong,{children:"label"}),": ",(0,c.jsx)(i.code,{children:"string"})]}),"\n"]}),"\n",(0,c.jsxs)(i.p,{children:["A human-readable string which is rendered prominent. Supports rendering of ThemeIcon theme icons via\nthe ",(0,c.jsx)(i.code,{children:"$(<name>)"}),"-syntax."]}),"\n",(0,c.jsx)(i.h4,{id:"source-5",children:"Source"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.a,{href:"https://github.com/containers/podman-desktop/blob/c822920e1fc5cc6f79c6f64ac8f21016f6a785bd/packages/extension-api/src/extension-api.d.ts#L1100",children:"packages/extension-api/src/extension-api.d.ts:1100"})}),"\n",(0,c.jsx)(i.hr,{}),"\n",(0,c.jsx)(i.h3,{id:"picked",children:"picked?"}),"\n",(0,c.jsxs)(i.blockquote,{children:["\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"optional"})," ",(0,c.jsx)(i.strong,{children:"picked"}),": ",(0,c.jsx)(i.code,{children:"boolean"})]}),"\n"]}),"\n",(0,c.jsxs)(i.p,{children:["Optional flag indicating if this item is picked initially. This is only honored when using\nthe ",(0,c.jsx)(i.a,{href:"/api/namespaces/window/functions/showQuickPick",children:"showQuickPick()"})," API. To do the same thing with\nthe window.createQuickPick createQuickPick() API, simply set the QuickPick.selectedItems\nto the items you want picked initially.\n(",(0,c.jsx)(i.em,{children:"Note:"})," This is only honored when the picker allows multiple selections.)"]}),"\n",(0,c.jsx)(i.h4,{id:"see",children:"See"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.a,{href:"/api/interfaces/QuickPickOptions#canpickmany",children:"QuickPickOptions.canPickMany"})}),"\n",(0,c.jsxs)(i.p,{children:["Note: this property is ignored when ",(0,c.jsx)(i.a,{href:"/api/interfaces/QuickPickItem#kind",children:"kind"})," is set to ",(0,c.jsx)(i.a,{href:"/api/enumerations/QuickPickItemKind#separator",children:"QuickPickItemKind.Separator"})]}),"\n",(0,c.jsx)(i.h4,{id:"source-6",children:"Source"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.a,{href:"https://github.com/containers/podman-desktop/blob/c822920e1fc5cc6f79c6f64ac8f21016f6a785bd/packages/extension-api/src/extension-api.d.ts#L1135",children:"packages/extension-api/src/extension-api.d.ts:1135"})})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,c.jsx)(i,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},71670:(e,i,n)=>{n.d(i,{Z:()=>o,a:()=>r});var c=n(27378);const s={},t=c.createContext(s);function r(e){const i=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),c.createElement(t.Provider,{value:i},e.children)}}}]);
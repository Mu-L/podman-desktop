"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56576],{56409:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"interfaces/TelemetryLogger","title":"Interface: TelemetryLogger","description":"A telemetry logger which can be used by extensions to log usage and error telementry.","source":"@site/api/interfaces/TelemetryLogger.md","sourceDirName":"interfaces","slug":"/interfaces/TelemetryLogger","permalink":"/api/interfaces/TelemetryLogger","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"StorageStats","permalink":"/api/interfaces/StorageStats"},"next":{"title":"TelemetryLoggerOptions","permalink":"/api/interfaces/TelemetryLoggerOptions"}}');var d=r(62540),i=r(43023);const t={},a="Interface: TelemetryLogger",l={},o=[{value:"Properties",id:"properties",level:2},{value:"isErrorsEnabled",id:"iserrorsenabled",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"isUsageEnabled",id:"isusageenabled",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"onDidChangeEnableStates",id:"ondidchangeenablestates",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Methods",id:"methods",level:2},{value:"dispose()",id:"dispose",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"logError()",id:"logerror",level:3},{value:"logError(eventName, data)",id:"logerroreventname-data",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in-4",level:5},{value:"logError(error, data)",id:"logerrorerror-data",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-2",level:5},{value:"Defined in",id:"defined-in-5",level:5},{value:"logUsage()",id:"logusage",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-6",level:4}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"interface-telemetrylogger",children:"Interface: TelemetryLogger"})}),"\n",(0,d.jsx)(n.p,{children:"A telemetry logger which can be used by extensions to log usage and error telementry."}),"\n",(0,d.jsxs)(n.p,{children:["A logger wraps around an ",(0,d.jsx)(n.a,{href:"/api/interfaces/TelemetrySender",children:"sender"})," but it guarantees that"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"user settings to disable or tweak telemetry are respected, and that"}),"\n",(0,d.jsx)(n.li,{children:"potential sensitive data is removed"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:'It also enables an "echo UI" that prints whatever data is send and it allows the editor\nto forward unhandled errors to the respective extensions.'}),"\n",(0,d.jsxs)(n.p,{children:["To get an instance of a ",(0,d.jsx)(n.code,{children:"TelemetryLogger"}),", use\n",(0,d.jsx)(n.a,{href:"/api/namespaces/env/functions/createTelemetryLogger",children:(0,d.jsx)(n.code,{children:"createTelemetryLogger"})}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,d.jsx)(n.h3,{id:"iserrorsenabled",children:"isErrorsEnabled"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"readonly"})," ",(0,d.jsx)(n.strong,{children:"isErrorsEnabled"}),": ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Whether or not error telemetry is enabled for this logger."}),"\n",(0,d.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/49ba56ec3c6ddad6a16dad624040f54ce4e7d5fe/packages/extension-api/src/extension-api.d.ts#L4428",children:"packages/extension-api/src/extension-api.d.ts:4428"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"isusageenabled",children:"isUsageEnabled"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"readonly"})," ",(0,d.jsx)(n.strong,{children:"isUsageEnabled"}),": ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Whether or not usage telemetry is enabled for this logger."}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/49ba56ec3c6ddad6a16dad624040f54ce4e7d5fe/packages/extension-api/src/extension-api.d.ts#L4423",children:"packages/extension-api/src/extension-api.d.ts:4423"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"ondidchangeenablestates",children:"onDidChangeEnableStates"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"readonly"})," ",(0,d.jsx)(n.strong,{children:"onDidChangeEnableStates"}),": ",(0,d.jsx)(n.a,{href:"/api/interfaces/Event",children:(0,d.jsx)(n.code,{children:"Event"})}),"<",(0,d.jsx)(n.a,{href:"/api/interfaces/TelemetryLogger",children:(0,d.jsx)(n.code,{children:"TelemetryLogger"})}),">"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["An ",(0,d.jsx)(n.a,{href:"/api/interfaces/Event",children:"Event"})," which fires when the enablement state of usage or error telemetry changes."]}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/49ba56ec3c6ddad6a16dad624040f54ce4e7d5fe/packages/extension-api/src/extension-api.d.ts#L4418",children:"packages/extension-api/src/extension-api.d.ts:4418"})}),"\n",(0,d.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,d.jsx)(n.h3,{id:"dispose",children:"dispose()"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"dispose"}),"(): ",(0,d.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Dispose this object and free resources."}),"\n",(0,d.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"void"})}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/49ba56ec3c6ddad6a16dad624040f54ce4e7d5fe/packages/extension-api/src/extension-api.d.ts#L4463",children:"packages/extension-api/src/extension-api.d.ts:4463"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"logerror",children:"logError()"}),"\n",(0,d.jsx)(n.h4,{id:"logerroreventname-data",children:"logError(eventName, data)"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"logError"}),"(",(0,d.jsx)(n.code,{children:"eventName"}),", ",(0,d.jsx)(n.code,{children:"data"}),"?): ",(0,d.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Log an error event."}),"\n",(0,d.jsxs)(n.p,{children:["After completing cleaning, telemetry setting checks, and data mix-in calls ",(0,d.jsx)(n.code,{children:"TelemetrySender.sendEventData"})," to log the event. Differs from ",(0,d.jsx)(n.code,{children:"logUsage"})," in that it will log the event if the telemetry setting is Error+.\nAutomatically supports echoing to extension telemetry output channel."]}),"\n",(0,d.jsx)(n.h5,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsxs)(n.p,{children:["\u2022 ",(0,d.jsx)(n.strong,{children:"eventName"}),": ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsx)(n.p,{children:"The event name to log"}),"\n",(0,d.jsxs)(n.p,{children:["\u2022 ",(0,d.jsx)(n.strong,{children:"data?"}),": ",(0,d.jsx)(n.code,{children:"Record"}),"<",(0,d.jsx)(n.code,{children:"string"}),", ",(0,d.jsx)(n.code,{children:"any"}),">"]}),"\n",(0,d.jsx)(n.p,{children:"The data to log"}),"\n",(0,d.jsx)(n.h5,{id:"returns-1",children:"Returns"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"void"})}),"\n",(0,d.jsx)(n.h5,{id:"defined-in-4",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/49ba56ec3c6ddad6a16dad624040f54ce4e7d5fe/packages/extension-api/src/extension-api.d.ts#L4450",children:"packages/extension-api/src/extension-api.d.ts:4450"})}),"\n",(0,d.jsx)(n.h4,{id:"logerrorerror-data",children:"logError(error, data)"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"logError"}),"(",(0,d.jsx)(n.code,{children:"error"}),", ",(0,d.jsx)(n.code,{children:"data"}),"?): ",(0,d.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Log an error event."}),"\n",(0,d.jsx)(n.h5,{id:"parameters-1",children:"Parameters"}),"\n",(0,d.jsxs)(n.p,{children:["\u2022 ",(0,d.jsx)(n.strong,{children:"error"}),": ",(0,d.jsx)(n.code,{children:"Error"})]}),"\n",(0,d.jsx)(n.p,{children:"The error object which contains the stack trace cleaned of PII"}),"\n",(0,d.jsxs)(n.p,{children:["\u2022 ",(0,d.jsx)(n.strong,{children:"data?"}),": ",(0,d.jsx)(n.code,{children:"Record"}),"<",(0,d.jsx)(n.code,{children:"string"}),", ",(0,d.jsx)(n.code,{children:"any"}),">"]}),"\n",(0,d.jsx)(n.p,{children:"Additional data to log alongside the stack trace"}),"\n",(0,d.jsx)(n.h5,{id:"returns-2",children:"Returns"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"void"})}),"\n",(0,d.jsx)(n.h5,{id:"defined-in-5",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/49ba56ec3c6ddad6a16dad624040f54ce4e7d5fe/packages/extension-api/src/extension-api.d.ts#L4458",children:"packages/extension-api/src/extension-api.d.ts:4458"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"logusage",children:"logUsage()"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"logUsage"}),"(",(0,d.jsx)(n.code,{children:"eventName"}),", ",(0,d.jsx)(n.code,{children:"data"}),"?): ",(0,d.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Log a usage event."}),"\n",(0,d.jsxs)(n.p,{children:["After completing cleaning, telemetry setting checks, and data mix-in calls ",(0,d.jsx)(n.code,{children:"TelemetrySender.sendEventData"})," to log the event.\nAutomatically supports echoing to extension telemetry output channel."]}),"\n",(0,d.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,d.jsxs)(n.p,{children:["\u2022 ",(0,d.jsx)(n.strong,{children:"eventName"}),": ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsx)(n.p,{children:"The event name to log"}),"\n",(0,d.jsxs)(n.p,{children:["\u2022 ",(0,d.jsx)(n.strong,{children:"data?"}),": ",(0,d.jsx)(n.code,{children:"Record"}),"<",(0,d.jsx)(n.code,{children:"string"}),", ",(0,d.jsx)(n.code,{children:"any"}),">"]}),"\n",(0,d.jsx)(n.p,{children:"The data to log"}),"\n",(0,d.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"void"})}),"\n",(0,d.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/49ba56ec3c6ddad6a16dad624040f54ce4e7d5fe/packages/extension-api/src/extension-api.d.ts#L4439",children:"packages/extension-api/src/extension-api.d.ts:4439"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},43023:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>a});var s=r(63696);const d={},i=s.createContext(d);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
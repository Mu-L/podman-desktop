"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42586],{76202:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>d,toc:()=>t});const d=JSON.parse('{"id":"interfaces/ContainerInspectInfo","title":"Interface: ContainerInspectInfo","description":"Defined in2804","source":"@site/api/interfaces/ContainerInspectInfo.md","sourceDirName":"interfaces","slug":"/interfaces/ContainerInspectInfo","permalink":"/api/interfaces/ContainerInspectInfo","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"ContainerInfo","permalink":"/api/interfaces/ContainerInfo"},"next":{"title":"ContainerJSONEvent","permalink":"/api/interfaces/ContainerJSONEvent"}}');var i=s(62540),r=s(43023);const l={},c="Interface: ContainerInspectInfo",o={},t=[{value:"Properties",id:"properties",level:2},{value:"AppArmorProfile",id:"apparmorprofile",level:3},{value:"Args",id:"args",level:3},{value:"Config",id:"config",level:3},{value:"AttachStderr",id:"attachstderr",level:4},{value:"AttachStdin",id:"attachstdin",level:4},{value:"AttachStdout",id:"attachstdout",level:4},{value:"Cmd",id:"cmd",level:4},{value:"Domainname",id:"domainname",level:4},{value:"Entrypoint?",id:"entrypoint",level:4},{value:"Env",id:"env",level:4},{value:"ExposedPorts",id:"exposedports",level:4},{value:"Index Signature",id:"index-signature",level:5},{value:"Hostname",id:"hostname",level:4},{value:"Image",id:"image",level:4},{value:"Labels",id:"labels",level:4},{value:"Index Signature",id:"index-signature-1",level:5},{value:"OnBuild?",id:"onbuild",level:4},{value:"OpenStdin",id:"openstdin",level:4},{value:"StdinOnce",id:"stdinonce",level:4},{value:"Tty",id:"tty",level:4},{value:"User",id:"user",level:4},{value:"Volumes",id:"volumes",level:4},{value:"Index Signature",id:"index-signature-2",level:5},{value:"WorkingDir",id:"workingdir",level:4},{value:"Created",id:"created",level:3},{value:"Driver",id:"driver",level:3},{value:"engineId",id:"engineid",level:3},{value:"engineName",id:"enginename",level:3},{value:"ExecIDs?",id:"execids",level:3},{value:"GraphDriver",id:"graphdriver",level:3},{value:"Data",id:"data",level:4},{value:"Data.DeviceId",id:"datadeviceid",level:5},{value:"Data.DeviceName",id:"datadevicename",level:5},{value:"Data.DeviceSize",id:"datadevicesize",level:5},{value:"Name",id:"name",level:4},{value:"HostConfig",id:"hostconfig",level:3},{value:"HostnamePath",id:"hostnamepath",level:3},{value:"HostsPath",id:"hostspath",level:3},{value:"Id",id:"id",level:3},{value:"Image",id:"image-1",level:3},{value:"LogPath",id:"logpath",level:3},{value:"MountLabel",id:"mountlabel",level:3},{value:"Mounts",id:"mounts",level:3},{value:"Destination",id:"destination",level:4},{value:"Mode",id:"mode",level:4},{value:"Name?",id:"name-1",level:4},{value:"Propagation",id:"propagation",level:4},{value:"RW",id:"rw",level:4},{value:"Source",id:"source",level:4},{value:"Name",id:"name-2",level:3},{value:"NetworkSettings",id:"networksettings",level:3},{value:"Bridge",id:"bridge",level:4},{value:"EndpointID",id:"endpointid",level:4},{value:"Gateway",id:"gateway",level:4},{value:"GlobalIPv6Address",id:"globalipv6address",level:4},{value:"GlobalIPv6PrefixLen",id:"globalipv6prefixlen",level:4},{value:"HairpinMode",id:"hairpinmode",level:4},{value:"IPAddress",id:"ipaddress",level:4},{value:"IPPrefixLen",id:"ipprefixlen",level:4},{value:"IPv6Gateway",id:"ipv6gateway",level:4},{value:"LinkLocalIPv6Address",id:"linklocalipv6address",level:4},{value:"LinkLocalIPv6PrefixLen",id:"linklocalipv6prefixlen",level:4},{value:"MacAddress",id:"macaddress",level:4},{value:"Networks",id:"networks",level:4},{value:"Index Signature",id:"index-signature-3",level:5},{value:"Node?",id:"node",level:4},{value:"Node.Addr",id:"nodeaddr",level:5},{value:"Node.Cpus",id:"nodecpus",level:5},{value:"Node.ID",id:"nodeid",level:5},{value:"Node.IP",id:"nodeip",level:5},{value:"Node.Labels",id:"nodelabels",level:5},{value:"Node.Memory",id:"nodememory",level:5},{value:"Node.Name",id:"nodename",level:5},{value:"Ports",id:"ports",level:4},{value:"Index Signature",id:"index-signature-4",level:5},{value:"SandboxID",id:"sandboxid",level:4},{value:"SandboxKey",id:"sandboxkey",level:4},{value:"SecondaryIPAddresses?",id:"secondaryipaddresses",level:4},{value:"SecondaryIPv6Addresses?",id:"secondaryipv6addresses",level:4},{value:"Path",id:"path",level:3},{value:"Platform",id:"platform",level:3},{value:"ProcessLabel",id:"processlabel",level:3},{value:"ResolvConfPath",id:"resolvconfpath",level:3},{value:"RestartCount",id:"restartcount",level:3},{value:"State",id:"state",level:3},{value:"Dead",id:"dead",level:4},{value:"Error",id:"error",level:4},{value:"ExitCode",id:"exitcode",level:4},{value:"FinishedAt",id:"finishedat",level:4},{value:"Health?",id:"health",level:4},{value:"OOMKilled",id:"oomkilled",level:4},{value:"Paused",id:"paused",level:4},{value:"Pid",id:"pid",level:4},{value:"Restarting",id:"restarting",level:4},{value:"Running",id:"running",level:4},{value:"StartedAt",id:"startedat",level:4},{value:"Status",id:"status",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"interface-containerinspectinfo",children:"Interface: ContainerInspectInfo"})}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/05de61ed65b2124e05377fa66b64cd0c8624bd37/packages/extension-api/src/extension-api.d.ts#L2804",children:"packages/extension-api/src/extension-api.d.ts:2804"})]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"apparmorprofile",children:"AppArmorProfile"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"AppArmorProfile"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/05de61ed65b2124e05377fa66b64cd0c8624bd37/packages/extension-api/src/extension-api.d.ts#L2836",children:"packages/extension-api/src/extension-api.d.ts:2836"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"args",children:"Args"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Args"}),": ",(0,i.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/05de61ed65b2124e05377fa66b64cd0c8624bd37/packages/extension-api/src/extension-api.d.ts#L2810",children:"packages/extension-api/src/extension-api.d.ts:2810"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Config"}),": ",(0,i.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/05de61ed65b2124e05377fa66b64cd0c8624bd37/packages/extension-api/src/extension-api.d.ts#L2855",children:"packages/extension-api/src/extension-api.d.ts:2855"})]}),"\n",(0,i.jsx)(n.h4,{id:"attachstderr",children:"AttachStderr"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"AttachStderr"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"attachstdin",children:"AttachStdin"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"AttachStdin"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"attachstdout",children:"AttachStdout"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"AttachStdout"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"cmd",children:"Cmd"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Cmd"}),": ",(0,i.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"domainname",children:"Domainname"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Domainname"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"entrypoint",children:"Entrypoint?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"optional"})," ",(0,i.jsx)(n.strong,{children:"Entrypoint"}),": ",(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"env",children:"Env"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Env"}),": ",(0,i.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"exposedports",children:"ExposedPorts"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ExposedPorts"}),": ",(0,i.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"index-signature",children:"Index Signature"}),"\n",(0,i.jsxs)(n.p,{children:["[",(0,i.jsx)(n.code,{children:"portAndProtocol"}),": ",(0,i.jsx)(n.code,{children:"string"}),"]: ",(0,i.jsx)(n.code,{children:"unknown"})]}),"\n",(0,i.jsx)(n.h4,{id:"hostname",children:"Hostname"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Hostname"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"image",children:"Image"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Image"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"labels",children:"Labels"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Labels"}),": ",(0,i.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"index-signature-1",children:"Index Signature"}),"\n",(0,i.jsxs)(n.p,{children:["[",(0,i.jsx)(n.code,{children:"label"}),": ",(0,i.jsx)(n.code,{children:"string"}),"]: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsx)(n.h4,{id:"onbuild",children:"OnBuild?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"optional"})," ",(0,i.jsx)(n.strong,{children:"OnBuild"}),": ",(0,i.jsx)(n.code,{children:"unknown"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"openstdin",children:"OpenStdin"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OpenStdin"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"stdinonce",children:"StdinOnce"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"StdinOnce"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"tty",children:"Tty"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Tty"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"user",children:"User"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"User"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"volumes",children:"Volumes"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Volumes"}),": ",(0,i.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"index-signature-2",children:"Index Signature"}),"\n",(0,i.jsxs)(n.p,{children:["[",(0,i.jsx)(n.code,{children:"volume"}),": ",(0,i.jsx)(n.code,{children:"string"}),"]: ",(0,i.jsx)(n.code,{children:"unknown"})]}),"\n",(0,i.jsx)(n.h4,{id:"workingdir",children:"WorkingDir"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"WorkingDir"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"created",children:"Created"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Created"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/05de61ed65b2124e05377fa66b64cd0c8624bd37/packages/extension-api/src/extension-api.d.ts#L2808",children:"packages/extension-api/src/extension-api.d.ts:2808"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"driver",children:"Driver"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Driver"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/05de61ed65b2124e05377fa66b64cd0c8624bd37/packages/extension-api/src/extension-api.d.ts#L2832",children:"packages/extension-api/src/extension-api.d.ts:2832"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"engineid",children:"engineId"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"engineId"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/05de61ed65b2124e05377fa66b64cd0c8624bd37/packages/extension-api/src/extension-api.d.ts#L2805",children:"packages/extension-api/src/extension-api.d.ts:2805"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"enginename",children:"engineName"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"engineName"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/05de61ed65b2124e05377fa66b64cd0c8624bd37/packages/extension-api/src/extension-api.d.ts#L2806",children:"packages/extension-api/src/extension-api.d.ts:2806"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"execids",children:"ExecIDs?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"optional"})," ",(0,i.jsx)(n.strong,{children:"ExecIDs"}),": ",(0,i.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/05de61ed65b2124e05377fa66b64cd0c8624bd37/packages/extension-api/src/extension-api.d.ts#L2837",children:"packages/extension-api/src/extension-api.d.ts:2837"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"graphdriver",children:"GraphDriver"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"GraphDriver"}),": ",(0,i.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/05de61ed65b2124e05377fa66b64cd0c8624bd37/packages/extension-api/src/extension-api.d.ts#L2839",children:"packages/extension-api/src/extension-api.d.ts:2839"})]}),"\n",(0,i.jsx)(n.h4,{id:"data",children:"Data"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Data"}),": ",(0,i.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"datadeviceid",children:"Data.DeviceId"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"DeviceId"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"datadevicename",children:"Data.DeviceName"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"DeviceName"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"datadevicesize",children:"Data.DeviceSize"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"DeviceSize"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"name",children:"Name"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Name"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"hostconfig",children:"HostConfig"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"HostConfig"}),": ",(0,i.jsx)(n.a,{href:"/api/interfaces/HostConfig",children:(0,i.jsx)(n.code,{children:"HostConfig"})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/05de61ed65b2124e05377fa66b64cd0c8624bd37/packages/extension-api/src/extension-api.d.ts#L2838",children:"packages/extension-api/src/extension-api.d.ts:2838"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"hostnamepath",children:"HostnamePath"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"HostnamePath"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/05de61ed65b2124e05377fa66b64cd0c8624bd37/packages/extension-api/src/extension-api.d.ts#L2827",children:"packages/extension-api/src/extension-api.d.ts:2827"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"hostspath",children:"HostsPath"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"HostsPath"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/05de61ed65b2124e05377fa66b64cd0c8624bd37/packages/extension-api/src/extension-api.d.ts#L2828",children:"packages/extension-api/src/extension-api.d.ts:2828"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"id",children:"Id"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Id"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/05de61ed65b2124e05377fa66b64cd0c8624bd37/packages/extension-api/src/extension-api.d.ts#L2807",children:"packages/extension-api/src/extension-api.d.ts:2807"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"image-1",children:"Image"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Image"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/05de61ed65b2124e05377fa66b64cd0c8624bd37/packages/extension-api/src/extension-api.d.ts#L2825",children:"packages/extension-api/src/extension-api.d.ts:2825"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"logpath",children:"LogPath"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"LogPath"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/05de61ed65b2124e05377fa66b64cd0c8624bd37/packages/extension-api/src/extension-api.d.ts#L2829",children:"packages/extension-api/src/extension-api.d.ts:2829"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"mountlabel",children:"MountLabel"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"MountLabel"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/05de61ed65b2124e05377fa66b64cd0c8624bd37/packages/extension-api/src/extension-api.d.ts#L2834",children:"packages/extension-api/src/extension-api.d.ts:2834"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"mounts",children:"Mounts"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Mounts"}),": ",(0,i.jsx)(n.code,{children:"object"}),"[]"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/05de61ed65b2124e05377fa66b64cd0c8624bd37/packages/extension-api/src/extension-api.d.ts#L2847",children:"packages/extension-api/src/extension-api.d.ts:2847"})]}),"\n",(0,i.jsx)(n.h4,{id:"destination",children:"Destination"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Destination"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"mode",children:"Mode"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Mode"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"name-1",children:"Name?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"optional"})," ",(0,i.jsx)(n.strong,{children:"Name"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"propagation",children:"Propagation"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Propagation"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"rw",children:"RW"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"RW"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"source",children:"Source"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Source"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"name-2",children:"Name"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Name"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/05de61ed65b2124e05377fa66b64cd0c8624bd37/packages/extension-api/src/extension-api.d.ts#L2830",children:"packages/extension-api/src/extension-api.d.ts:2830"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"networksettings",children:"NetworkSettings"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"NetworkSettings"}),": ",(0,i.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/05de61ed65b2124e05377fa66b64cd0c8624bd37/packages/extension-api/src/extension-api.d.ts#L2875",children:"packages/extension-api/src/extension-api.d.ts:2875"})]}),"\n",(0,i.jsx)(n.h4,{id:"bridge",children:"Bridge"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Bridge"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"endpointid",children:"EndpointID"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"EndpointID"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"gateway",children:"Gateway"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Gateway"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"globalipv6address",children:"GlobalIPv6Address"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"GlobalIPv6Address"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"globalipv6prefixlen",children:"GlobalIPv6PrefixLen"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"GlobalIPv6PrefixLen"}),": ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"hairpinmode",children:"HairpinMode"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"HairpinMode"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"ipaddress",children:"IPAddress"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"IPAddress"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"ipprefixlen",children:"IPPrefixLen"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"IPPrefixLen"}),": ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"ipv6gateway",children:"IPv6Gateway"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"IPv6Gateway"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"linklocalipv6address",children:"LinkLocalIPv6Address"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"LinkLocalIPv6Address"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"linklocalipv6prefixlen",children:"LinkLocalIPv6PrefixLen"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"LinkLocalIPv6PrefixLen"}),": ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"macaddress",children:"MacAddress"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"MacAddress"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"networks",children:"Networks"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Networks"}),": ",(0,i.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"index-signature-3",children:"Index Signature"}),"\n",(0,i.jsxs)(n.p,{children:["[",(0,i.jsx)(n.code,{children:"type"}),": ",(0,i.jsx)(n.code,{children:"string"}),"]: ",(0,i.jsx)(n.code,{children:"object"})]}),"\n",(0,i.jsx)(n.h4,{id:"node",children:"Node?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"optional"})," ",(0,i.jsx)(n.strong,{children:"Node"}),": ",(0,i.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"nodeaddr",children:"Node.Addr"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Addr"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"nodecpus",children:"Node.Cpus"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Cpus"}),": ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"nodeid",children:"Node.ID"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ID"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"nodeip",children:"Node.IP"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"IP"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"nodelabels",children:"Node.Labels"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Labels"}),": ",(0,i.jsx)(n.code,{children:"unknown"})]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"nodememory",children:"Node.Memory"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Memory"}),": ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"nodename",children:"Node.Name"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Name"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"ports",children:"Ports"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ports"}),": ",(0,i.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"index-signature-4",children:"Index Signature"}),"\n",(0,i.jsxs)(n.p,{children:["[",(0,i.jsx)(n.code,{children:"portAndProtocol"}),": ",(0,i.jsx)(n.code,{children:"string"}),"]: ",(0,i.jsx)(n.code,{children:"object"}),"[]"]}),"\n",(0,i.jsx)(n.h4,{id:"sandboxid",children:"SandboxID"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SandboxID"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"sandboxkey",children:"SandboxKey"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SandboxKey"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"secondaryipaddresses",children:"SecondaryIPAddresses?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"optional"})," ",(0,i.jsx)(n.strong,{children:"SecondaryIPAddresses"}),": ",(0,i.jsx)(n.code,{children:"unknown"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"secondaryipv6addresses",children:"SecondaryIPv6Addresses?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"optional"})," ",(0,i.jsx)(n.strong,{children:"SecondaryIPv6Addresses"}),": ",(0,i.jsx)(n.code,{children:"unknown"})]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"path",children:"Path"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Path"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/05de61ed65b2124e05377fa66b64cd0c8624bd37/packages/extension-api/src/extension-api.d.ts#L2809",children:"packages/extension-api/src/extension-api.d.ts:2809"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"platform",children:"Platform"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Platform"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/05de61ed65b2124e05377fa66b64cd0c8624bd37/packages/extension-api/src/extension-api.d.ts#L2833",children:"packages/extension-api/src/extension-api.d.ts:2833"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"processlabel",children:"ProcessLabel"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ProcessLabel"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/05de61ed65b2124e05377fa66b64cd0c8624bd37/packages/extension-api/src/extension-api.d.ts#L2835",children:"packages/extension-api/src/extension-api.d.ts:2835"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"resolvconfpath",children:"ResolvConfPath"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ResolvConfPath"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/05de61ed65b2124e05377fa66b64cd0c8624bd37/packages/extension-api/src/extension-api.d.ts#L2826",children:"packages/extension-api/src/extension-api.d.ts:2826"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"restartcount",children:"RestartCount"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"RestartCount"}),": ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/05de61ed65b2124e05377fa66b64cd0c8624bd37/packages/extension-api/src/extension-api.d.ts#L2831",children:"packages/extension-api/src/extension-api.d.ts:2831"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"state",children:"State"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"State"}),": ",(0,i.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/05de61ed65b2124e05377fa66b64cd0c8624bd37/packages/extension-api/src/extension-api.d.ts#L2811",children:"packages/extension-api/src/extension-api.d.ts:2811"})]}),"\n",(0,i.jsx)(n.h4,{id:"dead",children:"Dead"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Dead"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"error",children:"Error"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Error"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"exitcode",children:"ExitCode"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ExitCode"}),": ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"finishedat",children:"FinishedAt"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"FinishedAt"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"health",children:"Health?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"optional"})," ",(0,i.jsx)(n.strong,{children:"Health"}),": ",(0,i.jsx)(n.a,{href:"/api/interfaces/HealthCheckResults",children:(0,i.jsx)(n.code,{children:"HealthCheckResults"})})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"oomkilled",children:"OOMKilled"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OOMKilled"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"paused",children:"Paused"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Paused"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"pid",children:"Pid"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Pid"}),": ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"restarting",children:"Restarting"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Restarting"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"running",children:"Running"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Running"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"startedat",children:"StartedAt"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"StartedAt"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"status",children:"Status"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Status"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var d=s(63696);const i={},r=d.createContext(i);function l(e){const n=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);
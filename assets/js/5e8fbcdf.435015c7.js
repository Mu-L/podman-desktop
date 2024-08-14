"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5417],{28786:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=i(24246),d=i(71670);const r={},t="Interface: BuildImageOptions",c={id:"interfaces/BuildImageOptions",title:"Interface: BuildImageOptions",description:"Properties",source:"@site/api/interfaces/BuildImageOptions.md",sourceDirName:"interfaces",slug:"/interfaces/BuildImageOptions",permalink:"/api/interfaces/BuildImageOptions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"BlkioStats",permalink:"/api/interfaces/BlkioStats"},next:{title:"CPUStats",permalink:"/api/interfaces/CPUStats"}},o={},l=[{value:"Properties",id:"properties",level:2},{value:"abortController?",id:"abortcontroller",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"buildargs?",id:"buildargs",level:3},{value:"Index Signature",id:"index-signature",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"cachefrom?",id:"cachefrom",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"containerFile?",id:"containerfile",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"cpuperiod?",id:"cpuperiod",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"cpuquota?",id:"cpuquota",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"cpusetcpus?",id:"cpusetcpus",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"cpushares?",id:"cpushares",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"extrahosts?",id:"extrahosts",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"forcerm?",id:"forcerm",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"labels?",id:"labels",level:3},{value:"Index Signature",id:"index-signature-1",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"memory?",id:"memory",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"memswap?",id:"memswap",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"networkmode?",id:"networkmode",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"nocache?",id:"nocache",level:3},{value:"Defined in",id:"defined-in-14",level:4},{value:"outputs?",id:"outputs",level:3},{value:"Defined in",id:"defined-in-15",level:4},{value:"platform?",id:"platform",level:3},{value:"Defined in",id:"defined-in-16",level:4},{value:"provider?",id:"provider",level:3},{value:"Defined in",id:"defined-in-17",level:4},{value:"pull?",id:"pull",level:3},{value:"Defined in",id:"defined-in-18",level:4},{value:"q?",id:"q",level:3},{value:"Defined in",id:"defined-in-19",level:4},{value:"remote?",id:"remote",level:3},{value:"Defined in",id:"defined-in-20",level:4},{value:"rm?",id:"rm",level:3},{value:"Defined in",id:"defined-in-21",level:4},{value:"shmsize?",id:"shmsize",level:3},{value:"Defined in",id:"defined-in-22",level:4},{value:"squash?",id:"squash",level:3},{value:"Defined in",id:"defined-in-23",level:4},{value:"tag?",id:"tag",level:3},{value:"Defined in",id:"defined-in-24",level:4},{value:"target?",id:"target",level:3},{value:"Defined in",id:"defined-in-25",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",strong:"strong",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"interface-buildimageoptions",children:"Interface: BuildImageOptions"})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h3,{id:"abortcontroller",children:"abortController?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"abortController"}),": ",(0,s.jsx)(n.code,{children:"AbortController"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The abort controller for running the build image operation"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/d28e31e164672204435fd356c0f739a5f0d86c85/packages/extension-api/src/extension-api.d.ts#L3212",children:"packages/extension-api/src/extension-api.d.ts:3212"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"buildargs",children:"buildargs?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"buildargs"}),": ",(0,s.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["JSON map of string pairs for build-time variables. Users pass these values at build-time. Docker uses the\nbuildargs as the environment context for commands run via the ",(0,s.jsx)(n.code,{children:"Dockerfile"})," RUN instruction, or for variable\nexpansion in other ",(0,s.jsx)(n.code,{children:"Dockerfilev"})," instructions. This is not meant for passing secret values.\nFor example, the build arg ",(0,s.jsx)(n.code,{children:"FOO=bar"})," would become ",(0,s.jsx)(n.code,{children:'{"FOO":"bar"}'})," in JSON. This would result in the query\nparameter ",(0,s.jsx)(n.code,{children:'buildargs={"FOO":"bar"}'}),". Note that ",(0,s.jsx)(n.code,{children:'{"FOO":"bar"}'})," should be URI component encoded."]}),"\n",(0,s.jsx)(n.h4,{id:"index-signature",children:"Index Signature"}),"\n",(0,s.jsxs)(n.p,{children:["[",(0,s.jsx)(n.code,{children:"key"}),": ",(0,s.jsx)(n.code,{children:"string"}),"]: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/d28e31e164672204435fd356c0f739a5f0d86c85/packages/extension-api/src/extension-api.d.ts#L3296",children:"packages/extension-api/src/extension-api.d.ts:3296"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"cachefrom",children:"cachefrom?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"cachefrom"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"JSON array of images used for build cache resolution."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/d28e31e164672204435fd356c0f739a5f0d86c85/packages/extension-api/src/extension-api.d.ts#L3238",children:"packages/extension-api/src/extension-api.d.ts:3238"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"containerfile",children:"containerFile?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"containerFile"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Specifies a Containerfile which contains instructions for building the image"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/d28e31e164672204435fd356c0f739a5f0d86c85/packages/extension-api/src/extension-api.d.ts#L3192",children:"packages/extension-api/src/extension-api.d.ts:3192"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"cpuperiod",children:"cpuperiod?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"cpuperiod"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The length of a CPU period in microseconds."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/d28e31e164672204435fd356c0f739a5f0d86c85/packages/extension-api/src/extension-api.d.ts#L3282",children:"packages/extension-api/src/extension-api.d.ts:3282"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"cpuquota",children:"cpuquota?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"cpuquota"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Microseconds of CPU time that the container can get in a CPU period."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/d28e31e164672204435fd356c0f739a5f0d86c85/packages/extension-api/src/extension-api.d.ts#L3287",children:"packages/extension-api/src/extension-api.d.ts:3287"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"cpusetcpus",children:"cpusetcpus?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"cpusetcpus"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"CPUs in which to allow execution (e.g., 0-3, 0,1)."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/d28e31e164672204435fd356c0f739a5f0d86c85/packages/extension-api/src/extension-api.d.ts#L3277",children:"packages/extension-api/src/extension-api.d.ts:3277"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"cpushares",children:"cpushares?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"cpushares"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"CPU shares (relative weight)."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/d28e31e164672204435fd356c0f739a5f0d86c85/packages/extension-api/src/extension-api.d.ts#L3272",children:"packages/extension-api/src/extension-api.d.ts:3272"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"extrahosts",children:"extrahosts?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"extrahosts"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Extra hosts to add to /etc/hosts"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/d28e31e164672204435fd356c0f739a5f0d86c85/packages/extension-api/src/extension-api.d.ts#L3217",children:"packages/extension-api/src/extension-api.d.ts:3217"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"forcerm",children:"forcerm?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"forcerm"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Default: false"}),"\n",(0,s.jsx)(n.p,{children:"Always remove intermediate containers, even upon failure."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-9",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/d28e31e164672204435fd356c0f739a5f0d86c85/packages/extension-api/src/extension-api.d.ts#L3257",children:"packages/extension-api/src/extension-api.d.ts:3257"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"labels",children:"labels?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"labels"}),": ",(0,s.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Arbitrary key/value labels to set on the image, as a JSON map of string pairs."}),"\n",(0,s.jsx)(n.h4,{id:"index-signature-1",children:"Index Signature"}),"\n",(0,s.jsxs)(n.p,{children:["[",(0,s.jsx)(n.code,{children:"key"}),": ",(0,s.jsx)(n.code,{children:"string"}),"]: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-10",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/d28e31e164672204435fd356c0f739a5f0d86c85/packages/extension-api/src/extension-api.d.ts#L3311",children:"packages/extension-api/src/extension-api.d.ts:3311"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"memory",children:"memory?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"memory"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Set memory limit for build."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-11",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/d28e31e164672204435fd356c0f739a5f0d86c85/packages/extension-api/src/extension-api.d.ts#L3262",children:"packages/extension-api/src/extension-api.d.ts:3262"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"memswap",children:"memswap?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"memswap"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Total memory (memory + swap). Set as -1 to disable swap."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-12",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/d28e31e164672204435fd356c0f739a5f0d86c85/packages/extension-api/src/extension-api.d.ts#L3267",children:"packages/extension-api/src/extension-api.d.ts:3267"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"networkmode",children:"networkmode?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"networkmode"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Sets the networking mode for the run commands during build. Supported standard values are: ",(0,s.jsx)(n.code,{children:"bridge"}),",\n",(0,s.jsx)(n.code,{children:"host"}),", ",(0,s.jsx)(n.code,{children:"none"}),", and ",(0,s.jsx)(n.code,{children:"container:<name|id>"}),". Any other value is taken as a custom network's name or ID\nto which this container should connect to."]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-13",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/d28e31e164672204435fd356c0f739a5f0d86c85/packages/extension-api/src/extension-api.d.ts#L3318",children:"packages/extension-api/src/extension-api.d.ts:3318"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"nocache",children:"nocache?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"nocache"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Default: false"}),"\n",(0,s.jsx)(n.p,{children:"Do not use the cache when building the image."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-14",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/d28e31e164672204435fd356c0f739a5f0d86c85/packages/extension-api/src/extension-api.d.ts#L3339",children:"packages/extension-api/src/extension-api.d.ts:3339"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"outputs",children:"outputs?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"outputs"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:'Default: ""'}),"\n",(0,s.jsx)(n.p,{children:"BuildKit output configuration"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-15",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/d28e31e164672204435fd356c0f739a5f0d86c85/packages/extension-api/src/extension-api.d.ts#L3332",children:"packages/extension-api/src/extension-api.d.ts:3332"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"platform",children:"platform?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"platform"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Set the os/arch of the built image (and its base image, when using one) to the provided value instead of using the current operating system and architecture of the host"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-16",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/d28e31e164672204435fd356c0f739a5f0d86c85/packages/extension-api/src/extension-api.d.ts#L3202",children:"packages/extension-api/src/extension-api.d.ts:3202"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"provider",children:"provider?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"provider"}),": ",(0,s.jsx)(n.a,{href:"/api/interfaces/ContainerProviderConnection",children:(0,s.jsx)(n.code,{children:"ContainerProviderConnection"})})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Set the provider to use, if not we will try select the first one available (sorted in favor of Podman)"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-17",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/d28e31e164672204435fd356c0f739a5f0d86c85/packages/extension-api/src/extension-api.d.ts#L3207",children:"packages/extension-api/src/extension-api.d.ts:3207"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"pull",children:"pull?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"pull"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Attempt to pull the image even if an older image exists locally."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-18",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/d28e31e164672204435fd356c0f739a5f0d86c85/packages/extension-api/src/extension-api.d.ts#L3243",children:"packages/extension-api/src/extension-api.d.ts:3243"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"q",children:"q?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"q"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Default: false"}),"\n",(0,s.jsx)(n.p,{children:"Suppress verbose build output."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-19",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/d28e31e164672204435fd356c0f739a5f0d86c85/packages/extension-api/src/extension-api.d.ts#L3233",children:"packages/extension-api/src/extension-api.d.ts:3233"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"remote",children:"remote?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"remote"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"A Git repository URI or HTTP/HTTPS context URI. If the URI points to a single text file, the file\u2019s contents are\nplaced into a file called Dockerfile and the image is built from that file. If the URI points to a tarball, the\nfile is downloaded by the daemon and the contents therein used as the context for the build. If the URI points\nto a tarball and the dockerfile parameter is also specified, there must be a file with the corresponding path\ninside the tarball."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-20",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/d28e31e164672204435fd356c0f739a5f0d86c85/packages/extension-api/src/extension-api.d.ts#L3226",children:"packages/extension-api/src/extension-api.d.ts:3226"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"rm",children:"rm?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"rm"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Default: true"}),"\n",(0,s.jsx)(n.p,{children:"Remove intermediate containers after a successful build."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-21",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/d28e31e164672204435fd356c0f739a5f0d86c85/packages/extension-api/src/extension-api.d.ts#L3250",children:"packages/extension-api/src/extension-api.d.ts:3250"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"shmsize",children:"shmsize?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"shmsize"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Size of ",(0,s.jsx)(n.code,{children:"/dev/shm"})," in bytes. The size must be greater than 0. If omitted the system uses 64MB."]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-22",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/d28e31e164672204435fd356c0f739a5f0d86c85/packages/extension-api/src/extension-api.d.ts#L3301",children:"packages/extension-api/src/extension-api.d.ts:3301"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"squash",children:"squash?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"squash"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Squash the resulting images layers into a single layer."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-23",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/d28e31e164672204435fd356c0f739a5f0d86c85/packages/extension-api/src/extension-api.d.ts#L3306",children:"packages/extension-api/src/extension-api.d.ts:3306"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"tag",children:"tag?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"tag"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Specifies the name which is assigned to the resulting image if the build process completes successfully"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-24",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/d28e31e164672204435fd356c0f739a5f0d86c85/packages/extension-api/src/extension-api.d.ts#L3197",children:"packages/extension-api/src/extension-api.d.ts:3197"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"target",children:"target?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"target"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:'Default: ""'}),"\n",(0,s.jsx)(n.p,{children:"Target build stage"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-25",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/d28e31e164672204435fd356c0f739a5f0d86c85/packages/extension-api/src/extension-api.d.ts#L3325",children:"packages/extension-api/src/extension-api.d.ts:3325"})})]})}function h(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},71670:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>t});var s=i(27378);const d={},r=s.createContext(d);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);
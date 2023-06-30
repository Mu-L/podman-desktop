"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3237],{544:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(7378),n=a(161);const r=function(){function e(){var e,t;if(null==(e=document)||!e.documentElement)return;const a=document.documentElement;"dark"===(null==(t=a.dataset)?void 0:t.theme)?(a.classList.add("dark"),setTimeout((()=>{a.classList.add("dark")}),100)):(a.classList.remove("dark"),setTimeout((()=>{a.classList.remove("dark")}),100))}return(0,l.useEffect)((()=>{n.Z.canUseDOM&&e()}),[n.Z.canUseDOM]),(0,l.useEffect)((()=>{if(!n.Z.canUseDOM)return;const t=new MutationObserver((t=>{t.forEach((t=>{"attributes"!==t.type||"data-rh"!==t.attributeName&&"data-theme"!==t.attributeName||e()}))}));return t.observe(document.documentElement,{attributes:!0,childList:!1,subtree:!1}),()=>{t.disconnect()}}),[n.Z.canUseDOM]),l.createElement("div",null)}},7501:(e,t,a)=>{a.r(t),a.d(t,{default:()=>G});var l=a(7378),n=a(432),r=a(1884),s=a(6457);function m(e){let{children:t,fallback:a}=e;return(0,s.Z)()?l.createElement(l.Fragment,null,null==t?void 0:t()):a??null}var c=a(544),i=a(2739),o=a(9928),d=a(9374),x=a(4034),u=a(8948);function f(){let e="",t=null;const a=navigator.userAgent;let n,s;return-1!==a.indexOf("Windows")?(e="Windows",t="faWindows"):-1!==a.indexOf("Mac")?(e="macOS",t="faApple"):-1!==a.indexOf("Linux")&&(e="Linux",t="faLinux"),""!==e?(n=l.createElement("div",null,l.createElement(r.Z,{className:"no-underline hover:no-underline inline-flex text-white hover:text-white bg-violet-600 border-0 py-4 px-8 mt-6 mb-1 focus:outline-none hover:bg-violet-700 rounded text-lg",to:"/downloads/"+e},l.createElement(i.G,{size:"2x",icon:t,className:"px-2"})," Download Now"),l.createElement("caption",{className:"block mt-0 dark:text-gray-400"},"For ",l.createElement("strong",null,e)," ",l.createElement("em",null,"(browser-detected)"))),s=l.createElement("div",null,l.createElement(r.Z,{className:"underline font-semibold hover:underline ml-4 inline-flex py-2 px-6 my-4  focus:outline-none text-lg",to:"/downloads"},"Other downloads"))):n=l.createElement(r.Z,{className:"no-underline hover:no-underline inline-flex text-white hover:text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg",to:"/downloads"},"Download Page"),l.createElement("div",{className:"flex justify-center flex-col"},n,s)}function g(){return l.createElement("div",{className:"flex justify-center"},l.createElement(r.Z,{className:"no-underline hover:no-underline inline-flex text-white hover:text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg",to:"/downloads"},"Download Page"))}function p(){return l.createElement("section",{className:"text-gray-900 dark:text-gray-400 body-font"},l.createElement("div",{className:"container mx-auto flex px-5 pb-24 pt-4 items-center justify-center flex-col"},l.createElement("div",{className:"text-center lg:w-2/3 w-full bg-hero-pattern bg-no-repeat bg-center"},l.createElement("div",{className:"bg-white/30 dark:bg-transparent"},l.createElement("h1",{className:"title-font sm:text-4xl text-3xl lg:text-6xl mb-8 font-medium text-gray-900 dark:text-white"},"Containers and Kubernetes for application developers"),l.createElement("p",{className:"text-base md:text-lg"},"Podman Desktop is an open source graphical tool enabling you to seamlessly work with containers and Kubernetes from your local environment."),l.createElement("div",{className:"flex-none"},l.createElement(m,{fallback:l.createElement(g,null)},(()=>l.createElement(f,null)))))),l.createElement("div",{className:"sm:pl-8 md:pl-12 lg:pl-36 text-center w-full"},l.createElement("img",{className:"sm:w-full md:w-full lg:w-10/12",alt:"Podman Desktop home page",src:"img/features/homepage.webp"}))))}function E(e){return l.createElement("div",null,l.createElement("p",{className:"inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-purple-800 uppercase rounded-full dark:bg-purple-400 bg-purple-400"},e.name))}function N(){return l.createElement("section",{className:"text-gray-900 dark:text-gray-400 dark:bg-charcoal-800 bg-zinc-100 body-font"},l.createElement("div",{className:"container px-5 py-24 mx-auto flex flex-wrap"},l.createElement("div",{className:"flex flex-col text-center w-full mb-5"},l.createElement(E,{name:"update"}),l.createElement("h2",{className:"max-w-lg mb-6 font-sans text-3xl font-light leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mx-auto"},"Install and keep up to date ",l.createElement("span",{className:"font-bold"},"Podman"))),l.createElement("div",{className:"flex flex-col w-full text-center"},l.createElement("div",{className:"mx-10"},l.createElement(i.G,{size:"3x",icon:d.mHK,className:"ml-2 mb-4 text-gray-900 dark:text-gray-300"})),l.createElement("div",{className:"flex flex-col items-center"},l.createElement("p",{className:"leading-relaxed text-base"},"Install Podman and other dependencies directly from Podman Desktop if not yet installed."),l.createElement("p",{className:"leading-relaxed text-base"},"Check for updates and get notified about new changes."),l.createElement("p",{className:"leading-relaxed text-base"},"Available on"," ",l.createElement("a",{href:"/downloads/windows",className:"text-purple-600 dark:text-purple-400",target:"_blank"},"Windows")," ","and"," ",l.createElement("a",{href:"/downloads/macos",className:"text-purple-600 dark:text-purple-400",target:"_blank"},"macOS"),"!")))))}function b(){return l.createElement("section",{className:"text-gray-900 dark:text-gray-400 dark:bg-charcoal-600 bg-zinc-200 body-font"},l.createElement("div",{className:"container px-5 py-24 mx-auto flex flex-wrap"},l.createElement("div",{className:"flex flex-col text-center w-full mb-5"},l.createElement(E,{name:"extensibility"}),l.createElement("h2",{className:"max-w-lg mb-6 font-sans text-3xl font-light leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mx-auto"},"Bring new features with Podman Desktop plug-ins or Docker Desktop Extensions.")),l.createElement("div",{className:"flex flex-col w-full text-center"},l.createElement("div",{className:"mx-10"},l.createElement(i.G,{size:"3x",icon:d.oso,className:"ml-2 mb-4 text-gray-900 dark:text-gray-300"})),l.createElement("ul",{className:"list-disc list-inside text-center"},l.createElement("li",null,"Container engines are plugged through extension points"),l.createElement("li",null,"JavaScript extensions can contribute new behaviour"),l.createElement("li",null,"Reuse existing extensions such as Trivy and OpenShift directly in Podman Desktop")),l.createElement("div",{className:"flex flex-col items-center"},l.createElement("div",{className:"text-left my-4"},l.createElement("p",{className:"-ml-5 text-base"},"Current Podman Desktop plugins: Podman, Docker, Lima, Kubernetes, and OpenShift Local with the Podman preset."))),l.createElement(x.Z,{className:"sm:w-full md:w-full lg:w-10/12 sm:pl-8 md:pl-12 lg:pl-24 text-center",alt:"Reuse Docker Desktop extensions",sources:{light:(0,u.Z)("img/ddextensions/dd-support.png"),dark:(0,u.Z)("img/ddextensions/dd-support.png")}}),l.createElement("div",{className:"flex flex-col items-center"},l.createElement(r.Z,{title:"Extend Podman Desktop",className:"no-underline hover:no-underline text-gray-900 dark:text-white hover:dark:text-violet-600 ",to:"/extend"},l.createElement("div",{className:"mt-3 text-purple-800 dark:text-purple-400 inline-flex items-center"},"Learn More",l.createElement("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",className:"w-4 h-4 ml-2",viewBox:"0 0 24 24"},l.createElement("path",{d:"M5 12h14M12 5l7 7-7 7"}))))))))}function h(){return l.createElement("section",{className:"text-gray-900 dark:text-gray-400 dark:bg-charcoal-800 bg-zinc-100 body-font py-24"},l.createElement("div",{className:"container px-5 mx-auto flex flex-wrap"},l.createElement("div",{className:"flex flex-col text-center w-full mb-5"},l.createElement(E,{name:"Configure"}),l.createElement("h2",{className:"max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mx-auto"},"Multiple configuration options")),l.createElement("div",{className:"container px-5 pb-5 mx-auto"},l.createElement("div",{className:"flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6"},l.createElement("div",{className:"p-4 md:w-1/4 flex"},l.createElement("div",{className:"w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-purple-700 mb-4 flex-shrink-0"},l.createElement(i.G,{size:"2x",icon:d.Kb6,className:"w-6 h-6 "})),l.createElement("div",{className:"flex-grow pl-6"},l.createElement("h2",{className:"text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2"},"Registries"),l.createElement("p",{className:"leading-relaxed text-base"},"Manage OCI registries. Add/edit/delete registries."))),l.createElement("div",{className:"p-4 md:w-1/4 flex"},l.createElement("div",{className:"w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-purple-700 mb-4 flex-shrink-0"},l.createElement(i.G,{size:"2x",icon:d.Kb6,className:"w-6 h-6 "})),l.createElement("div",{className:"flex-grow pl-6"},l.createElement("h2",{className:"text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2"},"Proxy"),l.createElement("p",{className:"leading-relaxed text-base"},"Configure your proxy settings."))),l.createElement("div",{className:"p-4 md:w-1/4 flex"},l.createElement("div",{className:"w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-purple-700 mb-4 flex-shrink-0"},l.createElement(i.G,{size:"2x",icon:d.Kb6,className:"w-6 h-6 "})),l.createElement("div",{className:"flex-grow pl-6"},l.createElement("h2",{className:"text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2"},"Resources Utilization"),l.createElement("p",{className:"leading-relaxed text-base"},"Configure CPU/Memory/Disk of Podman machines."))),l.createElement("div",{className:"p-4 md:w-1/4 flex"},l.createElement("div",{className:"w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-purple-700 mb-4 flex-shrink-0"},l.createElement(i.G,{size:"2x",icon:d.Kb6,className:"w-6 h-6 "})),l.createElement("div",{className:"flex-grow pl-6"},l.createElement("h2",{className:"text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2"},"Container Engines"),l.createElement("p",{className:"leading-relaxed text-base"},"Handle multiple container engines at the same time: Podman, Docker.")))))))}function w(){return l.createElement("section",{className:"text-gray-900 dark:text-gray-400 dark:bg-charcoal-600 bg-zinc-200 body-font py-24"},l.createElement("div",{className:"container px-5 mx-auto flex flex-wrap"},l.createElement("div",{className:"flex flex-col text-center w-full mb-5"},l.createElement(E,{name:"enterprise"}),l.createElement("h2",{className:"max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mx-auto"},"Enterprise ready")),l.createElement("div",{className:"container px-5 pb-5 mx-auto"},l.createElement("h1",{className:"sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 dark:text-gray-100 mb-20"},"Match configuration options."),l.createElement("div",{className:"flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6"},l.createElement("div",{className:"p-4 md:w-1/3 flex"},l.createElement("div",{className:"w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-purple-700 mb-4 flex-shrink-0"},l.createElement(i.G,{size:"2x",icon:d.Ua$,className:"w-6 h-6 "})),l.createElement("div",{className:"flex-grow pl-6"},l.createElement("h2",{className:"text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2"},"Code signing"),l.createElement("p",{className:"leading-relaxed text-base"},"Signed binaries for both macOS and Windows"))),l.createElement("div",{className:"p-4 md:w-1/3 flex"},l.createElement("div",{className:"w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-purple-800 mb-4 flex-shrink-0"},l.createElement(i.G,{size:"2x",icon:d.zoY,className:"w-6 h-6 "})),l.createElement("div",{className:"flex-grow pl-6"},l.createElement("h2",{className:"text-gray-900 dark:text-gray-100  text-lg title-font font-medium mb-2"},"Proxy"),l.createElement("p",{className:"leading-relaxed text-base"},"Configure proxy within the tool. Avoid any painful files to edit."))),l.createElement("div",{className:"p-4 md:w-1/3 flex"},l.createElement("div",{className:"w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-purple-800 mb-4 flex-shrink-0"},l.createElement(i.G,{size:"2x",icon:d.Kb6,className:"w-6 h-6 "})),l.createElement("div",{className:"flex-grow pl-6"},l.createElement("h2",{className:"text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2"},"Registries"),l.createElement("p",{className:"leading-relaxed text-base"},"Manage OCI registries. Add/edit/delete registries.")))))))}function v(){return l.createElement("section",{className:"text-gray-900 dark:text-gray-400 dark:bg-charcoal-600 bg-zinc-200 body-font"},l.createElement("div",{className:"container px-5 py-24 mx-auto flex flex-wrap"},l.createElement("div",{className:"flex flex-col text-center w-full mb-5"},l.createElement("h2",{className:"max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mx-auto"},"Available on Windows, Mac and Linux"),l.createElement("p",{className:"text-base text-gray-900 md:text-lg dark:text-gray-400"},"Use the same UI across different operating systems")),l.createElement("div",{className:"flex flex-wrap w-full justify-center"},l.createElement("div",{className:"p-4 w-11/12 md:w-1/2 lg:w-1/3"},l.createElement("div",{className:"flex rounded-lg h-full bg-zinc-100 dark:bg-charcoal-800 bg-opacity-60 p-8 flex-col"},l.createElement(r.Z,{title:"Download for Windows",className:"no-underline hover:no-underline text-gray-900 dark:text-white hover:dark:text-violet-600 ",to:"/downloads/Windows"},l.createElement("div",{className:"flex items-center mb-3 flex-col"},l.createElement(i.G,{size:"4x",icon:o.ts2}),l.createElement("div",{className:"inline-flex items-center justify-center rounded-full text-gray-900 dark:text-gray-400 flex-shrink-0"}),l.createElement("h2",{className:" text-lg title-font font-medium"}," Windows"))),l.createElement("div",{className:"flex-grow"},l.createElement("div",{className:"flex-grow w-full"},l.createElement("p",{className:"text-base text-center"},"exe or setup.exe"))))),l.createElement("div",{className:"p-4 w-11/12 md:w-1/2 lg:w-1/3"},l.createElement("div",{className:"flex rounded-lg h-full bg-zinc-100 dark:bg-charcoal-800 bg-opacity-60 p-8 flex-col"},l.createElement(r.Z,{title:"Download for macOS",className:"no-underline hover:no-underline text-gray-900 dark:text-white hover:dark:text-violet-600 ",to:"/downloads/macOS"},l.createElement("div",{className:"flex items-center mb-3 flex-col"},l.createElement(i.G,{size:"4x",icon:o.Av$}),l.createElement("div",{className:"inline-flex items-center justify-center rounded-full text-gray-900 dark:text-gray-400 flex-shrink-0"}),l.createElement("h2",{className:" text-lg title-font font-medium"}," macOS"))),l.createElement("div",{className:"flex-grow w-full"},l.createElement("p",{className:"text-base text-center"},"arm64, x64 or unified dmg"),l.createElement("p",{className:"text-base text-center"},l.createElement(i.G,{size:"1x",icon:d.v8y,className:"ml-2"})," brew install podman-desktop",l.createElement("button",{title:"Copy To Clipboard",className:"mr-5"},l.createElement(i.G,{size:"1x",icon:d.O4,className:"ml-3  cursor-pointer text-3xl  text-white-500",onClick:()=>{(async()=>{await navigator.clipboard.writeText("brew install podman-desktop")})().catch((e=>{console.error("unable to copy instructions",e)}))}})))))),l.createElement("div",{className:"p-4 w-11/12 md:w-1/2 lg:w-1/3"},l.createElement("div",{className:"flex rounded-lg h-full bg-zinc-100 dark:bg-charcoal-800 bg-opacity-60 p-8 flex-col"},l.createElement(r.Z,{title:"Download for Linux",className:"no-underline hover:no-underline text-gray-900 dark:text-white hover:dark:text-violet-600 ",to:"/downloads/Linux"},l.createElement("div",{className:"flex items-center mb-3 flex-col"},l.createElement(i.G,{size:"4x",icon:o.qJE}),l.createElement("div",{className:"inline-flex items-center justify-center rounded-full text-gray-900 dark:text-gray-400 flex-shrink-0"}),l.createElement("h2",{className:" text-lg title-font font-medium"}," Linux"))),l.createElement("div",{className:"flex-grow"},l.createElement("p",{className:"text-base text-center"},"Flatpak or AMD64 binary (tar.gz)")))))))}function y(){return l.createElement("section",{className:"text-gray-900 dark:text-gray-400 dark:bg-charcoal-800 bg-zinc-100 body-font py-24"},l.createElement("div",{className:"container px-5 mx-auto flex flex-wrap"},l.createElement("div",{className:"flex flex-col text-center w-full mb-5"},l.createElement(E,{name:"features"}),l.createElement("h2",{className:"max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mx-auto"},"Build, run and manage containers.")),l.createElement("div",{className:"container px-5 pb-5 mx-auto"},l.createElement("div",{className:"flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6"},l.createElement("div",{className:"p-4 md:w-1/4 flex"},l.createElement("div",{className:"w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-purple-700 mb-4 flex-shrink-0"},l.createElement(i.G,{size:"2x",icon:d.Obi,className:"w-6 h-6 "})),l.createElement("div",{className:"flex-grow pl-6"},l.createElement("h2",{className:"text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2"},"Build"),l.createElement("p",{className:"leading-relaxed text-base list-disc"},l.createElement(i.G,{icon:d.ESn,className:"text-purple-700 w-3 h-3 mt-1 mr-2"}),"Build images from Containerfile or Dockerfile"))),l.createElement("div",{className:"p-4 md:w-1/4 flex"},l.createElement("div",{className:"w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-purple-700 mb-4 flex-shrink-0"},l.createElement(i.G,{size:"2x",icon:d.tMT,className:"w-6 h-6 "})),l.createElement("div",{className:"flex-grow pl-6"},l.createElement("h2",{className:"text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2"},"Run"),l.createElement("p",{className:"leading-relaxed text-base list-disc"},l.createElement(i.G,{icon:d.Bkj,className:"text-purple-700 w-3 h-3 mt-1 mr-2"}),"Pull images from remote registries"),l.createElement("p",{className:"leading-relaxed text-base list-disc"},l.createElement(i.G,{icon:d.ESn,className:"text-purple-700 w-3 h-3 mt-1 mr-2"}),"Start / Stop / Restart containers"))),l.createElement("div",{className:"p-4 md:w-1/4 flex"},l.createElement("div",{className:"w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-purple-800 mb-4 flex-shrink-0"},l.createElement(i.G,{size:"2x",icon:d.ESn,className:"w-6 h-6 "})),l.createElement("div",{className:"flex-grow pl-6"},l.createElement("h2",{className:"text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2"},"Inspect"),l.createElement("p",{className:"leading-relaxed text-base list-disc"},l.createElement(i.G,{icon:d.tMT,className:"text-purple-700 w-3 h-3 mt-1 mr-2"}),"Get a terminal in your container"),l.createElement("p",{className:"leading-relaxed text-base list-disc"},l.createElement(i.G,{icon:d.tMT,className:"text-purple-700 w-3 h-3 mt-1 mr-2"}),"Inspect logs"))),l.createElement("div",{className:"p-4 md:w-1/4 flex"},l.createElement("div",{className:"w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-purple-800 mb-4 flex-shrink-0"},l.createElement(i.G,{size:"2x",icon:d.Bkj,className:"w-6 h-6 "})),l.createElement("div",{className:"flex-grow pl-6"},l.createElement("h2",{className:"text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2"},"Push"),l.createElement("p",{className:"leading-relaxed text-base list-disc"},l.createElement(i.G,{icon:d.tMT,className:"text-purple-700 w-3 h-3 mt-1 mr-2"}),"Push images to OCI registries"),l.createElement("p",{className:"leading-relaxed text-base list-disc"},l.createElement(i.G,{icon:d.tMT,className:"text-purple-700 w-3 h-3 mt-1 mr-2"}),"Deploy & Test images on Kubernetes")))))),l.createElement("div",{className:"container px-5 mx-auto flex flex-wrap"},l.createElement("div",{className:"flex flex-col text-center w-full mb-5"},l.createElement(r.Z,{title:"Discover More",className:"no-underline hover:no-underline text-gray-900 dark:text-white hover:dark:text-violet-600 ",to:"/features"},l.createElement("div",{className:"mt-3 text-purple-800 dark:text-purple-400 inline-flex items-center"},"Discover More",l.createElement("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",className:"w-4 h-4 ml-2",viewBox:"0 0 24 24"},l.createElement("path",{d:"M5 12h14M12 5l7 7-7 7"})))))))}function k(){return l.createElement("section",{className:"text-gray-900 dark:text-gray-400 dark:bg-charcoal-600 bg-zinc-200 body-font py-24"},l.createElement("div",{className:"container px-5 mx-auto flex flex-wrap"},l.createElement("div",{className:"flex flex-col text-center w-full mb-5"},l.createElement(E,{name:"features"}),l.createElement("h2",{className:"max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mx-auto"},"Work with Pods and Kubernetes")),l.createElement("div",{className:"container px-5 pb-5 mx-auto"},l.createElement("div",{className:"flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6"},l.createElement("div",{className:"p-4 md:w-1/2 flex"},l.createElement("div",{className:"w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-purple-700 mb-4 flex-shrink-0"},l.createElement(i.G,{size:"2x",icon:d.Obi,className:"w-6 h-6 "})),l.createElement("div",{className:"flex-grow pl-6"},l.createElement("h2",{className:"text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2"},"Working with pods"),l.createElement("p",{className:"leading-relaxed text-base list-disc"},l.createElement(i.G,{icon:d.Bkj,className:"text-purple-700 w-3 h-3 mt-1 mr-2"}),l.createElement("a",{href:"docs/getting-started/creating-a-pod"},"Create Pods from existing containers")),l.createElement("p",{className:"leading-relaxed text-base list-disc"},l.createElement(i.G,{icon:d.ESn,className:"text-purple-700 w-3 h-3 mt-1 mr-2"}),"Create, start, inspect and manage pods"))),l.createElement("div",{className:"p-4 md:w-1/2 flex"},l.createElement("div",{className:"w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-purple-800 mb-4 flex-shrink-0"},l.createElement(i.G,{size:"2x",icon:d.ESn,className:"w-6 h-6 "})),l.createElement("div",{className:"flex-grow pl-6"},l.createElement("h2",{className:"text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2"},"Working with Kubernetes"),l.createElement("p",{className:"leading-relaxed text-base list-disc"},l.createElement(i.G,{icon:d.tMT,className:"text-purple-700 w-3 h-3 mt-1 mr-2"}),"Play Kubernetes YAML directly with Podman Engine"),l.createElement("p",{className:"leading-relaxed text-base list-disc"},l.createElement(i.G,{icon:d.tMT,className:"text-purple-700 w-3 h-3 mt-1 mr-2"}),"Generate Kubernetes YAML from pods"),l.createElement("p",{className:"leading-relaxed text-base list-disc"},l.createElement(i.G,{icon:d.tMT,className:"text-purple-700 w-3 h-3 mt-1 mr-2"}),l.createElement("a",{href:"docs/kubernetes/deploying-a-pod-to-kubernetes"},"Deploy to existing Kubernetes environments")),l.createElement("p",{className:"leading-relaxed text-base list-disc"},l.createElement(i.G,{icon:d.tMT,className:"text-purple-700 w-3 h-3 mt-1 mr-2"}),l.createElement("a",{href:"docs/kubernetes/kind"},"Running Kubernetes on your workstation with Kind and Podman"))))))),l.createElement("div",{className:"container px-5 mx-auto flex flex-wrap"},l.createElement("div",{className:"flex flex-col text-center w-full mb-5"},l.createElement(r.Z,{title:"Discover More",className:"no-underline hover:no-underline text-gray-900 dark:text-white hover:dark:text-violet-600 ",to:"/features"},l.createElement("div",{className:"mt-3 text-purple-800 dark:text-purple-400 inline-flex items-center"},"Discover More",l.createElement("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",className:"w-4 h-4 ml-2",viewBox:"0 0 24 24"},l.createElement("path",{d:"M5 12h14M12 5l7 7-7 7"})))))))}function G(){return l.createElement(n.Z,{title:"Podman Desktop - Containers and Kubernetes",description:"Podman Desktop - An open source graphical tool for developing on containers and Kubernetes"},l.createElement(c.Z,null),l.createElement(p,null),l.createElement(v,null),l.createElement(y,null),l.createElement(k,null),l.createElement(h,null),l.createElement(b,null),l.createElement(N,null),l.createElement(w,null))}}}]);
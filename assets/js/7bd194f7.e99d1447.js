"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[2293],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294),r=t(6010);const l="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(7462),r=t(7294),l=t(6010),i=t(2466),o=t(6550),s=t(1980),u=t(7392),c=t(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=m(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[s,u]=g({queryString:t,groupId:a}),[p,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,c.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),v=(()=>{const e=s??p;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var v=t(2389);const b="tabList__CuJ",y="tabItem_LNqP";function h(e){let{className:n,block:t,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const n=e.currentTarget,t=c.indexOf(n),a=u[t].value;a!==o&&(p(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>c.push(e),onKeyDown:d,onClick:m},i,{className:(0,l.Z)("tabs__item",y,i?.className,{"tabs__item--active":o===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function x(e){const n=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b)},r.createElement(h,(0,a.Z)({},e,n)),r.createElement(k,(0,a.Z)({},e,n)))}function w(e){const n=(0,v.Z)();return r.createElement(x,(0,a.Z)({key:String(n)},e))}},4153:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=t(7462),r=(t(7294),t(3905)),l=t(4866),i=t(5162);const o={},s="Angular",u={unversionedId:"extras/lang/angular",id:"extras/lang/angular",title:"Angular",description:"You can enable the extra with the :LazyExtras command.",source:"@site/docs/extras/lang/angular.md",sourceDirName:"extras/lang",slug:"/extras/lang/angular",permalink:"/extras/lang/angular",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/main/docs/extras/lang/angular.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Prettier",permalink:"/extras/formatting/prettier"},next:{title:"Ansible",permalink:"/extras/lang/ansible"}},c={},p=[{value:"Includes the following extras",id:"includes-the-following-extras",level:3},{value:"nvim-treesitter",id:"nvim-treesitter",level:2},{value:"nvim-lspconfig",id:"nvim-lspconfig",level:2},{value:"nvim-lspconfig",id:"nvim-lspconfig-1",level:2}],m={toc:p};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"angular"},(0,r.kt)("inlineCode",{parentName:"h1"},"Angular")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can enable the extra with the ",(0,r.kt)("inlineCode",{parentName:"p"},":LazyExtras")," command.\nPlugins marked as optional will only be configured if they are installed.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Alternatively, you can add it to your ",(0,r.kt)("code",null,"lazy.nvim")," imports"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/lazy.lua" {4}',title:'"lua/config/lazy.lua"',"{4}":!0},'require("lazy").setup({\n  spec = {\n    { "LazyVim/LazyVim", import = "lazyvim.plugins" },\n    { import = "lazyvim.plugins.extras.lang.angular" },\n    { import = "plugins" },\n  },\n})\n'))),(0,r.kt)("p",null,"Below you can find a list of included plugins and their default settings."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You don't need to copy the default settings to your config.\nThey are only shown here for reference.")),(0,r.kt)("h3",{id:"includes-the-following-extras"},"Includes the following extras"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/extras/lang/typescript"},"lang.typescript"))),(0,r.kt)("h2",{id:"nvim-treesitter"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/nvim-treesitter/nvim-treesitter"},"nvim-treesitter")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  if type(opts.ensure_installed) == "table" then\n    vim.list_extend(opts.ensure_installed, { "angular", "scss" })\n  end\nend\n'))),(0,r.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-treesitter",\n  opts = function(_, opts)\n    if type(opts.ensure_installed) == "table" then\n      vim.list_extend(opts.ensure_installed, { "angular", "scss" })\n    end\n  end,\n}\n')))),(0,r.kt)("h2",{id:"nvim-lspconfig"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/neovim/nvim-lspconfig"},"nvim-lspconfig")),(0,r.kt)("p",null," LSP Servers"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  servers = {\n    angularls = {},\n  },\n  setup = {\n    angularls = function()\n      LazyVim.lsp.on_attach(function(client)\n        if client.name == "angularls" then\n          --HACK: disable angular renaming capability due to duplicate rename popping up\n          client.server_capabilities.renameProvider = false\n        end\n      end)\n    end,\n  },\n}\n'))),(0,r.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "neovim/nvim-lspconfig",\n  opts = {\n    servers = {\n      angularls = {},\n    },\n    setup = {\n      angularls = function()\n        LazyVim.lsp.on_attach(function(client)\n          if client.name == "angularls" then\n            --HACK: disable angular renaming capability due to duplicate rename popping up\n            client.server_capabilities.renameProvider = false\n          end\n        end)\n      end,\n    },\n  },\n}\n')))),(0,r.kt)("h2",{id:"nvim-lspconfig-1"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/neovim/nvim-lspconfig"},"nvim-lspconfig")),(0,r.kt)("p",null," Configure tsserver plugin"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  LazyVim.extend(opts.servers.vtsls, "settings.vtsls.tsserver.globalPlugins", {\n    {\n      name = "@angular/language-server",\n      location = LazyVim.get_pkg_path("angular-language-server", "/node_modules/@angular/language-server"),\n      enableForWorkspaceTypeScriptVersions = false,\n    },\n  })\nend\n'))),(0,r.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "neovim/nvim-lspconfig",\n  opts = function(_, opts)\n    LazyVim.extend(opts.servers.vtsls, "settings.vtsls.tsserver.globalPlugins", {\n      {\n        name = "@angular/language-server",\n        location = LazyVim.get_pkg_path("angular-language-server", "/node_modules/@angular/language-server"),\n        enableForWorkspaceTypeScriptVersions = false,\n      },\n    })\n  end,\n}\n')))))}d.isMDXComponent=!0}}]);
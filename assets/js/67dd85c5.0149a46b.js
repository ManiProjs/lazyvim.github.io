"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[7897],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=i,h=m["".concat(o,".").concat(d)]||m[d]||u[d]||r;return t?a.createElement(h,l(l({ref:n},c),{},{components:t})):a.createElement(h,l({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[m]="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),i=t(6010);const r="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,l),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(7462),i=t(7294),r=t(6010),l=t(2466),s=t(6550),o=t(1980),p=t(7392),c=t(12);function m(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??m(t);return function(e){const n=(0,p.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=u(e),[l,s]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[o,p]=h({queryString:t,groupId:a}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,c.Nk)(t);return[a,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),v=(()=>{const e=o??m;return d({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{v&&s(v)}),[v]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),f(e)}),[p,f,r]),tabValues:r}}var v=t(2389);const b="tabList__CuJ",k="tabItem_LNqP";function g(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),a=p[t].value;a!==s&&(m(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},p.map((e=>{let{value:n,label:t,attributes:l}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>c.push(e),onKeyDown:d,onClick:u},l,{className:(0,r.Z)("tabs__item",k,l?.className,{"tabs__item--active":s===n})}),t??n)})))}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function T(e){const n=f(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",b)},i.createElement(g,(0,a.Z)({},e,n)),i.createElement(y,(0,a.Z)({},e,n)))}function w(e){const n=(0,v.Z)();return i.createElement(T,(0,a.Z)({key:String(n)},e))}},5293:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var a=t(7462),i=(t(7294),t(3905)),r=t(4866),l=t(5162);const s={},o="Coding",p={unversionedId:"plugins/coding",id:"plugins/coding",title:"Coding",description:"nvim-cmp",source:"@site/docs/plugins/coding.md",sourceDirName:"plugins",slug:"/plugins/coding",permalink:"/plugins/coding",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/main/docs/plugins/coding.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Core Plugins",permalink:"/plugins/"},next:{title:"Colorscheme",permalink:"/plugins/colorscheme"}},c={},m=[{value:"nvim-cmp",id:"nvim-cmp",level:2},{value:"cmp-nvim-lsp",id:"cmp-nvim-lsp",level:2},{value:"cmp-buffer",id:"cmp-buffer",level:2},{value:"cmp-path",id:"cmp-path",level:2},{value:"nvim-snippets",id:"nvim-snippets",level:2},{value:"friendly-snippets",id:"friendly-snippets",level:2},{value:"mini.pairs",id:"minipairs",level:2},{value:"ts-comments.nvim",id:"ts-commentsnvim",level:2},{value:"mini.ai",id:"miniai",level:2},{value:"lazydev.nvim",id:"lazydevnvim",level:2},{value:"luvit-meta",id:"luvit-meta",level:2},{value:"nvim-cmp",id:"nvim-cmp-1",level:2},{value:"nvim-cmp",id:"nvim-cmp-2",level:2}],u={toc:m};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"coding"},"Coding"),(0,i.kt)("h2",{id:"nvim-cmp"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/hrsh7th/nvim-cmp"},"nvim-cmp")),(0,i.kt)("p",null," auto completion"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  vim.api.nvim_set_hl(0, "CmpGhostText", { link = "Comment", default = true })\n  local cmp = require("cmp")\n  local defaults = require("cmp.config.default")()\n  local auto_select = true\n  return {\n    auto_brackets = {}, -- configure any filetype to auto add brackets\n    completion = {\n      completeopt = "menu,menuone,noinsert" .. (auto_select and "" or ",noselect"),\n    },\n    preselect = auto_select and cmp.PreselectMode.Item or cmp.PreselectMode.None,\n    mapping = cmp.mapping.preset.insert({\n      ["<C-b>"] = cmp.mapping.scroll_docs(-4),\n      ["<C-f>"] = cmp.mapping.scroll_docs(4),\n      ["<C-n>"] = cmp.mapping.select_next_item({ behavior = cmp.SelectBehavior.Insert }),\n      ["<C-p>"] = cmp.mapping.select_prev_item({ behavior = cmp.SelectBehavior.Insert }),\n      ["<C-Space>"] = cmp.mapping.complete(),\n      ["<CR>"] = LazyVim.cmp.confirm({ select = auto_select }),\n      ["<C-y>"] = LazyVim.cmp.confirm({ select = true }),\n      ["<S-CR>"] = LazyVim.cmp.confirm({ behavior = cmp.ConfirmBehavior.Replace }), -- Accept currently selected item. Set `select` to `false` to only confirm explicitly selected items.\n      ["<C-CR>"] = function(fallback)\n        cmp.abort()\n        fallback()\n      end,\n      ["<tab>"] = function(fallback)\n        return LazyVim.cmp.map({ "snippet_forward", "ai_accept" }, fallback)()\n      end,\n    }),\n    sources = cmp.config.sources({\n      { name = "nvim_lsp" },\n      { name = "path" },\n    }, {\n      { name = "buffer" },\n    }),\n    formatting = {\n      format = function(entry, item)\n        local icons = LazyVim.config.icons.kinds\n        if icons[item.kind] then\n          item.kind = icons[item.kind] .. item.kind\n        end\n\n        local widths = {\n          abbr = vim.g.cmp_widths and vim.g.cmp_widths.abbr or 40,\n          menu = vim.g.cmp_widths and vim.g.cmp_widths.menu or 30,\n        }\n\n        for key, width in pairs(widths) do\n          if item[key] and vim.fn.strdisplaywidth(item[key]) > width then\n            item[key] = vim.fn.strcharpart(item[key], 0, width - 1) .. "\u2026"\n          end\n        end\n\n        return item\n      end,\n    },\n    experimental = {\n      -- only show ghost text when we show ai completions\n      ghost_text = vim.g.ai_cmp and {\n        hl_group = "CmpGhostText",\n      } or false,\n    },\n    sorting = defaults.sorting,\n  }\nend\n'))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "hrsh7th/nvim-cmp",\n  version = false, -- last release is way too old\n  event = "InsertEnter",\n  dependencies = {\n    "hrsh7th/cmp-nvim-lsp",\n    "hrsh7th/cmp-buffer",\n    "hrsh7th/cmp-path",\n  },\n  -- Not all LSP servers add brackets when completing a function.\n  -- To better deal with this, LazyVim adds a custom option to cmp,\n  -- that you can configure. For example:\n  --\n  -- ```lua\n  -- opts = {\n  --   auto_brackets = { "python" }\n  -- }\n  -- ```\n  opts = function()\n    vim.api.nvim_set_hl(0, "CmpGhostText", { link = "Comment", default = true })\n    local cmp = require("cmp")\n    local defaults = require("cmp.config.default")()\n    local auto_select = true\n    return {\n      auto_brackets = {}, -- configure any filetype to auto add brackets\n      completion = {\n        completeopt = "menu,menuone,noinsert" .. (auto_select and "" or ",noselect"),\n      },\n      preselect = auto_select and cmp.PreselectMode.Item or cmp.PreselectMode.None,\n      mapping = cmp.mapping.preset.insert({\n        ["<C-b>"] = cmp.mapping.scroll_docs(-4),\n        ["<C-f>"] = cmp.mapping.scroll_docs(4),\n        ["<C-n>"] = cmp.mapping.select_next_item({ behavior = cmp.SelectBehavior.Insert }),\n        ["<C-p>"] = cmp.mapping.select_prev_item({ behavior = cmp.SelectBehavior.Insert }),\n        ["<C-Space>"] = cmp.mapping.complete(),\n        ["<CR>"] = LazyVim.cmp.confirm({ select = auto_select }),\n        ["<C-y>"] = LazyVim.cmp.confirm({ select = true }),\n        ["<S-CR>"] = LazyVim.cmp.confirm({ behavior = cmp.ConfirmBehavior.Replace }), -- Accept currently selected item. Set `select` to `false` to only confirm explicitly selected items.\n        ["<C-CR>"] = function(fallback)\n          cmp.abort()\n          fallback()\n        end,\n        ["<tab>"] = function(fallback)\n          return LazyVim.cmp.map({ "snippet_forward", "ai_accept" }, fallback)()\n        end,\n      }),\n      sources = cmp.config.sources({\n        { name = "nvim_lsp" },\n        { name = "path" },\n      }, {\n        { name = "buffer" },\n      }),\n      formatting = {\n        format = function(entry, item)\n          local icons = LazyVim.config.icons.kinds\n          if icons[item.kind] then\n            item.kind = icons[item.kind] .. item.kind\n          end\n\n          local widths = {\n            abbr = vim.g.cmp_widths and vim.g.cmp_widths.abbr or 40,\n            menu = vim.g.cmp_widths and vim.g.cmp_widths.menu or 30,\n          }\n\n          for key, width in pairs(widths) do\n            if item[key] and vim.fn.strdisplaywidth(item[key]) > width then\n              item[key] = vim.fn.strcharpart(item[key], 0, width - 1) .. "\u2026"\n            end\n          end\n\n          return item\n        end,\n      },\n      experimental = {\n        -- only show ghost text when we show ai completions\n        ghost_text = vim.g.ai_cmp and {\n          hl_group = "CmpGhostText",\n        } or false,\n      },\n      sorting = defaults.sorting,\n    }\n  end,\n  main = "lazyvim.util.cmp",\n}\n')))),(0,i.kt)("h2",{id:"cmp-nvim-lsp"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/hrsh7th/cmp-nvim-lsp"},"cmp-nvim-lsp")),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "hrsh7th/cmp-nvim-lsp",\n  "hrsh7th/cmp-buffer",\n  "hrsh7th/cmp-path",\n}\n')))),(0,i.kt)("h2",{id:"cmp-buffer"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/hrsh7th/cmp-buffer"},"cmp-buffer")),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'"hrsh7th/cmp-buffer"\n')))),(0,i.kt)("h2",{id:"cmp-path"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/hrsh7th/cmp-path"},"cmp-path")),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'"hrsh7th/cmp-path"\n')))),(0,i.kt)("h2",{id:"nvim-snippets"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/garymjr/nvim-snippets"},"nvim-snippets")),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {\n  friendly_snippets = true,\n}\n"))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "garymjr/nvim-snippets",\n  opts = {\n    friendly_snippets = true,\n  },\n  dependencies = { "rafamadriz/friendly-snippets" },\n}\n')))),(0,i.kt)("h2",{id:"friendly-snippets"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/rafamadriz/friendly-snippets"},"friendly-snippets")),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{ "rafamadriz/friendly-snippets" }\n')))),(0,i.kt)("h2",{id:"minipairs"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/echasnovski/mini.pairs"},"mini.pairs")),(0,i.kt)("p",null," auto pairs"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  modes = { insert = true, command = true, terminal = false },\n  -- skip autopair when next character is one of these\n  skip_next = [=[[%w%%%\'%[%"%.%`%$]]=],\n  -- skip autopair when the cursor is inside these treesitter nodes\n  skip_ts = { "string" },\n  -- skip autopair when next character is closing pair\n  -- and there are more closing pairs than opening pairs\n  skip_unbalanced = true,\n  -- better deal with markdown code blocks\n  markdown = true,\n}\n'))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "echasnovski/mini.pairs",\n  event = "VeryLazy",\n  opts = {\n    modes = { insert = true, command = true, terminal = false },\n    -- skip autopair when next character is one of these\n    skip_next = [=[[%w%%%\'%[%"%.%`%$]]=],\n    -- skip autopair when the cursor is inside these treesitter nodes\n    skip_ts = { "string" },\n    -- skip autopair when next character is closing pair\n    -- and there are more closing pairs than opening pairs\n    skip_unbalanced = true,\n    -- better deal with markdown code blocks\n    markdown = true,\n  },\n  config = function(_, opts)\n    LazyVim.mini.pairs(opts)\n  end,\n}\n')))),(0,i.kt)("h2",{id:"ts-commentsnvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/folke/ts-comments.nvim"},"ts-comments.nvim")),(0,i.kt)("p",null," comments"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "folke/ts-comments.nvim",\n  event = "VeryLazy",\n  opts = {},\n}\n')))),(0,i.kt)("h2",{id:"miniai"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/echasnovski/mini.ai"},"mini.ai")),(0,i.kt)("p",null," Better text-objects"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local ai = require("mini.ai")\n  return {\n    n_lines = 500,\n    custom_textobjects = {\n      o = ai.gen_spec.treesitter({ -- code block\n        a = { "@block.outer", "@conditional.outer", "@loop.outer" },\n        i = { "@block.inner", "@conditional.inner", "@loop.inner" },\n      }),\n      f = ai.gen_spec.treesitter({ a = "@function.outer", i = "@function.inner" }), -- function\n      c = ai.gen_spec.treesitter({ a = "@class.outer", i = "@class.inner" }), -- class\n      t = { "<([%p%w]-)%f[^<%w][^<>]->.-</%1>", "^<.->().*()</[^/]->$" }, -- tags\n      d = { "%f[%d]%d+" }, -- digits\n      e = { -- Word with case\n        { "%u[%l%d]+%f[^%l%d]", "%f[%S][%l%d]+%f[^%l%d]", "%f[%P][%l%d]+%f[^%l%d]", "^[%l%d]+%f[^%l%d]" },\n        "^().*()$",\n      },\n      i = LazyVim.mini.ai_indent, -- indent\n      g = LazyVim.mini.ai_buffer, -- buffer\n      u = ai.gen_spec.function_call(), -- u for "Usage"\n      U = ai.gen_spec.function_call({ name_pattern = "[%w_]" }), -- without dot in function name\n    },\n  }\nend\n'))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "echasnovski/mini.ai",\n  event = "VeryLazy",\n  opts = function()\n    local ai = require("mini.ai")\n    return {\n      n_lines = 500,\n      custom_textobjects = {\n        o = ai.gen_spec.treesitter({ -- code block\n          a = { "@block.outer", "@conditional.outer", "@loop.outer" },\n          i = { "@block.inner", "@conditional.inner", "@loop.inner" },\n        }),\n        f = ai.gen_spec.treesitter({ a = "@function.outer", i = "@function.inner" }), -- function\n        c = ai.gen_spec.treesitter({ a = "@class.outer", i = "@class.inner" }), -- class\n        t = { "<([%p%w]-)%f[^<%w][^<>]->.-</%1>", "^<.->().*()</[^/]->$" }, -- tags\n        d = { "%f[%d]%d+" }, -- digits\n        e = { -- Word with case\n          { "%u[%l%d]+%f[^%l%d]", "%f[%S][%l%d]+%f[^%l%d]", "%f[%P][%l%d]+%f[^%l%d]", "^[%l%d]+%f[^%l%d]" },\n          "^().*()$",\n        },\n        i = LazyVim.mini.ai_indent, -- indent\n        g = LazyVim.mini.ai_buffer, -- buffer\n        u = ai.gen_spec.function_call(), -- u for "Usage"\n        U = ai.gen_spec.function_call({ name_pattern = "[%w_]" }), -- without dot in function name\n      },\n    }\n  end,\n  config = function(_, opts)\n    require("mini.ai").setup(opts)\n    LazyVim.on_load("which-key.nvim", function()\n      vim.schedule(function()\n        LazyVim.mini.ai_whichkey(opts)\n      end)\n    end)\n  end,\n}\n')))),(0,i.kt)("h2",{id:"lazydevnvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/folke/lazydev.nvim"},"lazydev.nvim")),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  library = {\n    { path = "luvit-meta/library", words = { "vim%.uv" } },\n    { path = "LazyVim", words = { "LazyVim" } },\n    { path = "snacks.nvim", words = { "Snacks" } },\n    { path = "lazy.nvim", words = { "LazyVim" } },\n  },\n}\n'))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "folke/lazydev.nvim",\n  ft = "lua",\n  cmd = "LazyDev",\n  opts = {\n    library = {\n      { path = "luvit-meta/library", words = { "vim%.uv" } },\n      { path = "LazyVim", words = { "LazyVim" } },\n      { path = "snacks.nvim", words = { "Snacks" } },\n      { path = "lazy.nvim", words = { "LazyVim" } },\n    },\n  },\n}\n')))),(0,i.kt)("h2",{id:"luvit-meta"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/Bilal2453/luvit-meta"},"luvit-meta")),(0,i.kt)("p",null," Manage libuv types with lazy. Plugin will never be loaded"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{ "Bilal2453/luvit-meta", lazy = true }\n')))),(0,i.kt)("h2",{id:"nvim-cmp-1"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/hrsh7th/nvim-cmp"},"nvim-cmp")),(0,i.kt)("p",null," snippets"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  opts.snippet = {\n    expand = function(item)\n      return LazyVim.cmp.expand(item.body)\n    end,\n  }\n  if LazyVim.has("nvim-snippets") then\n    table.insert(opts.sources, { name = "snippets" })\n  end\nend\n'))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-cmp",\n  optional = true,\n  dependencies = {\n    {\n      "garymjr/nvim-snippets",\n      opts = {\n        friendly_snippets = true,\n      },\n      dependencies = { "rafamadriz/friendly-snippets" },\n    },\n  },\n  opts = function(_, opts)\n    opts.snippet = {\n      expand = function(item)\n        return LazyVim.cmp.expand(item.body)\n      end,\n    }\n    if LazyVim.has("nvim-snippets") then\n      table.insert(opts.sources, { name = "snippets" })\n    end\n  end,\n}\n')))),(0,i.kt)("h2",{id:"nvim-cmp-2"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/hrsh7th/nvim-cmp"},"nvim-cmp")),(0,i.kt)("p",null," Add lazydev source to cmp"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  table.insert(opts.sources, { name = "lazydev", group_index = 0 })\nend\n'))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "hrsh7th/nvim-cmp",\n  optional = true,\n  opts = function(_, opts)\n    table.insert(opts.sources, { name = "lazydev", group_index = 0 })\n  end,\n}\n')))))}d.isMDXComponent=!0}}]);
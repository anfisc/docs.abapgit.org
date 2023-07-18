import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as d,c,a as e,b as a,d as t,w as l,e as i}from"./app-16f0cc3e.js";const h={},p=e("h2",{id:"object-types",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#object-types","aria-hidden":"true"},"#"),a(" Object Types")],-1),u=e("em",null,"new",-1),b=e("em",null,"not",-1),f=i('<p>Exceptions for existing objects:</p><ul><li>Transaction <code>ZABAPGIT</code></li><li>Program <code>ZABAPGIT</code> and includes</li><li>Function group <code>ZABAPGIT_PARALLEL</code> for parallel serialization (only available in the developer version)</li><li>MIME objects <code>ZABAPGIT_*</code> for UI (CSS, JS, and fonts)</li></ul><h2 id="conventions" tabindex="-1"><a class="header-anchor" href="#conventions" aria-hidden="true">#</a> Conventions</h2><h3 id="naming" tabindex="-1"><a class="header-anchor" href="#naming" aria-hidden="true">#</a> Naming</h3><h4 id="object-prefixing" tabindex="-1"><a class="header-anchor" href="#object-prefixing" aria-hidden="true">#</a> Object Prefixing</h4><p>Classes and interfaces are prefixed using <code>zcl_abapgit_</code> or <code>zif_abapgit_</code> (<code>zcx_abapgit_</code> for exception classes, <code>lcl_</code> and <code>ltcl_</code> for local and test classes). The description of objects should begin with <code>abapGit - ...</code>.</p><h4 id="variable-prefixing" tabindex="-1"><a class="header-anchor" href="#variable-prefixing" aria-hidden="true">#</a> Variable Prefixing</h4>',7),_={href:"http://docs.abapopenchecks.org/checks/69/",target:"_blank",rel:"noopener noreferrer"},g=e("h3",{id:"downport",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#downport","aria-hidden":"true"},"#"),a(" Downport")],-1),m=e("h4",{id:"syntax",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#syntax","aria-hidden":"true"},"#"),a(" Syntax")],-1),x={href:"https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm?file=abennews-71.htm",target:"_blank",rel:"noopener noreferrer"},y={href:"https://abaplint.org",target:"_blank",rel:"noopener noreferrer"},k=i('<h4 id="standard-objects" tabindex="-1"><a class="header-anchor" href="#standard-objects" aria-hidden="true">#</a> Standard Objects</h4><p>The code must only reference standard SAP objects (classes, interfaces, DDIC types) that exist in version 7.02 and higher. Referencing objects that do <em>not</em> exist in 7.02 creates syntax errors and therefore requires using dynamic ABAP. DDIC types that do <em>not</em> exist in 7.02 should be replaced by local type definitions.</p><h3 id="formatting-the-source-code" tabindex="-1"><a class="header-anchor" href="#formatting-the-source-code" aria-hidden="true">#</a> Formatting the Source Code</h3><h4 id="line-width" tabindex="-1"><a class="header-anchor" href="#line-width" aria-hidden="true">#</a> Line Width</h4><p>The maximum width of ABAP source code should be set at 120 characters per line and is checked during linting.</p><h4 id="pretty-printer" tabindex="-1"><a class="header-anchor" href="#pretty-printer" aria-hidden="true">#</a> Pretty Printer</h4>',6),w={href:"http://docs.abapopenchecks.org/checks/06/",target:"_blank",rel:"noopener noreferrer"},j=e("h3",{id:"dynpros",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dynpros","aria-hidden":"true"},"#"),a(" Dynpros")],-1),v=e("p",null,[a("For the user interface, we are moving towards everything in HTML, i.e. new Dynpro screens or the use of Dynpro screens and popups should "),e("em",null,"not"),a(" be added to the source code.")],-1),A=e("h3",{id:"abaplint",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#abaplint","aria-hidden":"true"},"#"),a(" abaplint")],-1),T={href:"https://github.com/abapGit/abapGit/blob/main/abaplint.json",target:"_blank",rel:"noopener noreferrer"},P={class:"hint-container info"},I=e("p",{class:"hint-container-title"},"Info",-1),E={href:"https://github.com/Marc-Bernard-Tools/ABAP-Lint-Ext-for-abapGit",target:"_blank",rel:"noopener noreferrer"},G=e("h3",{id:"internationalization-i18n",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#internationalization-i18n","aria-hidden":"true"},"#"),a(" Internationalization (I18N)")],-1),S=e("p",null,"abapGit supports only the English language. Neither objects nor text literals are translated. Therefore, all objects shall be set to English as the original language, and text literals in the code shall be maintained in English.",-1),B=e("p",null,[a("Since there's only one language, using the "),e("code",null,"##NO_TEXT"),a(" pragma is not required and will actually lead to lint errors. The exceptions are global class and interface definitions, where the pragmas are added automatically by "),e("code",null,"SE24/SE80"),a(".")],-1);function C(L,N){const o=r("RouterLink"),n=r("ExternalLinkIcon");return d(),c("div",null,[p,e("p",null,[a("abapGit is merged into a "),t(o,{to:"/user-guide/getting-started/install.html"},{default:l(()=>[a("stand-alone version")]),_:1}),a(". For this reason, the only allowed object types for "),u,a(" repository objects are classes and interfaces. In particular, function groups or modules must "),b,a(" be included.")]),f,e("p",null,[a("Variables are prefixed using the standard setting in "),e("a",_,[a("abapOpenChecks Naming Conventions"),t(n)])]),g,m,e("p",null,[a("abapGit is targeted for "),e("a",x,[a("version 7.02"),t(n)]),a(" and higher. Therefore, the code must only contain expressions and statements that work on 7.02.")]),e("p",null,[e("a",y,[a("abaplint"),t(n)]),a(" will automatically check every pull request for language syntax that is compatible with 7.02.")]),k,e("p",null,[a("Use pretty-printer, keywords upper case + indentation, "),e("a",w,[a("abapOpenChecks"),t(n)]),a(" can be used for checking this.")]),j,v,A,e("p",null,[a("Pull requests must pass all abaplint configured checks before they can be merged. You find the current rules in "),e("a",T,[a("abaplint.json"),t(n)]),a(".")]),e("div",P,[I,e("p",null,[a("You can view abaplint findings directly in abapGit using an "),e("a",E,[a("extension"),t(n)]),a(".")])]),G,S,B])}const O=s(h,[["render",C],["__file","guidelines.html.vue"]]);export{O as default};

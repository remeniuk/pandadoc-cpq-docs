"use strict";(self.webpackChunkpandadoc_cpq_docs=self.webpackChunkpandadoc_cpq_docs||[]).push([[390],{7557:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"how-to-guides/lookup-tables/how-to-use-lookup-tables","title":"Using Lookup Tables for Configuring Price Variations","description":"This guide explains how to use Lookup Tables in PandaDoc CPQ to dynamically configure product prices based on various factors such as region and sales quarter. Using Lookup Tables allows you to store complex pricing models and automatically apply the correct pricing to quotes.","source":"@site/docs/how-to-guides/06-lookup-tables/02-how-to-use-lookup-tables.md","sourceDirName":"how-to-guides/06-lookup-tables","slug":"/how-to-guides/lookup-tables/how-to-use-lookup-tables","permalink":"/pandadoc-cpq-docs/how-to-guides/lookup-tables/how-to-use-lookup-tables","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Using Lookup Tables for Configuring Price Variations"},"sidebar":"docsSidebar","previous":{"title":"How to Support Multi-Currency Using Lookup Tables","permalink":"/pandadoc-cpq-docs/how-to-guides/lookup-tables/how-to-use-lookup-for-multi-currency"},"next":{"title":"How to Manage Workflow Permissions in PandaDoc","permalink":"/pandadoc-cpq-docs/how-to-guides/workflow-permissions/manage-permissions"}}');var s=o(4848),r=o(8453);const l={title:"Using Lookup Tables for Configuring Price Variations"},t="Using Lookup Tables for Configuring Price Variations for Your Products",c={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Product Pricing Setup",id:"product-pricing-setup",level:2},{value:"Product Configuration in Workflow",id:"product-configuration-in-workflow",level:2},{value:"Mapping Lookup Tables to Workflow",id:"mapping-lookup-tables-to-workflow",level:2},{value:"Using Data Fields for Lookup Table Integration",id:"using-data-fields-for-lookup-table-integration",level:2},{value:"Example:",id:"example",level:3},{value:"Creating Lookup Tables",id:"creating-lookup-tables",level:2},{value:"Applying Lookup Tables in Rules",id:"applying-lookup-tables-in-rules",level:2},{value:"Example Rule:",id:"example-rule",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"using-lookup-tables-for-configuring-price-variations-for-your-products",children:"Using Lookup Tables for Configuring Price Variations for Your Products"})}),"\n",(0,s.jsxs)(n.p,{children:["This guide explains how to use ",(0,s.jsx)(n.strong,{children:"Lookup Tables"})," in PandaDoc CPQ to dynamically configure product prices based on various factors such as ",(0,s.jsx)(n.strong,{children:"region and sales quarter"}),". Using Lookup Tables allows you to store complex pricing models and automatically apply the correct pricing to quotes."]}),"\n",(0,s.jsx)("div",{style:{position:"relative",width:"100%",paddingBottom:"56.25%"},children:(0,s.jsx)("iframe",{src:"https://www.youtube.com/embed/bK9b5rvMKRE?si=Pqa6KhE8WOrdBuGe",title:"YouTube video player",frameborder:"0",allowfullscreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["If your business sells products across different regions and quarters, you may need to apply ",(0,s.jsx)(n.strong,{children:"variable pricing"})," based on these factors. Instead of manually managing multiple pricing rules, Lookup Tables allow you to ",(0,s.jsx)(n.strong,{children:"store and retrieve the correct price dynamically"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, assume you are selling ",(0,s.jsx)(n.strong,{children:"three products (LG, Samsung, Mitsubishi)"})," across ",(0,s.jsx)(n.strong,{children:"three regions"})," and ",(0,s.jsx)(n.strong,{children:"four quarters"}),". This results in ",(0,s.jsx)(n.strong,{children:"36 different price variations"}),". Lookup Tables enable you to ",(0,s.jsx)(n.strong,{children:"manage these variations efficiently"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"product-pricing-setup",children:"Product Pricing Setup"}),"\n",(0,s.jsx)(n.p,{children:"To configure product pricing using Lookup Tables:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Open the ",(0,s.jsx)(n.strong,{children:"Catalog"})," and ensure the products are created."]}),"\n",(0,s.jsx)(n.li,{children:"Define product SKUs, but leave pricing out of the catalog."}),"\n",(0,s.jsxs)(n.li,{children:["Instead of setting fixed prices, use Lookup Tables to fetch the price dynamically based on:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Quarter"})," (Q1, Q2, Q3, Q4)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Region"})," (e.g., Americas, EMEA, APAC)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"product-configuration-in-workflow",children:"Product Configuration in Workflow"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Navigate to ",(0,s.jsx)(n.strong,{children:"Workflows"})," and create a new workflow."]}),"\n",(0,s.jsxs)(n.li,{children:["Add a ",(0,s.jsx)(n.strong,{children:"Form Step"})," to capture:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Product selection"}),"\n",(0,s.jsx)(n.li,{children:"Quarter"}),"\n",(0,s.jsx)(n.li,{children:"Region"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Ensure the product selection field uses ",(0,s.jsx)(n.strong,{children:"SKU-based mapping"})," for consistency with Lookup Tables."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"mapping-lookup-tables-to-workflow",children:"Mapping Lookup Tables to Workflow"}),"\n",(0,s.jsx)(n.p,{children:"The workflow dynamically assigns the correct price by:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Retrieving the SKU from the ",(0,s.jsx)(n.strong,{children:"selected product"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Matching the SKU with the ",(0,s.jsx)(n.strong,{children:"Lookup Table"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Filtering by the ",(0,s.jsx)(n.strong,{children:"quarter"})," and ",(0,s.jsx)(n.strong,{children:"region"})," values provided in the form."]}),"\n",(0,s.jsxs)(n.li,{children:["Fetching the ",(0,s.jsx)(n.strong,{children:"correct price"})," and updating the quote accordingly."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"using-data-fields-for-lookup-table-integration",children:"Using Data Fields for Lookup Table Integration"}),"\n",(0,s.jsx)(n.p,{children:"To integrate Lookup Tables into your workflow:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Create a Quote Data Field"})," to store selected values."]}),"\n",(0,s.jsxs)(n.li,{children:["Use a ",(0,s.jsx)(n.strong,{children:"Rule"})," that:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Filters Lookup Table records by ",(0,s.jsx)(n.strong,{children:"product SKU"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Matches the ",(0,s.jsx)(n.strong,{children:"quarter"})," and ",(0,s.jsx)(n.strong,{children:"region"})," values."]}),"\n",(0,s.jsxs)(n.li,{children:["Retrieves and applies the ",(0,s.jsx)(n.strong,{children:"correct price"})," to the quote."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.strong,{children:"LG is sold in Q4 in the Americas"}),", the price should be ",(0,s.jsx)(n.strong,{children:"$2,100"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.strong,{children:"LG is sold in Q1 in the Americas"}),", the price should be ",(0,s.jsx)(n.strong,{children:"$1,800"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"creating-lookup-tables",children:"Creating Lookup Tables"}),"\n",(0,s.jsx)(n.p,{children:"To create a Lookup Table:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Prepare a ",(0,s.jsx)(n.strong,{children:"CSV file"})," with the following columns:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"SKU"}),"\n",(0,s.jsx)(n.li,{children:"Quarter"}),"\n",(0,s.jsx)(n.li,{children:"Region"}),"\n",(0,s.jsx)(n.li,{children:"Price"}),"\n",(0,s.jsx)(n.li,{children:"Currency"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.strong,{children:"Lookup Tables"})," in PandaDoc."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"+ New"})," and upload the CSV file."]}),"\n",(0,s.jsx)(n.li,{children:"Assign a meaningful name and description."}),"\n",(0,s.jsx)(n.li,{children:"Save the Lookup Table."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"applying-lookup-tables-in-rules",children:"Applying Lookup Tables in Rules"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Navigate to the ",(0,s.jsx)(n.strong,{children:"Rules Engine"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"+ New Rule"})," and select ",(0,s.jsx)(n.strong,{children:"Lookup Table Condition"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Configure the rule to:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Match SKU"})," from the form to the Lookup Table."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Match Quarter and Region"})," to filter the correct pricing row."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Set the rule to ",(0,s.jsx)(n.strong,{children:"update the price field"})," in the quote."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example-rule",children:"Example Rule:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"IF"})," SKU = Lookup Table SKU ",(0,s.jsx)(n.strong,{children:"AND"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Quarter = Lookup Table Quarter"})," ",(0,s.jsx)(n.strong,{children:"AND"})]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Region = Lookup Table Region"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"THEN"})," apply corresponding price and currency."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsxs)(n.p,{children:["Lookup Tables significantly ",(0,s.jsx)(n.strong,{children:"simplify pricing management"})," by centralizing product price variations. Instead of hardcoding multiple pricing rules, you can dynamically fetch prices based on predefined conditions. By integrating Lookup Tables with ",(0,s.jsx)(n.strong,{children:"Forms, Quotes, and Rules"}),", you can ensure accurate pricing across different sales scenarios."]}),"\n",(0,s.jsxs)(n.p,{children:["Now, try setting up a Lookup Table for your products and ",(0,s.jsx)(n.strong,{children:"enhance your pricing automation in PandaDoc CPQ"}),"!"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>t});var i=o(6540);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
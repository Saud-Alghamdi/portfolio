(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[4],{56:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));var c=r(7),a=r(1),s=[{id:1,title:"My Clubs",category:"Web Application",desc:"a football platform where you can follow your favorite clubs",techStack:"React, TypeScript, Firebase, Tailwind",url:"https://myclubs.lol",img:r.p+"static/media/myclubs-screenshot-mobile_iphone13blue_portrait.91b76bb2.png"},{id:2,title:"SEU Students",category:"Web Application",desc:"a platform for students of Saudi Electronic University to excel their education journey",techStack:"JavaScript, Node.js, Bootstrap",url:"https://seu-students.com",img:r.p+"static/media/seu-students-screenshot-mobile_iphone13blue_portrait.05908e71.png"},{id:3,title:"Random Number Code Generator",category:"Web Application",desc:"a web application that generates code that returns a random number",techStack:"JavaScript, Node.js, Bootstrap",url:"https://random-number-generator.site",img:r.p+"static/media/random-number-screenshot-mobile_iphone13blue_portrait.fa6f90af.png"}],i=r(4),n=Object(a.createContext)(),o=function(e){var t=Object(a.useState)(s),r=Object(c.a)(t,2),o=r[0],l=r[1],d=Object(a.useState)(""),u=Object(c.a)(d,2),j=u[0],b=u[1],m=Object(a.useState)(""),p=Object(c.a)(m,2),h=p[0],x=p[1],g=o.filter((function(e){return e.title.toLowerCase().includes(j.toLowerCase())||""===j?e:""})),y=o.filter((function(e){return(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(h)}));return Object(i.jsx)(n.Provider,{value:{projects:o,setProjects:l,searchProject:j,setSearchProject:b,searchProjectsByTitle:g,selectProject:h,setSelectProject:x,selectProjectsByCategory:y},children:e.children})}},57:function(e,t,r){"use strict";var c=r(1),a=r(54),s=r(4),i=function(e){var t=e.title,r=e.image,c=e.desc,i=e.techStack,n=e.url;return Object(s.jsx)(a.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:Object(s.jsx)("a",{href:n,"aria-label":"Single Project",target:"_blank",rel:"noopener noreferrer",children:Object(s.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:r,className:"rounded-t-xl border-none",alt:"Single Project"})}),Object(s.jsxs)("div",{className:" px-4 py-6",children:[Object(s.jsx)("p",{className:"text-center font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),Object(s.jsx)("p",{className:"text-lg text-center text-ternary-dark dark:text-ternary-light",children:c}),Object(s.jsx)("span",{className:"block mt-10 text-lg text-ternary-dark dark:text-ternary-light text-center",children:i})]})]})})})},n=r(56);t.a=function(){var e=Object(c.useContext)(n.a),t=e.projects,r=e.searchProject,a=e.searchProjectsByTitle,o=e.selectProject,l=e.selectProjectsByCategory;return Object(s.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10 ",id:"projects",children:[Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),Object(s.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20 sm:gap-10",children:o?l.map((function(e){return Object(s.jsx)(i,{title:e.title,image:e.img,desc:e.desc,techStack:e.techStack,url:e.url},e.id)})):r?a.map((function(e){return Object(s.jsx)(i,{title:e.title,image:e.img,desc:e.desc,techStack:e.techStack,url:e.url},e.id)})):t.map((function(e){return Object(s.jsx)(i,{title:e.title,image:e.img,desc:e.desc,techStack:e.techStack,url:e.url},e.id)}))})]})}},60:function(e,t,r){"use strict";r.r(t);var c=r(57),a=r(56),s=r(4);t.default=function(){return Object(s.jsx)(a.b,{children:Object(s.jsx)("div",{className:"container mx-auto",children:Object(s.jsx)(c.a,{})})})}}}]);
//# sourceMappingURL=4.d7377c53.chunk.js.map
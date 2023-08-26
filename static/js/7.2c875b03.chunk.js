(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[7],{63:function(e,t,i){"use strict";i.r(t);var a=i(1),s=i(7),r=i.p+"static/media/ui-project-1.41def4d8.jpg",o=i.p+"static/media/web-project-2.f0108702.jpg",l=i.p+"static/media/mobile-project-2.a5aae786.jpg",c=i.p+"static/media/mobile-project-1.0aa0cb76.jpg",n=i.p+"static/media/web-project-1.dbc2198e.jpg",d=i.p+"static/media/ui-project-2.d2891914.jpg",u=i(10),m=i(4),p={ProjectHeader:{title:"Project Management UI",publishDate:"Jul 26, 2021",tags:"UI / Frontend"},ProjectImages:[{id:1,title:"Kabul Project Management UI",img:r},{id:2,title:"Kabul Project Management UI",img:o},{id:3,title:"Kabul Project Management UI",img:l}],ProjectInfo:{ClientHeading:"About Client",CompanyInfo:[{id:1,title:"Name",details:"Company Ltd"},{id:2,title:"Services",details:"UI Design & Frontend Development"},{id:3,title:"Website",details:"https://company.com"},{id:4,title:"Phone",details:"555 8888 888"}],ObjectivesHeading:"Objective",ObjectivesDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",Technologies:[{title:"Tools & Technologies",techs:["HTML","CSS","JavaScript","Vue.js","TailwindCSS","AdobeXD"]}],ProjectDetailsHeading:"Challenge",ProjectDetails:[{id:1,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."},{id:2,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"},{id:3,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"},{id:4,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."}],SocialSharingHeading:"Share This",SocialSharing:[{id:1,name:"Twitter",icon:Object(m.jsx)(u.m,{}),url:"https://twitter.com/realstoman"},{id:2,name:"Instagram",icon:Object(m.jsx)(u.e,{}),url:"https://instagram.com/realstoman"},{id:3,name:"Facebook",icon:Object(m.jsx)(u.c,{}),url:"https://facebook.com/"},{id:4,name:"LinkedIn",icon:Object(m.jsx)(u.f,{}),url:"https://linkedin.com/"},{id:5,name:"Youtube",icon:Object(m.jsx)(u.o,{}),url:"https://www.youtube.com/c/StomanStudio"}]},RelatedProject:{title:"Related Projects",Projects:[{id:1,title:"Mobile UI",img:c},{id:2,title:"Web Application",img:n},{id:3,title:"UI Design",img:d},{id:4,title:"Kabul Mobile App UI",img:l}]}},j=Object(a.createContext)(),g=function(e){var t=e.children,i=Object(a.useState)(p),r=Object(s.a)(i,2),o=r[0],l=r[1];return Object(m.jsx)(j.Provider,{value:{singleProjectData:o,setSingleProjectData:l},children:t})},b=j,x=function(){var e=Object(a.useContext)(b).singleProjectData;return Object(m.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12",children:e.ProjectImages.map((function(e){return Object(m.jsx)("div",{className:"mb-10 sm:mb-0",children:Object(m.jsx)("img",{src:e.img,className:"project-image rounded-xl cursor-pointer shadow-lg sm:shadow-none",alt:e.title},e.id)},e.id)}))})},h=function(){var e=Object(a.useContext)(b).singleProjectData;return Object(m.jsxs)("div",{className:"block sm:flex gap-0 sm:gap-10 mt-14",children:[Object(m.jsxs)("div",{className:"w-full sm:w-1/3 text-left",children:[Object(m.jsxs)("div",{className:"mb-7",children:[Object(m.jsx)("p",{className:"font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2",children:e.ProjectInfo.ClientHeading}),Object(m.jsx)("ul",{className:"leading-loose",children:e.ProjectInfo.CompanyInfo.map((function(e){return Object(m.jsxs)("li",{className:"font-general-regular text-ternary-dark dark:text-ternary-light",children:[Object(m.jsxs)("span",{children:[e.title,": "]}),Object(m.jsx)("a",{href:"https://stoman.me",className:"Website"===e.title||"Phone"===e.title?"hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300":"","aria-label":"Project Website and Phone",children:e.details})]},e.id)}))})]}),Object(m.jsxs)("div",{className:"mb-7",children:[Object(m.jsx)("p",{className:"font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2",children:e.ProjectInfo.ObjectivesHeading}),Object(m.jsx)("p",{className:"font-general-regular text-primary-dark dark:text-ternary-light",children:e.ProjectInfo.ObjectivesDetails})]}),Object(m.jsxs)("div",{className:"mb-7",children:[Object(m.jsx)("p",{className:"font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2",children:e.ProjectInfo.Technologies[0].title}),Object(m.jsx)("p",{className:"font-general-regular text-primary-dark dark:text-ternary-light",children:e.ProjectInfo.Technologies[0].techs.join(", ")})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{className:"font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2",children:e.ProjectInfo.SocialSharingHeading}),Object(m.jsx)("div",{className:"flex items-center gap-3 mt-5",children:e.ProjectInfo.SocialSharing.map((function(e){return Object(m.jsx)("a",{href:e.url,target:"__blank","aria-label":"Share Project",className:"bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500",children:Object(m.jsx)("span",{className:"text-lg lg:text-2xl",children:e.icon})},e.id)}))})]})]}),Object(m.jsxs)("div",{className:"w-full sm:w-2/3 text-left mt-10 sm:mt-0",children:[Object(m.jsx)("p",{className:"font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7",children:e.ProjectInfo.ProjectDetailsHeading}),e.ProjectInfo.ProjectDetails.map((function(e){return Object(m.jsx)("p",{className:"font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light",children:e.details},e.id)}))]})]})},f=function(){var e=Object(a.useContext)(b).singleProjectData;return Object(m.jsxs)("div",{className:"mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark",children:[Object(m.jsx)("p",{className:"font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left",children:e.RelatedProject.title}),Object(m.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-4 gap-10",children:e.RelatedProject.Projects.map((function(e){return Object(m.jsx)("img",{src:e.img,className:"rounded-xl cursor-pointer",alt:e.title},e.id)}))})]})},O=i(54);t.default=function(){return Object(m.jsx)(O.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.6,delay:.15},className:"container mx-auto mt-5 sm:mt-10",children:Object(m.jsxs)(g,{children:[Object(m.jsx)(x,{}),Object(m.jsx)(h,{}),Object(m.jsx)(f,{})]})})}}}]);
//# sourceMappingURL=7.2c875b03.chunk.js.map
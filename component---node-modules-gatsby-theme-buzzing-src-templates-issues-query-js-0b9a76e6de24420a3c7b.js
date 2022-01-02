"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[990],{537:function(t,e,a){a.d(e,{Z:function(){return U}});var n=a(9231),r=a(1544),i=a(8568),l=a(8447),s=a(7359),u=a(9857),o=a.n(u),c=a(5814),Z=a(586),p=a(1189);function f(){return(0,n.tZ)(r.Ge.h4,null,(0,n.tZ)(p.c,null,"Tags"))}var h=function(t){var e=t.basePath,a=t.group;return(0,n.tZ)(s.xu,{"data-test":"tags-container"},(0,n.tZ)(f,null),(0,n.tZ)(s.kC,{sx:{mb:3,flexWrap:"wrap"}},a.map((function(t,a){var r=t.fieldValue,i=t.totalCount;return(0,n.tZ)(c.Z,{key:"tag-list-"+a,count:i,to:(0,l.withPrefix)((0,Z.join)(e,"/tags/"+o()(r)+"/"))},r)}))))},g=a(7896);function x(){return(0,n.tZ)(r.Ge.h4,null,(0,n.tZ)(p.c,null,"Links"))}var d=function(t){var e=t.links;return(0,n.tZ)(s.xu,{"data-test":"links-container"},(0,n.tZ)(x,null),(0,n.tZ)(r.Ge.ul,null,e?e.map((function(t,e){var a={};return t.external&&(a.target="_blank",a.rel="noopener noreferrer"),(0,n.tZ)("li",{key:"links-"+e},(0,n.tZ)(s.rU,(0,g.Z)({},a,{href:t.url}),t.name))})):null))},v=a(1461),m=(a(2784),a(5362)),b=a(3133),k=a(8778),w=["href","language"],y=function(t){var e=t.href,a=t.language,n=(0,v.Z)(t,w),r=(0,m.ql)(),i=r.defaultLang,l=r.locale,u=a||l;return(0,k.tZ)(s.rU,(0,g.Z)({},n,{href:(0,b.Mg)(i,u,e)}))},M=function(t){var e=t.pageContext,a=(e.locale,e.basePath,(0,l.useStaticQuery)("3025052997").site.siteMetadata.subscriptions);return(0,n.tZ)(s.xu,{"data-test":"subscription-container"},(0,n.tZ)(r.Ge.h4,{"data-test":"subscription-title"},(0,n.tZ)(p.c,null,"Subscription")),(0,n.tZ)(r.Ge.p,{sx:{color:"textMuted",fontSize:1}},(0,n.tZ)(p.c,null,"Subscribe to us in the following ways:")),(0,n.tZ)(r.Ge.ul,null,(0,n.tZ)("li",null,(0,n.tZ)(s.rU,{target:"_blank",rel:"noopener noreferrer",href:"https://t.me/joinchat/GVK5UiDwPUAwMjkx"},"Telegram Group")),a?a.map((function(t,e){var a={};return t.external?(a.target="_blank",a.rel="noopener noreferrer",(0,n.tZ)("li",{key:"links-"+e},(0,n.tZ)(s.rU,(0,g.Z)({},a,{href:t.url}),t.name))):(0,n.tZ)("li",{key:"links-"+e},(0,n.tZ)(s.rU,(0,g.Z)({as:y},a,{href:t.url}),t.name))})):null))},P=function(){return(0,n.tZ)(s.xu,{"data-test":"subscription-container"},(0,n.tZ)(r.Ge.h4,{"data-test":"subscription-title"},(0,n.tZ)(p.c,null,"Who is behind this?")),(0,n.tZ)(r.Ge.ul,null,(0,n.tZ)("li",null,(0,n.tZ)(s.rU,{href:"https://twitter.com/theowenyoung"},"Owen Young"))))},G=a(6975),U=function(t){var e=t.data,a=t.pageContext,l=t.siteMetadata,s=a.basePath,u=e.tagsGroup.group,o=l.social;return(0,n.tZ)(r.Ge.div,{"data-test":"aside",as:"aside",sx:{height:[null,null,"full"]}},(0,n.tZ)(r.Ge.div,{sx:{top:[null,null,4],position:[null,null,"sticky"],overflowY:[null,null,"auto"],height:[null,null,"calc(100vh - 32px)"],overscrollBehavior:[null,null,"contain"],px:[null,null,4]}},(0,n.tZ)(i.Z,{siteMetadata:l,basePath:s}),(0,n.tZ)(M,{pageContext:a}),(0,n.tZ)(G.Z,null),(0,n.tZ)(d,{siteMetadata:l,links:o}),(0,n.tZ)(P,{pageContext:a}),(0,n.tZ)(h,{basePath:s,group:u})))}},8832:function(t,e,a){a(2784);var n=a(5857),r=a(7359),i=a(8778);e.Z=function(){return(0,i.tZ)("footer",{css:(0,n.iv)({mt:4,pt:3,textAlign:"center"})},"© ",(new Date).getFullYear(),(0,i.tZ)(r.rU,{sx:{ml:4,mr:2},"data-test":"main-site-link",href:"https://www.buzzing.cc"},"Buzzing.cc"),(0,i.tZ)(r.rU,{sx:{mx:2,color:"textMuted"},"data-test":"privacy-link",href:"https://www.buzzing.cc/privacy"},"Privacy"),(0,i.tZ)(r.rU,{sx:{mx:2,color:"textMuted"},"data-test":"terms-link",href:"https://www.buzzing.cc/terms"},"Terms of Service")," ")}},9915:function(t,e,a){a(2784);var n=a(7035),r=a(3925),i=a(3133),l=a(8778);e.Z=function(t){var e=t.pageContext,a=t.siteMetadata,s=t.image,u=e.pageType,o=e.tag,c=e.currentPage,Z=e.date,p=c,f=(0,i.t)("description",a.localize,a.description,e.locale),h="",g=(0,i.t)("title",a.localize,a.title,e.locale);if("tag"===u){var x=r.Z.t("translation-tag__::::__"+o);f=x,h=r.Z.t("See all posts about {{tag}} at {{siteTitle}}",{tag:x,siteTitle:g})}else if("issues"===u)f=r.Z.t("Weekly Selection"),h=r.Z.t("{{siteTitle}} selects the most popular content for you each week",{siteTitle:g});else if("issue"===u){var d=" · "+Z;f=r.Z.t("Weekly Selection")+"-"+r.Z.t("Issue {{issueNumber}}","Issue "+p,{issueNumber:p})+d+" - "+g,h=r.Z.t("Click to view Issue {{issueNumber}} of {{siteTitle}}",{siteTitle:g,issueNumber:p})}return(0,l.tZ)(n.Z,{title:f,description:h,imageSource:"home"===u?null:s,siteMetadata:a})}},2876:function(t,e,a){var n=a(9231),r=a(1544),i=a(7359),l=a(8447),s=a(5362),u=a(1189),o=a(586),c=a.n(o);e.Z=function(t){var e=t.pageContext,a=e.pageType,o=e.tag,Z=e.basePath,p=e.currentPage,f=e.date,h=e.title,g=p;if("tag"===a)return(0,n.tZ)(r.Ge.h4,{"data-test":"list-title",sx:{fontWeight:"normal",mb:"1.5rem"}},(0,n.tZ)(i.rU,{sx:{color:"text"},as:s.UE,to:(0,l.withPrefix)(Z)},(0,n.tZ)(u.c,null,"All posts")),(0,n.tZ)("span",{sx:{color:"textMuted"}}," / "),(0,n.tZ)("span",{sx:{color:"textMuted"}},(0,n.tZ)(u.c,{ns:"translation-tag"},o)),p>1&&(0,n.tZ)("span",{sx:{color:"textMuted"}}," / "),p>1&&(0,n.tZ)("span",{sx:{color:"textMuted"}},(0,n.tZ)(u.c,{page:p},"page ",{page:g})));var x="Latest",d=Z;"issues"===a||"issue"===a?(x="Weekly Selection",d=c().join(Z,"issues")):"archives"!==a&&"archive"!==a||(x="Archive",d=c().join(Z,"archive"));var v=g;return(0,n.tZ)(r.Ge.h4,{"data-test":"list-title",sx:{fontWeight:"normal",mb:"1.5rem"}},p>1?(0,n.tZ)(i.rU,{sx:{color:"text"},as:s.UE,to:(0,l.withPrefix)(d)},(0,n.tZ)(u.c,null,x)):(0,n.tZ)(u.c,null,x),(p>1||"issue"===a||"archive"===a)&&(0,n.tZ)("span",{sx:{color:"textMuted"}}," / "),(p>1||"issue"===a||"archive"===a)&&(0,n.tZ)("span",{sx:{color:"textMuted"}},"issue"===a?(0,n.tZ)(u.c,{page:p},"Issue ",{issueNumber:v}):"archive"===a?(0,n.tZ)("span",null,h):(0,n.tZ)(u.c,{page:p},"page ",{page:g})),"issue"===a?(0,n.tZ)("span",{sx:{color:"textMuted"}}," · "+f):null)}},7296:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}});var n=a(7139),r=a(8832),i=a(9231),l=a(7359),s=a(2876),u=a(537),o=a(9915),c=a(1544),Z=a(5362),p=a(8447),f=a(586),h=a.n(f),g=a(1189),x=function(t){var e=t.item,a=t.basePath,n=e.issueNumber;return(0,i.tZ)(c.Ge.li,{sx:{fontSize:2}},(0,i.tZ)(l.rU,{as:Z.UE,to:(0,p.withPrefix)(h().join(a,"issues/"+e.issueNumber+"/"))},(0,i.tZ)(g.c,null,"Issue ",{issueNumber:n})),"- ",(0,i.tZ)("span",null,e.date))},d=function(t){return(0,i.tZ)(c.Ge.div,{as:"article"},(0,i.tZ)(x,t))},v=function(t){var e=t.items,a=t.basePath,n={};e.forEach((function(t){n[t.year]||(n[t.year]=[]),n[t.year].push(t)}));var r=Object.keys(n).sort((function(t,e){return e-t}));return(0,i.tZ)("div",null,r.map((function(t){var e=n[t];return(0,i.tZ)("div",{sx:{pb:3},key:t},(0,i.tZ)(c.Ge.h4,null,t),e.map((function(t,e){return(0,i.tZ)(d,{key:"item-box-"+e,basePath:a,item:t})})))})))},m=function(t){var e=t.location,a=t.data,c=t.pageContext,Z=c.basePath,p=c.pageType,f=a.allIssue.nodes,h=a.site.siteMetadata,g=h.title,x=h.menuLinks;return(0,i.tZ)(n.Z,{basePath:Z,location:e,menuLinks:x,title:g,pageType:p,pageContext:c,siteMetadata:h},(0,i.tZ)(o.Z,{pageContext:c,siteMetadata:h}),(0,i.tZ)(s.Z,{pageContext:c}),(0,i.tZ)(l.rj,{gap:[null,null,3,4],columns:[1,1,"2fr 1fr"]},(0,i.tZ)("main",{sx:{minWidth:0}},(0,i.tZ)(v,{items:f,basePath:Z})),(0,i.tZ)(u.Z,{location:e,data:a,pageContext:c,siteMetadata:h})),(0,i.tZ)(r.Z,null))}}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-buzzing-src-templates-issues-query-js-0b9a76e6de24420a3c7b.js.map
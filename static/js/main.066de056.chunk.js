(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={item:"Statistics_item__2OWTg"}},,,function(e,t,n){e.exports={btn:"FeedbackOptions_btn__28w8e",btnList:"FeedbackOptions_btnList__3fv-p",good:"FeedbackOptions_good__3OOzf",neutral:"FeedbackOptions_neutral__14VQ_",bad:"FeedbackOptions_bad__2SCTy"}},function(e,t,n){e.exports={section:"Section_section__3QKCW",title:"Section_title__1S-9F"}},,function(e,t,n){e.exports={notification:"Notification_notification__3MD22"}},function(e,t,n){e.exports={container:"Container_container__2NUwb"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(7),s=n.n(i),o=(n(14),n(3)),r=n(5),b=n.n(r),d=n(0);function l(e){var t=e.options,n=e.onLeaveFeedback;return Object(d.jsx)("div",{className:b.a.btnList,children:t.map((function(e){return Object(d.jsx)("button",{type:"button",className:b.a.btn,onClick:function(){return n(e)},children:e},e)}))})}var u=n(2),j=n.n(u);function O(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,i=e.positivePercentage;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("p",{className:j.a.item,children:["Good: ",t]}),Object(d.jsxs)("p",{className:j.a.item,children:["Neutral: ",n]}),Object(d.jsxs)("p",{className:j.a.item,children:["Bad: ",c]}),Object(d.jsxs)("p",{className:j.a.item,children:["Total: ",a]}),Object(d.jsxs)("p",{className:j.a.item,children:["Positive feedback: ",i," %"]})]})}var f=n(8),_=n.n(f),h=function(e){var t=e.message;return Object(d.jsx)("p",{className:_.a.notification,children:t})},p=n(6),x=n.n(p);var m=function(e){var t=e.title,n=e.children;return Object(d.jsxs)("section",{className:x.a.section,children:[t&&Object(d.jsx)("h2",{className:x.a.title,children:t}),n]})},v=n(9),k=n.n(v);var g=function(e){var t=e.children;return Object(d.jsx)("div",{className:k.a.container,children:t})};function N(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(0),s=Object(o.a)(i,2),r=s[0],b=s[1],u=Object(c.useState)(0),j=Object(o.a)(u,2),f=j[0],_=j[1],p=function(){return n+r+f},x=p(),v=Math.round(n/p()*100);return Object(d.jsxs)(g,{children:[Object(d.jsx)(m,{title:"Please leave feedback",children:Object(d.jsx)(l,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e){case"good":a((function(e){return e+1}));break;case"neutral":b((function(e){return e+1}));break;case"bad":_((function(e){return e+1}));break;default:return}}})}),Object(d.jsx)(m,{title:"Statistics",children:x?Object(d.jsx)(O,{good:n,neutral:r,bad:f,total:x,positivePercentage:v}):Object(d.jsx)(h,{message:"No feedback given"})})]})}s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.066de056.chunk.js.map
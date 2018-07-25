webpackJsonp([13],{2254:function(e,t,a){"use strict";function n(e){var t=e.name,a=e.avatar,n=e.task,l=e.tasker,r=e.challengeSlug,i=e.contestSlug,s=e.content,c=e.dataAnalytics,o=e.className,d={username:t,avatar:a},u={attribute1:"ChallegeEditorial",attribute2:t,attribute3:i||"master",attribute4:r};return b.a.createElement("section",{className:C()("challenge-editorial-block",o)},!!t&&b.a.createElement("div",{className:"editorial-subsection-header"},b.a.createElement(R.a,{avatar:a,name:t,avatarClass:"avatar"}),b.a.createElement("h2",{className:"d-inline align-middle editorial-subsection-heading"},n+" by "),b.a.createElement(I.a,{user:d,analyticsAttributes:u},b.a.createElement(L.a,{username:t,newTab:!0,linkAttributes:{className:"align-middle profile-card","data-analytics":c||"Editorial"+l+"UserName","data-attr1":r,"data-attr2":t}}))),!!l&&b.a.createElement("div",{className:"editorial-header-box"},b.a.createElement("p",{className:"editorial-header-para"},"Problem "+l+"'s code:")),!!s&&b.a.createElement("div",{className:"editorial-code-box"},b.a.createElement("div",{className:"hackdown-content",dangerouslySetInnerHTML:{__html:s}})))}function l(e){var t=e.title,a=e.value,n=e.className,l=e.htmlContent;return b.a.createElement("div",{className:"editorial-details"},b.a.createElement("span",{className:"editorial-sec-headline"},t+": "),l?b.a.createElement("div",{className:C()("editorial-sec-text html-content",n),dangerouslySetInnerHTML:{__html:l}}):b.a.createElement("span",{className:C()("editorial-sec-text",n)},a))}Object.defineProperty(t,"__esModule",{value:!0}),t.ChallengeEditorialCode=n,t.SidebarItem=l,a.d(t,"PureChallengeEditorial",function(){return U});var r=a(74),i=a.n(r),s=a(7),c=a.n(s),o=a(4),d=a.n(o),u=a(8),m=a.n(u),g=a(5),h=a.n(g),p=a(6),v=a.n(p),E=a(0),b=a.n(E),f=a(1),_=a.n(f),N=a(105),k=a(9),y=a.n(k),S=a(11),C=a.n(S),w=a(124),j=a(1095),T=a(29),O=a(1086),q=a(700),x=a(305),R=a(28),A=a(1175),I=a(1335),L=a(1161),P=a(2255);a.n(P);n.propTypes={name:_.a.string.isRequired,task:_.a.string.isRequired,tasker:_.a.string,content:_.a.string,avatar:_.a.string,challengeSlug:_.a.string,dataAnalytics:_.a.string,className:_.a.string},l.propTypes={title:_.a.string.isRequired,value:_.a.string,htmlContent:_.a.string,className:_.a.string};var M=function(e){function t(){d()(this,t);var e=h()(this,(t.__proto__||c()(t)).call(this));return e.unlockEditorial=function(){var t=e.props,a=t.challenge,n=t.contest,l=t.challengeActions;(0,t.appUtil.isAuthRequired)({type:"info",data:"Please signup or login to perform this action."})||(e.setState({isLoading:!0}),l.getEditorialDetail({challengeSlug:a.slug,contestSlug:n.slug,unlock:!0}).always(function(){return e.setState({isLoading:!1})}))},e.renderLockedState=function(){var t=e.props,a=t.challenge,n=t.appUtil.assetPath,l=e.state.isLoading;return b.a.createElement("section",{className:"theme-m container panes-container challenge-editorial-container"},b.a.createElement(R.v.Content,{className:"tab-content left-pane text-center"},b.a.createElement("div",{className:"editorial-content-locked"},b.a.createElement("img",{src:n("challenges/locked-content.svg"),alt:"Lock Icon",className:"editorial-lock-icon"}),b.a.createElement("p",{className:"text-para-headline"},"This editorial requires unlocking.",b.a.createElement("br",null),"If you unlock the editorial, your score will not be counted toward your progress."),b.a.createElement(R.r,{onClick:e.unlockEditorial,loading:l},"Yes, I want to unlock"))),b.a.createElement("aside",{className:"right-pane challenge-sidebar"},b.a.createElement(A.a,{challenge:a})))},e.state={isLoading:!1},e}return v()(t,e),m()(t,[{key:"renderVideo",value:function(){var e=this.props,t=e.challenge,a=e.contest,l=e.editorial;if(!l.video||!l.video_author)return null;var r=l.video_author,i=r.username,s=r.avatar,c={enablejsapi:1,version:3,autoplay:0,rel:0,origin:"https://www.hackerrank.com"};return b.a.createElement("div",{className:"row"},b.a.createElement(n,{name:i,challengeSlug:t.slug,contestSlug:a.slug,avatar:s,task:"Video Explanation",dataAnalytics:"EditorialEditorialistUserName"}),b.a.createElement("div",{className:"mlB hackdown-video"},b.a.createElement("iframe",{type:"text/html",src:"https://www.youtube.com/embed/"+l.video.youtube_id+"?"+Object(T.N)(c),frameBorder:"0",allowFullScreen:!0})))}},{key:"renderApproach",value:function(){var e=this.props,t=e.challenge,a=e.contest,l=e.editorial,r=l.editorialist_avatar,i=l.editorialist,s=l.approach;return s?b.a.createElement(n,{className:"approach-content",name:i,challengeSlug:t.slug,contestSlug:a.slug,avatar:r,task:"Editorial",content:s}):null}},{key:"renderSetterCode",value:function(){var e=this.props,t=e.challenge,a=e.contest,l=e.editorial;return l.setter_code?b.a.createElement(n,{className:"editorial-setter-code",name:l.setter_name,challengeSlug:t.slug,contestSlug:a.slug,avatar:l.setter_avatar,task:"Set",tasker:"Setter",content:l.setter_code}):null}},{key:"renderTesterCode",value:function(){var e=this.props,t=e.challenge,a=e.contest,l=e.editorial;return l.tester_code?b.a.createElement(n,{className:"editorial-tester-code",name:l.tester_name,challengeSlug:t.slug,contestSlug:a.slug,avatar:l.tester_avatar,task:"Tested",tasker:"Tester",content:l.tester_code}):null}},{key:"renderOriginalContestInfo",value:function(){var e=this.props,t=e.editorial,a=e.challenge;return"master"===e.contest.slug?t.contest_slug&&"master"!==t.contest_slug?b.a.createElement("p",null,b.a.createElement("span",{className:"editorial-sec-headline"},"Originally featured in "),b.a.createElement("span",{className:"editorial-sec-headline"},b.a.createElement("a",{href:"/contests/"+t.contest_slug,"data-analytics":"EditorialOriginalContest","data-attr1":a.slug,"data-attr2":t.contest_slug},t.contest_name))):b.a.createElement("p",null,b.a.createElement("span",{className:"editorial-sec-headline"},"This is a Practice Challenge")):null}},{key:"render",value:function(){var e=this.props,t=e.editorial,a=e.challenge;if(!a.is_solution_unlocked&&!a.solved||!t||!i()(t).length)return this.renderLockedState();var n=void 0;return t.statistics&&(n=JSON.parse(t.statistics)),b.a.createElement("section",{className:"theme-m challenge-editorial-container"},b.a.createElement("div",{className:"container hackdown-container panes-container"},t.draft&&b.a.createElement("h2",{className:"text-center"},"THIS POST IS STILL A DRAFT."),b.a.createElement(R.v.Content,{className:"tab-content left-pane"},this.renderVideo(),this.renderApproach(),this.renderSetterCode(),this.renderTesterCode()),b.a.createElement("aside",{className:"right-pane hackdown-sidebar challenge-sidebar"},b.a.createElement("div",{className:"sidebar-editorial"},b.a.createElement("h2",{className:"text-sec-headline-s"},"Statistics"),b.a.createElement("hr",{className:"hr-line-light"}),a.difficulty_name&&b.a.createElement(l,{title:"Difficulty",value:a.difficulty_name,className:"difficulty-"+a.difficulty_name.toLowerCase()}),n&&b.a.createElement(l,{title:"Success Rate",value:Object(T.I)(100*n.successful_submissions/n.challenge_submissions,2)+"%"}),t.time_complexity_html?b.a.createElement(l,{title:"Time Complexity",htmlContent:t.time_complexity_html}):b.a.createElement(l,{title:"Time Complexity",value:t.time_complexity}),t.required_knowledge&&b.a.createElement(l,{title:"Required Knowledge",value:t.required_knowledge}),b.a.createElement(l,{title:"Publish Date",value:y()(t.created_at).format("MMM DD YYYY")}),this.renderOriginalContestInfo(),n&&b.a.createElement("p",{className:"mlB editorial-sec-headline"},"Of the "+n.contest_participation+" contest participants, "+n.challenge_submissions+" ("+Object(T.I)(100*n.challenge_submissions/n.contest_participation,2)+"%) submitted code for this challenge.")),b.a.createElement(A.a,{challenge:a}))))}}]),t}(b.a.Component);M.propTypes={challenge:_.a.object.isRequired,contest:_.a.object.isRequired,editorial:_.a.object,challengeActions:_.a.object.isRequired,appUtil:_.a.object.isRequired};var U=M;M=Object(N.b)(function(e,t){var a=t.appUtil.params,n=a.contestSlug,l=Object(O.d)(e,a),r=l.detail,i=l.editorial;return{challenge:r,contest:{slug:n||r.contest_slug},editorial:i}},function(e){return{challengeActions:Object(w.b)(j.a,e)}})(M),M=Object(q.b)(M),M=Object(x.a)(M),t.default=M},2255:function(e,t){},2258:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a.d(t,"PureChallengeCustomPage",function(){return S});var n=a(7),l=a.n(n),r=a(4),i=a.n(r),s=a(8),c=a.n(s),o=a(5),d=a.n(o),u=a(6),m=a.n(u),g=a(0),h=a.n(g),p=a(1),v=a.n(p),E=a(105),b=a(305),f=a(700),_=a(1086),N=a(28),k=a(1175),y=function(e){function t(){return i()(this,t),d()(this,(t.__proto__||l()(t)).apply(this,arguments))}return m()(t,e),c()(t,[{key:"tutorialDetails",value:function(){var e=this.props.appUtil.params.tabSlug;return h.a.createElement("div",null,h.a.createElement("h2",{className:"text-sec-headline-s"},e," details"),h.a.createElement("hr",{className:"hr-line-light"}))}},{key:"renderSidebar",value:function(e){var t=this.props.challenge;return h.a.createElement("aside",{className:"hackdown-sidebar right-pane challenge-sidebar"},this.tutorialDetails(),h.a.createElement("div",{dangerouslySetInnerHTML:{__html:e}}),h.a.createElement(k.a,{challenge:t}))}},{key:"render",value:function(){var e=this.props.pageContent,t=e.sidebar,a=e.content;return h.a.createElement("div",{className:"container hackdown-container panes-container"},h.a.createElement(N.v.Content,{className:"tab-content left-pane"},h.a.createElement("div",{className:"hackdown-content"},h.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}}))),this.renderSidebar(t))}}]),t}(g.PureComponent);y.propTypes={pageContent:v.a.object.isRequired,challengeSlug:v.a.string.isRequired,appUtil:v.a.object.isRequired,abTest:v.a.object.isRequired,isEditorialAvailable:v.a.bool,contestSlug:v.a.string,challenge:v.a.object.isRequired};var S=y;y=Object(E.b)(function(e,t){var a=t.appUtil.params,n=Object(_.n)(a,e);return{pageContent:n.pageContent,isEditorialAvailable:n.is_editorial_available,challengeSlug:n.challengeSlug,contestSlug:n.contest_slug,challenge:n.detail}})(y),y=Object(f.b)(y),y=Object(b.a)(y),t.default=y}});
//# sourceMappingURL=https://staging.hackerrank.net/assets/sourcemaps/hackerrank_r_challengev2-7d6a87f04dfb3b166bf1.js.map
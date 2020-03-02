(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{118:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(11),r=a.n(c),o=(a(93),a(9)),s=a(6),i=a(12),u=a(13),m=a(14),p=a(32),d=(a(94),a(20)),h=a(8),f=a.n(h),E=a(147),g=a(65),v=a.n(g),b=function(e){var t=function(){window.history.back()};return l.a.createElement("nav",{className:"navbar",id:"navbar"},function(){if(e.showBackNavButton)return l.a.createElement(E.a,{className:"back-btn",onClick:t},l.a.createElement(v.a,null))}(e.showBackNavButton),l.a.createElement("div",{className:"nav-title"},e.pageTitle),l.a.createElement(d.b,{onClick:function(){f.a.delete("/api/auth/logout").then((function(){e.setUser(null)}))},to:"/"},"Logout"))},y=a(44),O=a(151),j=a(152),N=a(69),k=a.n(N),w=a(70),C=a.n(w),S=a(71),D=a.n(S),B=a(72),_=a.n(B);function x(){var e=l.a.useState(0),t=Object(y.a)(e,2),a=t[0],n=t[1];return l.a.createElement(O.a,{value:a,className:"bottom-nav",id:"bottom-nav",onChange:function(e,t){n(t)},showLabels:!0},l.a.createElement(j.a,{component:d.b,to:"/",label:"Home",icon:l.a.createElement(k.a,null)}),l.a.createElement(j.a,{label:"Posts",icon:l.a.createElement(C.a,null)}),l.a.createElement(j.a,{label:"Calender",icon:l.a.createElement(D.a,null)}),l.a.createElement(j.a,{component:d.b,label:"Documents",to:"/files",icon:l.a.createElement(_.a,null)}))}var M=a(153),T=a(154),A=a(74),P=a.n(A),I=a(76),L=a.n(I),z=a(75),U=a.n(z),F=a(73),H=a.n(F),W=function(e){var t=e.data;return l.a.createElement(d.b,{to:{pathname:"/posts/".concat(t._id),data:t}},l.a.createElement(M.a,{key:t._id},l.a.createElement("img",{src:t.image,alt:"ticket"}),l.a.createElement("div",{className:"bg-overlay"}),l.a.createElement(T.a,null,l.a.createElement("div",{className:"post-title"},t.title),l.a.createElement("div",{className:"post-status"},l.a.createElement("div",{className:"post-status-icon"}," ",function(){switch(t.status){case"open":return l.a.createElement(H.a,{fontSize:"small"});case"accepted":return"accepted";case"in progress":return l.a.createElement(P.a,{fontSize:"small"});case"done":return l.a.createElement(U.a,{fontSize:"small"});default:return"nix"}}()),l.a.createElement("div",{className:"post-status-time"},function(e){var t=new Date(e),a=new Date,n=Math.abs(a-t)/1e3,l=Math.floor(n/86400);n-=86400*l;var c=Math.floor(n/3600);n-=3600*c;var r=Math.floor(n/60);return n-=60*r,l>1?"".concat(l,"d"):c>1?"".concat(c,"h"):"".concat(r,"m")}(t.created_at))))))},R=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={posts:[]},a.getData=function(){f.a.get("/api/posts").then((function(e){a.setState({posts:e.data})}))},a.getNewestPosts=function(){f.a.get("/api/posts?sortBy=created_at").then((function(e){a.setState({posts:e.data})}))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state.posts;return l.a.createElement("div",{className:"posts-wrapper"},l.a.createElement("p",null,"Messages"),l.a.createElement(d.b,{to:"/posts/new"},l.a.createElement(M.a,{id:"new-post"},l.a.createElement(T.a,null,l.a.createElement(L.a,{style:{fontSize:"5rem"}})))),e.map((function(e){return l.a.createElement(W,{key:e._id,data:e})})))}}]),t}(n.Component),q=a(155),J=a(156),Z=Object(q.a)((function(e){return{root:{},gridList:{flexWrap:"nowrap",alignItems:"left",transform:"translateZ(0)"},title:{backgroundColor:"white"},card:{backgroundColor:"#335CFF",color:"#f7f7f7",textAlgin:"left"},titleBar:{background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"}}}));function $(e){var t=Z();return l.a.createElement("div",{className:t.root},l.a.createElement(J.a,{className:t.gridList,cols:.5},e.announcements.map((function(e){return l.a.createElement(d.b,{key:e._id,to:"/announcement/".concat(e._id)},l.a.createElement(M.a,null,l.a.createElement(T.a,{className:t.card},l.a.createElement("div",{className:"announcement-title"},e.title),l.a.createElement("div",{className:"announcement-content"},e.content),l.a.createElement("div",{className:"post-status"},l.a.createElement("div",{className:"announcement-status-time"},new Date(e.created_at).toDateString())))))}))))}var G=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={announcements:[]},a.getData=function(){console.log("getData()"),f.a.get("/api/announcements").then((function(e){a.setState({announcements:e.data})}))},a.getNewestAnnouncements=function(){f.a.get("/api/announcements?sortBy=created_at").then((function(e){a.setState({announcements:e.data})}))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement($,{announcements:this.state.announcements}))}}]),t}(n.Component),K=a(157),Q=a(77),V=a.n(Q),X=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).componentDidMount=function(){console.log(a.props),a.props.backButton.off(),a.props.setPageTitle("House Log")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(K.a,null,l.a.createElement("div",{className:"dashboardHeader"},l.a.createElement("p",null," ",l.a.createElement(V.a,null),"Lobeckstra\xdfe 36-40, 10969 Berlin")),l.a.createElement(G,null),l.a.createElement(R,this.props))}}]),t}(n.Component),Y=a(16),ee=a(161),te=a(160),ae=a(158),ne=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(Y.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log("submit: "),console.log(a.state),f.a.post("/api/auth/login",{email:a.state.email,password:a.state.password}).then((function(e){console.log(e),a.props.setUser(e.data),a.props.history.push("/")})).catch((function(e){console.log(e)}))},a.state={email:"",password:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(K.a,{className:"login"},l.a.createElement("div",{className:"loginHeader"},l.a.createElement("h3",null,"Welcome to h.express")),l.a.createElement("form",{onSubmit:this.handleSubmit,autoComplete:"on"},l.a.createElement(ee.a,null,l.a.createElement("div",{className:"loginEmail"},l.a.createElement(te.a,{name:"email",id:"email",type:"email",label:"E-Mail",variant:"filled",onChange:this.handleChange,required:!0,autoComplete:"current-email"}))),l.a.createElement(ee.a,null,l.a.createElement("div",{className:"loginPassword"},l.a.createElement(te.a,{name:"password",id:"password",type:"password",label:"Password",variant:"filled",onChange:this.handleChange,required:!0,autoComplete:"current-password"}))),l.a.createElement("div",{className:"loginButton"},l.a.createElement(ae.a,{size:"large",color:"inherit",type:"submit"},"Login"))))}}]),t}(n.Component),le=a(119),ce=a(159),re=a(78),oe=a.n(re),se=a(79),ie=a.n(se),ue=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={post:null},a.handleUpvote=function(){var e=a.props.match.params.postId;f.a.post("/api/posts/".concat(e,"/upvote")).then((function(e){a.setState({post:e.data})}))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.postId;console.log("Mount",this.props),this.props.backButton.on(),this.props.location.data?this.setState({post:this.props.location.data}):f.a.get("/api/posts/".concat(t)).then((function(t){e.setState({post:t.data})}))}},{key:"render",value:function(){if(console.log("render"),!this.state.post)return"loading";var e=this.state.post;return console.log(e),l.a.createElement(K.a,{className:"post-detail"},l.a.createElement(le.a,{elevation:1,variant:"outlined"},l.a.createElement("img",{src:null===e||void 0===e?void 0:e.image,alt:"postname"})),l.a.createElement("div",{className:"post-detail-action-icons"},l.a.createElement(E.a,{"aria-label":"delete"},l.a.createElement(oe.a,{fontSize:"large"})),l.a.createElement(E.a,{"aria-label":"delete"},l.a.createElement(ie.a,{fontSize:"large"}))),l.a.createElement(ce.a,null),l.a.createElement("div",{className:"post-detail-title "},e.title),l.a.createElement("div",{className:"post-detail-content"},e.content),l.a.createElement("div",{className:"post-detail-author"},e.author))}}]),t}(n.Component),me=a(80),pe=a.n(me),de=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={title:"",content:""},a.handleChange=function(e){a.setState(Object(Y.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log("Form submitted"),f.a.post("/api/posts",{title:a.state.title,content:a.state.content}).then((function(){console.log("Response received, calling getData in <Posts/>"),a.setState({title:"",content:"",type:"text"})}))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.backButton.on(),this.props.setPageTitle("New Message")}},{key:"render",value:function(){return l.a.createElement(K.a,{className:"post-new"},l.a.createElement("form",{className:"create-post",onSubmit:this.handleSubmit},l.a.createElement(le.a,{elevation:1,variant:"outlined"},l.a.createElement(pe.a,null)),l.a.createElement("label",{htmlFor:"title"},"Title"),l.a.createElement("input",{id:"title",name:"title",value:this.state.title,onChange:this.handleChange}),l.a.createElement("p",null," "),l.a.createElement("label",{htmlFor:"content"},"Content"),l.a.createElement("input",{id:"content",name:"content",value:this.state.content,onChange:this.handleChange}),l.a.createElement("p",null," "),l.a.createElement("button",null,"Create new Post")))}}]),t}(n.Component),he=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={announcement:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.announcementId;f.a.get("/api/announcements/".concat(t)).then((function(t){e.setState({announcement:t.data})}))}},{key:"render",value:function(){var e=this.state.announcement;return console.log("Announcement DETAIL ",this.state.announcement),e?l.a.createElement("div",null,l.a.createElement("h2",null,e.type," ",e.title),"link"===e.type?l.a.createElement("a",{href:e.content},e.content):l.a.createElement("p",null,e.content),l.a.createElement("p",null,"announcemented on ",new Date(e.created_at).toDateString()),l.a.createElement("img",{className:"announcementImage",src:e.image,alt:e.title})):l.a.createElement("div",null,"Loading")}}]),t}(n.Component),fe=function(e){return console.log(e.files),e.files.map((function(e){return l.a.createElement(d.b,{key:e._id,to:"/files/".concat(e._id)},l.a.createElement("div",{className:"fileCards",key:e._id},l.a.createElement("div",{className:"fileCardsTitle"},l.a.createElement("p",null,new Date(e.created_at).toDateString())),l.a.createElement("div",{className:"fileCardsTitle"},l.a.createElement("h4",null,e.title," ")),l.a.createElement("div",{className:"fileCardsCategory"},l.a.createElement("p",null,e.category))))}))},Ee=a(162),ge=a(81),ve=a.n(ge),be=Object(q.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}}));function ye(){var e=be();return l.a.createElement(le.a,{component:"form",className:e.root},l.a.createElement(Ee.a,{className:e.input,placeholder:"Search all documents",inputProps:{"aria-label":"search all files"}}),l.a.createElement(E.a,{type:"submit",className:e.iconButton,"aria-label":"search"},l.a.createElement(ve.a,null)))}var Oe=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={files:[]},a.getData=function(){console.log("getData()"),f.a.get("/api/files").then((function(e){a.setState({files:e.data})}))},a.getNewestFiles=function(){f.a.get("/api/files?sortBy=created_at").then((function(e){a.setState({files:e.data})}))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return console.log("< Files/> RENDER"),l.a.createElement(K.a,null,l.a.createElement(ye,{className:"CustomizedSearchbar"}),l.a.createElement(fe,{files:this.state.files}))}}]),t}(n.Component),je=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={file:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.fileId;f.a.get("/api/files/".concat(t)).then((function(t){e.setState({file:t.data})}))}},{key:"render",value:function(){var e=this.state.file;return e?l.a.createElement("div",null,l.a.createElement(M.a,{className:"fileCardsDetail"},l.a.createElement(T.a,null,l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h2",null,e.title),l.a.createElement("p",null,e.property),l.a.createElement("p",null,"created on ",new Date(e.created_at).toDateString()),l.a.createElement("p",null," created on ",new Date(e.created_at).toDateString()))))),l.a.createElement(M.a,{className:"fileCardsDetail"},l.a.createElement(T.a,null,l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("img",{src:e.url,alt:e.title})))))):l.a.createElement("div",null,"Loading")}}]),t}(n.Component),Ne=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={user:a.props.user,pageTitle:"",backNavButton:!1},a.setUser=function(e){a.setState({user:e})},a.backButtonOn=function(){console.log("backbutton on"),a.setState({backNavButton:!0})},a.backButtonOff=function(){console.log("backbutton off"),a.setState({backNavButton:!1})},a.setPageTitle=function(e){a.setState({pageTitle:e})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;if(!this.state.user)return l.a.createElement("div",{className:"App"},l.a.createElement(ne,{history:this.props.history,setUser:this.setUser}));var t={on:this.backButtonOn,off:this.backButtonOff};return l.a.createElement("div",{className:"App"},l.a.createElement(b,{setUser:this.setUser,showBackNavButton:this.state.backNavButton,pageTitle:this.state.pageTitle,user:this.state.user}),l.a.createElement(p.a,{exact:!0,path:"/",render:function(a){return l.a.createElement(X,Object.assign({},a,{backButton:t,setPageTitle:e.setPageTitle}))}}),l.a.createElement(p.a,{exact:!0,path:"/announcements/:announcementId",render:function(e){return l.a.createElement(he,e)}}),l.a.createElement(p.a,{exact:!0,path:"/posts/new",render:function(a){return l.a.createElement(de,Object.assign({},a,{backButton:t,setPageTitle:e.setPageTitle}))}}),l.a.createElement(p.a,{exact:!0,path:"/posts/:postId",render:function(e){return l.a.createElement(ue,Object.assign({},e,{backButton:t}))}}),l.a.createElement(p.a,{exact:!0,path:"/files",render:function(e){return l.a.createElement(Oe,e)}}),l.a.createElement(p.a,{exact:!0,path:"/files/:fileId",render:function(e){return l.a.createElement(je,e)}}),l.a.createElement(x,{className:"bottom-nav"}))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));f.a.get("/api/auth/loggedin").then((function(e){r.a.render(l.a.createElement(d.a,null,l.a.createElement(Ne,{user:e.data})),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e,t,a){e.exports=a(118)},93:function(e,t,a){},94:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.30886704.chunk.js.map
import{d as q,e as V,f as W,h as Q,i as B,C as U,k as X,l as J,m as K,n as Y,R as g,o as Z,_ as R,p as ee,s as p,a as d,r as u,q as M,b as f,j as l,c as te,u as ae}from"./index.28d1db13.js";function re(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}const se=a=>({type:U,data:a}),ne=()=>a=>{q().then(i=>{const o=se(i);a(o)})},ie=a=>({type:X,data:a}),oe=()=>a=>{V().then(i=>{const o=ie(i);a(o)})},ce=a=>({type:J,data:a}),le=()=>a=>{W().then(i=>{const o=ce(i);a(o)})},de=a=>({type:K,data:a}),he=()=>a=>{Q().then(i=>{const o=de(i);a(o)})},ue=a=>({type:Y,data:a}),fe=()=>a=>{B().then(i=>{const o=ue(i);a(o)})};function T(a,i){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,s){return t.__proto__=s,t},T(a,i)}function P(a,i){a.prototype=Object.create(i.prototype),a.prototype.constructor=a,T(a,i)}var w={exports:{}},j={exports:{}};(function(a){function i(o){return o&&o.__esModule?o:{default:o}}a.exports=i,a.exports.__esModule=!0,a.exports.default=a.exports})(j);var _={exports:{}};(function(a,i){i.__esModule=!0,i.default=o;function o(t,s){return t.classList?!!s&&t.classList.contains(s):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+s+" ")!==-1}a.exports=i.default})(_,_.exports);(function(a,i){var o=j.exports;i.__esModule=!0,i.default=s;var t=o(_.exports);function s(e,r){e.classList?e.classList.add(r):(0,t.default)(e,r)||(typeof e.className=="string"?e.className=e.className+" "+r:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+r))}a.exports=i.default})(w,w.exports);var pe=re(w.exports);function H(a,i){return a.replace(new RegExp("(^|\\s)"+i+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var me=function(i,o){i.classList?i.classList.remove(o):typeof i.className=="string"?i.className=H(i.className,o):i.setAttribute("class",H(i.className&&i.className.baseVal||"",o))},$={disabled:!1},k=g.createContext(null),y="unmounted",S="exited",C="entering",b="entered",F="exiting",v=function(a){P(i,a);function i(t,s){var e;e=a.call(this,t,s)||this;var r=s,n=r&&!r.isMounting?t.enter:t.appear,c;return e.appearStatus=null,t.in?n?(c=S,e.appearStatus=C):c=b:t.unmountOnExit||t.mountOnEnter?c=y:c=S,e.state={status:c},e.nextCallback=null,e}i.getDerivedStateFromProps=function(s,e){var r=s.in;return r&&e.status===y?{status:S}:null};var o=i.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(s){var e=null;if(s!==this.props){var r=this.state.status;this.props.in?r!==C&&r!==b&&(e=C):(r===C||r===b)&&(e=F)}this.updateStatus(!1,e)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var s=this.props.timeout,e,r,n;return e=r=n=s,s!=null&&typeof s!="number"&&(e=s.exit,r=s.enter,n=s.appear!==void 0?s.appear:r),{exit:e,enter:r,appear:n}},o.updateStatus=function(s,e){if(s===void 0&&(s=!1),e!==null){this.cancelNextCallback();var r=Z.findDOMNode(this);e===C?this.performEnter(r,s):this.performExit(r)}else this.props.unmountOnExit&&this.state.status===S&&this.setState({status:y})},o.performEnter=function(s,e){var r=this,n=this.props.enter,c=this.context?this.context.isMounting:e,h=this.getTimeouts(),E=c?h.appear:h.enter;if(!e&&!n||$.disabled){this.safeSetState({status:b},function(){r.props.onEntered(s)});return}this.props.onEnter(s,c),this.safeSetState({status:C},function(){r.props.onEntering(s,c),r.onTransitionEnd(s,E,function(){r.safeSetState({status:b},function(){r.props.onEntered(s,c)})})})},o.performExit=function(s){var e=this,r=this.props.exit,n=this.getTimeouts();if(!r||$.disabled){this.safeSetState({status:S},function(){e.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:F},function(){e.props.onExiting(s),e.onTransitionEnd(s,n.exit,function(){e.safeSetState({status:S},function(){e.props.onExited(s)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(s,e){e=this.setNextCallback(e),this.setState(s,e)},o.setNextCallback=function(s){var e=this,r=!0;return this.nextCallback=function(n){r&&(r=!1,e.nextCallback=null,s(n))},this.nextCallback.cancel=function(){r=!1},this.nextCallback},o.onTransitionEnd=function(s,e,r){this.setNextCallback(r);var n=e==null&&!this.props.addEndListener;if(!s||n){setTimeout(this.nextCallback,0);return}this.props.addEndListener&&this.props.addEndListener(s,this.nextCallback),e!=null&&setTimeout(this.nextCallback,e)},o.render=function(){var s=this.state.status;if(s===y)return null;var e=this.props,r=e.children,n=R(e,["children"]);if(delete n.in,delete n.mountOnEnter,delete n.unmountOnExit,delete n.appear,delete n.enter,delete n.exit,delete n.timeout,delete n.addEndListener,delete n.onEnter,delete n.onEntering,delete n.onEntered,delete n.onExit,delete n.onExiting,delete n.onExited,typeof r=="function")return g.createElement(k.Provider,{value:null},r(s,n));var c=g.Children.only(r);return g.createElement(k.Provider,{value:null},g.cloneElement(c,n))},i}(g.Component);v.contextType=k;v.propTypes={};function N(){}v.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:N,onEntering:N,onEntered:N,onExit:N,onExiting:N,onExited:N};v.UNMOUNTED=0;v.EXITED=1;v.ENTERING=2;v.ENTERED=3;v.EXITING=4;var ve=v,xe=function(i,o){return i&&o&&o.split(" ").forEach(function(t){return pe(i,t)})},L=function(i,o){return i&&o&&o.split(" ").forEach(function(t){return me(i,t)})},O=function(a){P(i,a);function i(){for(var t,s=arguments.length,e=new Array(s),r=0;r<s;r++)e[r]=arguments[r];return t=a.call.apply(a,[this].concat(e))||this,t.appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(n,c){t.removeClasses(n,"exit"),t.addClass(n,c?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(n,c)},t.onEntering=function(n,c){var h=c?"appear":"enter";t.addClass(n,h,"active"),t.props.onEntering&&t.props.onEntering(n,c)},t.onEntered=function(n,c){var h=c?"appear":"enter";t.removeClasses(n,h),t.addClass(n,h,"done"),t.props.onEntered&&t.props.onEntered(n,c)},t.onExit=function(n){t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(n)},t.onExiting=function(n){t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(n)},t.onExited=function(n){t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(n)},t.getClassNames=function(n){var c=t.props.classNames,h=typeof c=="string",E=h&&c?c+"-":"",m=h?""+E+n:c[n],x=h?m+"-active":c[n+"Active"],D=h?m+"-done":c[n+"Done"];return{baseClassName:m,activeClassName:x,doneClassName:D}},t}var o=i.prototype;return o.addClass=function(s,e,r){var n=this.getClassNames(e)[r+"ClassName"];e==="appear"&&r==="done"&&(n+=" "+this.getClassNames("enter").doneClassName),r==="active"&&s&&s.scrollTop,this.appliedClasses[e][r]=n,xe(s,n)},o.removeClasses=function(s,e){var r=this.appliedClasses[e],n=r.base,c=r.active,h=r.done;this.appliedClasses[e]={},n&&L(s,n),c&&L(s,c),h&&L(s,h)},o.render=function(){var s=this.props;s.classNames;var e=R(s,["classNames"]);return g.createElement(ve,ee({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},i}(g.Component);O.defaultProps={classNames:""};O.propTypes={};var ge=O;const Ee=p.div`
    display:flex;
    align-items: center;
    margin-top:0.5rem;
    font-size: ${d["font-size-m"]};
    .search-box{
        flex:1;
        display: flex;
        justify-content: space-between;
        border-radius: 1.5rem;
        padding: 0.5rem 0.5rem 0.5rem 0.5rem;
        background-color: ${d["search-bgcolor"]};
        color:${d["search-color"]} ;
       >input{
            flex:1;
            border:0;
            padding: 0 0.5rem;
            background-color: ${d["search-bgcolor"]};
            font-size: ${d["font-size-l"]};
       }      
    }
    .back{
        margin-left: 1rem;
    }

`,Se=a=>{const{newQuery:i}=a,{handleQuery:o,back:t}=a,s=u.exports.useRef(),[e,r]=u.exports.useState("");let n=u.exports.useMemo(()=>M(o,500),[o]);return u.exports.useEffect(()=>{s.current.focus()},[]),u.exports.useEffect(()=>{n(e)},[e]),u.exports.useEffect(()=>{let m=e;i!==e&&(m=i,s.current.value=i),r(m)},[i]),f(Ee,{children:[f("div",{className:"search-box",children:[l("i",{className:"iconfont icon-sousuo"}),l("input",{type:"text",placeholder:"\u641C\u7D22\u77E5\u4E4E\u5185\u5BB9",ref:s,onChange:m=>{let x=m.currentTarget.value;r(x)}}),l("i",{className:"iconfont icon-quxiao",style:e?{display:"block"}:{display:"none"},onClick:()=>{r(""),s.current.value="",s.current.focus()}})]}),l("div",{className:"back",onClick:()=>t(),children:"\u53D6\u6D88"})]})};var Ce=u.exports.memo(Se);const Ne=p.div`
    font-size: ${d["font-size-m"]};
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin:0.5rem 0;
        .header-left{
            font-weight: 700;
        }
    }
    .old-search-body{
        display: flex;
        flex-wrap:wrap;
        .old-search-item{
            margin:0 0.2rem 0.5rem 0;
            padding: 0.3rem 0.5rem;
            border-radius:1rem;
            background-color:${d["search-bgcolor"]};
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;        
        }
    }
`;function be(a){const{oldSearchList:i}=a;return f(Ne,{children:[f("div",{className:"header",children:[l("div",{className:"header-left",children:"\u5386\u53F2\u641C\u7D22"}),l("i",{className:"header-right iconfont icon-shanchu"})]}),f("div",{className:"old-search-body",children:[i.map((o,t)=>l("div",{className:"old-search-item",children:o},t)),l("i",{className:"iconfont icon-xiangshang old-search-item"})]})]})}var ye=u.exports.memo(be);const De=p.div`

    .header{

        .header-left{
            
            font-size: ${d["font-size-l"]};
            font-weight:${d["weight-light"]}; 
            color: ${d["color-light"]};
        }
        .header-right{
           
            /* &:hover>.icon-weibiaoti--{
                @keyframes changerotate{
                
                0%{
       
                transform:rotate(0deg);
                -webkit-transform: rotate(0deg);
             
                
                }
                100%{
             
                    transform:rotate(300deg);
                    -webkit-transform: rotate(300deg);
                }
            }
                animation: changerotate 1.4s ease .1s;
                animation-fill-mode:both;
           
            } */
            .icon-weibiaoti--{               
                margin: 0 0.3rem;
              
               
               
                
            }
        }
       
    }
    
    .flex-item{
        display:flex;
        align-items: center;
        justify-content: space-between;
        /* justify-items:space-between; */
            .flex-item-text{
                font-size: ${d["font-size-l"]};
                color: ${d["color-light"]};
                margin:0.3rem 0;
            }
            .flex-item-after{
                font-size: 0.4rem;
                border-radius:0.1rem; 
                padding: 0 0.05rem;          
                background-color: red;
                color:#ffffff;
                
            }
    
    }
   
`,Le=p.div`
    display:flex;
    align-items: center;
    justify-content:space-between;
    /* .flex-left{} */
`,Te=p.div`
    display:flex;
    align-items: center;
    /* justify-content:space-between;
    .flex-left{} */
`,we=p.div`
    display:flex;
    align-items: center;
    flex-wrap:wrap;
    /* justify-content:space-between;
    .flex-left{} */
`,_e=p.div`
    width: 8.3rem;
    margin-right:0.58rem;
    /* display:flex;
    align-items: center; */
    /* justify-content:space-between;
    .flex-left{} */
`;function ke(a){const{searchFindList:i}=a,[o,t]=u.exports.useState([]);return u.exports.useEffect(()=>{t([0,1,2,3,4,5,6,7])},[]),f(De,{children:[f(Le,{className:"header",children:[l("div",{className:"header-left",children:"\u641C\u7D22\u53D1\u73B0"}),f(Te,{onClick:M(()=>{let e=i.length,r=[];for(r.push(Math.floor(Math.random()*e));r.length<8;){let n=Math.floor(Math.random()*e);r.indexOf(n)===-1&&r.push(n)}t(r)},2e3),className:"header-right",children:[l("i",{className:"iconfont icon-weibiaoti--"}),l("div",{children:"\u6362\u4E00\u6362"})]})]}),l(we,{children:i.filter((e,r)=>r==o[0]||r==o[1]||r==o[2]||r==o[3]||r==o[4]||r==o[5]||r==o[6]||r==o[7]).map((e,r)=>f(_e,{className:"flex-item",children:[l("div",{className:"flex-item-text overflow-ellipsis",children:e.text}),e.isHot?l("div",{className:"flex-item-after",children:"\u70ED"}):l("div",{className:"flex-item-after"})]},r))})]})}var Oe=u.exports.memo(ke);const Ie=p.div`
    .hot-search-vedio-box{
        height: 3rem;
        margin: 0.5rem 0;
        &:nth-child(1)>.hot-search-vedio-rank{
            color:red;
        }
        &:nth-child(2)>.hot-search-vedio-rank{
            color:#e29336;
        }
        &:nth-child(3)>.hot-search-vedio-rank{
            color:#f4bb69;
        }
        >img{
            height: 100%;
            border-radius:0.3rem;
        }
        .hot-search-vedio-item{
            margin: 0 0.3rem;
        }
        .hot-search-vedio-rank{
            width: 0.5rem;
        }
        .hot-search-vedio-content{
            display: flex;
            flex-direction: column;
            justify-content:space-between;
            .hot-search-vedio-name{
                margin-bottom:0.5rem ;
                color:${d["color-light"]};
                font-weight:${d["weight-light"]} ;
            }
            .hot-search-vedio-footer{
                display:flex;
                align-items: center;
                font-size: ${d["font-size-s"]};
                color: ${d["search-color"]};
                .hot-search-vedio-score{
                    margin-right: 0.5rem;
                    /* color: red; */
                }
            }
        }
    }
`;function He(a){const{HotsearchVedioList:i,HotsearchGameList:o}=a,t=s=>s.map(e=>f("div",{className:"flex hot-search-vedio-box",children:[l("div",{className:"hot-search-vedio-item \r hot-search-vedio-rank",children:e.rankId}),l("img",{src:e.img,alt:"",className:"hot-search-vedio-item"}),f("div",{className:"hot-search-vedio-item hot-search-vedio-content",children:[l("div",{className:"hot-search-vedio-name",children:e.name}),f("div",{className:"hot-search-vedio-footer",children:[l("div",{className:"hot-search-vedio-score",children:e.score?e.score:"\u6682\u65E0\u8BC4\u5206"}),l("div",{children:"\u77E5\u4E4E\u8BC4\u5206"})]})]})]},e.rankId));return l(Ie,{children:f(Tabs,{activeLineMode:"fixed",style:{"--content-padding":0,"--active-line-height":"0.1rem","--fixed-active-line-width":"0.7rem","--title-font-size":"0.7rem","--active-title-color":`${d["color-light"]}`,"--active-line-color":`${d["theme-color"]}`,color:`${d["search-color"]}`},children:[l(Tabs.Tab,{title:"\u70ED\u641C\u5F71\u89C6",children:t(i)},"hotSearchVedio"),l(Tabs.Tab,{title:"\u70ED\u641C\u6E38\u620F",children:t(o)},"hotSearchGame")]})})}u.exports.memo(He);const $e=p.div`
  
   position:relative;
   /* width: 100%; */
	overflow-y: overlay;
	/* overflow-x:overlay ; */

   /* width: 15rem; */
   padding: 0.5rem;
    /* top: 0;
    left:0;
    right:0;
    bottom:0; */
    width: 100%;
    z-index: 100;
    overflow: hidden;
    /* background: #f2f3f4; */
    transform-origin: right bottom;
    /* CSSTranstion 过度类型给children  */
   &.fly-enter,&.fly-appear {
        opacity: 0;
        /* 启用GPU加速 */
        transform: translate3d(100%, 0, 0);
    }
    &.fly-enter-active, &.fly-apply-active {
        opacity: 1;
        transition: all .3s;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit {
        opacity: 1;
        transform: translate3d(0,0,0)
    }
    &.fly-exit-active {
        opacity: 0;
        transition: all .3s;
        transform: translate3d(100%, 0, 0);
    }
   
`,G=p.div`
   display:${a=>a.isNone?"none":"block"};
`,Fe=p.div` 
    .search-item{
        margin:0.5rem 0;
        .icon-sousuo{
            margin-right: 0.5rem;
        }
    }
    
`;function Ge(a){const{query:i,searchItemList:o}=a;return u.exports.useState(),l(Fe,{children:(s=>s.filter((e,r)=>new RegExp("^.*"+i+".*$").test(e)==!0).map((e,r)=>f("div",{className:"search-item flex",children:[l("i",{className:"iconfont icon-sousuo"}),l("div",{children:e})]},r)))(o)})}function Re(a){const{oldSearchList:i,searchFindList:o,HotsearchVedioList:t,HotsearchGameList:s,searchItemList:e}=a,{getOldSearchDataDispatch:r,getSearchFindDataDispatch:n,getHotSearchVedioDataDispatch:c,getHotSearchGameDataDispatch:h,getSearchItemDataDispatch:E}=a,m=ae(),[x,D]=u.exports.useState(""),[z,I]=u.exports.useState(!1);return u.exports.useEffect(()=>{I(!0),r(),n(),c(),h(),E()},[]),l(ge,{in:z,timeout:300,appear:!0,classNames:"fly",unmountOnExit:!0,onExit:()=>{m(-1)},children:f($e,{children:[l(Ce,{back:()=>{I(!1)},newQuery:x,handleQuery:A=>{D(A)}}),l(G,{isNone:!x,children:l(Ge,{query:x,searchItemList:e})}),f(G,{isNone:!!x,children:[l(ye,{oldSearchList:i}),l(Oe,{searchFindList:o})]})]})})}const Me=a=>({oldSearchList:a.search.oldSearchList,searchFindList:a.search.searchFindList,HotsearchVedioList:a.search.HotsearchVedioList,HotsearchGameList:a.search.HotsearchGameList,searchItemList:a.search.searchItemList}),Pe=a=>({getOldSearchDataDispatch(){a(ne())},getSearchFindDataDispatch(){a(oe())},getHotSearchVedioDataDispatch(){a(le())},getHotSearchGameDataDispatch(){a(he())},getSearchItemDataDispatch(){a(fe())}});var qe=te(Me,Pe)(Re);export{qe as default};

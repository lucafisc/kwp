(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[664],{5518:function(e,t,r){var a,i,l=Object.create,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,p=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,__defNormalProp=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,__copyProps=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of s(t))u.call(e,i)||i===r||n(e,i,{get:()=>t[i],enumerable:!(a=o(t,i))||a.enumerable});return e},__publicField=(e,t,r)=>(__defNormalProp(e,"symbol"!=typeof t?t+"":t,r),r),c={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(c,{default:()=>Preview}),e.exports=__copyProps(n({},"__esModule",{value:!0}),c);var d=(i=null!=(a=r(2265))?l(p(a)):{},__copyProps(a&&a.__esModule?i:n(i,"default",{value:a,enumerable:!0}),a));let h="64px",m={};let Preview=class Preview extends d.Component{constructor(){super(...arguments),__publicField(this,"mounted",!1),__publicField(this,"state",{image:null}),__publicField(this,"handleKeyPress",e=>{("Enter"===e.key||" "===e.key)&&this.props.onClick()})}componentDidMount(){this.mounted=!0,this.fetchImage(this.props)}componentDidUpdate(e){let{url:t,light:r}=this.props;(e.url!==t||e.light!==r)&&this.fetchImage(this.props)}componentWillUnmount(){this.mounted=!1}fetchImage({url:e,light:t,oEmbedUrl:r}){if(!d.default.isValidElement(t)){if("string"==typeof t){this.setState({image:t});return}if(m[e]){this.setState({image:m[e]});return}return this.setState({image:null}),window.fetch(r.replace("{url}",e)).then(e=>e.json()).then(t=>{if(t.thumbnail_url&&this.mounted){let r=t.thumbnail_url.replace("height=100","height=480").replace("-d_295x166","-d_640");this.setState({image:r}),m[e]=r}})}}render(){let{light:e,onClick:t,playIcon:r,previewTabIndex:a}=this.props,{image:i}=this.state,l=d.default.isValidElement(e),n={display:"flex",alignItems:"center",justifyContent:"center"},o={preview:{width:"100%",height:"100%",backgroundImage:i&&!l?`url(${i})`:void 0,backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer",...n},shadow:{background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:h,width:h,height:h,position:l?"absolute":void 0,...n},playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},s=d.default.createElement("div",{style:o.shadow,className:"react-player__shadow"},d.default.createElement("div",{style:o.playIcon,className:"react-player__play-icon"}));return d.default.createElement("div",{style:o.preview,className:"react-player__preview",onClick:t,tabIndex:a,onKeyPress:this.handleKeyPress},l?e:null,r||s)}}}}]);
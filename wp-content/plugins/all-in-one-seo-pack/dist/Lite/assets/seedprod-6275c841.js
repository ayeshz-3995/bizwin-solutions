import{b as p,j as m}from"./js/_plugin-vue_export-helper.2d9794a3.js";import{c as n,a as s}from"./js/vue-router.4a2076a0.js";import{l as a}from"./js/index.c8cd2612.js";import{l as u}from"./js/index.fd0fcee8.js";import{l as c}from"./js/index.0b123ab1.js";import{m as d,T as l}from"./js/postContent.741ce73c.js";import{s as r}from"./js/index.02a5ed9a.js";import{i as f}from"./js/isEmpty.bf352345.js";import{A as i}from"./js/App.21d0139f.js";import"./js/client.e7a26247.js";import"./js/_commonjsHelpers.f84db168.js";import"./js/vuex.esm-bundler.8589b2dd.js";import"./js/default-i18n.ab92175e.js";import"./js/helpers.de7566d0.js";import"./js/constants.e9426d11.js";import"./js/isArrayLikeObject.c492f682.js";import"./js/Caret.42a820e0.js";import"./js/cleanForSlug.1898a430.js";import"./js/html.14f2a8b9.js";import"./js/_getTag.af0e2981.js";/* empty css                */import"./js/params.597cd0f5.js";import"./js/WpTable.8adff4c1.js";import"./js/RequiresUpdate.52f5acf2.js";import"./js/Index.1fd8fc42.js";import"./js/JsonValues.870a4901.js";import"./js/SaveChanges.bc66cd69.js";import"./js/SettingsRow.09a16661.js";import"./js/Row.5e452de4.js";import"./js/Checkbox.b4e8b6fc.js";import"./js/Checkmark.c5326878.js";import"./js/LicenseKeyBar.bbba4d59.js";import"./js/LogoGear.55b490aa.js";import"./js/Tabs.47b44ac0.js";import"./js/TruSeoScore.76897846.js";import"./js/Information.a08d0ef0.js";import"./js/Slide.cd756e61.js";import"./js/Portal.c64d3c93.js";import"./js/MaxCounts.12b45bab.js";import"./js/Tooltip.ae0bcccb.js";import"./js/Plus.303de95b.js";import"./js/Editor.7fd59f57.js";import"./js/Blur.a27209d0.js";import"./js/RadioToggle.4c888ca1.js";import"./js/GoogleSearchPreview.6684da45.js";import"./js/HtmlTagsEditor.f7794300.js";import"./js/UnfilteredHtml.47ebc566.js";import"./js/popup.b60b699f.js";import"./js/Index.a5b2ee90.js";import"./js/Table.1a0736e7.js";import"./js/PostTypes.9ab32454.js";import"./js/InternalOutbound.07aa4acb.js";import"./js/RequiredPlans.661fcd2c.js";import"./js/Image.488d8cf8.js";import"./js/Img.abc640e1.js";import"./js/FacebookPreview.5a69f9ea.js";import"./js/Profile.499a6108.js";import"./js/TwitterPreview.45172c09.js";import"./js/Book.c168f1ae.js";import"./js/Settings.094dac52.js";import"./js/Build.3d1dbcfb.js";import"./js/Redirects.ca0d1b2b.js";import"./js/Index.bff498e4.js";import"./js/strings.225838ed.js";import"./js/isString.d3a213af.js";import"./js/ProBadge.bcf74c08.js";import"./js/External.e98f124d.js";import"./js/Exclamation.9b2c9d16.js";import"./js/Gear.b05c5b07.js";import"./js/Card.24f1a534.js";import"./js/Eye.c8a5ab7f.js";const _=()=>{f(r.state.currentPost)||r.dispatch("saveCurrentPost",r.state.currentPost)},y=()=>{document.getElementById("seedprod-builder-save").addEventListener("click",_)},g=()=>{seedprod_app.$watch("$route.name",o=>{if(o==="setup_settings_seo"){const e=n({history:s(),routes:[{path:"/",component:i}]});let t=p({data(){return{tableContext:window.aioseo.currentPost.context,screenContext:"metabox"}},mounted:()=>{setTimeout(d)},render:()=>m(i)});t=a(t),t=u(t),t=c(t),t.use(e),t.use(r),r._vm=t,e.app=t,t.config.globalProperties.$truSeo=new l,t.mount("#seedprod-preview-wrapper .seedprod-settings-page-wrapper")}},{immediate:!0})},b=()=>{const o=document.getElementById("aioseo-seedprod-common-css");o&&o.setAttribute("href",o.getAttribute("data-href"))},h=()=>{g(),b(),y()};document.addEventListener("DOMContentLoaded",()=>{seedprod_app&&seedprod_app._isMounted&&h()});
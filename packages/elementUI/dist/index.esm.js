import{Dialog as e,Select as o,DatePicker as n}from"element-ui";function p(){return window.__POWERED_BY_QIANKUN__}function d({container:d},t){!function({container:e},o){if(!p())return;const n=["vxe-table--tooltip-wrapper","vxe-pulldown--panel",...o.whiteList||[]],d=document.body.appendChild.bind(document.body);document.body.appendChild=p=>{n.some((e=>(p.className||"").includes(e)))?e.querySelector(o.elementId).appendChild(p):d(p)}}({container:d},t),e.props.modalAppendToBody.default=!1,e.props.appendToBody.default=!1,o.props.popperAppendToBody.default=!1,n.props.appendToBody=!1}export{d as fixElementStyle,p as isInQianKun};
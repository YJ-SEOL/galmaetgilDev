"use strict";(self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[]).push([[971],{8971:function(t,e,i){i.r(e),i.d(e,{default:function(){return c}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container mt-5 pt-5"},[i("div",{staticClass:"submit-form"},[t.submitted?i("div",[i("h4",[t._v("You submitted successfully!")]),i("button",{staticClass:"btn btn-success",on:{click:t.newTutorial}},[t._v(" Add ")])]):i("div",[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"title"}},[t._v("Title")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.tutorial.title,expression:"tutorial.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",required:"",name:"title"},domProps:{value:t.tutorial.title},on:{input:function(e){e.target.composing||t.$set(t.tutorial,"title",e.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"description"}},[t._v("Description")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.tutorial.description,expression:"tutorial.description"}],staticClass:"form-control",attrs:{id:"description",required:"",name:"description"},domProps:{value:t.tutorial.description},on:{input:function(e){e.target.composing||t.$set(t.tutorial,"description",e.target.value)}}})]),i("button",{staticClass:"btn btn-success",on:{click:t.saveTutorial}},[t._v(" Submit ")])])])])},o=[],u=(i(2526),i(1817),i(8657)),r={name:"add-tutorial",data:function(){return{tutorial:{id:null,title:"",description:"",published:"N"},submitted:!1}},methods:{saveTutorial:function(){var t=this,e={title:this.tutorial.title,description:this.tutorial.description};u.Z.create(e).then((function(e){t.tutorial.id=e.data.id,t.submitted=!0,console.log(e.data)})).catch((function(t){console.log(t)}))},newTutorial:function(){this.submitted=!1,this.tutorial={}}}},a=r,l=i(1001),s=(0,l.Z)(a,n,o,!1,null,null,null),c=s.exports},8657:function(t,e,i){var n=i(6133),o=i(2751),u=i(2327),r=function(){function t(){(0,n.Z)(this,t)}return(0,o.Z)(t,[{key:"getAll",value:function(){return u.Z.get("/tutorials")}},{key:"get",value:function(t){return u.Z.get("/tutorials/".concat(t))}},{key:"create",value:function(t){return u.Z.post("/tutorials",t)}},{key:"update",value:function(t,e){return u.Z.put("/tutorials/".concat(t),e)}},{key:"delete",value:function(t){return u.Z.put("/tutorials/deletion/".concat(t))}},{key:"deleteAll",value:function(){return u.Z.put("/tutorials")}},{key:"findByTitle",value:function(t){return u.Z.get("/tutorials?title=".concat(t))}}]),t}();e["Z"]=new r}}]);
//# sourceMappingURL=971-legacy.7e18134c.js.map
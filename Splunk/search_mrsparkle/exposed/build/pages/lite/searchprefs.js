webpackJsonp([67],{0:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__.p=function(){function make_url(){for(var seg,len,output="",i=0,l=arguments.length;i<l;i++)seg=arguments[i].toString(),len=seg.length,len>1&&"/"==seg.charAt(len-1)&&(seg=seg.substring(0,len-1)),output+="/"!=seg.charAt(0)?"/"+seg:seg;if("/"!=output){var segments=output.split("/"),firstseg=segments[1];if("static"==firstseg||"modules"==firstseg){var postfix=output.substring(firstseg.length+2,output.length);output="/"+firstseg,window.$C.BUILD_NUMBER&&(output+="/@"+window.$C.BUILD_NUMBER),window.$C.BUILD_PUSH_NUMBER&&(output+="."+window.$C.BUILD_PUSH_NUMBER),"app"==segments[2]&&(output+=":"+getConfigValue("APP_BUILD",0)),output+="/"+postfix}}var root=getConfigValue("MRSPARKLE_ROOT_PATH","/"),djangoRoot=getConfigValue("DJANGO_ROOT_PATH",""),locale=getConfigValue("LOCALE","en-US"),combinedPath="";return combinedPath=djangoRoot&&output.substring(0,djangoRoot.length)===djangoRoot?output.replace(djangoRoot,djangoRoot+"/"+locale.toLowerCase()):"/"+locale+output,""==root||"/"==root?combinedPath:root+combinedPath}function getConfigValue(key,defaultValue){if(window.$C&&window.$C.hasOwnProperty(key))return window.$C[key];if(void 0!==defaultValue)return defaultValue;throw new Error("getConfigValue - "+key+" not set, no default provided")}return make_url("/static/build/pages/lite")+"/"}(),__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__("routers/Searchprefs"),__webpack_require__("util/router_utils")],__WEBPACK_AMD_DEFINE_RESULT__=function(SearchprefsRouter,router_utils){new SearchprefsRouter;router_utils.start_backbone_history()}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))},"routers/Searchprefs":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__("shim/jquery"),__webpack_require__("require/underscore"),__webpack_require__("routers/Base"),__webpack_require__("views/SearchPrefs"),__webpack_require__("models/shared/TimeRange"),__webpack_require__("models/services/data/UserPrefGeneralDefault"),__webpack_require__("collections/services/data/ui/Times")],__WEBPACK_AMD_DEFINE_RESULT__=function($,_,BaseRouter,SearchPrefs,TimeRangeModel,UserPrefGeneralDefaultModel,TimesCollection){return BaseRouter.extend({initialize:function(){BaseRouter.prototype.initialize.apply(this,arguments),this.model.userPrefGeneralDefault=new UserPrefGeneralDefaultModel,this.model.timeRange=new TimeRangeModel,this.collection.times=new TimesCollection,this.deferreds.userPrefGeneralDefault=$.Deferred(),this.deferreds.timeRangeDeferred=$.Deferred(),this.deferreds.timesCollectionDeferred=$.Deferred(),this.enableAppBar=!1},page:function(locale,app,page){BaseRouter.prototype.page.apply(this,arguments),this.model.userPrefGeneralDefault.fetch({data:{app:this.model.application.get("app"),owner:this.model.application.get("owner")},success:function(model,response){this.deferreds.userPrefGeneralDefault.resolve()}.bind(this),error:function(model,response){this.deferreds.userPrefGeneralDefault.resolve()}.bind(this)}),this.collection.times.fetch({data:{app:this.model.application.get("app"),owner:this.model.application.get("owner"),count:-1},success:function(model,response){this.deferreds.timesCollectionDeferred.resolve()}.bind(this),error:function(model,response){this.deferreds.timesCollectionDeferred.resolve()}.bind(this)}),$.when(this.deferreds.userPrefGeneralDefault).then(function(){this.model.timeRange.save({earliest:this.model.userPrefGeneralDefault.entry.content.get("default_earliest_time"),latest:this.model.userPrefGeneralDefault.entry.content.get("default_latest_time")},{validate:!1,success:function(model,response){this.deferreds.timeRangeDeferred.resolve()}.bind(this),error:function(model,response){this.deferreds.timeRangeDeferred.resolve()}.bind(this)})}.bind(this)),$.when(this.deferreds.pageViewRendered,this.deferreds.timeRangeDeferred,this.deferreds.timeCollectionDeferred).then(function(){this.searchPrefsView=new SearchPrefs({model:{userPrefGeneralDefault:this.model.userPrefGeneralDefault,timeRange:this.model.timeRange,appLocal:this.model.appLocal,user:this.model.user,application:this.model.application},collection:{times:this.collection.times}}),this.setPageTitle(_("Search Preferences").t()),this.pageView.$(".main-section-body").html(this.searchPrefsView.render().el),$(".preload").replaceWith(this.pageView.el)}.bind(this))}})}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))},"views/SearchPrefs":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__("require/underscore"),module,__webpack_require__("uri/route"),__webpack_require__("views/Base"),__webpack_require__("views/shared/timerangepicker/Master"),__webpack_require__("views/shared/FlashMessages"),__webpack_require__("views/SearchPrefs.pcss")],__WEBPACK_AMD_DEFINE_RESULT__=function(_,module,route,Base,TimeRangePicker,FlashMessagesView,css){return Base.extend({moduleId:module.id,initialize:function(){Base.prototype.initialize.apply(this,arguments),this.backUrl="systemsettings",this.helpUrl=route.docHelp(this.model.application.get("root"),this.model.application.get("locale"),"learnmore.search.time_range_picker.global.default"),this.children.flashMessages=new FlashMessagesView({model:this.model.userPrefGeneralDefault}),this.children.timeRangePicker=new TimeRangePicker({model:{state:this.model.userPrefGeneralDefault,timeRange:this.model.timeRange,appLocal:this.model.appLocal,user:this.model.user,application:this.model.application},collection:this.collection.times,className:"btn-group",timerangeClassName:"btn",forceTimerangeChange:!0}),this.activate()},events:{"click .btn.save-button":function(e){this.model.userPrefGeneralDefault.save({},{data:{default_earliest_time:this.model.userPrefGeneralDefault.get("dispatch.earliest_time"),default_latest_time:this.model.userPrefGeneralDefault.get("dispatch.latest_time")},success:function(model,response){window.location.href=this.backUrl}.bind(this)}),e.preventDefault()}},render:function(){return this.$el.html(this.compiledTemplate({url:this.backUrl,helpUrl:this.helpUrl})),this.children.timeRangePicker.render().insertBefore(this.$(".exampleText")),this.children.flashMessages.render().prependTo(this.$(".formWrapper")),this},template:'\t                <div class="section-padded section-header"> \t                    <h2 class="section-title"><%- _("Search preferences").t() %></h2> \t                    <div class="breadcrumb"><a href="<%- url%>"><%- _("Server settings").t() %></a> &raquo <%- _("Search preferences").t() %></div> \t                </div>\t                <div class="editFormWrapper"> \t                    <div class="formWrapper"> \t                        <label><%- _("Default search time range").t() %></label> \t                        <p class="exampleText"> \t                            <em><%- _("This time range is used as the default time range for searches.").t() %></em> \t                            <a href="<%- helpUrl %>" target="_blank" class="help-link"><%- _("Learn more").t() %>\t                                <i class="icon-external"></i> \t                            </a> \t                        </p> \t                    </div> \t                    <div class="jmFormActions"> \t                        <a href="<%- url%>" class="btn btn-secondary cancel-button"><%- _("Cancel").t() %></a> \t                        <a href="#" class="btn btn-primary save-button"><%- _("Save").t() %></a> \t                    </div> \t                </div> \t                '})}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))},"views/SearchPrefs.pcss":function(module,exports,__webpack_require__){var content=__webpack_require__(1138);"string"==typeof content&&(content=[[module.id,content,""]]);__webpack_require__(14)(content,{});content.locals&&(module.exports=content.locals)},1138:function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(12)(),exports.push([module.id,".searchprefs .editFormWrapper{padding:0;position:relative;padding-top:10px;min-width:500px;max-width:940px;background:#fff;border:1px solid #ccc;margin:20px auto;border-radius:2px}.searchprefs .editFormWrapper .formWrapper{padding-bottom:5px;padding-left:10px;padding-right:10px;min-height:200px}.searchprefs .editFormWrapper .formWrapper .splBorder.splBorder-nsew.splBackground-primary.btn{border-radius:4px}.searchprefs .editFormWrapper .formWrapper .exampleText{margin-top:5px;padding-right:4px}.searchprefs .editFormWrapper .jmFormActions{border-top:1px solid #ccc;height:35px;padding:10px 10px 0}.searchprefs .editFormWrapper .jmFormActions .cancel-button{float:left}.searchprefs .editFormWrapper .jmFormActions .save-button{float:right}",""])}});
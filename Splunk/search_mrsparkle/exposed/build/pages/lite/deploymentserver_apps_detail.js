webpackJsonp([36],{0:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__.p=function(){function make_url(){for(var seg,len,output="",i=0,l=arguments.length;i<l;i++)seg=arguments[i].toString(),len=seg.length,len>1&&"/"==seg.charAt(len-1)&&(seg=seg.substring(0,len-1)),output+="/"!=seg.charAt(0)?"/"+seg:seg;if("/"!=output){var segments=output.split("/"),firstseg=segments[1];if("static"==firstseg||"modules"==firstseg){var postfix=output.substring(firstseg.length+2,output.length);output="/"+firstseg,window.$C.BUILD_NUMBER&&(output+="/@"+window.$C.BUILD_NUMBER),window.$C.BUILD_PUSH_NUMBER&&(output+="."+window.$C.BUILD_PUSH_NUMBER),"app"==segments[2]&&(output+=":"+getConfigValue("APP_BUILD",0)),output+="/"+postfix}}var root=getConfigValue("MRSPARKLE_ROOT_PATH","/"),djangoRoot=getConfigValue("DJANGO_ROOT_PATH",""),locale=getConfigValue("LOCALE","en-US"),combinedPath="";return combinedPath=djangoRoot&&output.substring(0,djangoRoot.length)===djangoRoot?output.replace(djangoRoot,djangoRoot+"/"+locale.toLowerCase()):"/"+locale+output,""==root||"/"==root?combinedPath:root+combinedPath}function getConfigValue(key,defaultValue){if(window.$C&&window.$C.hasOwnProperty(key))return window.$C[key];if(void 0!==defaultValue)return defaultValue;throw new Error("getConfigValue - "+key+" not set, no default provided")}return make_url("/static/build/pages/lite")+"/"}(),__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__("require/backbone"),__webpack_require__("routers/DeploymentServerAppsDetail"),__webpack_require__("util/router_utils")],__WEBPACK_AMD_DEFINE_RESULT__=function(Backbone,DeploymentServerAddClientsRouter,routerUtils){new DeploymentServerAddClientsRouter;routerUtils.start_backbone_history()}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))},1078:function(module,exports){module.exports='\n<div class="view-client-summary">\n\n  <!-- this should really use the shared singleValue component   -->\n  <div class="single-value shared-singlevalue span3" data-view="views/shared/SingleValue">\n      <!-- <span class="before-label">before</span> -->\n      <span class="single-result" id="appSize"></span>\n      <span class="after-label">MB</span>\n      <br>\n      <span class="under-label"><%-_("APP DATA SIZE").t()%></span>\n  </div>\n  <div class="single-value shared-singlevalue span3" data-view="views/shared/SingleValue">\n      <span class="single-result" id="numClientsWithApp"></span>\n      <span class="after-label" id="numClientsWithAppLabel" ><%-_("Clients").t()%></span></a>\n      <br>\n      <span class="under-label clients-match-text"></span>\n  </div>\n  <div class="single-value shared-singlevalue span3" data-view="views/shared/SingleValue">\n      <!-- <span class="before-label">before</span> -->\n      <span class="single-result" id="percentageDeployed">0</span>\n      <span class="after-label" id="percentDeployedLabel"><%-_("Clients").t()%></span>\n      <br>\n      <span class="under-label"><%-_("DEPLOYED THIS APP SUCCESSFULLY").t()%></span>\n  </div>\n\n</div>\n\n'},1079:function(module,exports){module.exports='\n<div class="section-header section-padded">\n  <div class="btn-toolbar">\n    <div id=\'app-btn-controls\' class="btn-group">\n      <a href="<%- docUrl %>" target="_blank" class="help-link btn"><%- _("Documentation").t() %> <i class="icon-external"></i></a>     \n    </div>\n  </div>\n\n  <h2 class="section-title"><%-_(\'App:\').t()%> <span id="appName"></span> </h2>\n  <p class="section-description"><strong><%-_(\'After Installation\').t()%></strong>: <%=app.getDeploymentInstructions()%></p>\n  <p><a href=<%=redirect_url%>><i class="icon-chevron-left"></i> <%-_(\'Back to Forwarder Management\').t()%></a></p>\n  <div id="read-only-msg-container"></div>\n\n  <div id=\'appSummary\' class="app-summary"></div>\n</div><!-- /.section-header -->\n\n<div class="section-padded">\n  <div class="dashboard-panel panel">\n    <div id="clientsContainer">\n         <h3 class="dashboard-title"><%-_(\'Clients\').t()%></h3>\n        <div class="main_edit_section push-margins" id="client_section"></div>\n    </div>\n  </div>\n</div>\n'},"views/deploymentserver/appDetail/DeleteButton":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__("shim/jquery"),module,__webpack_require__("views/deploymentserver/appDetail/UninstallDialog"),__webpack_require__("require/underscore"),__webpack_require__("views/Base")],__WEBPACK_AMD_DEFINE_RESULT__=function($,module,UninstallDialog,_,BaseView){return BaseView.extend({moduleId:module.id,tagName:"a",className:"btn",initialize:function(){BaseView.prototype.initialize.apply(this,arguments)},attributes:{href:"#"},render:function(){return this.$el.html(_("Uninstall").t()),this},events:{click:function(e){if(!this.options.isReadOnly)return this.renderUninstallDialog(),!1}},renderUninstallDialog:function(){this.children.uninstallDialog=new UninstallDialog({id:"modal_delete",parent:this,flashModel:this.model}),this.children.uninstallDialog.preventDefault(),$("body").append(this.children.uninstallDialog.render().el),this.children.uninstallDialog.show(),this.children.uninstallDialog.on("click:primaryButton",function(){this.model.entry.content.set("deinstall",!0);var that=this;this.model.save(null,{success:function(model,response){that.children.uninstallDialog.hide()}})},this)}})}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))},"views/deploymentserver/appDetail/Clients":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[module,__webpack_require__("require/backbone"),__webpack_require__("require/underscore"),__webpack_require__("views/shared/controls/SyntheticSelectControl"),__webpack_require__("views/deploymentserver/Clients")],__WEBPACK_AMD_DEFINE_RESULT__=function(module,Backbone,_,SyntheticSelectControl,ClientsView){return ClientsView.extend({moduleId:module.id,initialize:function(){ClientsView.prototype.initialize.apply(this,arguments),this.model.app.on("change",function(){this.renderSCFilter()},this)},renderSCFilter:function(){for(var items=[],serverclasses=this.model.app.entry.content.get("serverclasses"),i=0;i<serverclasses.length;i++){var curItem={value:serverclasses[i],label:_("Server Class: ").t()+serverclasses[i]};items.push(curItem)}items.push({value:"All",label:_("Server Class: All").t()}),this.children.serverclassFilter=new SyntheticSelectControl({menuWidth:"narrow",className:"btn-group pull-left",items:items,model:this.model.filters,toggleClassName:"btn-pill",modelAttribute:"sc_filter"}),this.model.filters.set("sc_filter","All"),this.model.filters.on("change:sc_filter",function(){var data=this.model.paginator.get("data")||{};"All"==this.model.filters.get("sc_filter")?delete data.serverclasses:data.serverclasses=this.model.filters.get("sc_filter"),this.model.paginator.set("data",data),this.model.paginator.trigger("change:data")},this),this.$(".filtersContainer").prepend(this.children.serverclassFilter.render().el)}})}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))},"views/deploymentserver/appDetail/AppName":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[module,__webpack_require__("views/Base")],__WEBPACK_AMD_DEFINE_RESULT__=function(module,BaseView){return BaseView.extend({moduleId:module.id,tagName:"span",className:"appName",initialize:function(){BaseView.prototype.initialize.apply(this,arguments),this.model.on("change",this.render,this)},render:function(){var html=this.compiledTemplate({app:this.model});return this.$el.html(html),this},template:' \t               <%- app ? app.entry.get("name") : "N/A"  %>\t            '})}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))},"routers/DeploymentServerAppsDetail":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__("shim/jquery"),__webpack_require__("require/underscore"),__webpack_require__("routers/Base"),__webpack_require__("require/backbone"),__webpack_require__("views/deploymentserver/appDetail/AppDetail"),__webpack_require__("collections/services/deploymentserver/DeploymentServerClients"),__webpack_require__("models/services/deploymentserver/DeploymentApplication"),__webpack_require__("collections/services/deploymentserver/ConfigViolations"),__webpack_require__("models/classicurl"),__webpack_require__("shim/bootstrap.tab")],__WEBPACK_AMD_DEFINE_RESULT__=function($,_,BaseRouter,Backbone,AppDetailView,DeploymentClientsCollection,DeploymentAppModel,ConfigViolationsCollection,classicurlModel,bootstrapTab){return BaseRouter.extend({initialize:function(){BaseRouter.prototype.initialize.apply(this,arguments),this.setPageTitle(_("Edit Apps").t()),this.enableAppBar=!1},page:function(locale,app,page){BaseRouter.prototype.page.apply(this,arguments);var filteredClientsList=new DeploymentClientsCollection,allClientsWithApp=new DeploymentClientsCollection,successfulClients=new DeploymentClientsCollection,configViolations=new ConfigViolationsCollection,that=this;classicurlModel.fetch({success:function(){that.deferreds.configViolations=configViolations.fetch();var appModel=new DeploymentAppModel;appModel.set("id",classicurlModel.get("id")),that.deferreds.appModel=appModel.fetch(),$.when(that.deferreds.configViolations,that.deferreds.appModel,that.deferreds.pageViewRendered).then(function(){$(".preload").replaceWith(this.pageView.el),this.appDetailView=new AppDetailView({model:{app:appModel},collection:{filteredClients:filteredClientsList,clientsWithApp:allClientsWithApp,successfulClients:successfulClients},deferreds:{app:this.deferreds.appModel},isReadOnly:configViolations.length>0,application:this.model.application}),this.pageView.$(".main-section-body").append(this.appDetailView.render().el)}.bind(that))}})}})}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))},"views/deploymentserver/appDetail/Summary":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[module,__webpack_require__("views/Base"),__webpack_require__("stubs/i18n"),__webpack_require__("shim/splunk.util"),__webpack_require__("require/underscore"),__webpack_require__("collections/services/deploymentserver/DeploymentServerClients"),__webpack_require__(1078)],__WEBPACK_AMD_DEFINE_RESULT__=function(module,BaseView,i18n,splunkUtil,_,ClientsCollection,summaryTemplate,SingleValue){return BaseView.extend({moduleId:module.id,template:summaryTemplate,initialize:function(){BaseView.prototype.initialize.apply(this,arguments),this.collection.clientsWithApp.on("reset",this.renderDeployedAppsRatio,this)},renderClientsWithApp:function(){var that=this;this.collection.clientsWithApp.fetch({data:{count:10,application:this.model.entry.get("name")},success:function(clientsWithApp,response){var numClientsWithApp=clientsWithApp.length>0?clientsWithApp.first().paging.get("total"):0;that.$("#numClientsWithAppLabel").html(i18n.ungettext("Client","Clients",numClientsWithApp)),that.$("#numClientsWithApp").html(numClientsWithApp),that.$(".clients-match-text").html(i18n.ungettext("Matches The App","Match the App",numClientsWithApp))}})},renderAppDataSize:function(){var appSize=this.model.entry.content.get("size");appSize instanceof Array&&(appSize=appSize[0]),appSize=(appSize/1048576).toFixed(1),this.$("#appSize").html(appSize)},renderDeployedAppsRatio:function(){var percentage="N/A";this.$("#percentageDeployed").html(percentage);var that=this;this.collection.successfulClients.fetch({data:{count:10,application:this.model.entry.get("name"),hasDeploymentError:!1},success:function(successfulClients,response){var numSuccessfulClients=successfulClients.length>0?successfulClients.first().paging.get("total"):0,numClientsWithApp=that.collection.clientsWithApp.length>0?that.collection.clientsWithApp.first().paging.get("total"):0;percentage=numClientsWithApp?i18n.format_percent((numSuccessfulClients/numClientsWithApp).toFixed(2)):"N/A",that.$("#percentageDeployed").html(percentage)}})},render:function(){var html=this.compiledTemplate({_:_});return this.$el.html(html),this.renderAppDataSize(),this.renderClientsWithApp(),this.renderDeployedAppsRatio(),this}})}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))},1080:function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(12)(),exports.push([module.id,'.section-header{position:relative;padding-bottom:0}.section-header:after,.section-header:before{display:table;content:"";line-height:0}.section-header:after{clear:both}.section-header .btn-toolbar{float:right}.dashboard-panel .dashboard-title{margin:-20px -20px 10px;padding:15px 20px 10px;border-bottom:1px solid #333;font-size:16px;font-weight:400;color:#333}.dashboard-panel .filtersContainer{padding-right:20px;padding-left:20px;margin-bottom:10px}.dashboard-panel .deploymentserver-search{margin-bottom:0}.dashboard-panel .message-single{margin:0 20px}.dashboard-panel:first-child{margin-top:-20px}.filtersContainer,.paginator_container{padding-left:20px}.deployment_filter .btn-group{margin-right:5px}',""])},"views/deploymentserver/appDetail/AppDetail":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[module,__webpack_require__("views/Base"),__webpack_require__("require/backbone"),__webpack_require__("require/underscore"),__webpack_require__("views/deploymentserver/appDetail/Clients"),__webpack_require__("views/deploymentserver/appDetail/AppName"),__webpack_require__("views/deploymentserver/appDetail/EditButton"),__webpack_require__("views/deploymentserver/appDetail/DeleteButton"),__webpack_require__("views/deploymentserver/appDetail/Summary"),__webpack_require__("views/deploymentserver/shared/ReadOnlyMessage"),__webpack_require__("uri/route"),__webpack_require__(1079),__webpack_require__("views/deploymentserver/appDetail/AppDetail.pcss"),__webpack_require__("views/deploymentserver/shared.pcss")],__WEBPACK_AMD_DEFINE_RESULT__=function(module,BaseView,Backbone,_,ClientsView,AppName,EditButton,DeleteButton,SummaryView,ReadOnlyMessage,route,appDetailTemplate,css,cssShared){return BaseView.extend({moduleId:module.id,template:appDetailTemplate,initialize:function(){BaseView.prototype.initialize.apply(this,arguments),this.children.appName=new AppName({model:this.model.app}),this.children.editBtn=new EditButton({model:this.model.app,isReadOnly:this.options.isReadOnly,application:this.options.application}),this.children.deleteBtn=new DeleteButton({model:this.model.app,isReadOnly:this.options.isReadOnly}),this.model.clientsTablePaginator=new Backbone.Model,this.children.clientsView=new ClientsView({model:{filters:new Backbone.Model,paginator:this.model.clientsTablePaginator,app:this.model.app},collection:this.collection.filteredClients,application:this.options.application}),this.children.summaryView=new SummaryView({model:this.model.app,collection:this.collection}),this.children.readOnlyMsg=new ReadOnlyMessage({model:{application:this.options.application}})},render:function(){var docUrl=route.docHelp(this.options.application.get("root"),this.options.application.get("locale"),"manager.deployment.fm.app"),html=this.compiledTemplate({_:_,app:this.model.app,docUrl:docUrl,redirect_url:route.manager(this.options.application.get("root"),this.options.application.get("locale"),this.options.application.get("app"),"deploymentserver",{data:{t:0}})});return this.$el.html(html),this.options.isReadOnly&&this.$el.addClass("read-only"),this.renderClientsTable(),this.renderSummaryBar(),this.$("#appName").append(this.children.appName.render().el),this.$("#app-btn-controls").prepend(this.children.deleteBtn.render().el),this.$("#app-btn-controls").prepend(this.children.editBtn.render().el),this.$("#read-only-msg-container").append(this.children.readOnlyMsg.render().el),this},renderSummaryBar:function(){this.$("#appSummary").append(this.children.summaryView.render().el)},renderClientsTable:function(){var data=this.model.clientsTablePaginator.get("data")||{};data.application=this.model.app.entry.get("name"),this.model.clientsTablePaginator.set("data",data);var that=this;this.collection.filteredClients.fetch({data:data,success:function(){that.$("#client_section").append(that.children.clientsView.render().el)}})}})}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))},"views/deploymentserver/appDetail/AppDetail.pcss":function(module,exports,__webpack_require__){var content=__webpack_require__(1080);"string"==typeof content&&(content=[[module.id,content,""]]);__webpack_require__(14)(content,{});content.locals&&(module.exports=content.locals)},"views/deploymentserver/appDetail/EditButton":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[module,__webpack_require__("uri/route"),__webpack_require__("views/Base"),__webpack_require__("require/underscore")],__WEBPACK_AMD_DEFINE_RESULT__=function(module,route,BaseView,_){return BaseView.extend({moduleId:module.id,tagName:"a",className:"btn",initialize:function(){BaseView.prototype.initialize.apply(this,arguments)},attributes:{href:"#"},render:function(){return this.$el.html(_("Edit").t()),this},events:{click:function(e){if(!this.options.isReadOnly)return window.location.href=route.manager(this.options.application.get("root"),this.options.application.get("locale"),this.options.application.get("app"),"deploymentserver_edit_app",{data:{id:this.model.id}}),!1}}})}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}});
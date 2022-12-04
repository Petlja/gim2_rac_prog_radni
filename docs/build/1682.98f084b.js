"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[1682,5135],{21682:(n,e,t)=>{t.r(e),t.d(e,{default:()=>c});var s=t(16236),i=t(8956),a=t(41580),o=t(6247),l=t(22400),r=t(43892);var d=t(27321),h=t(62318);class u{constructor(n){this._tabsChanged=new h.Signal(this),this._widgets=[],this._labShell=n,this._labShell.layoutModified.connect(this._emitTabsChanged,this)}get tabsChanged(){return this._tabsChanged}addWidget(n){n.title.changed.connect(this._emitTabsChanged,this),this._widgets.push(n)}_emitTabsChanged(){this._widgets.forEach((n=>{n.title.changed.disconnect(this._emitTabsChanged,this)})),this._widgets=[],this._tabsChanged.emit(void 0)}}const c={activate:function(n,e,t,s){const a=e.load("jupyterlab"),h=new i.RunningSessionManagers,c=new i.RunningSessions(h,e);return c.id="jp-running-sessions",c.title.caption=a.__("Running Terminals and Kernels"),c.title.icon=o.runningIcon,c.node.setAttribute("role","region"),c.node.setAttribute("aria-label",a.__("Running Sessions section")),t&&t.add(c,"running-sessions"),s&&function(n,e,t){const s=new u(t),i=e.load("jupyterlab");n.add({name:i.__("Open Tabs"),running:()=>(0,r.toArray)(t.widgets("main")).map((n=>(s.addWidget(n),new a(n)))),shutdownAll:()=>{(0,r.toArray)(t.widgets("main")).forEach((n=>{n.close()}))},refreshRunning:()=>{},runningChanged:s.tabsChanged,shutdownLabel:i.__("Close"),shutdownAllLabel:i.__("Close All"),shutdownAllConfirmationText:i.__("Are you sure you want to close all open tabs?")});class a{constructor(n){this._widget=n}open(){t.activateById(this._widget.id)}shutdown(){this._widget.close()}icon(){const n=this._widget.title.icon;return n instanceof o.LabIcon?n:o.fileIcon}label(){return this._widget.title.label}labelTitle(){let n;return n=this._widget instanceof d.DocumentWidget?this._widget.context.path:this._widget.title.label,n}}}(h,e,s),function(n,e,t){const s=e.load("jupyterlab"),i=t.serviceManager.sessions,a=t.serviceManager.kernelspecs;function d(n){return!(-1===(n.name||l.PathExt.basename(n.path)).indexOf(".")&&!n.name)}n.add({name:s.__("Kernels"),running:()=>(0,r.toArray)(i.running()).filter(d).map((n=>new h(n))),shutdownAll:()=>i.shutdownAll(),refreshRunning:()=>i.refreshRunning(),runningChanged:i.runningChanged,shutdownLabel:s.__("Shut Down"),shutdownAllLabel:s.__("Shut Down All"),shutdownAllConfirmationText:s.__("Are you sure you want to permanently shut down all running kernels?")});class h{constructor(n){this._model=n}open(){const{path:n,type:e}=this._model;"console"===e.toLowerCase()?t.commands.execute("console:open",{path:n}):t.commands.execute("docmanager:open",{path:n})}shutdown(){return i.shutdown(this._model.id)}icon(){const{name:n,path:e,type:t}=this._model;return-1!==(n||l.PathExt.basename(e)).indexOf(".ipynb")?o.notebookIcon:"console"===t.toLowerCase()?o.consoleIcon:o.fileIcon}label(){return this._model.name||l.PathExt.basename(this._model.path)}labelTitle(){const{kernel:n,path:e}=this._model;let t=null==n?void 0:n.name;if(t&&a.specs){const n=a.specs.kernelspecs[t];t=n?n.display_name:"unknown"}return s.__("Path: %1\nKernel: %2",e,t)}}}(h,e,n),n.shell.add(c,"left",{rank:200}),h},id:"@jupyterlab/running-extension:plugin",provides:i.IRunningSessionManagers,requires:[a.ITranslator],optional:[s.ILayoutRestorer,s.ILabShell],autoStart:!0}}}]);
//# sourceMappingURL=1682.98f084b.js.map
(self.webpackChunkfishing_study_app=self.webpackChunkfishing_study_app||[]).push([[360],{9360:(t,e,r)=>{"use strict";r.r(e),r.d(e,{MapModule:()=>y});var o=r(1116),a=r(3337),n=r(4985),i=r(5366),c=r(2693),s=r(1267),l=r(6599);let p=(()=>{class t{constructor(t){this.http=t,this._baseUrl=s.N.baseUrl,this.arrayMarkers=[]}get getArrayMarkers(){return[...this.arrayMarkers]}newMarker(t){const e=`${this._baseUrl}/markers`,{lng:r,lat:o}=t.newMarker.getLngLat(),{color:a}=t,n={color:a,lnglat:`[${r},${o}]`},i=(new c.WM).append("x-token",localStorage.getItem("token")||"");return this.http.post(e,n,{headers:i})}getMarkers(){const t=`${this._baseUrl}/markers`,e=(new c.WM).append("x-token",localStorage.getItem("token")||"");return this.http.get(t,{headers:e}).pipe((0,l.b)(t=>{this.arrayMarkers=t.markers}))}updateMarker(t,e){const r=`${this._baseUrl}/markers/${t}`,o=(new c.WM).append("x-token",localStorage.getItem("token")||"");return this.http.put(r,e,{headers:o}).subscribe(console.log)}deleteMarker(t){const e=`${this._baseUrl}/markers/${t}`,r=(new c.WM).append("x-token",localStorage.getItem("token")||"");return this.http.delete(e,{headers:r}).subscribe(console.log)}getPlaceName(t,e){return this.http.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${t},${e}.json?access_token=pk.eyJ1IjoiamVhbmx1Yy1ib3F1aW4iLCJhIjoiY2twZ2gxd3ZpMDJrNzJ1b2x6cHk5c2g5biJ9.M-5ncjMZSY7kMrN9vIsn4g&types=place`)}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(c.eN))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var d=r(4369),g=r(7307),m=r(667);const u=["mapa"],h=function(t){return{color:t}};function b(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"button",12),i.NdJ("click",function(){const e=i.CHM(t).index;return i.oxw().flyTo(e)})("dblclick",function(){const e=i.CHM(t).index;return i.oxw().removeMarker(e)}),i._uU(1),i.qZA()}if(2&t){const t=e.index;i.Q6J("ngStyle",i.VKq(2,h,e.$implicit.color)),i.xp6(1),i.hij(" Marker ",t+1," ")}}let k=(()=>{class t{constructor(t){this.mapService=t,this.arrayMarker=[],this.zoomLevel=6.5,this.center={lat:14.526323177451724,lng:-86.60740463863459}}ngOnDestroy(){this.mapbox.off("zoom",()=>{}),this.mapbox.off("zoomend",()=>{}),this.mapbox.off("move",()=>{})}ngAfterViewInit(){this.mapbox=new n.Map({container:this.divMap.nativeElement,style:"mapbox://styles/mapbox/dark-v10",center:this.center,zoom:this.zoomLevel}),this.mapbox.on("zoom",t=>{this.zoomLevel=this.mapbox.getZoom()}),this.mapbox.on("zoomend",t=>{this.mapbox.getZoom()>18&&this.mapbox.zoomTo(18)}),this.mapbox.on("move",t=>{this.center=t.target.getCenter()}),this.mapService.getMarkers().subscribe(t=>{!0===t.ok&&t.markers.forEach(t=>{const e=new n.Marker({draggable:!0,color:t.color}).setLngLat(JSON.parse(t.lnglat)).addTo(this.mapbox);e.on("dragend",e=>{var r;const o=this.arrayMarker.find(e=>e.id==t.id),{lng:a,lat:n}=null===(r=null==o?void 0:o.newMarker)||void 0===r?void 0:r.getLngLat();this.mapService.updateMarker(t.id,{lnglat:`[${a},${n}]`})}),this.arrayMarker.push(Object.assign({newMarker:e},t))})})}zoom(t){"P"===t?(console.log("Sumar"),this.mapbox.zoomIn()):"M"===t&&(console.log("Restar"),this.mapbox.zoomOut()),console.log(this.mapbox.getZoom())}generalColor(){var t;t="#";for(var e=0;e<6;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t}addMarker(){const t="#xxxxxx".replace(/x/g,t=>(16*Math.random()|0).toString(16));console.log("agregando marcador");const e=new n.Marker({draggable:!0,color:t}).setLngLat(this.center).addTo(this.mapbox);this.mapService.newMarker({color:t,newMarker:e}).subscribe(t=>{this.arrayMarker.push(Object.assign({newMarker:e},t.marker)),e.on("dragend",e=>{var r,o;const a=this.arrayMarker.find(e=>{var r;return e.id==(null===(r=t.marker)||void 0===r?void 0:r.id)}),{lng:n,lat:i}=null===(r=null==a?void 0:a.newMarker)||void 0===r?void 0:r.getLngLat();this.mapService.updateMarker(null===(o=t.marker)||void 0===o?void 0:o.id,{lnglat:`[${n},${i}]`})})})}flyTo(t){console.log(this.arrayMarker[t]),this.mapbox.flyTo({center:this.arrayMarker[t].newMarker.getLngLat(),zoom:14})}removeMarker(t){this.arrayMarker[t].newMarker.remove(),this.mapService.deleteMarker(this.arrayMarker[t].id),this.arrayMarker.splice(t,1)}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(p))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-map-view"]],viewQuery:function(t,e){if(1&t&&i.Gf(u,5),2&t){let t;i.iGM(t=i.CRH())&&(e.divMap=t.first)}},decls:22,vars:9,consts:[[1,"animate__animated","animate__fadeIn"],[1,"mapa"],["mapa",""],[1,"zoom"],["mat-stroked-button","","color","accent",1,"zoomButton",3,"click"],[1,"fas","fa-plus"],[2,"color","#dddddd","margin","0"],[1,"marker"],[2,"padding","0"],[1,"barScroll"],["mat-list-item","",1,"colorText",3,"click"],["mat-list-item","","class","colorText",3,"ngStyle","click","dblclick",4,"ngFor","ngForOf"],["mat-list-item","",1,"colorText",3,"ngStyle","click","dblclick"]],template:function(t,e){1&t&&(i.TgZ(0,"div",0),i._UZ(1,"div",1,2),i.TgZ(3,"div",3),i.TgZ(4,"button",4),i.NdJ("click",function(){return e.zoom("P")}),i._UZ(5,"i",5),i.qZA(),i.TgZ(6,"button",4),i.NdJ("click",function(){return e.zoom("M")}),i.TgZ(7,"mat-icon"),i._uU(8,"remove"),i.qZA(),i.qZA(),i.TgZ(9,"p",6),i._uU(10," Lat | Lon "),i.qZA(),i.TgZ(11,"p",6),i._uU(12),i.ALo(13,"number"),i.ALo(14,"number"),i.qZA(),i.qZA(),i.TgZ(15,"div",7),i.TgZ(16,"mat-action-list",8),i.TgZ(17,"div",9),i.TgZ(18,"button",10),i.NdJ("click",function(){return e.addMarker()}),i._uU(19,"Agregar\xa0"),i._UZ(20,"i",5),i.qZA(),i.YNc(21,b,2,4,"button",11),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(12),i.AsE(" ",i.xi3(13,3,e.center.lat,"2.2-2")," | ",i.xi3(14,6,e.center.lng,"2.2-2")," "),i.xp6(9),i.Q6J("ngForOf",e.arrayMarker))},directives:[d.lW,g.Hw,m.i$,m.Tg,o.sg,o.PC],pipes:[o.JJ],styles:[".zoomButton[_ngcontent-%COMP%]{border-color:#ff408066!important;padding:0;margin-bottom:5px;border-radius:50%;width:38px;min-width:38px}.mapa[_ngcontent-%COMP%]{top:56px;bottom:0;width:100%}.mapa[_ngcontent-%COMP%], .zoom[_ngcontent-%COMP%]{position:fixed}.zoom[_ngcontent-%COMP%]{box-sizing:initial;display:flex;flex-direction:column;align-items:center;bottom:50px;left:15px;border-radius:5px;padding:10px;background-color:#ff408008}.marker[_ngcontent-%COMP%]{position:fixed;top:60px;right:20px;background-color:#ff408033}.colorText[_ngcontent-%COMP%]{justify-content:center;color:#ddd}.barScroll[_ngcontent-%COMP%]{max-height:240px;overflow-y:scroll}.barScroll[_ngcontent-%COMP%]::-webkit-scrollbar{width:7px}.barScroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#83838366;border-radius:5px}"]}),t})();const v=["mapa"];let f=(()=>{class t{constructor(){this.lnglat=[0,0],this.color=""}ngAfterViewInit(){const t=new n.Map({container:this.divMapa.nativeElement,style:"mapbox://styles/mapbox/dark-v10",center:this.lnglat,zoom:10,interactive:!1});new n.Marker({color:this.color}).setLngLat(this.lnglat).addTo(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-mini-mapa"]],viewQuery:function(t,e){if(1&t&&i.Gf(v,5),2&t){let t;i.iGM(t=i.CRH())&&(e.divMapa=t.first)}},inputs:{lnglat:"lnglat",color:"color"},decls:2,vars:0,consts:[[2,"border-radius","8px"],["mapa",""]],template:function(t,e){1&t&&i._UZ(0,"div",0,1)},styles:["div[_ngcontent-%COMP%]{width:100%;height:150px;margin:0}"]}),t})();function x(t,e){if(1&t&&(i.TgZ(0,"div",8),i.TgZ(1,"div",9),i._UZ(2,"app-mini-mapa",10),i.TgZ(3,"div",11),i.TgZ(4,"h5",12),i._uU(5),i.qZA(),i.TgZ(6,"button",13),i._uU(7,"Recoleccion de datos"),i.qZA(),i.TgZ(8,"button",14),i._uU(9,"Ver clima"),i.qZA(),i.TgZ(10,"button",14),i._uU(11,"Explorar"),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&t){const t=e.$implicit;i.xp6(2),i.Q6J("lnglat",t.lngLat)("color",t.color),i.xp6(3),i.Oqu(t.titulo)}}const M=[{path:"",children:[{path:"map-view",component:k},{path:"card-view",component:(()=>{class t{constructor(t){this.mapService=t,this.propiedades=[]}ngAfterViewInit(){var t="";this.mapService.getMarkers().subscribe(e=>{var r;null===(r=e.markers)||void 0===r||r.forEach(e=>{const[r,o]=JSON.parse(e.lnglat);this.mapService.getPlaceName(r,o).subscribe(r=>{var o;t=(null===(o=r.features[0])||void 0===o?void 0:o.place_name)||"",this.propiedades.push({color:e.color,titulo:t,descripcion:"Lujoso apartamento en el coraz\xf3n de Buenos Aires, Argentina",lngLat:JSON.parse(e.lnglat)})})})})}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(p))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-card-view"]],decls:11,vars:1,consts:[[1,"prueba"],[1,"row","mt-3"],[1,"col",2,"text-align","center"],[1,"row","container"],[1,"col-2"],[1,"col"],[1,"row"],["class","col-4 mb-2",4,"ngFor","ngForOf"],[1,"col-4","mb-2"],[1,"card",2,"border-radius","10px"],[1,"card-img-top",3,"lnglat","color"],[1,"card-body"],[1,"card-title"],["mat-raised-button","","color","accent",1,"w-100","mt-1"],["mat-stroked-button","","color","accent",1,"w-100","mt-2"]],template:function(t,e){1&t&&(i._UZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i.TgZ(3,"h1"),i._uU(4,"Zonas de Estudio"),i.qZA(),i._UZ(5,"hr"),i.qZA(),i.qZA(),i.TgZ(6,"div",3),i._UZ(7,"div",4),i.TgZ(8,"div",5),i.TgZ(9,"div",6),i.YNc(10,x,12,3,"div",7),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(10),i.Q6J("ngForOf",e.propiedades))},directives:[o.sg,f,d.lW],styles:[".prueba[_ngcontent-%COMP%]{width:100%;position:absolute;top:56px;bottom:-10px;background-image:url(90.ea64f17445f9bd7c9ac7.png);background-repeat:no-repeat;background-position:50%;background-attachment:fixed;background-size:cover}"]}),t})()},{path:"",redirectTo:"map-view",pathMatch:"full"}]}];let Z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[a.Bz.forChild(M)],a.Bz]}),t})();var w=r(4784);let y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[o.ez,Z,w.q]]}),t})()}}]);
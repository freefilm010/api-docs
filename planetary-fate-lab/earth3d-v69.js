(()=>{"use strict";
const SHAPES={Mercury:[2439.7,2439.7],Venus:[6051.8,6051.8],Earth:[6378.137,6356.7523],Mars:[3396.2,3376.2],Jupiter:[71492,66854],Saturn:[60268,54364],Uranus:[25559,24973],Neptune:[24764,24341],Ceres:[482.1,445.9],Pluto:[1188.3,1188.3],Haumea:[1161,513],Makemake:[715,715],Eris:[1163,1163]};
const E=window.PFL_EARTH3D={viewer:null,ready:false,promise:null,terrain:"WGS84 ellipsoid",raf:0,last:0};
const oldRender=renderBody,oldView=setView;
const $id=id=>document.getElementById(id);
function bodyName(){return P[st.body]?.[0]||""}
function shape(){const b=bodyName(),s=SHAPES[b];document.documentElement.style.setProperty("--shapeY",s?(s[1]/s[0]).toFixed(4):"1");const facts=$id("facts");if(!facts||!s)return;facts.querySelectorAll(".pflShape").forEach(x=>x.remove());const d=document.createElement("div");d.className="fact pflShape";d.innerHTML="<b>Physical shape</b>"+s[0].toLocaleString()+" km equatorial / "+s[1].toLocaleString()+" km polar";facts.appendChild(d);for(const bEl of facts.querySelectorAll(".fact b"))if(bEl.textContent==="Display scale")bEl.textContent="Fit-to-view scale"}
function status(t){const el=$id("earthEngineStatus");if(!el)return;el.hidden=false;el.textContent=t||("TRUE 3D EARTH · WGS84 · "+E.terrain)}
async function cesium(timeout=9000){const t=performance.now();while(!window.Cesium&&performance.now()-t<timeout)await new Promise(r=>setTimeout(r,80));return window.Cesium||null}
async function init(){if(E.ready&&E.viewer)return E.viewer;if(E.promise)return E.promise;E.promise=(async()=>{const C=await cesium();if(!C)throw Error("CesiumJS unavailable");const host=$id("cesiumEarth");if(!host)throw Error("Earth host missing");
let imagery;try{imagery=new C.UrlTemplateImageryProvider({url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",credit:"Esri, Maxar, Earthstar Geographics, GIS User Community",maximumLevel:19})}catch(_){imagery=new C.OpenStreetMapImageryProvider({url:"https://tile.openstreetmap.org/",credit:"OpenStreetMap contributors"})}
const viewer=new C.Viewer(host,{animation:false,timeline:false,baseLayerPicker:false,geocoder:false,homeButton:false,sceneModePicker:false,navigationHelpButton:false,fullscreenButton:false,selectionIndicator:false,infoBox:false,scene3DOnly:true,shouldAnimate:true,terrainProvider:new C.EllipsoidTerrainProvider({ellipsoid:C.Ellipsoid.WGS84}),baseLayer:new C.ImageryLayer(imagery),skyAtmosphere:true});
viewer.scene.globe.enableLighting=true;viewer.scene.globe.showGroundAtmosphere=true;viewer.scene.globe.depthTestAgainstTerrain=true;viewer.scene.highDynamicRange=true;viewer.resolutionScale=Math.min(1.5,window.devicePixelRatio||1);E.viewer=viewer;E.ready=true;
try{viewer.terrainProvider=await C.ArcGISTiledElevationTerrainProvider.fromUrl("https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer");E.terrain="WorldElevation3D";viewer.scene.globe.showWaterEffect=true}catch(_){E.terrain="WGS84 ellipsoid"}
home(st.view||"free",false);status();return viewer})().catch(err=>{E.promise=null;E.ready=false;fallback(err.message);throw err});return E.promise}
function controls(v){if(!E.viewer)return;const c=E.viewer.scene.screenSpaceCameraController;c.enableRotate=v!=="action";c.enableTranslate=v!=="action";c.enableZoom=v!=="action";c.enableTilt=v!=="action";c.enableLook=v==="first"||v==="free"}
function home(v,animate=true){if(!E.viewer||!window.Cesium)return;const C=window.Cesium;let dest,ori={heading:0,pitch:C.Math.toRadians(-90),roll:0};
if(v==="first"){dest=C.Cartesian3.fromDegrees(0,51.4779,1800);ori={heading:C.Math.toRadians(90),pitch:C.Math.toRadians(-3),roll:0}}
else if(v==="third"){dest=C.Cartesian3.fromDegrees(-20,18,6500000);ori={heading:C.Math.toRadians(20),pitch:C.Math.toRadians(-55),roll:0}}
else if(v==="skybox"){dest=C.Cartesian3.fromDegrees(-25,12,23000000)}
else if(v==="action"){dest=C.Cartesian3.fromDegrees(-145,12,9500000);ori={heading:C.Math.toRadians(35),pitch:C.Math.toRadians(-60),roll:0}}
else dest=C.Cartesian3.fromDegrees(-25,15,12000000);
const o={destination:dest,orientation:ori,duration:animate?1.1:0};animate?E.viewer.camera.flyTo(o):E.viewer.camera.setView(o);controls(v);status()}
function tick(ts){if(!E.ready||bodyName()!=="Earth"){E.raf=0;E.last=0;return}const auto=$id("autoRotate")?.checked&&(st.view==="skybox"||st.view==="free");if(auto){if(E.last)E.viewer.camera.rotate(window.Cesium.Cartesian3.UNIT_Z,-Math.min(50,ts-E.last)*.000018);E.last=ts;E.raf=requestAnimationFrame(tick)}else{E.raf=0;E.last=0}}
function rotate(){if(E.raf)cancelAnimationFrame(E.raf);E.raf=requestAnimationFrame(tick)}
function fallback(reason){$id("stage")?.classList.remove("earth3d");if($id("planetRig"))$id("planetRig").style.display="";status("Geospatial Earth unavailable — simplified fallback only"+(reason?" · "+reason:""))}
async function show(){const stage=$id("stage");stage?.classList.add("earth3d");if($id("planetRig"))$id("planetRig").style.display="none";try{await init();home(st.view||"free",false);rotate();setTimeout(()=>E.viewer?.resize(),40)}catch(_){}}
function hide(){const stage=$id("stage");stage?.classList.remove("earth3d");if($id("planetRig"))$id("planetRig").style.display="";if(E.raf)cancelAnimationFrame(E.raf);E.raf=0;E.last=0;const s=$id("earthEngineStatus");if(s)s.hidden=true}
renderBody=function(){oldRender();shape();if(bodyName()==="Earth")show();else hide()};
setView=function(v){oldView(v);if(bodyName()==="Earth"&&E.ready){home(v,true);rotate()}};
$id("autoRotate")?.addEventListener("change",()=>{if(bodyName()==="Earth")rotate()});
window.addEventListener("resize",()=>{if(E.ready)E.viewer.resize()});
setTimeout(()=>renderBody(),0);
})();
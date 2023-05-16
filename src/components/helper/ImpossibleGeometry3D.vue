<template>
<div>
    <div id='canvas'/> 
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
@Options({
  props: {
  }
})
export default class ImpossibleGeometry3D extends Vue {

    camera : any;
    renderer : any;
    light : any;
    light2 : any;
    light4: any;

    scene : any;
    scene1: any;
    scene2: any;
    scene3: any;
    scene4: any;

    modelSize = 2;

    axes : any;
    speed : any;
    width =0;
    height =0;
    mouse = [ .5, .5 ];
    sceneStencil : any;

    createSide1(){
        let box1 = new THREE.PlaneGeometry(1, 1);
        let m1 = new THREE.Mesh(box1, new THREE.MeshBasicMaterial({
            color: 0xff0000,
        }));
        m1.rotation.y=90 * Math.PI / 180;
        m1.position.x+=0.55 * this.modelSize;
        m1.scale.set(this.modelSize,this.modelSize,this.modelSize);
        const floader = new FontLoader();
        floader.load( "optimer.json", ( response ) =>{
            let font = response;
            let box2 = new TextGeometry( "back", {
                height:0.3,
                font: font,
                size: 0.6,
            } );
            let m2 = new THREE.Mesh(box2, new THREE.MeshLambertMaterial({
                color: 0x049ef4,
                emissive:0x7b0fff
            }));
            m2.rotation.y = 90 * Math.PI / 180;
            m2.position.z+=0.9;
            //m2.position.y+=0.1*this.modelSize;
            m2.renderOrder = 2;
            this.scene2.add(m2);
        } );


        this.scene1.add(m1);
        const loader = new GLTFLoader();
        loader.load( '/cubezone.glb', ( gltf )=> {
            let mesh : any = gltf.scene.children[0];
            const size = 0.54 * this.modelSize;
            mesh.scale.x = size;
            mesh.scale.y = size;
            mesh.scale.z = size;
            mesh.material = new THREE.MeshLambertMaterial( { 
                color: 0xffffff } );
            mesh.material.side = THREE.BackSide;
            mesh.renderOrder = 1;
            this.scene2.add(mesh);
        }, undefined, function ( error ) {
            console.error( error );
        } );
        this.scene2.add(this.light);
        this.scene2.add(this.light2);

    }

    createSide2(){
        let box3 = new THREE.PlaneGeometry(1, 1);
        let m3 = new THREE.Mesh(box3, new THREE.MeshBasicMaterial({
            transparent:true,
            opacity:0.6,
            color: 0x0000ff
        }));
        m3.position.z+=0.55 * this.modelSize;
        m3.scale.set(this.modelSize,this.modelSize,this.modelSize);
        this.scene3.add(m3);
        const floader = new FontLoader();
        floader.load( "optimer.json", ( response ) =>{
            let font = response;
            console.log(font);
            let box4 = new TextGeometry( "front", {
                height:0.3,
                font: font,
                size: 0.6,
            });
            let m4 = new THREE.Mesh(box4, new THREE.MeshLambertMaterial({
                color: 0xf6046d,
                emissive: 0x0fff83
            }));
            m4.position.x-=0.5*this.modelSize;
            //m4.position.y+=0.1*this.modelSize;
            m4.renderOrder = 2;
            this.scene4.add(m4);
        } );
        
        const loader = new GLTFLoader();
        loader.load( '/cubezone.glb', ( gltf )=> {
            let mesh : any = gltf.scene.children[0];
            const size = 0.54 * this.modelSize;
            mesh.scale.x = size;
            mesh.scale.y = size;
            mesh.scale.z = size;
            mesh.material = new THREE.MeshLambertMaterial( { color: 0xffffff } );
            mesh.material.side = THREE.BackSide;
            mesh.rotation.y = -90 * Math.PI / 180;
            mesh.renderOrder = 1;
            this.scene4.add(mesh);
        }, undefined, function ( error ) {
            console.error( error );
        } );
        
        this.scene4.add(this.light4);
    }

    createOther(){
        const loader = new GLTFLoader();
        loader.load('/armature.glb', ( gltf )=> {
            let mesh : any = gltf.scene.children[0];
            const size = 0.55* this.modelSize;
            mesh.scale.x = size;
            mesh.scale.y = size;
            mesh.scale.z = size;
            mesh.material = new THREE.MeshLambertMaterial( { color: 0xffffff } );
            this.scene.add(mesh);
        }, undefined, function ( error ) {
            console.error( error );
        } );
        this.scene.add(this.light);

    }

    created() {

        this.scene = new THREE.Scene();

        this.scene1 = new THREE.Scene();
        this.scene2 = new THREE.Scene();

        this.scene3 = new THREE.Scene();
        this.scene4 = new THREE.Scene();
            // const composer = new THREE.EffectComposer(new WebGLRenderer())
            // const effectPass = new THREE.EffectPass(camera, new BloomEffect())
        this.width = (window.innerWidth-650);
        this.height = (window.innerHeight)/2
        this.camera = new THREE.PerspectiveCamera(
                75,
                this.width / this.height,
                0.1,
                1000
        );
        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.renderer.autoClear = false;
        //this.light = new THREE.DirectionalLight('hsl(0, 100%, 100%)');
        this.light = new THREE.PointLight( 0xffffff );
        this.light2 = new THREE.PointLight( 0xffffff );
        this.light4 = new THREE.PointLight( 0xffffff );

        this.createSide1();
        this.createSide2();
        this.createOther();

        this.renderer.setSize(this.width,this.height )
        this.camera.position.z = 5;
        window.addEventListener( 'mousemove', this.onMouseMove );
    }

    resizeCanvasToDisplaySize() {
        const canvas = this.renderer.domElement;
        // look up the size the canvas is being displayed
        const width = 1920;
        const height = 1080;
        // adjust displayBuffer size to match
        if (canvas.width !== width || canvas.height !== height) {
            console.log('adjust');
            // you must pass false here or three.js sadly fights the browser
            this.renderer.setSize(width, height, false);
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
            // update any render target sizes here
        }
    }

    onMouseMove( ev : any ) {
        this.mouse[ 0 ] = ev.clientX / window.innerWidth;
        this.mouse[ 1 ] = ev.clientY / window.innerHeight;
    }

    animate() {
        this.resizeCanvasToDisplaySize();
        requestAnimationFrame(this.animate)
        this.rendere();
    }

    rendere(){

        const zoom = 3;
        let mouseX = this.mouse[0]*1.2;
        let mouseY = this.mouse[1];

        this.camera.position.x = Math.sin( .5 * Math.PI * ( mouseX - .0 ) ) * zoom;
        this.camera.position.y = Math.sin( .25 * Math.PI * ( mouseY - .5 ) ) * zoom;
        this.camera.position.z = Math.cos( .5 * Math.PI * ( mouseX - .2 ) ) * zoom;
        this.camera.lookAt( this.scene.position );
        this.light.position.set(this.camera.position.x, this.camera.position.y, this.camera.position.z);
        this.light2.position.set(this.camera.position.x, this.camera.position.y, this.camera.position.z);
        this.light4.position.set(this.camera.position.x, this.camera.position.y, this.camera.position.z);

        let gl = this.renderer.getContext();
        this.renderer.clear(true, true, true);        

        gl.enable(gl.STENCIL_TEST);
        gl.disable(gl.DEPTH_TEST);
        
        //on evite d'ecrire sur le buffer
        //original avec disable
        gl.stencilOp(gl.KEEP, gl.KEEP, gl.REPLACE);  
        
        gl.stencilFunc(gl.ALWAYS, 1, 0xFF); // all fragments should pass the stencil test
        gl.stencilMask(0x01); // enable writing to the stencil buffer
    
        this.renderer.render(this.scene1,this.camera);
        
        gl.stencilFunc(gl.EQUAL, 1, 0xFF);
        gl.stencilOp(gl.KEEP, gl.REPLACE, gl.REPLACE);  
        gl.stencilMask(0x00); // disable writing to the stencil buffer
        this.renderer.render(this.scene2,this.camera);
        
        gl.stencilOp(gl.KEEP, gl.ZERO, gl.REPLACE);
        //gl.stencilOp(gl.KEEP, gl.REPLACE, gl.KEEP);
        gl.stencilFunc(gl.ALWAYS, 2, 0xFF);
        gl.stencilMask(0x02); // disable writing to the stencil buffer
        
        this.renderer.render(this.scene3,this.camera);
        
        gl.stencilFunc(gl.EQUAL, 2, 0xFF);
        gl.stencilMask(0x00); // disable writing to the stencil buffer
        this.renderer.render(this.scene4,this.camera);
        
        gl.disable(gl.STENCIL_TEST);
        this.renderer.render(this.scene,this.camera);
       //this.renderer.render(this.scene4,this.camera);
        
    }

    rotate() {
        if (this.speed === 0) {
            return 0
        } else {
            return this.speed
        }
    }

    mounted() {
        const canvas = document.getElementById('canvas')?.appendChild(this.renderer.domElement);
        if (canvas != null){
            canvas.style.height = "300px";
            canvas.style.width = "600px";
        }
        requestAnimationFrame(this.animate)
    }

}

</script>

<style scoped lang="scss">
#canvas { 
    width: 150px;
    height: 150px;
    float: left;
    margin: 1em;
}
canvas { 
    width: 50%;
    height: 50%;
}

</style>
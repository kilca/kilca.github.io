<template>
<div>
    <div id='canvas'/> 
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import * as THREE from 'three'
/*
import TrackballControls from 'three-trackballcontrols'
import {
    BloomEffect,
    EffectComposer,
    GlitchPass,
    EffectPass,
    RenderPass
} from 'postprocessing'
*/
@Options({
  props: {
  }
})
export default class Game extends Vue {


    //controls : TrackballControls;
    scene : any;
    camera : any;
    renderer : any;
    light : any;

    geometry : any;
    material : any;
    cube : any;
    geometry2 : any;
    material2 : any;
    cube2 : any;

    axes : any;
    speed : any;
    width =0;
    height =0;
    mouse = [ .5, .5 ];
    created() {

        this.scene = new THREE.Scene()
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
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.light = new THREE.DirectionalLight('hsl(0, 100%, 100%)');
        this.geometry = new THREE.BoxGeometry(1, 1, 1);
        this.geometry2 = new THREE.BoxGeometry(1, 1, 1);
        this.material = new THREE.MeshStandardMaterial({
                side: THREE.FrontSide,
                color: 'hsl(0, 100%, 50%)',
                wireframe: false
            });
        this.material2 = new THREE.MeshStandardMaterial({
                side: THREE.FrontSide,
                color: 'hsl(0, 50%, 100%)',
                wireframe: false
            });
        this.cube = new THREE.Mesh(this.geometry, this.material);
        this.cube2 = new THREE.Mesh(this.geometry2,this.material2)
        this.cube.position.x+=1;
        this.axes = new THREE.AxesHelper(5);
        this.speed= 0.01;

        this.scene.add(this.camera)
        this.scene.add(this.light)
        this.scene.add(this.cube)
        this.scene.add(this.cube2)
        this.scene.add(this.axes)
        this.renderer.setSize(this.width,this.height )
        this.light.position.set(5, 0, 10)
        this.camera.position.z = 5
        this.scene.background = new THREE.Color('hsl(0, 100%, 100%)');
        window.addEventListener( 'mousemove', this.onMouseMove );
        /*
        this.controls = new TrackballControls(this.camera)
        this.controls.rotateSpeed = 1.0
        this.controls.zoomSpeed = 5
        this.controls.panSpeed = 0.8
        this.controls.noZoom = false
        this.controls.noPan = false
        this.controls.staticMoving = true
        this.controls.dynamicDampingFactor = 0.3
        */
    }

    onMouseMove( ev : any ) {
        this.mouse[ 0 ] = ev.clientX / window.innerWidth;
        this.mouse[ 1 ] = ev.clientY / window.innerHeight;
    }

    animate() {
        requestAnimationFrame(this.animate)
        //requestAnimationFrame(this.rendere);
        this.renderer.render(this.scene, this.camera)
        //this.cube.rotation.y += this.speed;
        this.rendere();
        //this.controls.update()
    }

    rendere(){
        const zoom = 3;
        this.camera.position.x = Math.sin( .5 * Math.PI * ( this.mouse[ 0 ] - .5 ) ) * zoom;
        this.camera.position.y = Math.sin( .25 * Math.PI * ( this.mouse[ 1 ] - .5 ) ) * zoom;
        this.camera.position.z = Math.cos( .5 * Math.PI * ( this.mouse[ 0 ] - .5 ) ) * zoom;
        this.camera.lookAt( this.scene.position );
    }

    rotate() {
        if (this.speed === 0) {
            return 0
        } else {
            return this.speed
        }
    }

    mounted() {
        document.getElementById('canvas')?.appendChild(this.renderer.domElement);
        //this.$refs.canvas.appendChild(this.renderer.domElement)
        this.animate()
    }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

div{
    /*
    position: fixed;
    width: 90%;
    height: 90%;
    left: 0;
    top: 0;
    background: rgba(51,51,51,0.7);
    z-index: 10;
    */
}

</style>
import React, { useEffect } from 'react';
import './style.css';
import tvSvg from '../../assets/images/svg/television1.svg';
import * as THREE from 'three';

const ThreejsContainer = () => {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    intialize3DEffect();
  });

  return (
    <div className="container">
      <img className="image" src={tvSvg} alt="television.svg" />
      <div id="screen" className="screen"></div>
    </div>
  );
};

function intialize3DEffect() {
  // Threejs coding
  const screenContainer = document.querySelector('#screen');

  const scene = new THREE.Scene();

  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
  const mesh = new THREE.Mesh(boxGeometry, material);

  scene.add(mesh);

  const sizes = {
    width: 400,
    height: 370,
  };

  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
  camera.position.z = 4;
  camera.position.x = 0.5;
  camera.position.y = 1;
  scene.add(camera);

  const renderer = new THREE.WebGLRenderer({
    //canvas: screenContainer,
  });
  screenContainer.appendChild(renderer.domElement);
  renderer.setSize(sizes.width, sizes.height);
  renderer.render(scene, camera);
}

export default ThreejsContainer;

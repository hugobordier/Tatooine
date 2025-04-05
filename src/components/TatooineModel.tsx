import { useEffect, useRef } from "react";
import * as THREE from "three";
//@ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
//@ts-ignore
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const TatooineModel = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Zoom constraints
    const minZoomDistance = 4.5;
    const maxZoomDistance = 15;
    const defaultZoomDistance = 5;

    controls.minDistance = minZoomDistance;
    controls.maxDistance = maxZoomDistance;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Rotation and zoom variables
    let baseRotationSpeed = 0.005;
    let currentRotationSpeed = baseRotationSpeed;
    let targetZoom = defaultZoomDistance;
    let currentZoom = defaultZoomDistance;
    let lastScrollTime = 0;
    const rotationDecayRate = 0.95;

    // Load the model
    const loader = new GLTFLoader();
    loader.load(
      "/tatooine/scene.gltf",
      (gltf: { scene: THREE.Object3D<THREE.Object3DEventMap> }) => {
        scene.add(gltf.scene);
        gltf.scene.scale.set(2.5, 2.5, 2.5);

        const animateRotation = () => {
          gltf.scene.rotation.y += currentRotationSpeed;

          // Gradually decrease rotation speed back to base speed
          if (currentRotationSpeed > baseRotationSpeed) {
            currentRotationSpeed =
              baseRotationSpeed +
              (currentRotationSpeed - baseRotationSpeed) * rotationDecayRate;
          } else if (currentRotationSpeed < baseRotationSpeed) {
            currentRotationSpeed = baseRotationSpeed;
          }
        };

        const animateZoom = () => {
          // Smooth zoom transition
          if (Math.abs(currentZoom - targetZoom) > 0.01) {
            currentZoom += (targetZoom - currentZoom) * 0.1;
            camera.position.z = currentZoom;
          } else {
            // Gradually return to default zoom level
            targetZoom += (defaultZoomDistance - targetZoom) * 0.005;
          }
        };

        // Animation loop
        const animate = () => {
          requestAnimationFrame(animate);
          controls.update();
          animateRotation();
          animateZoom();
          renderer.render(scene, camera);
        };
        animate();
      },
      (xhr: { loaded: number; total: number }) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error: any) => {
        console.error("An error occurred while loading the model:", error);
      }
    );

    const handlePageScroll = () => {
      const currentTime = Date.now();

      if (currentTime - lastScrollTime > 50) {
        const scrollPosition = window.scrollY;
        const scrollDifference = Math.abs(scrollPosition - lastScrollPosition);
        const scrollIntensity = Math.min(scrollDifference / 20, 5);

        if (scrollIntensity > 0.1) {
          // Adjust rotation speed
          const speedMultiplier = 1 + scrollIntensity;
          currentRotationSpeed = baseRotationSpeed * speedMultiplier;

          // Adjust zoom level based on scroll intensity
          // Use absolute value to zoom in regardless of scroll direction
          const zoomEffect = Math.min(scrollIntensity * 0.5, 2);
          targetZoom = Math.max(
            minZoomDistance,
            Math.min(maxZoomDistance, defaultZoomDistance - zoomEffect)
          );
        }

        lastScrollPosition = scrollPosition;
        lastScrollTime = currentTime;
      }
    };

    let lastScrollPosition = window.scrollY;

    window.addEventListener("scroll", handlePageScroll);

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;

      camera.aspect =
        containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("scroll", handlePageScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full"
      style={{ height: "400px", borderRadius: "0.5rem", overflow: "hidden" }}
    />
  );
};

export default TatooineModel;

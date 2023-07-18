import React, { useEffect, useRef } from "react";
import planetaryjs from "planetary.js";
import { feature } from "topojson";
import "../Styles/Globe.css";
import globejson from "../globe.json";
const RotatingGlobe = () => {
  const globeRef = useRef(null);

  useEffect(() => {
    const autorotate = (degPerSec) => {
      return function (planet) {
        let lastTick = null;
        let paused = false;
        planet.plugins.autorotate = {
          pause: function () {
            paused = true;
          },
          resume: function () {
            paused = false;
          },
        };
        planet.onDraw(function () {
          if (paused || !lastTick) {
            lastTick = new Date();
          } else {
            const now = new Date();
            const delta = now - lastTick;
            const rotation = planet.projection.rotate();
            rotation[0] += (degPerSec * delta) / 1000;
            if (rotation[0] >= 180) rotation[0] -= 360;
            planet.projection.rotate(rotation);
            lastTick = now;
          }
        });
      };
    };

    const lakes = (options) => {
      options = options || {};
      let lakes = null;

      return function (planet) {
        planet.onInit(function () {
          const world = planet.plugins.topojson.world;
          lakes = feature(world, world.objects.ne_110m_lakes);
        });

        planet.onDraw(function () {
          planet.withSavedContext(function (context) {
            context.beginPath();
            planet.path.context(context)(lakes);
            context.fillStyle = options.fill || "black";
            context.fill();
          });
        });
      };
    };

    const colors = ["white"];
    const globe = planetaryjs.planet();

    globe.loadPlugin(autorotate(5));

    globe.loadPlugin(
      planetaryjs.plugins.earth({
        topojson: {
          file: "https://raw.githubusercontent.com/MadeByDroids/madebydroids.github.io/master/world-110m-withlakes%20(1).json",
        },
        oceans: { fill: "#5D97FF" },
        land: { fill: "#7CFC00" },
        borders: { stroke: "" },
      })
    );

    globe.loadPlugin(lakes({ fill: "#5D97FF" }));

    globe.loadPlugin(planetaryjs.plugins.pings());

    globe.loadPlugin(
      planetaryjs.plugins.drag({
        onDragStart: function () {
          this.plugins.autorotate.pause();
        },
        onDragEnd: function () {
          this.plugins.autorotate.resume();
        },
      })
    );

    globe.projection.scale(300).translate([450, 450]).rotate([0, -10, 0]);

    setInterval(function () {
      const lat = Math.random() * 170 - 85;
      const lng = Math.random() * 360 - 180;
      const color = colors[Math.floor(Math.random() * colors.length)];
      globe.plugins.pings.add(8, 47, {
        color: color,
        ttl: 1000,
        angle: Math.random() * 3,
      });
    }, 150);

    const canvas = globeRef.current;
    const context = canvas.getContext("2d");

    if (window.devicePixelRatio === 2) {
      canvas.width = 800;
      canvas.height = 800;
      context.scale(2, 2);
    }

    globe.draw(canvas);

    return () => {
      // Cleanup code if needed
    };
  }, []);

  return (
    <canvas
      ref={globeRef}
      id="rotatingGlobe"
      width="990"
      height="990"
      style={{ width: "990px", height: "990px", cursor: "move" }}
    />
  );
};

export default RotatingGlobe;

import Particles from "react-tsparticles";
export default function ParticlesBg() {
  return (
    <Particles
      options={{
        fpsLimit: 60,
        particles: {
          number: { value: 50 },
          size: { value: 2 },
          links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.2 },
          move: { speed: 1 },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
        },
      }}
    />
  );
}

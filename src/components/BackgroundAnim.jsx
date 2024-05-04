import React,{ useCallback, useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import{useTheme} from '@mui/material/styles';

const BackgroundAnim = () => {
    const theme = useTheme();
    const [ init, setInit ] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const optionn = {
        particles: {
          number: {
            value: 50, // Number of particles
          },
          color: {
            value: '#1212121', // Particle color (white)
          },
          shape: {
            type: 'circle', // Shape of particles (circle)
          },
          opacity: {
            value: 0.5, // Opacity of particles
          },
          size: {
            value: 4, // Size of particles
            random: true, // Randomize particle size
          },
          lineLinked: {
            enable: true, // Connect particles with lines
            distance: 150, // Distance threshold for line connections
            color: '#ffffff', // Line color (white)
            opacity: 0.4, // Line opacity
            width: 1, // Line width
          },
          move: {
            enable: true, // Enable particle movement
            speed: 2, // Speed of particle movement
            direction: 'none', // Direction of particle movement (none, top, top-right, right, bottom-right, bottom, bottom-left, left, top-left)
            random: true, // Randomize movement direction
            straight: false, // Randomize straight line movement
            outModes: {
              default: 'out', // Particle out mode (out, bounce)
            },
          },
        },
    }
  return (
    <>
        { init && <Particles
            id="tsparticles"
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.5,
                        },
                    },
                },
                particles: {
                    color: {
                        value: theme.palette.animation.color,
                    },
                    links: {
                        color: theme.palette.animation.color,
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
}
    </>
  )
}

export default BackgroundAnim
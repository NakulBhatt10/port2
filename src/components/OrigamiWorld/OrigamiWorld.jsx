import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../ThemeContext';
import {
  PaperSun,
  PaperMoon,
  PaperCloud,
  PaperBat,
  PaperDragon,
  PaperFireball,
  PaperArrow,
  PaperWarrior,
  PaperWarriorSitting,
  PaperWarriorFighting,
  PaperTent,
  PaperBonfire,
  PaperTree,
  PaperSword,
  PaperCannon,
} from './PaperShapes';
import './OrigamiWorld.css';

/*
 * DARK MODE — Night camp: soldiers sitting around bonfire, tents, bats, moon.
 * LIGHT MODE — Day battle: warriors fighting, cannons, dragons, fireballs, arrows.
 */

const DARK_ACTORS = [
  // sky — moon & clouds
  { id: 'moon', Shape: PaperMoon, axis: 'pin', top: 4, base: 76, size: 120, color: '#D4C98A', mode: 'spin', speed: 0.08, dir: 1 },
  { id: 'cloud-d1', Shape: PaperCloud, axis: 'x', top: 6, base: 5, size: 100, color: '#3D4A5C', mode: 'sway', speed: 0.25, dir: 1, wrap: 140, bob: 3 },
  { id: 'cloud-d2', Shape: PaperCloud, axis: 'x', top: 12, base: 55, size: 70, color: '#3D4A5C', mode: 'sway', speed: 0.2, dir: -1, wrap: 130, bob: 2 },
  { id: 'cloud-d3', Shape: PaperCloud, axis: 'x', top: 16, base: 82, size: 80, color: '#3D4A5C', mode: 'sway', speed: 0.3, dir: 1, wrap: 145, bob: 4 },

  // sky — bats
  { id: 'bat-1', Shape: PaperBat, axis: 'x', top: 20, base: 5, size: 55, color: '#1A1A2E', mode: 'fly', speed: 0.8, dir: 1, wrap: 150, bob: 8, slant: -0.08 },
  { id: 'bat-2', Shape: PaperBat, axis: 'x', top: 26, base: 65, size: 40, color: '#1A1A2E', mode: 'fly', speed: 0.6, dir: -1, wrap: 140, bob: 6, slant: 0.1 },
  { id: 'bat-3', Shape: PaperBat, axis: 'x', top: 14, base: 38, size: 30, color: '#1A1A2E', mode: 'fly', speed: 1.0, dir: 1, wrap: 160, bob: 10, slant: -0.06 },

  // ground — trees (far background)
  { id: 'tree-d1', Shape: PaperTree, axis: 'pin', top: 58, base: 0, size: 180, color: '#1B3D1C', mode: 'sway', speed: 0.15 },
  { id: 'tree-d2', Shape: PaperTree, axis: 'pin', top: 56, base: 88, size: 200, color: '#153016', mode: 'sway', speed: 0.12 },
  { id: 'tree-d3', Shape: PaperTree, axis: 'pin', top: 60, base: 45, size: 150, color: '#1B3D1C', mode: 'sway', speed: 0.18 },

  // ground — large tent (camp center)
  { id: 'tent-1', Shape: PaperTent, axis: 'pin', top: 62, base: 8, size: 180, color: '#9B2C2C', mode: 'sway', speed: 0.08 },
  { id: 'tent-2', Shape: PaperTent, axis: 'pin', top: 65, base: 68, size: 150, color: '#822727', mode: 'sway', speed: 0.06 },

  // ground — bonfire (large, center)
  { id: 'bonfire', Shape: PaperBonfire, axis: 'pin', top: 66, base: 40, size: 150, color: '#ED8936', mode: 'sway', speed: 1.0 },

  // ground — soldiers sitting around fire
  { id: 'sitter-1', Shape: PaperWarriorSitting, axis: 'pin', top: 74, base: 30, size: 100, color: '#B7791F', mode: 'sway', speed: 0.1 },
  { id: 'sitter-2', Shape: PaperWarriorSitting, axis: 'pin', top: 75, base: 48, size: 90, color: '#975A16', mode: 'sway', speed: 0.08 },
  { id: 'sitter-3', Shape: PaperWarriorSitting, axis: 'pin', top: 74, base: 56, size: 95, color: '#B7791F', mode: 'sway', speed: 0.12 },

  // ground — standing guard warriors
  { id: 'warrior-d1', Shape: PaperWarrior, axis: 'pin', top: 64, base: 22, size: 120, color: '#B7791F', mode: 'sway', speed: 0.1 },
  { id: 'warrior-d2', Shape: PaperWarrior, axis: 'pin', top: 66, base: 76, size: 110, color: '#975A16', mode: 'sway', speed: 0.08 },

  // ground — swords and weapons near camp
  { id: 'sword-d1', Shape: PaperSword, axis: 'pin', top: 76, base: 64, size: 55, color: '#A0AEC0', mode: 'sway', speed: 0.05 },
  { id: 'sword-d2', Shape: PaperSword, axis: 'pin', top: 78, base: 36, size: 45, color: '#718096', mode: 'sway', speed: 0.04 },
];

const LIGHT_ACTORS = [
  // sky — sun & clouds
  { id: 'sun', Shape: PaperSun, axis: 'pin', top: 3, base: 78, size: 130, color: '#E0A33B', mode: 'spin', speed: 0.4, dir: 1 },
  { id: 'cloud-l1', Shape: PaperCloud, axis: 'x', top: 3, base: 8, size: 95, color: '#E2E8F0', mode: 'sway', speed: 0.35, dir: 1, wrap: 140, bob: 4 },
  { id: 'cloud-l2', Shape: PaperCloud, axis: 'x', top: 9, base: 52, size: 70, color: '#E2E8F0', mode: 'sway', speed: 0.28, dir: -1, wrap: 130, bob: 3 },

  // sky — dragons
  { id: 'dragon-1', Shape: PaperDragon, axis: 'x', top: 15, base: 0, size: 120, color: '#9B2C2C', mode: 'fly', speed: 0.5, dir: 1, wrap: 155, bob: 10, slant: -0.1 },
  { id: 'dragon-2', Shape: PaperDragon, axis: 'x', top: 28, base: 75, size: 85, color: '#742A2A', mode: 'fly', speed: 0.4, dir: -1, wrap: 145, bob: 7, slant: 0.08 },

  // sky — fireballs
  { id: 'fireball-1', Shape: PaperFireball, axis: 'x', top: 22, base: 15, size: 50, color: '#ED8936', mode: 'fly', speed: 1.3, dir: 1, wrap: 160, bob: 12, slant: -0.18 },
  { id: 'fireball-2', Shape: PaperFireball, axis: 'x', top: 38, base: 85, size: 40, color: '#DD6B20', mode: 'fly', speed: 1.0, dir: -1, wrap: 150, bob: 8, slant: 0.15 },
  { id: 'fireball-3', Shape: PaperFireball, axis: 'x', top: 48, base: 45, size: 35, color: '#C05621', mode: 'fly', speed: 1.5, dir: 1, wrap: 155, bob: 14, slant: -0.12 },

  // sky — arrows
  { id: 'arrow-1', Shape: PaperArrow, axis: 'x', top: 32, base: 8, size: 55, color: '#744210', mode: 'fly', speed: 1.6, dir: 1, wrap: 160, bob: 5, slant: -0.22 },
  { id: 'arrow-2', Shape: PaperArrow, axis: 'x', top: 44, base: 80, size: 45, color: '#744210', mode: 'fly', speed: 1.8, dir: -1, wrap: 155, bob: 3, slant: 0.2 },
  { id: 'arrow-3', Shape: PaperArrow, axis: 'x', top: 54, base: 35, size: 38, color: '#5D3A0E', mode: 'fly', speed: 1.4, dir: 1, wrap: 150, bob: 6, slant: -0.16 },

  // ground — trees (background)
  { id: 'tree-l1', Shape: PaperTree, axis: 'pin', top: 58, base: 0, size: 160, color: '#4A6B3C', mode: 'sway', speed: 0.25 },
  { id: 'tree-l2', Shape: PaperTree, axis: 'pin', top: 56, base: 88, size: 180, color: '#3D5C30', mode: 'sway', speed: 0.2 },

  // ground — cannons
  { id: 'cannon-1', Shape: PaperCannon, axis: 'pin', top: 72, base: 10, size: 130, color: '#5D3A1A', mode: 'sway', speed: 0.15 },
  { id: 'cannon-2', Shape: PaperCannon, axis: 'pin', top: 74, base: 72, size: 110, color: '#4A2E14', mode: 'sway', speed: 0.12 },

  // ground — fighting warriors
  { id: 'fighter-1', Shape: PaperWarriorFighting, axis: 'pin', top: 66, base: 18, size: 120, color: '#B7791F', mode: 'sway', speed: 0.5 },
  { id: 'fighter-2', Shape: PaperWarriorFighting, axis: 'pin', top: 68, base: 36, size: 105, color: '#9B2C2C', mode: 'sway', speed: 0.45 },
  { id: 'fighter-3', Shape: PaperWarriorFighting, axis: 'pin', top: 65, base: 54, size: 115, color: '#975A16', mode: 'sway', speed: 0.5 },
  { id: 'fighter-4', Shape: PaperWarriorFighting, axis: 'pin', top: 67, base: 80, size: 110, color: '#822727', mode: 'sway', speed: 0.4 },

  // ground — swords on ground
  { id: 'sword-l1', Shape: PaperSword, axis: 'pin', top: 78, base: 28, size: 50, color: '#A0AEC0', mode: 'sway', speed: 0.15 },
  { id: 'sword-l2', Shape: PaperSword, axis: 'pin', top: 80, base: 65, size: 45, color: '#718096', mode: 'sway', speed: 0.1 },
];

export default function OrigamiWorld() {
  const { theme } = useTheme();
  const layerRef = useRef(null);
  const actorRefs = useRef({});
  const moversCache = useRef({});

  const actors = theme === 'dark' ? DARK_ACTORS : LIGHT_ACTORS;

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    let raf = null;
    let lastScrollY = window.scrollY;
    let vel = 0;
    let travel = 0;

    const tick = () => {
      const scrollY = window.scrollY;
      const dsy = scrollY - lastScrollY;
      lastScrollY = scrollY;
      vel += (dsy - vel) * 0.18;
      travel += vel;
      const activity = Math.min(1, Math.abs(vel) / 26);

      actors.forEach((actor) => {
        const el = actorRefs.current[actor.id];
        if (!el) return;
        const { axis, base, speed = 1, dir = 1, wrap = 140, bob = 0, slant = 0 } = actor;
        let transform = '';

        if (axis === 'pin') {
          transform = `translate(${base}vw, 0)`;
        } else if (axis === 'y') {
          const raw = travel * 0.06 * speed * dir;
          const p = ((raw % wrap) + wrap) % wrap;
          const wob = Math.sin(travel * 0.02 * speed + base) * bob;
          transform = `translate(calc(${base}vw + ${wob.toFixed(2)}px), ${(-p).toFixed(2)}vh)`;
        } else {
          let x = base + ((travel * 0.06 * speed * dir) % wrap);
          if (x < -25) x += wrap;
          if (x > wrap) x -= wrap;
          const bobv = Math.sin(travel * 0.012 * speed + base) * bob;
          const drift = (x - base) * slant;
          transform = `translate(${x.toFixed(2)}vw, calc(${bobv.toFixed(2)}px + ${drift.toFixed(2)}vh)) rotate(${(slant * 6).toFixed(2)}deg)`;
        }
        el.style.transform = transform;

        const cached = moversCache.current[actor.id];
        if (!cached || cached.node !== el) {
          moversCache.current[actor.id] = {
            node: el,
            list: Array.from(el.querySelectorAll('[data-mover]')),
          };
        }
        moversCache.current[actor.id].list.forEach((mover) => {
          const type = mover.dataset.mover;
          let angle = 0;
          if (type === 'wing') {
            angle = Math.sin(travel * 0.09 * speed) * (4 + activity * 14);
          } else if (type === 'wheel') {
            angle = travel * 0.9 * speed * dir;
          } else if (type === 'spin') {
            angle = travel * 0.4 * speed * dir;
          } else if (type === 'sway') {
            angle = Math.sin(travel * 0.02 * speed + base) * (2 + activity * 9);
          }
          mover.style.transform = `rotate(${angle.toFixed(2)}deg)`;
        });
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => raf && cancelAnimationFrame(raf);
  }, [actors]);

  return (
    <div className="origami-world" ref={layerRef} aria-hidden="true">
      {actors.map((actor) => {
        const { id, Shape, axis, top, size, color, mode } = actor;
        const positional = {
          position: 'absolute',
          left: 0,
          width: size,
          height: size,
          color,
          ...(axis === 'y' ? { bottom: 0 } : { top: `${top}%` }),
        };
        return (
          <div
            key={id}
            className="actor"
            ref={(node) => (actorRefs.current[id] = node)}
            style={positional}
          >
            {mode === 'sway' ? (
              <div data-mover="sway" style={{ transformOrigin: '50% 90%' }}>
                <Shape width="100%" height="100%" />
              </div>
            ) : (
              <Shape width="100%" height="100%" />
            )}
          </div>
        );
      })}
    </div>
  );
}

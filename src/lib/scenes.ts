// Raw SVG imports so we can inline them and control sizing via CSS.
import helsinki from '../assets/scenes/helsinki.svg?raw';
import agra from '../assets/scenes/agra.svg?raw';
import varanasi from '../assets/scenes/varanasi.svg?raw';
import maldives from '../assets/scenes/maldives.svg?raw';
import trincomalee from '../assets/scenes/trincomalee.svg?raw';
import sigiriya from '../assets/scenes/sigiriya.svg?raw';
import anuradhapura from '../assets/scenes/anuradhapura.svg?raw';
import minneriya from '../assets/scenes/minneriya.svg?raw';
import polonnaruwa from '../assets/scenes/polonnaruwa.svg?raw';
import kandy from '../assets/scenes/kandy.svg?raw';
import nuwaraEliya from '../assets/scenes/nuwara-eliya.svg?raw';
import ella from '../assets/scenes/ella.svg?raw';
import arugamBay from '../assets/scenes/arugam-bay.svg?raw';
import yala from '../assets/scenes/yala.svg?raw';
import udawalawe from '../assets/scenes/udawalawe.svg?raw';
import galle from '../assets/scenes/galle.svg?raw';
import compass from '../assets/compass.svg?raw';
import hongkong from '../assets/hongkong.svg?raw';

export const SCENES: Record<string, string> = {
  helsinki, agra, varanasi, maldives, trincomalee, sigiriya, anuradhapura,
  minneriya, polonnaruwa, kandy, 'nuwara-eliya': nuwaraEliya, ella,
  'arugam-bay': arugamBay, yala, udawalawe, galle,
};

export const ICONS = { compass, hongkong };

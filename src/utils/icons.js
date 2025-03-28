import { faReact as faReactBrandIcon, faCss3Alt as faCss3AltBrandIcon, faHtml5 as faHtml5BrandIcon, faPython as faPythonBrandIcon } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faCode, faLaptopCode, faBrush, faPalette, faMobileScreenButton, faBaby, faUserGraduate, faMedal } from '@fortawesome/free-solid-svg-icons';
import { faGlobe as faGlobeIcon } from '@fortawesome/free-solid-svg-icons';
import {
    faJsSquare,
    faReact as faReactBrandSkillIcon,
    faNodeJs,
    faSass,
    faGitAlt,
    faFigma,
} from '@fortawesome/free-brands-svg-icons';
import {
    faDatabase,
    faServer,
    faBolt,
    faCheckSquare,
    faMobileScreenButton as faMobileScreenButtonSolid,
    faCube,
    faBookOpen as faBookOpenSolid
} from '@fortawesome/free-solid-svg-icons';


// Ícones Font Awesome React - EXPORTED
export const faReactIcon = faReactBrandIcon ? faReactBrandIcon : faLaptopCode;
export const faCss3AltIcon = faCss3AltBrandIcon ? faCss3AltBrandIcon : faPalette;
export const faHtml5Icon = faHtml5BrandIcon ? faHtml5BrandIcon : faCode;
export const faGlobe = faGlobeIcon ? faGlobeIcon : faRocket;
export const faReactSkillIcon = faReactBrandSkillIcon ? faReactBrandSkillIcon : faCube;
export const faMobileScreenButtonSkillIcon = faMobileScreenButtonSolid ? faMobileScreenButtonSolid : faMobileScreenButton;
export const faCodeIcon = faCode; // Exporting faCode as faCodeIcon for clarity if needed elsewhere
export const faLaptopCodeIcon = faLaptopCode;
export const faBrushIcon = faBrush;
export const faPaletteIcon = faPalette;
export const faMobileScreenButtonIcon = faMobileScreenButton;
export const faBabyIcon = faBaby;
export const faUserGraduateIcon = faUserGraduate;
export const faMedalIcon = faMedal;
export const faJsSquareIcon = faJsSquare;
export const faNodeJsIcon = faNodeJs; // Renomeado para faNodeJsIcon
export const iconNodeJs = faNodeJs; // Renamed to iconNodeJs
export const faSassIcon = faSass;
export const faGitAltIcon = faGitAlt;
export const faFigmaIcon = faFigma;
export const faDatabaseIcon = faDatabase;
export const faServerIcon = faServer;
export const faBoltIcon = faBolt;
export const faCheckSquareIcon = faCheckSquare;
export const faCubeIcon = faCube;
export const faBookOpenSolidIcon = faBookOpenSolid;
export const faRocketIcon = faRocket; // Exporting faRocket as faRocketIcon
export const faPythonIcon = faPythonBrandIcon ? faPythonBrandIcon : faCube; // Adicionado faPythonIcon
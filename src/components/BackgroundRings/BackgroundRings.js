import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faCode, faGraduationCap, faWrench } from '@fortawesome/free-solid-svg-icons';
import styles from './BackgroundRings.module.css';

const getIconData = (color) => {
  switch (color) {
    case 'greenGlow':
      return { icon: faCode, className: styles.codeIcon };
    case 'redGlow':
      return { icon: faMusic, className: styles.musicIcon };
    case 'yellowGlow':
      return { icon: faWrench, className: styles.wrenchIcon };
    case 'blueGlow':
      return { icon: faGraduationCap, className: styles.graduationCapIcon };
    default:
      return {};
  }
};

const rings = [
  { color: 'greenGlow', size: 'l', pos: 'l1' },
  { color: 'redGlow', size: 's', pos: 'l2' },
  { color: 'blueGlow', size: 'm', pos: 'l3' },
  { color: 'yellowGlow', size: 'l', pos: 'l4' },
  { color: 'greenGlow', size: 's', pos: 'r1' },
  { color: 'blueGlow', size: 'm', pos: 'r2' },
  { color: 'redGlow', size: 'l', pos: 'r3' },
  { color: 'yellowGlow', size: 'm', pos: 'r4' },
];

export default function BackgroundRings() {
  return (
    <>
      {rings.map(({ color, size, pos }, index) => {
        const { icon, className } = getIconData(color);
        const ringClass = `${styles.backgroundRing} ${styles[color]} ${styles[size]} ${styles[pos]}`;

        return (
          <div key={index} className={ringClass}>
            {icon && (
              <FontAwesomeIcon
                icon={icon}
                className={`${styles.ringIcon} ${className}`}
              />
            )}
          </div>
        );
      })}
    </>
  );
}

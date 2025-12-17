import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Robotic Nervous System',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Learn ROS 2 as the middleware connecting AI agents to humanoid robot hardware and simulators.
        Understand messaging, services, and actions that form the backbone of robotic systems.
      </>
    ),
  },
  {
    title: 'Digital Twins & Simulation',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Master building digital twins with Gazebo and Unity. Explore physics simulation,
        sensor modeling, and virtual environments for testing humanoid robotics algorithms.
      </>
    ),
  },
  {
    title: 'AI-Robot Brain',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Discover NVIDIA Isaac technologies to build the AI "brain" of humanoid robots.
        Integrate perception, planning, and control systems for autonomous robot behavior.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={clsx('features', styles.features)}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

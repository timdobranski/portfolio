import BackgroundRings from '../../components/BackgroundRings/BackgroundRings.js';

export default function Background({children}) {
  return (
    <>
      <BackgroundRings />
      {children}
    </>
  )
}
import lockupSvg from '../assets/logo-lockup.svg?raw'
import wordmarkSvg from '../assets/logo-wordmark.svg?raw'

function Logo({ variant = 'lockup' }) {
  const svg = variant === 'wordmark' ? wordmarkSvg : lockupSvg
  return <span className="logo-mark" dangerouslySetInnerHTML={{ __html: svg }} />
}

export default Logo

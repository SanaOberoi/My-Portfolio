import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Navigation() {
  return (
    <>
      <Container>
          {
            <>
                <ul className="flex justify-end">
                    <li>
                    </li>
                    <li>
<a 
  href="/Sana Oberoi_CV.pdf" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="hover:text-success duration-200 transition-colors p-4 block"
>
  Resume
</a>
                    </li>
                    <li>
                        <a
                        href={`/about`}
                        className="hover:text-success duration-200 transition-colors p-4 block"
                        >
                        About
                        </a>
                    </li>
                </ul>
            </>
          }
      </Container>
    </>
  )
}

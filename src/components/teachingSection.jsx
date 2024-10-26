import WayToTeach from "./WayToTeach"
import { ways } from '../data'

export default function TeachingSection() {
    return (
        <section>
          <h3>way to learn</h3>
          <ul>
            {ways.map(way => <WayToTeach key={way.title} {...way} />)}
          </ul>
        </section>
    )
}
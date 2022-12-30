import FlavorAllLabels from './flavorAllLabels'
import FlavorHeading from './flavorHeading'
import FlavorName from './flavorName'
import FlavorSubHeading from './flavorSubHeading'

type FlavorItem = {
  heading: FlavorHeading
  name: FlavorName
  subHeading: FlavorSubHeading
  labels: FlavorAllLabels[]
}

export default FlavorItem

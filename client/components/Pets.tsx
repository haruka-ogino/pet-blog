import { pet1, pet2, pet3 } from './pet-class'

export default function Pets() {
  console.log(pet1)
  pet1.greet()
  console.log(pet2)
  pet2.greet()
  console.log(pet3)
  pet3.greet()

  return <>PETS!</>
}
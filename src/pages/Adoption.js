import { useState } from 'react'

const Adoption = () => {
  const [pets, setPets] = useState([])

  const GetPets = () => {
    fetch('http://localhost:4000')
      .then((res) => res.json())
      .then((res) => setPets(res))
      .catch((err) => console.error(err))
  }

  const postPet = () => {
    const petObject = {
      breed: 'Haski',
      name: 'gaf',
      age: '6',
    }
    fetch('http://localhost:4000/add-pets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(petObject),
    })
  }

   const deletePets = () => {
   fetch('http://localhost:4000/delete-pets', { method: 'DELETE' })}
  //   fetch(`http://localhost:4000/delete-pets?${name}`, {
  //     method: 'DELETE',
  //     headers: { 'Content-Type': 'application/json' },
  //   })
//   // }
        const deletePets = item => {
       console.log('remove item from todos', item)
     // filtering the array and removing the item
      const filteredArray = pets.filter(eachPet => eachPet.name !== item.name)

    // then setting the allTodos Array with the filtered array without item
    setPets(filteredArray)
      }
  return (
    <>
      <h1>Adoption</h1>
      <button onClick={GetPets}>Get Pets</button>
      <button onClick={postPet}>Add Pets</button>
      <button onClick={deletePets}>Delete Pet</button>
      {/* {pets.map((eachPet) => {
        return (
          <div>
            {eachPet.breed} {eachPet.name} {eachPet.age}
          </div>
        )

      })} */}

   <ul>
        {pets.map(singlePet => {
          return (
            <li
              onClick={(item) => deletePets(item)}
              key={singlePet.breed}
              style={{ listStyleType: 'none', textAlign: 'left' }}>
              {singlePet.breed}- {singlePet.name}
            </li>
          )
        })}
      </ul>
    </>
  )
  
}
export default Adoption

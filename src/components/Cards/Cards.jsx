import Card from '../Card/Card.jsx';

export default function Cards(props) {
   const { characters } = props;
   return (
          <div style={{display:"flex", justifyContent:"space-between"}}>
          {characters.map(character => (
            <Card
            id = {character.id}
            key={character.id}
            name= {character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={() => props.onClose(character.id)}
            
            />
          ))}
   </div>
   );
}




// fu**name**: Nombre
// -  **species**: Especie
// -  **gender**: Género
// -  **image**: Imagen
// -  **onClose**: La nción que se va a ejecutar cuando el usuario haga click en el botón de cerrar.

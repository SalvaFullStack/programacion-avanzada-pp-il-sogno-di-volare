//RESUELVE LOS EJERCICIOS AQUI

// 1. Dado el array numbers cuyo valor sea [4, 5, 6, 7, 8, 9, 10], crea una función elevados que devuelva un array con el cuadrado de cada uno de los elementos.

let numbers = [4, 5, 6, 7, 8, 9, 10]; 

const newArray = numbers.map((item, index) => {
	return (item*item)
})

console.log(newArray)

// 2. Dado el array foodList con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], generar un segundo array que consiga generar de salida el resultado esperado.

[
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso']

let foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot']

const newFoodList = foodList.map((comida, index) => {
	switch (comida) {
        case "Pizza":
          console.log('Como soy de Italia, amo comer Pizza');
          break;
        case "Ramen":
            console.log('Como soy de Japón, amo comer Ramen');
            break;
        case "Paella":
                console.log('Como soy de Valencia, amo comer Paella');
                break;
     case "Entrecot":
                console.log('Aunque no como carne, el Entrecot es sabroso');
                break;
        
        console.log(newFoodList);
        
        }
    }


    // 3. 

    const staff = [
        {
          name: 'Pepe',
          role: 'The Boss',
          hobbies: ['leer', 'ver pelis']
        },
        {
          name: 'Ana',
          role: 'becaria',
          hobbies: ['nadar', 'bailar']
        },
        {
          name: 'Luis',
          role: 'programador',
          hobbies: ['dormir', 'comprar']
        },
        {
          name: 'Carlos',
          role: 'secretario',
          hobbies: ['futbol', 'queso']
        }
      ];

     const staff2 = staff.map((gente, index) => {
        switch (gente)
    
    
    
    
    
    
    })

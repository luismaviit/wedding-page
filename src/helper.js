export async function presentConfirm(data) {
    const url = 'https://wedding-od29.onrender.com/reservation';
    //const url = 'http://10.0.5.103:3304/reservation';

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
               
                'Content-Type': 'application/json',
              
            }, 
          body: JSON.stringify(data),
         
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error al realizar la petición:', error);
        throw error;
    }
}
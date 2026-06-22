//GET METHOD

async function getMethod() {
  try{
    const data = await fetch(' http://localhost:3000/movies', {method: 'GET'});
    const txt =  await data.text();
    const json = JSON.parse(txt);
    console.log(json.forEach(element => {
        console.log(`${element.name} : ${element.discription}`)
    }));
  } catch(error) {
    console.log(error);
  }
}

getMethod();

//POST

async function postRequest() {
  try {
    let data = await fetch(" http://localhost:3000/movies", 
    {
      method : 'POST',
      headers : {
      'Content-Type' : 'application/json; charset=utf-8',
      'Accept' : 'application/json',
     
      // 'Authorisation' : 
      // 'User-Agent' : 
      },
      body :  JSON.stringify({
      "name": "Abishek1",
      "discription": "this is the my friend movie who currently studing in smvec"
      })
    })
    console.log(data)
    let txt = await data.text();
    console.log(txt);
  } catch (error) {
    console.log(error);
  }
  
}
postRequest();


//PUT

async function putRequest() {

  try {

    const response = await fetch(
      "http://localhost:3000/movies/6a389fc885521f0c73953ad6",
      {
        method: "PUT",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          name: "VIVO Y31",
          discription: "the phone named movie name"
        })
      }
    );

    if (!response.ok) {
      throw new Error("Update failed");
    }

    const data = await response.json();

    console.log(data);

  } catch (error) {

    console.log(error);

  }

}

putRequest(); 

//PATCH

async function patchRequest() {
  try {
    let data = await fetch("http://localhost:3000/movies/6a389ef7e334bbfefdf5f507", 
    {
      method : 'PATCH',
      headers : {
      'Content-Type' : 'application/json; charset=utf-8',
      'Accept' : 'application/json',
     
      // 'Authorisation' : 
      // 'User-Agent' : 
      },
      body :  JSON.stringify({
      "name": "Abishek1",
      })
    })
   
    let txt = await data.text();
    console.log(txt);
  } catch (error) {
    console.log(error);
  }
  
}
patchRequest();

// delete

async function deleteRequest() {
  try{
    const value = await fetch("http://localhost:3000/movies/6a38c9176114f49b823960ff", 
      {
        method : 'DELETE',
        headers : {
          
        },
       
      }
    );
    console.log(value.status) 
    const res = await value.json()
    console.log(res)
  } catch(error) {
    console.log(error)
  }
}
deleteRequest();
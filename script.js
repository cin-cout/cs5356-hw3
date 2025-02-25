async function fetchData() {
    try {
        let response = await fetch('https://dog.ceo/api/breeds/image/random');
        let data = await response.json();
        console.log(data.message);
        document.getElementById("img2").src = data.message;
    }
    catch(error){
        console.error('Error fetching data', error);
    }
}

document.querySelector('.fetchingButton').addEventListener("click", fetchData);
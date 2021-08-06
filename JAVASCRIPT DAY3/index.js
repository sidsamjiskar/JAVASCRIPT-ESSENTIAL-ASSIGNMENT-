function handleSubmit () {
    const name = document.getElementById('name').value;
    const city = document.getElementById('city').value;

    // to set into local storage
    /* localStorage.setItem("NAME", name);
    localStorage.setItem("SURNAME", surname); */
    
    sessionStorage.setItem("NAME", name);
    sessionStorage.setItem("CITY", city);

    return;
}
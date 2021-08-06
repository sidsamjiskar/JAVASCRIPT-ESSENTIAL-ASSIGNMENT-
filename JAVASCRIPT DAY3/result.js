window.addEventListener('load', () => {

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const city = params.get('city'); */

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const city = localStorage.getItem('CITY'); */
    
    const name = sessionStorage.getItem('NAME');
    const city = sessionStorage.getItem('CITY');
    
    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-city').innerHTML = city;

})
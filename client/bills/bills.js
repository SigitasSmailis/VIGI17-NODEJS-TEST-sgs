
const getGroupId = () => document.location.hash.substring(1);

document.addEventListener('DOMContentLoaded', async()=>{
    const token = localStorage.getItem('token');
    if (!token) 
        location.replace('../login/login.html');
    const bills = await fetchBills(token)

    displayBillsData(bills)
})


const fetchBills = async (token) => {
    try {
        const response = await fetch(`http://localhost:8080/api/bills/${getGroupId()}`, {
            headers: {
                'authorization': `whatever ${token}`,
              },
        })
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};



document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');

    const billData = {

        groupId : getGroupId(),
        amount : event.target.elements.amount.value,
        description : event.target.elements.description.value
    }
 try{
     const response = await fetch('http://localhost:8080/api/bills', {
        method: 'POST',
        body: JSON.stringify(billData),
        headers:{
                'authorization': `whatever ${token}`,
                'Content-Type': 'application/json'
        }
     })

     const respData = await response.json()
     if (respData.status || respData.message ){
        alert( 'Deja duomenys neirasyti. ')
     }
    }catch (err){
        alert ('duomenys neirasyti')
        console.log(err)
    }
});


const displayBillsData = (data) =>{
    const table = document.getElementById("table");
    
    data.forEach(({id, description, amount})=>{
        const row = table.insertRow(1);

        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        
        cell1.innerHTML = id;
        cell2.innerHTML = description; 
        cell3.innerHTML =amount ; 
       
        })
    }



document.addEventListener('DOMContentLoaded', async()=>{
    const token = localStorage.getItem('token');
    if (!token) 
        location.replace('../login/login.html');
    const groups = await fetchGroups(token)
    displayData(groups)

    const allGroups = await fetchAllGroups(token);
    displayAllData(allGroups)


    document.querySelector('form').addEventListener('submit', async (event) => {
        event.preventDefault();
        const groupId = event.target.elements.groupId.value;
        await addGroup(groupId, token);
        document.location = document.location;
    });
    
})


const fetchGroups = async (token) => {
    try {
        const response = await fetch('http://localhost:8080/api/accounts', {
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


const fetchAllGroups = async (token) => {
    try {
        const response = await fetch('http://localhost:8080/api/groupes', {
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


const addGroup = async (groupId, token) => {
    try {
        const response = await fetch('http://localhost:8080/api/accounts', {
            method: 'POST',
            body: JSON.stringify({groupId}),
            headers: {
                'authorization': `whatever ${token}`,
                'Content-Type': 'application/json',
              },
        });
        const responseJson = await response.json();
        return responseJson;
    } catch (err) {
        alert('err');
        console.log(err);
    }
};

const displayData = (data) =>{
    const groupEl = document.querySelector('.group')

    data.forEach(({id, name})=>{
        const div  = document.createElement('nav')
        const groupId  = document.createElement('h2')
        const nameTag  = document.createElement('h4')
    groupId.textContent =  `ID: ${id}`
    nameTag.textContent =  `${name}`
    div.append(groupId, nameTag)
    div.onclick = () => document.location=`../bills/bills.html#${id}`
    groupEl.append(div)
    })
}


const displayAllData = (data) =>{
    const groupEl = document.querySelector('#groupId')

    data.forEach(({id, name})=>{
        const option  = document.createElement('option')
        option.setAttribute("value", id);
        option.textContent = name;
        groupEl.append(option)
    })
}


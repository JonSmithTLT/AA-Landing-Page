document.querySelector("#task-delete").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
    });

    document.querySelector(".popup .close-button").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
    });
    function getTasks() {
        fetch("https://sv-api.learncs.io/task", {
            method: "GET",
        })
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response);
            }
            return response.json();
        })
        .then(data => {
            console.log("Success");
            let table = document.getElementById('task-table');
            let task_list = data['tasks'];
            
            for (let task_num = 0; task_num < task_list.length; task_num++) {
                let row = document.createElement('tr');
                Object.keys(task_list[task_num]).forEach(function(key) {
                    /*let header = document.createElement('th')
                    header.innerHTML = key*/
                    let cell = document.createElement('td');
                    if ( (task_list[task_num])[key] === null) {
                        cell.innerHTML = 0;
                    } else {
                    cell.innerHTML = (task_list[task_num])[key];
                    }
                    
                    /*row.append(header);*/
                    row.append(cell);
                })           
                table.append(row);
            }
        })
        .catch(error => {
            if (typeof error.json === "function") {
                error.json().then(jsonError => {
                    console.log("JSON error from API");
                    console.log(error.statusText);
                })
            } else {
                console.log("Fetch error");
                console.log(error);
            }
        })
    }
    function deleteTask(taskID) {
        const deleteForm = document.querySelector(".popup #delete");
        const data = new FormData(deleteForm);
        console.log(data);
        const object = {};
        data.forEach(function(value, key) {
            object[key] = value;
        })
        const json = JSON.stringify(object);
        console.log(json)
    
        fetch("https://sv-api.learncs.io/task", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: json
        })
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response);
            }
            return response.json();
        })
        .then(data => {
            console.log("Success");
            window.location.reload();
        })
        .catch(error => {
            if (typeof error.json === "function") {
                error.json().then(jsonError => {
                    console.log("JSON error from API");
                    console.log(error.statusText);
                })
            } else {
                console.log("Fetch error");
                console.log(error);
            }
        })
        
    }
    setInterval(getTasks(), 10000);
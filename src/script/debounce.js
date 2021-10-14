let di = document.getElementById("search_debug");
const displayDate = async (e) => {
    
    let child = document.getElementsByClassName("debounce_area");
    const val = e.target.value; 
    if(val)
    {
     const response = await fetch(
        `https://api.github.com/search/users?q=${val}`
      );
      const {items} = await response.json();

      if(items.length > 0);
      renderData(items);
    }
    else
    {
        di.removeChild(di.childNodes[0]);
    }

  
}

const renderData = (items) => {
    

    di.innerHTML = "";
    let firstDiv = document.createElement("div");
    firstDiv.classList.add("debounce_area");
    let list = document.createElement("ul");

    list.innerHTML = "";
    items.forEach((img) => 
    {
        const li = document.createElement("li");
        li.innerText = img.login;
        list.append(li);
    });

    firstDiv.append(list);
    di.append(firstDiv);

  };


document.getElementById("search").addEventListener("keyup", displayDate);


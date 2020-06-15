// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


// find the place in the html
const topics = document.querySelector('.topics');

// get data
axios.get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
      response.data.topics.forEach(element => {
        const tabNew = newTab(element);
        topics.append(tabNew);
      });
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });

  // create new tab
  function newTab(data){

    const tab = document.createElement('div');

    tab.classList.add('tab');
    tab.classList.add(`${data}`)
    
    tab.textContent = data;


    // tab.addEventListener(click, event =>{

    // })
    return tab;
  }

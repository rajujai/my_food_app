function searchbox(){
    return `
    <div id="searchbox">
        <input oninput="throttleFunction()" type="text" id="query" placeholder="Search By Receipe Name">
        <div id="searchOptions"></div>
    </div>`;
}
export default searchbox;

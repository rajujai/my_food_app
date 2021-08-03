function navbar(){

    return `<div id="navbar">
    <h2><a href="index.html">My Food App</a></h2>
    
    <div class="options">
      <h3><a href="receipeOfDay.html">Receipe of the day</a></h3>
      <h3><a href="latestReceipe.html">Show latest receipe</a></h3>
      <h3><a href="#">Register</a></h3>
      <h3><a href="#">Login</a></h3>
    </div>
  </div>
  
  <div id="data"></div>

  `
}

export default navbar;
window.addEventListener('load', init);

function init(e) {

  var timeoutId = undefined;

  document.querySelector('#input-filter input').addEventListener('keydown', () => {
    /*
     * SKIP CHECKS AS THIS IS A DEMO PROJECT 
     * THIS IS A DIRTY, NON-OPTIMÖIZED, CONTRARILY A SLOW
     * METHOD JUST TO IMPLEMENT A QUICK SOLUTION
     * 
    */
    if( undefined != timeoutId )
    {
      clearTimeout(timeoutId);
      timeoutId = undefined;
    }
    timeoutId = setTimeout(filterCaptions, 500);
  });

  function filterCaptions() {
    clearTimeout(timeoutId);
    timeoutId = undefined;
    var searchTerm = document.querySelector('#input-filter input').value;
    document.querySelectorAll('#sidebar ul li a').forEach((node) => {
      if ( searchTerm.length > 0 && !node.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
        node.parentElement.classList.add('hidden');
      }
      else
      {
        node.parentElement.classList.remove('hidden');
        // a > li > ul > li;
        node.parentElement.parentElement.parentElement.classList.remove('hidden');
      }
    });
  }

  /*
   * Again Dirty but working solution ;)
  */  
  document.getElementById('toggle-menu').addEventListener('click', (e) => {
    var body = document.querySelector('body');
    if (body.classList.contains('expanded'))
    {
      body.classList.remove('expanded');
    }
    else
    {
      body.classList.add('expanded');
    }
  });

  document.getElementById('sidebar').addEventListener('click', (e) => {
    var body = document.querySelector('body');
    if (body.classList.contains('expanded') && e.target.nodeName == 'A')
    {
      body.classList.remove('expanded');
      location.hash = e.target.href;
    }

  });



}
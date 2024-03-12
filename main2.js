const tabitems=document.querySelectorAll('.tab-item');
const tabcontentitems=document.querySelectorAll('.tab-content-item');

// select tab content items
// when u run this code tab-border red color will be selected for tab-item class for all the 3 tabs we need to remove the tab border for other 2 so add remove border.
function selectItem(e){
    removeBorder();//this function gets invoked before adding border
    removeShow();//this removes the tab content which is show class
    this.classList.add('tab-border');
    //grab content item from DOM
   const tabcontentitems = document.querySelector(`#${this.id}-content`);
    //add the show class to show the matter in each tab content
    tabcontentitems.classList.add('show')
   
}
function removeBorder(){
    tabitems.forEach(item => item.classList.remove('tab-border'))
}
function removeShow(){
    tabcontentitems.forEach(item => item.classList.remove('show'));
}




// Add border to the current tab
// listen  for tab click  1st step
tabitems.forEach(item =>item.addEventListener('click',selectItem));

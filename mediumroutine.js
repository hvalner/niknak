 var colors = new Array;
        colors[0] = "red";
        colors[1] = "turquoise";
        colors[2] = "silver";
        colors[3] = "navy";
        colors[4] = "pink";
        colors[5] = "orange";
        colors[6] = "yellow";
        colors[7] = "green";
        
        //thenumber = Math.floor(Math.random()*8) 

   i = Math.random()*8;
    i = Math.floor(i); 

    
  $(document).ready(function(){
      
for(i=0; i < colors.length; i++){
     $(".target").on("dblclick", function(){
         $(this).css("backgroundColor", colors[Math.floor(Math.random()*8)]);
     }) 
      
  }
  
  });
    
 
    
interact('.target')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      var textEl = event.target.querySelector('p');

      textEl && (textEl.textContent =
        'moved a distance of '
        + (Math.sqrt(event.dx * event.dx +
                     event.dy * event.dy)|0) + 'px');
    }
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;
    

interact('.target')
  .on('tap', function (event) {
   
    event.currentTarget.classList.toggle('rotate');
    event.preventDefault();  
     
 }); 
    
/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */
    
    

// enable draggables to be dropped into this
interact('.like').dropzone({
  // only accept elements matching this CSS selector
  accept: '.target',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.50,

  // listen for drop related events:

  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active');
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        likeElement = event.target;

    // feedback the possibility of a drop
    likeElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');
    
  },
 
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active');
    event.target.classList.remove('drop-target');
  }
    
}); 
    
interact('.hate').dropzone({
  // only accept elements matching this CSS selector
  accept: '.target',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.50,

  // listen for drop related events:

  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active');
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        hateElement = event.target;

    // feedback the possibility of a drop
    hateElement.classList.add('drop-target');
    draggableElement.classList.add('hate-drop');
    
  },
 
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active');
    event.target.classList.remove('drop-target');
  }
});

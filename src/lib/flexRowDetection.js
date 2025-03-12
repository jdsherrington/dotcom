export function setFlexRowClasses(tagBoxeselector) {
  function identifyRowItems() {
    const tagBoxes = document.querySelectorAll(".tags-box");

	if (!tagBoxes) {
		return
	}
    // First check applies relevent row classes
    tagBoxes.forEach(tagBox => {
      const tags = tagBox.querySelectorAll('.card-tag');
      
      // Reset previous row classes
      tags.forEach(tag => {
        tag.classList.remove('row-1', 'row-2', 'row-3');
      });
      
      if (tags.length === 0) return;
      
      let prevTop = tags[0].getBoundingClientRect().top;
      let currentRow = 1;
      
      tags.forEach(tag => {
        const tagTop = tag.getBoundingClientRect().top;
        
        if (Math.abs(tagTop - prevTop) > 1) {
          currentRow++;
          prevTop = tagTop;
        }
        
        tag.classList.add(`row-${currentRow}`);
      });
    });

	// Second check applies borders depending on length of tag row
	tagBoxes.forEach(tagBox => {
      const tags = tagBox.querySelectorAll('.card-tag');
            
      if (tags.length === 0) return;
      
	
	  let rowLength = [];
	
	  for (i = 0; i < 10; i++) {
			tags.forEach(tag => {
					if (tag.classList.contains(`row-${i+1}`)) {
						rowLength[i] += tag.clientWidth;
					}
				})	
		};

	console.log("ROW 1: ", rowLength[0]);
	console.log("ROW 2: ", rowLength[1]);
	console.log("ROW 3: ", rowLength[2]);
	  
    });

  }
  
  // Initial detection on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', identifyRowItems);
  } else {
    identifyRowItems();
  }

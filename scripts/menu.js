function setMenuById(id, mode) {
  var el = document.getElementById(id);
  var nodeArray = el.childNodes;
  for(i=0; i < nodeArray.length; i++) {
    node = nodeArray[i];
    if (node.tagName && node.tagName.toLowerCase() == 'div') {
      var nodeArray2 = node.childNodes;
      for(j=0; j < nodeArray2.length; j++) {
        n2 = nodeArray2[j];
        if (n2.tagName && n2.tagName.toLowerCase() == 'img') {
          toggleImg(n2, mode);
        }
      }
    }
  }
}

function toggleImg(img, mode) {
  var ix  = img.src.indexOf('arrow');
  var ix1 = img.src.indexOf('arrow_closed.gif');
  var ix2 = img.src.indexOf('arrow_open.gif');
  
  if(mode == 'close') {
    setImg(img, ix, 'arrow_closed.gif', 'nrow1_closed');
  } else if(mode == 'open') {
    setImg(img, ix, 'arrow_open.gif', 'nrow1_open');
  } else {
    if(ix1 > -1) {
      setImg(img, ix1, 'arrow_open.gif', 'nrow1_open');
    } else {
      setImg(img, ix2, 'arrow_closed.gif', 'nrow1_closed');
    }
  }
}


function setImg(img, ix, imgName, mode) {
  img.src=img.src.substring(0, ix) + imgName;
  var node=img.parentNode.parentNode;
  var nodeArray = node.childNodes;
  for(i=1; i < nodeArray.length; i++) {
    node = nodeArray[i];
    if (node.tagName && node.tagName.toLowerCase() == 'div') {
      node.className = mode;
    }
  }
}


function clearText(field){
  
  if (field.defaultValue == field.value) {
    field.value = '';
    field.style.color = '#000000';
  } else if (field.value == '') {
    field.style.color = '#aaaaaa';
    field.value = field.defaultValue;
  } 
}

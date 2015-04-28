// Depending on the button clicked, various buttons will be displayed as "none"
// or "inline-block" to keep the formatting fluent.

// I tried using an array, but couldn't get it to work as well as this method.

// Remove Button onClick
function removeP() {
    var frame = document.getElementById("frame");
    frame.style.display="none";
}

// Next Button onClick
function nextP() {
    var frame = document.getElementById("frame");
    frame.src = 'https://www.youtube.com/embed/j6PbonHsqW0';
    
    var prev = document.getElementById("btnPrevious");
    prev.style.display="inline-block";
    
    var next = document.getElementById("btnNext");
    next.style.display="none";
    
    var remove = document.getElementById("btnRemove");
    remove.style.display="none";
    
    var replace = document.getElementById("btnReplace");
    replace.style.display="inline-block";
}

// Previous Button onClick
function prevP() {
    var frame = document.getElementById("frame");
    frame.src = 'https://www.youtube.com/embed/w9j3-ghRjBs';
    
    var prev = document.getElementById("btnPrevious");
    prev.style.display="none";
    
    var next = document.getElementById("btnNext");
    next.style.display="inline-block";
    
    var remove = document.getElementById("btnRemove");
    remove.style.display="inline-block";
}

// Replace Button onClick
function replaceP() {
    var frame = document.getElementById("frame");
    frame.src = 'https://www.youtube.com/embed/eu7k0kSvnUo';
    
    var prev = document.getElementById("btnPrevious");
    prev.style.display="inline-block";
    
    var next = document.getElementById("btnNext");
    next.style.display="inline-block";
    
    var remove = document.getElementById("btnRemove");
    remove.style.display="inline-block";
}
document.getElementById('downloadButton').addEventListener('click', function() {
  
    const cvUrl = 'https://drive.google.com/drive/folders/1mxwhA-M7t25DL3YpYZFiV9CJlORu-Ewn?usp=drive_link';

    
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'manu-hn-cv-frontend-dev.pdf'; 
    link.style.display = 'none';
    document.body.appendChild(link);

    link.click(); 
    document.body.removeChild(link); 
  });

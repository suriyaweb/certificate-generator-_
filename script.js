function generateCertificate() {
  // Get user input
  const name = document.getElementById('name').value || "[Name]";
  const course = document.getElementById('course').value || "[Course]";
  const date = document.getElementById('date').value || "[Date]";

  // Update the certificate content
  document.getElementById('name-placeholder').textContent = name;
  document.getElementById('course-placeholder').textContent = course;
  document.getElementById('date-placeholder').textContent = date;
}

function downloadCertificate() {
  const certificate = document.getElementById('certificate');
  
  // Use html2canvas to capture the certificate as an image
  html2canvas(certificate).then(canvas => {
    const link = document.createElement('a');
    link.download = 'certificate.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}


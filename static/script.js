function downloadResume(){
    var pdfDocument = 'ANNE WARIIYU NDUATI RESUME.pdf';
    var link = document.createElement('a')
    link.href = pdfDocument
    link.download = 'ANNE WARIIYU NDUATI RESUME.pdf';
    document.body.append(link)
    link.click();
    document.body.removeChild(link)
}
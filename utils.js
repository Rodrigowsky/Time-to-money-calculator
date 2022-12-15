function downloadPDFWithjsPDF() {
  let doc = new jspdf.jsPDF("p", "pt", "a4");
  doc.html(document.querySelector(".table_c"), {
    callback: function (doc) {
      doc.save("money_time_table.pdf");
    },
    margin: [20, 20, 20, 20],
    x: 100,
    y: 100,
  });
}
$(document).ready(function () {
  $.ajax({
    url: 'student.json', 
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      console.log(data);
      const student = data.student;
      $('#output').html(`<p>Name: ${student.name}</p>`);

      const output = `
        <p><strong>Name:</strong> ${student.name}</p>
        <p><strong>Age:</strong> ${student.age}</p>
        <p><strong>City:</strong> ${student.address.city}</p>
        <p><strong>Street:</strong> ${student.address.street}</p>
        <p><strong>Subjects:</strong> ${student.subjects.join(", ")}</p>
        <p><strong>Active:</strong> ${student.active}</p>
      `;
      $('#output').html(output);
    },
    error: function () {
      $('#output').html("<p style='color:red;'>Failed to load student data.</p>");
    }
  });
});






  

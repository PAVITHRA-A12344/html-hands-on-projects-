<head>
   <title>HTML Console</title>
</head>
<body>
   <h3> Output Console </h3>
   <p> Output: </p>
   <div id="output">
   </div>
   <div id="opError" style="color : #ff0000">
   </div>
   <script>
      var content = ''
      var error = ''
      var opDiv = document.querySelector('#output')
      var opErrDiv = document.querySelector('#opError')

      // actual javascript code
      try {
         var number = 52;
         var st = 'my_string';
         var student = {
            name: 'Smith',
            roll: 5,
            age: 23,
         };
         var arr = [15, null, 'another_string'];
         content += "Allocated memory for number: " + JSON.stringify(number) + '<br>'
         content += "Allocated memory for string: " + JSON.stringify(st) + '<br>'
         content += "Allocated memory for student: " + JSON.stringify(student) + '<br>'
         content += "Allocated memory for array: " + JSON.stringify(arr) + '<br>'
      } catch (err) {
         error += err
      } finally {
      
         // display on output console
         opDiv.innerHTML = content
         opErrDiv.innerHTML = error
      }
   </script>
</body>
</html>

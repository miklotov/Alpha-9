$('#submitBtn').on('click', function (e) {
    e.preventDefault()
    const data = {
        first_name: $('#first').val(),
        last_name: $('#last').val(),
        qty: parseInt($('#item').val()),
        item: $('#qty').val(),
        email: $('#email').val()
    }

    $.ajax({
        type: "POST",
        url: '/api/community',
        data: data,
      }).then(function(){
          location.reload()
      }).catch(function(err){
          throw err
      })
    console.log(data)
})

$('.deleteBtn').on('click', function (e) {
    e.preventDefault();
    var id = $(this).data("item");
    $.ajax({
        type: "DELETE",
        url: '/api/delete/'+ id     
      }).then(function(){
          location.reload()
      }).catch(function(err){
          throw err
      })
    console.log("delete button" + id);
})
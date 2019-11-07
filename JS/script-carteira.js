document.querySelector('#calendario1').value =new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear();
$('.input-group.date').datepicker({format: "dd/mm/yyyy"});

document.querySelector('#calendario2').value =(new Date().getDate()+1)+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear();
$('.input-group.date').datepicker({format: "dd/mm/yyyy"});


